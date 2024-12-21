<script>
 document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Velocità di animazione

    counters.forEach(counter => {
       const updateCount = () => {
           const target = parseFloat(counter.getAttribute('data-target')); // Converte stringa in float
           const count = parseFloat(counter.innerText.replace('$', '')); // Converte stringa in float e rimuove $
            const inc = target / speed;

          if (count < target) {
                const newCount = Math.min(target, count + inc)
                 counter.innerText = `$${newCount.toFixed(6)}` // Per visualizzare 6 decimali
                 setTimeout(updateCount, 1);
           } else {
                counter.innerText = `$${target.toFixed(6)}`;
           }
        };
      updateCount();
     });
 });
</script>
