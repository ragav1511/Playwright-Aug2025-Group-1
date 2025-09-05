import test,{chromium} from "@playwright/test"

test('create a lead',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("//input[@id='username']","demosalesmanager")
    await page.fill("//input[@id='password']","crmsfa")

    //await page.waitForTimeout(5000)
    await page.click("//input[@class='decorativeSubmit']")
   // await page.waitForTimeout(5000)

    await page.click("//div[@id='label']/a")
    //await page.waitForTimeout(5000)

    await page.click("//div[@class='x-panel-header']/a[text()='Leads']")


    await page.click("//a[text()='Create Lead']")
    

    const firstname= await page.fill("//input[@id='createLeadForm_companyName']","UST")
   
    await page.fill("//input[@id='createLeadForm_firstName']","Ragav")
    await page.fill("//input[@id='createLeadForm_lastName']","Sekar")
    await page.fill("//input[@id='createLeadForm_personalTitle']","ABC")  
    await page.fill("//input[@id='createLeadForm_generalProfTitle']","Mr")
    await page.fill("//input[@id='createLeadForm_annualRevenue']","1000000")
    await page.fill("//input[@id='createLeadForm_departmentName']","Testing")
    await page.fill("//input[@id='createLeadForm_primaryPhoneNumber']","8888888888")
    await page.waitForTimeout(5000)

    await page.click("//input[@name='submitButton']")
    await page.waitForTimeout(5000)


const title=await page.title()
console.log(title)

const fname=await page.textContent("//span[@id='viewLead_firstName_sp']")
const lname=await page.textContent("//span[@id='viewLead_lastName_sp']")
const companyname=await page.textContent("//span[@id='viewLead_companyName_sp']")
const status=await page.textContent("//span[@id='viewLead_statusId_sp']")
if(fname=="Ragav"){
    console.log("First name is matching")
}
else{
    console.log("First name is not matching")
}

if(lname=="Sekar"){
    console.log("Last name is matching")
}
else{
    console.log("Last name is not matching")    
}
if(companyname=="UST"){
    console.log("Company name is matching") 
}
else{
    console.log("Company name is not matching")    
}
console.log("Status is "+status)
})
