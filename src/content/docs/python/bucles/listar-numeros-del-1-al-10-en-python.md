---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UOBQJ7N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfjkTOyo1ggmfSzu%2F2E00QwX3mprtimLdwX1b7PHxoTwIhAMDmUdPRW6gBCGWqYQSMg5Wl5Q5lbX5l9eZqh8m6UPOSKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzibKoEUHy5AnDc110q3AOKiwXKsjxh3crdWta7O%2BGZ0p0XPgGB6nYeOubLia79mTRdnkqtslnuk%2FGVCt0T3mV7kntkSPYglxaXBLTI2S%2BNgEtdXzxEaPMrzF9IdGerbULsRr3OL%2BrVe8w9JAO05SU%2FLe93aaJyEakvB9kNyZHR7ebRCHeo92rBeLZH1w4O4fxg9V0y24rdanAQOSSKBpPpJoPTIcbBBj%2B%2BmGevp0eGYaWyluymTkXM7ZCAv4dGOz1L30YYUAQl%2FG1VQOSFX%2BQ7jYHUPpBzwrEOTsmxMAGYnMo9ay9AbCpnnVXtp%2BhfBDhITAK7jq2MMYByoDvsaHJNXOd2qpsFU09Fgz8mUPhmxUC0FaarCBwhx%2BXybaUTXJJX40nl3nUmPhLzf6jaJcLmiWA3%2B8%2FLYhAS90QccVnj59%2F8qvpDrpSfKXP22a2BHo2LIlMgJPWS1dtc40InzPRVAwZmeB9k%2F4uw7b1y75tNiNgPw3Ify842hWCfYQae7PGSbUmSwXwC%2BnwqtJwRtmdGB2PceSp1OIBrgfwA%2FFb7st%2BfzcM6gWqlXz93Rg%2B3EAOoa5NIq8B9mnmiXooyOwOJ4DU%2FpHOeCAuh2Pd37QGjwUHSlEMAUxtew0UUj0iwzSREqULHfl0DOOQ7MjDk7tjJBjqkAUiafcsNLBMWXlUXEnvOyqssVWhwd1G5cZ%2FgncEOSR7cfNdwEMnA6U1atOFVgbl26yrh%2Fg0XOQhqXiB7PaQOha07Mt8cexC4MKaUFbQtevT8HTc62z0AmuNF5biF5GkBtq2Ie8Ow1dyY9PGD4B708DpdAyag6W1ajaBX8I3AjJpeKoFgGYI8NPNtX3LaUmp2iJ%2F4xvhTOlTR9GJrU3%2B5QaQXNKeg&X-Amz-Signature=11c53b38bb50ffe103608e042f25d7126557d5143940187231f745e170629b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

