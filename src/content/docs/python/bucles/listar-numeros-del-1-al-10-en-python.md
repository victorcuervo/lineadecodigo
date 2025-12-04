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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAWPGIG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCK8NVnyMo7lx6Y6obeh%2F99XqKjP6i6ufNb78FYyLEtJwIhAP6BnYKy0Dn8PYeJ%2Fg09rhmEG2K4FHGGH7WPkYB4RhAvKv8DCEYQABoMNjM3NDIzMTgzODA1IgwQWGD4YRNBFM2rzHQq3AMXYRxYwi%2B7gh%2BsEoXx8ObQN9GKQYEsCGcPII3s%2FPP%2F922ltU69CSLdEnR27EX0YAvAqbliDYs4%2FGTS3wj2SgdNVyhqiKPqECrNnxbND4QET%2BdpqdEH%2FqHzJFZTdxkHn0hU3YQ50fuS%2FJKUKCbkZtsjv7IeAe2Gzv1X16hWUkSUArdTBN13Fh4ZS37ziAx1YEoLRREIvGt6z5hWxiPbKlR8QfOuOlsbG8CtfJKhYm6RdaPDEijLG9Gz6s3ookDLX0ey%2BrpXJLJf%2FAUs%2BvNEujRW9wogecJjL0H4uA5qX44fteM3kUW7DaOdbA2Ifn7%2BUEI4X2S7bKAC%2BGiMD%2BIO7%2FuGFW68UH%2Bon0clieQ5A7MO2w%2FzQT1lDjzQnbTcg0QLNeokkCxtlHZlqorOF5cm1V9FWyZASX%2BZe5OPq4HmqrxbIFl5HWP4B%2FvPgbDcOKAtl%2BrdTMTdl846TRVG%2Fkh2jFqtUZ5TPy3XdXM49a0ckIaVfrWBEzi1C5%2BTOhZNu7kbaoVp53EhPlyQtIO0fS4gcAJpUksvBgAvHCdknTKbK45ydtebcURPmiH9qG6mmTdqVr%2BbAVLA52xh9MjjlrT7eGRVbK9OBmLEs%2FoCwJWBnF46TrwRICX0LWF86khURDDZg8bJBjqkAXiTOJdf9BpykufVdupOveaomqhV8uI1P3Q4bmNizrJrevYFjo%2Byr7mLh00M%2BMqZAlLDJXlRhn8gaVcPtcME9umVaF2I5eqy%2FVK%2BuM4Es0nbh4Da9Oxr9w%2F9e%2FzSNaQC81BpVelH6podvdJyZiqRd6sW9dIbyTbgO%2BkrnUhFBsfYBkp33pkVqY%2F0qSKc80lcQfUlFd%2Fmuu3GPMB2b1r4mt%2B66OMD&X-Amz-Signature=69564a078f687409cd975d742394c16859ebcd09e5e1ed99e33c3ffd6bd029ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

