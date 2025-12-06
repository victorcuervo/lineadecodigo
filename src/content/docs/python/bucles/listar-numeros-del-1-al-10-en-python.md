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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFFH643%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSobGHg0IJYL8iJrxroRfDDrWBjDGDDqm1G20Q9SBICwIhAKoCD5EZ7I34Mmpsfy5SE%2BPz0Fiw%2BFh3XRASuJr6eEdeKv8DCGwQABoMNjM3NDIzMTgzODA1Igx%2F3p4e0uxBR7NBZ6Uq3AO3RNJKVbvBf6ex6xqdHAmyHCQC9nKbNovyyk7kiPUPRV44Wk%2BqfKpMnmtB9n0%2FxSXlJnTDxV0UcwDnDR3y4VMquKb41LYA62pjAGu0jNwP1EFTt9i13ficqS2zqQRmTDgA1eTov%2FsYgutuwaZtEzFm5KEmgyZbXkhCO3PcPKNc0PQlTk2XcehbJmpwXqInj4rpIsIdi4AZ8BF7P5MUWoWnOiLueaeLjO9OFoZdHXKjPUbiLe5%2FcbqaeG%2FOJD0E44iugdv0wJUHChWunMKpap35t%2BZiB5sniu03jGuuSVlpzt98jkxSslz2RFNQu00WKpLrXcVvTowJ8x25yra827GUmrD8f1hKQW%2FyBaGUfm0s2Jp5f3KuGFo4%2B8uvwxzVJTtOAfXN3PkFDdN924anXtJ1eZdE6%2F7iut4V1y7nCFp%2FUbd93qFu4vBpEg6IZcjUaEOSpakXkZ7W6%2BczXGzOzY4ojJH1xYNkFEjQVHHLPwHsaOEHrw3Uv7AHox%2FGv6yeWphtpJZXEEKYcDSPn%2BH5SXM6SAdmonyrw4HazGvW1AgESOpCxB6eRdUEJJGgn2C6kII6armc081etdPEDH1zw3wAwzqqTYOD4VBnhvM8VUL8BnqmjWJc%2FolV%2BnIxeDD8p87JBjqkASG7ups0JjPNCV26gnKYNwySRn3EbuZ%2FhKlPS3CvV3I0kWUegaFxNc7a3jX7IJ8296olQe%2F%2FuaYPnZwQQMqRCEzzEax53qVmLNBfF8pr4qudPPZzMZraWnkuU8Y6arbasV5HXH6km7SJUzX5v03QQ8pW6CWhBQUmBrXHvN8MNcCZi0VZIVsExUC7I7cETuIyQSfqhda2twCVvMyL0UlnoAV7fvdB&X-Amz-Signature=a200a21c68bae633e0ad8e6d6bc7f04da3b56a6dd1f84a6ed1f29b028dfe4aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

