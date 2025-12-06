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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UPHGVR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHFNtbkePdeU5HjksmRW1MPxamdJfM61jXissk%2B1h4aAiEA6Gk%2BnzsMtR7R5xV4Exqqw88z1HfzR4r2ejRLAXy%2Fo20q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHkHeAcKIiRvHg6lhCrcA%2FXIjBQ7FalYTvphLczgKW9TDxqi%2F03Jfkt6MnlvRcxWrnytmfdituSCPgK5Sqcj%2BooKK4lMqnUPUOJWHWqDA3IEZ8Bpyi%2Fjry2GKIj%2BrPc7323%2B6BQFBx0WV0O%2BJqgnZM9M7cXqRF1%2FBYG%2B6N4fTNWP5UpF91rlDUCe0uC59Z%2FMYX%2F3b85EU7PUJP9oUSJWhZJ7YHG%2B1glvo3QjV39UdLHGymhNKwpglRu2kx%2B%2FAptq10u9rQgYBPs7AbBMpp3ODNilIw3wzMGwgdfAtcrwtwFFHySoB4rffvTTwiEpmyK7X3S6OHY2cQfdmDFVCNROjEEFJp0XYSfJ0ajZytG%2FfGQRho6yoslwj3AiE%2F1AqgtfkFI%2B9IfUb0g3WeXxWERN3qKfRh5JXHA1Wy3XS0XL43hNNn6wgyhDJfNbktOZA7w8VJh1f2BoI%2B2rnLlp2GjBPT%2F1CIlLfYlF9uaOr8%2FkS5Madxd9fnYKAY7mUd0t2DaiC5Xs5WZr61YGJCEwFOhkYehgWBPULsy05IB2X8YqonhSjEuPD5%2Bg1eg5wDZfdytkT5q3WNnCoOzUj7MabtJDvAUengzcJWQGZgDl7LaYDnFI8sQXqRYUXo47dEu0PiQ%2BcjsrovvDeyhBPEtrMJ3U0skGOqUBp6g6LJcDS5CDyXgIfquyEgXnkhIjs5vnTOU5jLyV1h8N%2F6ZVNX2abohTS7Tg3dKmDPSTh9PrKHV4pk71AG1Rex7mV7qiDxAIUQ2EgmMHK1qdabzvBqV8TVhr7rUMBcgZmXzILXwnOs8jvRQOIWHAAk5E57lRJKD%2FRBdjOLQPneWqamtU46ZfArvSaQlfDDsu08zv2fbq65ooybQceVs9hO4%2FVXaE&X-Amz-Signature=447fad2fff4511915f535b738de3ae77c10a422acb2e287e4224f8cd6152a06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

