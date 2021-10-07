var loader = document.querySelector(".loader")
window.addEventListener("load",vanish);
function vanish(){
    loader.classList.add("disspear");
}

function islemler(){
    
    const birinciSayi = parseInt(document.getElementById('input-ilkSayi').value);
    const ikinciSayi =  parseInt(document.getElementById('input-ikinciSayi').value);
    
    if ( document.getElementById("input-dortislem").value == 'Toplama'){
        document.getElementById("sonuc").textContent = birinciSayi + ikinciSayi;
        
    }
    
    else if (document.getElementById("input-dortislem").value == 'Çıkarma'){
        
        
        document.getElementById("sonuc").textContent = birinciSayi - ikinciSayi;
        
    }
    
    else if (document.getElementById("input-dortislem").value == 'Çarpma'){
        
        
        document.getElementById("sonuc").textContent = birinciSayi * ikinciSayi;
        
    }
    
    else if  (document.getElementById("input-dortislem").value == 'Bölme'){
        
        
        document.getElementById("sonuc").textContent = (birinciSayi / ikinciSayi);
        
    }
    
    
}
function temizle()
   {  
   document.getElementById('input-dortislem').value = "";
   document.getElementById('input-ilkSayi').value = "";
   document.getElementById('input-ikinciSayi').value = "";

   }

const hesapla = document.getElementById("hesapla-BTN");

hesapla.addEventListener("click",islemler);
hesapla.addEventListener("click",temizle);
