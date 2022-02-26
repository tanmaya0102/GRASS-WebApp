# GRASS-WebApp
G.R.A.S.S Project for FRT
## Getting started
### The idea
Currently, 381 million tonnes of plastic waste is produced by the world within a year and it is claimed to be doubled by 2034. Over 50% of this is single-use plastic while only 9% has ever been recycled. Around 12.7 million tonnes of plastic yearly is dumped into oceans while the rest goes into the dumping yards where they amount to mountains of garbage. Plastic waste is turning into a major land and ocean pollutant.
The only way to control the further input of plastic waste is to normalize the usage of more sustainable products such as online orders and courier packaging made out of biodegradable material. This can be obtained when we promote such products and that is where our technology comes to play.
<br>
G.R.A.S.S. is a reward system that promotes healthy habits such as utilising biodegradable packaging and carry bags instead of plastic ones. We will work with FMCG and eCommerce companies to use Biodegradable Packaging and print QR Codes on it for their orders. Our WebApp is set up in such a way that users may scan QR Codes and earn reward points based on the goods they are scanning. These Reward points will be saved in the user's account and will allow them to purchase various online things such as purses, watches, and earpods, which will be presented on the Shop Page.
<br>
### Why this idea?
-Currently not every FMCG Companies or Packaging companies use biodegradable or sustainable practices to package their products. The reason might be little higher prices on using biodegradable packaging or not enough demand.
<br>-The Companies will only change their packaging when consumers are interested and ready to buy the products packaged with biodegradable material. 
<br>-Consumers will normally get attracted to buy the products with biodegradable packaging only when they are given some incentive on buying that particular product.
<br>-Hence when we provide rewards on a particular biodegradable packaging product.So we are solving that by providing qr code for scanning.
<br>-Companies will also get demand for that particular eco-friendly packaged products when consumers are interested.
<br>-Hence creating a cycle of demand and supply of the products that are specifically packaged using biodegradable materials.
<br>-We want to revolutionize the way the industries look towards biodegradable packaging materials.
<br>-We would benefit from the fees charged to bring the partner onboard, from the consumers behaviour data, <br> by connecting the companies for product promotions,
by aggregating suppliers of biodegradable packaging companies, <br> and especially from the environmental change that we could bring by changing both companies and consumers habit.


### For WebApp
1. Go to browser and search url "https://mygrass.azurewebsites.net/"
2. Click on login and use your MS Account to login
3. To get the rewards for the demo , just use any one of the qrcodes present in QRCode Generator folder. Example: [Sample QR Code](https://github.com/tanmaya0102/GRASS-WebApp/blob/main/QR%20Code%20Generator/qr_code_1645888149.8530633.png)
4. Download the qr code or print the code
5. Use the QR Code scanner on the website and show the qrcode to the camera.
6. Once QR Code is scanned , then click on proceed
7. Items are listed on the website to redeem the points
8. Users can even see their profile in the profile section

### For QR CODE Generator
1. Install python and add the path to the system variable, also install python dependencies like 'qrcode' and 'Pillow'
2. Open cmd in the qrcode generator folder
3. Type: python QRCodeGenerator.py
4. Type the number of qrcodes to be generated
5. Type the starting serial number
6. The Partner companies can print these qrcodes on their products
7. Hence companies will benefit from using the biodegradable packaging.
8. The Consumer will be more interested to buy the products due to reward.

## Built with

- Azure App Service: For Easy Deployment
- Azure AD Authentication: For Login Provider
- Azure Cosmos DB API for MongoDB: For Database
- Languages for the WebApp: EJS, JavaScript and CSS
- For the QR Code Genetator: Python

## Solution Roadmap

1)At the moment, the online app is only for customers, while businesses are provided with their own QR Code Generator Program. We could optimise the WebApp architecture even more by separating access into two types: consumer access and company access. We could combine the QR Code Generator into the Firm access and provide the company with statistics on how many customers have scanned the QR Codes distributed by their items. This will give the company a more in-depth understanding of consumer wants.
<br>2)Instead of merely keeping the QR Code ID, the QR Code Generator might be enhanced by storing the QR Codes generated in a cloud database with much more metadata. We may also tailor the generator programme to the printer machine used by the company.
<br>3)At the moment, the reward points are available as loyalty points, which may be used to purchase any goods.
