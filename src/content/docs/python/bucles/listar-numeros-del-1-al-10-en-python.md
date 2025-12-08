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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOGSURKC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T144728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B1pE%2FPl7Kyf9xEhhd1MuLVCsO%2BcEBxHExA2zTYHsskAIhAPR%2BtnZ2jh0fJ1Tp5JhU18sR%2FEo8H%2FXAkghgWwzfemJcKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXYruVm5EOTIIAx4q3AOBGJsFZ06ZsH4I%2BlLMBl8KYS3qEOi5cVuQOWFtlGpWRuyTUU%2BLLKMRoZEooHdNsF1UcTCkBSG2rkyHa9l7NxNUf0Bj08XSY97ctck0km3e4qCdCHQYomxjNNw9IjF11vAP9Ums8UM5jYV%2BA4NWFf4P4HtjKgZwsgXL77OFZZ3XDXSC%2FM0QoLI5zhN2IfiV83%2FDNyhXXeo4ryUhR%2FytGvKatY9nyeWzxu3oGl8oZ9jWGnC93S2BGgZHovnsMknNH4emt5g5cca1YQsAU0TKOjP8xrbNbHwQCbbs%2FjAqPL7u3mnUW6IdRwCOTML%2B6vwOrnZrKo%2F9KddfYD%2FMsS3KjltDUl4owB4WSwdD9vo7mvP73RMBJ23IGEv49Xq2U8W%2FEYt3agVBGD2gN9VV934ip73zHc4MD72aj%2B4aNJnydCZgt7ZayuaPZFbhVhO%2BqkPRdZxuTK%2BwpgtAuLAcl86dp8TIVnudM%2BAewgKzI2Nnlgt9Vvg%2FBacTk4QiK3lJp5ncCeP97OLTz9gI28eU9tytcLOXTg8ubueZr8udB4UPsix1qzrrR9CbCa3qN24HEthEL54aaZeFwwvqnncE%2FVZHR5RJW5FqfX6OKvOg7n%2BgdiB40B6YaY%2FbU11kDXhUPTCFwtvJBjqkAaD%2B2pDUSq%2Bow6cPHDYk33TTOeREeqCkiXMAQ5eaf6OuR54c4ztUb0PLdAsx7MhCcWkfYR%2F9G%2BGYRIi4VKxDvGQDFRNm3ZfVRX8htkIRHLOCjk5uQuFcXKapUlpEpN5sbzjn%2B5A8uZ63kYO%2BNNMzeDnepmdM4U%2FmtPyfKxhDeGoDWri9sMvCbQIXMVJ17cTJGIvtpF22iGo2apQT7VoXjrqYQPXe&X-Amz-Signature=65e1153aebd75e7652d7352c19c1e69b2782159250aa443497a4e9c4b210a3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

