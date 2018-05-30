import {expect} from 'chai';
import RandomNino from "../index";

describe('randomNino', () => {
    let randomNino = new RandomNino();

    it('should be defined', () => {
        expect(randomNino).to.not.equal(undefined);
    });

    it('should return correct format', () => {
        let nino = randomNino.generate();
        expect(typeof nino).to.equal('string');
    })

    it('should match regexp', () => {
        let nino = randomNino.generate();
        let regex = new RegExp('^[A-Z]{2}[0-9]{6}[A-D]$');
        expect(regex.test(nino)).to.equal(true);
    })
});
