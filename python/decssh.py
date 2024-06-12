import argparse

parser = argparse.ArgumentParser()

parser.add_argument ("-v", help= "[+] Enter Encrypted SSH", type=str, dest='target', required=True )

args = parser.parse_args()
ssh = args.target

def dec_ssh(ld):
    userlv = [i for i in ld.split('.')][::2]
    userld = [i for i in ld.split('.')][1::2]
    newld = ""
    for x in range(len(userld)):
        v = int(userlv[x]) - len(userlv)
        w = int(userld[x]) - len(userlv)
        m = (v // (2**w)) % 256
        newld += chr(m)
    return newld

def handle():
        encrypted_data = ssh.split(' ', 1)[0]
        server = encrypted_data.split('@')[0].split(':')[0]
        port = encrypted_data.split('@')[0].split(':')[1]
        user = dec_ssh(encrypted_data.split('@')[1].split(':')[0])
        passw = dec_ssh(encrypted_data.split('@')[1].split(':')[1])

        response = f'╭──────────────────────\n├ • 𝙎𝙚𝙧𝙫𝙚𝙧 : {server}\n├ • 𝙋𝙤𝙧𝙩 : {port}\n├ • 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚: {user}\n├ • 𝙋𝙖𝙨𝙨𝙬𝙤𝙧𝙙: {passw}\n╰──────────────────────\n╭──────────────────────\n├ • {server}:{port}@{user}:{passw}\n╰──────────────────────'
        print(response)


handle()