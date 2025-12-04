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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKUWLOIQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBxLvFmyaHXOsLKDj%2FpAbIfQt9MJXEgOebiBmbx2CgVcAiBl3OOIinKNo5vOWwavtc1Dwbyxo%2B7g7E5%2BjbpU2x%2FdAyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMMe%2BLP7ns7RmMkaBKKtwDzBDC6Hey7JetPxfpEH%2BwlT4tlwQ%2FbnCvkKX9tsvzmAguCM7OCsatortKQavZgHjt7dC7ckQRIDQXjWVuQ0FV%2BjoSbcEdKSAEik1lHS4SDtQ9mUHKuSL44TjH68hjeG8dhAlpwEmbiICPwUTr%2FE0ZsYo03hAoaIKGAhWzJA6Q223VLUgkWdcsXMR3ly3tnvmDrozY3EkzbvrYv%2FnB2Tl%2BiFn8CCLbUX2UKdc543Cw6yUhRi92k8P1FZ3sz%2BYpxVmJwzaDxcI8gq%2B7%2F%2BTXPZI9DJ24ifTyj4t8mEQf8Sw4x7PGdCMwrUPqA5XxBex%2FYAY8K0cA%2Bv7U656yYFSthlT%2Bs6rgBi%2BRV3OR18GQwflsQJLqPNI0cxy05%2FiSWGUOMHuzflDUiTQExFiBbaKJtSbGjtkgn%2F4O5hD2yz6uLzlXKzg2w9L%2BYCd1KXe%2Fedu4oVRO9MjNlnbGdgHqa9CjMRrPSx5Pwf8hBzGPVjfE4fh8S%2FEMY3bN5m9f40CzNF4L65AiilfFkj1mp56LhMZhuXNSYdFY4av9PpLqDaAJkB3eO36TzrjzDP6FPK%2BYXhUJnLWlL4fhCrjOTVHGE67uOUXX5RIY3Expw48PFr%2F39%2F%2BqhevfevULCvfzY1lBHZcwm4PGyQY6pgFuvVStZJ8G9iLdYujrqfJfWzB7c4QyuLgpiws6v1JzNYO1hWIV73Z4CEQ7NAx%2B2Hxn8BovS6EhlEV%2FNijmXMQcnt9gsMn47IrbyKUxAWYOLlAcAaVsM7b%2FOueGz3mfS8JobDF3TF8Ll0eIes8swiY6ye%2BhPACXj85WHl%2BMPkpBnpaz0srHKMLGnAokhOVvLDa%2BDhooJXL04HZzr2f9MdjkHKs2XDlD&X-Amz-Signature=98df8580d3b69eeaf1c249a9c8ae8b585b8b0441e5ee4a0b59ec342081688810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

