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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2W4MSUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK50x2qg%2F92SMUkAgMHKujnUoGzorLhC5QTPKtQghJwAiBjgg0d54QnpGphLosZLnnPyxdnOpxA3AuqbCAI8xLCyir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYV%2BdcFBR4sw%2BjSr6KtwDRs%2BRj%2B33L5CDlQ%2FUTwIAvrIh8xlwqioOb7J%2BF8soGr%2F7oSTyUe6xATzcb5zJWIQYMirnRBBzyWhCbvn%2BvoPH2R4lmYu%2FaI2FEOpgSgtfjm777qOCW2INUIoazTzpnwn5rGo7NLKiOyePKIoqRtimkyxBKk5oPku%2BM%2F7x6F1DIOBz5wDdV1%2F1EnwYwRrlQiAGnpXM%2BwN6eLRIlpE%2BD1JniAnfdrbUjinNi%2BFI6xZwvzSoaHpyR7GLdp81KQOZcrKtNMZQwvOqnIGJQVjj%2FT7UEF6RojxeCymMiYPRh2VTAd2pWb%2Bi0YD6vpkEo8%2Fx%2ByVxBhnzZrWl9pFM0%2FuMGyrOvBpzI8O%2BSrzI6HWIiwXx4mVgRbr%2Fee949bfk1ZpEdbkh4Xu7wCXeIB975j%2ByAs6T%2BJiHjmrgsCOQbLrmTv4yd3gnN6JVVNHmRAwAZVhEULN7bij3RC9%2FyGDYCt7o0J6oyIrkIEN0vXGimIbzyPTwl1tQ%2FSWlB1YNFXK43ZC9YzOtkiEJsR6FYXZpY9ZuEF3XUkD8c1RR6vzh9mOjHh8ouixrK6YxLETcA9HP59FIbGOxLq5CuDEnnaZnTx9J%2BCuzeWuFBHpMBZ%2B6m2cgL8wD%2FXuHMC1ArZHaOiw7MyUw7czRyQY6pgHWz7yTl%2B%2FHp%2BD5ffMvm5ODd8fhl3lTT1%2BZyqzJp8ir9C2qj45firN%2FSibmVTBGXPRIPMXOL4lk1Ic8ZMwm%2BtGjI5DUjk7FEmX6x94avoUfl2nBteteR1oonvcNG%2FaUmXLYDJpxbrVH3FatPOT9N0jqQRHQUzLYEEik%2BS9jU2Sz%2Bw0xdd8xcHeWqzYp6%2BfMD6dSgBuT8zh5gEvdNPXmEL2u41tjBpg0&X-Amz-Signature=bf9f7e1c9ba58828a02b6176c724126bff922c3972c65ce83b7fbc62a520df3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

