import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import { renderOnce } from 'test/helpers/render';

import TableBody from '#table/body';

describe.skip('table/tbody', () => {
    describe('basic', () => {
        it('exists', () => {
            expect(TableBody).to.exist;
        });

        it('is a component', () => {
            expect(TestUtils.isCompositeComponent(renderOnce(TableBody(), 'table'))).to.be.true;
        });
    });

    describe('render', () => {
        beforeEach(function() {
            this.renderWithProps = props => {
                this.rootComponent = renderOnce(TableBody(props), 'table');
                this.rootComponentDOMNode = ReactDOM.findDOMNode(this.rootComponent);
            };

            this.renderWithProps();
        });

        describe('DOM', () => {
            it('initial', function() {
                expect(this.rootComponentDOMNode.tagName).to.be.equal('TBODY');
                expect(this.rootComponentDOMNode).to.be.an.elem({
                    block: 'table',
                    elem: 'body'
                });
            });

            it('props', function() {
                const testAttr = 'test';

                this.renderWithProps({
                    'data-test-attr': testAttr
                });

                expect(this.rootComponentDOMNode.getAttribute('data-test-attr')).to.be.equal(testAttr);
            });

            it('children', function() {
                this.renderWithProps({
                    children: React.createElement('tr', {
                        key: 'test',
                        className: 'test-children'
                    })
                });

                expect(
                    TestUtils.findRenderedDOMComponentWithClass(this.rootComponent, 'test-children')
                ).to.be.block('test-children');
            });
        });
    });
});