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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSR4P67%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDURlNfmJ9SEC%2FDp%2B3asgCFpgeHv683mm87T%2B9E5tdwOgIgXh6n1pI4hKyui%2BXfkS6Fnwmq%2B36lTtHaqpmug1muyusqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FYdVEl72lrT6rb5yrcAzQio1Trlb6tXYIkcUidovjZFGxGWYM7%2B0dxiXsvTl1Q5dGxEZsYAwnYB4Wy6hx0E3ptWcE8H1k9P6T7oD6zjWkvT2X%2BZ3WSbJNuLa71kfoEiceDftRbajDDoLyf9Ejiyij%2FqZRkQ9Dvgskcsd2Sxeeo2bD2Xlyw%2FXHiXOUXQTLqSwr4EZvmNupbpeBfKZm8Gzla1psz339XwigY3STWJj6EAK0rlgdXJvtIAw8qOkmWibqDqtyfbS0w89d%2BQBhCeHnfYjSAqopSXySigR5h3HaLigRakNauc85f3%2FMLPslVqZAOlleIFCfEvE%2BOS37M%2BoP0JgmEkf1%2Fd2VMdz7PDZTA0hQbW7t0WQx3NDidSL6WivRllqFp5qEV3O8%2Ba6vVIh9IoLUf2M%2BQqm9NLJjLfhQTonGPY0tdNpLtl%2FYgcLUtWlZyrRzNhkrhFYC%2FH%2FKkjoR93HpvRSZT7bkt82ZQGpKulwouSB%2BL0o17RBcO2i64NVVRmNggXV61eDx2wOPZ3hcCOTye21fXZ%2BEoT6NMtyaWDIaArG0hOiUUGaT%2BLkNXIsT5lR7b3h2abmVDczx5w2q8w1n%2BVGDzw9TdlJL5BhBvd1Cs21%2F6PDyqtXZ4NasPjWBYOJyUXsefO4M1MKLv2MkGOqUBHQNbbUKvkTQAw82doSfiK5%2BUruun7iKqhrK14J1pL03kZ3nwn7qp2WBs6H%2Fg%2Bvj6%2FVLjhSCwBN3fvrhISw5%2BQoDrd0br%2FULtyyTJzlam%2FIeXUW08u2pLr%2Bz11hzDV9hMFxGNkL6BB3CibrIJoDeIqGb1HkfiCDTUlPHKaOiO9Nb5iIIVqzBw846%2F4uFqA%2BreZw%2FQ5E65as8tc27ebVAbaARg%2Fgi5&X-Amz-Signature=b2738da939623c4c2d866b4717b1f51afe598e84cc8b5efe8c2725ee96eaa13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

