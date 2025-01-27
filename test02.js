/**
 * @aiq.webdesigner
 * This script requires AIQ Web Designer
*/
setShadowDOM(true);
navigateTo("https://demosite.appvance.net/products/ruby-on-rails-jr-spaghetti");
click(fallback(`submit(0, _in(div("inside-product-cart-form")))`,
   `submit(0, _in(div({'id':'inside-product-cart-form'})))`,
   `submit("button")`,
   `submit("Add To Cart")`,
   `byJQuery('button[name="button"]')`,
   `submit("btn btn-success[1]")`,
   `byXPath('//*[@name="button"]')`,
   `submit("add-to-cart-button")`,
   `byJQuery('#add-to-cart-button')`,
   `byXPath("id('add-to-cart-button')")`,
   `byXPath('//*[@id="add-to-cart-button"]')`,
   `byXPath("//button[@id='add-to-cart-button']")`,
   `byJQuery('div[class="col-md-5"] > div[class="add-to-cart"] > div[class="input-group"] > span[class="input-group-btn"] > button[class="btn btn-success"]')`,
   `byXPath('/html/body/div[2]/div/div/div/div[2]/div/div/div[2]/form/div/div/div[2]/div/span/button')`));
click(fallback(`submit(1, _in(form("update-cart")))`,
   `submit(1, _in(form({'id':'update-cart'})))`,
   `submit("checkout")`,
   `submit("Checkout")`,
   `byJQuery('button[name="checkout"]')`,
   `submit("checkout-link")`,
   `byJQuery('#checkout-link')`,
   `byXPath("id('checkout-link')")`,
   `submit("btn btn-lg btn-success")`,
   `byXPath('//*[@name="checkout"]')`,
   `byXPath('//*[@id="checkout-link"]')`,
   `byXPath("//button[@id='checkout-link']")`,
   `byXPath('//*[@class="btn btn-lg btn-success"]')`,
   `byJQuery('div[class="links col-md-3 navbar-form pull-right text-right"] > div[class="form-group"] > button[class="btn btn-lg btn-success"]')`,
   `byXPath('/html/body/div[2]/div/div/div/div/form/div/div[2]/div/button[2]')`));
setValue(fallback(`byXPath('//*[@id="order_email"]')`,
   `emailbox("order_email")`,
   `emailbox("order[email]")`,
   `byJQuery('#order_email')`,
   `byXPath("id('order_email')")`,
   `byJQuery('input[name="order[email]"]')`,
   `emailbox("form-control title")`,
   `byJQuery('input[class="form-control title"]')`,
   `byXPath('//*[@name="order[email]"]')`,
   `byXPath("//input[@id='order_email']")`,
   `byXPath('//*[@class="form-control title"]')`,
   `byXPath('/html/body/div[2]/div/div/div/div[2]/div/div[2]/form/p/input')`),"vale_@");
click(fallback(`submit("btn btn-block btn-lg btn-success[1]")`,
   `submit("Continue")`,
   `submit("commit[1]")`,
   `byJQuery('input[value="Continue"]')`,
   `byXPath("//form[@id='checkout_form_registration']/p[2]/input")`,
   `byXPath("id('checkout_form_registration')/p[2]/input[@class='btn btn-lg btn-success btn-block']")`,
   `byXPath('/html/body/div[2]/div/div/div/div[2]/div/div[2]/form/p[2]/input')`));
click(fallback(`paragraph(0, _in(form("checkout_form_registration")))`,
   `paragraph(0, _in(form({'id':'checkout_form_registration'})))`,
   `byXPath("id('checkout_form_registration')/p[1]")`,
   `byXPath("//form[@id='checkout_form_registration']/p[1]")`,
   `byXPath('/html/body/div[2]/div/div/div/div[2]/div/div[2]/form/p')`));
setValue(fallback(`byXPath('//*[@id="order_email"]')`,
   `emailbox("order_email")`,
   `emailbox("order[email]")`,
   `byJQuery('#order_email')`,
   `byXPath("id('order_email')")`,
   `byJQuery('input[name="order[email]"]')`,
   `emailbox("form-control title")`,
   `byJQuery('input[class="form-control title"]')`,
   `byXPath('//*[@name="order[email]"]')`,
   `byXPath("//input[@id='order_email']")`,
   `byXPath('//*[@class="form-control title"]')`,
   `byXPath('/html/body/div[2]/div/div/div/div[2]/div/div[2]/form/p/input')`),"vale@test.com");
click(fallback(`submit("btn btn-block btn-lg btn-success[1]")`,
   `submit("Continue")`,
   `submit("commit[1]")`,
   `byJQuery('input[value="Continue"]')`,
   `byXPath("//form[@id='checkout_form_registration']/p[2]/input")`,
   `byXPath("id('checkout_form_registration')/p[2]/input[@class='btn btn-lg btn-success btn-block']")`,
   `byXPath('/html/body/div[2]/div/div/div/div[2]/div/div[2]/form/p[2]/input')`));
