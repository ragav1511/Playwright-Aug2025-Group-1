import test from '@playwright/test'

test("alert",async({page})=>{
    test.setTimeout(100000)
    page.on('dialog',alertype =>{
const type=alertype.type()
console.log(type)

console.log(alertype.message())

alertype.accept()

    })
await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')



await page.waitForSelector('iframe[name="iframeResult"]');

  const frame = page.frameLocator('iframe[name="iframeResult"]');
  await frame.locator('text=Try it').click();
await page.waitForTimeout(3000)
  
})
