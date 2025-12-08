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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VYMQYQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxPd2x%2FUvD6mI%2FnZueJafr0%2BR%2F%2Bp65BY33X8Hz1bquZAiAVUDS8oamp9b5opz2kgef6by%2B2zKz5V72cyIetwMAuMiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Kjc%2FlKt1Ql8UsesKtwDS%2FcL2SvQG0Iim5d%2BD%2Bhkf8vy0FH8LehAgDQKUJbcri1%2B2aDVEutCwYFFm9MkXVHa7DW%2Bv804nt9YosCWpSd6qlRQZtoz7A6rB9DN%2Bz%2F%2BmohIfOmTjVpIoviMptM%2B%2FyvAH4X8sq5rj4XY1eWSwoFFci%2BEGxt4kN7jK50YvkuC%2FMGTjfEqAFrOy2NpFFn4eNhioyHCu7MnWU0DK1xi%2BGIG0%2BKjE4ACH9YwTYzFus0A0hZCKmSwoVh8f%2FzGtyz04tcdP3%2Bqke7LketfUlhEKppf8wtJOl%2BtOmHjTxFzFy6YMlMtiYQa9bcb5copelKmkPPxlJkVRfmt2pfhjZhS4G4JgFLnvwEmZV5yEF%2F9LUGAmRq%2F7ub24Oh%2Ft%2BZJe2yZYi40zHCoIkwRdaa%2BdFfArAI0E7EZogDzo7OREslN4ws%2FLLv0Jy73d9cRU5kWY7An0HRQfBVbl3X5xflHSSxVF7nG5NtahAQ53YbdeT9aoPVvUopv8SB5x66WYVulDYRYcNIS9ZkvsAtQXSdSEXJ%2B2xZJ5DHX1AvSOAfOrDDxd5QAduOwWTD6AvN2nNjex6B5GJqE5c1HhS73%2BCCGziG779nixx3E5ppUd6fzVK5xS%2F7nTv4LKUHgyjq%2FecoGwaQwpO3ZyQY6pgFupzE5ksBRhtzEmN5AtjoRGM7pmyoDei0CeCL4izBn%2FUdBG18Pc5%2FHv9f%2B07V95oyQm0SsNbbsRHc44FvNZS7cF4itISzjQ%2FggZ8uKF8NQFFpAAVADzf5mfXP4%2BSdJxC53vmqQqGXEMWEH944g23i465rrtCHEaQNNkimnz%2BkTlng3SIRb7iXZ4%2FeGxN85N0%2B05ABnj2FYVb5jz40HhxX%2BxaTCWJIT&X-Amz-Signature=fab071474d703f09f3eb342d172f4cba1d24602c7dccc8d2408f9ba0bd579a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

