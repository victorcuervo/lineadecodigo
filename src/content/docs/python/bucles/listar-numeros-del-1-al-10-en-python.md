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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EUZ27K3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHlC1lfRfuyKZAqN9Ck7yWF06KVJrJ6qPergsyY18JhAiEA258Cncp3cl73khgGDlCRqIA26gUUlCmpAycbE6XyXqEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFENM3fk%2Brvq0WTRVCrcAygq2mbaFHM4YIf8zY6HBggh0zElYW87kbNoM5XOioGWp%2FhUDXmyXSIqsWE07RFojnX02Bv5l9UX9EcmA5Jq0kgsZPqH%2FNOFg69tM5kfgeFEX7Z8BdlSXB%2FqySyIwMhRjZ4sNJMvQaikeyND08i3AYtRatPDqq%2FZvgleJ%2F99kmu1lR04eizeKMMAIPI3BK0Tl6BHguqTWJ7dV%2FRV2OJ4SU6ih6ODywJNJf%2BX7ydEVZ8%2FxidnYtD42cYXXdCAKHedOw4ImAbHAunn1JJSTGDJgQnSpX8uC4944Ozct1SbEaaAKCR9omeNqRQioVYJZz4Fc2yq%2FwKXwsZW2CI8e0zZ3hR3mI1CyStOIDkdGYR6OeBzGkE63WpTrn2i8o%2BUkkCZ0RMjxw1qYKV%2BYU%2BOqKu%2BPDNGi%2BEcXHpsNVORGu4%2Bf05vds%2B7nibsVJwucnM2K1O1oVUAPLSG6sNDM4cWzfpZCYW2SjbPGgsHeAN8eDhHqwPn9t%2B62ei2buwJJyzgKR2fJ7UkuYdMV7p4pxZRYEgqkFQUcFC6pZBh3eQ4CxnTTTnHuvp1TlTj4Q331jHbdDtFSiYRadkmjibC4eGs7feT%2FTymqdlVosWXEOf38SlRBEAdPpIt5km%2FlliI9MKBMO%2FTyskGOqUBG5zymWJRoEp2Z12eLI25wuOq7C1UyaD9ODbHcMdKCywpBo6wkpPR38bY6llIR%2FZ6ZPApd3EGqHn90zOQ8XBdG5T4S5IgPU%2Fqls1rQryInQ9DCQgfxjQatLlo%2BE67L4apLBOACRQVuLaRVC1ytvfug3uzGtHvdm7oJ3PgtG%2BoqARi9jLBcN2V5MBYkBFwp0ikMN%2F0%2FJX5k2d8G7Tey17tzusng2ua&X-Amz-Signature=3041a19cead516e8a3ddd3315d14d950de06fbfc7c1a237772d6b03b703c9f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

