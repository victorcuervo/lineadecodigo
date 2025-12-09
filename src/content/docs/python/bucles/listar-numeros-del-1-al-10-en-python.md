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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GZZCXS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1gCvV6SjoXRpT%2F5onJQ2uAs4IB9%2FvTjD4tafb0Wvk%2BAiBOtRW5o85uyWFqfW4ucYVrqpaL2SmzCuo1PlBf8BJ84SqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvvwa25W8bJMAlTAKtwDyCyVwl4LNZ%2FxmPylVFSMcr8Dgl9gtuNQJhLGroq2BL5TeMM7RpE4SRd6cj6c7WP5sFXTCdzc1tRzrfwTO%2BL1ov%2FE92LtTtunKTmFoS1DZ2jJoVK1OMfazqvB8CwOfRmztHO%2FrK6UqtGJcS0nLdJ86%2B8oItVyWLbQkm9UnvG5zR2ulgNuTS%2Btv2rJBRcUV1ZeLs%2B0qUEfvv4WdvC9Ad61xsf3UqxvB%2Fr4r2TZuCYYoyU6lLATde52OhU%2FjE5exl%2FX6eFeVDlJa111nzY%2FmPX0QamW1hwaTTAz5NZ0d7KPJxkQzOgVgc52DUReoT2LGHdbco6hYP34q05EAre5RP9U0bZCIAwPUYRrnjPsvVoZE2Th4NTOydYa72pyEA5uaRN3jjjS9hXz9d%2B2X%2B7SYTfwhzUPIkF35MeFi3ofJ3EKx4gGjf1yJgk9XOGHyXVBebLfQ3WIXgkPPqkH12%2F3ghZIySsktd1f2MpiMp8WCThv1tBM2I5CDgcvDVXSbpvNk3fGURJqZqPD1knSRmXVnpoOg0z1isBWd67MOhGzyUOBw4dAlL%2FpQjYaMwdywOb6NwF1dXkW71BCOt%2BqSV5GNq234iPOExNngcfVFwyQ4bZ6%2FpLtFXQ57HYiwBBjue8w0OXeyQY6pgHWVjW51ypVp%2FP2kJW%2BQBYNBOHpYsq0A4Eoqze9gerNUWrgJ%2Fkfe8gHnyal7bcO5MF1jvx9E%2FtJZt4dlYmyQPZvzCozGFziefcJ1KOTHpB%2BIvZeF5D791bC%2B3mycZMeSj3v0aSrCVlbwn9nDoLCuHBRuVL7QR0PYvjgGcCGNjeBsCC9yV%2BXPGDVHXV4fZh6tusloTkwKV6t%2F5Mw3UwLP0SPLsm%2FINtN&X-Amz-Signature=0f65726237b5f68d102788292ea720e0b4fd9150bc72a0e67b2816ad01731aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

