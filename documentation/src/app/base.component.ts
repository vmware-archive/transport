import {AbstractBase} from '@vmw/transport/core';

export abstract class BaseComponent extends AbstractBase {
    protected constructor(name: string) {
        super(name);
    }
}
