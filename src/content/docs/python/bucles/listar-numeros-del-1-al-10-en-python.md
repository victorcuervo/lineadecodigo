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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYNXTTIH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpmyBy0jRdQvXQR%2F4UTGX4mPw8M9SIR95fjeXRSVhKpAiEAg6UZVs9enGvqsbbqVNAIsczBeH9kyqUw8aM0rn3boxwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKDH1AykTHKr1HdVwCrcA6eQk60DobbI404FkSvk%2BlwhBxA2%2FWkOGYfy9tkorINmsNwSRpnKy%2BqjhpfefR9%2BoIguHKkxlxCLxJa%2F9iJVQKAjcldaVG5rjKH%2FM5Ztkr2gXO3%2B5%2FuIl5mHDxK8fSyjjNjXaGCFDWzRejQMKW87IUUVU0fMpFjB%2F7aEiGADHE9NSH1WjZQA4Q0W0bTl2wB7YvQwPGiNyLIfEiZYuS9p6XgVSjo0NhKnrIp4kkltMKrw%2B2LHKAYLe4ZAB75XdbepW4VKDVi2j3oeNt3WeMirH4Khw1bbR6%2BehSD8qTc5BlmMgJig%2BT27FNh1AzyHhqExkr5TvDX7ZvjFxr3wARyb70kc45he8HATFZFSQE2BWScs1LD5P0ZgbHKHuGeu%2BDVsp3nLVLu1lJF8tDF4k1dlfSAiaWYFsjO58pcztOohHCFBv56luz%2F2gyL20U%2BiWD9pMBX0k2JxAhrnoB4M5gRcTTNRiwjj07ayvg9c7DB%2FPxGb4Gk7k7nWxWiQJxoccjDuH6XFfbjagy2eFf%2FGXdnTZDGKdA9IqBOLRfPWzyT78es5TSveb3xW4PAF2j11dKJ9jZGS5lfm1feyYEn25qAH%2FrYjU97ovJWHaMrfysaEDzMY7Otku9su937z8us9MPzz2skGOqUBGc4nWJx62jqfU6CvYW7tm4RgSY%2BeigegAZoTNkfwCp0DhE5PhwYZvSegOcMtM9N2wene55eZLBlCXRaIHmBYfBAbmfvAgZnJNvu3Npvz%2Ff2tcp8VQTM5NkA%2B4OQuWsDyKg4WckgIb9%2FoCUklQ%2BmAPhkCO3AjoWTwZgKSjwdaSgNrRGwxw87ixPXbPTp3eRiEZUg0EyQeLWupGngvpWL%2FiokjI6HU&X-Amz-Signature=b5316eba075c3a7c525939f58bbf13128919f823a0438a3cd501dfa869450031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

