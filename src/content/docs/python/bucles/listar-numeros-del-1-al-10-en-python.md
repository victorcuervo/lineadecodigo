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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNXWVR5E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDxRCaKhG1jT9dHWAdfOjWl%2Fh8fIITePWT0cQ77%2BSNvcAiBcyfvmhhRUQUYevelSDpYo1JwDZYTa9Dtcp7Qg7G%2Bo1Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMdbrQL9STiBAl0HggKtwDVm3%2Fh7d90hDz%2BbR8ucb6DQK3yD2%2BdS9gLzOvgagiqgWA8nbxazcnWd2JzCYna3mvbao1%2FtRm%2B6hKZSRHZ2S%2Fsa19gZBwjrHai8W2QJkDaURz%2BMoKNe%2B1FY8zgJvm3bvwq55OP2Toh5vNMt6iFhth0uDpI%2BzmV8gcFZgb9NbH7IeBxoDX4TnPbswj4gmOpOkFeGZF%2BEaTOQGkGfpWl56pa1k5pyGx%2BIPwhCdfF5%2B%2Bkh%2FaWsQdVuyIf8KedY6bs5QUCbo45KoAeSsrpZFs0Gfvr9aBqqbJWPANX2GHo33sIKCpvhlXKEOmRxdB%2FDnCyVNZ7hQihi3eyUASjSr8MvqW9nVjRHmY2x6ycMGIC9HM1dQsfdr2i4vw%2FF51wWBDNN0rT8V4Edww58Q%2FPlLdyjF%2BiEAI3uUytVjGPL4EQanwkdm7E4UF%2Bbz3LCQq97y4PxkAjb5I6%2FWgF4l9oAD4pL0hfRUiLV5leYv%2BAvwukduJAFJPtHwz0bgJSEKn%2BGH1vmHnIZoxUrRcaZICnFG%2BgtqY0RPZp9JeAdV5W%2FYttMODYNQmVgjrD1gEg9SZ34D9GIdu%2FwEx0Q141ftpJfIaj1H7RbI9l2o0VXxOPRHB%2BYxjRrrwfiybAYFdqkfIICcwpL7GyQY6pgF%2BleLxRM%2BHeMwhPOTgF1DNM0VCkDCszFbIFNg%2BfLe1aI%2BzRou9jB5OVCu1iY9jHaZtfJ4e3F3ifGEhAU8Z5YY8PwTPTM6ZPFe1M%2BMGzzY1qQU7OmIs3ki0BZG0A1zPzefBG8hqGy6ii7DzN9u70laqWzSxxi0va8WDpNq1oN47LqgUVlppjbS8aNCcF%2BOPw9eEXsbX3RKbvdvUr9TOMxOy%2BZPPoTnm&X-Amz-Signature=022617d035bc5a233b7ee58f0542bb6515fc58f766b74552e16d62c993c5ed56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

