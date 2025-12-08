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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WVQMLF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET%2FNsHswpxT7ERlMNagao1E96KDp6qqXKJ2otxMSgqZAiEA1EhIovVtNFWCt3GY6WU0E6Av%2FKpicOApqR8jrf5QpR8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPihQfzgMaUB%2B41ZKSrcAyiK4daTVyGPysDJs%2Fe3yjQj8MZvm9a0ZdV8u4ypkjkG5d8WxlvGmlvboZBbj%2BRhMNyqSRwnN%2BmZC9r8SftsKfd0z1c4WPlmZo6gJ5zTVWwG%2FTsa8YEFRy55x%2FzBSdwMo9sFBoR3%2BWOcAvwgBr34pB1b2SdrhEVtoWllBHIs5W5vfEiCif6n5ZNzw2waRlnDx%2Ff6NIwlcx7ffNsjcfMdTF%2B8GS3nYPOFvwmUWyZpsQ7TEc9QszkUbhm7tZcRmqqiXUZrqbhiNSOo%2FQB8OgwV5Vc5lXquXt3fXHDUKaUcNU1T5TVrZU9H4aiVxcL%2FV8f4xkOiHpEJCXmDZc7AtJkin1Ih2loHAOfni0IUAqVdclHg%2FPe45YsPqDOnuv4zSyQb846ZJIXqGRaTL91ocGzeVbsxfJOaFluq3TSu3IVofU6hdVncnDg%2BPNAKSP8wDareypSw0qgCjEgt%2B%2BmhCRv094QKX4%2F%2BLb2Jk8qOvC8ynDnwUa6iaiKTlaFMlqtgg6Tuj13hX416EnXo6Rbf8NY4rlZ%2FqlZdV8oQ2ArrTZfctkpMRcTz%2Blo%2FspUP0NK%2BfcIb4VPWp%2FpkxhcifvBvKm6KJxw67ktHSGGtoAxQp8%2BzdyiaQDnW88%2BimR0SpPtEMKzR2MkGOqUBiHKiT6ny9n9oCW7R1nVtRRSKkTTV%2B%2BNgJ4%2BtlGvR6SjHyLmorMfFIvvuM9rm2%2BrZunb48j%2FvaEnCeNil42BXNUYAwJdZjva2l3ODSEAwMQDnM4Dnzt4Bd6ThiN7%2F1zg5q%2FSaqSPArpcdjWCdrDG0W0FgAmzvbipuNWeXo09PUAxGjUkG5C7mh%2F58Paa8uGNzKBHKSkeAdbCChf%2BmeZgxICbIKw4I&X-Amz-Signature=3182b4c82c132b5ef4417325cb2d6a74acf872e81b52a7792ff77fdeac2885ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

