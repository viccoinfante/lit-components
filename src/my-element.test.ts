import { expect} from "@open-wc/testing";
import { Utils } from "./Utils/utils";



describe("curso", ()=>{
    it("Mi primera prueba", ()=>{
        expect(true).equal(true);
    })
     it("test suma", ()=>{

        const utils_service = new Utils();
        const result: number = utils_service.sum(10,5);
        expect(result).equal(15);
        
    })

    it("test primer multiplo", () => {
    const service = new Utils();
    const result: string[] = service.fizzBuzz(3);
    const arrayTest: string[] = ['1', '2', 'Fizz']
    expect(JSON.stringify(result)).equal(JSON.stringify(arrayTest));
  });
  it("test segundo multiplo", () => {
    const service = new Utils();
    const result: string[] = service.fizzBuzz(5);
    const arrayTest: string[] = ['1', '2', 'Fizz', '4', 'Buzz']
    expect(JSON.stringify(result)).equal(JSON.stringify(arrayTest));
  });
})