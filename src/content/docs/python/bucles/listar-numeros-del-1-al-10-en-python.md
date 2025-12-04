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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJE7W2B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDW9mMH3aqxIut8V9%2F3UtUrun0Zm3pvAR%2F7WUGHwcMTMAIhAP0osoLgLZXRDxZ6KAuyVZ4C9NqY4at7VEPcBUf4VsnFKv8DCDoQABoMNjM3NDIzMTgzODA1IgzdEAyLV30ddKeOjHgq3AMKtROiszVE4pR7YDST%2B75ejC4OlF%2FI2S7xmW1itX%2BGrPN1u1wGe8v%2FyRTcWvXdSD8dHnzV9HfytAJz7q0Ly1gor5YLtRwy1U4slIWB4LGX2fsEZ7fa5X2tk6nhk0P8jP83FHeHO04IqkTOmy78iyGYVSr7fzFJqvmHc0c7pw%2BTQGrOPaVkq1n2BZsD8xfHV5%2BYgW46i8fmWjdx8uOpF1ysDKttEFY3gxoRZn3dW1RKdad6rUSGKfHw79HZFPWT4BTR9AECjI4WpmWRRaERva%2BA2e3i1rZ%2BLJcJa9k%2BAemu3uxoGiNmuHQ8wCTgS2kPZfK%2F0NkyzzYAsWnk3%2F4Rj7uJPWReItTsI9aZ2oWLa3sCCxE6ACyzO7qSfFZPmMeprwOnE1Q5el%2FdWiz4Xb8qh4L83pLkvDSbQ4p0oKjbL57HhwHWcAK4qDqViRmrHgRS7RMW%2FTDz%2BvmTEa%2B6MbFqbs41MA6q9cuQLoPHjbey%2FtkyF0u%2Fb7rWmEFF5frEA%2FGBJA%2BrCUGrxvashuC1KCDGF5uylNS1vYu7XKmPZmyXbF59Orrzps43qUvg8oF5XoQ7D2VQpNqwpTeeQ1B%2Bd7bYI86Y7D1f%2BKtjpBFOx7zrhOP1mJhW%2Fl2abYFvzytN9DDwtMPJBjqkAdrHOEV19Pj5efoCHIQTHgBG2T0RVSh1Qu8a0NOCTikrgRNh1HZkMC9LIAhpXnY2rj%2BUBE0PmzrFosOEKiL%2FbRqwKSY7oHEmyGlb2ZlMxxtgJO90AdpxwIu%2FFaJ9t4dKKihUJgti6SIKlykpVx1aiYtjTcgyI6lXjLub9%2BuUAQmrE3pqtob2qUxPRpg7jRDNKlywAlJWaciecQAylYiVWfyCg3tl&X-Amz-Signature=fa70c5de455b62220a7221f53799c448238a2b32d5a6abd512e2a3d80e713671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

