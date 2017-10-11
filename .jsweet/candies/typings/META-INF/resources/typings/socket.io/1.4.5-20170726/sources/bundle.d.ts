/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
declare var socket_io : any;


declare namespace SocketIO {
    /**
     * The interface used when dealing with rooms etc
     * @class
     * @extends Object
     */
    export interface Adapter {
        /**
         * The namespace that this adapter is for
         */
        nsp : SocketIO.Namespace;

        /**
         * A dictionary of all the rooms that we have in this namespace
         * The rooms are made of a `sockets` key which is the dictionary of sockets per ID
         */
        rooms : any;

        /**
         * A dictionary of all the socket ids that we're dealing with, and all
         * the rooms that the socket is currently in
         */
        sids : any;

        /**
         * Adds a socket to a room. If the room doesn't exist, it's created
         * @param {string} id The ID of the socket to add
         * @param {string} room The name of the room to add the socket to
         * @param {*} callback An optional callback to call when the socket has been
         * added. It should take an optional parameter, error, if there was a problem
         */
        add(id : string, room : string, callback : (p1: any) => void);

        /**
         * Removes a socket from a room. If there are no more sockets in the room,
         * the room is deleted
         * @param {string} id The ID of the socket that we're removing
         * @param {string} room The name of the room to remove the socket from
         * @param {*} callback An optional callback to call when the socket has been
         * removed. It should take on optional parameter, error, if there was a problem
         */
        del(id : string, room : string, callback : (p1: any) => void);

        /**
         * Removes a socket from all the rooms that it's joined
         * @param {string} id The ID of the socket that we're removing
         */
        delAll(id : string);

        /**
         * Broadcasts a packet
         * @param {*} packet The packet to broadcast
         * @param {SocketIO.Adapter.Opts} opts Any options to send along:
         * - rooms: An optional list of rooms to broadcast to. If empty, the packet is broadcast to all sockets
         * - except: A list of Socket IDs to exclude
         * - flags: Any flags that we want to send along ('json', 'volatile', 'broadcast')
         */
        broadcast(packet : any, opts : any);

        /**
         * Adds a socket to a room. If the room doesn't exist, it's created
         * @param {string} id The ID of the socket to add
         * @param {string} room The name of the room to add the socket to
         * @param callback An optional callback to call when the socket has been
         * added. It should take an optional parameter, error, if there was a problem
         */
        add(id : string, room : string);

        /**
         * Removes a socket from a room. If there are no more sockets in the room,
         * the room is deleted
         * @param {string} id The ID of the socket that we're removing
         * @param {string} room The name of the room to remove the socket from
         * @param callback An optional callback to call when the socket has been
         * removed. It should take on optional parameter, error, if there was a problem
         */
        del(id : string, room : string);

        /**
         * Adds a socket to a room. If the room doesn't exist, it's created
         * @param {string} id The ID of the socket to add
         * @param {string} room The name of the room to add the socket to
         * @param {() => void} callback An optional callback to call when the socket has been
         * added. It should take an optional parameter, error, if there was a problem
         */
        add(id : string, room : string, callback : () => void);

        /**
         * Removes a socket from a room. If there are no more sockets in the room,
         * the room is deleted
         * @param {string} id The ID of the socket that we're removing
         * @param {string} room The name of the room to remove the socket from
         * @param {() => void} callback An optional callback to call when the socket has been
         * removed. It should take on optional parameter, error, if there was a problem
         */
        del(id : string, room : string, callback : () => void);
    }
}
declare namespace SocketIO {
    /**
     * The client behind each socket (can have multiple sockets)
     * @class
     * @extends Object
     */
    export interface Client {
        /**
         * The Server that this client belongs to
         */
        server : SocketIO.Server;

        /**
         * The underlying Engine.io Socket instance
         */
        conn : any;

        /**
         * The ID for this client. Regenerated at every connection
         */
        id : string;

        /**
         * The http.IncomingMessage request sent with the connection. Useful
         * for recovering headers etc
         */
        request : any;

        /**
         * The dictionary of sockets currently connect via this client (i.e. to different
         * namespaces) where the Socket ID is the key
         */
        sockets : any;

        /**
         * A dictionary of all the namespaces for this client, with the Socket that
         * deals with that namespace
         */
        nsps : any;
    }
}
declare namespace SocketIO {
    /**
     * The Namespace, sandboxed environments for sockets, each connection
     * to a Namespace requires a new Socket
     * @class
     * @extends Object
     */
    export interface Namespace {
        /**
         * The name of the NameSpace
         */
        name : string;

        /**
         * The controller Server for this Namespace
         */
        server : SocketIO.Server;

        /**
         * A dictionary of all the Sockets connected to this Namespace, where
         * the Socket ID is the key
         */
        sockets : any;

        /**
         * A dictionary of all the Sockets connected to this Namespace, where
         * the Socket ID is the key
         */
        connected : any;

        /**
         * The Adapter that we're using to handle dealing with rooms etc
         */
        adapter : SocketIO.Adapter;

        /**
         * Sets the 'json' flag when emitting an event
         */
        json : Namespace;

        /**
         * Registers a middleware function, which is a function that gets executed
         * for every incoming Socket
         * @param {*} fn The function to call when we get a new incoming socket. It should
         * take one parameter of type Socket, and one callback function to call to
         * execute the next middleware function. The callback can take one optional
         * parameter, err, if there was an error. Errors passed to middleware callbacks
         * are sent as special 'error' packets to clients
         * @return {*} This Namespace
         */
        use(fn : (p1: SocketIO.Socket, p2: (p1: any) => void) => void) : Namespace;

        /**
         * Targets a room when emitting
         * @param {string} room The name of the room that we're targeting
         * @return {*} This Namespace
         */
        to(room : string) : Namespace;

        /**
         * @see to( room )
         * @param {string} room
         * @return {*}
         */
        in(room : string) : Namespace;

        /**
         * Sends a 'message' event
         * @see emit( event, ...args )
         * @return {*} This Namespace
         * @param {Array} args
         */
        send(...args : any[]) : Namespace;

        /**
         * @see send( ...args )
         * @param {Array} args
         * @return {*}
         */
        write(...args : any[]) : Namespace;

        /**
         * The event fired when we get a new connection
         * @param {*} event The event being fired: 'connection'
         * @param {*} listener A listener that should take one parameter of type Socket
         * @return {*} This Namespace
         */
        on(event : "connection", listener : (p1: SocketIO.Socket) => void) : Namespace;

        /**
         * @see on( 'connection', listener )
         * @param {*} event
         * @param {*} listener
         * @return {*}
         */
        on(event : "connect", listener : (p1: SocketIO.Socket) => void) : Namespace;

        /**
         * Base 'on' method to add a listener for an event
         * @param {string} event The event that we want to add a listener for
         * @param {Function} listener The callback to call when we get the event. The parameters
         * for the callback depend on the event
         * @ This Namespace
         * @return {*}
         */
        on(event : string, listener : Function) : Namespace;

        /**
         * Gets a list of clients.
         * @return {*} This Namespace
         * @param {Function} fn
         */
        clients(fn : Function) : Namespace;

        /**
         * Sets the compress flag.
         * @param {boolean} compress If `true`, compresses the sending data
         * @return {*} This Namespace
         */
        compress(compress : boolean) : Namespace;
    }
}
declare namespace SocketIO {}
declare namespace SocketIO {
    export interface Server {
        engine : any;

        /**
         * A dictionary of all the namespaces currently on this Server
         */
        nsps : any;

        /**
         * The default '/' Namespace
         */
        sockets : SocketIO.Namespace;

        /**
         * Sets the 'json' flag when emitting an event
         */
        json : Server;

        /**
         * Server request verification function, that checks for allowed origins
         * @param {*} req The http.IncomingMessage request
         * @param {*} fn The callback to be called. It should take one parameter, err,
         * which will be null if there was no problem, and one parameter, success,
         * of type boolean
         */
        checkRequest(req : any, fn : (p1: any, p2: boolean) => void);

        /**
         * Gets whether we're serving the client.js file or not
         * @default true
         * @return {boolean}
         */
        serveClient() : boolean;

        /**
         * Sets whether we're serving the client.js file or not
         * @param {boolean} v True if we want to serve the file, false otherwise
         * @default true
         * @return {*} This Server
         */
        serveClient(v : boolean) : Server;

        /**
         * Gets the client serving path
         * @default '/socket.io'
         * @return {string}
         */
        path() : string;

        /**
         * Sets the client serving path
         * @param {string} v The path to serve the client file on
         * @default '/socket.io'
         * @return {*} This Server
         */
        path(v : string) : Server;

        /**
         * Gets the adapter that we're going to use for handling rooms
         * @default typeof Adapter
         * @return {*}
         */
        adapter() : any;

        /**
         * Sets the adapter (class) that we're going to use for handling rooms
         * @param {*} v The class for the adapter to create
         * @default typeof Adapter
         * @return {*} This Server
         */
        adapter(v : any) : Server;

        /**
         * Gets the allowed origins for requests
         * @default "*:*"
         * @return {string}
         */
        origins() : string;

        /**
         * Sets the allowed origins for requests
         * @param {string} v The allowed origins, in host:port form
         * @default "*:*"
         * return This Server
         * @return {*}
         */
        origins(v : string) : Server;

        /**
         * Attaches socket.io to a server
         * @param {*} srv The http.Server that we want to attach to
         * @param {*} opts An optional parameters object
         * @return {*} This Server
         */
        attach(srv : any, opts : SocketIO.ServerOptions) : Server;

        /**
         * Attaches socket.io to a port
         * @param {number} port The port that we want to attach to
         * @param {*} opts An optional parameters object
         * @return {*} This Server
         */
        attach(port : number, opts : SocketIO.ServerOptions) : Server;

        /**
         * @see attach( srv, opts )
         * @param {*} srv
         * @param {*} opts
         * @return {*}
         */
        listen(srv : any, opts : SocketIO.ServerOptions) : Server;

        /**
         * @see attach( port, opts )
         * @param {number} port
         * @param {*} opts
         * @return {*}
         */
        listen(port : number, opts : SocketIO.ServerOptions) : Server;

        /**
         * Binds socket.io to an engine.io intsance
         * @param src The Engine.io (or compatible) server to bind to
         * @return {*} This Server
         * @param {*} srv
         */
        bind(srv : any) : Server;

        /**
         * Called with each incoming connection
         * @param {*} socket The Engine.io Socket
         * @return {*} This Server
         */
        onconnection(socket : any) : Server;

        /**
         * Looks up/creates a Namespace
         * @param {string} nsp The name of the NameSpace to look up/create. Should start
         * with a '/'
         * @return {*} The Namespace
         */
        of(nsp : string) : SocketIO.Namespace;

        /**
         * Closes the server connection
         */
        close();

        /**
         * The event fired when we get a new connection
         * @param {*} event The event being fired: 'connection'
         * @param {*} listener A listener that should take one parameter of type Socket
         * @return {*} The default '/' Namespace
         */
        on(event : "connection", listener : (p1: SocketIO.Socket) => void) : SocketIO.Namespace;

        /**
         * @see on( 'connection', listener )
         * @param {*} event
         * @param {*} listener
         * @return {*}
         */
        on(event : "connect", listener : (p1: SocketIO.Socket) => void) : SocketIO.Namespace;

        /**
         * Base 'on' method to add a listener for an event
         * @param {string} event The event that we want to add a listener for
         * @param {Function} listener The callback to call when we get the event. The parameters
         * for the callback depend on the event
         * @return {*} The default '/' Namespace
         */
        on(event : string, listener : Function) : SocketIO.Namespace;

        /**
         * Targets a room when emitting to the default '/' Namespace
         * @param {string} room The name of the room that we're targeting
         * @return {*} The default '/' Namespace
         */
        to(room : string) : SocketIO.Namespace;

        /**
         * @see to( room )
         * @param {string} room
         * @return {*}
         */
        in(room : string) : SocketIO.Namespace;

        /**
         * Registers a middleware function, which is a function that gets executed
         * for every incoming Socket, on the default '/' Namespace
         * @param {*} fn The function to call when we get a new incoming socket. It should
         * take one parameter of type Socket, and one callback function to call to
         * execute the next middleware function. The callback can take one optional
         * parameter, err, if there was an error. Errors passed to middleware callbacks
         * are sent as special 'error' packets to clients
         * @return {*} The default '/' Namespace
         */
        use(fn : (p1: SocketIO.Socket, p2: (p1: any) => void) => void) : SocketIO.Namespace;

        /**
         * Emits an event to the default Namespace
         * @param {string} event The event that we want to emit
         * @param {Array} args Any number of optional arguments to pass with the event. If the
         * last argument is a function, it will be called as an ack. The ack should
         * take whatever data was sent with the packet
         * @return {*} The default '/' Namespace
         */
        emit(event : string, ...args : any[]) : SocketIO.Namespace;

        /**
         * Sends a 'message' event
         * @see emit( event, ...args )
         * @return {*} The default '/' Namespace
         * @param {Array} args
         */
        send(...args : any[]) : SocketIO.Namespace;

        /**
         * @see send( ...args )
         * @param {Array} args
         * @return {*}
         */
        write(...args : any[]) : SocketIO.Namespace;

        /**
         * Gets a list of clients
         * @return {*} The default '/' Namespace
         * @param {Array} args
         */
        clients(...args : any[]) : SocketIO.Namespace;

        /**
         * Sets the compress flag
         * @return {*} The default '/' Namespace
         * @param {Array} args
         */
        compress(...args : any[]) : SocketIO.Namespace;

        /**
         * Attaches socket.io to a server
         * @param {*} srv The http.Server that we want to attach to
         * @param opts An optional parameters object
         * @return {*} This Server
         */
        attach(srv : any) : Server;

        /**
         * Attaches socket.io to a port
         * @param {number} port The port that we want to attach to
         * @param opts An optional parameters object
         * @return {*} This Server
         */
        attach(port : number) : Server;

        /**
         * @see attach( srv, opts )
         * @param {*} srv
         * @return {*}
         */
        listen(srv : any) : Server;

        /**
         * @see attach( port, opts )
         * @param {number} port
         * @return {*}
         */
        listen(port : number) : Server;
    }
}
declare namespace SocketIO {
    /**
     * Options to pass to our server when creating it
     * @class
     * @extends Object
     */
    export interface ServerOptions {
        /**
         * The path to server the client file to
         * @default '/socket.io'
         */
        path? : string;

        /**
         * Should we serve the client file?
         * @default true
         */
        serveClient? : boolean;

        /**
         * The adapter to use for handling rooms. NOTE: this should be a class,
         * not an object
         * @default typeof Adapter
         */
        adapter? : SocketIO.Adapter;

        /**
         * Accepted origins
         * @default '*:*'
         */
        origins? : string;

        /**
         * How many milliseconds without a pong packed to consider the connection closed (engine.io)
         * @default 60000
         */
        pingTimeout? : number;

        /**
         * How many milliseconds before sending a new ping packet (keep-alive) (engine.io)
         * @default 25000
         */
        pingInterval? : number;

        /**
         * How many bytes or characters a message can be when polling, before closing the session
         * (to avoid Dos) (engine.io)
         * @default 10E7
         */
        maxHttpBufferSize? : number;

        /**
         * A function that receives a given handshake or upgrade request as its first parameter,
         * and can decide whether to continue or not. The second argument is a function that needs
         * to be called with the decided information: fn( err, success ), where success is a boolean
         * value where false means that the request is rejected, and err is an error code (engine.io)
         * @default null
         */
        allowRequest? : (p1: any, p2: (p1: number, p2: boolean) => void) => void;

        /**
         * Transports to allow connections to (engine.io)
         * @default ['polling','websocket']
         */
        transports? : string[];

        /**
         * Whether to allow transport upgrades (engine.io)
         * @default true
         */
        allowUpgrades? : boolean;

        /**
         * parameters of the WebSocket permessage-deflate extension (see ws module).
         * Set to false to disable (engine.io)
         * @default true
         */
        perMessageDeflate? : ((any)|(boolean));

        /**
         * Parameters of the http compression for the polling transports (see zlib).
         * Set to false to disable, or set an object with parameter "threshold:number"
         * to only compress data if the byte size is above this value (1024) (engine.io)
         * @default true|1024
         */
        httpCompression? : ((any)|(boolean));

        /**
         * Name of the HTTP cookie that contains the client sid to send as part of
         * handshake response headers. Set to false to not send one (engine.io)
         * @default "io"
         */
        cookie? : ((string)|(boolean));
    }
}
declare namespace SocketIO {
    /**
     * The socket, which handles our connection for a namespace. NOTE: while
     * we technically extend NodeJS.EventEmitter, we're not putting it here
     * as we have a problem with the emit() event (as it's overridden with a
     * different return)
     * @class
     * @extends Object
     */
    export interface Socket {
        /**
         * The namespace that this socket is for
         */
        nsp : SocketIO.Namespace;

        /**
         * The Server that our namespace is in
         */
        server : SocketIO.Server;

        /**
         * The Adapter that we use to handle our rooms
         */
        adapter : SocketIO.Adapter;

        /**
         * The unique ID for this Socket. Regenerated at every connection. This is
         * also the name of the room that the Socket automatically joins on connection
         */
        id : string;

        /**
         * The http.IncomingMessage request sent with the connection. Useful
         * for recovering headers etc
         */
        request : any;

        /**
         * The Client associated with this Socket
         */
        client : SocketIO.Client;

        /**
         * The underlying Engine.io Socket instance
         */
        conn : any;

        /**
         * The list of rooms that this Socket is currently in, where
         * the ID the the room ID
         */
        rooms : any;

        /**
         * Is the Socket currently connected?
         */
        connected : boolean;

        /**
         * Is the Socket currently disconnected?
         */
        disconnected : boolean;

        /**
         * The object used when negociating the handshake
         */
        handshake : any;

        /**
         * Sets the 'json' flag when emitting an event
         */
        json : Socket;

        /**
         * Sets the 'volatile' flag when emitting an event. Volatile messages are
         * messages that can be dropped because of network issues and the like. Use
         * for high-volume/real-time messages where you don't need to receive *all*
         * of them
         */
        volatile : Socket;

        /**
         * Sets the 'broadcast' flag when emitting an event. Broadcasting an event
         * will send it to all the other sockets in the namespace except for yourself
         */
        broadcast : Socket;

        /**
         * Emits an event to this client. If the 'broadcast' flag was set, this will
         * emit to all other clients, except for this one
         * @param {string} event The event that we want to emit
         * @param {Array} args Any number of optional arguments to pass with the event. If the
         * last argument is a function, it will be called as an ack. The ack should
         * take whatever data was sent with the packet
         * @return {*} This Socket
         */
        emit(event : string, ...args : any[]) : Socket;

        /**
         * Targets a room when broadcasting
         * @param {string} room The name of the room that we're targeting
         * @return {*} This Socket
         */
        to(room : string) : Socket;

        /**
         * @see to( room )
         * @param {string} room
         * @return {*}
         */
        in(room : string) : Socket;

        /**
         * Sends a 'message' event
         * @see emit( event, ...args )
         * @param {Array} args
         * @return {*}
         */
        send(...args : any[]) : Socket;

        /**
         * @see send( ...args )
         * @param {Array} args
         * @return {*}
         */
        write(...args : any[]) : Socket;

        /**
         * Joins a room. You can join multiple rooms, and by default, on connection,
         * you join a room with the same name as your ID
         * @param {string} name The name of the room that we want to join
         * @param {*} fn An optional callback to call when we've joined the room. It should
         * take an optional parameter, err, of a possible error
         * @return {*} This Socket
         */
        join(name : string, fn : (p1: any) => void) : Socket;

        /**
         * Leaves a room
         * @param {string} name The name of the room to leave
         * @param {Function} fn An optional callback to call when we've left the room. It should
         * take on optional parameter, err, of a possible error
         * @return {*}
         */
        leave(name : string, fn : Function) : Socket;

        /**
         * Leaves all the rooms that we've joined
         */
        leaveAll();

        /**
         * Disconnects this Socket
         * @param {boolean} close If true, also closes the underlying connection
         * @return {*} This Socket
         */
        disconnect(close : boolean) : Socket;

        /**
         * Adds a listener for a particular event. Calling multiple times will add
         * multiple listeners
         * @param {string} event The event that we're listening for
         * @param {Function} fn The function to call when we get the event. Parameters depend on the
         * event in question
         * @return {*} This Socket
         */
        on(event : string, fn : Function) : Socket;

        /**
         * @see on( event, fn )
         * @param {string} event
         * @param {Function} fn
         * @return {*}
         */
        addListener(event : string, fn : Function) : Socket;

        /**
         * Adds a listener for a particular event that will be invoked
         * a single time before being automatically removed
         * @param {string} event The event that we're listening for
         * @param {Function} fn The function to call when we get the event. Parameters depend on
         * the event in question
         * @return {*} This Socket
         */
        once(event : string, fn : Function) : Socket;

        /**
         * Removes a listener for a particular type of event. This will either
         * remove a specific listener, or all listeners for this type of event
         * @param {string} event The event that we want to remove the listener of
         * @param {Function} fn The function to remove, or null if we want to remove all functions
         * @return {*} This Socket
         */
        removeListener(event : string, fn : Function) : Socket;

        /**
         * Removes all event listeners on this object
         * @return {*} This Socket
         * @param {string} event
         */
        removeAllListeners(event : string) : Socket;

        /**
         * Sets the maximum number of listeners this instance can have
         * @param {number} n The max number of listeners we can add to this emitter
         * @return {*} This Socket
         */
        setMaxListeners(n : number) : Socket;

        /**
         * Returns all the callbacks for a particular event
         * @param {string} event The event that we're looking for the callbacks of
         * @return {Array} An array of callback Functions, or an empty array if we don't have any
         */
        listeners(event : string) : Function[];

        /**
         * Sets the compress flag
         * @param {boolean} compress If `true`, compresses the sending data
         * @return {*} This Socket
         */
        compress(compress : boolean) : Socket;

        /**
         * Joins a room. You can join multiple rooms, and by default, on connection,
         * you join a room with the same name as your ID
         * @param {string} name The name of the room that we want to join
         * @param fn An optional callback to call when we've joined the room. It should
         * take an optional parameter, err, of a possible error
         * @return {*} This Socket
         */
        join(name : string) : Socket;

        /**
         * Leaves a room
         * @param {string} name The name of the room to leave
         * @param fn An optional callback to call when we've left the room. It should
         * take on optional parameter, err, of a possible error
         * @return {*}
         */
        leave(name : string) : Socket;

        /**
         * Disconnects this Socket
         * @param close If true, also closes the underlying connection
         * @return {*} This Socket
         */
        disconnect() : Socket;

        /**
         * Removes a listener for a particular type of event. This will either
         * remove a specific listener, or all listeners for this type of event
         * @param {string} event The event that we want to remove the listener of
         * @param fn The function to remove, or null if we want to remove all functions
         * @return {*} This Socket
         */
        removeListener(event : string) : Socket;

        /**
         * Removes all event listeners on this object
         * @return {*} This Socket
         */
        removeAllListeners() : Socket;

        /**
         * Joins a room. You can join multiple rooms, and by default, on connection,
         * you join a room with the same name as your ID
         * @param {string} name The name of the room that we want to join
         * @param {() => void} fn An optional callback to call when we've joined the room. It should
         * take an optional parameter, err, of a possible error
         * @return {*} This Socket
         */
        join(name : string, fn : () => void) : Socket;
    }
}
interface SocketIOStatic {
    /**
     * Default Server constructor
     * @return {*}
     */
    () : SocketIO.Server;

    /**
     * Creates a new Server
     * @param {*} srv The HTTP server that we're going to bind to
     * @param {*} opts An optional parameters object
     * @return {*}
     */
    (srv : any, opts : SocketIO.ServerOptions) : SocketIO.Server;

    /**
     * Creates a new Server
     * @param {string} port A port to bind to, as a number, or a string
     * @param An optional parameters object
     * @param {*} opts
     * @return {*}
     */
    (port : string, opts : SocketIO.ServerOptions) : SocketIO.Server;

    /**
     * Creates a new Server
     * @param A parameters object
     * @param {*} opts
     * @return {*}
     */
    (opts : SocketIO.ServerOptions) : SocketIO.Server;

    /**
     * Backwards compatibility
     * @see io().listen()
     */
    listen : any;

    /**
     * Creates a new Server
     * @param {*} srv The HTTP server that we're going to bind to
     * @param opts An optional parameters object
     * @return {*}
     */
    (srv : any) : SocketIO.Server;

    /**
     * Creates a new Server
     * @param {string} port A port to bind to, as a number, or a string
     * @param An optional parameters object
     * @return {*}
     */
    (port : string) : SocketIO.Server;

    /**
     * Creates a new Server
     * @param {number} port A port to bind to, as a number, or a string
     * @param An optional parameters object
     * @param {*} opts
     * @return {*}
     */
    (port : number, opts : SocketIO.ServerOptions) : SocketIO.Server;

    /**
     * Creates a new Server
     * @param {number} port A port to bind to, as a number, or a string
     * @param An optional parameters object
     * @return {*}
     */
    (port : number) : SocketIO.Server;
}

interface StringTypes {}

declare namespace StringTypes {

    /**
     * Generated to type the string "connection".
     * @exclude
     * @class
     */
    export interface connection {    }

    /**
     * Generated to type the string "connect".
     * @exclude
     * @class
     */
    export interface connect {    }
}




declare module "socket.io";
