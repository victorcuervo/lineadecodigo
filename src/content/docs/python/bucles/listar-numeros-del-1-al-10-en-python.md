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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WFKKNP3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkCuC8ztM1wbA8sjfdopaC%2FPDDVW1PRjG%2BWz76L1BCjAiEA5z7ypaSP36%2B2XJoc9qi0zRqiYO4r1dfqgCn7zr65qygqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4YRlvDtDQnb%2BU7IircA3Jgxa1fRKQbVEGA6RlDK469QFkS8afUhCGiAd8bbl1VeyNB1B6meQshAgFFO%2BbG%2F2ACvwuHu64NHuBops7NuxaZDh%2BHVGSoXwJ7h99CyrgvgySqgQ3XYeMdXRo3Bh387hV3htWmutUF5r8ooTWeTkwa6GP9DSzEyiIY9cEwzijqc8rijJ7o8LN40yxYX6AkvjDCPqnt3ydpfngW7iIvYBwR%2BCEWevTj0RP1OTTp7SGV%2Bm5O0qFrrVgGmFTu3E2DY%2FNpV0s83tm6Yt64K2aE%2F0vBIpkImXvXk5xRydsjJsKlqktn1U1aR7BEpAG3DLDCwJ4ACRkRAFZJqdRvJKfWRZkgmAteFBcRYydzEjJgBRJ%2FyXTaV1hcD89FK2d9otwWbvW%2Fxaor83jDV1hdo4Yct5nRJfC%2FEk%2BA9SiBh%2BuC6kVw34630Zv%2F8kAp4JAw%2Fve0kYbeeFDtY6pQuBv7Wqy%2FM4aOoFg%2FWrVDl66YApgFV0JBhpqPUslM6%2BuaMwdiYdmzKcOdF0IVYCyWAHgWxdNAOn1qcHS1r6Wo3vwmaqUmtWyqDQDEnBF6lTT6hy%2Bk8ckz%2FYFAYaJ2YWy0M6%2B7%2Bg%2FaRBabnhXTGiCM8Syy2JbK9c3H6DXldzgee2zxPB7fMNiz3MkGOqUBLEFRbn2%2BxMIXkycbtYqulBAEjRBhp7JRyvlu7sPODMzBvaX4wVGdCtW2jchl4FS2n1pY8%2FUlZmlMdba80vcc9g9wSaJ8D104AI49yKde7u%2Fq%2F6%2BVtGizty%2FBOA3NuVgyNRz0GtLGMkHS%2FSEcwV8zfzSqWPqA8EK6%2F56rt%2BZvQaH%2FLRHwZ8WkRjBYPJUFCZUMfZcF7Yn8Hoqk4%2FrtYxw0SxL%2Bgkwd&X-Amz-Signature=a4c45be46165ff5d8d2a12ead65704ba37bc83882826474073655cf9de463246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

