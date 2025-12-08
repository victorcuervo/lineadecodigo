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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ6MTAQR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD71VVC1enFHlOTl2MIkEJz22yYB3e%2BX%2BZd0e270GTvKAIgIfYREN0o5zfjUwVcA%2BjG6uckdQ8ss4jqtyVX14ACRmcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCD1tHST3eR78s291CrcAztTYN1%2FFEH6XoPvdfbQTeM3aIwQnF3wMWXYLeYK26BY6mV3mQLBF2SGyrDTw4R5gNmiALsU8RuvQnm0M8aspr4nFLAL3ATUoKdJ%2FC2cmxnQ%2BJWBrpZYx%2FfJNUheZglDbgWBS6g%2BajiuPzoR4BQbEMhUdsZdHlanhI2%2Brb46fQlyJEXcNRtVA1WzZ%2FzqG6O6E7KImQ%2BDOMsS%2B1OXWwxmNsHXultQW2Ij97FVwNAZz13NjNNQt4xnj5AHmuUva7X9AJS2zMfsHDmCweHIWnfuWcDImfvAOpxhImEfh7r5S0Eim9hgKP3viMsFtfOFUptmecxqvGvlguky0ZVd2hEzV4n1URo8Rnb4NT8cKybxegWQyXjZ9RcC%2F%2BRLJU33FfSTe%2BdxxMseKTm87yP%2Bffto9Lnd5PAKvYR4D1lop03US9ZCspi06LVrtQczhOMo2ipMlWW268XBCdtcamTS7gPPK2d4QqPDpdNiIRWLg2KMdBswP3btaIj%2B7ekkbZ%2F2%2B02R%2BwPTcahRe66hf1PR0kzVGZbgFHbB1UVHsgJxwQVKnvTA2s%2FXC9jNFnF6Zi8jcyvRARRYBLp%2Fs%2BDhyT3D2ps3t8gXLDbEmGonBpEEKaU5V8yLDnqZUvdlbdW7Ts2UMInz2skGOqUBJG77gscqOhxhi1W7q89Yb0wV1iWmEAseKmyy%2Fk9nZDIvbuAlzinJJr67ZPTzjWBDPoUvX562AoWXHHtwn7VdoEab7h4gKVLhjn6MHQg21xUEE%2BWTaYFUmTJCXu7i4A5fRHunQLEqM4uAxXS0l8x0SrJwrpRoavXOlqQgk0M2uhwm2jVbYNQHTNPdxXOwcSFTwGHDPbp%2FIuhaiY%2BNUZSw8YOebbbZ&X-Amz-Signature=2aafaf32a0c6cef9e07c47f6b093e0b6dc9dd6aafa49529fb75cc9946e805c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

