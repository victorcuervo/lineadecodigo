---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IWB2ZD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDi721gzkyOkNxE6cbzoEo16WjuYpxVy6%2BfYEphwCjJ4AIgG8dRiVAJVRYNrNyMy21Bey1DdiIdgUB5QBA5l4LRgWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF93SxTtZXaSUFOBrCrcAy5Q10tXX8vp%2FADwfe42NGTfPPTp4XhmqYjY5i3R59q2lp6Fa7RVtJcBJg5lwjRnPt3b%2Bx4ysk2352t%2FPVoXyTPq%2Bl15jgVUb6guQEFdyyw2E1rF1ghVgDYe6UWO7sPtCfiEZk6vg1LcWuoRpgMHWNrzyZ0kDVlRAbd1aFaG3GH%2BmzN40vyeat0NZSDHmXU4C2d1%2Fj2yrmhZgDdTDd9r99BCHX9CKIez6FLPZI37XL%2FtZumVF5B2iyXyHJ3J79%2BxFwlUeVkpGRT3KRE7wikyCCE%2FR8ih%2BZq9ESDfLqnnUipPJSbsnS%2B8j5NqBEPS41JrjHcwo5E8EEKVicRAhtLVWZYm6W0gly5L32Kjlqy%2BhSI2n730O%2FYEXu8W81u%2BS2Xj%2BFc%2FUeh33jlOSbgGn7uioggwtMR9WiXMhQDKNilKMZS3nRUNwDCA123LtGVXwGYcV9pILqBUQbkasvQFexGvcyWafHBdEl0ZXswml2PATwudu9IoZEmMnmvgn740a1juapEQKuq7oMUMnTeBr3uQGmcQ68YOC%2Bu4DwZcMl%2FBCQXgme8e5mc5A%2Fy35zwzBIqXL96K5YeXUxVgE2bk%2Bq4EUvTCg2ROmSRz8Pt4TUX93CXZVH1ofeJF77BF6OgSML%2FdwskGOqUBHDcrfvzoqtOBZe%2FYyh7lUjRAU%2FNJiQPwSkkMMaTbYz%2BQj0PFtl9aRhy5G7HjVGxGAknMAX4MaAdwqEdC0AY0N7IbMW6JQynIRX4zoZdF0RwRRrztpX6%2BEbBzqecR0Gkg9YQKIVzYNHh%2FT%2B5fPbIeW2dhMB2RtKEDxM3W2mmp6GEBu00GLvsnmFnJ6ZLh085pZseXVMwdepnZmlXbR%2FJLXO%2B34VNK&X-Amz-Signature=ec43b8d18a4470a7c9f76be2a2747db18b10b1a1adbf8e43beb390a625c50c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

