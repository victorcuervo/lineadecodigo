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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVCUPXM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDTR0%2F7xg4C1mqBe%2FolRYehB4dvPvQmA5jSA7AwWC6CxAiEA4OBFy8c3k6zr2i8bPx0cyZODDVmaauvr2lS%2BOS%2BHCDYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLJkdUr3KeBsaRHJcCrcAwvClqXap6rr4YG1sCbJiBkDdEp2NRogUds7aTh0uah3sDRmKvuaPYo0IaUEqlAK%2FJX6RxBuwZ0bHjOr7HINVzIsOkykUE533BLadAt%2FwdU9LtMPj4GyNSnZN%2FTMoFAdfmiQU2K2ypu%2B7k%2BdbjqwT8bYCS%2BC7EHowo60FNAhgHMj0B1lTnVtkIZYDnRtFJdwaiucaNqIzdjCTSgwK%2FH8qYs1dT17tWgc3esTD8cIpOvzPE75V%2F%2Fr9Wydwm1AE8JGO7Rp4HzcZfPWWqXDiNSP%2FPhacag4q7uMetOLxoQOvA2VYia%2B4GsWHz3vNDUFWetDqLO9%2FPL2l9juvXPHIDOYAUxx8wj0CknJkvs95L%2FDGE7%2F5INPHNgauDpyvkKw5SEz4bqVe6kJ8qPNLxt%2B6paKkWFXFlR16Gi2dDCaDcWSGUogukpoQEurs3VDvjYhXlfD9ZG5FNopGvdchNbfyDDcn%2FG6T%2FWWyqF1LoeOFoOIGuvEFaqAsJKc%2BqMbsI7C9l%2BoxAwh%2F%2Bl6jOSKOo9pT9FyqXRo%2FsCLhzDVSGAXCUdpkLrtw%2B5zCvXvzJ9ZvcFTXoJlKKuJefLdarbkT%2BUOmqRMq4wynmIbFi4JRlART7jljaNJ20XXatV2PDH5OPnBMJmVw8kGOqUBDG7wzb6t9Nf3F7ZSdDSzW9BbBIvksJMcL5r9EIqUl9G2cvvq1A5pwnXIA%2BErWlers6M9zB2CSW31v22EulJLRWSfmC1DTnFXindgh%2BY0r3aDHIXMNdm25XkDi2VvdSAK31XpYwvEXvafn%2FmWRjywVgfDa%2BVkzt4pGUiLdycGlnSLBctWE2xyPqM37kmBUUs%2BRrJuot9cyd7nFgFfiWSYN9BMNaY1&X-Amz-Signature=0dcec3b2631d342144990418aaf77158fcd1ddaf33b957d48d3eae76747ad41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

