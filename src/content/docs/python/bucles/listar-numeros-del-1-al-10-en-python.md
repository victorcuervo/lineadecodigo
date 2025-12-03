---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TX66TBD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDAGe%2Fr4EhUxHrt5oKpU2nWIVFn9x7c4HInb4G0wHx%2B6AIhAP1DPk0gXlYaekUiXMo4oIMmpDE7oYkCBv2z%2BueTT2LTKv8DCDYQABoMNjM3NDIzMTgzODA1Igxx7AEa6rOPwtc%2BYfgq3APwdnK91Cg2QHXyRkldj7pAXuOB8htkNW6mljlob8yeWFYGn5n2BF8cBJtoU77dR7NZ0Juu%2FOkA2308v%2BJQ20zd8kCqggB5psaoC78bjBbw0LdmxuCsWmhoLBFyUddOzyJXXzKoh2e9tlaKxdkGAy%2FB4F%2FdcQtxzCGtE%2Ft9yhBfjmuo%2BJL8Y7sRNCsbeHDm82kjbPP5PkdqYttlSn35J1ctL65w5SY19v3Yi8aZ%2FyE2pGsjEv%2BkYPyC9jVy7FL5PHDWUmuH6X6G7iD44ljA3R1YG8oI9%2BJm%2Fvb7GX0Sllj1itxX3j%2F6QdRZnHaDq9%2Bl3NtZjYGhCr%2F9G%2Bf7ExOiIYbK%2B8rIVa9sR3ywyMgUg%2BvdOlAi56bReF3U8Wytsp70vI%2BVEVHc6wtxh5YnaxHcOWPtioeoANju1IE5ih5stE%2Fxyd8d4k63N8fE9Rp0WFP8S6Aq4Khm5o9fDEuf3h7FlPIGxrHu3S4Ji%2BHIxZVx45d4kn9czO6YjyBsrNTUBqyxnVCbnhdRutPgXKTo0SKNa4Xjc25LPHXvIxz6qZdER6X5%2BWmiFek7%2FvzVhyXjMA5k5fERrPjloVqN%2FmzhWIQepww5Kbc6rT8CrBj5lFkB2wo9nKDyQfdAWovd6X874jDXvcLJBjqkAQa2V7KJ28MYBy1SalFCmA90VH%2BcVZ%2FsORRshoCvwBApd5lxpP5C1%2Fh2CPI%2BALGFzk%2FO9hykRZZhsuj0zwUBlW8RD3TEBIN%2F%2BEYFwA0Jh2tZDRx48mQ%2FIlNe%2BUMLNmDDe2rEt2RZwnWLf0vt0yltT9DPzZRcsXt9IFYq5i7QtD0HTM3cR25D3HoWT9tI6RvaHXPb4XVFkdF0T5OGHWJXwml7mVej&X-Amz-Signature=5274710dd43750daf436e673dc586b849191e74f5bca489e82356cae8a35b41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

