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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZC3FXMT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2Fbn48FCHAztOcNqyu4hnG5yl9T%2B7Y%2Fjn8DTpkUmsOZAiAC3wvIcDhymcI3XpAq4UJnSLUj3GBbzzcBA2yWc56GDSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJE12Fcy53pfnRP0YKtwDhBSc5iyQDHpWZ7JN%2BJ6DQ8qJjwOFsXtT7lEbUG%2Fa6HRdZba4K5XhZ67mEjFo9wsCe1GbfMcNnw3%2Fkw1fjigsN3Fj9kXzH3oacG6C8RUv%2Bb9y3O401dWMJha%2F1B90RKOymm8SQHIcB2hUV%2Bw92OAoRHOpJAc6Ka5tiLK3VKB%2Fm%2BH9B8BnpkcF0HIf5aQ0H96loNFI3s9nMBDevEUt2%2Bf%2FPwE5meqADrWPabxWc2Tq39YGXxGIpg1Gy4HvF9OBzDerpQfwG7cutSc8ixuRk3m8p8yuKyCIe9aqUcIELR9vED8pCSrW%2BwbWCXj4q8aruehQHqjLg%2F23ozgZLmDn3ap7b77fb01NFgLL2wDnXQ5yjUd9FftrpgHtqJT1brL%2FkjmZdGUiu2D2bSObsukjl0VoOmnzRCA%2BT75%2BZYa5HwYOs87mDRUPEUlyauZqPCzbdrj5mKAasbVl6TZrrot8g%2B8vbxImjDlEJA0Zj9KNpsi5t4wUjng6%2FuIcejWLMNJuJLOSRJG2zu0fBFUDgGlKzeHlAJ2l8yQ4Ml2SVw5hFEYQMtbO6WELq8BT2NglP3T1tw0Of4elMF5L%2FbSgsPmh8MpeQbE5cVmX42Xe9sbYn9cjjrBKdYBzjcuJOQw41DcwvJrVyQY6pgEF40N7MFnf13mKltOzzmy3x9E4K6PcB%2BeGW3S%2FKKDcY6iV6ljEUyS9ngKSM%2B9xPACmsE87LOcS6NYoqXfuLPVhzikdvxK%2Fgc5q8R%2Ffn%2BumbdZL6Y1YT%2BNRl6T%2BMzlJHfxbgb2yqM1Dh45ulc2toSq6ZqSZ9PMlMfzlCzfPc9Lg3KOcQpsws1Ic1xHXPMmMddgdMT52rhFXq2ma%2Biagvm6l%2B7%2Fh6a9S&X-Amz-Signature=b14cce2ba753f09d6fafc79d112a5da57f171b4bc4b4f009724f0b2b36c4cf38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

