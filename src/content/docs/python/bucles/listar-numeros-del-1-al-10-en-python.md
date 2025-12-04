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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQQYKMW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDNbMmgmgi15VVKqE%2FWYVs5THUwMZ07d1%2BUOUXTSW3X4gIhALJ4KLSHGnNixj9O5OKies61dQutLf%2Fh0J30K8D%2BTMPfKv8DCEgQABoMNjM3NDIzMTgzODA1Igw2rV9%2BXuk2OMcGhCwq3AP1xlvX6xMckNJA79IqZKZjggZBdd%2F1DS55PSBbczNBQ8%2Fyu3X2s7qrOUdBWiVC50SLkH3DhhImNaUCHJKd6XqGbIdF3V4YOls2nUrweelXo4rUJgbE1Rc20jEdz%2FAM6rtYivcVNFd3CpejqWnK7UUbRNDowyR7tsR4guIpTmiaWTjPlQSKZxO8WjJ16d2rKNj9VEtFX0JB5TWt6PdFXoTs0koVQxDCMK0lmD%2FEMKRqF%2FT5QS1V08MCdVtNtcpaplbDgAiT6lRGNNHT4Zh0tiWankfbk4Im6Kku6QDrzI50CCmqZTlGexej%2FUY4v4qlZnIzr8bViUGi78KgQShtgcn2RpmtBGf%2Fpih4w77NiwY0I1J9KBhaDvU%2Fj3qRQ9GCp1BZFc1hsK4lQtXBXgEj8bZEIUAgfu6DC5M3Or%2FYfOq6RPStrPfVU%2F%2FFbEVIYMUuutdJFx%2FI%2BNYKnWz7dgL1tu6IgjojRTTSc45Y%2FcSWHyjNFp2vgZ1kJYcgGHY6UAO5yM%2BcY3oi5ut4JCPe10mK72EhAxyT%2FLNqCyU6HGeg9Y43Im0zs1jzMUn5jfC0OEik3uAChG1SMZHWrRor7hSpz33KeBignR9H8QIbMKJJn2m2lEH8268oVw%2BtyK5IEjDTvsbJBjqkAac9nOE40dGL542zNE7SfzAJ%2BSAqsZL8YBXY8K7W61xKYRN2GlhL61ZSrdUwJFfNrMlVS%2FUkZv4fkDk2RqSACab9ScmFKrrOsVtIG35WVantT6sz%2FuxfQthSV%2Bn9Mn%2BP250RIVbeLR06FfeofM%2FDP0RmEp7XUBbZ4xDy1IygVtb1oBcmAe80bWhDH4rbKMuo3lHpRR2%2FfzS3JpDRdtV4XbVtNwdm&X-Amz-Signature=b6de0e8da0ad749fbfc89bb94a07eec474b84358f9f24c7d7601fd6e6c44a37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

