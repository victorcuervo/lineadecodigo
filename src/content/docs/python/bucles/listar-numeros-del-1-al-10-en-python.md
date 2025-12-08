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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGBWIZS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICM5DQlwhrlinz6IdtWW0LBkA9G6V92PAYoYdIJ%2F448mAiEA4KIqNcbg9kPYreVuLtssEuY22cQPz5KBKYKSR2vIyEkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZSn5wrMhAuyML5DCrcAzm6nvlV9ii3ZxjcSCdgbF19DGRWE84kvh%2FMRZ0njls%2BQMHXncMNDIVnF5HhoTHx4z9hv%2BoBA9LWtdCQ3B%2B204wSpcHWDt80tWN3YN88A4ivPp8yKXZqnfA1uf%2Bm0yFkcY1HID2ouAdezr4tuj23f4Kt1LbBWrJVK4froAqHTQ0X%2FWX9qERLXzTi80BRJM8LPZ9YtSupuUBAtYEOLr6j%2Bz5O22PLTJhUbdnhtP8ze1uU%2BJvlRqBGefUb8%2FYN%2BNLD6aCMZSuIKnPvy4F9anbBFw%2FV5K8w913a3zxR9EDc9Hhb5s1JQZ4RCzJnOYOG10QOxeBgplO%2BbRGhEmpD6sCYPzI62JQduELxzCZ%2F7VIClx4nChIIu6vgZ39eiA5PyMRObfrtmy3vxrjor7qYC4cfe3gsyaGX4F%2F%2FA4iaFrTUyhmwXbIQsMNwWd2Rs646KM2Zc41xtnu6jmj9oA09n7OPhVzkhaOYgcQ2s8j042vUJd0uNesfH1c6H%2Bl%2B3WdfizORE3e%2FnQmHBVCC5xWEyuYR1RC4SQlGMknENVz6FCBoEB9py35hprD%2FqP4CstCUsVXTR52PzSUETvwhd1Y16w3V%2BJTg762v83LLaEq4%2B24Ru6wBcRoEB%2FsLKI9lIOCFMIi03MkGOqUBeMGsaPCedUDHpFYXpCEhUpV7c6AYjGpLlEldswb4ObHy9YSHwBJ%2F7xFlqEzzvFwxe7FumqnhtXU5l7AnVSRq2J5uNhftK35XDQADnwz30ABWxCqZQWfjM5EJ2BV1Gp95YZmyN1FU9Z1iUkxQmeBdlO9pxl4yQEEYvw%2FPb0u2sCVB%2FLD0US8jrhlgCllIMY6olUEaJm2fYdXuYtB4biBvQxtZIujM&X-Amz-Signature=92d48572053c6ce7dbbe2210b5283f5aa3b63a0c5f18c503b4f8d34f3ed2ca31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

