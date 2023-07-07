function mainFunction(){
    const form = document.querySelector('.formulario');
    const btn1 = document.querySelector('#btn1');

    btn1.addEventListener('click', (e)=>{
        e.preventDefault();
        opereracao();
    });

    function opereracao(){
        const pesoValue = form.querySelector('#peso');
        const alturaValue = form.querySelector('#altura');
        const resultado = document.querySelector('.resultado');
        
        const peso = parseFloat(pesoValue.value);
        const altura = parseFloat(alturaValue.value);
        let result = peso / (altura*altura);

               // parte condicional 

        if(!peso){
            alert('Informe o peso');
        }

        if(!altura){
            alert('Informe a altura');
        }


        let stts;
        if (result < 18.5){
            stts = 'MAGREZA'
        }	    	
        
        if (result> 18.5 && result <= 24.9){
            stts = 'NORMAL'
        }		
        
        if (result > 25.0 && result <= 29.9){
            stts = 'SOBREPESO'
        }	
        
        if (result > 30.0 && result <= 39.9){
            stts = 'OBESIDADE'
        }	
        
        if (result > 40.0){
            stts = 'OBESIDADE GRAVE'
        }
        resultado.innerHTML = (`Resultado : ${stts} <br/> IMC : ${result.toFixed(2)} `);
    }

}

mainFunction();