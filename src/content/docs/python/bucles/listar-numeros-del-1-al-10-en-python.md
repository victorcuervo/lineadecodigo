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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQR3YUH2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxRIQ%2BbHobhfO8NYzgs5N2n6DXJkrqZF527qgoz97BjwIhAMtu8uE2uw5ELyDONrH902aqd095BfppbqmV9%2BujF25HKv8DCE8QABoMNjM3NDIzMTgzODA1Igw46B2P74Nl4kaPmokq3AMNzHDWTkj%2BhYuMQNMt%2F75z8x0SVREc4qD59uARnKZy%2B2A9XlhIYBMnQtZVjR1%2B9PPhcL4wXhw4gy%2FaehRtrl1%2FEZpZFaw7vdSFxjRrHTU%2F3wA04br8Bdgxxhcm9hRj0xdBztQuD9J7GGvaVP38t1EHxhmKYUMLRtheTICm%2Fm1IpStklzZkGE3HidrC5Duc4%2FqYtaPTUwLCErhZzV%2B3vlQzqx9p13Vr1UCbem%2BT%2F8K1jt1r%2FNtQLMhqtDdtpv4Gxda9nc%2Fxy0fSK8X5wBdNXsnpxB1etAQTWTXZL%2F%2FhDookJCbt7K0%2FiZmb8LqB%2BtRb6ha9KvUJ09rbqLVmV8%2BI6rDc5pcqPIrT4oxoTaONBIxL3P3mnLTrrCIiCYjkjAHSafRoU7pSqvCNJJ4ElHNhyL9d5Deqs%2BElaRFv2H%2FlIw4z%2Fs7ecqkrn5tp05cxh6Rd0EQ%2FKVln6gvs32ORyscRao2HJJNI8EoagV2aYtz9xddvRrbb8patKWwBzmUt9sqJdKBhj%2F4lrbc5Jd2hH4U0Zhp1N3uoOzoxtsROjVfBf0%2Fb5yJ2VA3A0KOanHHjDHn6SWWt1kNuOD4oJI5WfTlkNt3UF3nRIRTo%2B875MBKEUjTc2bWslIYDSdKvXnVLsjDYjMjJBjqkAa4qXuh7J4dRuXLGC%2BT%2BFtTJ32IHOL8buVh809Sr6Ym%2BJJibdQWU%2F1VyF1%2F0JOw0ULZwhhCjK%2FaAXje3EsXT9YOLcf7IR3CKCZY9gISxzBBEbDHx6NDGx7i2smnjGI8YE9nB%2BKzugZKWb%2Fax5S8AjUoaGacR%2BLVIu08XnfppL5aT6ITZS0yIORaTwpAXjnsMYmLTv1G4OcJY6mTpSJmmqM11t3%2BB&X-Amz-Signature=c27dc9d5ef512fcac4ce332cb2e9c5fbaa38957c398e36c87089ffd5bf952d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

