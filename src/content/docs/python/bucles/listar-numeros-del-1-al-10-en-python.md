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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPVRUZF3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYiHZRwj71Nfpq38rdmfms9ULJNcCaaH4twKsPTlGCZAiA4GnX48NK0TjvvPnWqRfbt0u1R%2Fn4L4U6MFmPknRNAqSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTS4kYZ3AuzRlkPd5KtwDPI1KKu58SFAZZ5dCqMscxjvIvwfHW%2FZcrrS%2FERDRGVctEvT9jmvgVU7hg%2FZbYp%2F4vGGxhUHVXBYIJdVi3u1C5PsWi%2BhVajiqZ9BiGRnj65QaM6bgUaxq5gSC5SNUtb%2FghaTA7oAViDj4l3MT04Ew3tFzsqX6%2Fish2v1FnLj61IiixRH%2Fkul6Xh76FztVzDo6Usn%2BA8Il4Hkvl%2FCNO%2FnLYi7MGEUztXE2NdwCq7wv%2B4BRNiZpVtCyVRMfsJy6ahMTQdZ85fD5a1umTyGUJPV%2BL3QNy1o%2FidjkcnKZA0tgXYjV9lhSqxh2%2F72GvoLVdt5ZJ%2BhLmzx%2BdhSxugrXjZmXfBtY49aMpgwysrQ9JXDk5A5Fn6ZsmnFFf8zZb5eSucfHSiwKz6GQlCG%2FPW97aCaHnMMTV7uh351ht333Gr0XfUjsjnbRdlFtWemehjpf7TM%2BtrusZxGFC65XaTdDW7K3H%2FIp1eu0A40PciQ3F6ZhnC9%2BPXuguFnKxRS4qxYkM1bxQWbSuCQT6WFQ8rdYfk%2B1L1IAeqGzsOVwll%2BiXm6otvfcgp1uPrDZToBuqNl0JL6MuDC598vB23Q63P14trFIov14ZHOV9q%2B1LQ8c3Nqkc3eL91NRvgF3abrN1g0ws6zJyQY6pgGbRHvyz%2Fa5Uw%2BasQAM4YhkQyu%2B99G6ae%2FMvyJPeOyfQ%2FwKcvehz2kfeJuoCYCIhLxVLLrDspJfaUO2l9xyWRpz9cknzBag%2Bbj0qt8Zq707sT3g1xCwwJ0BVEkwc2eok0u5atRM8JKLCru%2BB5bPy9FgQmi5ZAl0JDAONpOZtV%2BQ10YpBt2Swnq5u8Z%2FO%2F4L8hnqmkeuKaJklVM4iewj%2FbtzuDZzI5Jm&X-Amz-Signature=322ebf00a18b7fd82c3f04b4f6c2a318f690e3db7fb24864416eb75c50fa81a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

