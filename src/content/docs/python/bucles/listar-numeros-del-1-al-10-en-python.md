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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KAIPOXL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDZEK4f2aysowVw1h%2BE4iJEyhREHmd0miV%2FahwWa%2B5FngIgbs0oFY6jWegCbEGYhQSqfFYdo%2FDEd8r8Vsn1BQA0FwYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNg7QSb74gNZTB6%2BfSrcA18wrD0gT0msn%2FM%2FNju%2FfNod9LGG8owgmVu3pRwsX2xxNftwnUg0DZ8ms4IAO%2BYz2JhDk2Hw7e0YzFS0hcC7ktcrg8W2HehTK%2BJEo4K%2F0SjJF7e%2FhTXACupJ9pwadmfaCOIyKBSAu4xUbkw7gGSQfzFy%2FMtozu2QtIYKhs6y7M6JCZUH3dcEanIzMzMD9hjS%2FT5XxBsUmc4iyHSJbp2LqwNuQn8D35fDbm0cC194IwgCZUDMu69Rd3jzjgr%2BlL8IK84fijJ8eoUj0l1ygG%2F83s%2B%2BUA8xADbSDa9eYq3qTkf7ZsoZdp4e8pAJGZWFhaYD2PLVenusmaOMiLJltTN3aidsWHJ2Brv0wDuY21rZqqqF%2FptzpJiJbzxApZCB1Myj72KahHjNroU%2FCXblSKsmJDqDbk91tJyq76QXdXjsfWC4l68hdJfq1YiEKAskq15cM8eh2ZejHv0JmJCiUlEi4HNX9cmW7hFh%2FqjTt0x70xEamzYYqpZT8Thg268SD7qHjPbZvyuJ1kr%2F9CWWk%2FWJiV7quViLYFMkpRIcdHuBNMFh5FW9TltB07tnCf%2FYiUyaVGcme1kL6HKhHqpI8ASQRQBAj8nl9NIwvuWVhx2bLbEgbvLXanUI0uNJVgobMMyqxckGOqUB8eOr4%2FeT7pr2JV7ZB9XOkGWDP79jFVK%2FwUoq2Tn5mWIF4BC5cFcq6UDlhobfFAgZ4SXL66qQu1DRVdqsuYowxCpwC9BlM1YOqSA2RqyFLv8HxXsI13nBLJhkqMdxfVkMCOc5LX2sJ4flTm72cJoRup9fDKEK1MVV8bhTv7vl2vXWkXFBmuPoyZOnwGU39%2FR6wmbVsPDj6btIX3VFiV8iGA54VVE2&X-Amz-Signature=33678731c4c09f7c24234346a8840957ffe37e350aaf6b69d07beb1c3c28e4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

