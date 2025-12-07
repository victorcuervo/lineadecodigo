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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWWFID2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FuK661rNe5wGw4swyz2VmEzHeESd7T9Kr6SACC05OswIhAM02vhinzXCLqzBzpGWg3JLwdq3axa%2BTGHxNF8eMOz4GKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFoVzZWTncyuC33w4q3APSTl0OavVk1Qd%2B5I0brAIPiY4AX%2BF3SAT9Hx9K9cWR0DVCN%2FFwTVzh48qzw1Td4Gr3QiKDqTYi7y5CoU%2FcLtK0cNU%2BPi%2Bw8dJZL%2B7FwaHxXJ7atmZB%2BqEiUMfFm8TO0%2Bw%2F0q8ClIQqW1OWEdKk8zp9pQszlpUcvYfcrFdGXBa3zbs8R3toyIMI4wPHLYl7u95mj8ttppW2koYgue8MEe%2B4DthasFoAYuOvcHRJKUpxMVRHpFtYzb6RPSHqKTw0%2BZ3oHrBKZJNdsDvACblg9nBiWvEmrKp5AHWSJmZQb2w5voAxSmZ8%2BiAw9G616rfk0hb9q92DDLK193zX0egOXlUYZ93ve3Ca2RoE73EnCyiQG5dl7t3dXhOWtfF0DtC7IHHUexvIOndpNdK8gyYkdbWVTb9%2F%2FmSy0yDfGf%2BGLF5ZTI4le5iikpvCtUpi2OiGzENDPShx91p5JTWPgoPuNOXLYddzvszCzhwoRO30YwZ2nqdFwTpTxS8YnySVrCPwYvJw3dKOwueiQf5uy8KWX3BW3VZnygR%2BydXocwXzGhnCwi9%2FKBX%2FYZ5UDYN6yUbDDhgyf8Gw08HVFhOaSpyWvTBRzwmvKV5UfJLRZJaM5zJzgGLhbPRJyOgHy%2FesDjDGo9TJBjqkATpdrKnxAd6XAUy4n6xHAphodbeLFRC%2FRrGGNQxR8WEt1NxPUvGum3%2BxHYrXxsOgaHLCbJ0U6vR%2FJ3j%2Fwl1d4mHB8fG7umqtiWMwW%2FnaOw%2FK%2FnXFJa1PQSq6UfmXhxN%2FVGPtkq9o1G79h8ewxBD6jwOqsk217lt3WXZhyt2IyEmc8Ygkb%2BSJAWm4aZAiQ%2BL59DbAiyhisg0ss2kiQnjjShY2nsf2&X-Amz-Signature=219af6a3c3b66b230670284a30976b5a224de1881be10d7b38730f214230cb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

