const bookmarkSchema = {
  ssh: {
    type: 'ssh',
    host: 'string (required) - hostname or IP address',
    port: 'number (default: 22) - SSH port',
    username: 'string (required) - SSH username',
    password: 'string - password for authentication',
    privateKey: 'string - private key content or path for key-based auth',
    passphrase: 'string - passphrase for private key/certificate',
    certificate: 'string - certificate content',
    authType: 'string - auth type (password|privateKey|profiles)',
    profile: 'string - profile id to reuse saved auth',
    title: 'string - bookmark title',
    description: 'string - bookmark description',
    startDirectoryRemote: 'string - remote starting directory',
    startDirectoryLocal: 'string - local starting directory',
    enableSsh: 'boolean - enable ssh, default is true',
    enableSftp: 'boolean - enable sftp, default is true',
    sshTunnels: 'array - ssh tunnel definitions (see sshTunnels items)',
    connectionHoppings: 'array - connection hopping definitions',
    useSshAgent: 'boolean - use SSH agent, default is true',
    sshAgent: 'string - ssh agent path',
    serverHostKey: 'array - server host key algorithms',
    cipher: 'array - cipher list',
    runScripts: 'array - run scripts after connected ({delay,script})',
    proxy: 'string - proxy address (socks5://...)',
    x11: 'boolean - enable x11 forwarding, default is false',
    term: 'string - terminal type, default is xterm-256color, required',
    displayRaw: 'boolean - display raw output, default is false',
    encode: 'string - charset, default is utf8',
    envLang: 'string - ENV LANG, default is en_US.UTF-8',
    setEnv: 'string - environment variables, format: `KEY1=VALUE1 KEY2=VALUE2`',
    color: 'string - tag color, like #000000',
    interactiveValues: 'strings separated by newline'
  },
  sshTunnelsItem: {
    sshTunnel: 'string - forwardRemoteToLocal|forwardLocalToRemote|dynamicForward',
    sshTunnelLocalHost: 'string',
    sshTunnelLocalPort: 'number',
    sshTunnelRemoteHost: 'string',
    sshTunnelRemotePort: 'number',
    name: 'string - optional tunnel name'
  },
  connectionHoppingsItem: {
    host: 'string',
    port: 'number',
    username: 'string',
    password: 'string',
    privateKey: 'string',
    passphrase: 'string - passphrase',
    certificate: 'string',
    authType: 'string',
    profile: 'string - profile id'
  }
}

export default bookmarkSchema
