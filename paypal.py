import requests
import paypalrestsdk
import logging
import os
import config

## add config.py file with API credentials for SANDBOX to provide authentication 
## this may change later

CLIENT_ID = config.client_id
SECRET = config.client_secret

## Create client

def configurePaypal(id, secret):  
    paypalrestsdk.configure({
        'mode': 'sandbox',
        'client_id': id,
        'client_secret': secret
    })
    payments = paypalrestsdk.Payment
    print(payments)


configurePaypal(CLIENT_ID, SECRET)
