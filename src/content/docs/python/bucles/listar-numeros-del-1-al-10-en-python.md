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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MPGWNEA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmfkDMvA%2BVQvSjze60leQYszKmMgXkgGK5aemIaPR9CwIhAPCP6bbFtg7E5Jcfl7CSX%2BI7H8KUAtPsGCOUCYu0Ru1fKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGvRLp84QcPro8LaUq3AP1u%2F6%2BZy6X1kXyLe4a4kHYvm%2BZEDkOBVD46ltg2PVNUZXFgqwhTIrw4MEnPK2juFc8m7QDTVt6tngXZQGRkU%2BohesTAdYfICM%2Bhnihs6ctLeOcZGdbOPQQbFkzGuMQZxFLyNVCRFICv8GlehUOfkdzTejp52MW3iPAedyGN3PMtEvkClEjtr6CBT01ufFVfNtPtLXUhDQgD84%2BucRRTHWm4uQx7rL892RQX9g5bN3JeX9O2SsMLKS0IW7JVU7ut70Uz%2F15OeicDzgchiLsid%2BV8YOHZ8r62Q0ydvRILYfEjnC3hCq3ZzhmLI5wI6Xfc7or9VAR%2Fq9zSYzrYhe3anmEOqhOl1uaichlIgfWcM6Xfe5hshIbBHmk5eCAywejAXRhySC7%2BfznZOXQVo%2BKWwG8Cioo7eLVQ7lF0Yy63nJGCCy6uZNzIpvSExTS0x8IFJ%2BQxMc3rEsIHIuLMSYTbBAquUUCv%2BCyv3GxKhBUYJWMYiTFYL4NSkjoH%2FlsPlBHIHQd3NiKOypbpn%2FGHbUwZ60MXuKovPS6sAsHx8tiYsRt%2BcYrHORCTk3AXTLshwG7ZbjqtTkZn4USVhum2ixUVHsY0SGpRhxVXrQ1kCYADHM9MOe3IqqJEpQA6d5L4DCo7dnJBjqkAVc3rDGFeoZNQsofrpOl2Vl%2B3L054kHj%2B2yiB%2BtFRHYfFR0UwnpjI%2FOSRsRdi%2FMU2iiWC8qtXZycN4d%2F9rp9IFcvAG3MmjI6My6lfBF2vnaR0QgCJJ3OWeNGDgmJ6TXIAff86jL4%2BNBUSzM5x6i9pAYS1bDLhthWT05QXwTGLriPUcgfgFOAVIvWScncouE7o66CvkXTXAXUVGT5bXsG6HVKZ7q0&X-Amz-Signature=944bc27ec656cbcda4d37b08324e9a2f10cbf81b1fe516a871b7e79c0d5950d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

