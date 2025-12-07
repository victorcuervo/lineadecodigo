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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U57BH6NR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUdi0nLk4OExsCW4XO0MDLPhks8O%2BNUHKEmzIph%2FRHQQIhAKXV3iuoHyS8HImVCdBQGfDYvH38jG6nDuW4TUNs6qu4KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjM9Zq8X27YClbEHQq3AOek0UlcGFL23qFZyaBORDY1naoq8pZAh6aA%2BS3Vm%2Fw81VkPNaaxFODbCJCekq4MVuPswOlnOmISJve%2FhWIKpI63zr06Nwg1%2F0qPYADS19Od2d8QJkmlCrF6aJd%2FGRpi67pWW3JOUZbHSgEIl52edWpm4fSThqFpAEkDPyjMHuAYIh0zKw9j4vNX0cUMtbz2Zr5BRGNa0BpN%2BlP8EoO7Bf0uu%2BUYXn3tElptSZnNGyI1DVx5zC8ZpaxNTflbtPTrxEDSkIhxe35wCr9gLAbh2%2BBJQWKTVZo%2FsuIB5fZ2lfQau4qr2Os4S0pFsgK1%2FyHJlVwl7GKavHjzQHEaiCtnz8n%2BGBwd6qO7SIni1CoT0SR37Cbh3tmV5KKC47CfszZudXUvXuFQN7FN1H5YEFA41p8iAhqVBt1zCQ2ss8h9hjCvdDw84CbTDK%2BE45QjuibEc%2BqrtmhqT9xX6QYK4R%2Bu6XsypKI1%2F9J3%2BYXIyBzuenxXKlyvcuLuRBqkM8Dw2n5E7nqaBgUkdgHa8WfowPU5C%2Fbxi5Bool9ELR6sG8RZmDAIPm2kXE%2B%2BPulgenonQfk%2BeS2XeCi46lSzWa9QkLLSF9JMHLcwgVh1ewsZsCrwp%2F7eBrwUTSB%2F%2FVdN6WhxzD2qNfJBjqkASwLn33U3lBhJqxct4ZQ669vRpgYbVUD5d5A6QmK1OoVVTXhuMJWGcSn9iFYNc3H8HqKhgj4V9suaPe7HHw%2BFwrvSQW62mcd1el7wFupPj1n3VKEH8OoaoviUNulic%2Basc85z%2FB7Vrmo2meZRD7gUoasxNGgRWL1X4Pq3tD3QYL0hZNSfEGoS%2FEPfX%2BHd7SFAJ%2BChxcnrahwJvoTASDMMLPfZaKZ&X-Amz-Signature=c243dd9dffb95cf852cbae6a54e6c3f821344b580df71068f1f9f4c04db5f2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

