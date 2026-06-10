//js/main.js

// Al cargar la página, muestra el modal de bienvenida
window.addEventListener('load', () => {
    toggleWelcomeModal(); 
  });
  
  function toggleWelcomeModal() {
    const modal = document.getElementById('hero-section');
    if (modal.classList.contains('hidden')) {
      // Si está escondido, lo hacemos visible
      modal.classList.remove('hidden');
      // Pequeño delay para que la transición de CSS funcione
      setTimeout(() => {
        modal.classList.add('visible');
      }, 10);
    } else {
      // Si está visible, lo escondemos
      modal.classList.remove('visible');
      // Esperamos a que termine la transición y luego lo ocultamos con display:none
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 400); 
    }
  }
  
  function openWinery(idx) {
    const w = wineries[idx];
    document.getElementById('wineryName').textContent = w.name;
    document.getElementById('wineryBadge').textContent = w.badge;
    document.getElementById('wineryDesc').textContent = w.desc;
    document.getElementById('wineryHeroImg').style.background = w.color;
  
    const metaEl = document.getElementById('wineryMeta');
    metaEl.innerHTML = w.meta.map((m, i) => `<span class="meta-tag${i===0?' highlight':''}">${m}</span>`).join('');
  
    const certsEl = document.getElementById('wineryCerts');
    const certMap = {eco:'🌿 Ecológica', bio:'🌀 Biodinámica', tur:'🏛 Enoturismo'};
    const certClass = {eco:'eco', bio:'bio', tur:'tur'};
    certsEl.innerHTML = w.certs.map(c=>`<span class="cert-badge ${certClass[c]}">${certMap[c]}</span>`).join('');
  
    document.getElementById('winery-panel').classList.add('open');
    document.querySelectorAll('.pin').forEach(p=>p.classList.remove('active'));
  }
  
  function closePanel() {
    document.getElementById('winery-panel').classList.remove('open');
  }
  
  function toggleChip(el) {
    el.classList.toggle('active');
  }
  
  function filterPins(val) {
    const count = val ? Math.max(1, Math.floor(3247 * (1 - val.length * 0.05))) : 3247;
    document.getElementById('visibleCount').textContent = count.toLocaleString('es');
  }
  
  function filterByDisc(type) {
    const map = {new:47, growing:132, hidden:380};
    document.getElementById('visibleCount').textContent = map[type].toLocaleString('es');
  }
  
  function showPricing() {
    // Oculta el modal de bienvenida si está abierto
    const welcomeModal = document.getElementById('hero-section');
    if (welcomeModal.classList.contains('visible')) {
      toggleWelcomeModal();
    }
    
    // Oculta el mapa
    document.getElementById('app').style.display = 'none';
    
    // Muestra la sección de precios
    const ps = document.getElementById('pricing-section');
    ps.style.display = 'block';
    setTimeout(()=>ps.classList.add('visible'), 10);
    
    // Muestra el botón de volver
    document.getElementById('backBtn').classList.add('visible');
  }
  
  function goBack() {
    // Oculta precios
    document.getElementById('pricing-section').classList.remove('visible');
    document.getElementById('pricing-section').style.display = 'none';
    
    // Muestra el mapa
    document.getElementById('app').style.display = 'flex';
    
    // Oculta el botón de volver
    document.getElementById('backBtn').classList.remove('visible');
  }
  
  // Previene que los enlaces del menú recarguen la página
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
  });