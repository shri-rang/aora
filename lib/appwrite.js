import {Account, Client, ID, Avatars, Databases } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.example.aora',
    projectId:'66504491003e38e7cfa9',
    databaseId: '6650473e0036fd81d9a2',
    userCollectionId:'665047860010cff3720c',
    videoCollectionId: '665047ce0012b99bc426',
    storageId: '66504acd001f5969a0ac',

}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;


const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client);
export const createUser = async(email,password, username) =>{
 // Register User
    try {
      const newAccount = await account.create(ID.unique(),email,password,username);
          if(!newAccount) throw Error;
          const avatar = avatars.getInitials(username);

           await signIn(email,password);

           const newUser =  await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
            accountId:newAccount.$id,
            email,
            username,
            avatar:avatar
            }
           );
        return newUser;   
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}



export const  signIn = async (email,password) => {

     try {
 
            const session =  await account.createEmailPasswordSession(email,password);  
           return session;
     } catch (error) {
         console.log(error);
         throw new Error(error);
     }
}


export const getCurrentUser = async ()=>{
      try {
        
         const currentAccount = await account.get();
          if(!currentAccount) throw Error;
          
           const currentUser = await  databases.listDocuments(
             appwriteConfig.databaseId,
             appwriteConfig.userCollectionId,
             [Query.equal('accountId',currentAccount.$id)]
           );
           if(!currentUser) throw Error; 
           
           return createUser.documnets[0];
      } catch (error) {
        
      }
}

