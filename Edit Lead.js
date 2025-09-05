import test,{chromium} from "@playwright/test"


test('Edit lead',async({page})=>{
    test.setTimeout(60000)
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("//input[@id='username']","demosalesmanager")
    await page.fill("//input[@id='password']","crmsfa")

    //await page.waitForTimeout(5000)
    await page.click("//input[@class='decorativeSubmit']")
   // await page.waitForTimeout(5000)

    await page.click("//div[@id='label']/a")
    //await page.waitForTimeout(5000)

    await page.click("//div[@class='x-panel-header']/a[text()='Leads']")

    await page.click("//a[text()='Find Leads']")
    //await page.waitForTimeout(5000)

    await page.fill("//input[@id='ext-gen248']", "Ragav")

    await page.click("//button[text()='Find Leads']")
    //await page.waitForTimeout(5000)

    await page.click("(//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a)[1]")

    //await page.waitForTimeout(3000)

    await page.click("//a[text()='Edit']")

    await page.fill("//input[@id='updateLeadForm_companyName']","TCS")
    await page.fill("//input[@id='updateLeadForm_annualRevenue']","500000")
    await page.fill("//input[@id='updateLeadForm_departmentName']","DevOps")
    await page.fill("//textarea[@id='updateLeadForm_description']","Selenium with Java")
    await page.waitForTimeout(3000)

    await page.click("//input[@name='submitButton']")
    await page.waitForTimeout(3000)

const title=await page.title()
console.log(title)

})
