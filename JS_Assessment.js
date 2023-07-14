/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (NFTName, NFTColour, NFTShape, NFTHeart, NFTBanner)
{
   const NFTInfo =
   {
      "Name": NFTName,
      "Colour": NFTColour,
      "Shape": NFTShape,
      "Heart": NFTHeart,
      "Banner": NFTBanner
   }
   NFTs.push(NFTInfo);
   console.log("Minted: " + NFTName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs ()
{
   for(let i = 0; i < NFTs.length; i++)
   {
      console.log("\nID: " + (i + 1));
      console.log("Name: \t\t" + NFTs[i].Name);
      console.log("Colour: \t" + NFTs[i].Colour);
      console.log("Shape: \t\t" + NFTs[i].Shape);
      console.log("Heart: \t\t" + NFTs[i].Heart);
      console.log("Banner: \t" + NFTs[i].Banner);
   }
}

// print the total number of NFTs we have minted to the console
function getNFTCount()
{
   console.log("\nNumber of NFTs: " + NFTs.length);
}

// call your functions below this line

console.log("+++++=============== Welcome to MetaCrafter NFTs ===============+++++");
console.log("These NFTs are blocks that form the shape of whatever the user gets");
console.log("Each holding special powers for those who have them");
console.log("+++++==========================================================++++++\n");
console.log("Here are our NFTs today!: ");
mintNFT("Bravery", "Red", "Square", "Ruby", "Lion");
mintNFT("Cheerful", "Yellow", "Triangle", "Topaz", "Dove");
mintNFT("Stoic", "Violet", "Oval", "Sapphire", "Turtle");
mintNFT("Nurturing", "Green", "Triangle", "Emerald", "Bear");
mintNFT("Creative", "Yellow", "Circle", "Quartz", "Elephant")
listNFTs();
getNFTCount();
console.log("+++++==========================================================++++++");
console.log("Thanks for Visiting! See you again Next Time");
console.log("+++++==========================================================++++++");
