/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
declare namespace Assert {}
declare namespace Assert {}
declare namespace Assert {
    export function fail(actual : any, expected : any, message : string, operator : string);

    export function ok(value : any, message : string);

    export function equal(actual : any, expected : any, message : string);

    export function notEqual(actual : any, expected : any, message : string);

    export function deepEqual(actual : any, expected : any, message : string);

    export function notDeepEqual(acutal : any, expected : any, message : string);

    export function strictEqual(actual : any, expected : any, message : string);

    export function notStrictEqual(actual : any, expected : any, message : string);

    export function deepStrictEqual(actual : any, expected : any, message : string);

    export function notDeepStrictEqual(actual : any, expected : any, message : string);

    export var doesNotThrow : any;

    export function ifError(value : any);

    export function ok(value : any);

    export function equal(actual : any, expected : any);

    export function notEqual(actual : any, expected : any);

    export function deepEqual(actual : any, expected : any);

    export function notDeepEqual(acutal : any, expected : any);

    export function strictEqual(actual : any, expected : any);

    export function notStrictEqual(actual : any, expected : any);

    export function deepStrictEqual(actual : any, expected : any);

    export function notDeepStrictEqual(actual : any, expected : any);

}
declare namespace Assert {
    export class AssertionError extends Error {
        public name : string;

        public message : string;

        public actual : any;

        public expected : any;

        public operator : string;

        public generatedMessage : boolean;

        public constructor(options : any);

        public constructor();
    }
}
declare namespace Assert {
    /**
     * This is an automatically generated object type (see the source definition).
     * @class
     * @extends Object
     */
    export class Throws {
        public static applyStatic(block : Function, message : string);

        public static applyStatic(block : Function, error : Function, message : string);

        public static applyStatic(block : Function, error : RegExp, message : string);

        public static applyStatic(block : Function, error : (p1: any) => boolean, message : string);

        public static applyStatic(block : Function);

        public static applyStatic(block : Function, error : Function);

        public static applyStatic(block : Function, error : RegExp);

        public static applyStatic(block : Function, error : (p1: any) => boolean);
    }
}
/**
 * Allocates a new buffer containing the given {str}.
 * 
 * @param {string} str String to store in buffer.
 * @param {string} encoding encoding to use, optional.  Default is 'utf8'
 * @class
 * @extends *
 */
interface Buffer extends NodeBuffer {
    constructor(str : string, encoding : string);

    constructor(size : number);

    constructor(array : Uint8Array);

    constructor(arrayBuffer : ArrayBuffer);

    constructor(array : any[]);

    constructor(buffer : Buffer);

    constructor(str : string);

    constructor();
}

declare namespace Buffer {

    export var prototype : Buffer;

    /**
     * Allocates a new Buffer using an {array} of octets.
     * 
     * @param {Array} array
     * @return {*}
     */
    export function from(array : any[]) : Buffer;

    /**
     * When passed a reference to the .buffer property of a TypedArray instance,
     * the newly created Buffer will share the same allocated memory as the TypedArray.
     * The optional {byteOffset} and {length} arguments specify a memory range
     * within the {arrayBuffer} that will be shared by the Buffer.
     * 
     * @param {ArrayBuffer} arrayBuffer The .buffer property of a TypedArray or a new ArrayBuffer()
     * @param {number} byteOffset
     * @param {number} length
     * @return {*}
     */
    export function from(arrayBuffer : ArrayBuffer, byteOffset : number, length : number) : Buffer;

    /**
     * Copies the passed {buffer} data onto a new Buffer instance.
     * 
     * @param {*} buffer
     * @return {*}
     */
    export function from(buffer : Buffer) : Buffer;

    /**
     * Creates a new Buffer containing the given JavaScript string {str}.
     * If provided, the {encoding} parameter identifies the character encoding.
     * If not provided, {encoding} defaults to 'utf8'.
     * 
     * @param {string} str
     * @param {string} encoding
     * @return {*}
     */
    export function from(str : string, encoding : string) : Buffer;

    /**
     * Returns true if {obj} is a Buffer
     * 
     * @param {*} obj object to test.
     * @return {boolean}
     */
    export function isBuffer(obj : any) : boolean;

    /**
     * Returns true if {encoding} is a valid encoding argument.
     * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
     * 
     * @param {string} encoding string to test.
     * @return {boolean}
     */
    export function isEncoding(encoding : string) : boolean;

    

    /**
     * Returns a buffer which is the result of concatenating all the buffers in the list together.
     * 
     * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
     * If the list has exactly one item, then the first item of the list is returned.
     * If the list has more than one item, then a new Buffer is created.
     * 
     * @param {Array} list An array of Buffer objects to concatenate
     * @param {number} totalLength Total length of the buffers when concatenated.
     * If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
     * @return {*}
     */
    export function concat(list : Buffer[], totalLength : number) : Buffer;

    /**
     * The same as buf1.compare(buf2).
     * @param {*} buf1
     * @param {*} buf2
     * @return {number}
     */
    export function compare(buf1 : Buffer, buf2 : Buffer) : number;

    /**
     * Allocates a new buffer of {size} octets.
     * 
     * @param {number} size count of octets to allocate.
     * @param {string} fill if specified, buffer will be initialized by calling buf.fill(fill).
     * If parameter is omitted, buffer will be filled with zeros.
     * @param {string} encoding encoding used for call to buf.fill while initalizing
     * @return {*}
     */
    export function alloc(size : number, fill : string, encoding : string) : Buffer;

    /**
     * Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
     * of the newly created Buffer are unknown and may contain sensitive data.
     * 
     * @param {number} size count of octets to allocate
     * @return {*}
     */
    export function allocUnsafe(size : number) : Buffer;

    /**
     * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
     * of the newly created Buffer are unknown and may contain sensitive data.
     * 
     * @param {number} size count of octets to allocate
     * @return {*}
     */
    export function allocUnsafeSlow(size : number) : Buffer;

    /**
     * When passed a reference to the .buffer property of a TypedArray instance,
     * the newly created Buffer will share the same allocated memory as the TypedArray.
     * The optional {byteOffset} and {length} arguments specify a memory range
     * within the {arrayBuffer} that will be shared by the Buffer.
     * 
     * @param {ArrayBuffer} arrayBuffer The .buffer property of a TypedArray or a new ArrayBuffer()
     * @param {number} byteOffset
     * @param length
     * @return {*}
     */
    export function from(arrayBuffer : ArrayBuffer, byteOffset : number) : Buffer;

    /**
     * When passed a reference to the .buffer property of a TypedArray instance,
     * the newly created Buffer will share the same allocated memory as the TypedArray.
     * The optional {byteOffset} and {length} arguments specify a memory range
     * within the {arrayBuffer} that will be shared by the Buffer.
     * 
     * @param {ArrayBuffer} arrayBuffer The .buffer property of a TypedArray or a new ArrayBuffer()
     * @param byteOffset
     * @param length
     * @return {*}
     */
    export function from(arrayBuffer : ArrayBuffer) : Buffer;

    /**
     * Creates a new Buffer containing the given JavaScript string {str}.
     * If provided, the {encoding} parameter identifies the character encoding.
     * If not provided, {encoding} defaults to 'utf8'.
     * 
     * @param {string} str
     * @return {*}
     */
    export function from(str : string) : Buffer;

    

    /**
     * Returns a buffer which is the result of concatenating all the buffers in the list together.
     * 
     * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
     * If the list has exactly one item, then the first item of the list is returned.
     * If the list has more than one item, then a new Buffer is created.
     * 
     * @param {Array} list An array of Buffer objects to concatenate
     * @param totalLength Total length of the buffers when concatenated.
     * If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
     * @return {*}
     */
    export function concat(list : Buffer[]) : Buffer;

    /**
     * Allocates a new buffer of {size} octets.
     * 
     * @param {number} size count of octets to allocate.
     * @param {string} fill if specified, buffer will be initialized by calling buf.fill(fill).
     * If parameter is omitted, buffer will be filled with zeros.
     * @param encoding encoding used for call to buf.fill while initalizing
     * @return {*}
     */
    export function alloc(size : number, fill : string) : Buffer;

    /**
     * Allocates a new buffer of {size} octets.
     * 
     * @param {number} size count of octets to allocate.
     * @param fill if specified, buffer will be initialized by calling buf.fill(fill).
     * If parameter is omitted, buffer will be filled with zeros.
     * @param encoding encoding used for call to buf.fill while initalizing
     * @return {*}
     */
    export function alloc(size : number) : Buffer;

    /**
     * Allocates a new buffer of {size} octets.
     * 
     * @param {number} size count of octets to allocate.
     * @param {*} fill if specified, buffer will be initialized by calling buf.fill(fill).
     * If parameter is omitted, buffer will be filled with zeros.
     * @param {string} encoding encoding used for call to buf.fill while initalizing
     * @return {*}
     */
    export function alloc(size : number, fill : Buffer, encoding : string) : Buffer;

    /**
     * Allocates a new buffer of {size} octets.
     * 
     * @param {number} size count of octets to allocate.
     * @param {number} fill if specified, buffer will be initialized by calling buf.fill(fill).
     * If parameter is omitted, buffer will be filled with zeros.
     * @param {string} encoding encoding used for call to buf.fill while initalizing
     * @return {*}
     */
    export function alloc(size : number, fill : number, encoding : string) : Buffer;

    /**
     * Allocates a new buffer of {size} octets.
     * 
     * @param {number} size count of octets to allocate.
     * @param {number} fill if specified, buffer will be initialized by calling buf.fill(fill).
     * If parameter is omitted, buffer will be filled with zeros.
     * @param encoding encoding used for call to buf.fill while initalizing
     * @return {*}
     */
    export function alloc(size : number, fill : number) : Buffer;

    /**
     * Allocates a new buffer of {size} octets.
     * 
     * @param {number} size count of octets to allocate.
     * @param {*} fill if specified, buffer will be initialized by calling buf.fill(fill).
     * If parameter is omitted, buffer will be filled with zeros.
     * @param encoding encoding used for call to buf.fill while initalizing
     * @return {*}
     */
    export function alloc(size : number, fill : Buffer) : Buffer;
}


interface NodeRequireFunction {
    (id : string) : any;
}

declare namespace constants {}
declare namespace constants {
    export var E2BIG : number;

    export var EACCES : number;

    export var EADDRINUSE : number;

    export var EADDRNOTAVAIL : number;

    export var EAFNOSUPPORT : number;

    export var EAGAIN : number;

    export var EALREADY : number;

    export var EBADF : number;

    export var EBADMSG : number;

    export var EBUSY : number;

    export var ECANCELED : number;

    export var ECHILD : number;

    export var ECONNABORTED : number;

    export var ECONNREFUSED : number;

    export var ECONNRESET : number;

    export var EDEADLK : number;

    export var EDESTADDRREQ : number;

    export var EDOM : number;

    export var EEXIST : number;

    export var EFAULT : number;

    export var EFBIG : number;

    export var EHOSTUNREACH : number;

    export var EIDRM : number;

    export var EILSEQ : number;

    export var EINPROGRESS : number;

    export var EINTR : number;

    export var EINVAL : number;

    export var EIO : number;

    export var EISCONN : number;

    export var EISDIR : number;

    export var ELOOP : number;

    export var EMFILE : number;

    export var EMLINK : number;

    export var EMSGSIZE : number;

    export var ENAMETOOLONG : number;

    export var ENETDOWN : number;

    export var ENETRESET : number;

    export var ENETUNREACH : number;

    export var ENFILE : number;

    export var ENOBUFS : number;

    export var ENODATA : number;

    export var ENODEV : number;

    export var ENOENT : number;

    export var ENOEXEC : number;

    export var ENOLCK : number;

    export var ENOLINK : number;

    export var ENOMEM : number;

    export var ENOMSG : number;

    export var ENOPROTOOPT : number;

    export var ENOSPC : number;

    export var ENOSR : number;

    export var ENOSTR : number;

    export var ENOSYS : number;

    export var ENOTCONN : number;

    export var ENOTDIR : number;

    export var ENOTEMPTY : number;

    export var ENOTSOCK : number;

    export var ENOTSUP : number;

    export var ENOTTY : number;

    export var ENXIO : number;

    export var EOPNOTSUPP : number;

    export var EOVERFLOW : number;

    export var EPERM : number;

    export var EPIPE : number;

    export var EPROTO : number;

    export var EPROTONOSUPPORT : number;

    export var EPROTOTYPE : number;

    export var ERANGE : number;

    export var EROFS : number;

    export var ESPIPE : number;

    export var ESRCH : number;

    export var ETIME : number;

    export var ETIMEDOUT : number;

    export var ETXTBSY : number;

    export var EWOULDBLOCK : number;

    export var EXDEV : number;

    export var WSAEINTR : number;

    export var WSAEBADF : number;

    export var WSAEACCES : number;

    export var WSAEFAULT : number;

    export var WSAEINVAL : number;

    export var WSAEMFILE : number;

    export var WSAEWOULDBLOCK : number;

    export var WSAEINPROGRESS : number;

    export var WSAEALREADY : number;

    export var WSAENOTSOCK : number;

    export var WSAEDESTADDRREQ : number;

    export var WSAEMSGSIZE : number;

    export var WSAEPROTOTYPE : number;

    export var WSAENOPROTOOPT : number;

    export var WSAEPROTONOSUPPORT : number;

    export var WSAESOCKTNOSUPPORT : number;

    export var WSAEOPNOTSUPP : number;

    export var WSAEPFNOSUPPORT : number;

    export var WSAEAFNOSUPPORT : number;

    export var WSAEADDRINUSE : number;

    export var WSAEADDRNOTAVAIL : number;

    export var WSAENETDOWN : number;

    export var WSAENETUNREACH : number;

    export var WSAENETRESET : number;

    export var WSAECONNABORTED : number;

    export var WSAECONNRESET : number;

    export var WSAENOBUFS : number;

    export var WSAEISCONN : number;

    export var WSAENOTCONN : number;

    export var WSAESHUTDOWN : number;

    export var WSAETOOMANYREFS : number;

    export var WSAETIMEDOUT : number;

    export var WSAECONNREFUSED : number;

    export var WSAELOOP : number;

    export var WSAENAMETOOLONG : number;

    export var WSAEHOSTDOWN : number;

    export var WSAEHOSTUNREACH : number;

    export var WSAENOTEMPTY : number;

    export var WSAEPROCLIM : number;

    export var WSAEUSERS : number;

    export var WSAEDQUOT : number;

    export var WSAESTALE : number;

    export var WSAEREMOTE : number;

    export var WSASYSNOTREADY : number;

    export var WSAVERNOTSUPPORTED : number;

    export var WSANOTINITIALISED : number;

    export var WSAEDISCON : number;

    export var WSAENOMORE : number;

    export var WSAECANCELLED : number;

    export var WSAEINVALIDPROCTABLE : number;

    export var WSAEINVALIDPROVIDER : number;

    export var WSAEPROVIDERFAILEDINIT : number;

    export var WSASYSCALLFAILURE : number;

    export var WSASERVICE_NOT_FOUND : number;

    export var WSATYPE_NOT_FOUND : number;

    export var WSA_E_NO_MORE : number;

    export var WSA_E_CANCELLED : number;

    export var WSAEREFUSED : number;

    export var SIGHUP : number;

    export var SIGINT : number;

    export var SIGILL : number;

    export var SIGABRT : number;

    export var SIGFPE : number;

    export var SIGKILL : number;

    export var SIGSEGV : number;

    export var SIGTERM : number;

    export var SIGBREAK : number;

    export var SIGWINCH : number;

    export var SSL_OP_ALL : number;

    export var SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION : number;

    export var SSL_OP_CIPHER_SERVER_PREFERENCE : number;

    export var SSL_OP_CISCO_ANYCONNECT : number;

    export var SSL_OP_COOKIE_EXCHANGE : number;

    export var SSL_OP_CRYPTOPRO_TLSEXT_BUG : number;

    export var SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS : number;

    export var SSL_OP_EPHEMERAL_RSA : number;

    export var SSL_OP_LEGACY_SERVER_CONNECT : number;

    export var SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER : number;

    export var SSL_OP_MICROSOFT_SESS_ID_BUG : number;

    export var SSL_OP_MSIE_SSLV2_RSA_PADDING : number;

    export var SSL_OP_NETSCAPE_CA_DN_BUG : number;

    export var SSL_OP_NETSCAPE_CHALLENGE_BUG : number;

    export var SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG : number;

    export var SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG : number;

    export var SSL_OP_NO_COMPRESSION : number;

    export var SSL_OP_NO_QUERY_MTU : number;

    export var SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION : number;

    export var SSL_OP_NO_SSLv2 : number;

    export var SSL_OP_NO_SSLv3 : number;

    export var SSL_OP_NO_TICKET : number;

    export var SSL_OP_NO_TLSv1 : number;

    export var SSL_OP_NO_TLSv1_1 : number;

    export var SSL_OP_NO_TLSv1_2 : number;

    export var SSL_OP_PKCS1_CHECK_1 : number;

    export var SSL_OP_PKCS1_CHECK_2 : number;

    export var SSL_OP_SINGLE_DH_USE : number;

    export var SSL_OP_SINGLE_ECDH_USE : number;

    export var SSL_OP_SSLEAY_080_CLIENT_DH_BUG : number;

    export var SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG : number;

    export var SSL_OP_TLS_BLOCK_PADDING_BUG : number;

    export var SSL_OP_TLS_D5_BUG : number;

    export var SSL_OP_TLS_ROLLBACK_BUG : number;

    export var ENGINE_METHOD_DSA : number;

    export var ENGINE_METHOD_DH : number;

    export var ENGINE_METHOD_RAND : number;

    export var ENGINE_METHOD_ECDH : number;

    export var ENGINE_METHOD_ECDSA : number;

    export var ENGINE_METHOD_CIPHERS : number;

    export var ENGINE_METHOD_DIGESTS : number;

    export var ENGINE_METHOD_STORE : number;

    export var ENGINE_METHOD_PKEY_METHS : number;

    export var ENGINE_METHOD_PKEY_ASN1_METHS : number;

    export var ENGINE_METHOD_ALL : number;

    export var ENGINE_METHOD_NONE : number;

    export var DH_CHECK_P_NOT_SAFE_PRIME : number;

    export var DH_CHECK_P_NOT_PRIME : number;

    export var DH_UNABLE_TO_CHECK_GENERATOR : number;

    export var DH_NOT_SUITABLE_GENERATOR : number;

    export var NPN_ENABLED : number;

    export var RSA_PKCS1_PADDING : number;

    export var RSA_SSLV23_PADDING : number;

    export var RSA_NO_PADDING : number;

    export var RSA_PKCS1_OAEP_PADDING : number;

    export var RSA_X931_PADDING : number;

    export var RSA_PKCS1_PSS_PADDING : number;

    export var POINT_CONVERSION_COMPRESSED : number;

    export var POINT_CONVERSION_UNCOMPRESSED : number;

    export var POINT_CONVERSION_HYBRID : number;

    export var O_RDONLY : number;

    export var O_WRONLY : number;

    export var O_RDWR : number;

    export var S_IFMT : number;

    export var S_IFREG : number;

    export var S_IFDIR : number;

    export var S_IFCHR : number;

    export var S_IFBLK : number;

    export var S_IFIFO : number;

    export var S_IFSOCK : number;

    export var S_IRWXU : number;

    export var S_IRUSR : number;

    export var S_IWUSR : number;

    export var S_IXUSR : number;

    export var S_IRWXG : number;

    export var S_IRGRP : number;

    export var S_IWGRP : number;

    export var S_IXGRP : number;

    export var S_IRWXO : number;

    export var S_IROTH : number;

    export var S_IWOTH : number;

    export var S_IXOTH : number;

    export var S_IFLNK : number;

    export var O_CREAT : number;

    export var O_EXCL : number;

    export var O_NOCTTY : number;

    export var O_DIRECTORY : number;

    export var O_NOATIME : number;

    export var O_NOFOLLOW : number;

    export var O_SYNC : number;

    export var O_SYMLINK : number;

    export var O_DIRECT : number;

    export var O_NONBLOCK : number;

    export var O_TRUNC : number;

    export var O_APPEND : number;

    export var F_OK : number;

    export var R_OK : number;

    export var W_OK : number;

    export var X_OK : number;

    export var UV_UDP_REUSEADDR : number;

    export var SIGQUIT : number;

    export var SIGTRAP : number;

    export var SIGIOT : number;

    export var SIGBUS : number;

    export var SIGUSR1 : number;

    export var SIGUSR2 : number;

    export var SIGPIPE : number;

    export var SIGALRM : number;

    export var SIGCHLD : number;

    export var SIGSTKFLT : number;

    export var SIGCONT : number;

    export var SIGSTOP : number;

    export var SIGTSTP : number;

    export var SIGTTIN : number;

    export var SIGTTOU : number;

    export var SIGURG : number;

    export var SIGXCPU : number;

    export var SIGXFSZ : number;

    export var SIGVTALRM : number;

    export var SIGPROF : number;

    export var SIGIO : number;

    export var SIGPOLL : number;

    export var SIGPWR : number;

    export var SIGSYS : number;

    export var SIGUNUSED : number;

    export var defaultCoreCipherList : string;

    export var defaultCipherList : string;

    export var ENGINE_METHOD_RSA : number;

    export var ALPN_ENABLED : number;

}
declare namespace fs.constants {}
declare namespace fs.constants {
    /**
     * Constant for fs.access(). File is visible to the calling process.
     */
    export var F_OK : number;

    /**
     * Constant for fs.access(). File can be read by the calling process.
     */
    export var R_OK : number;

    /**
     * Constant for fs.access(). File can be written by the calling process.
     */
    export var W_OK : number;

    /**
     * Constant for fs.access(). File can be executed by the calling process.
     */
    export var X_OK : number;

    /**
     * Constant for fs.open(). Flag indicating to open a file for read-only access.
     */
    export var O_RDONLY : number;

    /**
     * Constant for fs.open(). Flag indicating to open a file for write-only access.
     */
    export var O_WRONLY : number;

    /**
     * Constant for fs.open(). Flag indicating to open a file for read-write access.
     */
    export var O_RDWR : number;

    /**
     * Constant for fs.open(). Flag indicating to create the file if it does not already exist.
     */
    export var O_CREAT : number;

    /**
     * Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.
     */
    export var O_EXCL : number;

    /**
     * Constant for fs.open(). Flag indicating that if path identifies a terminal device, opening the path shall not cause that terminal to become the controlling terminal for the process (if the process does not already have one).
     */
    export var O_NOCTTY : number;

    /**
     * Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.
     */
    export var O_TRUNC : number;

    /**
     * Constant for fs.open(). Flag indicating that data will be appended to the end of the file.
     */
    export var O_APPEND : number;

    /**
     * Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory.
     */
    export var O_DIRECTORY : number;

    /**
     * Constant for fs.open(). Flag indicating reading accesses to the file system will no longer result in an update to the atime information associated with the file. This flag is available on Linux operating systems only.
     */
    export var O_NOATIME : number;

    /**
     * Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link.
     */
    export var O_NOFOLLOW : number;

    /**
     * Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O.
     */
    export var O_SYNC : number;

    /**
     * Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to.
     */
    export var O_SYMLINK : number;

    /**
     * Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O.
     */
    export var O_DIRECT : number;

    /**
     * Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible.
     */
    export var O_NONBLOCK : number;

    /**
     * Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code.
     */
    export var S_IFMT : number;

    /**
     * Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file.
     */
    export var S_IFREG : number;

    /**
     * Constant for fs.Stats mode property for determining a file's type. File type constant for a directory.
     */
    export var S_IFDIR : number;

    /**
     * Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file.
     */
    export var S_IFCHR : number;

    /**
     * Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file.
     */
    export var S_IFBLK : number;

    /**
     * Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe.
     */
    export var S_IFIFO : number;

    /**
     * Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link.
     */
    export var S_IFLNK : number;

    /**
     * Constant for fs.Stats mode property for determining a file's type. File type constant for a socket.
     */
    export var S_IFSOCK : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner.
     */
    export var S_IRWXU : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner.
     */
    export var S_IRUSR : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner.
     */
    export var S_IWUSR : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner.
     */
    export var S_IXUSR : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group.
     */
    export var S_IRWXG : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group.
     */
    export var S_IRGRP : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group.
     */
    export var S_IWGRP : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group.
     */
    export var S_IXGRP : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others.
     */
    export var S_IRWXO : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others.
     */
    export var S_IROTH : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others.
     */
    export var S_IWOTH : number;

    /**
     * Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others.
     */
    export var S_IXOTH : number;

}
declare namespace fs {}
declare namespace fs {
    export interface FSWatcher extends events.EventEmitter {
        close();

        /**
         * events.EventEmitter
         * 1. change
         * 2. error
         * @param {string} event
         * @param {Function} listener
         * @return {*}
         */
        addListener(event : string, listener : Function) : FSWatcher;

        addListener(event : "change", listener : (p1: string, p2: string) => void) : FSWatcher;

        addListener(event : "error", listener : (p1: number, p2: string) => void) : FSWatcher;

        on(event : string, listener : Function) : FSWatcher;

        on(event : "change", listener : (p1: string, p2: string) => void) : FSWatcher;

        on(event : "error", listener : (p1: number, p2: string) => void) : FSWatcher;

        once(event : string, listener : Function) : FSWatcher;

        once(event : "change", listener : (p1: string, p2: string) => void) : FSWatcher;

        once(event : "error", listener : (p1: number, p2: string) => void) : FSWatcher;

        prependListener(event : string, listener : Function) : FSWatcher;

        prependListener(event : "change", listener : (p1: string, p2: string) => void) : FSWatcher;

        prependListener(event : "error", listener : (p1: number, p2: string) => void) : FSWatcher;

        prependOnceListener(event : string, listener : Function) : FSWatcher;

        prependOnceListener(event : "change", listener : (p1: string, p2: string) => void) : FSWatcher;

        prependOnceListener(event : "error", listener : (p1: number, p2: string) => void) : FSWatcher;

        addListener(event : "change", listener : (p1: string, p2: Buffer) => void) : FSWatcher;

        on(event : "change", listener : (p1: string, p2: Buffer) => void) : FSWatcher;

        once(event : "change", listener : (p1: string, p2: Buffer) => void) : FSWatcher;

        prependListener(event : "change", listener : (p1: string, p2: Buffer) => void) : FSWatcher;

        prependOnceListener(event : "change", listener : (p1: string, p2: Buffer) => void) : FSWatcher;
    }
}
declare namespace fs {}
declare namespace fs {
    /**
     * Asynchronous rename.
     * @param {string} oldPath
     * @param {string} newPath
     * @param {*} callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath : string, newPath : string, callback : (p1: NodeJS.ErrnoException) => void);

    /**
     * Synchronous rename
     * @param {string} oldPath
     * @param {string} newPath
     */
    export function renameSync(oldPath : string, newPath : string);

    export function truncate(path : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function truncate(path : string, len : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function truncateSync(path : string, len : number);

    export function ftruncate(fd : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function ftruncate(fd : number, len : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function ftruncateSync(fd : number, len : number);

    export function chown(path : string, uid : number, gid : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function chownSync(path : string, uid : number, gid : number);

    export function fchown(fd : number, uid : number, gid : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function fchownSync(fd : number, uid : number, gid : number);

    export function lchown(path : string, uid : number, gid : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function lchownSync(path : string, uid : number, gid : number);

    export function chmod(path : string, mode : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function chmod(path : string, mode : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function chmodSync(path : string, mode : number);

    export function chmodSync(path : string, mode : string);

    export function fchmod(fd : number, mode : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function fchmod(fd : number, mode : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function fchmodSync(fd : number, mode : number);

    export function fchmodSync(fd : number, mode : string);

    export function lchmod(path : string, mode : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function lchmod(path : string, mode : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function lchmodSync(path : string, mode : number);

    export function lchmodSync(path : string, mode : string);

    export function stat(path : string, callback : (p1: NodeJS.ErrnoException, p2: fs.Stats) => any);

    export function lstat(path : string, callback : (p1: NodeJS.ErrnoException, p2: fs.Stats) => any);

    export function fstat(fd : number, callback : (p1: NodeJS.ErrnoException, p2: fs.Stats) => any);

    export function statSync(path : string) : fs.Stats;

    export function lstatSync(path : string) : fs.Stats;

    export function fstatSync(fd : number) : fs.Stats;

    export function link(srcpath : string, dstpath : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function linkSync(srcpath : string, dstpath : string);

    export function symlink(srcpath : string, dstpath : string, type : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function symlinkSync(srcpath : string, dstpath : string, type : string);

    export function readlink(path : string, callback : (p1: NodeJS.ErrnoException, p2: string) => any);

    export function readlinkSync(path : string) : string;

    export function realpath(path : string, callback : (p1: NodeJS.ErrnoException, p2: string) => any);

    export function realpath(path : string, cache : any, callback : (p1: NodeJS.ErrnoException, p2: string) => any);

    export function realpathSync(path : string, cache : any) : string;

    export function unlink(path : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function unlinkSync(path : string);

    export function rmdir(path : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function rmdirSync(path : string);

    export function mkdir(path : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function mkdir(path : string, mode : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function mkdir(path : string, mode : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function mkdirSync(path : string, mode : number);

    export function mkdirSync(path : string, mode : string);

    export function mkdtemp(prefix : string, callback : (p1: NodeJS.ErrnoException, p2: string) => void);

    export function mkdtempSync(prefix : string) : string;

    export function readdir(path : string, callback : (p1: NodeJS.ErrnoException, p2: string[]) => void);

    export function readdirSync(path : string) : string[];

    export function close(fd : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function closeSync(fd : number);

    export function open(path : string, flags : string, callback : (p1: NodeJS.ErrnoException, p2: number) => void);

    export function open(path : string, flags : string, mode : number, callback : (p1: NodeJS.ErrnoException, p2: number) => void);

    export function openSync(path : string, flags : string, mode : number) : number;

    export function utimes(path : string, atime : number, mtime : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function utimes(path : string, atime : Date, mtime : Date, callback : (p1: NodeJS.ErrnoException) => void);

    export function utimesSync(path : string, atime : number, mtime : number);

    export function utimesSync(path : string, atime : Date, mtime : Date);

    export function futimes(fd : number, atime : number, mtime : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function futimes(fd : number, atime : Date, mtime : Date, callback : (p1: NodeJS.ErrnoException) => void);

    export function futimesSync(fd : number, atime : number, mtime : number);

    export function futimesSync(fd : number, atime : Date, mtime : Date);

    export function fsync(fd : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function fsyncSync(fd : number);

    export function write(fd : number, buffer : Buffer, offset : number, length : number, position : number, callback : (p1: NodeJS.ErrnoException, p2: number, p3: Buffer) => void);

    export function write(fd : number, buffer : Buffer, offset : number, length : number, callback : (p1: NodeJS.ErrnoException, p2: number, p3: Buffer) => void);

    export function write(fd : number, data : any, callback : (p1: NodeJS.ErrnoException, p2: number, p3: string) => void);

    export function write(fd : number, data : any, offset : number, callback : (p1: NodeJS.ErrnoException, p2: number, p3: string) => void);

    export function write(fd : number, data : any, offset : number, encoding : string, callback : (p1: NodeJS.ErrnoException, p2: number, p3: string) => void);

    export function writeSync(fd : number, buffer : Buffer, offset : number, length : number, position : number) : number;

    export function writeSync(fd : number, data : any, position : number, enconding : string) : number;

    export function read(fd : number, buffer : Buffer, offset : number, length : number, position : number, callback : (p1: NodeJS.ErrnoException, p2: number, p3: Buffer) => void);

    export function readSync(fd : number, buffer : Buffer, offset : number, length : number, position : number) : number;

    export function readFile(filename : string, encoding : string, callback : (p1: NodeJS.ErrnoException, p2: string) => void);

    export function readFile(filename : string, options : any, callback : (p1: NodeJS.ErrnoException, p2: string) => void);

    export function readFile(filename : string, options : any, callback : (p1: NodeJS.ErrnoException, p2: Buffer) => void);

    export function readFile(filename : string, callback : (p1: NodeJS.ErrnoException, p2: Buffer) => void);

    export function readFileSync(filename : string, encoding : string) : string;

    export function readFileSync(filename : string, options : any) : Buffer;

    export function writeFile(filename : string, data : any, callback : (p1: NodeJS.ErrnoException) => void);

    export function writeFile(filename : string, data : any, options : any, callback : (p1: NodeJS.ErrnoException) => void);

    export function writeFileSync(filename : string, data : any, options : any);

    export function appendFile(filename : string, data : any, options : any, callback : (p1: NodeJS.ErrnoException) => void);

    export function appendFile(filename : string, data : any, callback : (p1: NodeJS.ErrnoException) => void);

    export function appendFileSync(filename : string, data : any, options : any);

    export function watchFile(filename : string, listener : (p1: fs.Stats, p2: fs.Stats) => void);

    export function watchFile(filename : string, options : any, listener : (p1: fs.Stats, p2: fs.Stats) => void);

    export function unwatchFile(filename : string, listener : (p1: fs.Stats, p2: fs.Stats) => void);

    export function watch(filename : string, listener : (p1: string, p2: string) => any) : fs.FSWatcher;

    export function watch(filename : string, encoding : string, listener : (p1: string, p2: string) => any) : fs.FSWatcher;

    export function watch(filename : string, options : any, listener : (p1: string, p2: string) => any) : fs.FSWatcher;

    export function exists(path : string, callback : (p1: boolean) => void);

    export function existsSync(path : string) : boolean;

    /**
     * Tests a user's permissions for the file specified by path.
     * @param {string} path
     * @param {*} callback
     */
    export function access(path : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function access(path : string, mode : number, callback : (p1: NodeJS.ErrnoException) => void);

    /**
     * Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise.
     * @param {string} path
     * @param {number} mode
     */
    export function accessSync(path : string, mode : number);

    export function createReadStream(path : string, options : any) : fs.ReadStream;

    export function createWriteStream(path : string, options : any) : fs.WriteStream;

    export function fdatasync(fd : number, callback : Function);

    export function fdatasyncSync(fd : number);

    /**
     * Asynchronous rename.
     * @param {string} oldPath
     * @param {string} newPath
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath : string, newPath : string);

    export function truncate(path : string);

    export function truncate(path : string, len : number);

    export function truncateSync(path : string);

    export function ftruncate(fd : number);

    export function ftruncate(fd : number, len : number);

    export function ftruncateSync(fd : number);

    export function chown(path : string, uid : number, gid : number);

    export function fchown(fd : number, uid : number, gid : number);

    export function lchown(path : string, uid : number, gid : number);

    export function chmod(path : string, mode : number);

    export function chmod(path : string, mode : string);

    export function fchmod(fd : number, mode : number);

    export function fchmod(fd : number, mode : string);

    export function lchmod(path : string, mode : number);

    export function lchmod(path : string, mode : string);

    export function stat(path : string);

    export function lstat(path : string);

    export function fstat(fd : number);

    export function link(srcpath : string, dstpath : string);

    export function symlink(srcpath : string, dstpath : string, type : string);

    export function symlink(srcpath : string, dstpath : string);

    export function symlinkSync(srcpath : string, dstpath : string);

    export function readlink(path : string);

    export function realpath(path : string);

    export function realpathSync(path : string) : string;

    export function unlink(path : string);

    export function rmdir(path : string);

    export function mkdir(path : string);

    export function mkdir(path : string, mode : number);

    export function mkdir(path : string, mode : string);

    export function mkdirSync(path : string);

    export function mkdtemp(prefix : string);

    export function readdir(path : string);

    export function close(fd : number);

    export function openSync(path : string, flags : string) : number;

    export function utimes(path : string, atime : number, mtime : number);

    export function utimes(path : string, atime : Date, mtime : Date);

    export function futimes(fd : number, atime : number, mtime : number);

    export function futimes(fd : number, atime : Date, mtime : Date);

    export function fsync(fd : number);

    export function write(fd : number, buffer : Buffer, offset : number, length : number, position : number);

    export function write(fd : number, buffer : Buffer, offset : number, length : number);

    export function write(fd : number, data : any);

    export function write(fd : number, data : any, offset : number);

    export function write(fd : number, data : any, offset : number, encoding : string);

    export function writeSync(fd : number, buffer : Buffer, offset : number, length : number) : number;

    export function writeSync(fd : number, data : any, position : number) : number;

    export function writeSync(fd : number, data : any) : number;

    export function read(fd : number, buffer : Buffer, offset : number, length : number, position : number);

    export function readFileSync(filename : string) : Buffer;

    export function writeFile(filename : string, data : any);

    export function writeFile(filename : string, data : any, options : any);

    export function writeFileSync(filename : string, data : any);

    export function appendFile(filename : string, data : any, options : any);

    export function appendFile(filename : string, data : any);

    export function appendFileSync(filename : string, data : any);

    export function unwatchFile(filename : string);

    export function watch(filename : string) : fs.FSWatcher;

    export function watch(filename : string, encoding : string) : fs.FSWatcher;

    export function watch(filename : string, options : any) : fs.FSWatcher;

    export function exists(path : string);

    /**
     * Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise.
     * @param {string} path
     */
    export function accessSync(path : string);

    export function createReadStream(path : string) : fs.ReadStream;

    export function createWriteStream(path : string) : fs.WriteStream;

    /**
     * Asynchronous rename.
     * @param {string} oldPath
     * @param {string} newPath
     * @param {() => void} callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath : string, newPath : string, callback : () => void);

    export function truncate(path : string, callback : () => void);

    export function truncate(path : string, len : number, callback : () => void);

    export function ftruncate(fd : number, callback : () => void);

    export function ftruncate(fd : number, len : number, callback : () => void);

    export function chown(path : string, uid : number, gid : number, callback : () => void);

    export function fchown(fd : number, uid : number, gid : number, callback : () => void);

    export function lchown(path : string, uid : number, gid : number, callback : () => void);

    export function chmod(path : string, mode : number, callback : () => void);

    export function chmod(path : string, mode : string, callback : () => void);

    export function fchmod(fd : number, mode : number, callback : () => void);

    export function fchmod(fd : number, mode : string, callback : () => void);

    export function lchmod(path : string, mode : number, callback : () => void);

    export function lchmod(path : string, mode : string, callback : () => void);

    export function link(srcpath : string, dstpath : string, callback : () => void);

    export function symlink(srcpath : string, dstpath : string, type : string, callback : () => void);

    export function unlink(path : string, callback : () => void);

    export function rmdir(path : string, callback : () => void);

    export function mkdir(path : string, callback : () => void);

    export function mkdir(path : string, mode : number, callback : () => void);

    export function mkdir(path : string, mode : string, callback : () => void);

    export function close(fd : number, callback : () => void);

    export function utimes(path : string, atime : number, mtime : number, callback : () => void);

    export function utimes(path : string, atime : Date, mtime : Date, callback : () => void);

    export function futimes(fd : number, atime : number, mtime : number, callback : () => void);

    export function futimes(fd : number, atime : Date, mtime : Date, callback : () => void);

    export function fsync(fd : number, callback : () => void);

    export function truncate(path : Buffer, callback : (p1: NodeJS.ErrnoException) => void);

    export function truncate(path : Buffer, len : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function truncateSync(path : Buffer, len : number);

    export function chown(path : Buffer, uid : number, gid : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function chownSync(path : Buffer, uid : number, gid : number);

    export function lchown(path : Buffer, uid : number, gid : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function lchownSync(path : Buffer, uid : number, gid : number);

    export function chmod(path : Buffer, mode : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function chmod(path : Buffer, mode : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function chmodSync(path : Buffer, mode : number);

    export function chmodSync(path : Buffer, mode : string);

    export function lchmod(path : Buffer, mode : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function lchmod(path : Buffer, mode : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function lchmodSync(path : Buffer, mode : number);

    export function lchmodSync(path : Buffer, mode : string);

    export function stat(path : Buffer, callback : (p1: NodeJS.ErrnoException, p2: fs.Stats) => any);

    export function lstat(path : Buffer, callback : (p1: NodeJS.ErrnoException, p2: fs.Stats) => any);

    export function statSync(path : Buffer) : fs.Stats;

    export function lstatSync(path : Buffer) : fs.Stats;

    export function link(srcpath : Buffer, dstpath : Buffer, callback : (p1: NodeJS.ErrnoException) => void);

    export function link(srcpath : string, dstpath : Buffer, callback : (p1: NodeJS.ErrnoException) => void);

    export function link(srcpath : Buffer, dstpath : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function linkSync(srcpath : string, dstpath : Buffer);

    export function linkSync(srcpath : Buffer, dstpath : string);

    export function linkSync(srcpath : Buffer, dstpath : Buffer);

    export function symlink(srcpath : string, dstpath : Buffer, type : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function symlink(srcpath : Buffer, dstpath : Buffer, type : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function symlink(srcpath : Buffer, dstpath : string, type : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function symlinkSync(srcpath : string, dstpath : Buffer, type : string);

    export function symlinkSync(srcpath : Buffer, dstpath : Buffer, type : string);

    export function symlinkSync(srcpath : Buffer, dstpath : string, type : string);

    export function readlink(path : Buffer, callback : (p1: NodeJS.ErrnoException, p2: string) => any);

    export function readlinkSync(path : Buffer) : string;

    export function realpath(path : Buffer, callback : (p1: NodeJS.ErrnoException, p2: string) => any);

    export function realpath(path : Buffer, cache : any, callback : (p1: NodeJS.ErrnoException, p2: string) => any);

    export function realpathSync(path : Buffer, cache : any) : string;

    export function unlink(path : Buffer, callback : (p1: NodeJS.ErrnoException) => void);

    export function unlinkSync(path : Buffer);

    export function rmdir(path : Buffer, callback : (p1: NodeJS.ErrnoException) => void);

    export function rmdirSync(path : Buffer);

    export function mkdir(path : Buffer, callback : (p1: NodeJS.ErrnoException) => void);

    export function mkdir(path : Buffer, mode : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function mkdir(path : Buffer, mode : string, callback : (p1: NodeJS.ErrnoException) => void);

    export function mkdirSync(path : Buffer, mode : number);

    export function mkdirSync(path : Buffer, mode : string);

    export function readdir(path : Buffer, callback : (p1: NodeJS.ErrnoException, p2: string[]) => void);

    export function readdirSync(path : Buffer) : string[];

    export function open(path : Buffer, flags : number, callback : (p1: NodeJS.ErrnoException, p2: number) => void);

    export function open(path : Buffer, flags : string, callback : (p1: NodeJS.ErrnoException, p2: number) => void);

    export function open(path : string, flags : number, callback : (p1: NodeJS.ErrnoException, p2: number) => void);

    export function open(path : Buffer, flags : number, mode : number, callback : (p1: NodeJS.ErrnoException, p2: number) => void);

    export function open(path : string, flags : number, mode : number, callback : (p1: NodeJS.ErrnoException, p2: number) => void);

    export function open(path : Buffer, flags : string, mode : number, callback : (p1: NodeJS.ErrnoException, p2: number) => void);

    export function openSync(path : Buffer, flags : string, mode : number) : number;

    export function openSync(path : string, flags : number, mode : number) : number;

    export function openSync(path : Buffer, flags : number, mode : number) : number;

    export function utimes(path : Buffer, atime : number, mtime : number, callback : (p1: NodeJS.ErrnoException) => void);

    export function utimes(path : Buffer, atime : Date, mtime : Date, callback : (p1: NodeJS.ErrnoException) => void);

    export function utimesSync(path : Buffer, atime : number, mtime : number);

    export function utimesSync(path : Buffer, atime : Date, mtime : Date);

    export function watch(filename : string, encoding : string, listener : (p1: string, p2: Buffer) => any) : fs.FSWatcher;

    export function watch(filename : string, options : any, listener : (p1: string, p2: Buffer) => any) : fs.FSWatcher;

    export function exists(path : Buffer, callback : (p1: boolean) => void);

    export function existsSync(path : Buffer) : boolean;

    /**
     * Tests a user's permissions for the file specified by path.
     * @param {*} path
     * @param {*} callback
     */
    export function access(path : Buffer, callback : (p1: NodeJS.ErrnoException) => void);

    export function access(path : Buffer, mode : number, callback : (p1: NodeJS.ErrnoException) => void);

    /**
     * Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise.
     * @param {*} path
     * @param {number} mode
     */
    export function accessSync(path : Buffer, mode : number);

    export function createReadStream(path : Buffer, options : any) : fs.ReadStream;

    export function createWriteStream(path : Buffer, options : any) : fs.WriteStream;

    export function truncate(path : Buffer);

    export function truncate(path : Buffer, len : number);

    export function truncateSync(path : Buffer);

    export function chown(path : Buffer, uid : number, gid : number);

    export function lchown(path : Buffer, uid : number, gid : number);

    export function chmod(path : Buffer, mode : number);

    export function chmod(path : Buffer, mode : string);

    export function lchmod(path : Buffer, mode : number);

    export function lchmod(path : Buffer, mode : string);

    export function stat(path : Buffer);

    export function lstat(path : Buffer);

    export function link(srcpath : Buffer, dstpath : string);

    export function link(srcpath : string, dstpath : Buffer);

    export function link(srcpath : Buffer, dstpath : Buffer);

    export function symlink(srcpath : string, dstpath : Buffer, type : string);

    export function symlink(srcpath : Buffer, dstpath : string, type : string);

    export function symlink(srcpath : Buffer, dstpath : Buffer, type : string);

    export function symlink(srcpath : Buffer, dstpath : string);

    export function symlink(srcpath : Buffer, dstpath : Buffer);

    export function symlink(srcpath : string, dstpath : Buffer);

    export function symlinkSync(srcpath : Buffer, dstpath : string);

    export function symlinkSync(srcpath : string, dstpath : Buffer);

    export function symlinkSync(srcpath : Buffer, dstpath : Buffer);

    export function readlink(path : Buffer);

    export function realpath(path : Buffer);

    export function realpathSync(path : Buffer) : string;

    export function unlink(path : Buffer);

    export function rmdir(path : Buffer);

    export function mkdir(path : Buffer);

    export function mkdir(path : Buffer, mode : number);

    export function mkdir(path : Buffer, mode : string);

    export function mkdirSync(path : Buffer);

    export function readdir(path : Buffer);

    export function openSync(path : Buffer, flags : number) : number;

    export function openSync(path : string, flags : number) : number;

    export function openSync(path : Buffer, flags : string) : number;

    export function utimes(path : Buffer, atime : number, mtime : number);

    export function utimes(path : Buffer, atime : Date, mtime : Date);

    export function exists(path : Buffer);

    /**
     * Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise.
     * @param {*} path
     */
    export function accessSync(path : Buffer);

    export function createReadStream(path : Buffer) : fs.ReadStream;

    export function createWriteStream(path : Buffer) : fs.WriteStream;

    export function truncate(path : Buffer, callback : () => void);

    export function truncate(path : Buffer, len : number, callback : () => void);

    export function chown(path : Buffer, uid : number, gid : number, callback : () => void);

    export function lchown(path : Buffer, uid : number, gid : number, callback : () => void);

    export function chmod(path : Buffer, mode : number, callback : () => void);

    export function chmod(path : Buffer, mode : string, callback : () => void);

    export function lchmod(path : Buffer, mode : number, callback : () => void);

    export function lchmod(path : Buffer, mode : string, callback : () => void);

    export function link(srcpath : Buffer, dstpath : string, callback : () => void);

    export function link(srcpath : string, dstpath : Buffer, callback : () => void);

    export function link(srcpath : Buffer, dstpath : Buffer, callback : () => void);

    export function symlink(srcpath : string, dstpath : Buffer, type : string, callback : () => void);

    export function symlink(srcpath : Buffer, dstpath : string, type : string, callback : () => void);

    export function symlink(srcpath : Buffer, dstpath : Buffer, type : string, callback : () => void);

    export function unlink(path : Buffer, callback : () => void);

    export function rmdir(path : Buffer, callback : () => void);

    export function mkdir(path : Buffer, callback : () => void);

    export function mkdir(path : Buffer, mode : number, callback : () => void);

    export function mkdir(path : Buffer, mode : string, callback : () => void);

    export function utimes(path : Buffer, atime : number, mtime : number, callback : () => void);

    export function utimes(path : Buffer, atime : Date, mtime : Date, callback : () => void);

}
declare namespace fs {}
declare namespace fs {}
declare namespace fs {
    export interface Stats {
        isFile() : boolean;

        isDirectory() : boolean;

        isBlockDevice() : boolean;

        isCharacterDevice() : boolean;

        isSymbolicLink() : boolean;

        isFIFO() : boolean;

        isSocket() : boolean;

        dev : number;

        ino : number;

        mode : number;

        nlink : number;

        uid : number;

        gid : number;

        rdev : number;

        size : number;

        blksize : number;

        blocks : number;

        atime : Date;

        mtime : Date;

        ctime : Date;

        birthtime : Date;
    }
}
declare namespace fs {}
declare namespace fs {}
declare namespace fs {
    export interface WriteStream extends stream.Writable {
        close();

        bytesWritten : number;

        path : ((string)|(Buffer));

        /**
         * events.EventEmitter
         * 1. open
         * 2. close
         * @param {string} event
         * @param {Function} listener
         * @return {*}
         */
        addListener(event : string, listener : Function) : WriteStream;

        addListener(event : "open", listener : (p1: number) => void) : WriteStream;

        addListener(event : string, listener : () => void) : WriteStream;

        on(event : string, listener : Function) : WriteStream;

        on(event : "open", listener : (p1: number) => void) : WriteStream;

        on(event : string, listener : () => void) : WriteStream;

        once(event : string, listener : Function) : WriteStream;

        once(event : "open", listener : (p1: number) => void) : WriteStream;

        once(event : string, listener : () => void) : WriteStream;

        prependListener(event : string, listener : Function) : WriteStream;

        prependListener(event : "open", listener : (p1: number) => void) : WriteStream;

        prependListener(event : string, listener : () => void) : WriteStream;

        prependOnceListener(event : string, listener : Function) : WriteStream;

        prependOnceListener(event : "open", listener : (p1: number) => void) : WriteStream;

        prependOnceListener(event : string, listener : () => void) : WriteStream;
    }
}
declare namespace fs {}
declare namespace fs {
    export interface ReadStream extends stream.Readable {
        close();

        destroy();

        bytesRead : number;

        path : ((string)|(Buffer));

        /**
         * events.EventEmitter
         * 1. open
         * 2. close
         * @param {string} event
         * @param {Function} listener
         * @return {*}
         */
        addListener(event : string, listener : Function) : ReadStream;

        addListener(event : "open", listener : (p1: number) => void) : ReadStream;

        addListener(event : string, listener : () => void) : ReadStream;

        on(event : string, listener : Function) : ReadStream;

        on(event : "open", listener : (p1: number) => void) : ReadStream;

        on(event : string, listener : () => void) : ReadStream;

        once(event : string, listener : Function) : ReadStream;

        once(event : "open", listener : (p1: number) => void) : ReadStream;

        once(event : string, listener : () => void) : ReadStream;

        prependListener(event : string, listener : Function) : ReadStream;

        prependListener(event : "open", listener : (p1: number) => void) : ReadStream;

        prependListener(event : string, listener : () => void) : ReadStream;

        prependOnceListener(event : string, listener : Function) : ReadStream;

        prependOnceListener(event : "open", listener : (p1: number) => void) : ReadStream;

        prependOnceListener(event : string, listener : () => void) : ReadStream;
    }
}
declare namespace _debugger {}
declare namespace _debugger {
    export interface Packet {
        raw : string;

        headers : string[];

        body : _debugger.Message;
    }
}
declare namespace _debugger {
    export interface BreakResponse {
        script? : _debugger.ScriptDesc;

        exception? : _debugger.ExceptionInfo;

        sourceLine : number;

        sourceLineText : string;

        sourceColumn : number;
    }
}
declare namespace _debugger {
    export class Protocol {
        public res : _debugger.Packet;

        public state : string;

        public execute(data : string);

        public serialize(rq : _debugger.Request) : string;

        public onResponse : (p1: _debugger.Packet) => void;
    }
}
declare namespace _debugger {}
declare namespace _debugger {
    export var NO_FRAME : number;

    export var port : number;

    export function SourceInfo(body : _debugger.BreakResponse) : string;

    export var Client : any;

}
declare namespace _debugger {
    export interface Request extends _debugger.Message {
        command : string;

        arguments : any;
    }
}
declare namespace _debugger {
    export interface ScriptDesc {
        name : string;

        id : number;

        isNative? : boolean;

        handle? : number;

        type : string;

        lineOffset? : number;

        columnOffset? : number;

        lineCount? : number;
    }
}
declare namespace _debugger {
    export interface ClientInstance extends NodeJS.EventEmitter {
        protocol : _debugger.Protocol;

        scripts : _debugger.ScriptDesc[];

        handles : _debugger.ScriptDesc[];

        breakpoints : _debugger.Breakpoint[];

        currentSourceLine : number;

        currentSourceColumn : number;

        currentSourceLineText : string;

        currentFrame : number;

        currentScript : string;

        connect(port : number, host : string);

        req(req : any, cb : _debugger.RequestHandler);

        reqFrameEval(code : string, frame : number, cb : _debugger.RequestHandler);

        mirrorObject(obj : any, depth : number, cb : _debugger.ResponseBodyHandler);

        setBreakpoint(rq : _debugger.BreakpointMessageBody, cb : _debugger.RequestHandler);

        clearBreakpoint(rq : _debugger.Request, cb : _debugger.RequestHandler);

        listbreakpoints(cb : _debugger.RequestHandler);

        reqSource(from : number, to : number, cb : _debugger.RequestHandler);

        reqScripts(cb : any);

        reqContinue(cb : _debugger.RequestHandler);
    }
}
declare namespace _debugger {
    export interface ExceptionInfo {
        text : string;
    }
}
declare namespace _debugger {
    export interface BreakpointMessageBody {
        type : string;

        target : number;

        line : number;
    }
}
declare namespace _debugger {
    export interface RequestInfo {
        command : string;

        arguments : any;
    }
}
declare namespace _debugger {
    export interface ResponseBodyHandler {
        (err : boolean, body : any);

        request_seq? : number;

        (err : boolean);
    }
}
declare namespace _debugger {
    export interface Message {
        seq : number;

        type : string;
    }
}
declare namespace _debugger {
    export interface Breakpoint {
        id : number;

        scriptId : number;

        script : _debugger.ScriptDesc;

        line : number;

        condition? : string;

        scriptReq? : string;
    }
}
declare namespace _debugger {
    export interface Response extends _debugger.Message {
        request_seq : number;

        success : boolean;

        /**
         * Contains error message if success === false.
         */
        message? : string;

        /**
         * Contains message body if success === true.
         */
        body? : any;
    }
}
declare namespace _debugger {
    export interface RequestHandler {
        (err : boolean, body : _debugger.Message, res : _debugger.Packet);

        request_seq? : number;
    }
}
declare namespace _debugger {
    export interface Event extends _debugger.Message {
        event : string;

        body? : any;
    }
}
declare namespace child_process {
    export interface ExecFileOptionsWithStringEncoding extends child_process.ExecFileOptions {
        encoding : any;
    }
}
declare namespace child_process {
    export interface ExecOptionsWithStringEncoding extends child_process.ExecOptions {
        encoding : any;
    }
}
declare namespace child_process {}
declare namespace child_process {
    export function spawn(command : string, args : string[], options : child_process.SpawnOptions) : child_process.ChildProcess;

    export function exec(command : string, callback : (p1: Error, p2: string, p3: string) => void) : child_process.ChildProcess;

    export function exec(command : string, options : child_process.ExecOptionsWithStringEncoding, callback : (p1: Error, p2: string, p3: string) => void) : child_process.ChildProcess;

    export function exec(command : string, options : child_process.ExecOptionsWithBufferEncoding, callback : (p1: Error, p2: Buffer, p3: Buffer) => void) : child_process.ChildProcess;

    export function exec(command : string, options : child_process.ExecOptions, callback : (p1: Error, p2: string, p3: string) => void) : child_process.ChildProcess;

    export function execFile(file : string, callback : (p1: Error, p2: string, p3: string) => void) : child_process.ChildProcess;

    export function execFile(file : string, options : child_process.ExecFileOptionsWithStringEncoding, callback : (p1: Error, p2: string, p3: string) => void) : child_process.ChildProcess;

    export function execFile(file : string, options : child_process.ExecFileOptionsWithBufferEncoding, callback : (p1: Error, p2: Buffer, p3: Buffer) => void) : child_process.ChildProcess;

    export function execFile(file : string, options : child_process.ExecFileOptions, callback : (p1: Error, p2: string, p3: string) => void) : child_process.ChildProcess;

    export function execFile(file : string, args : string[], callback : (p1: Error, p2: string, p3: string) => void) : child_process.ChildProcess;

    export function execFile(file : string, args : string[], options : child_process.ExecFileOptionsWithStringEncoding, callback : (p1: Error, p2: string, p3: string) => void) : child_process.ChildProcess;

    export function execFile(file : string, args : string[], options : child_process.ExecFileOptionsWithBufferEncoding, callback : (p1: Error, p2: Buffer, p3: Buffer) => void) : child_process.ChildProcess;

    export function execFile(file : string, args : string[], options : child_process.ExecFileOptions, callback : (p1: Error, p2: string, p3: string) => void) : child_process.ChildProcess;

    export function fork(modulePath : string, args : string[], options : child_process.ForkOptions) : child_process.ChildProcess;

    export function spawnSync(command : string) : child_process.SpawnSyncReturns<Buffer>;

    export function spawnSync(command : string, options : child_process.SpawnSyncOptionsWithStringEncoding) : child_process.SpawnSyncReturns<string>;

    export function spawnSync(command : string, options : child_process.SpawnSyncOptionsWithBufferEncoding) : child_process.SpawnSyncReturns<Buffer>;

    export function spawnSync(command : string, options : child_process.SpawnSyncOptions) : child_process.SpawnSyncReturns<Buffer>;

    export function spawnSync(command : string, args : string[], options : child_process.SpawnSyncOptionsWithStringEncoding) : child_process.SpawnSyncReturns<string>;

    export function spawnSync(command : string, args : string[], options : child_process.SpawnSyncOptionsWithBufferEncoding) : child_process.SpawnSyncReturns<Buffer>;

    export function spawnSync(command : string, args : string[], options : child_process.SpawnSyncOptions) : child_process.SpawnSyncReturns<Buffer>;

    export function execSync(command : string) : Buffer;

    export function execSync(command : string, options : child_process.ExecSyncOptionsWithStringEncoding) : string;

    export function execSync(command : string, options : child_process.ExecSyncOptionsWithBufferEncoding) : Buffer;

    export function execSync(command : string, options : child_process.ExecSyncOptions) : Buffer;

    export function execFileSync(command : string) : Buffer;

    export function execFileSync(command : string, options : child_process.ExecFileSyncOptionsWithStringEncoding) : string;

    export function execFileSync(command : string, options : child_process.ExecFileSyncOptionsWithBufferEncoding) : Buffer;

    export function execFileSync(command : string, options : child_process.ExecFileSyncOptions) : Buffer;

    export function execFileSync(command : string, args : string[], options : child_process.ExecFileSyncOptionsWithStringEncoding) : string;

    export function execFileSync(command : string, args : string[], options : child_process.ExecFileSyncOptionsWithBufferEncoding) : Buffer;

    export function execFileSync(command : string, args : string[], options : child_process.ExecFileSyncOptions) : Buffer;

    export function spawn(command : string, args : string[]) : child_process.ChildProcess;

    export function spawn(command : string) : child_process.ChildProcess;

    export function exec(command : string) : child_process.ChildProcess;

    export function exec(command : string, options : child_process.ExecOptionsWithStringEncoding) : child_process.ChildProcess;

    export function exec(command : string, options : child_process.ExecOptionsWithBufferEncoding) : child_process.ChildProcess;

    export function exec(command : string, options : child_process.ExecOptions) : child_process.ChildProcess;

    export function execFile(file : string) : child_process.ChildProcess;

    export function execFile(file : string, options : child_process.ExecFileOptionsWithStringEncoding) : child_process.ChildProcess;

    export function execFile(file : string, options : child_process.ExecFileOptionsWithBufferEncoding) : child_process.ChildProcess;

    export function execFile(file : string, options : child_process.ExecFileOptions) : child_process.ChildProcess;

    export function execFile(file : string, args : string[]) : child_process.ChildProcess;

    export function execFile(file : string, args : string[], options : child_process.ExecFileOptionsWithStringEncoding) : child_process.ChildProcess;

    export function execFile(file : string, args : string[], options : child_process.ExecFileOptionsWithBufferEncoding) : child_process.ChildProcess;

    export function execFile(file : string, args : string[], options : child_process.ExecFileOptions) : child_process.ChildProcess;

    export function fork(modulePath : string, args : string[]) : child_process.ChildProcess;

    export function fork(modulePath : string) : child_process.ChildProcess;

    export function spawnSync(command : string, args : string[]) : child_process.SpawnSyncReturns<string>;

    export function execFileSync(command : string, args : string[]) : string;

}
declare namespace child_process {
    export interface ForkOptions {
        cwd? : string;

        env? : any;

        execPath? : string;

        execArgv? : string[];

        silent? : boolean;

        uid? : number;

        gid? : number;
    }
}
declare namespace child_process {
    export interface ExecFileSyncOptions {
        cwd? : string;

        input? : ((string)|(Buffer));

        stdio? : any;

        env? : any;

        uid? : number;

        gid? : number;

        timeout? : number;

        killSignal? : string;

        maxBuffer? : number;

        encoding? : string;
    }
}
declare namespace child_process {
    export interface SpawnSyncReturns<T> {
        pid : number;

        output : string[];

        stdout : T;

        stderr : T;

        status : number;

        signal : string;

        error : Error;
    }
}
declare namespace child_process {
    export interface SpawnSyncOptionsWithBufferEncoding extends child_process.SpawnSyncOptions {
        encoding : string;
    }
}
declare namespace child_process {
    export interface SpawnOptions {
        cwd? : string;

        env? : any;

        stdio? : any;

        detached? : boolean;

        uid? : number;

        gid? : number;

        shell? : ((boolean)|(string));
    }
}
declare namespace child_process {
    export interface ExecFileOptionsWithBufferEncoding extends child_process.ExecFileOptions {
        encoding : string;
    }
}
declare namespace child_process {
    export interface ExecSyncOptionsWithStringEncoding extends child_process.ExecSyncOptions {
        encoding : any;
    }
}
declare namespace child_process {
    export interface ExecFileSyncOptionsWithBufferEncoding extends child_process.ExecFileSyncOptions {
        encoding : string;
    }
}
declare namespace child_process {
    export interface ExecOptionsWithBufferEncoding extends child_process.ExecOptions {
        encoding : string;
    }
}
declare namespace child_process {
    export interface SpawnSyncOptionsWithStringEncoding extends child_process.SpawnSyncOptions {
        encoding : any;
    }
}
declare namespace child_process {
    export interface SpawnSyncOptions {
        cwd? : string;

        input? : ((string)|(Buffer));

        stdio? : any;

        env? : any;

        uid? : number;

        gid? : number;

        timeout? : number;

        killSignal? : string;

        maxBuffer? : number;

        encoding? : string;

        shell? : ((boolean)|(string));
    }
}
declare namespace child_process {
    export interface ExecSyncOptions {
        cwd? : string;

        input? : ((string)|(Buffer));

        stdio? : any;

        env? : any;

        shell? : string;

        uid? : number;

        gid? : number;

        timeout? : number;

        killSignal? : string;

        maxBuffer? : number;

        encoding? : string;
    }
}
declare namespace child_process {
    export interface ExecOptions {
        cwd? : string;

        env? : any;

        shell? : string;

        timeout? : number;

        maxBuffer? : number;

        killSignal? : string;

        uid? : number;

        gid? : number;
    }
}
declare namespace child_process {
    export interface ExecSyncOptionsWithBufferEncoding extends child_process.ExecSyncOptions {
        encoding : string;
    }
}
declare namespace child_process {
    export interface ChildProcess extends events.EventEmitter {
        stdin : stream.Writable;

        stdout : stream.Readable;

        stderr : stream.Readable;

        stdio : [stream.Writable,stream.Readable,stream.Readable];

        pid : number;

        kill(signal : string);

        send(message : any, sendHandle : any) : boolean;

        connected : boolean;

        disconnect();

        unref();

        ref();

        addListener(event : string, listener : Function) : ChildProcess;

        addListener(event : "close", listener : (p1: number, p2: string) => void) : ChildProcess;

        addListener(event : "disconnet", listener : () => void) : ChildProcess;

        addListener(event : "error", listener : (p1: Error) => void) : ChildProcess;

        addListener(event : "exit", listener : (p1: number, p2: string) => void) : ChildProcess;

        addListener(event : "message", listener : (p1: any, p2: net.Socket) => void) : ChildProcess;

        emit(event : string, ...args : any[]) : boolean;

        emit(event : "close", code : number, signal : string) : boolean;

        emit(event : "disconnet") : boolean;

        emit(event : "error", err : Error) : boolean;

        emit(event : "exit", code : number, signal : string) : boolean;

        emit(event : "message", message : any, sendHandle : net.Socket) : boolean;

        on(event : string, listener : Function) : ChildProcess;

        on(event : "close", listener : (p1: number, p2: string) => void) : ChildProcess;

        on(event : "disconnet", listener : () => void) : ChildProcess;

        on(event : "error", listener : (p1: Error) => void) : ChildProcess;

        on(event : "exit", listener : (p1: number, p2: string) => void) : ChildProcess;

        on(event : "message", listener : (p1: any, p2: net.Socket) => void) : ChildProcess;

        once(event : string, listener : Function) : ChildProcess;

        once(event : "close", listener : (p1: number, p2: string) => void) : ChildProcess;

        once(event : "disconnet", listener : () => void) : ChildProcess;

        once(event : "error", listener : (p1: Error) => void) : ChildProcess;

        once(event : "exit", listener : (p1: number, p2: string) => void) : ChildProcess;

        once(event : "message", listener : (p1: any, p2: net.Socket) => void) : ChildProcess;

        prependListener(event : string, listener : Function) : ChildProcess;

        prependListener(event : "close", listener : (p1: number, p2: string) => void) : ChildProcess;

        prependListener(event : "disconnet", listener : () => void) : ChildProcess;

        prependListener(event : "error", listener : (p1: Error) => void) : ChildProcess;

        prependListener(event : "exit", listener : (p1: number, p2: string) => void) : ChildProcess;

        prependListener(event : "message", listener : (p1: any, p2: net.Socket) => void) : ChildProcess;

        prependOnceListener(event : string, listener : Function) : ChildProcess;

        prependOnceListener(event : "close", listener : (p1: number, p2: string) => void) : ChildProcess;

        prependOnceListener(event : "disconnet", listener : () => void) : ChildProcess;

        prependOnceListener(event : "error", listener : (p1: Error) => void) : ChildProcess;

        prependOnceListener(event : "exit", listener : (p1: number, p2: string) => void) : ChildProcess;

        prependOnceListener(event : "message", listener : (p1: any, p2: net.Socket) => void) : ChildProcess;

        kill();

        send(message : any) : boolean;

        addListener(event : "message", listener : (p1: any, p2: net.Server) => void) : ChildProcess;

        emit(event : "message", message : any, sendHandle : net.Server) : boolean;

        on(event : "message", listener : (p1: any, p2: net.Server) => void) : ChildProcess;

        once(event : "message", listener : (p1: any, p2: net.Server) => void) : ChildProcess;

        prependListener(event : "message", listener : (p1: any, p2: net.Server) => void) : ChildProcess;

        prependOnceListener(event : "message", listener : (p1: any, p2: net.Server) => void) : ChildProcess;
    }
}
declare namespace child_process {
    export interface ExecFileSyncOptionsWithStringEncoding extends child_process.ExecFileSyncOptions {
        encoding : any;
    }
}
declare namespace child_process {
    export interface ExecFileOptions {
        cwd? : string;

        env? : any;

        timeout? : number;

        maxBuffer? : number;

        killSignal? : string;

        uid? : number;

        gid? : number;
    }
}
declare namespace cluster {}
declare namespace cluster {}
declare namespace cluster {
    export function disconnect(callback : Function);

    export function fork(env : any) : cluster.Worker;

    export var isMaster : boolean;

    export var isWorker : boolean;

    export var settings : cluster.ClusterSettings;

    export function setupMaster(settings : cluster.ClusterSetupMasterSettings);

    export var worker : cluster.Worker;

    export var workers : any;

    /**
     * events.EventEmitter
     * 1. disconnect
     * 2. exit
     * 3. fork
     * 4. listening
     * 5. message
     * 6. online
     * 7. setup
     * @param {string} event
     * @param {Function} listener
     * @return {*}
     */
    export function addListener(event : string, listener : Function) : cluster.Cluster;

    export function addListener(event : "disconnect", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function addListener(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : cluster.Cluster;

    export function addListener(event : "fork", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function addListener(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : cluster.Cluster;

    export function addListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : cluster.Cluster;

    export function addListener(event : "online", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function addListener(event : "setup", listener : (p1: any) => void) : cluster.Cluster;

    export function emit(event : string, listener : Function) : boolean;

    export function emit(event : "disconnect", listener : (p1: cluster.Worker) => void) : boolean;

    export function emit(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : boolean;

    export function emit(event : "fork", listener : (p1: cluster.Worker) => void) : boolean;

    export function emit(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : boolean;

    export function emit(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : boolean;

    export function emit(event : "online", listener : (p1: cluster.Worker) => void) : boolean;

    export function emit(event : "setup", listener : (p1: any) => void) : boolean;

    export function on(event : string, listener : Function) : cluster.Cluster;

    export function on(event : "disconnect", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function on(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : cluster.Cluster;

    export function on(event : "fork", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function on(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : cluster.Cluster;

    export function on(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : cluster.Cluster;

    export function on(event : "online", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function on(event : "setup", listener : (p1: any) => void) : cluster.Cluster;

    export function once(event : string, listener : Function) : cluster.Cluster;

    export function once(event : "disconnect", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function once(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : cluster.Cluster;

    export function once(event : "fork", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function once(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : cluster.Cluster;

    export function once(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : cluster.Cluster;

    export function once(event : "online", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function once(event : "setup", listener : (p1: any) => void) : cluster.Cluster;

    export function removeListener(event : string, listener : Function) : cluster.Cluster;

    export function removeAllListeners(event : string) : cluster.Cluster;

    export function setMaxListeners(n : number) : cluster.Cluster;

    export function getMaxListeners() : number;

    export function listeners(event : string) : Function[];

    export function listenerCount(type : string) : number;

    export function prependListener(event : string, listener : Function) : cluster.Cluster;

    export function prependListener(event : "disconnect", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function prependListener(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : cluster.Cluster;

    export function prependListener(event : "fork", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function prependListener(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : cluster.Cluster;

    export function prependListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : cluster.Cluster;

    export function prependListener(event : "online", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function prependListener(event : "setup", listener : (p1: any) => void) : cluster.Cluster;

    export function prependOnceListener(event : string, listener : Function) : cluster.Cluster;

    export function prependOnceListener(event : "disconnect", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function prependOnceListener(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : cluster.Cluster;

    export function prependOnceListener(event : "fork", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function prependOnceListener(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : cluster.Cluster;

    export function prependOnceListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : cluster.Cluster;

    export function prependOnceListener(event : "online", listener : (p1: cluster.Worker) => void) : cluster.Cluster;

    export function prependOnceListener(event : "setup", listener : (p1: any) => void) : cluster.Cluster;

    export function eventNames() : string[];

    export function disconnect();

    export function fork() : cluster.Worker;

    export function setupMaster();

    export function removeAllListeners() : cluster.Cluster;

    export function addListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : cluster.Cluster;

    export function emit(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : boolean;

    export function on(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : cluster.Cluster;

    export function once(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : cluster.Cluster;

    export function prependListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : cluster.Cluster;

    export function prependOnceListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : cluster.Cluster;

}
declare namespace cluster {
    export interface Address {
        address : string;

        port : number;

        addressType : ((number)|(StringTypes.udp4)|(StringTypes.udp6));
    }
}
declare namespace cluster {
    export class Worker extends events.EventEmitter {
        public id : string;

        public process : child_process.ChildProcess;

        public suicide : boolean;

        public send(message : any, sendHandle : any) : boolean;

        public kill(signal : string);

        public destroy(signal : string);

        public disconnect();

        public isConnected() : boolean;

        public isDead() : boolean;

        public exitedAfterDisconnect : boolean;

        /**
         * events.EventEmitter
         * 1. disconnect
         * 2. error
         * 3. exit
         * 4. listening
         * 5. message
         * 6. online
         * @param {string} event
         * @param {Function} listener
         * @return {cluster.Worker}
         */
        public addListener(event : string, listener : Function) : Worker;

        public addListener(event : "disconnect", listener : () => void) : Worker;

        public addListener(event : "error", listener : (p1: number, p2: string) => void) : Worker;

        public addListener(event : "exit", listener : (p1: number, p2: string) => void) : Worker;

        public addListener(event : "listening", listener : (p1: cluster.Address) => void) : Worker;

        public addListener(event : "message", listener : (p1: any, p2: net.Socket) => void) : Worker;

        public addListener(event : "online", listener : () => void) : Worker;

        public emit(event : string, listener : Function) : boolean;

        public emit(event : "disconnect", listener : () => void) : boolean;

        public emit(event : "error", listener : (p1: number, p2: string) => void) : boolean;

        public emit(event : "exit", listener : (p1: number, p2: string) => void) : boolean;

        public emit(event : "listening", listener : (p1: cluster.Address) => void) : boolean;

        public emit(event : "message", listener : (p1: any, p2: net.Socket) => void) : boolean;

        public emit(event : "online", listener : () => void) : boolean;

        public on(event : string, listener : Function) : Worker;

        public on(event : "disconnect", listener : () => void) : Worker;

        public on(event : "error", listener : (p1: number, p2: string) => void) : Worker;

        public on(event : "exit", listener : (p1: number, p2: string) => void) : Worker;

        public on(event : "listening", listener : (p1: cluster.Address) => void) : Worker;

        public on(event : "message", listener : (p1: any, p2: net.Socket) => void) : Worker;

        public on(event : "online", listener : () => void) : Worker;

        public once(event : string, listener : Function) : Worker;

        public once(event : "disconnect", listener : () => void) : Worker;

        public once(event : "error", listener : (p1: number, p2: string) => void) : Worker;

        public once(event : "exit", listener : (p1: number, p2: string) => void) : Worker;

        public once(event : "listening", listener : (p1: cluster.Address) => void) : Worker;

        public once(event : "message", listener : (p1: any, p2: net.Socket) => void) : Worker;

        public once(event : "online", listener : () => void) : Worker;

        public prependListener(event : string, listener : Function) : Worker;

        public prependListener(event : "disconnect", listener : () => void) : Worker;

        public prependListener(event : "error", listener : (p1: number, p2: string) => void) : Worker;

        public prependListener(event : "exit", listener : (p1: number, p2: string) => void) : Worker;

        public prependListener(event : "listening", listener : (p1: cluster.Address) => void) : Worker;

        public prependListener(event : "message", listener : (p1: any, p2: net.Socket) => void) : Worker;

        public prependListener(event : "online", listener : () => void) : Worker;

        public prependOnceListener(event : string, listener : Function) : Worker;

        public prependOnceListener(event : "disconnect", listener : () => void) : Worker;

        public prependOnceListener(event : "error", listener : (p1: number, p2: string) => void) : Worker;

        public prependOnceListener(event : "exit", listener : (p1: number, p2: string) => void) : Worker;

        public prependOnceListener(event : "listening", listener : (p1: cluster.Address) => void) : Worker;

        public prependOnceListener(event : "message", listener : (p1: any, p2: net.Socket) => void) : Worker;

        public prependOnceListener(event : "online", listener : () => void) : Worker;

        public send(message : any) : boolean;

        public kill();

        public destroy();

        public addListener(event : "message", listener : (p1: any, p2: net.Server) => void) : Worker;

        public emit(event : "message", listener : (p1: any, p2: net.Server) => void) : boolean;

        public on(event : "message", listener : (p1: any, p2: net.Server) => void) : Worker;

        public once(event : "message", listener : (p1: any, p2: net.Server) => void) : Worker;

        public prependListener(event : "message", listener : (p1: any, p2: net.Server) => void) : Worker;

        public prependOnceListener(event : "message", listener : (p1: any, p2: net.Server) => void) : Worker;
    }
}
declare namespace cluster {
    export interface ClusterSetupMasterSettings {
        exec? : string;

        args? : string[];

        silent? : boolean;

        stdio? : any[];
    }
}
declare namespace cluster {
    export interface ClusterSettings {
        execArgv? : string[];

        exec? : string;

        args? : string[];

        silent? : boolean;

        stdio? : any[];

        uid? : number;

        gid? : number;
    }
}
declare namespace cluster {
    export interface Cluster extends events.EventEmitter {
        Worker : cluster.Worker;

        disconnect(callback : Function);

        fork(env : any) : cluster.Worker;

        isMaster : boolean;

        isWorker : boolean;

        settings : cluster.ClusterSettings;

        setupMaster(settings : cluster.ClusterSetupMasterSettings);

        worker : cluster.Worker;

        workers : any;

        /**
         * events.EventEmitter
         * 1. disconnect
         * 2. exit
         * 3. fork
         * 4. listening
         * 5. message
         * 6. online
         * 7. setup
         * @param {string} event
         * @param {Function} listener
         * @return {*}
         */
        addListener(event : string, listener : Function) : Cluster;

        addListener(event : "disconnect", listener : (p1: cluster.Worker) => void) : Cluster;

        addListener(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : Cluster;

        addListener(event : "fork", listener : (p1: cluster.Worker) => void) : Cluster;

        addListener(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : Cluster;

        addListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : Cluster;

        addListener(event : "online", listener : (p1: cluster.Worker) => void) : Cluster;

        addListener(event : "setup", listener : (p1: any) => void) : Cluster;

        emit(event : string, listener : Function) : boolean;

        emit(event : "disconnect", listener : (p1: cluster.Worker) => void) : boolean;

        emit(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : boolean;

        emit(event : "fork", listener : (p1: cluster.Worker) => void) : boolean;

        emit(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : boolean;

        emit(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : boolean;

        emit(event : "online", listener : (p1: cluster.Worker) => void) : boolean;

        emit(event : "setup", listener : (p1: any) => void) : boolean;

        on(event : string, listener : Function) : Cluster;

        on(event : "disconnect", listener : (p1: cluster.Worker) => void) : Cluster;

        on(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : Cluster;

        on(event : "fork", listener : (p1: cluster.Worker) => void) : Cluster;

        on(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : Cluster;

        on(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : Cluster;

        on(event : "online", listener : (p1: cluster.Worker) => void) : Cluster;

        on(event : "setup", listener : (p1: any) => void) : Cluster;

        once(event : string, listener : Function) : Cluster;

        once(event : "disconnect", listener : (p1: cluster.Worker) => void) : Cluster;

        once(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : Cluster;

        once(event : "fork", listener : (p1: cluster.Worker) => void) : Cluster;

        once(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : Cluster;

        once(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : Cluster;

        once(event : "online", listener : (p1: cluster.Worker) => void) : Cluster;

        once(event : "setup", listener : (p1: any) => void) : Cluster;

        prependListener(event : string, listener : Function) : Cluster;

        prependListener(event : "disconnect", listener : (p1: cluster.Worker) => void) : Cluster;

        prependListener(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : Cluster;

        prependListener(event : "fork", listener : (p1: cluster.Worker) => void) : Cluster;

        prependListener(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : Cluster;

        prependListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : Cluster;

        prependListener(event : "online", listener : (p1: cluster.Worker) => void) : Cluster;

        prependListener(event : "setup", listener : (p1: any) => void) : Cluster;

        prependOnceListener(event : string, listener : Function) : Cluster;

        prependOnceListener(event : "disconnect", listener : (p1: cluster.Worker) => void) : Cluster;

        prependOnceListener(event : "exit", listener : (p1: cluster.Worker, p2: number, p3: string) => void) : Cluster;

        prependOnceListener(event : "fork", listener : (p1: cluster.Worker) => void) : Cluster;

        prependOnceListener(event : "listening", listener : (p1: cluster.Worker, p2: cluster.Address) => void) : Cluster;

        prependOnceListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Socket) => void) : Cluster;

        prependOnceListener(event : "online", listener : (p1: cluster.Worker) => void) : Cluster;

        prependOnceListener(event : "setup", listener : (p1: any) => void) : Cluster;

        disconnect();

        fork() : cluster.Worker;

        setupMaster();

        addListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : Cluster;

        emit(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : boolean;

        on(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : Cluster;

        once(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : Cluster;

        prependListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : Cluster;

        prependOnceListener(event : "message", listener : (p1: cluster.Worker, p2: any, p3: net.Server) => void) : Cluster;
    }
}
declare namespace dgram {
    export interface RemoteInfo {
        address : string;

        family : string;

        port : number;
    }
}
declare namespace dgram {}
declare namespace dgram {
    export function createSocket(type : string, callback : (p1: Buffer, p2: dgram.RemoteInfo) => void) : dgram.Socket;

    export function createSocket(options : dgram.SocketOptions, callback : (p1: Buffer, p2: dgram.RemoteInfo) => void) : dgram.Socket;

    export function createSocket(type : string) : dgram.Socket;

    export function createSocket(options : dgram.SocketOptions) : dgram.Socket;

}
declare namespace dgram {
    export interface BindOptions {
        port : number;

        address? : string;

        exclusive? : boolean;
    }
}
declare namespace dgram {
    export interface Socket extends events.EventEmitter {
        send(msg : Buffer, port : number, address : string, callback : (p1: Error, p2: number) => void);

        send(msg : Buffer, offset : number, length : number, port : number, address : string, callback : (p1: Error, p2: number) => void);

        bind(port : number, address : string, callback : () => void);

        bind(options : dgram.BindOptions, callback : Function);

        close(callback : () => void);

        address() : dgram.AddressInfo;

        setBroadcast(flag : boolean);

        setTTL(ttl : number);

        setMulticastTTL(ttl : number);

        setMulticastLoopback(flag : boolean);

        addMembership(multicastAddress : string, multicastInterface : string);

        dropMembership(multicastAddress : string, multicastInterface : string);

        ref() : Socket;

        unref() : Socket;

        addListener(event : string, listener : Function) : Socket;

        addListener(event : "close", listener : () => void) : Socket;

        addListener(event : "error", listener : (p1: Error) => void) : Socket;

        addListener(event : "listening", listener : () => void) : Socket;

        addListener(event : "message", listener : (p1: Buffer, p2: dgram.AddressInfo) => void) : Socket;

        emit(event : string, ...args : any[]) : boolean;

        emit(event : "close") : boolean;

        emit(event : "error", err : Error) : boolean;

        emit(event : "listening") : boolean;

        emit(event : "message", msg : Buffer, rinfo : dgram.AddressInfo) : boolean;

        on(event : string, listener : Function) : Socket;

        on(event : "close", listener : () => void) : Socket;

        on(event : "error", listener : (p1: Error) => void) : Socket;

        on(event : "listening", listener : () => void) : Socket;

        on(event : "message", listener : (p1: Buffer, p2: dgram.AddressInfo) => void) : Socket;

        once(event : string, listener : Function) : Socket;

        once(event : "close", listener : () => void) : Socket;

        once(event : "error", listener : (p1: Error) => void) : Socket;

        once(event : "listening", listener : () => void) : Socket;

        once(event : "message", listener : (p1: Buffer, p2: dgram.AddressInfo) => void) : Socket;

        prependListener(event : string, listener : Function) : Socket;

        prependListener(event : "close", listener : () => void) : Socket;

        prependListener(event : "error", listener : (p1: Error) => void) : Socket;

        prependListener(event : "listening", listener : () => void) : Socket;

        prependListener(event : "message", listener : (p1: Buffer, p2: dgram.AddressInfo) => void) : Socket;

        prependOnceListener(event : string, listener : Function) : Socket;

        prependOnceListener(event : "close", listener : () => void) : Socket;

        prependOnceListener(event : "error", listener : (p1: Error) => void) : Socket;

        prependOnceListener(event : "listening", listener : () => void) : Socket;

        prependOnceListener(event : "message", listener : (p1: Buffer, p2: dgram.AddressInfo) => void) : Socket;

        send(msg : Buffer, port : number, address : string);

        send(msg : Buffer, offset : number, length : number, port : number, address : string);

        bind(port : number, address : string);

        bind(port : number);

        bind();

        bind(options : dgram.BindOptions);

        close();

        addMembership(multicastAddress : string);

        dropMembership(multicastAddress : string);

        send(msg : string, port : number, address : string, callback : (p1: Error, p2: number) => void);

        send(msg : any[], port : number, address : string, callback : (p1: Error, p2: number) => void);

        send(msg : any[], offset : number, length : number, port : number, address : string, callback : (p1: Error, p2: number) => void);

        send(msg : string, offset : number, length : number, port : number, address : string, callback : (p1: Error, p2: number) => void);

        send(msg : string, port : number, address : string);

        send(msg : any[], port : number, address : string);

        send(msg : string, offset : number, length : number, port : number, address : string);

        send(msg : any[], offset : number, length : number, port : number, address : string);
    }
}
declare namespace dgram {
    export interface AddressInfo {
        address : string;

        family : string;

        port : number;
    }
}
declare namespace dgram {
    export interface SocketOptions {
        type : ((StringTypes.udp4)|(StringTypes.udp6));

        reuseAddr? : boolean;
    }
}
/**
 * @deprecated
 * @class
 * @extends Uint8Array
 */
interface NodeBuffer extends Uint8Array {
    write(string : string, offset : number, length : number, encoding : string) : number;

    toJSON() : any;

    equals(otherBuffer : Buffer) : boolean;

    compare(otherBuffer : Buffer, targetStart : number, targetEnd : number, sourceStart : number, sourceEnd : number) : number;

    copy(targetBuffer : Buffer, targetStart : number, sourceStart : number, sourceEnd : number) : number;

    writeUIntLE(value : number, offset : number, byteLength : number, noAssert : boolean) : number;

    writeUIntBE(value : number, offset : number, byteLength : number, noAssert : boolean) : number;

    writeIntLE(value : number, offset : number, byteLength : number, noAssert : boolean) : number;

    writeIntBE(value : number, offset : number, byteLength : number, noAssert : boolean) : number;

    readUIntLE(offset : number, byteLength : number, noAssert : boolean) : number;

    readUIntBE(offset : number, byteLength : number, noAssert : boolean) : number;

    readIntLE(offset : number, byteLength : number, noAssert : boolean) : number;

    readIntBE(offset : number, byteLength : number, noAssert : boolean) : number;

    readUInt8(offset : number, noAssert : boolean) : number;

    readUInt16LE(offset : number, noAssert : boolean) : number;

    readUInt16BE(offset : number, noAssert : boolean) : number;

    readUInt32LE(offset : number, noAssert : boolean) : number;

    readUInt32BE(offset : number, noAssert : boolean) : number;

    readInt8(offset : number, noAssert : boolean) : number;

    readInt16LE(offset : number, noAssert : boolean) : number;

    readInt16BE(offset : number, noAssert : boolean) : number;

    readInt32LE(offset : number, noAssert : boolean) : number;

    readInt32BE(offset : number, noAssert : boolean) : number;

    readFloatLE(offset : number, noAssert : boolean) : number;

    readFloatBE(offset : number, noAssert : boolean) : number;

    readDoubleLE(offset : number, noAssert : boolean) : number;

    readDoubleBE(offset : number, noAssert : boolean) : number;

    swap16() : Buffer;

    swap32() : Buffer;

    swap64() : Buffer;

    writeUInt8(value : number, offset : number, noAssert : boolean) : number;

    writeUInt16LE(value : number, offset : number, noAssert : boolean) : number;

    writeUInt16BE(value : number, offset : number, noAssert : boolean) : number;

    writeUInt32LE(value : number, offset : number, noAssert : boolean) : number;

    writeUInt32BE(value : number, offset : number, noAssert : boolean) : number;

    writeInt8(value : number, offset : number, noAssert : boolean) : number;

    writeInt16LE(value : number, offset : number, noAssert : boolean) : number;

    writeInt16BE(value : number, offset : number, noAssert : boolean) : number;

    writeInt32LE(value : number, offset : number, noAssert : boolean) : number;

    writeInt32BE(value : number, offset : number, noAssert : boolean) : number;

    writeFloatLE(value : number, offset : number, noAssert : boolean) : number;

    writeFloatBE(value : number, offset : number, noAssert : boolean) : number;

    writeDoubleLE(value : number, offset : number, noAssert : boolean) : number;

    writeDoubleBE(value : number, offset : number, noAssert : boolean) : number;

    indexOf(value : string, byteOffset : number, encoding : string) : number;

    lastIndexOf(value : string, byteOffset : number, encoding : string) : number;

    includes(value : string, byteOffset : number, encoding : string) : boolean;

    write(string : string, offset : number, length : number) : number;

    write(string : string, offset : number) : number;

    write(string : string) : number;

    compare(otherBuffer : Buffer, targetStart : number, targetEnd : number, sourceStart : number) : number;

    compare(otherBuffer : Buffer, targetStart : number, targetEnd : number) : number;

    compare(otherBuffer : Buffer, targetStart : number) : number;

    compare(otherBuffer : Buffer) : number;

    copy(targetBuffer : Buffer, targetStart : number, sourceStart : number) : number;

    copy(targetBuffer : Buffer, targetStart : number) : number;

    copy(targetBuffer : Buffer) : number;

    writeUIntLE(value : number, offset : number, byteLength : number) : number;

    writeUIntBE(value : number, offset : number, byteLength : number) : number;

    writeIntLE(value : number, offset : number, byteLength : number) : number;

    writeIntBE(value : number, offset : number, byteLength : number) : number;

    readUIntLE(offset : number, byteLength : number) : number;

    readUIntBE(offset : number, byteLength : number) : number;

    readIntLE(offset : number, byteLength : number) : number;

    readIntBE(offset : number, byteLength : number) : number;

    readUInt8(offset : number) : number;

    readUInt16LE(offset : number) : number;

    readUInt16BE(offset : number) : number;

    readUInt32LE(offset : number) : number;

    readUInt32BE(offset : number) : number;

    readInt8(offset : number) : number;

    readInt16LE(offset : number) : number;

    readInt16BE(offset : number) : number;

    readInt32LE(offset : number) : number;

    readInt32BE(offset : number) : number;

    readFloatLE(offset : number) : number;

    readFloatBE(offset : number) : number;

    readDoubleLE(offset : number) : number;

    readDoubleBE(offset : number) : number;

    writeUInt8(value : number, offset : number) : number;

    writeUInt16LE(value : number, offset : number) : number;

    writeUInt16BE(value : number, offset : number) : number;

    writeUInt32LE(value : number, offset : number) : number;

    writeUInt32BE(value : number, offset : number) : number;

    writeInt8(value : number, offset : number) : number;

    writeInt16LE(value : number, offset : number) : number;

    writeInt16BE(value : number, offset : number) : number;

    writeInt32LE(value : number, offset : number) : number;

    writeInt32BE(value : number, offset : number) : number;

    writeFloatLE(value : number, offset : number) : number;

    writeFloatBE(value : number, offset : number) : number;

    writeDoubleLE(value : number, offset : number) : number;

    writeDoubleBE(value : number, offset : number) : number;

    indexOf(value : string, byteOffset : number) : number;

    indexOf(value : string) : number;

    lastIndexOf(value : string, byteOffset : number) : number;

    lastIndexOf(value : string) : number;

    includes(value : string, byteOffset : number) : boolean;

    includes(value : string) : boolean;

    indexOf(value : number, byteOffset : number, encoding : string) : number;

    indexOf(value : Buffer, byteOffset : number, encoding : string) : number;

    lastIndexOf(value : Buffer, byteOffset : number, encoding : string) : number;

    lastIndexOf(value : number, byteOffset : number, encoding : string) : number;

    includes(value : Buffer, byteOffset : number, encoding : string) : boolean;

    includes(value : number, byteOffset : number, encoding : string) : boolean;

    indexOf(value : number, byteOffset : number) : number;

    indexOf(value : Buffer, byteOffset : number) : number;

    indexOf(value : Buffer) : number;

    indexOf(value : number) : number;

    lastIndexOf(value : Buffer, byteOffset : number) : number;

    lastIndexOf(value : number, byteOffset : number) : number;

    lastIndexOf(value : Buffer) : number;

    lastIndexOf(value : number) : number;

    includes(value : Buffer, byteOffset : number) : boolean;

    includes(value : number, byteOffset : number) : boolean;

    includes(value : Buffer) : boolean;

    includes(value : number) : boolean;
}

interface NodeRequire {
    resolve(id : string) : string;

    cache : any;

    extensions : any;

    main : NodeModule;
}

declare namespace os {}
declare namespace os {}
declare namespace os {
    export function hostname() : string;

    export function loadavg() : number[];

    export function uptime() : number;

    export function freemem() : number;

    export function totalmem() : number;

    export function cpus() : os.CpuInfo[];

    export function type() : string;

    export function release() : string;

    export function networkInterfaces() : any;

    export function homedir() : string;

    export function userInfo(options : any) : any;

    export var constants : any;

    export function arch() : string;

    export function platform() : any;

    export function tmpdir() : string;

    export var EOL : string;

    export function endianness() : ((StringTypes.BE)|(StringTypes.LE));

    export function userInfo() : any;

}
declare namespace os {}
declare namespace os {}
declare namespace os {
    export interface NetworkInterfaceInfo {
        address : string;

        netmask : string;

        family : string;

        mac : string;

        internal : boolean;
    }
}
declare namespace os {}
declare namespace os {
    export interface CpuInfo {
        model : string;

        speed : number;

        times : any;
    }
}
interface WeakMapConstructor {}

declare namespace util {}
declare namespace util {
    export interface InspectOptions {
        showHidden? : boolean;

        depth? : number;

        colors? : boolean;

        customInspect? : boolean;
    }
}
declare namespace util {
    export function format(format : any, ...param : any[]) : string;

    export function debug(string : string);

    export function error(...param : any[]);

    export function puts(...param : any[]);

    export function print(...param : any[]);

    export function log(string : string);

    export function inspect(object : any, showHidden : boolean, depth : number, color : boolean) : string;

    export function inspect(object : any, options : util.InspectOptions) : string;

    export function isArray(object : any) : boolean;

    export function isRegExp(object : any) : boolean;

    export function isDate(object : any) : boolean;

    export function isError(object : any) : boolean;

    export function inherits(constructor : any, superConstructor : any);

    export function debuglog(key : string) : (p1: string, p2: any) => void;

    export function isBoolean(object : any) : boolean;

    export function isBuffer(object : any) : boolean;

    export function isFunction(object : any) : boolean;

    export function isNull(object : any) : boolean;

    export function isNullOrUndefined(object : any) : boolean;

    export function isNumber(object : any) : boolean;

    export function isObject(object : any) : boolean;

    export function isPrimitive(object : any) : boolean;

    export function isString(object : any) : boolean;

    export function isSymbol(object : any) : boolean;

    export function isUndefined(object : any) : boolean;

    export function deprecate(fn : Function, message : string) : Function;

    export function inspect(object : any, showHidden : boolean, depth : number) : string;

    export function inspect(object : any, showHidden : boolean) : string;

    export function inspect(object : any) : string;

}
declare namespace NodeJS {
    export interface ProcessVersions {
        http_parser : string;

        node : string;

        v8 : string;

        ares : string;

        uv : string;

        zlib : string;

        modules : string;

        openssl : string;
    }
}
declare namespace NodeJS {
    export interface CpuUsage {
        user : number;

        system : number;
    }
}
declare namespace NodeJS {}
declare namespace NodeJS {
    export class EventEmitter {
        public addListener(event : string, listener : Function) : EventEmitter;

        public on(event : string, listener : Function) : EventEmitter;

        public once(event : string, listener : Function) : EventEmitter;

        public removeListener(event : string, listener : Function) : EventEmitter;

        public removeAllListeners(event : string) : EventEmitter;

        public setMaxListeners(n : number) : EventEmitter;

        public getMaxListeners() : number;

        public listeners(event : string) : Function[];

        public emit(event : string, ...args : any[]) : boolean;

        public listenerCount(type : string) : number;

        public prependListener(event : string, listener : Function) : EventEmitter;

        public prependOnceListener(event : string, listener : Function) : EventEmitter;

        public eventNames() : ((string)|(string))[];

        public removeAllListeners() : EventEmitter;
    }
}
declare namespace NodeJS {
    export interface MemoryUsage {
        rss : number;

        heapTotal : number;

        heapUsed : number;
    }
}
declare namespace NodeJS {
    export interface ErrnoException extends Error {
        errno? : number;

        code? : string;

        path? : string;

        syscall? : string;

        stack? : string;
    }
}
declare namespace NodeJS {
    export interface ReadWriteStream extends NodeJS.ReadableStream {
        pause() : ReadWriteStream;

        resume() : ReadWriteStream;

        writable : boolean;

        isTTY? : boolean;

        write(buffer : Buffer, cb : Function) : boolean;

        write(str : string, encoding : string, cb : Function) : boolean;

        end();

        end(buffer : Buffer, cb : Function);

        end(str : string, cb : Function);

        end(str : string, encoding : string, cb : Function);

        write(buffer : Buffer) : boolean;

        write(str : string, encoding : string) : boolean;

        end(buffer : Buffer);

        end(str : string);

        end(str : string, encoding : string);

        write(buffer : string, cb : Function) : boolean;

        write(buffer : string) : boolean;
    }
}
declare namespace NodeJS {}
declare namespace NodeJS {
    export var Console : any;

}
declare namespace NodeJS {
    export interface WritableStream extends NodeJS.EventEmitter {
        writable : boolean;

        isTTY? : boolean;

        write(buffer : Buffer, cb : Function) : boolean;

        write(str : string, encoding : string, cb : Function) : boolean;

        end();

        end(buffer : Buffer, cb : Function);

        end(str : string, cb : Function);

        end(str : string, encoding : string, cb : Function);

        write(buffer : Buffer) : boolean;

        write(str : string, encoding : string) : boolean;

        end(buffer : Buffer);

        end(str : string);

        end(str : string, encoding : string);

        write(buffer : string, cb : Function) : boolean;

        write(buffer : string) : boolean;
    }
}
declare namespace NodeJS {
    export interface Global {
        GLOBAL : Global;

        Uint8ClampedArray : any;

        clearImmediate : (p1: any) => void;

        clearInterval : (p1: NodeJS.Timer) => void;

        clearTimeout : (p1: NodeJS.Timer) => void;

        escape : (p1: string) => string;

        global : Global;

        process : NodeJS.Process;

        root : Global;

        setImmediate : (p1: (p1: any) => void, p2: any) => any;

        setInterval : (p1: (p1: any) => void, p2: number, p3: any) => NodeJS.Timer;

        setTimeout : (p1: (p1: any) => void, p2: number, p3: any) => NodeJS.Timer;

        undefined : any;

        unescape : (p1: string) => string;

        gc : () => void;

        v8debug? : any;

        /**
         * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
         * @param {string} encodedURI A value representing an encoded URI.
         * @return {string}
         */
        decodeURI(encodedURI : string) : string;

        /**
         * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
         * @param {string} encodedURIComponent A value representing an encoded URI component.
         * @return {string}
         */
        decodeURIComponent(encodedURIComponent : string) : string;

        /**
         * 
         * Encodes a text string as a valid Uniform Resource Identifier (URI)
         * @param {string} uri A value representing an encoded URI.
         * @return {string}
         */
        encodeURI(uri : string) : string;

        /**
         * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
         * @param {string} uriComponent A value representing an encoded URI component.
         * @return {string}
         */
        encodeURIComponent(uriComponent : string) : string;

        /**
         * Evaluates JavaScript code and executes it.
         * @param {string} x A String value that contains valid JavaScript code.
         * @return {*}
         */
        eval(x : string) : any;

        /**
         * 
         * Determines whether a supplied number is finite.
         * @param {number} number Any numeric value.
         * @return {boolean}
         */
        isFinite(number : number) : boolean;

        /**
         * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
         * @param {number} number A numeric value.
         * @return {boolean}
         */
        isNaN(number : number) : boolean;

        /**
         * Converts a string to a floating-point number.
         * @param {string} string A string that contains a floating-point number.
         * @return {number}
         */
        parseFloat(string : string) : number;

        /**
         * Converts A string to an integer.
         * @param {string} s A string to convert into a number.
         * @param {number} radix A value between 2 and 36 that specifies the base of the number in numString.
         * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
         * All other strings are considered decimal.
         * @return {number}
         */
        parseInt(s : string, radix : number) : number;

        /**
         * Converts A string to an integer.
         * @param {string} s A string to convert into a number.
         * @param radix A value between 2 and 36 that specifies the base of the number in numString.
         * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
         * All other strings are considered decimal.
         * @return {number}
         */
        parseInt(s : string) : number;

        Promise(...args : any[]) : any;

        Symbol(...args : any[]) : any;
    }
}
declare namespace NodeJS {
    export interface ReadableStream extends NodeJS.EventEmitter {
        readable : boolean;

        isTTY? : boolean;

        read(size : number) : ((string)|(Buffer));

        setEncoding(encoding : string);

        pause() : ReadableStream;

        resume() : ReadableStream;

        isPaused() : boolean;

        pipe<T extends NodeJS.WritableStream>(destination : T, options : any) : T;

        unpipe<T extends NodeJS.WritableStream>(destination : T);

        unshift(chunk : string);

        unshift(chunk : Buffer);

        wrap(oldStream : ReadableStream) : ReadableStream;

        read() : ((string)|(Buffer));

        pipe<T extends NodeJS.WritableStream>(destination : T) : T;

        unpipe<T extends NodeJS.WritableStream>();

        setEncoding(encoding : any);
    }
}
declare namespace NodeJS {
    export interface Events extends NodeJS.EventEmitter {    }
}
declare namespace NodeJS {
    export interface Domain extends NodeJS.Events {
        run(fn : Function);

        add(emitter : NodeJS.Events);

        remove(emitter : NodeJS.Events);

        bind(cb : (p1: Error, p2: any) => any) : any;

        intercept(cb : (p1: any) => any) : any;

        dispose();

        addListener(event : string, listener : Function) : Domain;

        on(event : string, listener : Function) : Domain;

        once(event : string, listener : Function) : Domain;

        removeListener(event : string, listener : Function) : Domain;

        removeAllListeners(event : string) : Domain;

        removeAllListeners() : Domain;
    }
}
declare namespace NodeJS {
    export interface Timer {
        ref();

        unref();
    }
}
declare namespace NodeJS {
    export interface Process extends NodeJS.EventEmitter {
        stdout : NodeJS.WritableStream;

        stderr : NodeJS.WritableStream;

        stdin : NodeJS.ReadableStream;

        argv : string[];

        argv0 : string;

        execArgv : string[];

        execPath : string;

        abort();

        chdir(directory : string);

        cwd() : string;

        env : any;

        exit(code : number);

        exitCode : number;

        getgid() : number;

        setgid(id : number);

        setgid(id : string);

        getuid() : number;

        setuid(id : number);

        setuid(id : string);

        version : string;

        versions : NodeJS.ProcessVersions;

        config : any;

        kill(pid : number, signal : string);

        pid : number;

        title : string;

        arch : string;

        platform : any;

        mainModule? : NodeModule;

        memoryUsage() : NodeJS.MemoryUsage;

        cpuUsage(previousValue : NodeJS.CpuUsage) : NodeJS.CpuUsage;

        nextTick(callback : Function, ...args : any[]);

        umask(mask : number) : number;

        uptime() : number;

        hrtime(time : [number,number]) : [number,number];

        domain : NodeJS.Domain;

        send(message : any, sendHandle : any);

        disconnect();

        connected : boolean;

        exit();

        kill(pid : number);

        cpuUsage() : NodeJS.CpuUsage;

        umask() : number;

        hrtime() : [number,number];

        send(message : any);

        kill(pid : number, signal : number);
    }
}
declare var process : NodeJS.Process;

declare var global : NodeJS.Global;

declare var console : Console;

declare var __filename : string;

declare var __dirname : string;

declare function setTimeout(callback : (p1: any) => void, ms : number, ...args : any[]) : NodeJS.Timer;

declare function clearTimeout(timeoutId : NodeJS.Timer);

declare function setInterval(callback : (p1: any) => void, ms : number, ...args : any[]) : NodeJS.Timer;

declare function clearInterval(intervalId : NodeJS.Timer);

declare function setImmediate(callback : (p1: any) => void, ...args : any[]) : any;

declare function clearImmediate(immediateId : any);

declare var require : NodeRequire;

declare var module : NodeModule;

declare var exports : any;

declare var SlowBuffer : any;

declare function Assert(value : any, message : string);

declare function Assert(value : any);


declare namespace querystring {
    export interface ParseOptions {
        maxKeys? : number;

        decodeURIComponent? : any;
    }
}
declare namespace querystring {}
declare namespace querystring {
    export function stringify<T>(obj : T, sep : string, eq : string, options : querystring.StringifyOptions) : string;

    export function parse<T extends any>(str : string, sep : string, eq : string, options : querystring.ParseOptions) : T;

    export function escape(str : string) : string;

    export function unescape(str : string) : string;

    export function stringify<T>(obj : T, sep : string, eq : string) : string;

    export function stringify<T>(obj : T, sep : string) : string;

    export function stringify<T>(obj : T) : string;

    export function parse(str : string, sep : string, eq : string) : any;

    export function parse(str : string, sep : string) : any;

    export function parse(str : string) : any;

}
declare namespace querystring {
    export interface StringifyOptions {
        encodeURIComponent? : any;
    }
}
declare namespace zlib.constants {}
declare namespace zlib.constants {
    export var Z_NO_FLUSH : number;

    export var Z_PARTIAL_FLUSH : number;

    export var Z_SYNC_FLUSH : number;

    export var Z_FULL_FLUSH : number;

    export var Z_FINISH : number;

    export var Z_BLOCK : number;

    export var Z_TREES : number;

    export var Z_OK : number;

    export var Z_STREAM_END : number;

    export var Z_NEED_DICT : number;

    export var Z_ERRNO : number;

    export var Z_STREAM_ERROR : number;

    export var Z_DATA_ERROR : number;

    export var Z_MEM_ERROR : number;

    export var Z_BUF_ERROR : number;

    export var Z_VERSION_ERROR : number;

    export var Z_NO_COMPRESSION : number;

    export var Z_BEST_SPEED : number;

    export var Z_BEST_COMPRESSION : number;

    export var Z_DEFAULT_COMPRESSION : number;

    export var Z_FILTERED : number;

    export var Z_HUFFMAN_ONLY : number;

    export var Z_RLE : number;

    export var Z_FIXED : number;

    export var Z_DEFAULT_STRATEGY : number;

}
declare namespace zlib {
    export interface DeflateRaw extends stream.Transform {    }
}
declare namespace zlib {
    export interface Deflate extends stream.Transform {    }
}
declare namespace zlib {}
declare namespace zlib {
    export function createGzip(options : zlib.ZlibOptions) : zlib.Gzip;

    export function createGunzip(options : zlib.ZlibOptions) : zlib.Gunzip;

    export function createDeflate(options : zlib.ZlibOptions) : zlib.Deflate;

    export function createInflate(options : zlib.ZlibOptions) : zlib.Inflate;

    export function createDeflateRaw(options : zlib.ZlibOptions) : zlib.DeflateRaw;

    export function createInflateRaw(options : zlib.ZlibOptions) : zlib.InflateRaw;

    export function createUnzip(options : zlib.ZlibOptions) : zlib.Unzip;

    export function deflate(buf : Buffer, callback : (p1: Error, p2: Buffer) => void);

    export function deflateSync(buf : Buffer, options : zlib.ZlibOptions) : Buffer;

    export function deflateRaw(buf : Buffer, callback : (p1: Error, p2: Buffer) => void);

    export function deflateRawSync(buf : Buffer, options : zlib.ZlibOptions) : Buffer;

    export function gzip(buf : Buffer, callback : (p1: Error, p2: Buffer) => void);

    export function gzipSync(buf : Buffer, options : zlib.ZlibOptions) : Buffer;

    export function gunzip(buf : Buffer, callback : (p1: Error, p2: Buffer) => void);

    export function gunzipSync(buf : Buffer, options : zlib.ZlibOptions) : Buffer;

    export function inflate(buf : Buffer, callback : (p1: Error, p2: Buffer) => void);

    export function inflateSync(buf : Buffer, options : zlib.ZlibOptions) : Buffer;

    export function inflateRaw(buf : Buffer, callback : (p1: Error, p2: Buffer) => void);

    export function inflateRawSync(buf : Buffer, options : zlib.ZlibOptions) : Buffer;

    export function unzip(buf : Buffer, callback : (p1: Error, p2: Buffer) => void);

    export function unzipSync(buf : Buffer, options : zlib.ZlibOptions) : Buffer;

    export var Z_NO_FLUSH : number;

    export var Z_PARTIAL_FLUSH : number;

    export var Z_SYNC_FLUSH : number;

    export var Z_FULL_FLUSH : number;

    export var Z_FINISH : number;

    export var Z_BLOCK : number;

    export var Z_TREES : number;

    export var Z_OK : number;

    export var Z_STREAM_END : number;

    export var Z_NEED_DICT : number;

    export var Z_ERRNO : number;

    export var Z_STREAM_ERROR : number;

    export var Z_DATA_ERROR : number;

    export var Z_MEM_ERROR : number;

    export var Z_BUF_ERROR : number;

    export var Z_VERSION_ERROR : number;

    export var Z_NO_COMPRESSION : number;

    export var Z_BEST_SPEED : number;

    export var Z_BEST_COMPRESSION : number;

    export var Z_DEFAULT_COMPRESSION : number;

    export var Z_FILTERED : number;

    export var Z_HUFFMAN_ONLY : number;

    export var Z_RLE : number;

    export var Z_FIXED : number;

    export var Z_DEFAULT_STRATEGY : number;

    export var Z_BINARY : number;

    export var Z_TEXT : number;

    export var Z_ASCII : number;

    export var Z_UNKNOWN : number;

    export var Z_DEFLATED : number;

    export function createGzip() : zlib.Gzip;

    export function createGunzip() : zlib.Gunzip;

    export function createDeflate() : zlib.Deflate;

    export function createInflate() : zlib.Inflate;

    export function createDeflateRaw() : zlib.DeflateRaw;

    export function createInflateRaw() : zlib.InflateRaw;

    export function createUnzip() : zlib.Unzip;

    export function deflateSync(buf : Buffer) : Buffer;

    export function deflateRawSync(buf : Buffer) : Buffer;

    export function gzipSync(buf : Buffer) : Buffer;

    export function gunzipSync(buf : Buffer) : Buffer;

    export function inflateSync(buf : Buffer) : Buffer;

    export function inflateRawSync(buf : Buffer) : Buffer;

    export function unzipSync(buf : Buffer) : Buffer;

    export function deflate(buf : string, callback : (p1: Error, p2: Buffer) => void);

    export function deflateSync(buf : string, options : zlib.ZlibOptions) : Buffer;

    export function deflateRaw(buf : string, callback : (p1: Error, p2: Buffer) => void);

    export function deflateRawSync(buf : string, options : zlib.ZlibOptions) : Buffer;

    export function deflateSync(buf : string) : Buffer;

    export function deflateRawSync(buf : string) : Buffer;

}
declare namespace zlib {
    export interface ZlibOptions {
        flush? : number;

        finishFlush? : number;

        chunkSize? : number;

        windowBits? : number;

        level? : number;

        memLevel? : number;

        strategy? : number;

        dictionary? : any;
    }
}
declare namespace zlib {
    export interface Unzip extends stream.Transform {    }
}
declare namespace zlib {
    export interface Gunzip extends stream.Transform {    }
}
declare namespace zlib {
    export interface InflateRaw extends stream.Transform {    }
}
declare namespace zlib {
    export interface Inflate extends stream.Transform {    }
}
declare namespace zlib {
    export interface Gzip extends stream.Transform {    }
}
interface NodeModule {
    exports : any;

    require : any;

    id : string;

    filename : string;

    loaded : boolean;

    parent : NodeModule;

    children : NodeModule[];
}

declare namespace repl {
    export interface ReplOptions {
        prompt? : string;

        input? : NodeJS.ReadableStream;

        output? : NodeJS.WritableStream;

        terminal? : boolean;

        eval? : any;

        useColors? : boolean;

        useGlobal? : boolean;

        ignoreUndefined? : boolean;

        writer? : any;

        completer? : any;

        replMode? : any;

        breakEvalOnSigint? : any;
    }
}
declare namespace repl {}
declare namespace repl {
    export function start(options : repl.ReplOptions) : repl.REPLServer;

}
declare namespace repl {
    export interface REPLServer extends readline.ReadLine {
        defineCommand(keyword : string, cmd : Function);

        displayPrompt(preserveCursor : boolean);

        addListener(event : string, listener : Function) : REPLServer;

        addListener(event : "exit", listener : () => void) : REPLServer;

        addListener(event : "reset", listener : Function) : REPLServer;

        emit(event : string, ...args : any[]) : boolean;

        emit(event : "exit") : boolean;

        emit(event : "reset", context : any) : boolean;

        on(event : string, listener : Function) : REPLServer;

        on(event : "exit", listener : () => void) : REPLServer;

        on(event : "reset", listener : Function) : REPLServer;

        once(event : string, listener : Function) : REPLServer;

        once(event : "exit", listener : () => void) : REPLServer;

        once(event : "reset", listener : Function) : REPLServer;

        prependListener(event : string, listener : Function) : REPLServer;

        prependListener(event : "exit", listener : () => void) : REPLServer;

        prependListener(event : "reset", listener : Function) : REPLServer;

        prependOnceListener(event : string, listener : Function) : REPLServer;

        prependOnceListener(event : "exit", listener : () => void) : REPLServer;

        prependOnceListener(event : "reset", listener : Function) : REPLServer;

        displayPrompt();

        defineCommand(keyword : string, cmd : any);
    }
}
declare namespace path {}
declare namespace path {
    /**
     * Normalize a string path, reducing '..' and '.' parts.
     * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
     * 
     * @param {string} p string path to normalize.
     * @return {string}
     */
    export function normalize(p : string) : string;

    /**
     * Join all arguments together and normalize the resulting path.
     * Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.
     * 
     * @param {Array} paths paths to join.
     * @return {string}
     */
    export function join(...paths : string[]) : string;

    /**
     * The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.
     * 
     * Starting from leftmost {from} paramter, resolves {to} to an absolute path.
     * 
     * If {to} isn't already absolute, {from} arguments are prepended in right to left order, until an absolute path is found. If after using all {from} paths still no absolute path is found, the current working directory is used as well. The resulting path is normalized, and trailing slashes are removed unless the path gets resolved to the root directory.
     * 
     * @param {Array} pathSegments string paths to join.  Non-string arguments are ignored.
     * @return {string}
     */
    export function resolve(...pathSegments : any[]) : string;

    /**
     * Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
     * 
     * @param {string} path path to test.
     * @return {boolean}
     */
    export function isAbsolute(path : string) : boolean;

    /**
     * Solve the relative path from {from} to {to}.
     * At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.
     * 
     * @param {string} from
     * @param {string} to
     * @return {string}
     */
    export function relative(from : string, to : string) : string;

    /**
     * Return the directory name of a path. Similar to the Unix dirname command.
     * 
     * @param {string} p the path to evaluate.
     * @return {string}
     */
    export function dirname(p : string) : string;

    /**
     * Return the last portion of a path. Similar to the Unix basename command.
     * Often used to extract the file name from a fully qualified path.
     * 
     * @param {string} p the path to evaluate.
     * @param {string} ext optionally, an extension to remove from the result.
     * @return {string}
     */
    export function basename(p : string, ext : string) : string;

    /**
     * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
     * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string
     * 
     * @param {string} p the path to evaluate.
     * @return {string}
     */
    export function extname(p : string) : string;

    /**
     * The platform-specific file separator. '\\' or '/'.
     */
    export var sep : string;

    /**
     * The platform-specific file delimiter. ';' or ':'.
     */
    export var delimiter : string;

    /**
     * Returns an object from a path string - the opposite of format().
     * 
     * @param {string} pathString path to evaluate.
     * @return {*}
     */
    export function parse(pathString : string) : path.ParsedPath;

    /**
     * Returns a path string from an object - the opposite of parse().
     * 
     * @param pathString path to evaluate.
     * @param {*} pathObject
     * @return {string}
     */
    export function format(pathObject : path.ParsedPath) : string;

    /**
     * Return the last portion of a path. Similar to the Unix basename command.
     * Often used to extract the file name from a fully qualified path.
     * 
     * @param {string} p the path to evaluate.
     * @param ext optionally, an extension to remove from the result.
     * @return {string}
     */
    export function basename(p : string) : string;

}
declare namespace path.posix {}
declare namespace path.posix {
    export function normalize(p : string) : string;

    export function join(...paths : any[]) : string;

    export function resolve(...pathSegments : any[]) : string;

    export function isAbsolute(p : string) : boolean;

    export function relative(from : string, to : string) : string;

    export function dirname(p : string) : string;

    export function basename(p : string, ext : string) : string;

    export function extname(p : string) : string;

    export var sep : string;

    export var delimiter : string;

    export function parse(p : string) : path.ParsedPath;

    export function format(pP : path.ParsedPath) : string;

    export function basename(p : string) : string;

}
declare namespace path.win32 {}
declare namespace path.win32 {
    export function normalize(p : string) : string;

    export function join(...paths : any[]) : string;

    export function resolve(...pathSegments : any[]) : string;

    export function isAbsolute(p : string) : boolean;

    export function relative(from : string, to : string) : string;

    export function dirname(p : string) : string;

    export function basename(p : string, ext : string) : string;

    export function extname(p : string) : string;

    export var sep : string;

    export var delimiter : string;

    export function parse(p : string) : path.ParsedPath;

    export function format(pP : path.ParsedPath) : string;

    export function basename(p : string) : string;

}
declare namespace path {
    /**
     * A parsed path object generated by path.parse() or consumed by path.format().
     * @class
     * @extends Object
     */
    export interface ParsedPath {
        /**
         * The root of the path such as '/' or 'c:\'
         */
        root : string;

        /**
         * The full directory path such as '/home/user/dir' or 'c:\path\dir'
         */
        dir : string;

        /**
         * The file name including extension (if any) such as 'index.html'
         */
        base : string;

        /**
         * The file extension (if any) such as '.html'
         */
        ext : string;

        /**
         * The file name without extension (if any) such as 'index'
         */
        name : string;
    }
}
declare namespace timers {}
declare namespace timers {
    export function setTimeout(callback : (p1: any) => void, ms : number, ...args : any[]) : NodeJS.Timer;

    export function clearTimeout(timeoutId : NodeJS.Timer);

    export function setInterval(callback : (p1: any) => void, ms : number, ...args : any[]) : NodeJS.Timer;

    export function clearInterval(intervalId : NodeJS.Timer);

    export function setImmediate(callback : (p1: any) => void, ...args : any[]) : any;

    export function clearImmediate(immediateId : any);

}
interface StringTypes {}

declare namespace StringTypes {

    /**
     * Generated to type the string "Buffer".
     * @exclude
     * @class
     */
    export interface Buffer {    }

    /**
     * Generated to type the string "udp4".
     * @exclude
     * @class
     */
    export interface udp4 {    }

    /**
     * Generated to type the string "udp6".
     * @exclude
     * @class
     */
    export interface udp6 {    }

    /**
     * Generated to type the string "disconnect".
     * @exclude
     * @class
     */
    export interface disconnect {    }

    /**
     * Generated to type the string "error".
     * @exclude
     * @class
     */
    export interface error {    }

    /**
     * Generated to type the string "exit".
     * @exclude
     * @class
     */
    export interface exit {    }

    /**
     * Generated to type the string "listening".
     * @exclude
     * @class
     */
    export interface listening {    }

    /**
     * Generated to type the string "message".
     * @exclude
     * @class
     */
    export interface message {    }

    /**
     * Generated to type the string "online".
     * @exclude
     * @class
     */
    export interface online {    }

    /**
     * Generated to type the string "fork".
     * @exclude
     * @class
     */
    export interface fork {    }

    /**
     * Generated to type the string "setup".
     * @exclude
     * @class
     */
    export interface setup {    }

    /**
     * Generated to type the string "BE".
     * @exclude
     * @class
     */
    export interface BE {    }

    /**
     * Generated to type the string "LE".
     * @exclude
     * @class
     */
    export interface LE {    }

    /**
     * Generated to type the string "reset".
     * @exclude
     * @class
     */
    export interface reset {    }

    /**
     * Generated to type the string "close".
     * @exclude
     * @class
     */
    export interface close {    }

    /**
     * Generated to type the string "line".
     * @exclude
     * @class
     */
    export interface line {    }

    /**
     * Generated to type the string "pause".
     * @exclude
     * @class
     */
    export interface pause {    }

    /**
     * Generated to type the string "resume".
     * @exclude
     * @class
     */
    export interface resume {    }

    /**
     * Generated to type the string "SIGCONT".
     * @exclude
     * @class
     */
    export interface SIGCONT {    }

    /**
     * Generated to type the string "SIGINT".
     * @exclude
     * @class
     */
    export interface SIGINT {    }

    /**
     * Generated to type the string "SIGTSTP".
     * @exclude
     * @class
     */
    export interface SIGTSTP {    }

    /**
     * Generated to type the string "disconnet".
     * @exclude
     * @class
     */
    export interface disconnet {    }

    /**
     * Generated to type the string "connect".
     * @exclude
     * @class
     */
    export interface connect {    }

    /**
     * Generated to type the string "data".
     * @exclude
     * @class
     */
    export interface data {    }

    /**
     * Generated to type the string "drain".
     * @exclude
     * @class
     */
    export interface drain {    }

    /**
     * Generated to type the string "lookup".
     * @exclude
     * @class
     */
    export interface lookup {    }

    /**
     * Generated to type the string "timeout".
     * @exclude
     * @class
     */
    export interface timeout {    }

    /**
     * Generated to type the string "connection".
     * @exclude
     * @class
     */
    export interface connection {    }

    /**
     * Generated to type the string "change".
     * @exclude
     * @class
     */
    export interface change {    }

    /**
     * Generated to type the string "open".
     * @exclude
     * @class
     */
    export interface open {    }

    /**
     * Generated to type the string "OCSPResponse".
     * @exclude
     * @class
     */
    export interface OCSPResponse {    }

    /**
     * Generated to type the string "secureConnect".
     * @exclude
     * @class
     */
    export interface secureConnect {    }

    /**
     * Generated to type the string "tlsClientError".
     * @exclude
     * @class
     */
    export interface tlsClientError {    }

    /**
     * Generated to type the string "newSession".
     * @exclude
     * @class
     */
    export interface newSession {    }

    /**
     * Generated to type the string "OCSPRequest".
     * @exclude
     * @class
     */
    export interface OCSPRequest {    }

    /**
     * Generated to type the string "resumeSession".
     * @exclude
     * @class
     */
    export interface resumeSession {    }

    /**
     * Generated to type the string "secureConnection".
     * @exclude
     * @class
     */
    export interface secureConnection {    }

    /**
     * Generated to type the string "utf8".
     * @exclude
     * @class
     */
    export interface utf8 {    }

    /**
     * Generated to type the string "ascii".
     * @exclude
     * @class
     */
    export interface ascii {    }

    /**
     * Generated to type the string "latin1".
     * @exclude
     * @class
     */
    export interface latin1 {    }

    /**
     * Generated to type the string "hex".
     * @exclude
     * @class
     */
    export interface hex {    }

    /**
     * Generated to type the string "base64".
     * @exclude
     * @class
     */
    export interface base64 {    }

    /**
     * Generated to type the string "binary".
     * @exclude
     * @class
     */
    export interface binary {    }

    /**
     * Generated to type the string "compressed".
     * @exclude
     * @class
     */
    export interface compressed {    }

    /**
     * Generated to type the string "uncompressed".
     * @exclude
     * @class
     */
    export interface uncompressed {    }

    /**
     * Generated to type the string "hybrid".
     * @exclude
     * @class
     */
    export interface hybrid {    }

    /**
     * Generated to type the string "end".
     * @exclude
     * @class
     */
    export interface end {    }

    /**
     * Generated to type the string "readable".
     * @exclude
     * @class
     */
    export interface readable {    }

    /**
     * Generated to type the string "finish".
     * @exclude
     * @class
     */
    export interface finish {    }

    /**
     * Generated to type the string "pipe".
     * @exclude
     * @class
     */
    export interface pipe {    }

    /**
     * Generated to type the string "unpipe".
     * @exclude
     * @class
     */
    export interface unpipe {    }
}


declare namespace http {
    export interface IncomingMessage extends stream.Readable {
        httpVersion : string;

        httpVersionMajor : number;

        httpVersionMinor : number;

        connection : net.Socket;

        headers : any;

        rawHeaders : string[];

        trailers : any;

        rawTrailers : any;

        setTimeout(msecs : number, callback : Function) : NodeJS.Timer;

        /**
         * Only valid for request obtained from http.Server.
         */
        method? : string;

        /**
         * Only valid for request obtained from http.Server.
         */
        url? : string;

        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusCode? : number;

        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusMessage? : string;

        socket : net.Socket;

        destroy(error : Error);

        destroy();
    }
}
declare namespace http {
    /**
     * @deprecated Use IncomingMessage
     * @class
     * @extends *
     */
    export interface ServerRequest extends http.IncomingMessage {
        connection : net.Socket;
    }
}
declare namespace http {
    export class Agent {
        public maxSockets : number;

        public sockets : any;

        public requests : any;

        public constructor(opts : http.AgentOptions);

        /**
         * Destroy any sockets that are currently in use by the agent.
         * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
         * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
         * sockets may hang open for quite a long time before the server terminates them.
         */
        public destroy();

        public constructor();
    }
}
declare namespace http {
    export interface AgentOptions {
        /**
         * Keep sockets around in a pool to be used by other requests in the future. Default = false
         */
        keepAlive? : boolean;

        /**
         * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
         * Only relevant if keepAlive is set to true.
         */
        keepAliveMsecs? : number;

        /**
         * Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
         */
        maxSockets? : number;

        /**
         * Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
         */
        maxFreeSockets? : number;
    }
}
declare namespace http {}
declare namespace http {
    export var METHODS : string[];

    export function createServer(requestListener : (p1: http.IncomingMessage, p2: http.ServerResponse) => void) : http.Server;

    export function createClient(port : number, host : string) : any;

    export function request(options : http.RequestOptions, callback : (p1: http.IncomingMessage) => void) : http.ClientRequest;

    export function get(options : any, callback : (p1: http.IncomingMessage) => void) : http.ClientRequest;

    export var globalAgent : http.Agent;

    export function createServer() : http.Server;

    export function createClient(port : number) : any;

    export function createClient() : any;

    export function request(options : http.RequestOptions) : http.ClientRequest;

    export function get(options : any) : http.ClientRequest;

}
declare namespace http {
    export interface RequestOptions {
        protocol? : string;

        host? : string;

        hostname? : string;

        family? : number;

        port? : number;

        localAddress? : string;

        socketPath? : string;

        method? : string;

        path? : string;

        headers? : any;

        auth? : string;

        agent? : ((http.Agent)|(boolean));

        timeout? : number;
    }
}
declare namespace http {
    /**
     * @deprecated Use IncomingMessage
     * @class
     * @extends *
     */
    export interface ClientResponse extends http.IncomingMessage {    }
}
declare namespace http {
    /**
     * This is an automatically generated object type (see the source definition).
     * @class
     * @extends Object
     */
    export class STATUS_CODES {
        public static $getStatic(errorCode : number) : string;

        public static $getStatic(errorCode : string) : string;
    }
}
declare namespace http {
    export interface ServerResponse extends stream.Writable {
        write(buffer : Buffer) : boolean;

        write(buffer : Buffer, cb : Function) : boolean;

        write(str : string, cb : Function) : boolean;

        write(str : string, encoding : string, cb : Function) : boolean;

        write(str : string, encoding : string, fd : string) : boolean;

        writeContinue();

        writeHead(statusCode : number, reasonPhrase : string, headers : any);

        writeHead(statusCode : number, headers : any);

        statusCode : number;

        statusMessage : string;

        headersSent : boolean;

        setHeader(name : string, value : string);

        setTimeout(msecs : number, callback : Function) : ServerResponse;

        sendDate : boolean;

        getHeader(name : string) : string;

        removeHeader(name : string);

        addTrailers(headers : any);

        finished : boolean;

        end();

        end(buffer : Buffer, cb : Function);

        end(str : string, cb : Function);

        end(str : string, encoding : string, cb : Function);

        end(data : any, encoding : string);

        write(str : string) : boolean;

        write(str : string, encoding : string) : boolean;

        writeHead(statusCode : number, reasonPhrase : string);

        writeHead(statusCode : number);

        end(buffer : Buffer);

        end(str : string);

        end(str : string, encoding : string);

        end(data : any);

        setHeader(name : string, value : string[]);
    }
}
declare namespace http {
    export interface ClientRequest extends stream.Writable {
        write(buffer : Buffer) : boolean;

        write(buffer : Buffer, cb : Function) : boolean;

        write(str : string, cb : Function) : boolean;

        write(str : string, encoding : string, cb : Function) : boolean;

        write(str : string, encoding : string, fd : string) : boolean;

        abort();

        setTimeout(timeout : number, callback : Function);

        setNoDelay(noDelay : boolean);

        setSocketKeepAlive(enable : boolean, initialDelay : number);

        setHeader(name : string, value : string);

        getHeader(name : string) : string;

        removeHeader(name : string);

        addTrailers(headers : any);

        end();

        end(buffer : Buffer, cb : Function);

        end(str : string, cb : Function);

        end(str : string, encoding : string, cb : Function);

        end(data : any, encoding : string);

        write(str : string) : boolean;

        write(str : string, encoding : string) : boolean;

        setTimeout(timeout : number);

        setNoDelay();

        setSocketKeepAlive(enable : boolean);

        setSocketKeepAlive();

        end(buffer : Buffer);

        end(str : string);

        end(str : string, encoding : string);

        end(data : any);

        setHeader(name : string, value : string[]);
    }
}
declare namespace http {
    export interface Server extends net.Server {
        setTimeout(msecs : number, callback : Function);

        maxHeadersCount : number;

        timeout : number;

        listening : boolean;
    }
}
declare namespace domain {}
declare namespace domain {
    export function create() : domain.Domain;

}
declare namespace domain {
    export class Domain extends events.EventEmitter {
        public add(emitter : events.EventEmitter);

        public remove(emitter : events.EventEmitter);

        public members : any[];

        public enter();

        public exit();

        public run(fn : Function);

        public add(emitter : NodeJS.Events);

        public remove(emitter : NodeJS.Events);

        public bind(cb : (p1: Error, p2: any) => any) : any;

        public intercept(cb : (p1: any) => any) : any;

        public dispose();

        public addListener(event : string, listener : Function) : Domain;

        public on(event : string, listener : Function) : Domain;

        public once(event : string, listener : Function) : Domain;

        public removeListener(event : string, listener : Function) : Domain;

        public removeAllListeners(event : string) : Domain;

        public removeAllListeners() : Domain;
    }
}
declare namespace https {
    export class Agent extends http.Agent {
        public constructor(options : https.AgentOptions);

        public constructor();
    }
}
declare namespace https {
    export interface AgentOptions extends http.AgentOptions {
        pfx? : any;

        key? : any;

        passphrase? : string;

        cert? : any;

        ca? : any;

        ciphers? : string;

        rejectUnauthorized? : boolean;

        secureProtocol? : string;

        maxCachedSessions? : number;
    }
}
declare namespace https {}
declare namespace https {
    export function createServer(options : https.ServerOptions, requestListener : Function) : https.Server;

    export function request(options : https.RequestOptions, callback : (p1: http.IncomingMessage) => void) : http.ClientRequest;

    export function get(options : https.RequestOptions, callback : (p1: http.IncomingMessage) => void) : http.ClientRequest;

    export var globalAgent : https.Agent;

    export function createServer(options : https.ServerOptions) : https.Server;

    export function request(options : https.RequestOptions) : http.ClientRequest;

    export function get(options : https.RequestOptions) : http.ClientRequest;

}
declare namespace https {
    export interface RequestOptions extends http.RequestOptions {
        pfx? : any;

        key? : any;

        passphrase? : string;

        cert? : any;

        ca? : any;

        ciphers? : string;

        rejectUnauthorized? : boolean;

        secureProtocol? : string;
    }
}
declare namespace https {
    export interface ServerOptions {
        pfx? : any;

        key? : any;

        passphrase? : string;

        cert? : any;

        ca? : any;

        crl? : any;

        ciphers? : string;

        honorCipherOrder? : boolean;

        requestCert? : boolean;

        rejectUnauthorized? : boolean;

        NPNProtocols? : any;

        SNICallback? : (p1: string, p2: (p1: Error, p2: tls.SecureContext) => any) => any;
    }
}
declare namespace https {
    export interface Server extends tls.Server {    }
}
declare namespace stream {
    export class Duplex extends stream.Readable {
        public writable : boolean;

        public constructor(opts : stream.DuplexOptions);

        public _write(chunk : any, encoding : string, callback : Function);

        public write(chunk : any, cb : Function) : boolean;

        public write(chunk : any, encoding : string, cb : Function) : boolean;

        public end(chunk : any, cb : Function);

        public end(chunk : any, encoding : string, cb : Function);

        public pause() : NodeJS.ReadWriteStream;

        public resume() : NodeJS.ReadWriteStream;

        public isTTY : boolean;

        public write(buffer : Buffer, cb : Function) : boolean;

        public write(str : string, encoding : string, cb : Function) : boolean;

        public end();

        public end(buffer : Buffer, cb : Function);

        public end(str : string, cb : Function);

        public end(str : string, encoding : string, cb : Function);

        public constructor();

        public write(chunk : any) : boolean;

        public write(chunk : any, encoding : string) : boolean;

        public end(chunk : any);

        public end(chunk : any, encoding : string);

        public write(buffer : Buffer) : boolean;

        public write(str : string, encoding : string) : boolean;

        public end(buffer : Buffer);

        public end(str : string);

        public end(str : string, encoding : string);

        public write(buffer : string, cb : Function) : boolean;

        public write(buffer : string) : boolean;
    }
}
declare namespace stream {
    export class PassThrough extends stream.Transform {    }
}
declare namespace stream {
    export class Readable extends events.EventEmitter {
        public readable : boolean;

        public constructor(opts : stream.ReadableOptions);

        public _read(size : number);

        public pipe<T extends NodeJS.WritableStream>(destination : T, options : any) : T;

        public unshift(chunk : any);

        public push(chunk : any, encoding : string) : boolean;

        public addListener(event : string, listener : Function) : Readable;

        public addListener(event : "close", listener : () => void) : Readable;

        public addListener(event : "data", listener : (p1: Buffer) => void) : Readable;

        public addListener(event : "end", listener : () => void) : Readable;

        public addListener(event : "readable", listener : () => void) : Readable;

        public addListener(event : "error", listener : (p1: Error) => void) : Readable;

        public emit(event : string, ...args : any[]) : boolean;

        public emit(event : "close") : boolean;

        public emit(event : "data", chunk : Buffer) : boolean;

        public emit(event : "end") : boolean;

        public emit(event : "readable") : boolean;

        public emit(event : "error", err : Error) : boolean;

        public on(event : string, listener : Function) : Readable;

        public on(event : "close", listener : () => void) : Readable;

        public on(event : "data", listener : (p1: Buffer) => void) : Readable;

        public on(event : "end", listener : () => void) : Readable;

        public on(event : "readable", listener : () => void) : Readable;

        public on(event : "error", listener : (p1: Error) => void) : Readable;

        public once(event : string, listener : Function) : Readable;

        public once(event : "close", listener : () => void) : Readable;

        public once(event : "data", listener : (p1: Buffer) => void) : Readable;

        public once(event : "end", listener : () => void) : Readable;

        public once(event : "readable", listener : () => void) : Readable;

        public once(event : "error", listener : (p1: Error) => void) : Readable;

        public prependListener(event : string, listener : Function) : Readable;

        public prependListener(event : "close", listener : () => void) : Readable;

        public prependListener(event : "data", listener : (p1: Buffer) => void) : Readable;

        public prependListener(event : "end", listener : () => void) : Readable;

        public prependListener(event : "readable", listener : () => void) : Readable;

        public prependListener(event : "error", listener : (p1: Error) => void) : Readable;

        public prependOnceListener(event : string, listener : Function) : Readable;

        public prependOnceListener(event : "close", listener : () => void) : Readable;

        public prependOnceListener(event : "data", listener : (p1: Buffer) => void) : Readable;

        public prependOnceListener(event : "end", listener : () => void) : Readable;

        public prependOnceListener(event : "readable", listener : () => void) : Readable;

        public prependOnceListener(event : "error", listener : (p1: Error) => void) : Readable;

        public removeListener(event : string, listener : Function) : Readable;

        public removeListener(event : "close", listener : () => void) : Readable;

        public removeListener(event : "data", listener : (p1: Buffer) => void) : Readable;

        public removeListener(event : "end", listener : () => void) : Readable;

        public removeListener(event : "readable", listener : () => void) : Readable;

        public removeListener(event : "error", listener : (p1: Error) => void) : Readable;

        public isTTY : boolean;

        public read(size : number) : ((string)|(Buffer));

        public setEncoding(encoding : string);

        public pause() : NodeJS.ReadableStream;

        public resume() : NodeJS.ReadableStream;

        public isPaused() : boolean;

        public pipe<T extends NodeJS.WritableStream>(destination : T, options : any) : T;

        public unpipe<T extends NodeJS.WritableStream>(destination : T);

        public unshift(chunk : string);

        public unshift(chunk : Buffer);

        public wrap(oldStream : NodeJS.ReadableStream) : NodeJS.ReadableStream;

        public constructor();

        public read() : any;

        public pipe<T extends NodeJS.WritableStream>(destination : T) : T;

        public unpipe<T extends NodeJS.WritableStream>();

        public push(chunk : any) : boolean;

        public addListener(event : "data", listener : (p1: string) => void) : Readable;

        public emit(event : "data", chunk : string) : boolean;

        public on(event : "data", listener : (p1: string) => void) : Readable;

        public once(event : "data", listener : (p1: string) => void) : Readable;

        public prependListener(event : "data", listener : (p1: string) => void) : Readable;

        public prependOnceListener(event : "data", listener : (p1: string) => void) : Readable;

        public removeListener(event : "data", listener : (p1: string) => void) : Readable;

        public setEncoding(encoding : any);
    }
}
declare namespace stream {}
declare namespace stream {
    export interface DuplexOptions extends stream.ReadableOptions {
        allowHalfOpen? : boolean;

        readableObjectMode? : boolean;

        writableObjectMode? : boolean;

        highWaterMark? : number;

        decodeStrings? : boolean;

        objectMode? : boolean;

        write? : (p1: ((string)|(Buffer)), p2: string, p3: Function) => any;

        writev? : (p1: any[], p2: Function) => any;
    }
}
declare namespace stream {
    export interface TransformOptions extends stream.DuplexOptions {
        transform? : (p1: ((string)|(Buffer)), p2: string, p3: Function) => any;

        flush? : (p1: Function) => any;
    }
}
declare namespace stream {
    export interface ReadableOptions {
        highWaterMark? : number;

        encoding? : string;

        objectMode? : boolean;

        read? : (p1: number) => any;
    }
}
declare namespace stream {
    export interface WritableOptions {
        highWaterMark? : number;

        decodeStrings? : boolean;

        objectMode? : boolean;

        write? : (p1: ((string)|(Buffer)), p2: string, p3: Function) => any;

        writev? : (p1: any[], p2: Function) => any;
    }
}
declare namespace stream {
    export class Writable extends events.EventEmitter {
        public writable : boolean;

        public constructor(opts : stream.WritableOptions);

        public _write(chunk : any, encoding : string, callback : Function);

        public write(chunk : any, cb : Function) : boolean;

        public write(chunk : any, encoding : string, cb : Function) : boolean;

        public end(chunk : any, cb : Function);

        public end(chunk : any, encoding : string, cb : Function);

        public addListener(event : string, listener : Function) : Writable;

        public addListener(event : "close", listener : () => void) : Writable;

        public addListener(event : "drain", listener : () => void) : Writable;

        public addListener(event : "error", listener : (p1: Error) => void) : Writable;

        public addListener(event : "finish", listener : () => void) : Writable;

        public addListener(event : "pipe", listener : (p1: stream.Readable) => void) : Writable;

        public addListener(event : "unpipe", listener : (p1: stream.Readable) => void) : Writable;

        public emit(event : string, ...args : any[]) : boolean;

        public emit(event : "close") : boolean;

        public emit(event : "drain", chunk : Buffer) : boolean;

        public emit(event : "error", err : Error) : boolean;

        public emit(event : "finish") : boolean;

        public emit(event : "pipe", src : stream.Readable) : boolean;

        public emit(event : "unpipe", src : stream.Readable) : boolean;

        public on(event : string, listener : Function) : Writable;

        public on(event : "close", listener : () => void) : Writable;

        public on(event : "drain", listener : () => void) : Writable;

        public on(event : "error", listener : (p1: Error) => void) : Writable;

        public on(event : "finish", listener : () => void) : Writable;

        public on(event : "pipe", listener : (p1: stream.Readable) => void) : Writable;

        public on(event : "unpipe", listener : (p1: stream.Readable) => void) : Writable;

        public once(event : string, listener : Function) : Writable;

        public once(event : "close", listener : () => void) : Writable;

        public once(event : "drain", listener : () => void) : Writable;

        public once(event : "error", listener : (p1: Error) => void) : Writable;

        public once(event : "finish", listener : () => void) : Writable;

        public once(event : "pipe", listener : (p1: stream.Readable) => void) : Writable;

        public once(event : "unpipe", listener : (p1: stream.Readable) => void) : Writable;

        public prependListener(event : string, listener : Function) : Writable;

        public prependListener(event : "close", listener : () => void) : Writable;

        public prependListener(event : "drain", listener : () => void) : Writable;

        public prependListener(event : "error", listener : (p1: Error) => void) : Writable;

        public prependListener(event : "finish", listener : () => void) : Writable;

        public prependListener(event : "pipe", listener : (p1: stream.Readable) => void) : Writable;

        public prependListener(event : "unpipe", listener : (p1: stream.Readable) => void) : Writable;

        public prependOnceListener(event : string, listener : Function) : Writable;

        public prependOnceListener(event : "close", listener : () => void) : Writable;

        public prependOnceListener(event : "drain", listener : () => void) : Writable;

        public prependOnceListener(event : "error", listener : (p1: Error) => void) : Writable;

        public prependOnceListener(event : "finish", listener : () => void) : Writable;

        public prependOnceListener(event : "pipe", listener : (p1: stream.Readable) => void) : Writable;

        public prependOnceListener(event : "unpipe", listener : (p1: stream.Readable) => void) : Writable;

        public removeListener(event : string, listener : Function) : Writable;

        public removeListener(event : "close", listener : () => void) : Writable;

        public removeListener(event : "drain", listener : () => void) : Writable;

        public removeListener(event : "error", listener : (p1: Error) => void) : Writable;

        public removeListener(event : "finish", listener : () => void) : Writable;

        public removeListener(event : "pipe", listener : (p1: stream.Readable) => void) : Writable;

        public removeListener(event : "unpipe", listener : (p1: stream.Readable) => void) : Writable;

        public isTTY : boolean;

        public write(buffer : Buffer, cb : Function) : boolean;

        public write(str : string, encoding : string, cb : Function) : boolean;

        public end();

        public end(buffer : Buffer, cb : Function);

        public end(str : string, cb : Function);

        public end(str : string, encoding : string, cb : Function);

        public constructor();

        public write(chunk : any) : boolean;

        public write(chunk : any, encoding : string) : boolean;

        public end(chunk : any);

        public end(chunk : any, encoding : string);

        public write(buffer : Buffer) : boolean;

        public write(str : string, encoding : string) : boolean;

        public end(buffer : Buffer);

        public end(str : string);

        public end(str : string, encoding : string);

        public emit(event : "drain", chunk : string) : boolean;

        public write(buffer : string, cb : Function) : boolean;

        public write(buffer : string) : boolean;
    }
}
declare namespace stream {
    export class Transform extends events.EventEmitter {
        public readable : boolean;

        public writable : boolean;

        public constructor(opts : stream.TransformOptions);

        public _transform(chunk : any, encoding : string, callback : Function);

        public _flush(callback : Function);

        public read(size : number) : any;

        public setEncoding(encoding : string);

        public isPaused() : boolean;

        public pipe<T extends NodeJS.WritableStream>(destination : T, options : any) : T;

        public unpipe<T extends NodeJS.WritableStream>(destination : T);

        public unshift(chunk : any);

        public wrap(oldStream : NodeJS.ReadableStream) : NodeJS.ReadableStream;

        public push(chunk : any, encoding : string) : boolean;

        public write(chunk : any, cb : Function) : boolean;

        public write(chunk : any, encoding : string, cb : Function) : boolean;

        public end(chunk : any, cb : Function);

        public end(chunk : any, encoding : string, cb : Function);

        public pause() : NodeJS.ReadWriteStream;

        public resume() : NodeJS.ReadWriteStream;

        public isTTY : boolean;

        public write(buffer : Buffer, cb : Function) : boolean;

        public write(str : string, encoding : string, cb : Function) : boolean;

        public end();

        public end(buffer : Buffer, cb : Function);

        public end(str : string, cb : Function);

        public end(str : string, encoding : string, cb : Function);

        public constructor();

        public read() : any;

        public pipe<T extends NodeJS.WritableStream>(destination : T) : T;

        public unpipe<T extends NodeJS.WritableStream>();

        public push(chunk : any) : boolean;

        public write(chunk : any) : boolean;

        public write(chunk : any, encoding : string) : boolean;

        public end(chunk : any);

        public end(chunk : any, encoding : string);

        public write(buffer : Buffer) : boolean;

        public write(str : string, encoding : string) : boolean;

        public end(buffer : Buffer);

        public end(str : string);

        public end(str : string, encoding : string);

        public write(buffer : string, cb : Function) : boolean;

        public write(buffer : string) : boolean;
    }
}
declare namespace stream {
    export class Stream extends stream.internal {    }
}
declare namespace stream {
    export class internal extends events.EventEmitter {
        public pipe<T extends NodeJS.WritableStream>(destination : T, options : any) : T;

        public pipe<T extends NodeJS.WritableStream>(destination : T) : T;
    }
}
declare namespace vm {
    export interface ScriptOptions {
        filename? : string;

        lineOffset? : number;

        columnOffset? : number;

        displayErrors? : boolean;

        timeout? : number;

        cachedData? : Buffer;

        produceCachedData? : boolean;
    }
}
declare namespace vm {}
declare namespace vm {
    export function createContext(sandbox : vm.Context) : vm.Context;

    export function isContext(sandbox : vm.Context) : boolean;

    export function runInContext(code : string, contextifiedSandbox : vm.Context, options : vm.RunningScriptOptions) : any;

    export function runInDebugContext(code : string) : any;

    export function runInNewContext(code : string, sandbox : vm.Context, options : vm.RunningScriptOptions) : any;

    export function runInThisContext(code : string, options : vm.RunningScriptOptions) : any;

    export function createContext() : vm.Context;

    export function runInContext(code : string, contextifiedSandbox : vm.Context) : any;

    export function runInNewContext(code : string, sandbox : vm.Context) : any;

    export function runInNewContext(code : string) : any;

    export function runInThisContext(code : string) : any;

}
declare namespace vm {
    export class Script {
        public constructor(code : string, options : vm.ScriptOptions);

        public runInContext(contextifiedSandbox : vm.Context, options : vm.RunningScriptOptions) : any;

        public runInNewContext(sandbox : vm.Context, options : vm.RunningScriptOptions) : any;

        public runInThisContext(options : vm.RunningScriptOptions) : any;

        public constructor(code : string);

        public runInContext(contextifiedSandbox : vm.Context) : any;

        public runInNewContext(sandbox : vm.Context) : any;

        public runInNewContext() : any;

        public runInThisContext() : any;

        constructor();
    }
}
declare namespace vm {
    export interface RunningScriptOptions {
        filename? : string;

        lineOffset? : number;

        columnOffset? : number;

        displayErrors? : boolean;

        timeout? : number;
    }
}
declare namespace vm {
    export interface Context {    }
}
declare namespace tls {
    export interface SecurePair {
        encrypted : any;

        cleartext : any;
    }
}
declare namespace tls {}
declare namespace tls {
    export var CLIENT_RENEG_LIMIT : number;

    export var CLIENT_RENEG_WINDOW : number;

    export function createServer(options : tls.TlsOptions, secureConnectionListener : (p1: tls.ClearTextStream) => void) : tls.Server;

    export function connect(options : tls.ConnectionOptions, secureConnectionListener : () => void) : tls.ClearTextStream;

    export function connect(port : number, host : string, options : tls.ConnectionOptions, secureConnectListener : () => void) : tls.ClearTextStream;

    export function connect(port : number, options : tls.ConnectionOptions, secureConnectListener : () => void) : tls.ClearTextStream;

    export function createSecurePair(credentials : _crypto.Credentials, isServer : boolean, requestCert : boolean, rejectUnauthorized : boolean) : tls.SecurePair;

    export function createSecureContext(details : tls.SecureContextOptions) : tls.SecureContext;

    export function createServer(options : tls.TlsOptions) : tls.Server;

    export function connect(options : tls.ConnectionOptions) : tls.ClearTextStream;

    export function connect(port : number, host : string, options : tls.ConnectionOptions) : tls.ClearTextStream;

    export function connect(port : number, host : string) : tls.ClearTextStream;

    export function connect(port : number) : tls.ClearTextStream;

    export function connect(port : number, options : tls.ConnectionOptions) : tls.ClearTextStream;

    export function createSecurePair(credentials : _crypto.Credentials, isServer : boolean, requestCert : boolean) : tls.SecurePair;

    export function createSecurePair(credentials : _crypto.Credentials, isServer : boolean) : tls.SecurePair;

    export function createSecurePair(credentials : _crypto.Credentials) : tls.SecurePair;

    export function createSecurePair() : tls.SecurePair;

}
declare namespace tls {
    export interface ClearTextStream extends stream.Duplex {
        authorized : boolean;

        authorizationError : Error;

        getPeerCertificate() : any;

        getCipher : any;

        address : any;

        remoteAddress : string;

        remotePort : number;
    }
}
declare namespace tls {
    export interface SecureContextOptions {
        pfx? : ((string)|(Buffer));

        key? : ((string)|(Buffer));

        passphrase? : string;

        cert? : ((string)|(Buffer));

        ca? : ((string)|(Buffer));

        crl? : ((string)|(string[]));

        ciphers? : string;

        honorCipherOrder? : boolean;
    }
}
declare namespace tls {
    export interface ConnectionOptions {
        host? : string;

        port? : number;

        socket? : net.Socket;

        pfx? : ((string)|(Buffer));

        key? : any;

        passphrase? : string;

        cert? : any;

        ca? : ((string)|(Buffer)|(((string)|(Buffer))[]));

        rejectUnauthorized? : boolean;

        NPNProtocols? : ((string)|(Buffer))[];

        servername? : string;

        path? : string;

        ALPNProtocols? : ((string)|(Buffer))[];

        checkServerIdentity? : (p1: string, p2: ((string)|(Buffer)|(((string)|(Buffer))[]))) => any;

        secureProtocol? : string;

        secureContext? : any;

        session? : Buffer;

        minDHSize? : number;
    }
}
declare namespace tls {
    export interface Certificate {
        /**
         * Country code.
         */
        C : string;

        /**
         * Street.
         */
        ST : string;

        /**
         * Locality.
         */
        L : string;

        /**
         * Organization.
         */
        O : string;

        /**
         * Organizational unit.
         */
        OU : string;

        /**
         * Common name.
         */
        CN : string;
    }
}
declare namespace tls {
    export interface CipherNameAndProtocol {
        /**
         * The cipher name.
         */
        name : string;

        /**
         * SSL/TLS protocol version.
         */
        version : string;
    }
}
declare namespace tls {
    export interface SecureContext {
        context : any;
    }
}
declare namespace tls {
    export interface TlsOptions {
        host? : string;

        port? : number;

        pfx? : ((string)|(Buffer[]));

        key? : any;

        passphrase? : string;

        cert? : any;

        ca? : any;

        crl? : ((string)|(string[]));

        ciphers? : string;

        honorCipherOrder? : boolean;

        requestCert? : boolean;

        rejectUnauthorized? : boolean;

        NPNProtocols? : ((string[])|(Buffer));

        SNICallback? : (p1: string, p2: (p1: Error, p2: tls.SecureContext) => any) => any;

        ecdhCurve? : string;

        dhparam? : ((string)|(Buffer));

        handshakeTimeout? : number;

        ALPNProtocols? : ((string[])|(Buffer));

        sessionTimeout? : number;

        ticketKeys? : any;

        sessionIdContext? : string;

        secureProtocol? : string;
    }
}
declare namespace tls {
    /**
     * Construct a new tls.TLSSocket object from an existing TCP socket.
     * @param {net.Socket} socket
     * @param {tls.TLSSocket.Options} options
     * @class
     * @extends stream.Duplex
     */
    export class TLSSocket extends stream.Duplex {
        public constructor(socket : net.Socket, options : any);

        /**
         * Returns the bound address, the address family name and port of the underlying socket as reported by
         * the operating system.
         * @returns {any} - An object with three properties, e.g. { port: 12346, family: 'IPv4', address: '127.0.0.1' }.
         * @return {tls.TLSSocket.Address}
         */
        public address() : any;

        /**
         * A boolean that is true if the peer certificate was signed by one of the specified CAs, otherwise false.
         */
        public authorized : boolean;

        /**
         * The reason why the peer's certificate has not been verified.
         * This property becomes available only when tlsSocket.authorized === false.
         */
        public authorizationError : Error;

        /**
         * Static boolean value, always true.
         * May be used to distinguish TLS sockets from regular ones.
         */
        public encrypted : boolean;

        /**
         * Returns an object representing the cipher name and the SSL/TLS protocol version of the current connection.
         * @returns {CipherNameAndProtocol} - Returns an object representing the cipher name
         * and the SSL/TLS protocol version of the current connection.
         * @return {*}
         */
        public getCipher() : tls.CipherNameAndProtocol;

        /**
         * Returns an object representing the peer's certificate.
         * The returned object has some properties corresponding to the field of the certificate.
         * If detailed argument is true the full chain with issuer property will be returned,
         * if false only the top certificate without issuer property.
         * If the peer does not provide a certificate, it returns null or an empty object.
         * @param {boolean} detailed - If true; the full chain with issuer property will be returned.
         * @returns {any} - An object representing the peer's certificate.
         * @param {boolean} detailed
         * @return {tls.TLSSocket.GetPeerCertificate}
         */
        public getPeerCertificate(detailed : boolean) : any;

        /**
         * Could be used to speed up handshake establishment when reconnecting to the server.
         * @returns {any} - ASN.1 encoded TLS session or undefined if none was negotiated.
         * @return {*}
         */
        public getSession() : any;

        /**
         * NOTE: Works only with client TLS sockets.
         * Useful only for debugging, for session reuse provide session option to tls.connect().
         * @returns {any} - TLS session ticket or undefined if none was negotiated.
         * @return {*}
         */
        public getTLSTicket() : any;

        /**
         * The string representation of the local IP address.
         */
        public localAddress : string;

        /**
         * The numeric representation of the local port.
         */
        public localPort : string;

        /**
         * The string representation of the remote IP address.
         * For example, '74.125.127.100' or '2001:4860:a005::68'.
         */
        public remoteAddress : string;

        /**
         * The string representation of the remote IP family. 'IPv4' or 'IPv6'.
         */
        public remoteFamily : string;

        /**
         * The numeric representation of the remote port. For example, 443.
         */
        public remotePort : number;

        /**
         * Initiate TLS renegotiation process.
         * 
         * NOTE: Can be used to request peer's certificate after the secure connection has been established.
         * ANOTHER NOTE: When running as the server, socket will be destroyed with an error after handshakeTimeout timeout.
         * @param {TlsOptions} options - The options may contain the following fields: rejectUnauthorized,
         * requestCert (See tls.createServer() for details).
         * @param {Function} callback - callback(err) will be executed with null as err, once the renegotiation
         * is successfully completed.
         * @param {*} options
         * @param {*} callback
         * @return {*}
         */
        public renegotiate(options : tls.TlsOptions, callback : (p1: Error) => any) : any;

        /**
         * Set maximum TLS fragment size (default and maximum value is: 16384, minimum is: 512).
         * Smaller fragment size decreases buffering latency on the client: large fragments are buffered by
         * the TLS layer until the entire fragment is received and its integrity is verified;
         * large fragments can span multiple roundtrips, and their processing can be delayed due to packet
         * loss or reordering. However, smaller fragments add extra TLS framing bytes and CPU overhead,
         * which may decrease overall server throughput.
         * @param {number} size - TLS fragment size (default and maximum value is: 16384, minimum is: 512).
         * @returns {boolean} - Returns true on success, false otherwise.
         * @param {number} size
         * @return {boolean}
         */
        public setMaxSendFragment(size : number) : boolean;

        public addListener(event : string, listener : Function) : TLSSocket;

        public addListener(event : "OCSPResponse", listener : (p1: Buffer) => void) : TLSSocket;

        public addListener(event : "secureConnect", listener : () => void) : TLSSocket;

        public emit(event : string, ...args : any[]) : boolean;

        public emit(event : "OCSPResponse", response : Buffer) : boolean;

        public emit(event : "secureConnect") : boolean;

        public on(event : string, listener : Function) : TLSSocket;

        public on(event : "OCSPResponse", listener : (p1: Buffer) => void) : TLSSocket;

        public on(event : "secureConnect", listener : () => void) : TLSSocket;

        public once(event : string, listener : Function) : TLSSocket;

        public once(event : "OCSPResponse", listener : (p1: Buffer) => void) : TLSSocket;

        public once(event : "secureConnect", listener : () => void) : TLSSocket;

        public prependListener(event : string, listener : Function) : TLSSocket;

        public prependListener(event : "OCSPResponse", listener : (p1: Buffer) => void) : TLSSocket;

        public prependListener(event : "secureConnect", listener : () => void) : TLSSocket;

        public prependOnceListener(event : string, listener : Function) : TLSSocket;

        public prependOnceListener(event : "OCSPResponse", listener : (p1: Buffer) => void) : TLSSocket;

        public prependOnceListener(event : "secureConnect", listener : () => void) : TLSSocket;

        public constructor(socket : net.Socket);

        /**
         * Returns an object representing the peer's certificate.
         * The returned object has some properties corresponding to the field of the certificate.
         * If detailed argument is true the full chain with issuer property will be returned,
         * if false only the top certificate without issuer property.
         * If the peer does not provide a certificate, it returns null or an empty object.
         * @param {boolean} detailed - If true; the full chain with issuer property will be returned.
         * @returns {any} - An object representing the peer's certificate.
         * @return {tls.TLSSocket.GetPeerCertificate}
         */
        public getPeerCertificate() : any;

        constructor();
    }
}
declare namespace tls {
    export interface Server extends net.Server {
        close(callback : Function) : Server;

        address() : any;

        addContext(hostName : string, credentials : any);

        maxConnections : number;

        connections : number;

        addListener(event : string, listener : Function) : Server;

        addListener(event : "tlsClientError", listener : (p1: Error, p2: tls.TLSSocket) => void) : Server;

        addListener(event : "newSession", listener : (p1: any, p2: any, p3: (p1: Error, p2: Buffer) => void) => void) : Server;

        addListener(event : "OCSPRequest", listener : (p1: Buffer, p2: Buffer, p3: Function) => void) : Server;

        addListener(event : "resumeSession", listener : (p1: any, p2: (p1: Error, p2: any) => void) => void) : Server;

        addListener(event : "secureConnection", listener : (p1: tls.TLSSocket) => void) : Server;

        emit(event : string, ...args : any[]) : boolean;

        emit(event : "tlsClientError", err : Error, tlsSocket : tls.TLSSocket) : boolean;

        emit(event : "newSession", sessionId : any, sessionData : any, callback : (p1: Error, p2: Buffer) => void) : boolean;

        emit(event : "OCSPRequest", certificate : Buffer, issuer : Buffer, callback : Function) : boolean;

        emit(event : "resumeSession", sessionId : any, callback : (p1: Error, p2: any) => void) : boolean;

        emit(event : "secureConnection", tlsSocket : tls.TLSSocket) : boolean;

        on(event : string, listener : Function) : Server;

        on(event : "tlsClientError", listener : (p1: Error, p2: tls.TLSSocket) => void) : Server;

        on(event : "newSession", listener : (p1: any, p2: any, p3: (p1: Error, p2: Buffer) => void) => void) : Server;

        on(event : "OCSPRequest", listener : (p1: Buffer, p2: Buffer, p3: Function) => void) : Server;

        on(event : "resumeSession", listener : (p1: any, p2: (p1: Error, p2: any) => void) => void) : Server;

        on(event : "secureConnection", listener : (p1: tls.TLSSocket) => void) : Server;

        once(event : string, listener : Function) : Server;

        once(event : "tlsClientError", listener : (p1: Error, p2: tls.TLSSocket) => void) : Server;

        once(event : "newSession", listener : (p1: any, p2: any, p3: (p1: Error, p2: Buffer) => void) => void) : Server;

        once(event : "OCSPRequest", listener : (p1: Buffer, p2: Buffer, p3: Function) => void) : Server;

        once(event : "resumeSession", listener : (p1: any, p2: (p1: Error, p2: any) => void) => void) : Server;

        once(event : "secureConnection", listener : (p1: tls.TLSSocket) => void) : Server;

        prependListener(event : string, listener : Function) : Server;

        prependListener(event : "tlsClientError", listener : (p1: Error, p2: tls.TLSSocket) => void) : Server;

        prependListener(event : "newSession", listener : (p1: any, p2: any, p3: (p1: Error, p2: Buffer) => void) => void) : Server;

        prependListener(event : "OCSPRequest", listener : (p1: Buffer, p2: Buffer, p3: Function) => void) : Server;

        prependListener(event : "resumeSession", listener : (p1: any, p2: (p1: Error, p2: any) => void) => void) : Server;

        prependListener(event : "secureConnection", listener : (p1: tls.TLSSocket) => void) : Server;

        prependOnceListener(event : string, listener : Function) : Server;

        prependOnceListener(event : "tlsClientError", listener : (p1: Error, p2: tls.TLSSocket) => void) : Server;

        prependOnceListener(event : "newSession", listener : (p1: any, p2: any, p3: (p1: Error, p2: Buffer) => void) => void) : Server;

        prependOnceListener(event : "OCSPRequest", listener : (p1: Buffer, p2: Buffer, p3: Function) => void) : Server;

        prependOnceListener(event : "resumeSession", listener : (p1: any, p2: (p1: Error, p2: any) => void) => void) : Server;

        prependOnceListener(event : "secureConnection", listener : (p1: tls.TLSSocket) => void) : Server;

        close() : Server;
    }
}
declare namespace net {
    export interface ListenOptions {
        port? : number;

        host? : string;

        backlog? : number;

        path? : string;

        exclusive? : boolean;
    }
}
declare namespace net {}
declare namespace net {}
declare namespace net {
    export function createServer(connectionListener : (p1: net.Socket) => void) : net.Server;

    export function createServer(options : any, connectionListener : (p1: net.Socket) => void) : net.Server;

    export function connect(options : any, connectionListener : Function) : net.Socket;

    export function connect(port : number, host : string, connectionListener : Function) : net.Socket;

    export function connect(path : string, connectionListener : Function) : net.Socket;

    export function createConnection(options : any, connectionListener : Function) : net.Socket;

    export function createConnection(port : number, host : string, connectionListener : Function) : net.Socket;

    export function createConnection(path : string, connectionListener : Function) : net.Socket;

    export function isIP(input : string) : number;

    export function isIPv4(input : string) : boolean;

    export function isIPv6(input : string) : boolean;

    export function createServer() : net.Server;

    export function createServer(options : any) : net.Server;

    export function connect(options : any) : net.Socket;

    export function connect(port : number, host : string) : net.Socket;

    export function connect(port : number) : net.Socket;

    export function connect(path : string) : net.Socket;

    export function createConnection(options : any) : net.Socket;

    export function createConnection(port : number, host : string) : net.Socket;

    export function createConnection(port : number) : net.Socket;

    export function createConnection(path : string) : net.Socket;

}
declare namespace net {}
declare namespace net {
    export class Socket extends stream.Duplex {
        public write(buffer : Buffer) : boolean;

        public write(buffer : Buffer, cb : Function) : boolean;

        public write(str : string, cb : Function) : boolean;

        public write(str : string, encoding : string, cb : Function) : boolean;

        public write(str : string, encoding : string, fd : string) : boolean;

        public connect(port : number, host : string, connectionListener : Function);

        public connect(path : string, connectionListener : Function);

        public bufferSize : number;

        public setEncoding(encoding : string);

        public destroy();

        public setTimeout(timeout : number, callback : Function);

        public setNoDelay(noDelay : boolean);

        public setKeepAlive(enable : boolean, initialDelay : number);

        public address() : any;

        public unref();

        public ref();

        public remoteAddress : string;

        public remoteFamily : string;

        public remotePort : number;

        public localAddress : string;

        public localPort : number;

        public bytesRead : number;

        public bytesWritten : number;

        public destroyed : boolean;

        public end();

        public end(buffer : Buffer, cb : Function);

        public end(str : string, cb : Function);

        public end(str : string, encoding : string, cb : Function);

        public end(data : any, encoding : string);

        /**
         * events.EventEmitter
         * 1. close
         * 2. connect
         * 3. data
         * 4. drain
         * 5. end
         * 6. error
         * 7. lookup
         * 8. timeout
         * @param {string} event
         * @param {Function} listener
         * @return {net.Socket}
         */
        public addListener(event : string, listener : Function) : Socket;

        public addListener(event : "close", listener : (p1: boolean) => void) : Socket;

        public addListener(event : "connect", listener : () => void) : Socket;

        public addListener(event : "data", listener : (p1: Buffer) => void) : Socket;

        public addListener(event : "drain", listener : () => void) : Socket;

        public addListener(event : string, listener : () => void) : Socket;

        public addListener(event : string, listener : (p1: Error) => void) : Socket;

        public addListener(event : "lookup", listener : (p1: Error, p2: string, p3: string, p4: string) => void) : Socket;

        public addListener(event : "timeout", listener : () => void) : Socket;

        public emit(event : string, ...args : any[]) : boolean;

        public emit(event : "close", had_error : boolean) : boolean;

        public emit(event : "connect") : boolean;

        public emit(event : "data", data : Buffer) : boolean;

        public emit(event : "drain") : boolean;

        public emit(event : string) : boolean;

        public emit(event : string, err : Error) : boolean;

        public emit(event : "lookup", err : Error, address : string, family : string, host : string) : boolean;

        public emit(event : "timeout") : boolean;

        public on(event : string, listener : Function) : Socket;

        public on(event : "close", listener : (p1: boolean) => void) : Socket;

        public on(event : "connect", listener : () => void) : Socket;

        public on(event : "data", listener : (p1: Buffer) => void) : Socket;

        public on(event : "drain", listener : () => void) : Socket;

        public on(event : string, listener : () => void) : Socket;

        public on(event : string, listener : (p1: Error) => void) : Socket;

        public on(event : "lookup", listener : (p1: Error, p2: string, p3: string, p4: string) => void) : Socket;

        public on(event : "timeout", listener : () => void) : Socket;

        public once(event : string, listener : Function) : Socket;

        public once(event : "close", listener : (p1: boolean) => void) : Socket;

        public once(event : "connect", listener : () => void) : Socket;

        public once(event : "data", listener : (p1: Buffer) => void) : Socket;

        public once(event : "drain", listener : () => void) : Socket;

        public once(event : string, listener : () => void) : Socket;

        public once(event : string, listener : (p1: Error) => void) : Socket;

        public once(event : "lookup", listener : (p1: Error, p2: string, p3: string, p4: string) => void) : Socket;

        public once(event : "timeout", listener : () => void) : Socket;

        public prependListener(event : string, listener : Function) : Socket;

        public prependListener(event : "close", listener : (p1: boolean) => void) : Socket;

        public prependListener(event : "connect", listener : () => void) : Socket;

        public prependListener(event : "data", listener : (p1: Buffer) => void) : Socket;

        public prependListener(event : "drain", listener : () => void) : Socket;

        public prependListener(event : string, listener : () => void) : Socket;

        public prependListener(event : string, listener : (p1: Error) => void) : Socket;

        public prependListener(event : "lookup", listener : (p1: Error, p2: string, p3: string, p4: string) => void) : Socket;

        public prependListener(event : "timeout", listener : () => void) : Socket;

        public prependOnceListener(event : string, listener : Function) : Socket;

        public prependOnceListener(event : "close", listener : (p1: boolean) => void) : Socket;

        public prependOnceListener(event : "connect", listener : () => void) : Socket;

        public prependOnceListener(event : "data", listener : (p1: Buffer) => void) : Socket;

        public prependOnceListener(event : "drain", listener : () => void) : Socket;

        public prependOnceListener(event : string, listener : () => void) : Socket;

        public prependOnceListener(event : string, listener : (p1: Error) => void) : Socket;

        public prependOnceListener(event : "lookup", listener : (p1: Error, p2: string, p3: string, p4: string) => void) : Socket;

        public prependOnceListener(event : "timeout", listener : () => void) : Socket;

        public constructor(options : any);

        public write(str : string) : boolean;

        public write(str : string, encoding : string) : boolean;

        public connect(port : number, host : string);

        public connect(port : number);

        public connect(path : string);

        public setEncoding();

        public setTimeout(timeout : number);

        public setNoDelay();

        public setKeepAlive(enable : boolean);

        public setKeepAlive();

        public end(buffer : Buffer);

        public end(str : string);

        public end(str : string, encoding : string);

        public end(data : any);

        public constructor();

        public addListener(event : "lookup", listener : (p1: Error, p2: string, p3: number, p4: string) => void) : Socket;

        public emit(event : "lookup", err : Error, address : string, family : number, host : string) : boolean;

        public on(event : "lookup", listener : (p1: Error, p2: string, p3: number, p4: string) => void) : Socket;

        public once(event : "lookup", listener : (p1: Error, p2: string, p3: number, p4: string) => void) : Socket;

        public prependListener(event : "lookup", listener : (p1: Error, p2: string, p3: number, p4: string) => void) : Socket;

        public prependOnceListener(event : "lookup", listener : (p1: Error, p2: string, p3: number, p4: string) => void) : Socket;
    }
}
declare namespace net {
    export interface Server extends events.EventEmitter {
        listen(port : number, hostname : string, backlog : number, listeningListener : Function) : Server;

        listen(port : number, hostname : string, listeningListener : Function) : Server;

        listen(port : number, backlog : number, listeningListener : Function) : Server;

        listen(port : number, listeningListener : Function) : Server;

        listen(path : string, backlog : number, listeningListener : Function) : Server;

        listen(path : string, listeningListener : Function) : Server;

        listen(options : net.ListenOptions, listeningListener : Function) : Server;

        listen(handle : any, backlog : number, listeningListener : Function) : Server;

        listen(handle : any, listeningListener : Function) : Server;

        close(callback : Function) : Server;

        address() : any;

        getConnections(cb : (p1: Error, p2: number) => void);

        ref() : Server;

        unref() : Server;

        maxConnections : number;

        connections : number;

        /**
         * events.EventEmitter
         * 1. close
         * 2. connection
         * 3. error
         * 4. listening
         * @param {string} event
         * @param {Function} listener
         * @return {*}
         */
        addListener(event : string, listener : Function) : Server;

        addListener(event : "close", listener : () => void) : Server;

        addListener(event : "connection", listener : (p1: net.Socket) => void) : Server;

        addListener(event : "error", listener : (p1: Error) => void) : Server;

        addListener(event : "listening", listener : () => void) : Server;

        emit(event : string, ...args : any[]) : boolean;

        emit(event : "close") : boolean;

        emit(event : "connection", socket : net.Socket) : boolean;

        emit(event : "error", err : Error) : boolean;

        emit(event : "listening") : boolean;

        on(event : string, listener : Function) : Server;

        on(event : "close", listener : () => void) : Server;

        on(event : "connection", listener : (p1: net.Socket) => void) : Server;

        on(event : "error", listener : (p1: Error) => void) : Server;

        on(event : "listening", listener : () => void) : Server;

        once(event : string, listener : Function) : Server;

        once(event : "close", listener : () => void) : Server;

        once(event : "connection", listener : (p1: net.Socket) => void) : Server;

        once(event : "error", listener : (p1: Error) => void) : Server;

        once(event : "listening", listener : () => void) : Server;

        prependListener(event : string, listener : Function) : Server;

        prependListener(event : "close", listener : () => void) : Server;

        prependListener(event : "connection", listener : (p1: net.Socket) => void) : Server;

        prependListener(event : "error", listener : (p1: Error) => void) : Server;

        prependListener(event : "listening", listener : () => void) : Server;

        prependOnceListener(event : string, listener : Function) : Server;

        prependOnceListener(event : "close", listener : () => void) : Server;

        prependOnceListener(event : "connection", listener : (p1: net.Socket) => void) : Server;

        prependOnceListener(event : "error", listener : (p1: Error) => void) : Server;

        prependOnceListener(event : "listening", listener : () => void) : Server;

        listen(port : number, hostname : string, backlog : number) : Server;

        listen(port : number, hostname : string) : Server;

        listen(port : number) : Server;

        listen(port : number, backlog : number) : Server;

        listen(path : string, backlog : number) : Server;

        listen(path : string) : Server;

        listen(options : net.ListenOptions) : Server;

        listen(handle : any, backlog : number) : Server;

        listen(handle : any) : Server;

        close() : Server;
    }
}
declare namespace v8 {}
declare namespace v8 {
    export function getHeapStatistics() : v8.HeapInfo;

    export function getHeapSpaceStatistics() : v8.HeapSpaceInfo[];

    export function setFlagsFromString(flags : string);

}
declare namespace v8 {
    export interface HeapInfo {
        total_heap_size : number;

        total_heap_size_executable : number;

        total_physical_size : number;

        total_available_size : number;

        used_heap_size : number;

        heap_size_limit : number;

        malloced_memory : number;

        peak_malloced_memory : number;

        /**
         * 0 or 1
         */
        does_zap_garbage : number;
    }
}
declare namespace v8 {
    export interface HeapSpaceInfo {
        space_name : string;

        space_size : number;

        space_used_size : number;

        space_available_size : number;

        physical_space_size : number;
    }
}
declare namespace url {}
declare namespace url {
    export function parse(urlStr : string, parseQueryString : boolean, slashesDenoteHost : boolean) : url.Url;

    export function format(url : url.Url) : string;

    export function resolve(from : string, to : string) : string;

    export function parse(urlStr : string, parseQueryString : boolean) : url.Url;

    export function parse(urlStr : string) : url.Url;

}
declare namespace url {
    export interface Url {
        href? : string;

        protocol? : string;

        auth? : string;

        hostname? : string;

        port? : string;

        host? : string;

        pathname? : string;

        search? : string;

        query? : ((string)|(any));

        slashes? : boolean;

        hash? : string;

        path? : string;
    }
}
declare namespace dns {}
declare namespace dns {
    export function lookup(domain : string, family : number, callback : (p1: Error, p2: string, p3: number) => void) : string;

    export function lookup(domain : string, callback : (p1: Error, p2: string, p3: number) => void) : string;

    export function resolve(domain : string, rrtype : string, callback : (p1: Error, p2: string[]) => void) : string[];

    export function resolve(domain : string, callback : (p1: Error, p2: string[]) => void) : string[];

    export function resolve4(domain : string, callback : (p1: Error, p2: string[]) => void) : string[];

    export function resolve6(domain : string, callback : (p1: Error, p2: string[]) => void) : string[];

    export function resolveMx(domain : string, callback : (p1: Error, p2: dns.MxRecord[]) => void) : string[];

    export function resolveTxt(domain : string, callback : (p1: Error, p2: string[]) => void) : string[];

    export function resolveSrv(domain : string, callback : (p1: Error, p2: string[]) => void) : string[];

    export function resolveNs(domain : string, callback : (p1: Error, p2: string[]) => void) : string[];

    export function resolveCname(domain : string, callback : (p1: Error, p2: string[]) => void) : string[];

    export function reverse(ip : string, callback : (p1: Error, p2: string[]) => void) : string[];

    export function setServers(servers : string[]);

    export var NODATA : string;

    export var FORMERR : string;

    export var SERVFAIL : string;

    export var NOTFOUND : string;

    export var NOTIMP : string;

    export var REFUSED : string;

    export var BADQUERY : string;

    export var BADNAME : string;

    export var BADFAMILY : string;

    export var BADRESP : string;

    export var CONNREFUSED : string;

    export var TIMEOUT : string;

    export var EOF : string;

    export var FILE : string;

    export var NOMEM : string;

    export var DESTRUCTION : string;

    export var BADSTR : string;

    export var BADFLAGS : string;

    export var NONAME : string;

    export var BADHINTS : string;

    export var NOTINITIALIZED : string;

    export var LOADIPHLPAPI : string;

    export var ADDRGETNETWORKPARAMS : string;

    export var CANCELLED : string;

}
declare namespace dns {
    export interface MxRecord {
        exchange : string;

        priority : number;
    }
}
declare namespace buffer {}
declare namespace buffer {
    export var INSPECT_MAX_BYTES : number;

    export var BuffType : Buffer;

    export var SlowBuffType : any;

}
declare namespace readline {}
declare namespace readline {
    export function createInterface(input : NodeJS.ReadableStream, output : NodeJS.WritableStream, completer : readline.Completer, terminal : boolean) : readline.ReadLine;

    export function createInterface(options : readline.ReadLineOptions) : readline.ReadLine;

    export function cursorTo(stream : NodeJS.WritableStream, x : number, y : number);

    export function moveCursor(stream : NodeJS.WritableStream, dx : number, dy : number);

    export function clearLine(stream : NodeJS.WritableStream, dir : number);

    export function clearScreenDown(stream : NodeJS.WritableStream);

    export function createInterface(input : NodeJS.ReadableStream, output : NodeJS.WritableStream, completer : readline.Completer) : readline.ReadLine;

    export function createInterface(input : NodeJS.ReadableStream, output : NodeJS.WritableStream) : readline.ReadLine;

    export function createInterface(input : NodeJS.ReadableStream) : readline.ReadLine;

    export function moveCursor(stream : NodeJS.WritableStream, dx : string, dy : string);

    export function moveCursor(stream : NodeJS.WritableStream, dx : number, dy : string);

    export function moveCursor(stream : NodeJS.WritableStream, dx : string, dy : number);

}
declare namespace readline {
    export interface ReadLineOptions {
        input : NodeJS.ReadableStream;

        output? : NodeJS.WritableStream;

        completer? : any;

        terminal? : boolean;

        historySize? : number;
    }
}
declare namespace readline {
    export interface Completer {
        (line : string) : [string[],string];

        (line : string, callback : (p1: any, p2: [string[],string]) => void) : any;
    }
}
declare namespace readline {
    export interface ReadLine extends events.EventEmitter {
        setPrompt(prompt : string);

        prompt(preserveCursor : boolean);

        question(query : string, callback : (p1: string) => void);

        pause() : ReadLine;

        resume() : ReadLine;

        close();

        write(data : string, key : readline.Key);

        addListener(event : string, listener : Function) : ReadLine;

        addListener(event : "close", listener : () => void) : ReadLine;

        addListener(event : "line", listener : (p1: any) => void) : ReadLine;

        addListener(event : "pause", listener : () => void) : ReadLine;

        addListener(event : "resume", listener : () => void) : ReadLine;

        addListener(event : "SIGCONT", listener : () => void) : ReadLine;

        addListener(event : "SIGINT", listener : () => void) : ReadLine;

        addListener(event : "SIGTSTP", listener : () => void) : ReadLine;

        emit(event : string, ...args : any[]) : boolean;

        emit(event : "close") : boolean;

        emit(event : "line", input : any) : boolean;

        emit(event : "pause") : boolean;

        emit(event : "resume") : boolean;

        emit(event : "SIGCONT") : boolean;

        emit(event : "SIGINT") : boolean;

        emit(event : "SIGTSTP") : boolean;

        on(event : string, listener : Function) : ReadLine;

        on(event : "close", listener : () => void) : ReadLine;

        on(event : "line", listener : (p1: any) => void) : ReadLine;

        on(event : "pause", listener : () => void) : ReadLine;

        on(event : "resume", listener : () => void) : ReadLine;

        on(event : "SIGCONT", listener : () => void) : ReadLine;

        on(event : "SIGINT", listener : () => void) : ReadLine;

        on(event : "SIGTSTP", listener : () => void) : ReadLine;

        once(event : string, listener : Function) : ReadLine;

        once(event : "close", listener : () => void) : ReadLine;

        once(event : "line", listener : (p1: any) => void) : ReadLine;

        once(event : "pause", listener : () => void) : ReadLine;

        once(event : "resume", listener : () => void) : ReadLine;

        once(event : "SIGCONT", listener : () => void) : ReadLine;

        once(event : "SIGINT", listener : () => void) : ReadLine;

        once(event : "SIGTSTP", listener : () => void) : ReadLine;

        prependListener(event : string, listener : Function) : ReadLine;

        prependListener(event : "close", listener : () => void) : ReadLine;

        prependListener(event : "line", listener : (p1: any) => void) : ReadLine;

        prependListener(event : "pause", listener : () => void) : ReadLine;

        prependListener(event : "resume", listener : () => void) : ReadLine;

        prependListener(event : "SIGCONT", listener : () => void) : ReadLine;

        prependListener(event : "SIGINT", listener : () => void) : ReadLine;

        prependListener(event : "SIGTSTP", listener : () => void) : ReadLine;

        prependOnceListener(event : string, listener : Function) : ReadLine;

        prependOnceListener(event : "close", listener : () => void) : ReadLine;

        prependOnceListener(event : "line", listener : (p1: any) => void) : ReadLine;

        prependOnceListener(event : "pause", listener : () => void) : ReadLine;

        prependOnceListener(event : "resume", listener : () => void) : ReadLine;

        prependOnceListener(event : "SIGCONT", listener : () => void) : ReadLine;

        prependOnceListener(event : "SIGINT", listener : () => void) : ReadLine;

        prependOnceListener(event : "SIGTSTP", listener : () => void) : ReadLine;

        prompt();

        write(data : string);

        write(data : Buffer, key : readline.Key);

        write(data : Buffer);
    }
}
declare namespace readline {
    export interface Key {
        sequence? : string;

        name? : string;

        ctrl? : boolean;

        meta? : boolean;

        shift? : boolean;
    }
}
declare namespace events {
    export class EventEmitter extends events.internal {
        public static listenerCount(emitter : EventEmitter, event : string) : number;

        public static defaultMaxListeners : number;

        public addListener(event : string, listener : Function) : EventEmitter;

        public on(event : string, listener : Function) : EventEmitter;

        public once(event : string, listener : Function) : EventEmitter;

        public prependListener(event : string, listener : Function) : EventEmitter;

        public prependOnceListener(event : string, listener : Function) : EventEmitter;

        public removeListener(event : string, listener : Function) : EventEmitter;

        public removeAllListeners(event : string) : EventEmitter;

        public setMaxListeners(n : number) : EventEmitter;

        public getMaxListeners() : number;

        public listeners(event : string) : Function[];

        public emit(event : string, ...args : any[]) : boolean;

        public eventNames() : ((string)|(string))[];

        public listenerCount(type : string) : number;

        public removeAllListeners() : EventEmitter;
    }
}
declare namespace events {}
declare namespace events {
    export class internal extends NodeJS.EventEmitter {    }
}
interface Error {
    stack? : string;
}

interface MapConstructor {}

declare namespace punycode {
    export interface ucs2 {    }

    export namespace ucs2 {

        export function decode(string : string) : number[];

        export function encode(codePoints : number[]) : string;
    }

}
declare namespace punycode {}
declare namespace punycode {
    export function decode(string : string) : string;

    export function encode(string : string) : string;

    export function toUnicode(domain : string) : string;

    export function toASCII(domain : string) : string;

    export var version : any;

}
declare namespace _crypto {
    export interface CredentialDetails {
        pfx : string;

        key : string;

        passphrase : string;

        cert : string;

        ca : ((string)|(string[]));

        crl : ((string)|(string[]));

        ciphers : string;
    }
}
declare namespace _crypto {
    export interface Verify extends NodeJS.WritableStream {
        update(data : string) : Verify;

        update(data : string, input_encoding : "utf8") : Verify;

        verify(object : string, signature : Buffer) : boolean;

        verify(object : string, signature : string, signature_format : "latin1") : boolean;

        update(data : Buffer) : Verify;

        update(data : string, input_encoding : "latin1") : Verify;

        update(data : string, input_encoding : "ascii") : Verify;

        update(data : Buffer, input_encoding : "latin1") : Verify;

        update(data : Buffer, input_encoding : "utf8") : Verify;

        update(data : Buffer, input_encoding : "ascii") : Verify;

        verify(object : string, signature : string, signature_format : "hex") : boolean;

        verify(object : string, signature : string, signature_format : "base64") : boolean;
    }
}
declare namespace _crypto {}
declare namespace _crypto {
    export var fips : boolean;

    export function createCredentials(details : _crypto.CredentialDetails) : _crypto.Credentials;

    export function createHash(algorithm : string) : _crypto.Hash;

    export function createHmac(algorithm : string, key : string) : _crypto.Hmac;

    export function createCipher(algorithm : string, password : any) : _crypto.Cipher;

    export function createCipheriv(algorithm : string, key : any, iv : any) : _crypto.Cipher;

    export function createDecipher(algorithm : string, password : any) : _crypto.Decipher;

    export function createDecipheriv(algorithm : string, key : any, iv : any) : _crypto.Decipher;

    export function createSign(algorithm : string) : _crypto.Signer;

    export function createVerify(algorith : string) : _crypto.Verify;

    export function createDiffieHellman(prime_length : number, generator : number) : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : Buffer) : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "latin1") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "latin1", generator : number) : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "latin1", generator : string, generator_encoding : "latin1") : _crypto.DiffieHellman;

    export function getDiffieHellman(group_name : string) : _crypto.DiffieHellman;

    export function pbkdf2(password : string, salt : string, iterations : number, keylen : number, digest : string, callback : (p1: Error, p2: Buffer) => any);

    export function pbkdf2Sync(password : string, salt : string, iterations : number, keylen : number, digest : string) : Buffer;

    export function randomBytes(size : number) : Buffer;

    export function randomBytes(size : number, callback : (p1: Error, p2: Buffer) => void);

    export function pseudoRandomBytes(size : number) : Buffer;

    export function pseudoRandomBytes(size : number, callback : (p1: Error, p2: Buffer) => void);

    export function publicEncrypt(public_key : string, buffer : Buffer) : Buffer;

    export function privateDecrypt(private_key : string, buffer : Buffer) : Buffer;

    export function privateEncrypt(private_key : string, buffer : Buffer) : Buffer;

    export function publicDecrypt(public_key : string, buffer : Buffer) : Buffer;

    export function getCiphers() : string[];

    export function getCurves() : string[];

    export function getHashes() : string[];

    export function createECDH(curve_name : string) : _crypto.ECDH;

    export function timingSafeEqual(a : Buffer, b : Buffer) : boolean;

    export var DEFAULT_ENCODING : string;

    export function createDiffieHellman(prime_length : number) : _crypto.DiffieHellman;

    export function createHmac(algorithm : string, key : Buffer) : _crypto.Hmac;

    export function createDiffieHellman(prime : string, prime_encoding : "hex") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "base64") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "latin1", generator : Buffer) : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "hex", generator : Buffer) : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "base64", generator : Buffer) : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "hex", generator : number) : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "base64", generator : number) : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "base64", generator : string, generator_encoding : "latin1") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "base64", generator : string, generator_encoding : "base64") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "hex", generator : string, generator_encoding : "latin1") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "hex", generator : string, generator_encoding : "base64") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "base64", generator : string, generator_encoding : "hex") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "latin1", generator : string, generator_encoding : "base64") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "hex", generator : string, generator_encoding : "hex") : _crypto.DiffieHellman;

    export function createDiffieHellman(prime : string, prime_encoding : "latin1", generator : string, generator_encoding : "hex") : _crypto.DiffieHellman;

    export function pbkdf2(password : Buffer, salt : string, iterations : number, keylen : number, digest : string, callback : (p1: Error, p2: Buffer) => any);

    export function pbkdf2(password : string, salt : Buffer, iterations : number, keylen : number, digest : string, callback : (p1: Error, p2: Buffer) => any);

    export function pbkdf2(password : Buffer, salt : Buffer, iterations : number, keylen : number, digest : string, callback : (p1: Error, p2: Buffer) => any);

    export function pbkdf2Sync(password : Buffer, salt : string, iterations : number, keylen : number, digest : string) : Buffer;

    export function pbkdf2Sync(password : Buffer, salt : Buffer, iterations : number, keylen : number, digest : string) : Buffer;

    export function pbkdf2Sync(password : string, salt : Buffer, iterations : number, keylen : number, digest : string) : Buffer;

    export function publicEncrypt(public_key : _crypto.RsaPublicKey, buffer : Buffer) : Buffer;

    export function privateDecrypt(private_key : _crypto.RsaPrivateKey, buffer : Buffer) : Buffer;

    export function privateEncrypt(private_key : _crypto.RsaPrivateKey, buffer : Buffer) : Buffer;

    export function publicDecrypt(public_key : _crypto.RsaPublicKey, buffer : Buffer) : Buffer;

}
declare namespace _crypto {
    export interface Hmac extends NodeJS.ReadWriteStream {
        update(data : string) : Hmac;

        update(data : string, input_encoding : "utf8") : Hmac;

        digest() : Buffer;

        digest(encoding : "latin1") : string;

        update(data : Buffer) : Hmac;

        update(data : Buffer, input_encoding : "latin1") : Hmac;

        update(data : string, input_encoding : "ascii") : Hmac;

        update(data : string, input_encoding : "latin1") : Hmac;

        update(data : Buffer, input_encoding : "ascii") : Hmac;

        update(data : Buffer, input_encoding : "utf8") : Hmac;

        digest(encoding : "hex") : string;

        digest(encoding : "base64") : string;
    }
}
declare namespace _crypto {
    export interface Decipher extends NodeJS.ReadWriteStream {
        update(data : Buffer) : Buffer;

        update(data : string, input_encoding : "binary") : Buffer;

        update(data : Buffer, input_encoding : any, output_encoding : "utf8") : string;

        update(data : string, input_encoding : "binary", output_encoding : "utf8") : string;

        final() : Buffer;

        final(output_encoding : string) : string;

        setAutoPadding(auto_padding : boolean);

        setAuthTag(tag : Buffer);

        setAAD(buffer : Buffer);

        setAutoPadding();

        update(data : string, input_encoding : "base64") : Buffer;

        update(data : string, input_encoding : "hex") : Buffer;

        update(data : Buffer, input_encoding : any, output_encoding : "ascii") : string;

        update(data : Buffer, input_encoding : any, output_encoding : "binary") : string;

        update(data : string, input_encoding : "hex", output_encoding : "ascii") : string;

        update(data : string, input_encoding : "binary", output_encoding : "binary") : string;

        update(data : string, input_encoding : "base64", output_encoding : "utf8") : string;

        update(data : string, input_encoding : "base64", output_encoding : "ascii") : string;

        update(data : string, input_encoding : "base64", output_encoding : "binary") : string;

        update(data : string, input_encoding : "hex", output_encoding : "utf8") : string;

        update(data : string, input_encoding : "binary", output_encoding : "ascii") : string;

        update(data : string, input_encoding : "hex", output_encoding : "binary") : string;
    }
}
declare namespace _crypto {
    export interface Signer extends NodeJS.WritableStream {
        update(data : string) : Signer;

        update(data : string, input_encoding : "utf8") : Signer;

        sign(private_key : string) : Buffer;

        sign(private_key : string, output_format : "latin1") : string;

        update(data : Buffer) : Signer;

        update(data : Buffer, input_encoding : "ascii") : Signer;

        update(data : Buffer, input_encoding : "latin1") : Signer;

        update(data : string, input_encoding : "ascii") : Signer;

        update(data : string, input_encoding : "latin1") : Signer;

        update(data : Buffer, input_encoding : "utf8") : Signer;

        sign(private_key : any) : Buffer;

        sign(private_key : any, output_format : "latin1") : string;

        sign(private_key : string, output_format : "hex") : string;

        sign(private_key : any, output_format : "base64") : string;

        sign(private_key : any, output_format : "hex") : string;

        sign(private_key : string, output_format : "base64") : string;
    }
}
declare namespace _crypto {
    export class Certificate {
        public exportChallenge(spkac : string) : Buffer;

        public exportPublicKey(spkac : string) : Buffer;

        public verifySpkac(spkac : Buffer) : boolean;

        public constructor();

        public static applyStatic() : Certificate;

        public exportChallenge(spkac : Buffer) : Buffer;

        public exportPublicKey(spkac : Buffer) : Buffer;
    }
}
declare namespace _crypto {
    export interface ECDH {
        generateKeys() : Buffer;

        generateKeys(encoding : "latin1") : string;

        generateKeys(encoding : "latin1", format : "compressed") : string;

        computeSecret(other_public_key : Buffer) : Buffer;

        computeSecret(other_public_key : string, input_encoding : "latin1") : Buffer;

        computeSecret(other_public_key : string, input_encoding : "latin1", output_encoding : "latin1") : string;

        getPrivateKey() : Buffer;

        getPrivateKey(encoding : "latin1") : string;

        getPublicKey() : Buffer;

        getPublicKey(encoding : "latin1") : string;

        getPublicKey(encoding : "latin1", format : "compressed") : string;

        setPrivateKey(private_key : Buffer);

        setPrivateKey(private_key : string, encoding : "latin1");

        generateKeys(encoding : "base64") : string;

        generateKeys(encoding : "hex") : string;

        generateKeys(encoding : "hex", format : "hybrid") : string;

        generateKeys(encoding : "hex", format : "uncompressed") : string;

        generateKeys(encoding : "base64", format : "uncompressed") : string;

        generateKeys(encoding : "latin1", format : "uncompressed") : string;

        generateKeys(encoding : "latin1", format : "hybrid") : string;

        generateKeys(encoding : "hex", format : "compressed") : string;

        generateKeys(encoding : "base64", format : "compressed") : string;

        generateKeys(encoding : "base64", format : "hybrid") : string;

        computeSecret(other_public_key : string, input_encoding : "base64") : Buffer;

        computeSecret(other_public_key : string, input_encoding : "hex") : Buffer;

        computeSecret(other_public_key : string, input_encoding : "base64", output_encoding : "hex") : string;

        computeSecret(other_public_key : string, input_encoding : "latin1", output_encoding : "hex") : string;

        computeSecret(other_public_key : string, input_encoding : "base64", output_encoding : "base64") : string;

        computeSecret(other_public_key : string, input_encoding : "hex", output_encoding : "hex") : string;

        computeSecret(other_public_key : string, input_encoding : "latin1", output_encoding : "base64") : string;

        computeSecret(other_public_key : string, input_encoding : "hex", output_encoding : "base64") : string;

        computeSecret(other_public_key : string, input_encoding : "base64", output_encoding : "latin1") : string;

        computeSecret(other_public_key : string, input_encoding : "hex", output_encoding : "latin1") : string;

        getPrivateKey(encoding : "base64") : string;

        getPrivateKey(encoding : "hex") : string;

        getPublicKey(encoding : "base64") : string;

        getPublicKey(encoding : "hex") : string;

        getPublicKey(encoding : "latin1", format : "uncompressed") : string;

        getPublicKey(encoding : "latin1", format : "hybrid") : string;

        getPublicKey(encoding : "base64", format : "compressed") : string;

        getPublicKey(encoding : "hex", format : "compressed") : string;

        getPublicKey(encoding : "hex", format : "hybrid") : string;

        getPublicKey(encoding : "base64", format : "hybrid") : string;

        getPublicKey(encoding : "base64", format : "uncompressed") : string;

        getPublicKey(encoding : "hex", format : "uncompressed") : string;

        setPrivateKey(private_key : string, encoding : "hex");

        setPrivateKey(private_key : string, encoding : "base64");
    }
}
declare namespace _crypto {
    export interface RsaPublicKey {
        key : string;

        padding? : number;
    }
}
declare namespace _crypto {
    export interface DiffieHellman {
        generateKeys() : Buffer;

        generateKeys(encoding : "latin1") : string;

        computeSecret(other_public_key : Buffer) : Buffer;

        computeSecret(other_public_key : string, input_encoding : "latin1") : Buffer;

        computeSecret(other_public_key : string, input_encoding : "latin1", output_encoding : "latin1") : string;

        getPrime() : Buffer;

        getPrime(encoding : "latin1") : string;

        getGenerator() : Buffer;

        getGenerator(encoding : "latin1") : string;

        getPublicKey() : Buffer;

        getPublicKey(encoding : "latin1") : string;

        getPrivateKey() : Buffer;

        getPrivateKey(encoding : "latin1") : string;

        setPublicKey(public_key : Buffer);

        setPublicKey(public_key : string, encoding : string);

        setPrivateKey(private_key : Buffer);

        setPrivateKey(private_key : string, encoding : string);

        verifyError : number;

        generateKeys(encoding : "base64") : string;

        generateKeys(encoding : "hex") : string;

        computeSecret(other_public_key : string, input_encoding : "hex") : Buffer;

        computeSecret(other_public_key : string, input_encoding : "base64") : Buffer;

        computeSecret(other_public_key : string, input_encoding : "base64", output_encoding : "base64") : string;

        computeSecret(other_public_key : string, input_encoding : "latin1", output_encoding : "base64") : string;

        computeSecret(other_public_key : string, input_encoding : "base64", output_encoding : "latin1") : string;

        computeSecret(other_public_key : string, input_encoding : "hex", output_encoding : "base64") : string;

        computeSecret(other_public_key : string, input_encoding : "latin1", output_encoding : "hex") : string;

        computeSecret(other_public_key : string, input_encoding : "base64", output_encoding : "hex") : string;

        computeSecret(other_public_key : string, input_encoding : "hex", output_encoding : "latin1") : string;

        computeSecret(other_public_key : string, input_encoding : "hex", output_encoding : "hex") : string;

        getPrime(encoding : "hex") : string;

        getPrime(encoding : "base64") : string;

        getGenerator(encoding : "base64") : string;

        getGenerator(encoding : "hex") : string;

        getPublicKey(encoding : "base64") : string;

        getPublicKey(encoding : "hex") : string;

        getPrivateKey(encoding : "hex") : string;

        getPrivateKey(encoding : "base64") : string;
    }
}
declare namespace _crypto {
    export interface Credentials {
        context? : any;
    }
}
declare namespace _crypto {
    export interface Hash extends NodeJS.ReadWriteStream {
        update(data : string) : Hash;

        update(data : string, input_encoding : "utf8") : Hash;

        digest() : Buffer;

        digest(encoding : "latin1") : string;

        update(data : Buffer) : Hash;

        update(data : Buffer, input_encoding : "latin1") : Hash;

        update(data : string, input_encoding : "ascii") : Hash;

        update(data : string, input_encoding : "latin1") : Hash;

        update(data : Buffer, input_encoding : "utf8") : Hash;

        update(data : Buffer, input_encoding : "ascii") : Hash;

        digest(encoding : "base64") : string;

        digest(encoding : "hex") : string;
    }
}
declare namespace _crypto {
    export interface Cipher extends NodeJS.ReadWriteStream {
        update(data : Buffer) : Buffer;

        update(data : string, input_encoding : "utf8") : Buffer;

        update(data : Buffer, input_encoding : any, output_encoding : "binary") : string;

        update(data : string, input_encoding : "utf8", output_encoding : "binary") : string;

        final() : Buffer;

        final(output_encoding : string) : string;

        setAutoPadding(auto_padding : boolean);

        getAuthTag() : Buffer;

        setAAD(buffer : Buffer);

        setAutoPadding();

        update(data : string, input_encoding : "binary") : Buffer;

        update(data : string, input_encoding : "ascii") : Buffer;

        update(data : Buffer, input_encoding : any, output_encoding : "base64") : string;

        update(data : Buffer, input_encoding : any, output_encoding : "hex") : string;

        update(data : string, input_encoding : "ascii", output_encoding : "hex") : string;

        update(data : string, input_encoding : "utf8", output_encoding : "hex") : string;

        update(data : string, input_encoding : "ascii", output_encoding : "base64") : string;

        update(data : string, input_encoding : "binary", output_encoding : "hex") : string;

        update(data : string, input_encoding : "binary", output_encoding : "base64") : string;

        update(data : string, input_encoding : "utf8", output_encoding : "base64") : string;

        update(data : string, input_encoding : "binary", output_encoding : "binary") : string;

        update(data : string, input_encoding : "ascii", output_encoding : "binary") : string;
    }
}
declare namespace _crypto {
    export interface RsaPrivateKey {
        key : string;

        passphrase? : string;

        padding? : number;
    }
}
declare namespace string_decoder {
    export interface NodeStringDecoder {
        write(buffer : Buffer) : string;

        end(buffer : Buffer) : string;

        end() : string;
    }
}
declare namespace string_decoder {}
declare namespace string_decoder {
    export var StringDecoder : any;

}
declare namespace string_decoder {}
interface SetConstructor {}

interface Console {
    Console : Console;

    assert(value : any, message : string, ...optionalParams : any[]);

    dir(obj : any, options : any);

    error(message : any, ...optionalParams : any[]);

    info(message : any, ...optionalParams : any[]);

    log(message : any, ...optionalParams : any[]);

    time(label : string);

    timeEnd(label : string);

    trace(message : any, ...optionalParams : any[]);

    warn(message : any, ...optionalParams : any[]);

    assert(value : any);

    dir(obj : any);

    error();

    info();

    log();

    trace();

    warn();
}

interface WeakSetConstructor {}

declare namespace tty {}
declare namespace tty {
    export function isatty(fd : number) : boolean;

}
declare namespace tty {
    export interface WriteStream extends net.Socket {
        columns : number;

        rows : number;

        isTTY : boolean;
    }
}
declare namespace tty {
    export interface ReadStream extends net.Socket {
        isRaw : boolean;

        setRawMode(mode : boolean);

        isTTY : boolean;
    }
}


declare module "cluster" {
    export = cluster;
}

declare module "v8" {
    export = v8;
}

declare module "dgram" {
    export = dgram;
}

declare module "_debugger" {
    export = _debugger;
}

declare module "fs" {
    export = fs;
}

declare module "path" {
    export = path;
}

declare module "Assert" {
    export = Assert;
}

declare module "stream" {
    export = stream;
}

declare module "assert";

declare module "string_decoder" {
    export = string_decoder;
}

declare module "repl" {
    export = repl;
}

declare module "constants" {
    export = constants;
}

declare module "https" {
    export = https;
}

declare module "buffer" {
    export = buffer;
}

declare module "net" {
    export = net;
}

declare module "events" {
    export = events;
}

declare module "readline" {
    export = readline;
}

declare module "console";

declare module "process";

declare module "timers" {
    export = timers;
}

declare module "os" {
    export = os;
}

declare module "dns" {
    export = dns;
}

declare module "querystring" {
    export = querystring;
}

declare module "url" {
    export = url;
}

declare module "crypto" {
    export = _crypto;
}

declare module "zlib" {
    export = zlib;
}

declare module "util" {
    export = util;
}

declare module "punycode" {
    export = punycode;
}

declare module "domain" {
    export = domain;
}

declare module "vm" {
    export = vm;
}

declare module "tty" {
    export = tty;
}

declare module "http" {
    export = http;
}

declare module "tls" {
    export = tls;
}

declare module "child_process" {
    export = child_process;
}
