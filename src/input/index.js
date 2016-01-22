import { blockFactory } from 'rebem';

const block = blockFactory('input');

export default function Input({ mods, mix, ...props }) {
    return block({ mods, mix, tag: 'label' },
        block({
            ...props,
            elem: 'control',
            tag: 'input',
            type: 'text'
        }),
        props.children
    );
}
