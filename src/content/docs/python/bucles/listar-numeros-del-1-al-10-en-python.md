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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642WJZDMF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcqzgEElFVnZx5yy4c99YVrOEnE6gjiyFZF5nK78kURAIhAL3qpgLN3kgT0sTkMFUKejuYtpnY%2BSzAwHMKq%2F97oNKIKv8DCHQQABoMNjM3NDIzMTgzODA1IgxQarlZYQDxjxpOM7cq3AOhkVTLQ46v27ScG6q7ATfU0oegsAqM0SxOkDKgo8upaOiJpQo2KVndbv3L4ObaAXyidSD%2BcdlDGSSf63mnXMaR5DApN8XRPXoyKM8GbBb10KoE21L9YYYxdaaRtlTs3TD1%2FF%2F3Iuj3MFa0jCjAxkZb7Jtao2Kqm6c7QgunvggJk20HK7wKH7ZcFh63P2E9B9k5XTFqzrEM11da8vJJPeYTHnJgpPPxqhPON4NRHHzVb26pazzkNLjXxBHRh2%2FB%2Ba9gv4JKLL%2FbTy%2FEwJZDjQGtTy0%2B8o3AZczAsEiGpnnA5pFUf9oDW5pcr9Majxu27X3Tqf%2Fwh%2BGy%2B3oFGxfXLxPkGd0X%2B7sS9h0Z7bGIzFxK777D0Dm0ml1Vqf8lKiVCrcX4iGpMO%2FVYGYGBK%2FF9oio8zE3kgtW44i0ELbrOuEygU%2Bkfn3BWotTETrEveFOaLCxPA0f9pomEyU9Wlq0NCaQWBNoc5xziR5dznyy7ypBnoOGSof9EEynsbQfGAHrX5nFjg5NG4Ux75g4OyP5nFo%2ByMBZQnNmpW4am8yBdPMrUJcAar0CIBML7OT%2FW0P6rUQ7mnNSg1dWpC87J1969wSvW2Kmh0Wp3uTvF9DrRU%2F%2FgHo6aJpazBoicXxNS9DCEitDJBjqkAXOdSkEBLNCei15BFZRR3iHZ02BHjwuG63wnNJ5xPZqOEubMGdvmfO6EKfkwaCpnm47D8aH%2BeWlWM4Ozuc7H0ZZ4bQpzUq8QI9wfwjYdlEv7UOLMoqpeI7v%2BKNz9h2dBD%2FzDGjSX5ySKnwk2yvKWf3FFg1cMAmCxk3CEpt2VRL96nkXYeTM%2BQxPBU5m%2BDCDSaBCxknVncq2lVg0PaoKa3qJFj%2FvD&X-Amz-Signature=3dcf67ae08099095c1d4206bb913a39c7ea6cbfdeb7003f4f75a68d041b59286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

