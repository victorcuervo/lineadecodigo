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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3RMERPD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F8jb5tvE3OfaQznii7W8TBKEwW4UwRehmJA4i5VpAoAIhAL13q2JJftBox%2BxH8N%2F2DGMfERQNNx2bz39MTh%2BAZdgKKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoulmW3f2A5VLxB6sq3ANPCwsjnsw50FZBcNDF3vV34FDF6kXlEltVzWsG1CFAZQrsm6PMzW%2Bsh1%2BpNGLpYRB2ykDQOKtu%2BFj2coIdIErSnegddAchmH%2BB%2Fo%2Bp1cqz0jvO42l%2F05RfhpZpuffld62kPIFvilT22R%2FPh5CxhbSz2caYQPdneKQ%2F6e0%2FBXd3%2FXvSE7fbvk86QZ8TMhyBg0XEt3KQBqLa06lYAYJSpnGDr4rdJqx5SFJPi7m%2BAm7N2vge1yCvD1bi5Wa3NGe%2Bl6YZW3WPTP0uhmafvqSRZ1SB3L%2FwReT%2BkF2P6JnmbNGIZufn0UdNg%2FB3UOIBVsNDxgYx3D9pjBCEamT7qfAQhKtd52FxBXDGMGMDifXYHszyRRJQc3AcqRfJ%2F7NPw4%2FOE0x3aNH3EeKgVxTnVGTaJcxqdf1MPfn%2BGU6DrtnWDcbLBdm6wbwaMJMQceadqzyMcULnCBkIeBTjY%2F9IgGXZFXL0H1b1SXHaxXyEmh0MNsbPY53Moqap4VbEn15IpiZCCOQqmvN8brGWvJWtfh30a8f5eNYROY8OI3q6gAQ%2BZ3ZKBSYZqBpmQ5WQ00DAbshjX2QHJIpGN%2BcSC1r6M8CMvDx7jk6EO4ve5xEdsA2H%2BmBwOdApmOPMXy1t0fbQLDCTot3JBjqkAbfQxUvJpeeXt%2BZzpaa6MWGv9oA%2B14tRT0tTsox5NLzAzWT5qgQKEZ7kAT3FV40i7wWv6QaSeleeCHoWess2yoom0k8a3P%2FMMHhjThlCV1O2aS688eDEsYXwo3QjRsqUymAqbo9lh0NTlC0jkvrBpZR7zA%2Bc78LOARnp8FLjv8H9v1RmYBIal%2FnRLQOjq%2BUL0HKDHDUEV%2B7DjA%2BWyF0l4uIiZBq4&X-Amz-Signature=bf813b5b300fd5160620b6e7c5ef2be94476c8be2cac13a47f0da4016ed562a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

