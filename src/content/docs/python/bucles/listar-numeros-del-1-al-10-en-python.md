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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL25R4QU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVmRsKNF%2BobA5a6R6lAWUN%2FjJQ6Nt3Jmya3LcD2AknnwIhANsJfUOTKCGGqhEmenZhI1vVTYGyC9C2svrrK2umKqkjKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDeYnRMCGn0nAK6g8q3ANcwFXVSJmWxnaMEdxEksjefNArvCPGwOKxARPlWqkKh73brAixOaEozmSbW0pW9DJkQU4gbesCPznQNbncYxnvJeiVLZ9DhW1C%2B%2B8eTH1V4sPKnwP269EeR7s5lVf%2FYF%2BOafbOntHhnVa7yoPLG1SHlgsOBdVfBpQ581PVAHcbWDQnteC5y9K845TKhyz%2BtgH9IdUChJqRH4Db4vqPsQVD8bXvxxxwOkY73C66i5r3xrOjDdnTPlh%2FTINuSC3ppncyOdcTmaZOFC%2BE8hmY9Lx29Tc48aTwKMR9EIUOaazsspg2EWgZw9R0r4bIdHBoReA%2BIQXpm3tri7nWf0Xhm%2BiKnAT8BRSxga4%2BhsByQK6onyXSKGBYOYBVd40BVeIDm0sNuu7ilYECiPAqIMSOyR%2FYG550VsQhkYOQJIeGOAF4X7IHCL1tPFZJAlncdzUUGw9cXLYg30Zyo39biNlB%2FPbp43m3nGA5j3LWgORLphXDxp21fj%2FlxZyAgRRGmQa2JibfdcEZ%2BK%2FMpHgoEeI0jaQ0diCd2ntpdR3225RFjJ9zIm%2BlyuR6qlMUo2GId8FNPHjPv4QhRpU89ROIziTDEaSlOosxtNx7F%2BYJ9eTJVD6xf9l3h3e%2BdexiPlVA0jCtrt7JBjqkAQ%2FP8xH7i5n3GRPbuSmGAnoYH22W7OB1ksnyxo5fZDOIvi43TD5ULjwk3TCKdI3lR2LG7k7Wzs4SgA0IFxeFG0XBFPx9a5%2B%2Bupa57y%2BaueF8RZI4q9uQh2LGppn1zQrl9KnZ2a9dFlSxvErabzwnsKvF5ZFGv8RL25oCI%2FEUWQ4Bma8HfJKqlEi2MCHxFWDaxmeGV0kS9OOxEq6X3x66dyjHxGAl&X-Amz-Signature=7bc1c2740fe28560d917ba594b00746ddd456dda4c397c9071c6247d1d434ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

