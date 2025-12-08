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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNM4SYG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtym9ChCBKHxvxM1yOTsBzQiwuflHKj7QDg8BAxmB5bQIhAPc3AyUY%2BPS%2BxnMfuPFn7mx7NCwyp5KF5cCQAZlChbZJKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLxvep1LIrf0zaH1cq3ANCiJhdC47JYLHlbmE4NIdRO0ejibZnQpgrJShFUjvYR18KA8aektBLoUzQ4X2VcnZy5dPESqAEakx7cJAy8OYm5UTi8%2FKEab6qGb9ROUxUVHEoM54GmRSRwSw3ZpClmIbMIwq%2Fcv0WS2z2E6RGdY2oDQwHlnOtqxaM3XylZVZfy%2BTw3biqTNe4ufhp2Wdvtq8mrV3u%2BVPVONJfVr6gP0bY3er7ZI8B6Cyz39DjXjyWr92hHZIbyaV67r0Il%2BHBKeOs48Z%2BtYHP5JyVCAsGtM%2Bt7vCl%2FkfUb%2FwJzHhb2qRk7VRSH22x0bFVO93M6NywOUFqZWugpL91kcBd%2BUsaTXZlB2G3CPodnzXT1JxEWk2HEKHDjjXIleBl9D5IF0IpcAzYHXsrAG%2Bz5ngEfQKB9bci5qM6jzynk04842rbC1IAIYI9m57NM8%2Bde1UFAIvgr9M%2Ft%2Fiu6ujaWUW1KEH9xl%2FuPNNy5dcGXSqEwuDHEwwNbrVngcxhoiHbWGvq0Bogrq0yAu%2BZu%2FQmzWddo%2Frsvbrw60W2Mb5lwpDxS9Gb3shmZPMJvMrd1PUnehsOnyhaIT93eOMza65QLLmxsST2hOEDskk2ncut%2FaZNN0fv6A9YFmxszl4tPdxtyGc7xjDDod3JBjqkAcJmCfZDw56L5Lrjkp6BF%2Bh3W%2Bp8od5oRj0TkWmcaIsCVfDU98AhSriAu64%2B5yEfbO4gsPv%2F7W2Kn7j4U1rMQIMJWcHYpojfDKAM8q9a9jAklo1b5WPURB2C315bRzzExlaABX%2BwrqFMyoZ5tvvZRxVMLcotGN6gB%2BREmhfUyWtQrlXwLRddUTqw0lzDh3NWvWZz00CAW44WJg1TnXoL50pHINx7&X-Amz-Signature=747a11f25c5f4feb1c25e825e3be26ce1e2f653e44c1d3154f848feb40e5520d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

