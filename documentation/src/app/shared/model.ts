/*
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

export interface TermCommand {
    title: string;
    command: string;
    notes: string;
}
export const goTerminalCommands = [
    {
        title: 'Step 1: Get the code',
        command: 'git clone https://github.com/vmware/transport-go.git',
        notes: 'Pull down the transport-go code from github',
    },
    {
        title: 'Step 2: Build the code',
        command: './build-transport.sh',
        notes: 'Build the transport-go sample server and example services',
    },
    {
        title: 'Step 3: Run the code',
        command: './transport service&',
        notes: 'Start the transport-go sample services',
    },
    {
        title: 'Step 4: Play with the code',
        command: './transport demo',
        notes: 'Run a simple example that connects to the sample service and makes a request',
    },
];

export const javaTerminalCommands = [
    {
        title: 'Step 1: Get the code',
        command: 'git clone https://github.com/vmware/transport-java.git',
        notes: 'Pull down the transport-java code from github',
    },
    {
        title: 'Step 2: Run the code',
        command: './gradlew :sample-app:bootRun',
        notes: 'Build the example application and watch the logs',
    },
    {
        title: 'Step 3: Play with the code',
        command: 'ls sample-app/src/main/java/samples',
        notes: 'Explore the various examples, see how they work',
    },
];

export const tsTerminalCommands = [
    {
        title: 'Step 1:  Install the code',
        command: 'npm install @vmw/transport --save',
        notes: 'Install transport-typescript into your app',
    },
];
