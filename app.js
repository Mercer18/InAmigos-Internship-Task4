document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DESIGN INSIGHTS OVERLAY TOGGLE ---
    const toggleBtn = document.getElementById('toggle-insights-btn');
    
    // Turn on by default so they see the insights immediately
    document.body.classList.add('insights-active');
    toggleBtn.classList.add('active');

    toggleBtn.addEventListener('click', () => {
        const isActive = document.body.classList.toggle('insights-active');
        toggleBtn.classList.toggle('active', isActive);
    });

    // --- 2. DONATION WIDGET INTERACTIONS ---
    const btnOnce = document.getElementById('btn-once');
    const btnMonthly = document.getElementById('btn-monthly');
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('custom-amount');
    const impactOutcomeText = document.getElementById('impact-outcome-text');
    const btnDonateAction = document.getElementById('btn-donate-action');
    const impactIcon = document.querySelector('.impact-icon');

    let donationFrequency = 'once'; // 'once' or 'monthly'
    let currentAmount = 25;

    // Toggle Frequency buttons
    btnOnce.addEventListener('click', () => {
        donationFrequency = 'once';
        btnOnce.classList.add('active');
        btnMonthly.classList.remove('active');
        updateDonationUI();
    });

    btnMonthly.addEventListener('click', () => {
        donationFrequency = 'monthly';
        btnMonthly.classList.add('active');
        btnOnce.classList.remove('active');
        updateDonationUI();
    });

    // Quick-select Amount buttons
    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const value = parseInt(btn.getAttribute('data-value'), 10);
            customAmountInput.value = value;
            currentAmount = value;
            updateDonationUI();
        });
    });

    // Custom Amount Input listener
    customAmountInput.addEventListener('input', () => {
        const value = parseFloat(customAmountInput.value) || 0;
        currentAmount = value;
        
        // Remove active class from buttons if value doesn't match
        amountBtns.forEach(btn => {
            const btnVal = parseInt(btn.getAttribute('data-value'), 10);
            if (btnVal === value) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        updateDonationUI();
    });

    // Recalculate and update the outcomes
    function updateDonationUI() {
        // Limit minimum values for donation logic
        const amt = currentAmount <= 0 ? 0 : currentAmount;
        
        // Button text dynamic layout
        const suffix = donationFrequency === 'monthly' ? ' / Month' : '';
        btnDonateAction.textContent = `Donate $${amt.toLocaleString()}${suffix} Now`;

        // Calculate impact text descriptions
        let outcome = "";
        let emoji = "";

        if (amt === 0) {
            outcome = "Please choose or input a valid donation amount.";
            emoji = "🤍";
        } else if (amt < 10) {
            outcome = "Thank you! Every dollar helps purchase vital resources on the ground.";
            emoji = "❤️";
        } else if (amt >= 10 && amt < 25) {
            outcome = `Provides a child with educational notebooks, pens, and a backpack for a school term${donationFrequency === 'monthly' ? ' every month' : ''}.`;
            emoji = "🎒";
        } else if (amt >= 25 && amt < 50) {
            outcome = `Provides 5 underprivileged children with healthy, warm lunches for a full week${donationFrequency === 'monthly' ? ' every month' : ''}.`;
            emoji = "🍲";
        } else if (amt >= 50 && amt < 100) {
            outcome = `Installs clean water filter systems that provide pure water to a local family of four for one full year.`;
            emoji = "💧";
        } else {
            outcome = `Funds a computer literacy scholarship for one student, covering internet access, training workshops, and device usage.`;
            emoji = "💻";
        }

        impactOutcomeText.textContent = outcome;
        impactIcon.textContent = emoji;
    }

    // --- 3. CAMPAIGNS PROGRESS BAR ANIMATION ---
    const progressFills = document.querySelectorAll('.progress-bar-fill');
    
    // Animate on load (with delay) to display smooth UI transitions
    setTimeout(() => {
        progressFills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-progress') || '0';
            fill.style.width = `${targetWidth}%`;
        });
    }, 400);


    // --- 4. COUNTER ANIMATION IN HERO SECTION (OPTIONAL Polish) ---
    const metricLives = document.getElementById('metric-lives');
    if (metricLives) {
        let count = 13500;
        const target = 15420;
        const speed = 15; // lower is faster
        
        const countUp = () => {
            const increment = Math.ceil((target - count) / 10);
            if (count < target) {
                count += increment;
                metricLives.textContent = count.toLocaleString() + "+";
                setTimeout(countUp, speed);
            } else {
                metricLives.textContent = target.toLocaleString() + "+";
            }
        };
        
        // Delay the start of numerical increment counts
        setTimeout(countUp, 600);
    }
});
