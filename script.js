// ORBISX Mission Control JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initMissionDashboard();
    initOrbitalNavigator();
    initCommandConsole();
    initCommsHub();
    initMissionGallery();
    initAIEngine();
    initStructuralAlignment();

    // Start all data updates
    startDataUpdates();
});

// ======================
// NAVIGATION & UI HELPERS
// ======================
function initNavigation() {
    // Mobile menu toggle
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.getElementById('nav-links').classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// ======================
// MISSION DASHBOARD
// ======================
function initMissionDashboard() {
    // Create starfield background
    createStarfield('.dashboard-overlay');

    // Add hover effects to metric cards
    document.querySelectorAll('.metric-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.querySelector('.card-icon').style.transform = 'scale(1.1)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.querySelector('.card-icon').style.transform = '';
        });
    });

    // CTA button effect
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'translateY(-2px) scale(1.02)';
    });
    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = '';
    });
    ctaButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Launching Control Panel...');
    });
}

function createStarfield(containerSelector) {
    const container = document.querySelector(containerSelector);
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite alternate`;
        container.appendChild(star);
    }
}

// ======================
// ORBITAL NAVIGATOR
// ======================
function initOrbitalNavigator() {
    // Connect sliders to value displays
    document.querySelectorAll('.space-slider').forEach(slider => {
        const valueDisplay = slider.parentElement.querySelector('.value');
        valueDisplay.textContent = slider.value;
        
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value;
            if (this.id === 'altitude-slider') {
                valueDisplay.textContent += ' km';
            } else if (this.id === 'thrust-slider') {
                valueDisplay.textContent += '%';
            }
        });
    });

    // Simulate button actions
    document.querySelector('.btn.primary').addEventListener('click', function() {
        alert('Running orbital simulation with current parameters...');
    });
    
    document.querySelector('.btn.secondary').addEventListener('click', function() {
        document.querySelectorAll('.space-slider').forEach(slider => {
            slider.value = slider.defaultValue;
            const valueDisplay = slider.parentElement.querySelector('.value');
            valueDisplay.textContent = slider.value;
        });
    });
}

// ======================
// COMMAND & CONTROL CONSOLE
// ======================
function initCommandConsole() {
    // Command button effects
    document.querySelectorAll('.cmd-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        btn.addEventListener('click', function() {
            const action = this.querySelector('i').className.split(' ')[1];
            console.log(`Command sent: ${action}`);
        });
    });

    // Emergency override toggle
    const emergencyToggle = document.querySelector('.emergency-control input');
    const emergencyBtn = document.querySelector('.emergency-btn');
    
    emergencyToggle.addEventListener('change', function() {
        emergencyBtn.disabled = !this.checked;
    });
    
    emergencyBtn.addEventListener('click', function() {
        alert('EMERGENCY OVERRIDE ACTIVATED!');
    });
}

// ======================
// COMMS HUB
// ======================
function initCommsHub() {
    // Animate connection line
    const connectionLine = document.querySelector('.connection-line');
    if (connectionLine) {
        setInterval(() => {
            connectionLine.style.background = `linear-gradient(90deg, 
                transparent, 
                ${Math.random() > 0.5 ? '#00f5ff' : '#b517ff'}, 
                transparent)`;
        }, 3000);
    }

    // Signal wave animation
    const signalWave = document.querySelector('.signal-wave');
    if (signalWave) {
        setInterval(() => {
            const height = Math.random() * 30 + 10;
            signalWave.style.height = `${height}px`;
        }, 500);
    }
}

// ======================
// MISSION GALLERY
// ======================
function initMissionGallery() {
    // Mission card interactions
    document.querySelectorAll('.mission-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        card.addEventListener('click', function() {
            const mission = this.querySelector('h2').textContent;
            alert(`Loading detailed view for ${mission}`);
        });
    });

    // Education zone buttons
    document.querySelector('.edu-btn').addEventListener('click', function() {
        alert('Opening education resources...');
    });
}

// ======================
// AI ENGINE
// ======================
function initAIEngine() {
    // AI decision interactions
    document.querySelectorAll('.ai-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            console.log(`AI action: ${action}`);
        });
    });

    // Simulate anomaly detection updates
    setInterval(() => {
        const alerts = document.querySelectorAll('.anomaly-alert');
        alerts.forEach(alert => {
            const severity = alert.classList.contains('critical') ? 'CRITICAL' : 'WARNING';
            const timestamp = new Date().toLocaleTimeString();
            alert.querySelector('.timestamp').textContent = `Detected at ${timestamp}`;
        });
    }, 10000);
}

// ======================
// STRUCTURAL ALIGNMENT
// ======================
function initStructuralAlignment() {
    // Add interaction to flow groups
    document.querySelectorAll('.flow-group').forEach(group => {
        group.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
}

// ======================
// DATA UPDATES
// ======================
function startDataUpdates() {
    // Update mission dashboard metrics
    setInterval(updateDashboardMetrics, 3000);
    
    // Update command console telemetry
    setInterval(updateTelemetry, 2000);
    
    // Update AI predictions
    setInterval(updateAIPredictions, 5000);
}

function updateDashboardMetrics() {
    const metrics = [
        { selector: '.metric-card:nth-child(1) .metric-value', min: 10, max: 15, unit: '' },
        { selector: '.metric-card:nth-child(2) .metric-value', min: 92, max: 100, unit: '%' },
        { selector: '.metric-card:nth-child(3) .metric-value', min: 0.01, max: 0.05, unit: '°', decimals: 2 },
        { selector: '.metric-card:nth-child(4) .metric-value', min: 75, max: 90, unit: '%' }
    ];

    metrics.forEach(metric => {
        const element = document.querySelector(metric.selector);
        let value;
        
        if (metric.decimals) {
            value = (Math.random() * (metric.max - metric.min) + metric.min).toFixed(metric.decimals);
        } else {
            value = Math.floor(Math.random() * (metric.max - metric.min + 1) + metric.min;
        }
        
        if (element.textContent !== value + metric.unit) {
            element.style.transform = 'scale(1.2)';
            element.style.color = '#00f5ff';
            
            setTimeout(() => {
                element.textContent = value + metric.unit;
                element.style.transform = '';
                element.style.color = '';
            }, 300);
        }
    });
}

function updateTelemetry() {
    const telemetry = [
        { selector: '.telemetry-card:nth-child(1) .telemetry-value', min: 95, max: 100, unit: '%' },
        { selector: '.telemetry-card:nth-child(2) .telemetry-value', min: 35, max: 45, unit: '°C' },
        { selector: '.telemetry-card:nth-child(3) .telemetry-value', min: 12000, max: 13000, unit: '' },
        { selector: '.telemetry-card:nth-child(4) .telemetry-value', min: 70, max: 80, unit: '%' },
        { selector: '.telemetry-card:nth-child(5) .telemetry-value', min: 0.01, max: 0.03, unit: '°', decimals: 2 },
        { selector: '.telemetry-card:nth-child(6) .telemetry-value', min: 95, max: 99, unit: '%' }
    ];

    telemetry.forEach(item => {
        const element = document.querySelector(item.selector);
        let value;
        
        if (item.decimals) {
            value = (Math.random() * (item.max - item.min) + item.min).toFixed(item.decimals);
        } else {
            value = Math.floor(Math.random() * (item.max - item.min + 1) + item.min);
        }
        
        element.textContent = value + item.unit;
    });

    // Add random log entry
    const logMessages = [
        "Navigation check complete",
        "Thermal regulation nominal",
        "Power distribution optimized",
        "Communication link verified",
        "Science instruments collecting data",
        "Attitude control active"
    ];
    
    const logEntry = document.createElement('div');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = `<span class="timestamp">[${new Date().toLocaleTimeString()}]</span> ${logMessages[Math.floor(Math.random() * logMessages.length)]}`;
    
    const logContainer = document.querySelector('.log-entries');
    logContainer.prepend(logEntry);
    
    // Keep only the last 5 entries
    while (logContainer.children.length > 5) {
        logContainer.removeChild(logContainer.lastChild);
    }
}

function updateAIPredictions() {
    const confidenceElements = document.querySelectorAll('.confidence');
    confidenceElements.forEach(el => {
        const newConfidence = (Math.random() * 5 + 95).toFixed(1) + '%';
        el.textContent = newConfidence;
    });

    // Update prediction graph
    const predictionGraph = document.querySelector('.prediction-graph');
    if (predictionGraph) {
        predictionGraph.style.background = `linear-gradient(to right, 
            #00f5ff ${Math.random() * 50 + 25}%, 
            #b517ff ${Math.random() * 50 + 50}%)`;
    }
}

// Initialize animations
function initAnimations() {
    // Add any additional animations here
}

// Start the application
initAnimations();

function testSliders() {
    const sliders = document.querySelectorAll('.space-slider');
    console.log(`Found ${sliders.length} sliders`);
    
    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
            console.log(`${this.id} value:`, this.value);
        });
    });
}
testSliders();

function testDashboard() {
    console.log("Testing dashboard...");
    const cards = document.querySelectorAll('.metric-card');
    console.log(`Found ${cards.length} metric cards`);
    
    cards.forEach((card, i) => {
        card.style.border = "2px solid red"; // Visual test
        console.log(`Card ${i+1}:`, card);
    });
}
testDashboard();
