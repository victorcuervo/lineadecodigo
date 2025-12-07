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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TBJTBCY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8zr6aAmhnmvJqrJDYj46H4i51IU0G%2FGA8WXDOuB0TGAiAzSM%2BfG0jBKTTdUknpktd%2FnFhqkNRvYPRfge%2FXMLsbNyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM36jkyUiQaiFaBKeYKtwDPdge%2BGlyeBEn3k0%2F51KBk39VvsJZZ9szZE5cNFkEF4iN%2Fl%2BI6f9uYf3gBicoDnmiingaLBu3S5LFZYz3ECD2xkO0dK0Y1XJKipH7az17zN1jCW90rqUlvbfUtmoVfIfslzDRPowUwkBCzYSdxK7SGDH0lT2n27yxdmbFsgSLdfaIBC7p%2B6m8IBkb%2FRkjjBmV9jh7dt9xi1rUH5FTGyBi7sgTnpMzcCOrpM%2F%2FQ19e3id%2Fehr%2F28u16GqgF3njTRfd3NWwFnyltYPD4KA9BQPFE1QyDdrCWxFQF6JLg212RVNRwVLw5o6nXFIAY9q7ztJ5BUMtIqeuu%2FS6Jw0%2BBybYK%2BAAuiybtYsqi1vBglrz6pOo02jrRgO8HPdg9GpQ0YO65MeTN1G97fAVYy84btlyuHsVSabu37tNh%2B%2FIY0GxLpAeAh7tNh5RE1ofzM1nLrvBge36%2BaARwBI%2FsGXxuyz1fqWJUCfi4yRrCDWVnfb3HSgVlS24wh9dB%2FQHhXtOZIAzJYTe79%2FHWERw0DLKFQjNxYX8TmYYWYXj0m4qu3cnYxZokNYOU8fA9qEr%2BOAtyuVXPKwe3xVgsUgKwsjCo%2FZgbcPmXD5uZ9D4nvVWy5o7X9CK4MrFERuJbB%2FjQvUw1f3SyQY6pgFE2k9rqBxOQgoW5gWtpOrUTt7QhZ9%2B8cnn1%2BcHJWTr7fylomRE%2BIkWjIYG4ZaCB4sKNBdohZ8zpIxewwaDuK2em0yYEN0%2BJ27D6EaLMopZ%2BWJXcf63vlbKhpLwuFzPNDcAYLzTb2dROoDJ08QrMOgwjFrjGKG%2FENwkuE99D%2Fdh%2BWcRSUOGLRm5ROcczcGV0xPUpj5I%2FaRPcNqirDRU3y4zOeZcYzeV&X-Amz-Signature=7c60ca9aa9281ea5464c861c3cf43dc5499a3c4d10fe7687bb1c152593f7737a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

