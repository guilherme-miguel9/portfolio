/* Interactive Neural Network Background & ML Simulator Logic */

// ==========================================
// 1. NEURAL NETWORK BACKGROUND CANVAS
// ==========================================

const initNetworkBackground = () => {
    const canvas = document.getElementById("network-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId = null;
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    };

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.vx = (Math.random() - 0.5) * 0.6;
            this.vy = (Math.random() - 0.5) * 0.6;
            this.radius = Math.random() * 2 + 1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 232, 252, 0.4)";
            ctx.fill();
        }

        update() {
            // Bounce on boundaries
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

            // Move
            this.x += this.vx;
            this.y += this.vy;

            // Mouse interaction (push away gently)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x += Math.cos(angle) * force * 1.5;
                    this.y += Math.sin(angle) * force * 1.5;
                }
            }
        }
    }

    const initParticles = () => {
        particles = [];
        // Scale number of particles with screen size
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 120);
        for (let i = 0; i < count; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            particles.push(new Particle(x, y));
        }
    };

    const drawConnections = () => {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 110) {
                    const alpha = (110 - dist) / 110 * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 232, 252, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Background base radial gradient
        const grad = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 10,
            canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
        );
        grad.addColorStop(0, '#0a1128');
        grad.addColorStop(0.5, '#050b18');
        grad.addColorStop(1, '#02050b');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();
        animationId = requestAnimationFrame(animate);
    };

    // Event Listeners
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Startup
    resizeCanvas();
    animate();
};


// ==========================================
// 2. INTERACTIVE ML PLAYGROUND SIMULATOR
// ==========================================

const initMLPlayground = () => {
    // UI elements
    const btnTrain = document.getElementById("btn-train");
    const modelType = document.getElementById("model-type");
    const learningRate = document.getElementById("learning-rate");
    const epochsSelect = document.getElementById("epochs");
    const noiseLevel = document.getElementById("noise-level");
    const noiseVal = document.getElementById("noise-val");

    const statusPonto = document.getElementById("status-ponto");
    const statusTexto = document.getElementById("status-texto");
    const epochCounter = document.getElementById("epoch-counter");
    const valLoss = document.getElementById("val-loss");
    const valAccuracy = document.getElementById("val-accuracy");

    const chartCanvas = document.getElementById("loss-chart");
    if (!chartCanvas) return;

    const ctx = chartCanvas.getContext("2d");
    let isTraining = false;
    let trainingInterval = null;
    
    // Arrays containing metrics over epochs
    let lossHistory = [];
    let accuracyHistory = [];

    // Update noise label text on drag
    noiseLevel.addEventListener("input", (e) => {
        noiseVal.textContent = `${e.target.value}%`;
    });

    // Render static or dynamic charts
    const drawChart = (currentEpoch, maxEpochs) => {
        const width = chartCanvas.width = chartCanvas.clientWidth * window.devicePixelRatio;
        const height = chartCanvas.height = chartCanvas.clientHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        const logicalWidth = chartCanvas.clientWidth;
        const logicalHeight = chartCanvas.clientHeight;

        ctx.clearRect(0, 0, logicalWidth, logicalHeight);

        // Chart margins
        const paddingLeft = 45;
        const paddingRight = 45;
        const paddingTop = 20;
        const paddingBottom = 30;
        const graphWidth = logicalWidth - paddingLeft - paddingRight;
        const graphHeight = logicalHeight - paddingTop - paddingBottom;

        // 1. Draw Grid Lines & Axes
        ctx.strokeStyle = "rgba(22, 34, 63, 0.6)";
        ctx.lineWidth = 1;
        ctx.font = "10px 'Fira Code', monospace";
        ctx.fillStyle = "#94a3b8";

        // Vertical Grid & Epoch Labels
        const gridXCount = 5;
        for (let i = 0; i <= gridXCount; i++) {
            const ratio = i / gridXCount;
            const x = paddingLeft + ratio * graphWidth;
            
            // Draw grid line
            ctx.beginPath();
            ctx.setLineDash([4, 4]);
            ctx.moveTo(x, paddingTop);
            ctx.lineTo(x, paddingTop + graphHeight);
            ctx.stroke();

            // Label
            const epochLabel = Math.round(ratio * maxEpochs);
            ctx.textAlign = "center";
            ctx.fillText(epochLabel, x, paddingTop + graphHeight + 16);
        }

        // Horizontal Grid (4 levels)
        const gridYCount = 4;
        for (let i = 0; i <= gridYCount; i++) {
            const ratio = i / gridYCount;
            const y = paddingTop + ratio * graphHeight;

            ctx.beginPath();
            ctx.setLineDash([4, 4]);
            ctx.moveTo(paddingLeft, y);
            ctx.lineTo(paddingLeft + graphWidth, y);
            ctx.stroke();

            // Left Label (Loss Scale: 0.0 to 2.0)
            const lossVal = ((1 - ratio) * 2.0).toFixed(1);
            ctx.textAlign = "right";
            ctx.fillStyle = "rgba(239, 68, 68, 0.85)"; // Reddish
            ctx.fillText(lossVal, paddingLeft - 8, y + 4);

            // Right Label (Accuracy Scale: 0% to 100%)
            const accVal = Math.round((1 - ratio) * 100) + "%";
            ctx.textAlign = "left";
            ctx.fillStyle = "rgba(0, 232, 252, 0.85)"; // Cyan
            ctx.fillText(accVal, paddingLeft + graphWidth + 8, y + 4);
        }

        ctx.setLineDash([]); // Reset dash

        // Draw Axes Labels
        ctx.font = "9px 'Plus Jakarta Sans', sans-serif";
        ctx.fillStyle = "#94a3b8";
        ctx.textAlign = "center";
        ctx.fillText("Épocas de Treinamento", paddingLeft + graphWidth / 2, paddingTop + graphHeight + 28);

        // 2. Draw Loss Curve (Red/Orange)
        if (lossHistory.length > 0) {
            ctx.beginPath();
            ctx.strokeStyle = "#ef4444";
            ctx.lineWidth = 2.5;
            for (let i = 0; i < lossHistory.length; i++) {
                const ratioX = maxEpochs > 1 ? i / (maxEpochs - 1) : 0;
                const x = paddingLeft + ratioX * graphWidth;
                
                // Loss capped at 2.0 max in view
                const cappedLoss = Math.min(lossHistory[i], 2.0);
                const ratioY = cappedLoss / 2.0; 
                const y = paddingTop + graphHeight - ratioY * graphHeight;

                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        // 3. Draw Accuracy Curve (Cyan)
        if (accuracyHistory.length > 0) {
            ctx.beginPath();
            ctx.strokeStyle = "#00e8fc";
            ctx.lineWidth = 2.5;
            for (let i = 0; i < accuracyHistory.length; i++) {
                const ratioX = maxEpochs > 1 ? i / (maxEpochs - 1) : 0;
                const x = paddingLeft + ratioX * graphWidth;
                
                const ratioY = accuracyHistory[i]; // accuracy is 0.0 to 1.0
                const y = paddingTop + graphHeight - ratioY * graphHeight;

                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
    };

    // Calculate simulated step training metrics
    const getTrainingStepMetrics = (model, lr, noise, epoch, totalEpochs) => {
        let loss, acc;
        const progress = epoch / totalEpochs;
        
        // Base formulas depending on models (introducing realistic math variations)
        if (model === "neural_network") {
            // MLP converging exponentially with slight noise fluctuations
            // If learning rate is too high (0.5), it oscillates heavily
            let lrFactor = 1.0;
            let instability = 0;
            if (lr === 0.5) {
                lrFactor = 0.4; // converged poorly
                instability = Math.sin(epoch * 0.8) * 0.15; // heavy jitter
            } else if (lr === 0.001) {
                lrFactor = 0.55; // too slow to converge fully in 100/200 epochs
            }

            const baseLoss = 1.7 * Math.exp(-progress * 3.2 * lrFactor) + 0.1;
            const noiseJitter = (Math.random() - 0.5) * (noise / 100) * 0.15;
            loss = Math.max(0.04, baseLoss + noiseJitter + instability);

            const baseAcc = 0.35 + 0.62 * (1 - Math.exp(-progress * 4.0 * lrFactor));
            const accJitter = (Math.random() - 0.5) * (noise / 100) * 0.08;
            acc = Math.min(0.99, Math.max(0.2, baseAcc + accJitter + instability * 0.5));
            
        } else if (model === "random_forest") {
            // Random forest jumps fast (step function style) then plateaus
            // Noise level reduces the plateau maximum
            const lrFactor = lr === 0.5 ? 0.8 : lr === 0.001 ? 0.5 : 1.0; // RF handles high LR better than MLP
            const stepProgress = Math.pow(progress, 0.4); // fast early learning
            
            const maxAcc = 0.95 - (noise / 100) * 0.3;
            const baseAcc = 0.3 + (maxAcc - 0.3) * stepProgress;
            const jitter = (Math.random() - 0.5) * 0.02;
            acc = Math.min(maxAcc + 0.02, Math.max(0.3, baseAcc + jitter));

            const baseLoss = 1.5 * Math.exp(-stepProgress * 4.0 * lrFactor) + 0.05;
            loss = Math.max(0.03, baseLoss + (Math.random() - 0.5) * 0.03);

        } else {
            // Linear regression: Converges instantly, but limited capability (underfitting)
            const lrFactor = lr === 0.5 ? 0.3 : lr === 0.001 ? 0.4 : 1.0;
            const fastProgress = 1 - Math.exp(-progress * 6 * lrFactor);
            
            const maxAcc = 0.76 - (noise / 100) * 0.25;
            acc = 0.35 + (maxAcc - 0.35) * fastProgress + (Math.random() - 0.5) * 0.02;

            const minLoss = 0.45 + (noise / 100) * 0.5;
            loss = minLoss + (1.3 - minLoss) * (1 - fastProgress) + (Math.random() - 0.5) * 0.04;
        }

        return { loss, acc };
    };

    const runTraining = () => {
        if (isTraining) return;

        // Lock inputs & states
        isTraining = true;
        btnTrain.disabled = true;
        btnTrain.textContent = "Treinando...";
        btnTrain.style.opacity = "0.7";
        btnTrain.style.cursor = "not-allowed";

        statusPonto.className = "status-ponto training";
        statusTexto.textContent = "Treinando modelo...";

        const model = modelType.value;
        const lr = parseFloat(learningRate.value);
        const epochs = parseInt(epochsSelect.value);
        const noise = parseInt(noiseLevel.value);

        // Reset history
        lossHistory = [];
        accuracyHistory = [];
        
        let currentEpoch = 0;

        // Custom step intervals (dynamic based on total epochs to keep simulation around 4-5s total)
        const stepDelay = Math.max(15, Math.min(50, 4000 / epochs));

        trainingInterval = setInterval(() => {
            currentEpoch++;
            
            // Calculate step values
            const { loss, acc } = getTrainingStepMetrics(model, lr, noise, currentEpoch, epochs);
            
            lossHistory.push(loss);
            accuracyHistory.push(acc);

            // Update UI Counters
            epochCounter.textContent = `Epoch: ${currentEpoch}/${epochs}`;
            valLoss.textContent = loss.toFixed(4);
            valAccuracy.textContent = (acc * 100).toFixed(1) + "%";

            // Repaint Chart
            drawChart(currentEpoch, epochs);

            // End training
            if (currentEpoch >= epochs) {
                clearInterval(trainingInterval);
                isTraining = false;
                
                // Unlock interface
                btnTrain.disabled = false;
                btnTrain.textContent = "Iniciar Treinamento";
                btnTrain.style.opacity = "1";
                btnTrain.style.cursor = "pointer";

                statusPonto.className = "status-ponto complete";
                
                // Show final result statement
                const finalAcc = (acc * 100).toFixed(1);
                if (acc > 0.90) {
                    statusTexto.textContent = `Modelo treinado com sucesso! Acurácia: ${finalAcc}% (Excelente)`;
                } else if (acc > 0.75) {
                    statusTexto.textContent = `Modelo converge. Acurácia: ${finalAcc}% (Adequado)`;
                } else {
                    statusTexto.textContent = `Treinamento finalizado. Acurácia: ${finalAcc}% (Alerta de Subajuste)`;
                }
            }
        }, stepDelay);
    };

    btnTrain.addEventListener("click", runTraining);

    // Initial render of empty chart layout
    drawChart(0, parseInt(epochsSelect.value));

    // Re-draw chart on window resize to ensure correct canvas scaling
    window.addEventListener("resize", () => {
        drawChart(lossHistory.length, parseInt(epochsSelect.value));
    });
};

// ==========================================
// 3. INITIALIZATION CONTROLLER
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initNetworkBackground();
    initMLPlayground();
});
