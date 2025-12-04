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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N5Y7DZ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHuG0A6uEpCNGhGTFEAEXlxiDaT0ctDGrBEk0%2BJNktIRAiEAndK2d%2Fm7BMm2t73mtafp7LPtOTLHVV6InLl5nAMzZ1sq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHdCy1TzOqK1UCUuBircAwyB9R2kT70px%2FSh%2FqpzA7MwqNPetKSS9Y64IX3uEshv3ZQZU%2FJia44aBlfj94k5qDO%2F%2F6H6fWrwt1ZtHvkqABV048%2F7Cndov3ElZmB1IBpOQjbqJoMO5SBwz29knDpQ%2F1zITNmG8e82SrUiVTwalOIRtFquot7V57i%2B9rj4YtENML3eMHI%2FnrnQWFCzU1UdghpuLeBAtg4HM%2FyLjMSdP5fV4tG7il7jSrz%2FKVnZ6bCVmglslOzBebkHmtuWI5lJCaZkNjl3jenP88bmFS2eAd8uHRtkayR8Q%2BBj5jBS1eBD%2BAdur%2FgiKGtOIq7koGHcDsuHmhJ0rHKzgjn9D86GtSSLLvtxYfQQBPyjoA5IOjqLqQrtaRCpqbdb%2FV%2FgLiJh2HHCCfBRumO0rsrsdn0veW8bB57f4KrNvnLsdq65PI1wHDxSKwF%2FEm4z2gL8bfxPySMODstGKJC%2F7z9PUjledRBt0drLYU6a0jau7qbfS5MPT1TqK996esgZbJ%2FYqVOR8WIhEjh5ngSZHKpi7YUbp%2FDufM0htZd9rdTSvleapkFlbdIdqzJ83FHDDSuY6ZrHwycO3IGf51YqwclZ7GiJyafosg6KuiF%2Fj6CU8jfuoBAxskCcml4kfjOZzAo6MMrKxMkGOqUBtW58o7PrVHjzqZZirFVaxcJvre3Of99SI4VWbu9May%2BAc9uaBUSOD46w9h9teGtGc2w%2BOX63R76vt0eoE%2FO5sQkG%2BkQMUOhkvP2VVjU%2F7clplgMPrrh9iEwMhT%2Fsa%2BUVBRgxoJxEOYEEBYuuRX6q9EuPPAvnrkfeWfD7Zv2iuiNT%2Bh%2BB3QTHe98hhPHRUiA2mCe%2Fk2k1VRjDm3T00F5aZIph%2B9Tz&X-Amz-Signature=1f2df6a0ffc95e164b53e39bdd89d37fb930d0646f263185cbc98f4a3e2dd486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

