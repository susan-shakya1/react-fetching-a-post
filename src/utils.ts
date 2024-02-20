export function StimulatedError(message:string){
    const randomNumber = Math.random();
    if(randomNumber>0.5){
        throw new Error(message);
    }
}