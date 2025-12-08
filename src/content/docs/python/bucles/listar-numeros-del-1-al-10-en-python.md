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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UILZJKMN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHC%2BnwB%2BA1tuRxYcfjKewRyaY4MpMpxbB8Cw6AiCzXPQIgF2pe1GfxgpihKjM2Ey1UY2Jdc3MpktM1xCDGu9fQBEwqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN58WPkmCjFy%2BMRETCrcA6mX5R%2B9fasO9b1VbdH0%2FeNRvDZOpvDp%2FRcTacEfMmTZ66JfAhJeNc4BEY7po%2BfzuQp58gbak3tdOAn5fk1yygcIIU5UYhxcO2ZwaClGvm1FWXzB%2BlDeKFw7mWTHNUlMPZMN1ljcPP7p%2FAC7RRHP2%2FRrut%2FJI10Pf9F0b2rc%2FQoyZ7RRlT4sfBu%2B5D8fdp7kH05%2BEm5Dlqknte8h7QI1qaNsSyd6kobR4FpJexlWvns0zDFd4hqqSq2Xk4%2FL%2Fbg0CIucl0TMTVDhO%2BIuu%2FoaR%2Bw09X%2F8FZBc8eXIaX27j0%2FXCwEh%2BfXOrevrn9GSMUKFF4InoN1liRR2dFoMEm%2BnHfxnZkmHTL%2Bw8qrXsj08prxJOgBGm9B0oHtHqejKZwJYNxJyCR4yae5bjleLru2XQPy5VmVSowgZa2wT4qb3rkcKO%2FQ5xOJO7OvHQkITsvm9gj7zmgUGb1sAidlP1y3%2BUu6qPBcLkI0%2Ble1TeMz7ZRHA2hdtG%2BlelWwTvar%2BzXujYlHrPYwJ5ViXqPntQmv%2FgBxd7Zn16zab3FHNkmwzvaLsYvvs2mJ43Ol5D2gaRpFrwYkUxBLZ7he6%2BIPOdKOr%2BEUFSQGDs%2BMnTEZiZkWalIvlAWzqnkv0Kqv%2FAAaxMPeP28kGOqUBozCipxl4cY%2B3wQ3GpV5uX%2FxMUO9gyYABmlbQOX2cRIqL8%2BrCssxncKCn7BXanY8ul%2FvxZTu1rwA0U0nPqFL9xsjLn%2FOg0o%2Bn5Rm3Fa%2FsvT9fzeJq43kpC6wtyy7BsH%2FbZ4AEchE6S%2FK0VdbLZGE%2BLD5fXyCAlMe%2BZBarBDZipftcAzPc6%2FJxMBNKL6HTGjOY%2B9hR50Fnma4ug7VNri8CeGzZKQRc&X-Amz-Signature=eae7e5c99475b55a74a56aa5a0593c5d5ca1cf5aee0485a0f4d523c793fae1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

