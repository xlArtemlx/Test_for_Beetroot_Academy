window.addEventListener('DOMContentLoaded', function(){
    'use strict'

    // let select = document.querySelector('.select-control')
   





// FILTERS ================================================================
    let selectBox = document.querySelector('.select'),
        
        breackfast = document.querySelectorAll('.breackfast'),
        firstMeal = document.querySelectorAll('.first-meal'),
        side = document.querySelectorAll('.side'),
        selectedPrice = document.querySelector('.selected-price'),
        toThirty = document.querySelectorAll('.up-to-thirty'),
        toFifty = document.querySelectorAll('.up-to-fifty'),
        toHundred = document.querySelectorAll('.up-hundred'),
        toHundredFifty = document.querySelectorAll('.up-hundred-fifty')

        const filterPrice = () => {

            selectedPrice.addEventListener('change', function(){
                let selectedPrices = selectedPrice.value
                    return selectedPrices
            })
        
            let selectedPrices = selectedPrice.value
    
            if(selectedPrices === "30"){
                toFifty.forEach(mark => {
                    mark.style.display = 'none'})
                toHundred.forEach(mark => {
                    mark.style.display = 'none'})
                toHundredFifty.forEach(mark => {
                    mark.style.display = 'none'})
                
            } else if(selectedPrices === "50") { 
                toHundred.forEach(mark => {
                    mark.style.display = 'none'}) 
                toHundredFifty.forEach(mark => {
                    mark.style.display = 'none'})
            }else if(selectedPrices === "100") {
                toHundredFifty.forEach(mark => {
                    mark.style.display = 'none'})
            }
        }


        const filterBox = () => {

            selectBox.addEventListener('change', function(){
                let selectBoxs = selectBox.value
                    return selectBoxs
            })
        
            let selectBoxs = selectBox.value
    
            if(selectBoxs === "1"){
                firstMeal.forEach(mark => {
                    mark.style.display = 'none'})
                side.forEach(mark => {
                    mark.style.display = 'none'})
            
            } else if(selectBoxs === "2") { 
        
                breackfast.forEach(mark => {
                    if(mark.style.display === 'block'){
                        mark.style.display = 'none'
                    }})
                
               
            } else if(selectBoxs === "3") {


                    breackfast.forEach(mark => {
                        if(mark.style.display === 'block'){
                            mark.style.display = 'none'
                        }})

                    firstMeal.forEach(mark => {
                        if(mark.style.display === 'block'){
                            mark.style.display = 'none'
                        }})
                    
            }
        }



    selectBox.addEventListener('change', function(){
        let selectBoxs = selectBox.value

        if(selectBoxs === "1"){

            firstMeal.forEach(mark => {
                mark.style.display = 'none' });
            
            side.forEach(mark => {
                mark.style.display = 'none' });

            breackfast.forEach(mark => {
                mark.style.display = 'block' });
                
                filterPrice();


        } else if (selectBoxs === "2") {

            breackfast.forEach(mark => {
                mark.style.display = 'none' });
            
            side.forEach(mark => {
                mark.style.display = 'none' });

            firstMeal.forEach(mark => {
                mark.style.display = 'block' });

                filterPrice();

        } else if ( selectBoxs === '3') {

            firstMeal.forEach(mark => {
                mark.style.display = 'none' });
            
            breackfast.forEach(mark => {
                mark.style.display = 'none' });
            
            side.forEach(mark => {
                mark.style.display = 'block' });
                
                filterPrice();


        } else if(selectBoxs === '0') {

            firstMeal.forEach(mark => {
                mark.style.display = 'block' });
            
            breackfast.forEach(mark => {
                mark.style.display = 'block' });
            
            side.forEach(mark => {
                mark.style.display = 'block' });

                filterPrice();

        }
    })

    


  


    selectedPrice.addEventListener('change', function(){
        let selectedPrices = selectedPrice.value

        if(selectedPrices === "30"){

            toFifty.forEach(mark => {
                mark.style.display = 'none' });
            
            toHundred.forEach(mark => {
                mark.style.display = 'none' });

            toHundredFifty.forEach(mark => {
                mark.style.display = 'none' });

            toThirty.forEach(mark => {
                mark.style.display = 'block' });

                filterBox();
            

        } else if (selectedPrices === "50") {

            toFifty.forEach(mark => {
                mark.style.display = 'block' });
            
            toHundred.forEach(mark => {
                mark.style.display = 'none' });

            toHundredFifty.forEach(mark => {
                mark.style.display = 'none' });

            toThirty.forEach(mark => {
                mark.style.display = 'block' });

                filterBox();

        } else if ( selectedPrices === '100') {

            toFifty.forEach(mark => {
                mark.style.display = 'block' });
            
            toHundred.forEach(mark => {
                mark.style.display = 'block' });

            toHundredFifty.forEach(mark => {
                mark.style.display = 'none' });

            toThirty.forEach(mark => {
                mark.style.display = 'block' });
                filterBox();

        } else if(selectedPrices === '0'|| selectedPrices === '150') {

            toFifty.forEach(mark => {
                mark.style.display = 'block' });
            
            toHundred.forEach(mark => {
                mark.style.display = 'block' });

            toHundredFifty.forEach(mark => {
                mark.style.display = 'block' });

            toThirty.forEach(mark => {
                mark.style.display = 'block' });
                filterBox();

        }



    })


// CART ================================================================

 let valueOne = document.querySelectorAll('.qty__item')[0],
        valueTwo = document.querySelectorAll('.qty__item')[1],
        valueThree = document.querySelectorAll('.qty__item')[2],
        valueFour = document.querySelectorAll('.qty__item')[3],
        valueFive = document.querySelectorAll('.qty__item')[4],
        valueSix = document.querySelectorAll('.qty__item')[5],
        valueSeven = document.querySelectorAll('.qty__item')[6],
        valueEight = document.querySelectorAll('.qty__item')[7],
        valueNine = document.querySelectorAll('.qty__item')[8],
        valueTen = document.querySelectorAll('.qty__item')[9],
        valueEleven = document.querySelectorAll('.qty__item')[10],
        valueTwelve = document.querySelectorAll('.qty__item')[11],


        buttonOne = document.querySelectorAll('.product-box__btn')[0],
        buttonTwo = document.querySelectorAll('.product-box__btn')[1],
        buttonThree = document.querySelectorAll('.product-box__btn')[2],
        buttonFour = document.querySelectorAll('.product-box__btn')[3],
        buttonFive = document.querySelectorAll('.product-box__btn')[4],
        buttonSix = document.querySelectorAll('.product-box__btn')[5],
        buttonSeven = document.querySelectorAll('.product-box__btn')[6],
        buttonEight = document.querySelectorAll('.product-box__btn')[7],
        buttonNine = document.querySelectorAll('.product-box__btn')[8],
        buttonTen = document.querySelectorAll('.product-box__btn')[9],
        buttonEleven = document.querySelectorAll('.product-box__btn')[10],
        buttonTwelve = document.querySelectorAll('.product-box__btn')[11],
        
        totalSum = document.querySelectorAll('.red-info')[1],
        totalItem = document.querySelectorAll('.red-info')[0],

    
     items = 0,
     allItems = 0,
     allSum = 0

     totalSum.innerHTML = 0
     totalItem.innerHTML = 0





     valueOne.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonOne.addEventListener('click',function(){
        let total = items * 25

        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueTwo.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonTwo.addEventListener('click',function(){
        let total = items * 25


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( allItems , allSum)
    });

    valueThree.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonThree.addEventListener('click',function(){
        let total = items * 30


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueFour.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonFour.addEventListener('click',function(){
        let total = items * 45


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueFive.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonFive.addEventListener('click',function(){
        let total = items * 45


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueSix.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonSix.addEventListener('click',function(){
        let total = items * 50


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueSeven.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonSeven.addEventListener('click',function(){
        let total = items * 85


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueEight.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonEight.addEventListener('click',function(){
        let total = items * 95


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueNine.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonNine.addEventListener('click',function(){
        let total = items * 100


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueTen.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonTen.addEventListener('click',function(){
        let total = items * 125


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueEleven.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonEleven.addEventListener('click',function(){
        let total = items * 135


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });

    valueTwelve.addEventListener('change',function(){
        items = this.value;
        return items
    });

    buttonTwelve.addEventListener('click',function(){
        let total = items * 150


        allItems = allItems + Number(items)
        allSum = allSum + total


        totalItem.innerHTML = allItems 
        totalSum.innerHTML = allSum
        
        return ( 
            
                allItems , allSum
            
            )
    });



//splash ===========================================================================

    let more = document.querySelector('.btn-check'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

        more.addEventListener('click', () => {
            overlay.style.display = 'block';
            more.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });

// Checkout button ================================================================



let form = document.querySelector('.main-form'),
    input = form.querySelectorAll('popup-form__input')
 



form.addEventListener('submit',function(event){


    event.preventDefault();
    console.log(input)

    alert('спасибо!!!')

    totalSum.innerHTML = 0
    totalItem.innerHTML = 0

    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';


});






})