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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVTOTSR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDf6tWn60YnsiRVL7IkJ0giFt5K4V01mfru9htukr%2BajAIhAN3zEbmCKouSzZSQ158uwx80ZvZGK7dT7FcR0AbGFB21Kv8DCEQQABoMNjM3NDIzMTgzODA1IgysJFDW30wdHnzQcVoq3APRnN4RvAHobzNuTlyoigB2z4D18ip23Bf5SJ5FzkfCenOjNqX2ea1rSNTQ%2BBtfN0QtAiMhttXM93wcnGLYFFNdSZTDfhqquIyvtFg3KDhhSjQig3IlUBUUEfD716D4973oafW3KWy%2FQnGqOtgZaov8bRIvAyFf5equ91ogdUV0LUxJFxFNdCN2mj%2BLLIqppLIuMo%2BDi9a2nHp4KU9fb64gYb3V6bDNqkWE1G8obu%2BqyH658lEkY5VEbY7YGJ3cTzEaO4ZFPeyI0VQ%2FOrpNVgFhfCQOE6M%2F5UM2RNWrmmmKTRSQc9%2BQsAOnslzILQmxgn%2Bl8eyR81DapwKJSe6dXRo1S8hCybl5QYQVGCwFFM4JIX%2BUWRn4WO9qOQ1Vu2lnf7NLjolHWFVFFUO2B%2FDFFjShMwc5OB8TqfDjnDQn4ZtC2MIukU2IR2frN4UuFj8GTZm%2FEHRbyiODen%2BAZjyEjl13rBr6ZiHzeQuZPvG69sQsg8vF17Gk5zqln5F5qAZn8GQKm3SIXTESdjaCeEmtibR6rIXHNTAAHy1rA%2FrOA83m5NCmMlH8Q8C3A24YWJM1h3XJAbwKjhsQe%2BgXeITFw8Ap9P8LO9ZFfIzGwlazlPQ5a%2BEc5co3eeUnsMf%2F8jC0ysXJBjqkAfceMvkBYFstEXEd50xEG44aEkf49JMQ8asMWE2PJ8wr8r536u23KLj%2Bjls6yuPp%2BvoFULY1zpintxGr70P4q0MMAhdqTVLAxpcb9W1QoNBVuqQAQv%2BKjr0%2FEEsC8OiOtOE9B5wi9nvp%2Fi5Z9rGaAx8q60lg52NYW7QaRG3Q%2FhzpgGUf0fsuyfui%2BKLfXMOQEa3cjV%2F5ypLHUpWXP%2BOos9oERWRF&X-Amz-Signature=834becc163c24df72e613ebad6c4ebff7e8334ab00739d4f8f73405341fd60f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

