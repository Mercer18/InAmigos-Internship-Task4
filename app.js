document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. INITIALIZE LUCIDE ICONS ---
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // --- 1. DESIGN INSIGHTS OVERLAY TOGGLE ---
    const toggleBtn = document.getElementById('toggle-insights-btn');
    
    // Keep it on by default for mockup review
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

    // Toggle Frequency
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

    // Quick Select Buttons
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

    // Custom Input Input
    customAmountInput.addEventListener('input', () => {
        const value = parseFloat(customAmountInput.value) || 0;
        currentAmount = value;
        
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

    // Update UI based on calculations
    function updateDonationUI() {
        const amt = currentAmount <= 0 ? 0 : currentAmount;
        const suffix = donationFrequency === 'monthly' ? ' / Month' : '';
        btnDonateAction.textContent = `Donate $${amt.toLocaleString()}${suffix} Now`;

        // Exact outcomes formula from Figma React App: Math.floor(currentAmount / 5)
        const childrenCount = Math.floor(amt / 5);
        
        let outcome = "";
        let emoji = "🍚";

        if (amt === 0) {
            outcome = "Please enter a valid donation amount.";
            emoji = "🤍";
        } else if (childrenCount === 0) {
            outcome = `Provides emergency nourishment supplements to children in need${donationFrequency === 'monthly' ? ' every month' : ''}.`;
            emoji = "🍲";
        } else {
            outcome = `Provides <strong>${childrenCount} children</strong> with healthy meals for a full week${donationFrequency === 'monthly' ? ' every month' : ''}.`;
            emoji = "🍚";
        }

        impactOutcomeText.innerHTML = outcome;
        impactIcon.textContent = emoji;
    }

    // --- 3. CAMPAIGNS PROGRESS BAR ANIMATION ---
    const progressFills = document.querySelectorAll('.progress-bar-fill');
    setTimeout(() => {
        progressFills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-progress') || '0';
            fill.style.width = `${targetWidth}%`;
        });
    }, 400);

    // --- 4. HERO COUNTER ANIMATION ---
    const metricLives = document.getElementById('metric-lives');
    if (metricLives) {
        let count = 13500;
        const target = 15400;
        const speed = 15;
        
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
        setTimeout(countUp, 600);
    }
});
