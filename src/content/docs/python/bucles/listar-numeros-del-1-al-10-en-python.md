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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUGIDOC5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDREO3VXllBR%2BMdnrooE6c1KOqeu%2BsqERrTcJEOcamU%2BQIgV5xB59ZbioPNlpmyVUA7nP0WG77C5RSRFCfr7w%2FBi%2BEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGImO4cHXxISWOj3XyrcA4fBZmB8eBSpc5v8Z18e0RI2moUlNUez1UIYhCYRroragucKJa10%2FnfXidJPha5y1pvhN4S6Pyl3XqrRueutyzrKITAZMCAGqJqVux0%2B6uy0Gd791dLjQF9oCnIhd7fE6MDhdQ5ffZv%2FIBRlfFavLOezj9zN6JT2Gfo68MOFWCfIIbT1sFue9qtYCA9W8d7MbQ77Ut7IlbXfOc%2F7b8SMGfXZnQIORDJ6zNWi2BctJga2dpPDcLVsH42nv1m1DHp%2B4LZvjqc%2BcCvYafKPXy5HStnAIC9Y0BlGr5975T0hDOlraVC4jSCb9xv%2BgYFoEhqeq51iRCdNBECFI8rHF7f7vK%2BMQiWidffXOAjiPsaAG3nUNgoh146Aqn6v89dnBo4lsMcPReC1YeJIwJ%2Bc%2BHzvszk2gmChUxWW0GDijeyb5pIx22lnrXV4a3ZytNIsmfMjR5Ec3FND%2Ft9PX20P%2FSteidaX1BR9mL%2BPHZqRTevWbvmKuhsaFpNcxWUirnmEFOYCAcsBGpsJhhiIPg%2BZcHmdA9t3BxvZnodnzHZgsuTU2INdv41xTTgHSFdS%2Ftdofo71lnoHc60ywqMGj9BHlmsuximMgnrCf0KtHKK9rDq2Coj8SSgD69AEv0Go3OHuMJSVw8kGOqUBd21CSpfCGkA833UTbSgP2GgvsKu55i9RUsh3Xi3GYrC1%2FWHw7yeJdXWMJCAx0yEMId8lwqDhGmb9Mmo73FdpKjf98CD%2FOt5bDxrUvz0hImX5kMRkqvLmvfCgebOBTnl03X%2F3IF2UsSmykxPJXyATziqrnk6DdCKzUAMb40jo7Jl%2BeX50K7HR9K5aUNsgmY2DSyUfikiWvt0KNOhDt06asfsIn6W1&X-Amz-Signature=a38d34d22adfcfbabcf69f03122eb8254c49239203284968be4515089a70332e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

