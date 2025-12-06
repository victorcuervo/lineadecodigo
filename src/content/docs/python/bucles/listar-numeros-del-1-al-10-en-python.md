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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKKH7LU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtkDWkSQTzvU27KW0Op%2FpP9cY8pvKB9sNFE9s%2F3041EAiEAqBZIEbUy3i4yJl9CIhyaZESPJH6LdKKiXzW6jMKTYdEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FsN%2BG%2BnINdXeP81CrcA48QzZFKT5hzdYyCdEAMNNUN3JfGoDjrCYUbxqeS4yAwtldkANhaKILyezd%2BqT%2BWqzeYsD6qHCIm%2F9pahghO15SL%2BWR%2BdlPm0Vn9ku1IIrXdqQOHL79W0xTSesqwQ0cdXLYgUEmz2i741RxGF%2FSwfntPGa8A8tjN3F20yshJB0gVSpUBmXEO3XMyWBxg8szoGMvDtXH7dYI8butmp5J9MtGEI81p0qbvofz%2F0MAh7lqzfZji0IxKY4KC7CfBv9gEtGFHVSSpBhp0FNVx48NFS2gHBp8JWqCSsHxO0e%2F8VDw8OLZVSyTbr8ssUkxu3oFs3eDbnKjPr9KMPoXjd8aj0E6fEYaD%2FrRHdeWBf2ZLRkpK38PqvRsE2F3AXbzI6%2B1uQdymxxm8zTA7QtTFLu6CUqSH9OjHhiCTx23nDw7N5lxFotdYP%2FiixGjCRuMXaQAaFEr2xYIAxj8usqkM%2F4uMIimOvVfHgJpd5u1XDyWHhlgUGWeKmsg%2BNwdgpDz4tLJxUP5q3r1GumOTJ5NVekm0mFfdyNnkdQFowZM0Hix%2FalmOIbGHgVZrrrKCKwjJIpawiLBJ4acQ1tEQI%2FRk%2BsNWzkYLrNkuhq92WcydcEAgwjP6fh%2FGY96PvhukdHWSMI%2F90skGOqUB5aU9Z7xgN28hVrHDkxHvrBUitwfoQspaJWRuCfban9nasB7YP04EN7BJgBxbaD%2BOB8vdWxVvhYjVHDpKVccOCPYm52XIykk8XQE1JARpw4CGaKV5HkZo%2FUetA%2F0wqZ5e%2BYpuQ0%2B%2FjHfTxDzZ0fmXqLxrRqko8oOzYr2haMAumYvOWq6cww8Fodetd%2Fa44TqD5%2FJuQ0Dn0XITbSEGuX%2BjzFOWc475&X-Amz-Signature=33e0a849c8d548db99230082a6d3c1a906bb5ee08430514e4455013d9c2b5237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

