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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIGYPYHM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1AhaMxehwR5j49uOPZlyA2CtPQ6eIx6aTMX%2F0MVIuNQIhAL6%2BxsbMzvJ1HBtq1%2BMeqR8lLb2fchyX4%2FbldF3P1IejKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYVooXjNE3KMY84CYq3ANt4VA%2FLxiZaeh1u7oTX3wdzlhjQZIjOngGLhw8Gr%2B1ndcRCE70BxHE4pN%2BGRQRrfkIa7BmRFTOVs5IDrrvIJ35MQsp3frBYQhFlTS%2FqfiHxi80oPUt4jTi6vN3kVIuPnGt2u2XEmnbRA%2FwiES3jjeh9utEkhPHUfiPLn6mYx9qFFaWXy1AvPonsZN8JRpDf6tda6iFh4u766xkttiuimUW%2BnSVCXis1PZYbpwRslR2dW7bo5FMUYenc%2BEV2WF%2BLM90n8N0ygMbezojef9%2F99rRN1%2F6en1AbDiJbPpatKhj2FVWnTgrCjvxTpjZwyNMLdhQY%2B9mo70pK1jFn5UmXBYnPqn73wc8N35UtN65tA3sjxgO6%2FhFLruAn4ImqgGDNULQrEdkiwwlfTiZQGV%2BzN8MG85M8BqCtEMG2b43c5jqFv2OTnUpou83U3D2snySz5jQPUyU6utLhtPyO4cQcF6yT0e5ifvwLb0MZTvvdSIQ2W9lDCdBp%2B%2BSY2ljv901sffGyIlSxGnabhv25JxWEHeqWpYsUpaLkkNDAm2q0v76OyHyTI9DdFNPYkyeWhmWhHOGf7p5nUtIIeGB4mxz5RLgKTo0efHbZzV1xPBqKbNy1nn%2BlQx120mSw1XT0TD%2FhNjJBjqkAWYdUybQ%2ByIyntd3JVsdgfXysKLtAwyh%2BgdcUekmDR13NSP7y42GKmX8dS2eeOLdfuNWbzP7buLyZqkKh71qm6sGjCRIMWm%2F2WWgZjiJ4qQNtGIbAoKWlzIJtlN4N9KC1m6yU3LfVL9OwntsM0Uyh4jLw2vH2kTUOTMRwuMYf%2B58PKCIVWDzrN1j8XJJ8hrjo0KgUyxNK8KInY439XpmFeMOmUtK&X-Amz-Signature=afca2d0e40f9afc8b69167eeb6ada4a6096c6e2fc9a08171a741ac1ba128af21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

