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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBHLKPV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH%2FGDKzyG9PzWezBumaNRCRB8a3X0fcoY66L9xhr7wFAiAvtVdAttA56wPjnCWC9iqn5sfSpoSl2wQmpNjOgrXV1iqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe72LLl%2BPzjX40SY%2BKtwDOGpKRcWvWsNSo9dgffhRl0zwup%2FlruKFo7jFI3b62YolEaf0AYJ%2BoCLm%2Blzf73QBbVfCaSWhHGCJCau4da6pi3spXhyZSmp4Mk1oKnJ9oWZ7wvIlK5NJ5L0rzdP7Hx8dGcyUdpFmj6j%2BvJd363HG6j9hW7YRzkJD4kkEA%2BdLDpXUUUMaBZXiextIL%2BN2nMI9PtJnPDF0ElOhHlPyXw9gginiUqhZt9rJW8qccjDfx7ygASKP5fdCUoWMAz%2FtfuY53jQfOK493tHr2mMj4TTDVnfmGXzeUeZR2JoJWHzciSIXCDDbLaO5BBMDebOGRcqpF0t8fP4FjdPeZ7G5yDc517A8anzmx2nIG8gVOagw%2FJd8HF9E98eN%2Bjm5pso9%2BRyt930dq31x1SWkWA%2FCntOT%2BqNZNNxYC%2F22rWhL%2F3mxGrwK2jRbM6Gl83M2YoT%2FrIkaBbVfmWfw5kDa5rYQAm1lrv3sPpWlmX8EFJWdDecdQP%2FyC9jcaDqbd7%2BSDhUwme1DjehaVzFpmmozW%2FAGzMT19R0fRZ8nTpWaTGMhjh2B44iof33%2BdZYSDTj5g94pEz%2F%2FDfRVxO%2BE%2B7DlJeRalTqd9lxtFtZWsF%2FkD9fI6u8YXlaf32sbf72A6%2FZZgxww%2B%2BndyQY6pgEQGvz8J8nZyYG6VXNbw5MKSecLCEuQElpW3WbzPcEJHf%2Fwiq7gPykheMAlPPBOKUzkS%2F56mbv2tSTS1pxAdYvMWoJCshwY8qmUJB0mUD8csm0bN4arpGvcBW0UammvIsDYpfRhsK%2BM%2FA2dxS1HYN9Iw8Tq3lgBi2fGflYzPp51SXNjEkMIJ9l%2Fn8SW%2Faze%2B7By0oaYU7%2FHCRydPjLF56X5ilOl16Hc&X-Amz-Signature=0819447f2e2952fa9952940d616504a18478de7430c3a5b3f25deb98b363ffda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

