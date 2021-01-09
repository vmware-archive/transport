export interface TermCommand {
    title: string;
    command: string;
    notes: string;
}

// go commands, used by multiple quickstart components.
export const goCommands = [
    {
        title: 'Step 1: Get the code',
        command: 'git clone https://github.com/vmware/transport-go.git',
        notes: 'Pull down the transport-go code from github'
    },
    {
        title: 'Step 2: Build the code',
        command: './build-transport.sh',
        notes: 'Build the transport-go sample server and example services'
    },
    {
        title: 'Step 3: Run the code',
        command: './transport service&',
        notes: 'Start the transport-go sample services'
    },
    {
        title: 'Step 3: Play with the code',
        command: './transport demo',
        notes: 'Run a simple example that connects to the sample service and makes a request'
    },

];
