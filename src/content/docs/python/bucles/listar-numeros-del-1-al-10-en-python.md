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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA3D76A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH6IUuVI1tR3UAyrpLxcGOgJiLLUodfbW8ruhlRyWVeAiB4YKhFW2MWGNNX7b1CK50tZFoadEwpTMPMotqqOy7TqSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQ29DNJ29EEFWIluTKtwD6VMIsHr7a5Dn8YWgMRjJLHS8V4ZT2K8srsOvA0PzL1Tjpt9ovixkUVBjNtPOYEcycgIt%2BMqshGswS8rGW7N1iuLYMn7IzpeBCuRNkGYNAUy9wmTqdr8ZWVUdNwm9Aovb1UBYoDNh480KTKT%2B4gnEglruZ2oCsCWLwu24bxrCisKSKWcFiekD3JNovqVt%2F9SNPYu%2Br6mJgNcRflzBXBm4po9Zm5CloClpjLnVTixp2gyInYfJLWc3N7fy0prwU500sp7oQF%2FgVeQMlC6ZIVjF4Qpne5mSKY12YjdHCFfd7YWNPO9SIUNWguVKeD3HgURH3oVfU%2B0VQohLsPm4xeJDYSoBdCJQAJ8%2BE2cga2did1WMfQNTdVhLG9k1lQu6sKdEGXkGw%2Fg00PyDnhcFkuz%2Bow2cGi3EXQqopt%2F5PYzAk3Bs%2Fx1QCGlIATL%2BzJwHH20zsT2GxY5P5AinBJhvypHW6YqFOLi7FvSs7o3U77FcjRvw9f9trjh8FVjLAQwEUcPl1hEabj%2Fnlhg5ktgoBbeZWmjIkWkXsD3eEV%2B9tS%2FTlIds5V8W7eWc4Y0IoRBb96j8vmeNGcTA%2F6T7KjmPLwZZSok6eaqYr%2FoxqQ7de44sXGNNoM0v8jnBPB3YL58wy9TSyQY6pgGmCy118liNfbudCEZFKpHpUuZuEeskDbdlqtwsIENsIUAY69Nfkx8b8C9mhiVAQQF13TaNRdvAEIjq2MxNV4cAGJeSsJkTTvMSAUfOYm4SWQOY4C2h6eNKpzIgOonHUWVtbHJexfeCO%2FqWOLrKtAMr825y%2B20HAm4I643GcthXG5Ov8aUiFN64zVuycI1uf88wPMHcGwL3FPo4P9Lk%2BJIEsBqOYzBp&X-Amz-Signature=502db0b2d0a40311a9cafcfb18a4f933747a11a7f57d68fafbb33173f4524928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

