import config from "../config/config";


import { Client,ID,Databases,Storage,Query } from "appwrite";

  export class Service{
    client =new Client();
          databases;
          bucket;

          constructor(){
              this.client
                  .setEndpoint(config.appwriteUrl)
                  .setProject(config.appwriteProjectId);
              this.databases=new Databases(this.client);
              this.bucket=new Storage(this.client);
  }

    /// create post

    async createPost({ title, slug, content, feature_image, status, user_id }) {
    try {
        return await this.databases.createDocument({
            databaseId: config.appwriteDatabaseId,
            collectionId: config.appwriteCollectionId,
            documentId: slug, // post ID
            data: {
                title,
                content,
                feature_image,
                status,
                user_id
            }
        });
    } catch (error) {
        throw error;
    }
}

    async updatePost(slug,{title,content,feature_image,status}){
              try {
                return await this.databases.updateDocument({
                databaseId: config.appwriteDatabaseId,
                collectionId: config.appwriteCollectionId,
                documentId: slug,   ///post id
                data: {
                    title,
                    content,
                    feature_image,
                    status,
                }
            })
              } catch (error) {
                throw error;
              }
    }
    async deletePost(slug) {
    try {
        await this.databases.deleteDocument({
            databaseId: config.appwriteDatabaseId,
            collectionId: config.appwriteCollectionId,
            documentId: slug
        });

        return true;
    } catch (error) {
        throw error;
    }
}
     async getPost(slug) {
    try {
        return await this.databases.getDocument({
            databaseId: config.appwriteDatabaseId,
            collectionId: config.appwriteCollectionId,
            documentId: slug
        });
    } catch (error) {
        throw error;
    }
}
    async getPosts(queries=[Query.equal("status","active")]){
           try {
              return await this.databases.listDocuments({
                databaseId: config.appwriteDatabaseId,
                collectionId: config.appwriteCollectionId,
                queries
              })
           } catch (error) {
             throw error;
           }
    }

    // upload files
    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId: config.appwriteBucketId,
                fileId: ID.unique(),
                file
            })
        } catch (error) {
            throw error;
        }
    }

    //delete file
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId: config.appwriteBucketId,
                fileId
            })
            return true
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFileView({
            bucketId: config.appwriteBucketId,
            fileId
        })
    }
  }


 const service=new Service()

 export default service
