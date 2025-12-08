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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZSS6QX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTPiPhsHSNNlyDZVW8lQKTmI7WR3LJYss3ZlNGYY5KowIhAOmAShedA%2BD%2BZydgjbgqRZX4lL0j%2FHFsOf%2BBwWad90pWKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh2PaF%2FzUvgbRBMKMq3AM1EjFpRG0bYS0hl4X6LoimNaH9BK507Ll%2F9u0mvQq553U7HaLr1tnGg8LDVL7D9Lo3AgEg59kEtPHA72tYDXxIPYx3lnQ0UWaIAwJhg%2B4eJ7%2FXCbwzIAT0KUI7lCO31DYdVr4FyMHos8Z1FcD1WdeWt85t4oUB6yxIuicM4BRwbQnsswbtRv5etpxA3l7H6uE8kg1FxL%2F0wx5smBu91kUiF5OvZk%2BQrpsOm3JVBfLidBt6gewRKv6C8yaPp0LGDRJh3wjf%2F%2FeAF3GFz8t03%2BdM2zxnRYfe5yG824Ak9tyjxPMSyqGjrtvPPU7FsagXjjxQ42grFtB84nYhjubi9AXzUY%2FJKb%2B3qvvoykLDTV8XGT%2FKuM1HyksLUosLptgtUQj5ZuVMISorPvq1WSCvRPGT%2BurJTTCzCHXaJ0O0MXKZIKGzqew%2FsFEXyfI3zpvEYUkvWCaxhMzDQ2ck0anOqQiFlbwRjBUAIz%2F51yqheCbh7FwvSSea0R%2FVnCmXh08tV0LLCCX6Smvk6OsVIXgczYDDcDqSyBwhm6HDNH7TyxPK9YKatXpUN9mnT0LVWQyVl7ESQlMCtZ5NFXHvEASL3OYFYBFyafDlcHSmLmJY6qF4bHDjjAiCJ9TbkXVIMTDns9nJBjqkAVfw3sVsmv2XrIWJvHULpmRveg5GTFanjU%2B06obxSdz7pKqsJbTDKe2jt1FBHNyy0ZGM2H2F3JGlKc5%2F2c2MAOIssQGu3EyR25fCj%2Bx5rN8OiLzyYRUPpVAUQ8yFSAn1OUiDw5Y1GadTm0G5ar6YiEwYD3uuKoH2QwfTBCTp92VN%2B%2BzT9m8fC1UVXMq0oseuwS8YlGbpicFCgAlcUO3%2BYFdJ7eI6&X-Amz-Signature=b5e2149e30d0c5f0dc5e28115700b2dab8ca7dd4cad7016ee7d53e44ef08e771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

