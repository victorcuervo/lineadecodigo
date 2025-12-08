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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YMASSY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6YvC95%2BdX7%2Fjv7D5KdvvWk5GvWQqKXp47kaUdQhSv%2FgIhAIZi%2BfOCaTLODKykU%2BCb%2BrI5OetsQiLPUGJJaIE3tdLDKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZjGdffgmed4q0zEMq3ANJQ5wuhAMbCZymWp%2Fk8IFNGwCcwuLqtiw27ov8nTrYo3Qy08sea6PJPUvDJk%2FKIVKiTb0NfI7U01NtyaYqAx5M8w2Noq9saw%2F1XqUcTwPoChDuwXBuGAP2VOStOEvd0%2FEKC4JeiPRy5SCbPPzjHwOLlz1l5TxcNIhduv%2FroYDSl5CXvYXjDcGE5EVQHGuAFFBBwn4oYqraLnNZt8ve3RKZWm1SPMpSW%2FOOm8xv%2Fw3gNHPa3%2F0su7kMGi8DzZviJCbmtQQU1MSSbweUWAxDCQJaYl9MgDr7LGuICJjU7V9kmj7dMZDNBip1ptrwLtHUYIUmoIIzq3%2BRJARTE3D0XZp7z9TZL3U%2BXbwq00xn6C9r%2Bnk4J3ymg2ALNuc4GL8vy0L7AtrWy1J%2FRxl8a2QF1hInLLjXX%2BD9G8isgZtW3JBL1lLy57Ajg9dN7hj3unZKRT4t%2Bt87k9IXZNWTxKpt9Mh%2B7BLJIPRJ9SuNl1B8LzompSTFFgVuvJMNiV3NNgh1WG%2BYDZ14jzg6Qx%2F%2B21zGNtA5vccjyyP9Lv3oDqwVdbQL4lx5Jcc5OdltPA0FLGjIGUMY7rbjGCpz8N3aeJ0%2BiBdiGG9H%2BTd%2FH4auJQu7lCnYTv0oBrmKdTnaQRBqZzD57NnJBjqkAURgxGQh%2B3h63fzS3bV7A30eMDhn8GrUcjCCPOQhTTGPUkc4FSx%2BoAwp%2B7k0kXYWbwcE%2Bx0rCt9Pn5aIIGf08vErbpTNTALB8F7%2BlB5nBtYHnIZajljI1oDtdibmksBoUFhWixSyd6PrgQhxFVE8QVZD51xY4xPlpHs%2BqP98tTkhcwk7uQwPy5CfoEz9paw24sk8FPf3R39CYwzFzUcqC7N4UGt1&X-Amz-Signature=8c2528e5bb67e92f1018a987d5c4140d21d2ed15930dfc6f6de863915bf6006c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

