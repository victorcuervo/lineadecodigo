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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZ7WOVC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICieU%2B8CF5HN39xURrL7BEYy7pxB57jlJlEPVqmoy0jnAiBM876x3NZtH4q%2BqW0Iz7WpBgmpbTfca7%2BeQOH1I0AQjyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMS6DpDi%2BZiKY%2Fq99oKtwDijZocnP3b2mx%2Fler98wJgvqJjrgUxmExU6BDkWKVm2zL0SU3chOCnCFH3EH%2B2H9GMw5xQbwr5%2FIxX6mvqSSN58UIGHwhx2%2B8ihrlJhF3HM0BN0%2BTHT4axwaKkYhToTNKPrl8%2FNDzsJc%2BYriVRglWe4urqDcxBTXjdNLWVmy4NzKC54tNKlG5tMgSO%2F91Og8Z8sfMc6QQ9lHbL45is%2BPuCobCsh2QKKWz6lNyNAmqsqPJnqQvcACyZteImWqWtCDtlfy8B9enoig43TdLLwQbKvyKU3d6f1%2BQUYtNlTCbGvukksKofq0cBUhdlrRoVDnrD3lzswwp2ZVu3O8XKVpd3kzI84utj39zChm5fQhaYhIyLN1EwrGto12CqmJpA30p%2FkZQbj7plA92jprV10SatC5FijzElle%2FtxYVLB%2F2t%2BRW5zZV%2B85%2F7PLQn%2Fo1Dgx3fngQgDRVnzD9%2F8Q1ug63beEHlvOsgvv68ZkL6MqZpshBvVrAVju6ja2hLonOlKZNYK6pH8HdZQ9UYh1Eg7OExxTZlzcNXwKx6wIj%2Bj9TE143hKw2UkWsU7Wja0A3FTc0kkU4QN05ZwFJ9Hhy%2BFH6HP6u6wVVPamL6tRyFRNB85D66OfMFuh6NKsz%2FDwwjenEyQY6pgFdeCpLpCDSvwqhVlZzYegDMt7RK5YT9kzD0YyWpiCTaHxKn6qz0oaX7LD9yB7E%2B4LkiEUMJ7evkpGnCTbDenr9fRya1VOqiM8FKLd6zVgE5M2p67%2BMDqG6Pc7n4EZ1jucLITkFFaV1I3O6FTqpK1ScAuDcqpkPsaBJ7Yhn2Cdj3FckGYzL%2FZlPK%2BmmGMURq50KFWpmmFn6Po50ZHEcvzb%2B8CJMTekm&X-Amz-Signature=74f2c55936604eb4b836949e33a469cde948ee8c9d0406f3a7aef2dad2682ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

