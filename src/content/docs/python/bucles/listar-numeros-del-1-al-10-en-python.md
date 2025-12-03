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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7YP4JB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIAQ5X3aggCvrZLbOWa23Zyerl6aE8AYUtLNo3mg4Wt20AiBj0sIZAeRGFYVKa18sM7AawhrC5AJqi3EPv78JnfXG1ir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM5IreoZgk0uWK5VTEKtwDDrKIX2vWt%2Bno%2F8jsib4lvsN%2B5gnlcPiIhh%2BaH1W%2FS4OmjmqaGRaNLwpcSayJdpr1Ba26Bk61BymkOum%2FGA1eYRA7iSygQK22J0B%2BPWpT6c3bpD3eYprrJjP4Js2MQLeX7pxU27vmT6w2H1rj0SGaGAAq0Bqv9er0o0nUo54zen%2Fyu4t52HYbSYuWJPe%2FXjkF02cwxNYf0UdLRggjeeyGjDnWGLFByrUpdEErgj6YRrMl%2BSESl%2BA7Zl1LXf9UpNM9QsBE2ccAZmnPnI59zzoOMTFn4Cq5T3iglhMDmvhmUTgtx%2FQqilmoVCobetHlJn2b8tXmLlFsPKkGAMKIC66iq5LyexiTypZvENZxGcR9eYw4QNUzCtFMdBtauWBZYGlZLI%2BjBKNOf1MFLabF545qfnzQ65cwEfnbscwx869OES9FCJ4WKUU%2Fy6R4u6OxA0Y9%2BfiY0aL6vWS%2B1LaKK%2FjZnVKsJWIsIQr1occYiYZDOHMe1GKwRdJcZw20fSKyjqztRd4vsCug46%2BlU1euJDDMKElNVX8a6yjwcIid0ANuQIoxV5hhq11%2BnsPIgzA3N0Ciq2flMLgCVgHcmc1M3byCkpH%2FswEwC%2BmweS6Ff4gNWDL3If1l5dQ78RCa9oMwgfjCyQY6pgG%2FVW6koRSk5vJqfAJQ6KfHwazAUoeEf%2BTpn20%2BZRDZz5T4z3BSVRm5YWGJwWrYkvei7YdgHvPg8XirNfgOrcxy1a20jR7P1z14h6Z6NePbkAMNUBG0Uu0pezDJq%2Bczx0eH%2BIR4KTp8xQPw%2FcFR9a9Qped9qfBa%2F%2BS3pniuG2E8iF71YWO3cxPNQXHRyFL%2Bsrn68U7bpsFjE%2F1Ox02hdotGR26OqAgE&X-Amz-Signature=06761e47873fa71a05272551f1bf4534365c592d83b09f7fecd56565133d69fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

