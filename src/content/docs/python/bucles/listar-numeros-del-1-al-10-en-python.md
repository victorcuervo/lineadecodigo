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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TUELCQ3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHI09NBWsalXUkO825ig2A2dCD81fsBrAP8h%2BCplkn%2BAiEAm8L7mIZvbX3DbxmV3YZP4ZP7D4%2BmhI41QTGP372M%2BuIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNil4YKeM7cquu%2BUVyrcAy6tcIVnMxzI5uK4Efx2iSsp2YZ1HwIfTu57Sq7UeMny2GCJ7DfccjTK8sL%2B9jkLeQKq8fmuzKnNrKGOYrZ%2F9807XextARAxLjbo2rRtnstpo%2BwzJGHa1GUhFcdR2WR3aYdadMdtwhmeVn8J8FB43NN4kvgujHsBGSXi2DI1DJMF9sr%2BFMi7ASRhg%2FstYuWpbjXcSaX0VXAbI%2Fral65vACbleo2A%2BKwSjl7QZMwOWZnJr9Uo3C%2FgF%2BIyGBycDtKu88kHjN23WN0rZn772x%2Fn5niOfXJCJJX%2FXKR1PQkAQQ%2B3cqVg%2FTDuzPlvNQvKb9xZiaEoER8eyU3%2Fd466uJYHkEoxiMOT%2Fe%2FLwYAQh%2BBbv6bmUhRVLv2D0gZWy8%2FZxazdthFEuGCjuqhdujw%2BMwKscNP3HiaPkD3yANMhzJtxXSc7bpd4%2BD77gas6Y0U0ncBt5dfzCI9GOLDBfBs4QWpIy%2BpzUOC0%2FKo42213wE2DF7lPL6ubdrL5lyPm0KYAzAbj7PpPxwrviTj65QmdGBmUpZQrs%2FCTllj5OfIsvS%2F6nSg8CRPkVmxzqw6mHLYkRUthdet%2Fmcc2sEQaj53vwzHsxM%2F7MqgN7g%2FCG1rD9U4bV35GV8YlAaEt7rG%2BY8%2BJMO3G18kGOqUBubk1JPfsFeZ%2FKIo07gMvxeRZufO%2FW6CvpkDev06S2IxHDc5HL%2FHolI7xa97ckf9MvplnT352qofzfhv92gLbgrx9dc3HUmAyIAB6ca6pbmkS7PLjM7S5EM5LdXfizr25xzET8lI02vgLHAd%2BOwXBhbeXmenH4dnDNjIq6gPhOSyWW8pDYCJsq0DAmKbYvJXDJaqlo0MbLeK9JtyDxo3Sf9gO7%2FAW&X-Amz-Signature=769cba11a30019f7f8383d661007afae9060cd82c858a9d9b94ea2b9ef9ebe5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

