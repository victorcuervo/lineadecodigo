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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VWMKPO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF4Mh%2Bscfx6Vlj5Y0fIxUJcMAPC5bJa6CK1aAXR5NlcXAiBZxmsrJH6d4rnJdwCGqfXtsUwga%2BoCjKKYRd3EKdrW1yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMG7XRHquC3nL1lpiHKtwDEUSdOsv%2FrsyTU7KxBI77%2BElFd5q%2BoryAGspmJDBGM0vRpYwI2orJYjxmM0S39ydEE1qH%2Bd%2FpLGYDfEg1NiKOKwjROeylPgvXmD64BtXf3j%2BbNF2WIaOH8g2FjGR5lTxOGvmj9rIOAFd9IZbZrOjSo9ZFSRZeBg3W4d0wPEcB1Kuc8opdwnaolnLdIOWh%2BDOcDj4dmn1OhDRW8dLgKzcSG%2FJJUV3YWh3qHFHE9W5yeVtS%2BVw%2F6Z4M0InsKUSxcKJME5Qmdhib0Vm%2FLMEWk1DKiVfgOH6s6DHkMmWHzqYQ9geH1eMzGmvPrWB95cX48TkWMx2JM2c1G2lSv16TZ%2F1OQmsDoWRzN8kGkpFHBIWn%2BksHaevQRr09w4tD%2BrRLF44G4IfjhBJ5FvphfnvKrwIwTamn7%2Brt2rwOFHI%2FQLnZp0MlXtwdzPkLkkc4aBxMWadWRh4pJ9VYjC5ak7LGu2mmrYfxnmc85BJcrdxo3vqw06amiIEkh6dUA1UngyM64uCBZG4icu3MhcVNg5wNW%2BTvsq3%2Bl%2BxRvceCypbQQJvvkTwgHusncMi0gtdhA67snHdbDrSzB3eJQtKdp%2Fj4rxvhfM7pWcY3hQ7fp7JQv2%2FbDEFErjvfYIcbK0xa2pMwnL7CyQY6pgFVcuyiza2B1ugeomfQw7psJDAfq3vdaQGDzo0v1pTKAcwYGGCMN66Ub3nPW7QIocpSxZ7eJgLqzrt9sXgQr7t1mgxwIyVUJ8g%2BM0ygr7fAGh3Vfv2480BFYHKTGGY2rbKh5fRXVlkqh60vfyy5x9BgmsC3UGgqAQwdaXGn%2BgtpTSFDW3bwpu%2FI5cKAHdQW%2Bbb9abs4jITK%2B02WTOPp8UoTiGqSLrYb&X-Amz-Signature=a0213c028f69c1d7fba66c8394286a16525396eb6b04359a36959a43ae959e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

