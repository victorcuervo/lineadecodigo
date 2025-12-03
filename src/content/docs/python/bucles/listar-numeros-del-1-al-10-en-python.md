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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGWFBYQ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFmnSdLU08Yv2RWmzMP3pRHGRLOyrqeh7cJRFN3vKc3CAiAywgyyeSWA6DBy%2BYdE5ADdkyKFSpaI0uu%2Fc%2FM22Z17Tir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM9ZOwq51eK6GLnO2YKtwDUl3rzlJSkP6LSe9rwsZawNC%2FikIZW9VjCPkXejeBwW8iwGtgvkw%2Fs8Chw5fX6vLFJMtY7XRNFynOo7acjvL5Uhld7r8e1moBEgEe7XrXck9qjaD8Sil2CGNGnwidy13w44ZjIT%2BWbMYMhid7Y3LT7rVT24CPHPdPimghv6mEZ0V8QcP%2FOeusWYW1x46k81NthwNRoxAars0Cq%2FacmIaHq2Eq%2B2Hq5dmDRznvW%2F2iJlHLgyLzh8rSxdjUkWaEJ5wBAOTJrUzy5OzTMJC7Wj17IPquuyDSNoqS6fWKYsVFD66buiSY4iSjcK5vzPvcpO1sTdooPTIZ9YIiuCs5AWgvkfczssq13Y4qwDP%2F3TZ%2FTPHf1CCZQX9Gn2lhQ%2F%2BDYqSFEVctb1yTBN%2BAq%2FhBXtxK0wWYJRjq3%2FkRZ4D7DGu5T6tKAKt1gkfx6RgQ1%2FqTp1KjUKGV5Rw7GKogIy3pc5EHV%2FoDjTVsWEonzw6PTCZy97hc9d%2FE5yMteOwiS3u8S5EU3HB5EA8ES0cuwv%2B%2FTBitByAAAM%2BuJjHm%2BecihfoIUbjS1cq3HSBqNQhD%2BMTqVuDo6D9ItRUuO4ztmK37eyASLP3RA2kciXhzAc5g2DMxpySQ1yG6XVB6Lf%2Fg45gwvtzCyQY6pgFrtc1COiZyDhtM7S3CIcLdZwqUL9KrwQbcwDTAt7YxL1zWnKL%2Fo1qFHjHY6%2BNDI9ZK6d5u0z49GB0O7snqSAlI%2FRGJ9HOOmCBVg3y0JNFVc2gHDbfDtYfSEUCubsltmhSdBd9%2BmADUAxCdoiy4tctF%2F1HLWUgEU%2Fg1%2Bv3J3OnphBrdsxaIUX%2B5JfkDd4UbTEF4r9aY5VmPf2COvG8SZcRWFnyihYZt&X-Amz-Signature=59d287702e8f4b0abd50f996185f2e38f14eada5014f2d9b1ee326f3f7d42709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

