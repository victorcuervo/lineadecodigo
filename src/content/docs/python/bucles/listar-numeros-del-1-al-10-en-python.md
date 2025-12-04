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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5CKFTKU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDXzpyL%2BctTF%2BAc6%2Bn8iR%2Fpb2O4nRWmLWoD1%2B1Q352zrAIgdwgphXN%2B9t6yUY2e7Y89Rq73PGmeNGOsvtXMQhde%2Brsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDA1KYOB5Im1U%2BJwiMyrcA%2FXON%2BAvVS8%2FY8zyY67e6eA3M36zjCnWrBDi0fXWmIZVFYjWpqDAnA6yljaVpyhtzJ3QnxsBV9fUWu5jM8xWyENloAtotSr4N4qTkJoYyB%2BrpMCqrVVzBBtzny3BhpOU4r5rPHKN3YzrvSpNy2LaCDb%2F%2FrgC17xv62MMRbs5MB9Ch2a5j3GR7oVtw1TnZkIPOAhpOBBGGXzqFQLue85d4lI%2BLUH6%2BuwziujXFD%2BavwguHBj0vetpBZqE19vAYxS1g1bSXyd8PTM1hvMqNKjA6W5QywsT2hGefDaHkfryNrGhAIXidl1L%2Fj9kskb8B0tferbuDdbABROFxcznU3iqPXVOWJwp54UmI8s7noQBi3GIE0wkoPk05rJbBVgiYxYQlBtNuXsnS3LFPzJwPpFEhL9eTr1%2B1S%2B8KeEfhew9YuE%2BvHs1M0isRZ2%2BHngX51ecxVWRN8AS5fp5M8f7L7tyb1rE08yP76bja1xyx1NDdo8GYaBi0WYYlJsrIyhJmgwt7Q4TuOpa9u%2BvQLGe%2BnFmcFSQpr6191nLzHbxh75d%2FeBGTcZ9PQwrRPHgAdJrt7vL20%2B9pENlKtN5kZoftRXhjgEHtbsoDNn8ofiR0w6HWkjSVLXRB6AzjlnHtXizMOzTw8kGOqUBOFW154ypM8Syfjizc2HYgDxytwV01%2FSqo6djJLqVLb0VCMAYb%2FBYSKnhTJRr%2BmtCwnPOrjxHE4j3g36OSpKsWp9%2BKfnLeFPjRze7pgHYXBf34e3StBB4VA9vB9m%2F4Op%2F%2BqZ7mSk%2BcyTstMzYb%2BiqdEl67Z%2BYUG4K1OtmeD1puLP3dRcxVBSjmXabPytcfzBzEHOZ3XEWlvpdBSMktMnYOFHsdM9Z&X-Amz-Signature=2a54f8405a88136cd16e262b0101b0156bd86497abdfc533c2ca745f3a76be94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

