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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPFAXRHB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVA%2F6kMDPhU73%2Br54ZDDomG3UAfl0WYrpdO9lvB68pBQIhANkmPver1tDMBIHHlbq9T%2Fp6Wc%2FtGkqFd9gnnxX1DlunKv8DCHQQABoMNjM3NDIzMTgzODA1Igy9jEvT3BbaVA8niv4q3AM9KTPQvSfXvW8q%2FGfrH%2BcBUWJW7smKFpvs%2FIS7VDby9YRyf2czzhhy9R9K9TVrdSe2UEUmuvWVk8B1UapE7cH0MvosasqQEafUFCDZwUSpZ%2B3NV3moUIK6wfcdzcFMFO%2BMA57vDEO9l912gS6qM6hLcgqT3ZnLp7P9hATTaNyDAVe6clHqz3FZ%2FRhw79dHmuJtTd0w39pBvvOpGQGeaFTHmVNhQcItLnDzOWJ1OaR3jgLIxrMLklcWhFHDIzwVnN2cw629S7BMJwWe0apUzYEn6k08OaL1tOQA8ZwHMzRbwoky%2BJ1ws3ZLbG1K7EGT%2FE84ng5tSYhLfvZKmdWxaftx9dvQxILutX2OmxGK5pTWmg15OtHQ77yfJi%2Bv8xN3bNEPgox0AGeBy%2Bp6sBgYo6MmRWD%2Bc8V1ioquBWhvwQkad0OUyGIDM5pIZl6PDm0E%2FLg9UhP1mDb%2BpUE427bT0cud6UhXkMq6Gihgm7tRn83%2Bbi2xiEoke85qh6Dh2JPvLCahj2syOcOcZ0bclRJkyujsTb8mYf17X6UV5tQmHYojANUun3K4FQx0y4GXwq0svDqdeKSwMsIChH7XRXXMRx5RYW2D%2F63Kh7ua27tCmYudQYXbBNhAWb95Cyy65TD5idDJBjqkASCv9sIF9OTx4vMLf29dSVwxBBsdFwV6XqqWbdZ6jIXM6w3OfyKjtKtn6swAJZQjJGa%2BFgbly92jwwec5KOlhW7HtNQmHS0uUSMu%2FXsY72xZv6r1jcfZuF2cdFzAIQPqpKTZ%2FygaUQekje91DNn9FOtYcx%2B8KsgQtw2a760I0pJPV9n4%2BxKlLCzStn%2BsV1xBBlwUoJte4K9oeE1wpPp2Ug%2FMn%2Ban&X-Amz-Signature=cb1e5154851e4455d89d762f34eb3fd74e1352ae641faecda6fd8d34f9436cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

