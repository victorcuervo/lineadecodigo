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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQM3IU3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICJMo8tMR0VHHXKLodphXGMbgVl7BNJx6eVKVpMubSb0AiB9eaQsV7N%2FPZcp3mr3SyAiexwpnNTN%2BsC%2BVywV9fvKsir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIME%2BjK0DywuEeEBA3iKtwDg6xxIya5oKWvsmQBndmVY7rSIOBYT6wVTM0k4OQYGuT6Qr841iclulJ46pdEavkCPw6V8W%2BZg1%2Fo0EIC5mw20l%2FJQeiS99SuZbBGgd%2FrgMSXBnL37L7W2U7Aq5f%2BkGoy8fUfVNX3UemAMZOIlahZF0JdaJ%2FhzcvNqARjHbmKN5UE%2F6S%2FUiNh8w8%2Bq5kZttGEdhYB7q9fKKXR2d1ZbmBTThY3Pg7Esj9ErNizcdfMNvfyU1veEeMmlQcNaYrb8CONnlFl6k9xYrIHNH6CC%2B0tptkGiKTE23i%2BqEDkXU2A3KcPjckBA6rcMyJ5EPgokXsPf3zzREaBOEmrwIICQMJEirJZOkUlxxfS%2BtdN32csaOKR3x%2BEpqygiIIT%2FlzqWm9QhlcjoP8hV%2FcgwZBdCAV5x6O72r%2FGAIsK%2BAwuSH%2F8SS4%2FqwWkLBnjAjn4%2FXW4bskxQp%2B%2FFUHfdt%2BdQ37QmvMcL8UqAssf0ZDCaGypvNkxQllGDZ4z69EB1xyo8P1DykiegACDdC32rGrCyCsBGtJ%2Bc6xGlTyLj24iOlPmALRaX3Xv6j%2Fl1N1rTqyFO6s9w5uhOynWPjHWLiRRqbuAEofYUcgzLGOYRqmCzOtZ5FiWlIWcVM7lKKs13Thpqa4wxZDEyQY6pgGhl8QMby7VaWEA7cZm4Mfu7E0i9qBBn0Wwoey8aRwxKDc7RsFYYDklZ%2FXLVUpScwBFNOALWnmL7U3qcycMttlSJuiupyWdoNFrQdPnDqrmMxpmtDlN%2FY15f3QYkvLumpgIxv8%2FjbsOYDA5cily%2BIN102%2BpoycG3pVqDGWL%2Bk2trCfTvIqr9Hza7NjekKRc40pSYyKeTbzXg0339pbeoAkzSxDlD7br&X-Amz-Signature=d7528473329d44d5aba8e44529e3ca5a00f750847443c19b400a0835df2c9e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

