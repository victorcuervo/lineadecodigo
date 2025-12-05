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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBPU5OP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh66m7Q5nx19KQhWybo5E7VkvpVECy7XovYdxiTUowxgIgKaa8TwqQHXH3dxAhRhNLct2J6yXb6A0JsG4ZJTGbhQ0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDK1Knvt7urIXX2bv%2BCrcA5BzS9RoT2xc1vxJR1QXGN6EIcda4nLEo%2BkeeHglz2po8LsQdh9igCQPFNzlP4oRZSMTJOrkoKI4OaGjOyxSCNA9Ncd2zPqCva%2FN%2F%2Bpm9Rpmat6ElaWLNfBF%2FTUKyvY3Wxg0glDV01%2FzbojhxTaPXxPMldUyffQG7ILDFFXPYuCYa2A1YIqGNOGN71EKuHy5rVDI3AAw77foQ9FkvQPMWSX8lKvNa61CCPmqtVnqsYEDuTOd4R1%2FD1cQ0%2FsccuUFDnhJOn%2BhMkO%2BzM%2F3Bv9RYbzbjIr%2ByWWnLFPH7znQbL2pjHM%2FYxk7AuYwkDc94W3d9X7xL3XYcvL5LtLYjtJW%2FvslQVNtZMVgxNFU4pNkG2LIpUpaexmebjxNQ9PcN45s%2BFKRrBitCEBcBCpIx4ZOueXQQqpSZATCW3S4kHrFzyPqVvMKyAqHm7lwCofW16mtP95DNpOFBGhwcWqdUHSMu%2FG8RHha4AnJ7G03l6OVxCGHhIq5IWfGZYO6puwyZ95rZthe%2F3GfUfPXcyHlCHttlJ7wtenLNuF9h%2FVd7pGQRDJH84gvE05XfViYkGtO0twhX%2BiBo40a4604x81WlWuDfjk04kFlQnE%2FEhs7sWZ%2B6Am6ZSQRA7%2FVWl5ClG%2FGMOSyyckGOqUBcLnDLCLHNCY2xKDa6nkwlpszxxIwJ%2FgB%2BKxT%2B1reSjeyr9P3FopqyJOb7uxs37C5RoXATWk86%2B%2FJBVo2feubkpaoJAW%2BfWU6TCXSxh4xnTqqKAXs5uKUsqrt%2BWeqRefBdR8nt%2BqniFSXiFdG4Mfeyk1RWv0OUXcZTSeBah61JpHWx2lSPEpEQwiN%2BTtoTM99snYX%2Bw%2BtLspI99PMzl5o9JFvVcKG&X-Amz-Signature=fd42233c628bce5a8b0e922170862984ee7af1977e5b9c74d4e11ae0498ecc7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

