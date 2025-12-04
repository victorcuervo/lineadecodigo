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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637L4H3RV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEML0f2Dsj4z6vjrscRKvPrCq%2FJ7V7vy2bcmQpPuO3j2AiB646d118EASXPsQz3ttNeiFvcQBKsnoiFs0X4GRuByNyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMkGDI5%2FKSnt%2BP%2Fx4jKtwDsbi9se44FlNfWOudte6u9Vh9SUMHSLjTTrra0%2BobTgAb3qT7KzTbHPyK4CK6aPyRzHCRfVu4%2FW5heluLQ%2BJSnCa7xr7wQ9t1JrF3jTM%2FV1V0tvGi%2BSL3KOsl8H6TY2i%2FoOBfJtH%2BdObJm65UpJ8EAGay7US4Cynq8FK7TeOW6PWkTjBAzHqwZNTXoJn6xmh0vGYHzZcD1fgMpC4PA4p6wEmDFXq4VGFeXz03kYBjXT55x89x7wHNV4hGHGna2W7xG6L5l4QVAgDFbBwtRxY3qTuhyUzQoKoLONUxGWcNYhPAzsKzeupq0OXfzkF2Qf0sxqFHRgUMVszpv29KSpJfJpIFoBEVTp1WdOivV%2BKFOlLfa%2B1FRushA%2BM4ngXXkpw84zieZuJrYpp5gpQ0zAB74zjciiEWPahQwojw24e1wOEWa1JMQEKZGq6gQoMypNhOtBJS8dxmGpyWuHAMyE9mm6kJiQ1TzqduFK3XEbVWfFiqJrlyzZikePTd8p8wQKEe90meIH9mXnAfSs5nQF4Lco7O%2BDG8sPcoCvjnb%2BS0E5kw3mmzcz6GfFD94F2pMZPLQAYpSIvt5liVByaDJGnId5RDwmie3JOkmcT0gogBhQ1TdSKuHowrIcjf5sAwzqLGyQY6pgEAvsPFm9Jp2qg%2Ba7kojwUSXI9ofoeuuXTeYHDaeKl6mmdBqEc%2BrWGD5lL4Q3QDTQShmhAHfiOIHTkbb9bOVSFZg7TnG1sO6EyAouyO8vz68Ansej%2Ffw1pWcWYVp%2BaoJsdjs2M4ev1AH2kjPkFIPsnDMD7iiEFAeWBHTn3a%2BWmFqIBLs41u3rbNtGYvXIqJVGBgmJ61Lcg%2FaiQ3H8%2F0EoCLrryEqz6R&X-Amz-Signature=0aa8bd2d891bc5983db95c76b7cecdebd1b680e36f1c63404eedb69325502df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

