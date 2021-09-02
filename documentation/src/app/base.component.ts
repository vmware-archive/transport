/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { AbstractBase } from '@vmw/transport/core';

export abstract class BaseComponent extends AbstractBase {
    protected constructor(name: string) {
        super(name);
    }
}
