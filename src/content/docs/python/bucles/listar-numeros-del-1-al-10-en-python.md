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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL7RVUFC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FrPDLhZnk9ttIFXD9rHaxiE3XKdBLBx8Zj%2B%2BU2y3ltwIgCnU6KJ%2FMq0MW52Mxt05X5M%2FgRSQwSlEPBLRp5FLngEYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCuhXYusSFNYBROvayrcAy8l5D0DoiVQ9Aaa%2FKKQjpWfeQBrwCpz3DpYA6WiXVessZXwa0eHRGYTo%2BXZVdJb7plD7iMhT378%2FVkWXS%2FZzk1YZYR7TENFc590akj6amm8g0lkaSJIv5RenVsyqAo016D7%2BB1qjJGq2nC0oHxq9hfUaP3oRUrmOI%2BfO%2FrWmbBV8ErOJOefuV4ahRFvGPGhhvczziuj3ayynL2QR2YKvpVDOyoTkb3ctRA1CQ0IhR%2F9ZoiFJGVL8VQvYPjUi6uigZHM7yzrZg%2BZzM7HS0fVPiunzyfXkK6mEOdG0E9cD88N5iQKIUE%2Ffa974aUa7C5kVXkLo5K%2FthB6I2KemG01Cdc8SksyYq%2F7UIG5NVKAU0hb4zJPB4L1zxpCb%2BZlb0fwOJSn9NRYmgH%2BlJKzKT3DSrc0kbKTsCv5v5VLV88UDDVBLbqM0PS7JJcgsnBKcegJg1mUv3Y8GoZc7QhIdxAIM%2BmzN4M0rG4UP2wMqmyGHihu4dLXzG%2FLhkW5qw%2BFv5RMVUkvU6yHMAKwQWYLFcLsZ5IE8ttJ4HpRUL%2FoImBv6RfWA5Vu0k7KRy5NaYwXpvcSBHKjYqsJHUZOvf3HWRhY9aAtMt%2FNRc9%2BEcj%2FLRklgZg3cIvAU7PWqu%2FROuxNMP%2Bm0MkGOqUBRmyujtBnr8lT798BEEuY9P5wyap5gOgU9M%2FAxSSOO1Q0uXZ2PBld06G9Rke3A1eHbsnL1y4VCtO%2B1u1Ua58Jt6yaU973ZFdvOQGGMIWWr8Vyp%2BtKGSHYC4JNwHg%2BbJQXWUGevrMBvprxEPS677N3sn0jjFxR%2B9xkc1gB8KGJr6jV6fzAon1OoeVT4p8j9lWrRFK8yjP6pKM5xsWHpP7wDzJD8Rgh&X-Amz-Signature=5b08d69948e58e671d14f29b3372599c8fdb135a7fcc99e1f5235cae5a11c19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

