/* Progressive enhancement: all project links and native video controls work without JS. */
(() => {
  'use strict';
  document.documentElement.classList.remove('no-js');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  if (menuButton && menu) {
    const closeMenu = () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = 'Menu +'; };
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menu.classList.toggle('is-open', open); menuButton.setAttribute('aria-expanded', String(open)); menuButton.textContent = open ? 'Close -' : 'Menu +';
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
    document.addEventListener('click', e => { if (!menu.contains(e.target) && !menuButton.contains(e.target)) closeMenu(); });
    window.matchMedia('(min-width: 681px)').addEventListener('change', closeMenu);
  }
  const sceneImage = document.getElementById('scene-image');
  const sceneTitle = document.getElementById('scene-title');
  const sceneDetail = document.getElementById('scene-detail');
  const scenes = {
    steeped: { image:'assets/images/steeped-7.webp', name:'Steeped', detail:'UNITY 6 / C# / 2D', alt:'Steeped gameplay: a pixel-art tea house, paths and a player character.' },
    wildblocks: { image:'assets/images/wildblocks.webp', name:'Wildblocks', detail:'3D / BOSS ENCOUNTER', alt:'Wildblocks gameplay: the player faces a red-winged dragon in a stone arena.' },
    'mine-and-grind': { image:'assets/images/mine-and-grind.webp', name:'MINE AND GRIND', detail:'ROBLOX / MINING PROTOTYPE', alt:'MINE AND GRIND gameplay: a player and dragon companion in a grassy mine environment.' }
  };
  document.querySelectorAll('[data-scene]').forEach(button => button.addEventListener('click', () => {
    const item = scenes[button.dataset.scene]; if (!item || !sceneImage) return;
    sceneImage.src = item.image; sceneImage.alt = item.alt; sceneTitle.textContent = item.name; sceneDetail.textContent = item.detail;
    document.querySelectorAll('[data-scene]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  }));
  const clips = {
    reel: { file:'showreel', poster:'steeped-7', label:'SELECTED GAMEPLAY / 00:48', description:'A quick look at Wildblocks combat, Steeped movement, and MINE AND GRIND exploration. Edited from development captures; silent.', transcript:'0:00-0:16: A Wildblocks dragon encounter with character movement, attacks and ability feedback. 0:16-0:32: A Steeped player moves around a pixel-art tea-house environment while the camera follows. 0:32-0:48: A MINE AND GRIND avatar and companion move through a mine environment toward a resource.' },
    wildblocks: { file:'wildblocks', poster:'wildblocks', label:'WILDBLOCKS / 01:20', description:'An encounter from the browser-based prototype: entering the arena, engaging the dragon, and the encounter conclusion. Silent gameplay capture.', transcript:'The player enters an arena, approaches a dragon, moves around it, and activates abilities from the action bar. Damage numbers and ability feedback appear. The dragon falls and an encounter-completion message appears. The capture is labeled as solo play.' },
    steeped: { file:'steeped', poster:'steeped-7', label:'STEEPED / 00:34', description:'Movement, directional animation and camera follow in the Unity prototype. This particular clip does not demonstrate mining, attacks or abilities. Silent gameplay capture.', transcript:'A small player character walks around a pixel-art tea-house and farm environment. The camera follows the player through direction changes, and the character returns to idle when movement stops.' },
    'mine-and-grind': { file:'mine-and-grind', poster:'mine-and-grind', label:'MINE AND GRIND / 00:55', description:'A Roblox Studio playtest showing traversal, a following companion, the progression interface and an approach to a mining resource. Silent gameplay capture.', transcript:'A Roblox avatar moves through a grassy mine environment with a dragon companion. The interface shows level, currency, experience, and Bag, Quest, Pets and Perks buttons. The player approaches an ore resource near the end of the clip.' }
  };
  const player = document.getElementById('reel-player');
  const tabs = Array.from(document.querySelectorAll('[data-clip]'));
  const activate = button => {
    const item = clips[button.dataset.clip]; if (!item || !player) return;
    const errorNote = player.closest('.video-frame')?.nextElementSibling;
    if (errorNote?.classList.contains('video-error')) errorNote.hidden = true;
    player.pause(); player.src = 'assets/video/' + item.file + '.mp4'; player.poster = 'assets/images/' + item.poster + '.webp';
    player.setAttribute('aria-label', item.description); player.load();
    document.getElementById('clip-title').textContent = item.label;
    document.getElementById('clip-description').textContent = item.description;
    document.getElementById('clip-transcript').textContent = item.transcript;
    tabs.forEach(t => { const selected = t === button; t.setAttribute('aria-selected', String(selected)); t.tabIndex = selected ? 0 : -1; });
    document.getElementById('reel-panel').setAttribute('aria-labelledby', button.id);
    const fallback=document.getElementById('video-fallback'); if(fallback)fallback.href=player.src;
  };
  tabs.forEach((button, index) => {
    button.addEventListener('click', () => activate(button));
    button.addEventListener('keydown', event => {
      let next = index;
      if(event.key==='ArrowRight')next=(index+1)%tabs.length;
      else if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=tabs.length-1;
      else return;
      event.preventDefault(); tabs[next].focus(); activate(tabs[next]);
    });
  });
  document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', () => { document.querySelectorAll('video').forEach(other => { if(other !== video)other.pause(); }); });
    video.addEventListener('error', () => { const note = video.closest('.video-frame')?.nextElementSibling; if(note?.classList.contains('video-error'))note.hidden=false; });
  });
  document.addEventListener('visibilitychange', () => { if(document.hidden)document.querySelectorAll('video').forEach(video => video.pause()); });
})();
