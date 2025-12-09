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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W2JDMXQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEigNOKhQdWvD3gj8A%2F9ikSLj%2BIpVDX6PZ8rPCKRm%2BoAiBxE8avyp3sF%2B1dMYjpd7aFVfmgSvn8lGQ8LxjcwHXmjyqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2KX4qnCDr%2BzXibsHKtwDDPuksDlfBbEKjL3OGiX4f6i0zBDb3ChGezXrl%2BVfRELebhEngOJ3Fse2AxQF8HAPuHmoLlF6WlSyqd7tCJ5tFdpLGBB4xsJG5OyYpaqQuoc%2F59t6UZvQBaITERIcGAm4F4vHEwafR6X8reUldS13sRdA1TSot3Zin1uZcCZb8jUzkDNZK2zOhra19x1sRXzC3BxN3XceLeI5hALxDsyAkDSF9XNo9N6KH7bCWZ0PXBXMTA%2F9%2Bf6xSpeVSapglXAzxOo6hmer37aXbvA6hpnp9hvwlucrmPSf9c1uTH2TrioRMrhLlGCnI0qf8c%2Fvcqs5hB9TzDXnXMFHCXht36wag%2BJqQ8aYfsfknagN65qTrH9WtBM3ypIu6bnpbIYoWs58wZPk2hSON9EasaBGN%2BpEVqWfHOYmhPZHRFk5i8QLUxrj1n%2FfcOnh21S21MyB2nJ2zBfkKBwmMG9E4h5%2FC2nMGS8Xy4wLzuKxFZuNW3xvEg6KaGU8q4aPpx5EISFxig8J%2Fb%2FRdhzbwfR80jnccAgyeYIrIssPZl2zACKh9Y6kkfdG7SJabvNSoiWgwgpoaLOSao6qB6rEznueA8BmHXY%2B5B6CIvNe%2FSi3irtPLFZLdaAZqiHQAJucjbWKHNMw%2B6TfyQY6pgGwgCIzPZm0FLJ9qL%2BkHjDKTam%2BbCtY731Tq4yTT0cpWNblurTMY9K%2BNDAygY8mtSL3fLwB1a8%2FN7OkqRbWCWgVsyPKWwH42Mzl9zOjneoSd%2B%2FoiLadADcaSOB1qr8dh5tTH8FQncdp%2F08%2F9Zwp4m9bu6wWGixqqCeY3ED944S74kifZlkF%2FErMjrXZMIsISMzp3omcDyHheMtUO9x56JPXpdpck2j2&X-Amz-Signature=3571ec4614f351a13a8dac53d1af3b13044e7b1b92e72da1997ab2b74baee6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

