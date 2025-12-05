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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3C6W5IV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFunTnKkYTe%2BT9P7ZjG0U%2BeNQU3o2T9Io5VI%2BJGz60AIgBjJbgicMnqbovG53iZa%2FBmAZEzAu4yMpk7%2F8XnL%2BSdsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKQqu%2F5xr4lSYal%2FVircA9dpAWAMflQxCty3sADbHykFtulrwzCRlyeC2hRWM0OFravQ9QgV0kMSW6kuAY43S%2FFAotr0KYIYBQ%2BCHHSZ6Vi6sErQ6oPl9ys1byDSSk1vMZ72RL5izERjEsc%2Fv7gJZ2yFragWV5TjgRymO4C%2B04%2Bd3WGdKjXz9sEt66aChS7sOoCjZyJPEgeL3pY7QXXkiQ0t2vx40d19J9CFxYk6lefFBH%2BBxpp4gPrUtZjvl7GN8fUMYohJ5K%2F0hxHtN%2Fdx5%2FHb8g7%2FXAChheEgkn2BIkJQ%2FoycLoLUGDtX%2FUP%2F%2FnV84inerIxjVEDspYZTpPY17pBw1D1SiEq%2B5chTibN%2FbrsAd8I%2BOd5J294QPINyWUlWvbBD2YtlIRY3Z%2Bhh4D%2B1rMUUB%2FNXLr60503jrTHX%2FO3m3zs2sg%2BtcSps8DxVvUpHOCAv%2Bx5VN5VIj6G7acRrcm09JRId8yCCpzqNg3le8ZuLXyxKYxXuNqc2LZ7M3W%2BeesV2dT5PNHq2R8n8lZQE0uOPmsVagqJ1CSqjxsDJKZOKDmsUSk2Q6C1Wk5KT0e1GDSoy9Ff5Y4MDHIMa80S4X%2BimgUJm%2B7AqFOpexmuuXQ0IOSdp1vPVM63F2LqXSb0R1UXcmBsFzCg3xrT3MMzty8kGOqUB3q3oO2da%2FFRi%2B2Y9buSMGT8%2FuZShCOYaYaNrg7TGdJCkBqXhYWpofJhc3os%2Fh6SgX878HuI%2F9Pc3nJPxZGszjVKkAj%2BiQLliVy2GlYDvHf1Z1K3EgW7ySgRCMoOSHvj1E%2FOa1OjxpOQpBIm3XRm16Az%2FuPbAx8oH0VEx685qNincmlvpIx4iyuP9mT664CXPe4HYnNLrq3lJCt4i7yAl6pF2plsg&X-Amz-Signature=5016a1fa96fd246c45311a4c3e4287cc67fb48bd069d991d79b4b46294717cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

