var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async = false;
xmlDoc.load("emp.xml");
document.write(xmlDoc.documentElement.childNodes[0].innerText);
xmlDoc.documentElement.childNodes[0].innerText = "New Employee Name";
xmlDoc.save("emp.xml");
