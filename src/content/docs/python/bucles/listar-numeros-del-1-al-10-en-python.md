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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X2XAUBP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICj5prWYW5NBCH33iuA3vcAJBu4KNEUunWsvwvK9BGflAiAqvsuAWVf9GOAUFJHzb%2FQgfFNc1kTxx1MeS9QZNMKPRSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDC%2BNBX9XUoxy5jsMKtwDh9eYsKNtUgKelcUg1mTrUNBQXBc1S4Pma1RZD0sjLng2%2Bc3fezd4ZSFQdRkKeXQpaLslh5X9LEZ5k%2F%2FZpvsELdepPbemuwQIMh4VNSs0fyDV32tq0o%2B5YFYAMLPri5LqOOrOVx4ryz7amUp%2FM8bBoeTwLY6islK6cpzHhw4u1IPSxOwzfDzBAYFpdRHajAma86sFJ8ZFqinHuMIF5oepnqPUExt2NNr4vf04r%2FOCsry%2B5t3arRnbYO9TOC0Ple3s2%2F5XX5KZsR5JuA6IaWNCzFhHafl8WCyLOWxpHwG6QGdp0FsJxDbpNVB6fJbkiFsPL9JOCEUxU7RWq6%2FpD7Mb3EiUge7at7Y4XRNM9Lb1jnZIE1LrlHRVYCF%2FcN4aGEPIzLdulhS1UfnXSOrGD2PWo6yb4Sx%2FDbzYlvNRtcca8s0wkvY%2FJ1o5QHO18c8Faz9BGI1qfk%2F63QxUs%2BqSBTLxik3Rxmj1zRgXSwLe2cFvqG6in0rtToijkzS3eb2K0C2QZWVveLWiqih0W9yjEN8GjTk4mwDb%2F%2Fwy1cSSi7iSL9MLbUJhpWFvmwXYwvolKtkPKJyzx8CZbVTXOIzNnNUb%2Btg74VjuqYFU6Cm8kT1GJXdpJZYXIaHQVVK6skUw%2BYffyQY6pgG%2FQHHMzLBx1bkOaJuCouMSLH4X8S%2BgUhqiHIQRJI6rAQ7aKZlCf945Mdzd%2Fgim5yMRr4IoCl24azalsxPyvs8SsMTeS7SZvzmXFilVSnv6444anLFmz6LjrrecH58T%2BB%2B%2B3hrY9Cfzb0W21QgrsJy%2FYkIcvSHWO2pGFXEJQJL6EmjXZ7Pix4RRcQ95mr%2FsR2X97X19KSGvrWF7ibXB69kyJ7fAqkEL&X-Amz-Signature=b65e70b9a3955f1398c17054926fb2d9f5cb8af80d6a12bd1bb3b410019ecc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

