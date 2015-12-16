import TestUtils from 'react-addons-test-utils';
import YummiesDOM from '@yummies/dom';
import { expect } from 'chai';
import { renderOnce } from 'test/helpers/render';

import Input from '#input?_type=search';

describe('input_type_search', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(Input).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(Input()))).to.be.true;
        });
    });

    describe('render', () => {
        describe('DOM', () => {
            it('initial', function() {
                const rootComponent = renderOnce(Input());
                const rootComponentDOMNode = YummiesDOM.findDOMNode(rootComponent);
                const inputControlDOMNode = TestUtils.findRenderedDOMComponentWithClass(rootComponent, 'input__control');

                expect(rootComponentDOMNode).to.have.mods({ type: 'search' });
                expect(inputControlDOMNode.type).to.be.equal('search');
                expect(inputControlDOMNode.getAttribute('autocomplete')).to.be.equal('off');
                expect(inputControlDOMNode.getAttribute('autocapitalize')).to.be.equal('off');
                expect(inputControlDOMNode.getAttribute('autocorrect')).to.be.equal('off');
                expect(inputControlDOMNode.getAttribute('spellcheck')).to.be.equal('off');
            });
        });
    });
});
