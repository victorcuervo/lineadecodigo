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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDGFOTVA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdWGmoUUsvrFgGBOk1B415rYTW9X%2F2zU8nSoFV4D5MyAIhAPpKnVohWzvwCvkLg0UdVioMlZ9wERF%2BJJIH9R6X1cTRKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJfjR0S2zg%2FQT3ZMIq3AP6MSBSg%2BeT74lzCukk7gQcbDeVuIV92E%2FPGIgLw%2BHjcU9%2FqG0dHgRooTXogrDRKDylg90UFTu2XwKXQycezxxh%2B%2FWRlTeTh3QUD0ZogGHdnO2eXhfv%2BmQMSFTkr%2BkOaWRyj64dPuPH%2Fj1sz%2Fzop%2B%2Bo0ERnsZOZnrfvVfDea3ND0U0vwyDP0%2FjW4ysTSOuR9G9nfsHHURPi%2BEPTqTzPy7N93RweenI4R5yJG1YynT0LjM0v1j41fMZm8HPPeiuvgzxK0xviMYUtgwlhWqLaAe93AWw0WVlDMshHHGeMYkRU0ZhFcZ23KuM2YeQIxLEyGtKPUQqsvPw71IWpBQQAoJqryTd%2BDR0lsGDw%2BNYoWw%2BlgOkVHbuz6xj%2FEtUiGZVt78k7MTmAH9%2FlXZDJjE0cvj%2F%2BJ5AWiI%2FkTRtV8RLVOToDFNHKGnhrXdGclJ6UmZzTr%2FFQ4e%2FS3S8R5SOGwseMw56%2BzEgTp%2B2J%2BWYCVj%2Bl3iT9x8%2FzdLSeIug0lIx1EbXwqCodWhBbNT3V%2FXmowUcE7Vtxhe%2Bm2sXsoEOg%2BtbDJWm4TshtvJd%2BHqohRBAmHnWhCNKduMStRyI%2BoomzioUnZSYiN3Jp8NqSXR%2BW2HatF%2F5DxkZbaV98dS4q1J1M5jD1%2F9zJBjqkAd3gH6xICyOi3IpqIfDiUPwjd9oF100Qjr%2BJYaKt2y1xvIhLfIbaYD8ffkFGMe0UfpUUoYYdk6N6H0HljSQJhbrriQPD6I4jH6DlTE%2B3fmAeam1Gp9%2FcWW3iVZ8JCMVmx3HiQ6RpEwUGVu%2Bk9Hk%2B%2B8U90Ut%2FCyza3Jam7GyekYElPzBsbE62YVp9UJXRdgYGZSLVrSIQzEWM3AiYtkBJIFfdGcum&X-Amz-Signature=1f030969c6ca89e53e9e387aaa59e024ec954fec9e723ae469b662bf57d3558c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

