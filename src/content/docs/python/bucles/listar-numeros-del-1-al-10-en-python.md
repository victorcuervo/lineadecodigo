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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7CBFVZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQC%2F1Rm8U0Hxs1bSR7hT1f4B2AtvfpFE1D9IyDlVbiJ2WgIhAK67QqA1BeP8Qlr2dRrNX3plB%2BCESNWHlTaYj%2FuOL%2BqDKv8DCEMQABoMNjM3NDIzMTgzODA1IgzyS7yNLWIjRpF8Hqkq3AMVPNzivb1p7%2BzR%2BYUCBX3YTTCLQgeOr%2BaFvHYyGUWiht05Is8wCzJL7PY0JKAP%2FW9Pj71FYHoeWE4LB6CzcC5XQSKbTNKbY2fxNmT0QeNZSGbpTVw74PhXyWj%2BLTXBIqyq9AiCcQrXodPl68fkVMrO6qZeFKsx2OFjoYMZvTYNXX4L88hWQXs12KeXEqtSjXer7PG%2BTkOTiUKIm5YKAdwiTAHwN8XKXZYIMFeKxLeANu5qMeuqy2EfkhDMTCr%2FPylT09ctJaqokJJCdEvEyZl8J6A4mZvkFAktblwNvVhRbUDM58RvU4SOIIYyxmTYZGnn8NgEWQiP%2FM0DEIQQ9UVLp5jlwpwlRsSPD0PA%2Fg%2FjQAGVm6BVQ2H028XrwCrSQon0oQEIWFGzozdLkQSmnzXvAv977MI1UsyJAYli8XhA9TqbJcg4jYz0hyuxVJC3gZ4kHdwOt2gFffu4QVHgyh%2Bjal6WyQpb%2BQSdCjpd3UWBK7Wbg47XlE0OA0l9ELhp%2B3f2o4B5irsLnz3aWjxfEx9E%2B3ZajNyyNJ1PWe9K3YwuMzj96b0Mfvz1VUuQnGJzWZ7bHGRKzUXNjdvwxGpuIhzh406a%2BgghDbxQWmOdQJUdJKWqskkSkl2IG2JqnjC3rMXJBjqkAf8afVV%2FsduIAE4fFrXxtWkvDn0hBRtUNNzSUoRVlm6%2FKc4VZn5hiHpq8BvpEJ4yvzDGK5KHIPyvSigHEps5jyL6Jn2M1Pp9aHMuG7JzO98rOjpz04lyv8euJpxo8Vfd4QiuvH774ZMGCjR9lD4QyzhXm12eXxQW38D9MR2naYv8K2fWe5DNN%2F8SbKFkSAmjg67d7JeVVLegsfesivuOHuyV3Pvb&X-Amz-Signature=84f56420961e3fe5d86ef981fb2d66e4d1a522ccd2dd4fb3172019ea5d874d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

