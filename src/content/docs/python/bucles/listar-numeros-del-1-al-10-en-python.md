---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FUGFK7H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAtsKdtIIszTYsU%2BcSJ7LA8KbnBr%2FX2GwQkxt4Bf0u1eAiEA%2BrsuMUtKPivV%2BSSNPK6ZFoN0bJrCCKasWQAD0Pp8%2FSMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGCDeIV5U3LpqyyOkircA4%2FvCJlsecSGcHGq0JRfwPyO11MRXqF6%2FxplFi2cF9DVrgpFhALp%2BUOnwyFH%2FIK4i7%2FzVZSy2hbzKTxgOMeVRx3dK8lN5vX3K%2B49evyauRQcTWM6nlbEM22mYq%2BJThJ9KMJUmeR%2FKaTd6k3t5cxOS7PD8ix%2FMzWaUOHDURPU1UmB3QYpJOrmm5oqnLLVQ2E86AuXW9jp3xxS5%2FRartmbIq%2FuBbhdK4gSSjcH01NzDSA0DNE86D8BOXAmmX%2FED39SkjfDIhtdlGg1NilrR8yJMFXVmGxS0p3ol3cC0Nz7WTiOmMiaDtetGe1ouRa3CeZ2uSpV1e4h5vYP4Lir0NJT1OjimVyZP2Khit8qCoVcTexcCio1zXSL1njEmL9GLuS5y2rZ61V4l65otIM3O0CBvTyTtzuYwJKs2niBBDeOi4zsbGwHjPVmqPcJav8Pk14a4hlZtlDx5IMSk9%2FgWartXMKG%2BwtRN51kjRJP7O%2BeXkQDGvHu9uWbYa1069blHCZnW3G0DQmPbG8Apy6zMraU4S0SY9CLcxr6YK8Tpp8YpJ0UMqYLky6XsbvGWdbybszBnuc3R6rg402JrSiFYAX0B9dxAREci1XQ6dpZl0krjpI%2BJ6hIy%2Bvre376g2yeMOPdwskGOqUByc419fue824Jj%2FevsrouGa9HdF6CgHx6vuE5rO%2BKi1ovw%2FO%2BoWqZ8Actif0azz2vAbTvt2oopOcx6BSH5X8UHTKogjpL%2BuTeu10e9lMZnL1leJq8949r3viwB8OHQOtcgYRRKo8wsarpgf2D3aaQxaI8xLklFUH1hYDCJQRZXQY6a2w6A%2BAu2iBDhgamPN3dhGyEg169RSPFN%2BD9yWMiGgS40YSD&X-Amz-Signature=0dc5cfd0ba853334fc033486e324d64985d70c3f412499d639e1fa39e0d048a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

