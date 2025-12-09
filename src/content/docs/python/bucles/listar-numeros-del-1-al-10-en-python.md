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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IH6A5YB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlHVkQS0KdTYN4o7v0A%2FnXYnVQI5WCU7CH9jzQcMDH6AiEAyMu6JiFYIwqVoBExn7TsROJ33hhAIA9rL%2FIf3gz2xqkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B%2Fn80A2ClNKWkaBCrcAxgdI6wmxl3W6LjRUuX22F0eAbJcreb5ZE2itwk%2F1ujJMeYRpkC7bos08tvyCXrje82cv9ZQTyYHOXIrByCToTStRQ7rGvr3Rp%2F9pcX0QgP3u4q8AJRODDk%2FfpuEzlZsLa%2FwzTI4skbqpNf5YhSTG1YQ%2BSqkpMfzTkrn84soSrnCBJq1c9%2F1nL%2FYzCsV0xtU9xU1eNiII1kkGzUuWCYr64TRPzNkao378a5asdnEJ46zwpDqiBDkj0uJxMbxxIYBq5bSV6H9bugrKhbrgln%2Bp9Zr37dtaY%2FMESIjrN66xd7wavf3wkYLMufLIvx%2FB9oo5XjcL%2F9lkHlc3nWQDyWF5VfMQdu4HIAGi1pIDnf0ttvSKtI4ahOc7cXga10S4Hcdt%2FcAa4wQm3b%2F1QEbKGT8ho8zkai%2FOEeGTI7r8mOUbl1AyHLGZfD45YopLODYa8qvYOlNV3YllgJNv%2BPIbKMQhfYK6Kwkrd8LclN3%2Fgb9sctQGWPhpZnBH4cqxXXlb3AGYH9pPwRRUB3IDizz15BY8t%2BDVtSAyPoCWwHUea3WglPHdboPGhDobC6PtBiqXyrpy%2FVA%2BPCi0kr596nkFQ98pS%2BJhVwuss61miWAke0uw8%2FwYwWdpPJIkLF8sY2KML2k38kGOqUBId%2FTZ%2B0J6QUOakcwcHN3zGyj4OFh6IzFvxCT7BZAgKCzFlGx5RR4FbEZwK2i1J%2F5ek5o5R3SX4o9g2auDpReKNqRmJsWlpinM7RgeOAYR%2Fxn9o%2Bd9TY%2BYBJc0Z4N%2BmsOzY0A5gIDnunFltG7RJ%2Fg4W0mTDMR%2F0jiEMmLt%2Fmc1RbZ2rMsIy9Olt4uFe2xjy1dxXhzeFitjGrq74G30HkLB%2B1sBk20&X-Amz-Signature=bac0c02d7765cebca6361dec810a3775a07aef9e838939e13e8725e8e5c4ba5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

