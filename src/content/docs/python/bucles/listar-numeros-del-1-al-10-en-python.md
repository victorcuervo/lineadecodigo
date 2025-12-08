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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7VYOYD3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FLutdqAaXtBfKA2YDKW7Fjhh0%2BuzciMaCYmHQpaZuYAiEA8Z%2B3o0V%2BanG4CljmTX%2FWEF9LGtn5XHi8qaiRD5yGuVgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGOfkKSmBy%2FOR3CjSrcA%2FKpBTtIyP61A6lpprtwTk0BRjhOOnB5zKA05GJs2zut6mEhNXW%2BJ6BpCYr0GFUaWgwd0cdn4phe%2Fo8Qg3q%2BhFcC3acHJsKvrASFxx5Lc2t%2BHiKFvCnhEf9Aedsz%2B5IdnMYhbFqty7WYcRluguPRJaTzD1IzZduLX%2FS1LEORmrPXbSyaa4QfjNu8r6HVGzgfHUNwrgac57wzS6nA9B%2F3n1ULhhoLjhqgqSjzCU%2BumL9FEPtgKne2t7ocyGB2UpMphyZiWN9Cll6tXqN%2BXEsPu5W1ptD0%2B1KIg1omhpMgSU6ZlhzzHYBERHF29VXj1yf75SKU8J3n0p10%2Fw6Re7haaw9fxJ%2FkC2UQyJw04HNUCansENhl8tNHTbCyShgIjmRm44YQG4n3nbCPvNCZ%2FzjTWJHGfGAxJA1bOu0EuJ8uoEpap%2BSMgW2ocRY3ZsXRojBcrsFhR%2FnQIPecubXyHWdpvKp6zwLw2w1ExX7MvSRZS3PXyjUPIu0jUWZ1lVjV9%2Ftm1lZVka%2BrWR9N%2F6bGIhKvi9tuzI6pAxqKF%2But%2FJO0fCnyy4CseUkQ1nyYPOEvAUbMvpvV5SXb6en1%2FE9mFAO4dQihYW2HmgB6PBmI1igOnp1FpPFo%2Bw8bMBzfD600MKrc3MkGOqUBJO4AjI%2F4bZcN4OYTYkf4KwzjgLX2P0DIGh%2Fr5QI3NC7fob6vOPaswIcM5A9QIhuoTRCpL17SSvmPo6N4WfJ1xM6lBmrWJ8Uak4VfNcX61JqqLM3GQeW3TGrox95vQxEQUx4j3KuqiYeV2SF9sV%2FzG0nSQyq78cG%2BP4ruJkdm858tMvEUkD5NsWkVg64PbYQsKMlP%2FEFQ7J9UEq1thjmRXagX2Dpi&X-Amz-Signature=9843fbfb423f4168cd8375657927c9bd1ae0142a7ec137f2b3448b100a9f590f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

