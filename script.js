<script>
    // Initialize icons
    lucide.createIcons();
    
    // 1. MANUALLY SET THE COUNT
    // This is no longer connected to Discord. It will stay 140 forever.
    const memberElement = document.getElementById('member-count');
    if (memberElement) {
        memberElement.innerText = "140";
    }

    let cart = [];

    // 2. NAVIGATION LOGIC
    function showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(pageId);
        if (target) {
            target.classList.add('active');
        }
        window.scrollTo(0,0);
    }

    // 3. CART LOGIC (Fixed for Mobile)
    function addToCart(name, price, link) {
        cart.push({ name, price, link });
        document.getElementById('cart-count').innerText = cart.length;
        // Simple feedback so mobile users know it worked
        console.log(name + " added"); 
    }

    function toggleCart() {
        const panel = document.getElementById('cartPanel');
        if (panel) {
            panel.classList.toggle('open');
        }
    }
    
    // NOTE: Removed all fetch() and Discord API calls to prevent the number from changing.
</script>
