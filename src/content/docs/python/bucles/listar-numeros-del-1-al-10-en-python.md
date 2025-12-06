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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI4RGGLH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChzrFvdn6n54ygdXyuNzIzkKF1owkL8wtjp7se%2F8aYhgIgFnJ9TH12kVvkzSv3RH0GhfB%2FOL8Sm0jMGhqJ1yqU8uIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBd7s7rU%2BLSBjPUkVyrcA3VEClu8YCN%2F2DSoJ90PUqmQWabWcIlArJVdF1VEbHWjMaVw7yhR%2FnG8WvxajVOl1NqC05HcluZqNBWEyieMNAYtSU5nPfNIpDXVOBo673YUrOw0iSOCmtlAj9EPZGp5e4sfJJVwilP98QP4K1Vir1eNmEnsv2OWKLUZeMYzUT5aU9tT9xFdaQlONZ%2BbVmeHgEOoL6ikWMtA6oH30HCbdnB%2FrpyT%2FeFmGyZsVUDb1naUmU0SPd6VXIWpG5j%2B5qeo3PemwpblOUoQy4CjiqDUc67aGPgyZq94TKReuN64dHMSBV98gj2k26txtRGd0jvCVpKqK%2BmIM5mFzVVo7LzgXX7IetmliBY4ZJDNI66JxxsJsgUwUl5HiGYSZl6%2BYOj%2Bi95nWppY6djTvclUGaNzq1tn4x7HAqrpLao4prq99CyNYhrpVNfiTfBngRHIowGUgpwq0fL3frLQsayALVLVGEQtVpIj5m4oHGPADOjheRTmC%2Fi7IVHLo0QtTf97bpD8%2F36UBN4GiyW%2BmDKgo%2FICXzODnq21QSAoRJcyi3NcZzsAqiFZLAXj%2FXiMiSD6uukrvkE3ajTq6rHQvoIJxvtiEeTC%2F2dmFtsGUKBd0ZWrZx1j7XXBSnxucVMJ971MMLXezskGOqUBVcBjNydPUku0P6asiNhEu4z1DPXvG6uV7yj5bBMJuMCKCe8sUP1PLUwzJRuDqSr6tUNgYCHDyIDI%2BspU6X76mFqMXw%2F53kuntLUPB%2F3IwUV3jIFJ%2FF74XqxUmTdSH015vg%2Bc%2B8Fs0EuWlsn7fOlJH04QbbB8cY%2FwfeuNysKlB0H7Rc2%2B4jZsQfGxqPZWF%2FZOrT3aZAtsRBKZNaSdEMpSpsGqbZHq&X-Amz-Signature=9df6f17474fb17fc79d6994480b1c96c4a10c1c6af332aa85eb3a3a04e624c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

