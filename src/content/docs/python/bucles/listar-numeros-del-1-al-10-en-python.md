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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4MDSPP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnlOB9Kvx3N8WBL9qNy%2F%2BynfE3XM0ATBh737lrG0jiRAiAkXjfW30Aot4nl2r4ixbN%2FLh54PjYb%2BSPfmMssrn1bkyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1XsUhI2pL8DyifGMKtwD0JQZVxlP%2FjuR8X34%2F%2FCI6VBmkVtsyGNwvyK%2BhMh8tGygcg9lolgcGfjBlJ4NJh6Qbm8eZrSoLFfyTDVyTLMGwDrRYKJGIkPP1RNMLG5WBZsaPxIl8CVkkG%2F60b%2Bi1j4hmRunn41Yf7Tm9x3yZosLErWtX8u%2Fx2NFhJ8r6w09A1Qb676Nzcb%2B6l2gc%2FpWMPzLwVJg1mT%2FFP7GZQInC8oZpn0ysZkFiIDoZRuFxZXPfVdhNZ%2FP39G7uRzxqBt8LhDuTX1bRfuVOr289a2kJhzkK1SXp5Qelb%2BFkJu%2F68E%2FNoYjIbvTIisRB6zD0HQc7AH%2F3uPwWjHb1ES0yn6GESRLmst8umOIcsHXxS8eHW86iF1CLQ4Ep1p9fn4v25L4d7Mkh4J0KBEyEs743GJ%2BMglin3M7EiuZi1kKOQo1B4Yur0QvuRMHzRaed2hP1j63PPNaVZE8tLPOcqyDuZ9O9G1Ayz3MoXFxJhhqi%2B%2BG0GNnUznhBoZJqNnE75BiON9%2FVIo%2FtiNjaD8tM7lJo%2BmcXVevOehqeyuwnWgd5XN4Ux%2Ff1SQ%2BJF0L%2FMdlIDidINkXOG%2BBWr1t8a4AquSzp2bhHemm55OQRLFkxyUUqQLc3Tkm2QGjYoKgKHlu1ER1Orww7KbQyQY6pgFUwY48TeoMRVv6fSqMYhuDIFAfyrfdoGxUBR4bK0DoYAcZPO36DzpxlV7NDEpktxzeV8nLBnQ5L10LMvTKMGPjT2ep1rHET2lMn49jL2GWdYRn89S0U1kmGv5ZkjFQMpM%2BBvfnhtEGkAngYdNogrkUSwuhuC4q4WJHxl5KoKexrKtYnjZrwdMv7yXr6KGhMfh4SZ1pcIZDzvIlYY%2FBaGk7X9MVXs72&X-Amz-Signature=a038f1fa89d061aa0bf189d95f0f1483ab5dd1bce6f57bef21c6e496ae17535c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

