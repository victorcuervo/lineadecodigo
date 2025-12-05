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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCJKD2A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVMU2m7FUZ8W9bcQc%2Fmea29PdY1LEufv9dvkW5qMnybAiEA5RS3zKf0SE4e0CkU4esUz51pMTT4M3HIoyyPRWO%2BYycq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHdFmS2O0CdLpiEZYyrcA1F9fG%2F0zLjhLPBrJjOvW1rVec5pDPOyb1T%2BuscDN1N0Jkqjwm5T4ixJaWlcwoBA4AsAZWXPsO3H%2F8s0iSWqm70z9AG0eKE2ANbzCSiNY4ik8djurT4%2Bg5pylvq2QDFIRUfMxj5BCDccnIiCWuaMj7v8rCoLBX%2B1tensfQB014y71rQ%2BtxjXAXPZHe93cwbEpk%2FKvuZdYcHa%2FqsVSg5AqfIP%2B5D3LuVUqLSgpMysvnwSkWA6CKcjNURUgka8SpaNNiXIdfQIuHbKvkX7YnSL4wMu9Sj1u7m2zsC9qUTedhoJDcTWCoKE%2F58QT9G4xDeOlzIxByGvYRUIgHbnTyM%2F6%2BVGtzZfKOih8FjKxHOstbqYjMNXlSbWRtZd%2F2B87qdzy0UOk4mE%2FgF%2FNEiWr1RcIyw7u8qNH53bognXD7ywmKqQrINyyHn7T0JqXwoTWKmCTkg83uhcpqFJuKAsskARQqNkD5qdkoxf7kQHF3JUmTjUBVzE8eXSgTL8jTPu2V6KsEIF%2Fn5I67nQ7%2Bz2jwssdmkjbaoH7XqCDbpdTTpedXwNziSiOPoBwY5fn51ESUNB77ajj5iu7emAsltjZJzWGwztmlq8C%2F1xqI3aYWKHdd8KMJPsgB7OE3I8D5moMPH8y8kGOqUB5i7ubgNqkPrXeZ27ICNqcK3oDqUyKpacVmoqZ8Vdiek8oyZHtxF6Bn80pldqWHOiLfrQd6E7xmkJA40YkDvQzsqbqQdh%2FdQqBVPII1DkFMrsf5sm6C0W7sZ%2BVMwSiqP%2BgZ%2BZ3zZfZP0eKQsrNV3BJxGyzr0i7KaYiMFv7E2IW%2BjnnXfcqe2C154rDWUcGikCsz5El7PJVBzcOLGyHhy5H2FY6Gmj&X-Amz-Signature=d5876d598e00254c28515811fbfa71c9c71629bd9f314779c93c87e1085456cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

