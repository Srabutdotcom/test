/**
 * Represents the EncryptedExtensions in a TLS handshake.
 * EncryptedExtensions is a sequence of bytes that are part of the TLS protocol's handshake process.
 */
export class EncryptedExtensions extends Uint8Array {
   /**
    * Constructs a new `EncryptedExtensions` instance.
    * 
    * @param values - The byte sequence representing the encrypted extensions.
    */
   constructor(values: Uint8Array);
 }
 