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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVHLUF4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIG8UqGtM8R1UCkAOz6nczwKu5VJ7cn%2F0rMOvnbpi%2BqegAiAUzSDOvWZ2%2Fpuff%2FczYgwuck0Zn0WeMx%2FhfxNne1oROSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMQvQyJ07bfWYJX3TvKtwD2KiBbmscrHwxgllShwXrVn1K46FR45xBoaZAV1hOPZBCQcXyVynk4h6ay3%2BDzEJBYa9RrHiCTUpQJ%2FQP3JciLt4mwt%2FhfsgUyLbJMgIMtScuhCLHpLkclC8iPWRo1%2BCLyDW%2FIj0QHuG4uKLiNpYLcb3N82UwUMthQyO6prbVctFAVa28FcSKmJnFciQ0s4mKorNENZUSxtAJg2T9Qm2X1kRmlytuyQikNG7Nda%2FBUXm9gVg8qe7n3BC5efRG5ReL2%2BvpLCqhMFKssOQeEuUJMKMKfaEPFDYjIRWU9cBitC%2BEO6OH3darQaWfnN%2BkNhkIDFV15qqgWApoESk8nHXNeR8b1FhQrSzWi9I2zX5a0RrboyZNeAqY9m4uPotVUP4fnFqkhbo0eDBBRZRhYHUXIxBlt0Uq16Dqu%2FMIJ4E470lu%2B%2BI7t5%2F37nd0KQeK6%2F99kdhsvTNLAsEEnBi726B5n3cNbfG9wssp8Oe09PhBxw%2FGDOycaE39PCG4K4qqAGiDNr1PQUve0%2BHosVDQU0iWLPFU4blcZ7SdyX0oDF8JTJAg7sk3UJ8pWLDVge%2FZIj1OjGNyN9CyN61Af05wmVWTWg21rUefA5V%2FYPZJBWFZ2uU90StFKNK%2B02eTgfswspDEyQY6pgFlC4Qv8w1A%2BM4aNIPuKDAL6yx8b%2FEHSVMYps2YVr8l3ga8Tn7TChf2FkVV4meNfLc69CKNxx%2FtVFEXIyEHkault7fCgHrFP%2Fv3vQVhcZOV9vKnkm9N6G3glPTyW248OVo0zS78TaufXw8Kxaek5iGeG%2BcFmPL7e0Hh%2F0YP3XpexTaL%2FhPbn5zb15XTWlLzN4OahAXDHLMPzSLjfPerSAaEwdYTPteY&X-Amz-Signature=009190bd780f299767721c4ea7951219a4e539816f28cc5fff47ac6e67b386e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

