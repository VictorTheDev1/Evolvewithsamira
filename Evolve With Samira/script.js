// Nav scroll
    window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',scrollY>60));
    function toggleMenu(){document.getElementById('navLinks').classList.toggle('open');}
    function closeMenu(){document.getElementById('navLinks').classList.remove('open');}

    // Reveal on scroll
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');}),{threshold:.1});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

    // Video
    document.getElementById('videoWrapper').addEventListener('click',()=>{
      document.getElementById('videoWrapper').style.display='none';
      const p=document.getElementById('videoPlayer'); p.style.display='block'; p.play();
    });

    // Modal
    document.getElementById('openReminder').addEventListener('click',e=>{e.preventDefault();document.getElementById('reminderModal').classList.add('active');});
    document.getElementById('closeModal').addEventListener('click',()=>document.getElementById('reminderModal').classList.remove('active'));
    document.getElementById('reminderModal').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.classList.remove('active');});
    function showOptions(type,ev){
      document.querySelectorAll('.reminder-options').forEach(el=>el.classList.remove('active'));
      document.querySelectorAll('.device-btn').forEach(el=>el.classList.remove('active'));
      document.getElementById(type+'Options').classList.add('active');
      ev.currentTarget.classList.add('active');
    }

    // Newsletter
    (function(){emailjs.init("oc4vk3E1OUMb-pZlZ");})();
    document.getElementById('newsletter-form').addEventListener('submit',async function(e){
      e.preventDefault();
      const fd=new FormData(this), email=fd.get('email'), msg=document.getElementById('form-message');
      msg.textContent='Subscribing... '; msg.style.color='var(--purple)';
      let ok=false;
      try{const r=await fetch("https://formsubmit.co/ajax/Evolvedusolutions@gmail.com",{method:"POST",headers:{"Accept":"application/json"},body:fd});const res=await r.json();if(res.success==="true"||res.success===true)ok=true;}catch(err){console.error(err);}
      try{await emailjs.send("service_j0j9ptf","template_edhnmrg",{email,to_email:email});ok=true;}catch(err){console.error(err);}
      if(ok){msg.textContent=' Subscribed! Check your inbox. ';msg.style.color='var(--purple)';this.reset();}
      else{msg.textContent='Something went wrong. Please try again! or contact us directly.';msg.style.color='#e05555';}
    });