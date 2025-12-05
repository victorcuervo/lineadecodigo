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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F3DHVD6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFsmUIz4GrKa1sA7drKVj0E5arE2NslUUgYI9mFQGzPAiEAjGieARjby2%2B4VQuGgLentNBctXuYdgdqoGLONavGJ5kq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOpVY4wsPj2VHECXKCrcAzMC1sysdTBbk8nQyq1z6BxwagXhCMqrJkiwv3bscXALEVtpE%2B2j4OwpiyOlcAPCNnQrOYXJ9jjEREqlJ7CACfzp6g%2FS%2F3W54OjUuo3En3d1nzSg7Kh9fIBW4d7BqAqYq%2Bg9xj%2FyGkEe3royR9j148JnPpPtogXBSoprrNqhoGhmSfc9AHo%2F3Ec00VyDf1YYsvOT7S4ZVqH0EhFHYLLzy1qED6a16fydWVGkMiJWf89DkZbpfn%2B0u8NMpMwZoBhHC6QyZ%2BHFyOgM9bw3mJ3nHeyLJvI%2BH4uo3Uk00AGOgH26QqVvQNOWn0nf6oHOwpdVT6jpPOzg%2Bmn%2B5zGfnQkJJT1GSW5Gg%2BJCdUxVOXjYMTWShxPN3p%2BamlV10Tf3XzLh%2FsalSAn5TA2AFVzNtKTbeP5jlBuvxffI44RAzuBdDClz2uPOsRfjY%2FEVS%2F357lZfM5BuG1IRofmM2ITuESASIX8bFJgWCYr09e2MhA6KXW%2BS61Hsn7ayqbft5Tpheu9q1hTUjdIW3ue3YD7M62bGutsvfNjmUeTRXtonl4oJez7eke4D%2BxJVqZa3x5rgl%2BebJWmWDWjUbVNioDAfMEtJizfWL5Co%2BrqoR4E24fE0UeWX2j5zRIGTE%2F9M1I9mMOSyyckGOqUBpMwzF5%2FiNr6441LWqG0lPnE8U4%2FGyHkqFOsM%2BXcBewZdFYDQEY07kECrxKtV2nQwoWXVtPdIHoaKzZxPrZFOJA9Nda7xOd8PhdLs%2B41rJFe6tvtMBXdjFlpZZyE%2FFx11GBqR9NxwjLWTbLIatPIbVegTDzHF4Do%2Bzr2tiRSvKQQKOmd0rwRJf0d9JKtN3wf7va8oQgtfCbVOpdSIywErM5vaTxuE&X-Amz-Signature=1e82d3a328646ed428430fefceae228dad1805a9b5d01cedf81dbca1d376657d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

