import { NameDocument, Name } from "../../models/name.model";

export const getExample = async (): Promise<NameDocument> => {
    return new Promise((resolve, reject) => {
        Name.create({ name: "Igor Amidzic" })
            .then(async (name: NameDocument) => {
                resolve(name);
            })
            .catch((error: any) => {
                reject(error);
            });
        // let rand: number = Math.random()
        // setTimeout(() => {
        //     if (rand < 0.5)
        //         resolve("50% Success")
        //     else
        //         reject("50% Failure")
        // }, 1000)
    });
};

export const getNames = async (): Promise<NameDocument[]> => {
    return new Promise((resolve, reject) => {
        Name.find()
            .then((docs: NameDocument[]) => resolve(docs))
            .catch((err) => reject(err));
    });
};