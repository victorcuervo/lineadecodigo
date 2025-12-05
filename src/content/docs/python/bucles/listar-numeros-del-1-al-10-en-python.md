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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSZ7FPB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT7Oa6wDfGBg53ccojl8ENy8zmKodN4DG1ExZoVSj3vQIgDzSMdnVe1qdar6v3RCGWcvNMeOCOdzfnN5kjRPFFll0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGI2FCWdoZDNQNAyqSrcA%2F1IGbal%2BW7eUM5UR104auGuBaUFp9yoi6VLoZdXS0b8BxYEVufK%2B4dwP1lGIqLuj09wWGJAd5uD%2F81amnLTZXBXx9bKEujDAKDsMraFaQ1tnuY7siiGgvBsDYPQr%2F%2BKTsW6W1ZsJ8iTqmLY8exBp%2FNH07WjS0Mo4pp8mjdLrxwqN%2BEQMO4X3pyecorcaiH2H%2B6tEb%2F0lJb8NAA%2B6A%2FRkJew0bZPP6b8KUEIAuMooZXvK3uz5M9XUVbgpHUvCtecA1WdAkZ8igKwyRsqOdSTK2ZzqwJLlJZQ9vayEeVxcU2pI9C0NkAoGEXtDJYQbRDOm1t4VaQ8I1peDX5tr9fKboVIG59v0w6PqNVBnvSw5yvs2LYE6Vbqv%2FUa66e5RBDoKX6TU6XZCkUn5GXan8tKMh39rZY0AQ3r4rcDvV4hw8JQb%2FFjoD6YIL%2BftyElzDO2m2MP7XTtaxlCq2M8Bx%2BD6ptDxk5w6QZpOH4CUh%2FSXsPdSY6MFm3O0VIJZUzO3m3RxSxuEl1z9pPFb0B%2Bgrhv%2Bs2RkXYVQPfhhlzkzgynQ5VuwxMJ5vWGfCrJpTrBtkgN5XBmJuhvki5nbKL8EcN2fXRXWw6LIP%2FGTXp5dbYG8YKvA4fY%2FplJWAOmfdXNMNrJyskGOqUB9WUeNLU3qSXSa1C5Cfh29NbfmHeh2ql2IeNnrg33hdcgLzTPrx3JQcJfSMe%2FtT1cAs%2Fb0jXdPK0BK4Gr%2FquE%2Fj02rvekdzBfI1yQGSgBYAWpCGJeWc7600fiDvzHKoZwnajXtq8lHGhTehuR6bfY3fPUvRIs2C5eGj18ZH12VQiokQVdr6qxPpRAOaOelFX3%2BVbkPCodiM%2FdL0v7JTV%2FnCcTld9b&X-Amz-Signature=7228bf9e3f5dd44a5208a631b5e1e730cb4bb05c0a48ae59aeb3867ebbb8d69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

