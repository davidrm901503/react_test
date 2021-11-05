from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def tabla(request):
    return render(request, 'index.html', {})


def coin_list(request):
    from requests import Session
    import json

    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    parameters = {
        'start': '1',
        'limit': '100',
        'convert': 'USD'
    }
    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': '1746e747-6889-4cf3-98d7-f63e85740a11',
    }

    session = Session()
    session.headers.update(headers)

    response = session.get(url, params=parameters)
    data = json.loads(response.text)
    return JsonResponse(data['data'], safe=False)
