# Symmetrical Encryption
- Anyone who has the key can decrypt the message being transferred.
- If a third party gets the key, they can decrypt the info being sent.
to prevent this, a Key Exchange Algorithm is used.

## Key Exchange Algorithm
- A secure way to exchange keys to prevent 3rd party from finding out what it is.
- The key is never actually transmitted between the two. Instead the two computers share public pieces of data and manipulates it independently to calculate the secret key.
- The secret key is unique/specific to each SSH session, and is generated prior to client auth.

# Asymmetrical Encryption
- Uses two separate keys for Encryption and Decryption. Public and Private Key Pairs. The private key is never revealed.
- A private key cannot mathematically compute from the public key
- A message encrypted by a machines public key, can only be decrypted by the same machines private key this is called a 'one way relationship'

## Difiie Hellman Key Exchange
- Uses bits of info, to allow the computer to generate a Symmetrical key from data, without exchanging keys.
- Using public vars, and some hidden private vars info to create the same key together.
- Agreement on mathematical parameters at the start of the exchange.

# Hashing - One way
- Hashes are never meant to decrypt anything. They simply generate a unique value of a fixed length for each received input.
- Using a hash function, each transmitted message must contain a Hash Based Message Auth Codes(MAC).
- The receiver can check authenticity via their key, sequence #, or the message itself from SSH.

## Steps
- Once communicate is established the server needs to verify if the user has rights to access it.
1. Diffie-Hellman Key exchange
2. Arrive at Symmetric key
3. Hashing to protect info and exchange
4. Auth User.
