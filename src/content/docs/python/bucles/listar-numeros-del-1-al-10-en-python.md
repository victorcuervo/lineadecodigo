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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4TZ6I67%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmCReS1Pb6uY%2BZLTlFWPc%2FneN4dspX29dvMB7wavx8fQIgTuxZF%2Bca4ZMP6uKtw4Qc6zmlOQ8Ep%2B6c%2FtWLK87WIO0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBaKAcjEJGt6L3ZbRyrcA1fUKQLlWKmbC67CQjSHV0OgPIF%2BnrxP0wUxKym%2BcsG0ZzKN4G4ZC9Q4vHqwlpg9YitKek6ZlrojiDUB2g5cKKU%2F8sbbdJxOpyNh5sWZOgCfvvu%2FJukanxGS4q9Wtau5QHcsnituc7i6JG0UPhpjotFoUuUyU%2BgzFqRcpadUXXelZiycPbp6EpyusasLFuubODVpT%2Bc9AdwiXs6WT7ffLAZD16V3FjcNJhfHd9Dm1wpIl7eWUbLDqUgRGYB2DsWxrSOBf61D2sOL%2Byjponihb3DsO0mpZJvR7Isyqy3GHlqGsV5%2B9zvpzMecg%2FPoaqjWz1XYNd1j9qhbc6ubJWypEFeaVre4hfw8wzqKWtmNuFi%2Fdy67AfxP2cF%2F6jcVQ3zqNgFUx2v110G7NRr%2Fe%2FArvqZpDW0jAVUeiddQkxQmyMHBSAdvmefIWDV38BiNtMVG2e%2FXyorIF46hlnH3Wfa43Rx6HBOsiQJKiJxaf%2FRlOlL7pozhmu5EZ4w%2B9vgqO5WQHZoEFZzRZ5NgaHPg8MILdKpvvcAIpKn9%2Bb7jLoEdqyauIEylbu6p379nqsNRmLi1bk9M%2Bde2wTGWN%2Fepfd7ZKi1zFULsdclhhn37bBWLIs3Tpjslra6qFnu14jGAMM%2Bm0MkGOqUBLaS0USy%2BPK443LDaWbYBN1t%2BB1RYU9DrcCaBirj5Ib8aPSGbiW9R%2F4zrJBtHGOC%2FFGih7VbCNul9ZDqy%2BzMRsiU8lEduTjFJbBH23cZVKW44GkDHerI6A5K%2F%2BmehR2%2Fynb%2F5FZK%2BWrOHfULQmI5zCDk6a3LSq9CgnqiPBs3qgdOKmy2xIPKPQS8egB%2B2EPqk4M9A0hwQya3l1hDpAMU1PL%2BEz7SJ&X-Amz-Signature=fa24dbf8c85ce52e3b4d9d6f2eff0de1ff06ad68b9b5caa4a38a9b8cbe0c522d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

