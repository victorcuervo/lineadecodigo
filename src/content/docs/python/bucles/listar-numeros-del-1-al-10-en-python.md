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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4X2TMOY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJy6EINWvOoHqI8jq1s7Xei5dMafz2tJn%2Fqy4mKf7wbwIgLyNH0kxFm3T3woxtHEx8YyRi%2BboH7sHD1a3%2B6SliNwAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwe8WG%2BXYSIi1T%2BqyrcA3O14CPc8QHFMY19Y%2BFJCVK589yP7wcwOpF%2BHm05Z0MUxJ1sJKYReOa3nPZeN9nm%2BiZDU%2FGgzN2bTZVBdaxUk4xf0ZqAjxz0ujZ%2Borqw%2BkwotoXXtWme26IUgryZY4fYj40ClFaB52Jse7aqDRc2ieOEMafAOU5tHOC2y0JcOncxUAU34MxxcOdpwjjn9mAE6R8hUIdtb6nOph1hljZsjLn%2BFmZ66x3gvuuZKyRv%2FanTGg%2FH5hpu5TZKWTVnWrB%2BcEM5DYnjj5XsMYFAafABnnSLe3NJpwk0F%2F0pMe3sq22m4TuoW%2FMbjmQRa5rHIlcH234sWTDPDgXPQjkepv0PBfP%2BWBR72gnzJLLJjS5%2BMdv4tAtP25h0LWqSEuxKAXwpH0%2FGse%2FDAl0jyqvAYVo6u2JEPciinN6RxpN4DJQTUJnOvEfE3ou7pH7lKlBrxPx52szyNpRBnLMfUIflXKmNrKQZ1hgioGaFNO13O9z8x3lhmllM8ADbfE6QGDY%2BKLTUgfbarXcbo0Lb%2BSv7nAocItgIdoq7duGYWSLD7mOVk%2BsFghkY6dbYc5ngjvieqwu3jkfJZmBhuL18amJrnq0HHHl1982s%2FgFNfAyD42B7w4F8v%2FQS61QccXCVrFeVMPyo18kGOqUBWRypMcnVhUmpOPmb2yhSGI4OhPK%2BUU%2BcT1f3WZN0xda9eQeAJOIbxZ75t7tsGOGK3Nq6LOA7dvUBIDPtsdOyqiU%2FLLfEYcIXpG0dOz3oKr%2B5v8Rhb%2BnIinbJxLazJ%2B8mbUz3Od87p2qeLQH3wDma0EV9OUfc%2FZpW3iZhm%2F%2F4sc3ZgdfC67WlVHAplThkA8AVv5YQStTj%2FVTf0JDERjvVza8SEyNC&X-Amz-Signature=4ba2f31cee45b7d98a609e10f6f03edf792199b7cd56560ccb6c8d0fd11cb580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

