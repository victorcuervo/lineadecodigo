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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDLDCE3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCaFICemVdYrZlj9i6jyE%2FHgVNEvY0GYjTJcHwXq4%2FeVQIhAPNm6RtkVAIPpGHBQSExMS%2BwN6ST34%2FZ%2B8rCCLqhw%2BuKKv8DCEQQABoMNjM3NDIzMTgzODA1IgzBH1lj6W%2Ff%2FQ%2Btrs8q3APimKixAZ4Kncue1ZKvOPy9VNegSQ8AYSL6jzu%2BxjXR7bLmf7a4suRDwzwU1YnpX8Q3DsTRALmkVP6I%2BkwcXJwZCzQTBAGSeNFujqVGyN9hgBFc7us9DfjeISsdb6ryJpqgm%2BarpN%2Bz5UFCCNwyvTpNZV3UK8kit5z5EA27gJX9y%2B5l7TH6Y8IvDiWFYscIKUTbiVznLLPiXL0EmMMm94Xz7THuyAAMcuRbPhoE8QqMYRS8uJNULJbLi8CD1q1FxkwS8hJLNLVG70oqdpFFREujmTM2ADiFQHzlphIaLHCDGsVH%2BwIOb77DWzZ%2BpoaV5Il7wQTi20fs47tw5udG%2FkJB0HPaKCa4eGh5nkKXi%2B3r0clwEu6b3zjubNkdm%2BO%2FVU1CGoNVnGsjxgLkc4fFGUJDoINFRYavIwZqTuDsLeISo%2BLZp3AgG0fbPhOGOIqh1%2BKYaooodVUzj3VRNIr7Xz3DMofDF4kK4hHGGJ%2B94JKWc222ItjnUXWhZkfD0nCENpOrjBy4sV%2BxmrwBiPnYISvjh4GJXZYI6tZrHD2uBg0znQzhpfv9Z6Bv%2BGs7XpzGrrihDslQP7uz97iEpWgntqWfeJqfXflXz9Ax8We1EuHi1RPb4cZa7iGkgBkZ4DDsyMXJBjqkAf%2FlB%2Ff%2BcKNO81Bi49HibcMo6OxmCOSdou%2F1r7%2BjEkZweDFX5cTN1lls93vio7s1PCuGg%2FkKeVC0V6JjJ2Oy%2FFRQKOUHr0VKltM7tLArCXsZZoyTTP2PY2ssrC6cFKqc2Hh6U2cBxsRAYrVfJGGjHb%2FYX4h6ckVxegmWA6r4JBqNRQqc9iBupgWlCZLKXShr0P7446FuxHvX1rnxOGDXikr8PC8A&X-Amz-Signature=8948d3d9781d01c7d4cbbcc97c0660d353d6675aaa7e4dd921037f22cb229a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

