---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO2IY7ID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIH3LOSXAl8%2FnaG%2Ba%2FotyJxoCDlCW8WddWfHCI1Zuz%2BSaAiEAi5XhjTRb0QhKIzv%2BFbC2jXU8INTVHPOXnfcGB1U%2BEBAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCngaXDdUzq1es06byrcA20mNTUnJGm0KUBzis89iVcgllHhzMCUgN6ej6sJuwdUEEYpEKiEGFetK2humctjEYr2ovZnHXzozHD7RGCRO49agHucaPJYX76B93RAWt%2B%2B07yMI8QWHj%2BkoW00dVhmlx7MqLe5WsDfXTc%2BHaQXNoFnF9s8MPcb52QQcrHNx%2BChJLQ1QMbi9OksXvNcDHcHk1YwysTq16iPn26bf1FuBJ66U%2BB2J2R9LpDevPQXifvsEakwSCrhi5Af25GO6gL%2BtB97e2G7DjISsDZexXHqITcZBocLDhQ6uP06MXQTT7F9nybexKPtHoXuPSaRltY%2B5DA3v3J0hrhAzsBK0cAdiA%2Bd1YnM%2F1PvrieTH9f3XdZfsYjQ0QJlArevRiDsPtP%2FO6ZDu54BAesS9trmZrtqMyuQokl17tL0AP26sOlUwv0LZA4piRwOpq2zbAWHo%2BAzOE3hCYw8BkfLAaVnfzPN5ZmRkltMXOa4oLKocOsDQX4Nkq1%2BwusNubYARo7EUTHdgiW6lnJhitsC1vcvxA%2FSyuCbn5K0kZlEnf5E3EWMcwUgiY06Qw8AK73%2FyzqnGUyhGTYy6YCsIYUx4rtaI60HnKRtb5F5UZ3F8NIwolGP7dXvyYhAjR49ixWTlKcwMKihxskGOqUBVEunfZkjQw2Y7DgEMGUQ%2FWb2rkIA0jv7CDzSdPVVdo0Fpn44KN0hoK0R3VyumoS%2B95CPh1Jyu%2Bqa9lHNV0VZ4ogUN32P85wvKCgg4owAUH%2BmdxdLs1O9voht2PcPud5p4Npls3a%2B9V2k44zVhqTNy8SYLJLy40z6sA489fLuTlxr5n6G41CesOXulKlWvo4OMfX2Sa27IQmsglKfdld77Epnijvq&X-Amz-Signature=9511f8074d9dfaaee616efbba513b02c40acd79a136ff2ed666084f09c925e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

