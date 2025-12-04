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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGUM54M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCEcayvNZ13n4DDnTfGJZ80B4mgTHZ66t%2Bur1OFbqf%2BQIgREvlbJJ%2Fo%2BXjL07eESiMvOVyv%2FSVtvV22rdx5MN9Kisq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDM7rt6PnPeXcf79RYSrcAz%2FLFFlZOTRQsA40mNM9J8AohMiaIxV%2BPGejjGuq8AH1xKNIbgMVwLSpYC4aDZzaTQ1b45ZbP40TfLhR8w0s7n297kZBhKp%2B6PjxmyQTSd2ipoFKskzWooijAc5F3FWy3%2B%2BdHO1ltVIiEjNfse9BYHxr%2Bl1GdLqzMGvNkZkjBC%2FfIy1HEJoIrDo3yEnPwtOugGZ%2F7yK5NFSUUmvGPE3TtXlhrz%2B%2BtwUv2XAjkcprIbKKVcEydDRmYdgeGMmx%2B13lX6n4MqF%2F55bEYfpVBvsRqvnKteomBIZ0zSA%2BP%2BbcR73AF0OXaPZXAX%2BvSnTgioCgtK9BKlmzreOUoAbXpapV1dMMJ6uG4XLMl6FilUCi3kTW4%2F2J0YZu3SDRDdc0Qrqwx2VUkr3270er826IjjHNojJ4ea48ktmLxihvv566j9Lx9MoeYJd48ZHrsuknByffEIO7FYJP0oGjAUiRBcMLfOl9l4xVFmGnDjRLB8Dh74I%2BYEdQjL%2Bza5Flr2Ch0awnT2VmHIfaNFcRcg%2FKj6LGcoFEYkWFLhldQDe8RvadftsxuV5csuI162SAGh0FW%2BYefRgZlkKN2ayFnGm%2F3AIToulNdddTcd27EZ1oEdzCabX1F0OJm36BgvpKA0oUMP7Uw8kGOqUBnBLDQnIO23Hhr9vFAyLQh1udQ8b1rQlLbx7d1T4bvWYNPWzUYXt3CIzYSiDQg2eC3qx1QWORYa23gy8Kw7sw8GrMaANXA2naVkZ1GAYfN9QyLBkgYDq0z5Ti13sl0bWorSt8%2FElS0X%2FHkZBFOWf7EZ%2Fwd48mgWndEPGIbuY5VAxD5W2rzP%2BJS9pukaL2VDJCk8JaOdQGLeoKemmeb%2BYYksvm1LFF&X-Amz-Signature=d39a6fd1fd3257502d319f32b3b2711cc77d4d1296ac786f4fb8795c74b7611a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

