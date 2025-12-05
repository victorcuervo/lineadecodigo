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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2H6JX7R%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCn%2BoPGn2vJdZq%2BANx9VX%2FYKlaiLEmPkYNNJbNJ57wDAIgZ2NsGVQyI6CQ7DmANxs7lNG0FVCZBNQQe7eo8FMcCt0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDE6zuBmIeHTFwVuWaircA255jm%2FQ8LzsuSlSuwl8UzcdDS577KNgDMTyWjJ6S6mwKl4dQzWLOZRW%2FHQXqQOuDkUFeTQUAX%2Ba2K6CwWI2irqV%2BDZCoN9OEosxZfA43iSe5ibn5VN6sEYEJZS3D0on4X%2FF5lDFb5BGAArh4nk3sLB%2BZZU00n1t7DVGHJrhUoNh8H4OlNy7O8MuVc4w4vAzs0NvEl8zOSF%2B2HSgOgId4uvXOqC4GT%2B7QFtkNIHKE1wEBvQQnEV3x953yYrKOGexIbyqxHVsWX1ETH0hBJi0%2F4%2BvIK%2FknQbLDhkNhJY%2BwaxtlP0cz4LuRok%2Fjm0y23rGT66stMG4sl2Dk1RJpzSFsr156arpK0BKHsZIc2KZoWl1tFLViIQy1JD%2BcUCKoGhwdcHeq3MBMRhBdoZ9O3nC7X%2FSwscHP9q4kKTMWvB2dTOWL%2BMljK%2BtA4479bT3%2BlEPLii19k5QYOvCkCl%2FoSsHv8FCDwlWjlRI5eGaFUOb6buKTgb30ZnL8VTr9Rh0j%2BpOYNZavsbH9bCKYTWTcVS4glshEWkAbtQkAqjutdljJgkdeuxfkVvBGMaL1FcX0M2JUl2NE3feGMLIL4R4iakS2h62d6MtnT8EH6NZNK0Ox8BmoRZGMHVWuZik0TX2MMeQzckGOqUB2OpsvDkESLWgB%2FoLDTuW9ufeWU8xK3w02RwAJ6SkMf2pWQZO3X8Wd%2Bz0vit4CF6G4FgmomlhcVRJwyAknu0uAHCBvOwH1Gz0EWO%2FokWhqBoQpieZsjw%2BLqhSvQznPYojW6G%2Fh5Qf6uCJAp6cDYfBsIjvxjQ%2F9%2BNM7vWmVElTtxrFaFKwZ0pcKkjiw0eS5fpmLzYFuRD84PwkbUp%2BnqYxpUOPlKXJ&X-Amz-Signature=ca1abf954fd8e173fccf28c9c194c32c7602663ce6929964432544c71db00c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

