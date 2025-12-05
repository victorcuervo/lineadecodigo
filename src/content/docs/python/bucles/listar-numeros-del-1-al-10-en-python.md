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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETDJYIU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwXTZg7CtN1BlAb%2BT0ZmuY9prqvK%2BSKlmLyQFM3wHf2AiEAsuUP1qHzdarWPcFlGkwNv5ku%2BGySFs7VF3u4Eg7%2BYRIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAgTaAS731UKZYdb1ircA51t8pBHA0XII7mKIqRGmlNttPyw%2FvuuWeq5tax8ERLj%2BGHkJvJ3IESxI6aCr6nDPpKhxHWBsXNgOR3ceZ%2BGpCUtIUH7YMpcoOeXD4wQmBPKi%2BH9go0HhVTSXe9HhpwccujYlFxuxea2ZlFUXxFKlKDsqgDs7mxP3THEVLIyIBIEwDnc5ZWYApxJ9rLy9DkgW1UgiWHpAzbGip5lzIiiTBHKgxA4h6VHuHavZ6BWjkU1W9AtGuo002rvhBbX1Y0twVHpgVsAdQwb1Gug3BKdZBpYP%2BlBk2s0WjFfUiZ1As9acHEgrx%2Bqhn8wAB5q3z64e2q11RaApg3ZcpVOngwpKuWrzdKDoGeNrCNYgsvNX%2FocJg3%2FcTxgpZ4iOEeYijxhCYxYFEE32dneO1VwR1jEqjFJrP9qYTjDBc%2BZVRVtsrOvDuY1USy0xJe10TZGvS%2BaARXjBP%2B%2BvLKptnF5OvSTvSgcwIsj8aSMpv0UcOMT5lEMVm7C4xUJyx7%2BsDUS1%2BVsA%2Br5wmUIR12%2BKS%2Ba3M%2BFTXqjZX3geVfHiOQhl7iJiojUnhLJ2Or9ViVuD6BJl2E0xQ9ky8rJ3oCkk6JzxDlhMVjtfsSTlIVx8PebUW1ijYjvQUN0qPIuT1gyUfJoMNWMyMkGOqUBTgLSEtrI0TPOvk2OCKQdNlgShofnXku57oRTMi17cK4LD%2BkAkjGxetmoWYAPTrqLlIoDGAS1An1ENKLp9gV1He7hN3wjy5qoFOhYIes5sQKPZYieqkbEITG8SIB3vZM7DX0PvnqHqr2NXlZ29nsu7%2FaIOyNn%2BXg%2F5AInays1ghvSMNbbvhdnIb9h8ZltL7iF39u96HlQw3rcbLo6NExorMzv%2FRoq&X-Amz-Signature=c7f8c5b54d68b0aedc575ee614d1763a57d7932b780a7cdb005de4cd7fee0e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

