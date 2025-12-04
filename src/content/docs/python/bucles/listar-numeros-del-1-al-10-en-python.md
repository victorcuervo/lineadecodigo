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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZUN42Q5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDtAqKL76p4xziJZqflT5v4kcerNks1DxvL8RfY68Bd0wIhAMn1II2VSLOzGMfqi%2FY05meB6rFNiTV3%2Fuz0kXNYhJX8Kv8DCEgQABoMNjM3NDIzMTgzODA1IgyeegPcIydidocVoQ0q3APHSXrUQR8x53FoTRphvBiNSxzMowYh4uGYT2q4xrb%2Fo2LUtxq0DRf1%2BI8ReHXm%2FpzKyuKUM8GZ6y1Oxsy1EPvMc8xd0eozmqQzoOsM%2B1wZj3J1QBGxLn2YSYusBfs1JrQUQqLHlbV7%2Fs%2B%2FWWb6IwU%2BRCd%2B3y91v94lPcKKyd60B3mQ%2FX%2Fw3%2BjDRCw%2B%2BlUQFe5%2B3YNmjqRrJThskpH%2FfhQjIgoSk%2BVLSUZw0o6%2FvNxESFXjoZ4X05jT0N0nv2asyiB3vzCHmikikcbn%2FRgeEYkoy3wjkIaPRL4iI8vT62E7q5a6d2LLoduI9%2Bm1lziVNl%2Bzc%2FzZnd3dF5FJaeWKQTIMopZ9PAJAnXuQMn5eQhbmHgHqZ2z%2BhZDkswVmoUEwl%2Bd3GBtfdANYjtwu11w3gSFrBMe%2BE9V6rBxiKx2EOlrSgW%2BjluqZVyD1peoDi%2BTA8gm3pgD%2FCukIF6ptxt%2BliRRSU7AGws9ZWHuALlAqcIQdcu%2BtLMz9sckIX%2F6rzYACrLIg9RJA6%2BLEO8z19Fp3g8BoN2VNp%2B4HB9bPV%2B9UczTjYj92X2eZPEoMR6Wkdi5fBoO%2Bh50Vb1iinxbyFksSfT2%2Bkv2YUMYI%2FxrKB5TLTV0e%2ByJwasWIohb%2B5rXW6DCNv8bJBjqkARVm5bOQ%2FQjp5lbh9rpLHsZHIw9teVHHoXbUXoSSXp5b8sPXlU0la%2BjIS0LD1K0%2BYkeo5x9wAhu4TFtEEIkJ2WvHGVX%2BCCl1AN1Yq6RySsRfOO3fvoHorwWT4MjwUz8UNdEY37vm3r5dTqGShyGRDeIlq64fecLIaDj3g46S9fEPFxvqJJFvIPZbxz7Peu97zeeDTgcwqXfXuB30WxSX6TTY9OBJ&X-Amz-Signature=55f46bd713e0d83a3d725bc5ad42cb6643f3891c70ce4d8107d94eaae5c99485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

