//-----------macbook customization button part ---------------
function customizationCostAdd(memoryAmount, price, incrasePrice, updatePriceid) {
    document.getElementById(memoryAmount).addEventListener('click', function () {
        const extraCostAdded = document.getElementById(updatePriceid);

        if (incrasePrice) {
            extraCostAdded.innerText = price;
            //-------------------call cost calculation function-------------------
            customCostCalculation();
        }
        else {
            extraCostAdded.innerText = price;
            //-------------------call cost calculation function-------------------
            customCostCalculation();
        }
    });
};

// -----------------cost calculation part-----------------------
function customCostCalculation() {
    const listOfCalculationID = ['best-price', 'memory-cost', 'storage-cost', 'delivery-cost'];

    let costOfCustomizeItems = 0;
    for (const getSingleID of listOfCalculationID) {

        const idCalled = document.getElementById(getSingleID).innerText;
        costOfCustomizeItems = parseFloat(idCalled) + costOfCustomizeItems;
    };

    const totalPrice = document.getElementById('total-price');

    totalPrice.innerText = costOfCustomizeItems;
    document.getElementById('afterPromoTotal').innerText = costOfCustomizeItems;
};

//------------------promo code section-------------------------
document.getElementById('promoBtn').addEventListener('click', function () {
    const promoCode = 'stEvekaku';
    const promo = document.getElementById('promoInput').value;

    if (promoCode.toLowerCase() == promo.toLowerCase()) {

        const totalinTxt = document.getElementById('total-price');
        const totalinNumber = parseInt(totalinTxt.innerText);
        document.getElementById('afterPromoTotal').innerText = totalinNumber - (totalinNumber / 100) * 20;

    }
    else {
        alert('This is a wrong promocode use this >> stevekaku <<');
    }
    document.getElementById('promoInput').value = '';
});

// --------------------------function calling part--------------------------
//-----------memory part event-------------------
customizationCostAdd('8gb', 0, false, 'memory-cost'); //(id-of-button, price, argument, id-of-update-section)
customizationCostAdd('16gb', 180, true, 'memory-cost');
//-----------stotage part event-------------------
customizationCostAdd("256gb-ssd", 0, false, 'storage-cost');
customizationCostAdd("512gb-ssd", 100, true, 'storage-cost');
customizationCostAdd("1tb-ssd", 180, true, 'storage-cost');
//-----------delivery part event-------------------
customizationCostAdd('free', 0, false, 'delivery-cost');
customizationCostAdd('paid', 20, true, 'delivery-cost');