
function customizationCostAdd(memoryAmount, price, incrasePrice, updatePriceid) {
    document.getElementById(memoryAmount).addEventListener('click', function () {
        const extraCostAdded = document.getElementById(updatePriceid);

        if (incrasePrice) {
            extraCostAdded.innerText = price;
            customCostCalculation();
        }
        else {
            extraCostAdded.innerText = price;
            customCostCalculation();
        }
    });
};

// -----------calculation part-----------------------------
function customCostCalculation() {
    const listOfCalculationID = ['best-price', 'memory-cost', 'storage-cost', 'delivery-cost'];

    let idCalledNum = 0;
    for (const callId of listOfCalculationID) {
        const idCalled = document.getElementById(callId).innerText;
        idCalledNum = parseFloat(idCalled) + idCalledNum;
    };

    console.log('this is total', idCalledNum);
    const totalPrice = document.getElementById('total-price');

    totalPrice.innerText = idCalledNum;
    document.getElementById('afterPromoTotal').innerText = idCalledNum;

};

document.getElementById('promoBtn').addEventListener('click', function () {
    const promoCode = 'stevekaku';
    promoCode.toLowerCase();
    const promo = document.getElementById('promoInput').value;
    promo.toLowerCase();

    if (promoCode == promo) {

        const totalinTxt = document.getElementById('total-price');
        const totalinNumber = parseInt(totalinTxt.innerText);
        document.getElementById('afterPromoTotal').innerText = totalinNumber - (totalinNumber / 100) * 20;
        console.log('promo applied', totalinNumber);
    }
    document.getElementById('promoInput').value = '';

});

//note pls re check the vdo and update the price
//-----------memory part event-------------------
customizationCostAdd('8gb', 0, false, 'memory-cost');
customizationCostAdd('16gb', 100, true, 'memory-cost');
//-----------stotage part event-------------------
customizationCostAdd("256gb-ssd", 0, false, 'storage-cost');
customizationCostAdd("512gb-ssd", 150, true, 'storage-cost');
customizationCostAdd("1tb-ssd", 200, true, 'storage-cost');
//-----------delivery part event-------------------
customizationCostAdd('free', 0, false, 'delivery-cost');
customizationCostAdd('paid', 20, true, 'delivery-cost');



