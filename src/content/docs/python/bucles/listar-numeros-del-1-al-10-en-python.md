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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USW32AQU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEG8oGOQVPmOjbB4vklKFIOS8HRETeuuOwrs%2BVm%2FvpOCAiEAsFj8nlRcYhQ7bBy2kqshr5nkQOBqyIqCZ8pJjiVjzIcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJU6z8NnlPhQZn91pircA5imntTAWo3QjEWOgaakYRB9Qcj1386Nx8VuXr9VlAOk1wQCXsV8cBYFkNL%2BkyBAHQc60TnmXXF4WaiTO0cR742mK%2BcGsDgJyqlXrqfThBGTz2z9IWTg9qwSQLKOyi39pIy3rnrKbxLpRnsE5OCCeNHh4rQQ8H0wtkJXLGUAoccXPw%2F3jIAEDR3OUIMQyZxuDQZK5Xcd3BKBiH9SIt%2F%2BS2o7ATNAvNmIh0YnGXlP2e4mKv%2BGt9umJ4LmX31lxFVkcdb2lV%2FZqBev40r%2FGqIWAGh99k%2BrWygBFTw79SsoGptahDhPtGHB1ZuX9iaxORo7qJqXP9cndJUVDWurTyEMbTU0pmOGTeVGx84d4rtPX%2F6xKKOkpUJ1kp2dq%2FEAFGaklHWeCGEERP9zIqo6qk8LYsKQzTMbTj8UQ2ViOJHOJQueTi3RDTxjlzpQvJCC0F%2BRiQ8AFNIobszYIKBleJXze0LghPNkcHRYBOOPo4%2BOi6zC6Qld1nJ2P2J68Q6PAEtU4KnvcA8hnyiS3jBcKcujlATELLed6tGtOy0zlot131ZQhvJmd%2Flu2z57uMrT%2FITzv6G70i1s%2FnuMOG1PWMxyaczRbbfZyJ0po3xrcqHzi8j6mgTqFAax%2FsnRznDKMOTNyskGOqUBztjIsnKNLmMDniOlEGQSuCtwU84zNYPQ0f%2FO4pfO81ALkggj18LGA%2BlE5qkw1SpkxIYhLWriD2da7j7D1epuvZYYmVQ%2F9B2cUC4X82ju6pXr4Hgfq7UfL9%2FBChjI%2FjKti82dpnmoo1Wi18P17yImVMT0Q%2FHBK3J3ApbNJUvgtkc2s%2BGHYAXa1VO0IHErO4tQW8oH1XNqLr7D4sfO6MLA50fs63bk&X-Amz-Signature=c2b9e1c29fbbbe43d342d56800bd1c85a8c452873347334074b801d67a738baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

