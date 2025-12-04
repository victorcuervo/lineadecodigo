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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4Q5GNNB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCYMldZHF5x72HKV82hmOL9WXnC9ver6l5KFe5aosWQygIhAMYQNH76fHThGgxqsFAFh46X5h0b0AC16y3P5xsM2oiRKv8DCEQQABoMNjM3NDIzMTgzODA1IgwGwMiuTaZGhkDcf4Mq3APZOi%2BhCNVw8LpdeMsaBbo7HOH3IQlWPzhJzJOUhLcueriAiJho4ab9L%2BXg5uJCRBjtWrqLBI3fUDGTej3pjihr0GkIzD5%2BSUkWfDotFPRBrzSK%2F1HXrraJsqFj1tMIBYcKZK%2FWbC%2FQ3W%2Bsknqb8BUkTLjcv55a9AZliIWjPrRvM2WZckY8upqbD7kJy3HGfd78vSDew3KdUbzUcPeCe8AsxwcmxI3m6NT%2Bkgre83q2NL46aOUP4F5axkubafGA54nj3%2BeMNulkUF72VJGsXrZFGqOShwxmr%2FQYYgDeEY8xdIneZB2268sqAIZea8LWuLiUIgu7vpTTo61ez9%2BpJ76b4cFOPSOuSaImFKdPW%2FZDr8mKU54%2Bex0axBBzutY34pPT0PCjEYe8UEPsfy4wFBYt8BLSfAvbOjJ6y%2FwmzW%2FA%2BOpRw4xW68JysR8QT1fqFU2jrWa3i9gXR7RE39T8VzqdgG5Ag4P2t4MvC1Rc%2FMzrfMR25BGiPd%2FOvLCGPpfOhGffoXbacHTn4kGcHPXxGZBYAJmDydNPUdsw4QNxElC9NObDCAX%2BgFVT7D%2BJWpE4AYP5F0IkyAOyjoem5SXDqcj8aPf1iHtDM2GgvauC58Y7R%2BIY5wHg4it%2FawgFPzDsyMXJBjqkATTjpRAHxc51yQ3OZx%2B8%2BgIAjuh%2B9g32m2ZMez82Sl65dgbsQA9mrZKwmk10aqh%2Frk9rWGxSTxRo7NoSi2aIYnMg%2B9NhIxrZBZInIJhBBmmMInOxGvusG74XphgCYunoar2ofZANN5dTyN8K0lqNUYW0iccD7zXdCTZL%2B0JSvS7mgD8Dxx88%2BkW%2B8VUJN4Vjq5FoVnZlxpBnLqCJo8Vl2PnpsdNp&X-Amz-Signature=1b56d98f397e2de298b43ca9a4a874fe01c8cc7d77a99422cc332e74f258d6ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

