---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPXSZIF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKvlfd1jhsTv4DAtVKhnJgnLr%2FpzansRfIwQzC%2B%2F6TLAiEAvFWDEpEZ%2BlO9WqiySg5cTFHMFS9xOVqazdhsH5NogWkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDCfg%2F2r7MCgDD1W2CrcA1aBBQvrfA21J5E%2BEQWnkOYOljoxpFCi4WNwzqjDfOlI9DK85YNohhO47FDHJ9ENVnPBX3HjKo1h%2FZSW1Wa0ImYpUM9E%2FUnUPHqI789GgkOIM8Tnm9Ex%2BIvY8dWLgaB8NLvb4dV8UWiK5sIBpKwp%2Bs%2FZ%2Bq5jAKY0ghu2zsbs3J1DhmrvPlCwihdyY1mqxrSWSk26EWRvoBHJ1nTwZttaxWflCbsmPTzHFH9tjG7PszxBPM6i38YSNlu5XlHnYQ4wXjDSnTit6%2Fxj1yH%2BIAhue%2FwZ76qF6kA5gYnnqWMD10fDQWAgTttREdK%2BDExD5LScvRYUXozsr6MVSh35NN1%2FVXEL7c0CKM0Dk2woAjFPn%2BXfDQEPutXtwt4W7V253OnbQqKzr1KjT6n%2B6OgHVs76%2FKcpTfaHZQhsH%2FrUxv6OqarszcOJ448%2BvmiDsT6SBUsj02zHebGFqAh%2FLgjZ88OBdb8DZIeCht4sLeiSd83AkDbm32jjS9tDZ%2Fm%2FT42%2BvGjpUgY3dkeebLFD3fC%2FsbnACdvDrE%2F4%2B99a9p%2F9AzDt3w6obCngnxbObAEKjjZb2Bg80hfeYnNf17qoRpJ5cSepLb3ePfUN2%2B3smDyRPKDhMYOHJqyRyCcG4jDmAJSrMLP5xskGOqUB138jiTH8o6SB5dvHnUgksSt%2BZLHB85ClxrW%2BM4c%2FIJvLukDHlniSk%2F%2FiC84uudDh3VCCwUVVsBfA36D320kwvKVT3W2QjuLgzibE7y1Xd3N5bHmfN1n5Q%2F8aN%2BQA6g85R44S8KrRZLxsQwCczavC7lnltiZ769%2Bf1bKfdS6aHTuE57Ha2LyZ3kUiTsLpU6ipDbyTqNJ2hEsV4fukbQR0c5vKYHPG&X-Amz-Signature=e748dad9adc4f370d75384e95dd118c5808b93ec7a19762fa6891b27114d85ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

