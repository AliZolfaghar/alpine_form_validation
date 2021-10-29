document.addEventListener('alpine:init', () => {

    Alpine.directive('uppercase', el => {
        el.textContent = el.textContent.toUpperCase()
    });


    // Alpine.directive('test', (el, a , b) => {
    Alpine.directive('test', (el, { value, modifiers, expression }, { evaluate , evaluateLater, effect, cleanup }) => {
        let check_nin = evaluateLater(expression)
        effect(()=>{
            check_nin((v)=>{
                const model = document.querySelector('#'+value)._x_dataStack[0]; 
                (v == 123) ? model.isValid = true : model.isValid = false ;  
            })
        });
    });// directive:test


    Alpine.directive('validate_nin', (el, {expression}, {evaluateLater,effect}) => {
        let check_nin = evaluateLater(expression)

        effect(() => {
            check_nin(value => {
                if (value == 123) {
                    el.style.borderColor = 'green'
                } else {
                    // console.log(false)
                    el.style.borderColor = 'red'
                }
                // console.log(el.value)
            })
        })
    });


}); //alpine:init



const validate_length = (val , len)=>{
    return val.length >= len ? true : false ;
}; 

const validate_num = (val , len)=>{
    return  !isNaN(val) && val > 0  ;
}; 

const validate_email = (val , len)=>{
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val));
}; 

const validate_pass = (val , len)=>{
    return val.length > 5 ;
}; 

