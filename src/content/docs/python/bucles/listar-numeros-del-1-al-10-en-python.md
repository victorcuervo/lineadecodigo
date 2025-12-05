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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657BUWG2A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXTgRUDMRjrFcHBc7dJ%2FFviCFG%2BOq5ZGgtwZ7Umn9JoAIgO9qeHOQ6qa9XqE%2Bfwgb05EUQfxy4TyT4NbH8G2v2qkUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDP3w1XKrhBsmJykAISrcA%2BMx%2BCQseh7tFENa8D%2F29kHyCsHw43Fjpu7mIj6L7EcrQsfPgej46O8LgdICy2PFG73q8LA4vMd%2BFnJgg5QgB82zRE%2BZJU20W0KXLjEP8%2BMQc1Inn7Sarc1hVUZDgF5Pg1C%2BEERt57Ps0QTqjwwJA8pAT6h8BI3D7AA%2F7QmZvGPasLaOUf%2FndCrkC9gcPYWAfssJYHyRqYABJIUqljW9ta%2BkfAvVDBrB%2BmWrsKB4GsMAeD8PEa2J%2B37dFhZtUqkoBv2vXfR%2FYdEHcLdQP%2F9nwumE%2FAMzpV2UeU6v%2FEctgKXcKjf6aRRAMB9%2FORZR8YzkNfa6At6qTUq1Mda55d6bAFjZVEPRuDZtW97viPrVPbXpT6ub5XEwWzTVCvAonReqXXNU0BFYqH392NrdApx6ADdEZ1ScevMRMGP1uZCY3d1eWkgiIeBIYZghxJpPn9c88IjzESYsR8xrJKxSdx4B0vZQGR0tq%2BoBA1uZpxPJmxSL88PkdjPt9Ks6I7DjYzN13vLYq17FiozeAq8yQQ%2BUbauwN3swv3T9GFV6iQUv0o8v8xnzUgylh9YUyn%2FDrkbK878rWp9%2BL8SRhs%2BMb4rZ%2BiRMpAwFcwbMYiO0sqXJNgIkq7h%2BnvZspPkgympAMJeKzckGOqUBxWq6NLAetUnh6lJtG%2BdHOZNVrA1P2N%2FJ6OWbjJnqVEkrsxbbS%2BV1CwTR9HaEA%2BHfK%2FDsHwGvVb6yxGNfsEu5mmX%2BUDBrHNPB5J%2F7T6QCTENmdSKZrULohILr3CCwOc8y5nUdyf29IIS5%2BLEXUzF4J8YTKV7epwvVK3T6CgNxax505Tn5GvJcL%2FCra1QEYEalNh9z0PmEo1yxcOTHphLKzZg5Lpb9&X-Amz-Signature=18d34afb0571d75bbc393c8ff9516e76e62782a7aa87a350710b4d9f59bf6a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

