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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAM3TNO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTuBYyiS%2FDJJ511d36AswVpeWw7eVc%2B5U%2BYxubLaOmNAIgZCmm2adl%2B0BuhV5YHgPP435siEksP6ehjtiFedgxax0qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC86jLbotMNNJYw4UyrcA908Ah5svo3lBwPJOneBKYPqcmFO%2BJONTBPy7qtfhkNO%2BCZyv81dCYzPxvQ2mlLnuIzeF%2Fzd%2B00OX2x1FsPXEGnU%2Fe4OZ7WdRRMy0GYfiMHsw9SEbfXbolU9VPTkyTyHIUKTDuN99ywtMfgXnF6%2F%2FzTuzs0cietvXdyXOnml%2FVPAC2Amfs6Opvn716OhKH69u%2FC%2FiW7VAy0asQcK0MWttcWpGQzV%2FQeFlPxSeEd6WegH4dwNjt44Yksf%2Fn8iv8xwCdPsZrv7mPFZxWuQzfjUiYeLvUJqEvKkvkuzLc4vpmS%2B3JW6rTOfxdvxpKrNapq8ZNORHdB7oMq%2BR5iHletgK9m5swn4VptbBQosHFFr1KMAyfkRkDkIyQVH%2FX48nC85dCwOf3XDH%2F%2FQ8cHgtQyYqoj6pkJOFbsACxRCbcY5gHL5%2BjJu0yFuo8E6eEzQW8KP1K1nJZWpHzPHYdXlxbyIFK3HlyPE6yymWgmzMG8dztJUO16b%2FvEvO3pB7V3tFPlPWGj33OaFRAeCstumZttg%2BZDWRd%2FcmmGPY1oNShi%2BJ442l9969RPPTIkp0vGkGHxZkgB70MMW0DpEt0XrkYfbZlwgD9FKNHH4rRo7CP5KT1T4ROQC5YnUxu5HtuOZMPqN3skGOqUBN0SHn5YEJz8MIhwoujmMpFWPGKBkILDY81dn24O5yASBLqI5tFmZ%2Fc4DtyC72S%2BvMjX3pTk4Ogmo9PKUbTM%2FDcdgzDp2nSmLntsVeBzlTa8oWN0ekSMQNLnbXZf0NiKgz08qv9ITVsr0fnXyPKqj3ps2jQ5%2BWJlVwy7LQOM3g9EqFvwk1cggxeeBOzE0ztAFxbfbpmuyzZ8omjBUANIvKsU6pfEo&X-Amz-Signature=b45f230593dcafec742137f9dce8ec40910565373796b7c602fd29cd9eee259e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

