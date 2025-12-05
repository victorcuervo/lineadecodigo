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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7K2FC3E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuJWWnp0JLiIS79hTQR7TGuU74aNp78nd9Ll6ZM6xUXQIgIqqOKuytPNp1%2FQHTrzNRym9Bkc2W%2BN3QpprQNq5Sdowq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAmHYp12F1KjAYL5PircA%2B7qEdyNOZGQEYCXi7sGAwlZRvdheEDiWopIhGeSjLF3h74A3UB24XQZo6DUK6c45iFH6pU5h0x0sNVpruArHEoYJFpZKc4AobwfLABPsoCbNp4Kut6em0NTEXkxMM82yr01labBAEoilFgCpxWaKs67NkD9WQa94Po8PNVIPQwT1bB6K%2F2b%2BQQyCfEZ677FQZFK4lg9hKPq%2F1%2BAum7ZnVW3JqUg5BEJiQl78F2no3fCLUTkeqdswadHn2nf1d2E7ilk9oL2PE1DL0EuXhfC0hdwHhjbFmxMaoeikKF9feAaqcgduZyS%2FrsRQb3gN7uvQa%2Bh7lJlbPm3eywS2l6GDjgZ4DYg0gudO7pyefSxRjK8HBJTLUo6drrasWg1cDg4wbJK6eWH1LptlHyPd4pQaUc7pBY9u%2FdP0VmPd6E4Kd93h7pkzzl5uZmHki7LYHikUCP25blM7GPQKdLZAvd0MIzQuuJw2bNlI8ubVzS0mmfEjOUbYf9C0Z6BVKuDgBik0ensBumSz6NpVps7r94WOlAUw0A%2BxwLzm6mKvh5tgGHvqIgMMykajlRa1oR%2By89ewazt%2BG6XCb5LFDYN3R5BXVpLvI%2BKJcafWKnewe52bo8HHA9wg3NfKhJsHGTKMPDMyskGOqUB9mv%2BdYCmlXnonzuIQWWuR%2FGl5Wy8RafcvdWXmgYgE7NMfscvH1RSiozSQKq8LlHfTru%2FSiLoL5V34GzYw8y34Z%2FlYdM4a0dKA4DYqPlIMMf1tbK9ViZOP7VIp56pnVAD9sv1LJkJv06JMX4kR4R845mrZRV8JkcIU4HOI0%2FQqeQcbjECnBQjIqkIMLOUpYGVn74UzqzVfh5F7Zm5cKxPLYU0VOLP&X-Amz-Signature=8a6f572ba753ec5386afac654e0e4f3910975c4051154e1492fbef7eab2cc560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

