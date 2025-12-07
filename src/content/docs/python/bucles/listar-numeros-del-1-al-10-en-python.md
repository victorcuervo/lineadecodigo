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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XUHPDD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8rhO39fbH1GZOLpt%2FcoS%2BBY2NVEOlQoZv1kDC54BWtAiAfZMiwa%2F4RTWhcuHVXbEHc2T82WWDjDE0z8m%2FIKFwooiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxnB%2BEjZ5wyhT2a5kKtwD0FWoIDuP3LyxWt4FnO%2BrYuf0Cnu8YQUvPJw6h9gzi7ETu27Pr7c68jRMIY5ZsL2WGjCvqGqtb3a2KVo7Wuu7GmcsB%2BGv%2Fs2Y4TAQp8N1XzFYFttJuamPuCmxXQ%2B7LPyEVxJmbcu1BJint7Td880Bu8H8S9Xvv9yIebTl3lWNBwN6YWMLHHBedkf6gfUPHBaLYYXNUNrwj6KRNfjA%2B3vjtS0n00NeTdz8sz1pO58%2Fabk3q9POZ06zaxaGhzONxOvxZuAY4%2Fu1iV1WGhH4Q1uCgpJSYcswQK7aCeOumjbAxSViP81bjC2wvxVLtWjodB%2BCwTI6lcDIMYn3MHGY0Mifil6iOEtJ06rgh8nShPUrABya2ijFQKjniPs2p6FrWFV1%2B2StXr91R5gQkkuI5af2VqS1fGpFrUANSTht30xMhZenr8KPPty%2BaNQEKJQ9UoCHVO7HqmS%2F0nb%2Fl5HCvfmMCe7aLVvbbp9snlW7erzGy%2Bo3SiQnloSy4elUOLM8EolC2EUEEsqjwTsjeQz9llUumvLCDspgGpaKHTZ8JGjpyOKw%2BIpm63QFlvdu1eP8YdhTCp0U9het1wqbABQxLG0SaW724OejgdmojVxkfyWRwg1bSMkr2AQRxbnFdLIwq4XYyQY6pgHWhfT0lUA%2BmhL5qBrxvRxHbtK0HPBReN3MZL2ec7CjxjhesU1oWGSl%2BdkshddDQaizKAso1UXc1BTP3O4tdabqYpJAaKaDMFxu7sLhgi3pKY9b6idTK2mOddvFewolDnTG4kP7Hn%2BQFCr6MYMvAWutIw1LaWFwxEPdLZ4SIcXQ68mZvynhhqWPjULSadI9Tv0dyqPA%2FRteHglXzceZGboTOHvzTyUB&X-Amz-Signature=f8cfdbf38b95bf34b3dd33b0877907b82b4eba81441c056419806f7461b3cf2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

