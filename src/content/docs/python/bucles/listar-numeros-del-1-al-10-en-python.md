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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z4T77UG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0XC9rmX0nUS9iTA%2BulQMRrqT0adIFHhtyQGay7yAY1wIgRlMcpopHWeOptNxs6PT%2FLtwaip4WpOdARuS99pQ9558qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv9duHUGexvXovORCrcA6P2b6qvW8XClDx8h4zRf1MbX7YZ2TXiGNe%2BCEcJWLGzxN2ottpIkeEaXQ3%2BB92aTyaNZ9oNbGPe5L%2FP7C9G4CDBvFZVFSLtUGCw1AJuRWK%2BWdMXmv3mMAyLrRoHdInPqMlnHSh4yRejgmAktzik3hTaJZHrkpZOene79Q7DPf1Jppo6WA7ZgD0Y4Uu0hnhV9mmxCi24SeqpojjU0AhsIhP%2B58MwUBuWNR4MbtwUhyaL8DOWK%2BxN7e13aRZecnDZ9sbkxlqR01tbzRT4%2FVicTM8Vxo0Ti%2FRfE43U%2F3OlfQsSOHG%2BB%2B5zICeJ85YdaRp4H%2FeT7WVKMLmHYbPTKau0w%2F%2FG77%2B6HTBgPlWfW7wiNeH2gHcSP0%2FhjjhL9iaIdC7kkPCzsSFm0I0OENMcofrKX%2BjfW8dejjFmroSynzFAA9cFFmYLiPxkkShbq5jz1uOchVPPTM4Ps1NErhJOM7VqMqVH7mp%2BkUzzmFcvoaR%2BtSe7AUxYTU6ktIrC7iuFk3aahwRCddJ7dLH0%2F3JIUsrQEMq7tjtQalyNPS4b1gC9MzLXm7gy4oVm0pG90YsaQu3LOE92zRwQOYjUX1Ty3afZKvBssBsu5fiNxVOcoF8kC0CZGhvkULTki%2FHlPxzAMJDu2ckGOqUBe8rbsimW5DwHyPhsoyF3VnuNpx9Fe5UaKZ6leFIsUN%2BswMpE0KdVOubEeE4Rw8fxksRCU%2B%2FSCfY0wEOZpXHb2HfsfBChZ8HXagOpUbfd%2BNRRlngX6l7XIbPa2Rdn6cUUOEo93j5k96mE1VWG0MV%2BqZbQ%2Fk848XlKDvPDXl%2BZD1mWuYwoHewGEhFBLY04O2KeD2KxXDpA%2BBnSyhgUD9n5EvvYcuUd&X-Amz-Signature=4453d3fe1766695adb04884d4feb8af6bf4792ab4ba118f124bbe018d4e926c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

