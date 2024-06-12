#coded by N17RO (noob hackers)

#modules required
import argparse
import requests, json
import sys
from sys import argv
import os

#arguments and parser

parser = argparse.ArgumentParser()

parser.add_argument ("-v", help= "target/host IP address", type=str, dest='target', required=True )

args = parser.parse_args()

#colours used
red = '\033[31m'
yellow = '\033[93m'
lgreen = '\033[92m'
clear = '\033[0m'
bold = '\033[01m'
cyan = '\033[96m'

#banner of script
print ("</> IP DRONE </>\n")
print ("Tracking Location\n")


ip = args.target

api = "http://ip-api.com/json/"

try:
        data = requests.get(api+ip).json()
        sys.stdout.flush()
        a = lgreen+bold+"[$]"
        b = cyan+bold+"[$]"
        print ("[Victim]:", data['query'])
        print("<----------------------->")
        print ("[ISP]:", data['isp'])
        print("<----------------------->")
        print ("[Organisation]:", data['org'])
        print("<----------------------->")
        print ("[City]:", data['city'])
        print("<----------------------->")
        print ("[Region]:", data['region'])
        print("<----------------------->")
        print ("[Longitude]:", data['lon'])
        print("<----------------------->")
        print ("[Latitude]:", data['lat'])
        print("<----------------------->")
        print ("[Time zone]:", data['timezone'])
        print("<----------------------->")
        print ("[Zip code]:", data['zip'])
        print (" ")

except KeyboardInterrupt:
        print ('Terminating, Bye')
        sys.exit(0)
except requests.exceptions.ConnectionError as e:
        print ("[~]"+" check your internet connection!"+clear)
sys.exit(1)
