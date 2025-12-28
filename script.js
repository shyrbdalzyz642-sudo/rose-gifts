function orderproduct() {
    let name = prompt("اكتب اسمك");
    let phone = prompt("اكتب رقم الموبايل");
    let address = prompt("اكتب العنوان");

    if (name && phone && address) {
        alert("تم استلام الطلب\n" + 
              "الاسم: " + name + "\n" + 
              "الموبايل: " + phone + "\n" + 
              "العنوان: " + address);
    } else {
        alert("من فضلك اكمل البيانات");
    }
}