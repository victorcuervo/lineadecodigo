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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKLYPXHW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvWOQdkNXb0tnVWzbjAiKPSqT4BUJt040ovVHBY03eagIgfFrAKr8x5GOuiLJl4sMMYWSQn6ZX2FZrOUR0mq1ZpmIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdEWOuMJg6%2BB9H5TircA5E0oXAdgPDwaLvLMBYpCMu8QhX9vOykDE9tKR50rM3z1kr0qpaG4crC07tNs83f8Tpg8e4v20rdLye06z56Z4QroNcOve3zP7fDjw4QfpOOCSQVdos5sYQ3ckSL9Jes55dhQ3yagTatoyVagE6dc19%2FyL7by26MIJPx3Te84c62Ls2UIghgAuPIS1vjJQlsTmYM89jwqzOXDZQkhckJ0unozfn45Xa54CZeKQt7N%2BTpAnz3bmv7uZivGJOGYGm3ayQW9yqRhOkUffNrAXKagPPJg%2Bye8NjUD%2BHU8ddHOMuC7aBDZVkzZtmHIp61APhQSalURauPoqrc1M3ZySUmbcx4nkdAne%2FtO%2BUOepq1bfWX16%2F5EbUy%2B66EywTs%2B5eqA2N3dl478kAbMXOAFpt0OQcx61PzlrvvJVuzp28iMW5X1LJu8HzfdnZclwqVoRPMOb0dwzogJwwU6V0lMO6yNPZpD7YeqzggIb36FjAIbkWkxAG24lUvtJcAyNT%2BngLfrE87c%2B9iRUWz%2Bmq7981WmCzrg%2BPyO0nN7fX0sbfeXBTUW1er9gdSPdn09tDYHR2Y38oVXJGKrU1bA6FtvlNAe%2BcGe0m4XfuF7cqx8Hd1QxwCMFmskPI3AeSkLxQ6MNT90skGOqUBywG6nfLDPuM%2FFFBX5INR97Ahkhzpg4TelIRo7ycPVzDB6WhKjGwI4sL9jmRHqBIALybGYjvVAD3%2Fxfs9dZ08NbDX7tIXGv98YoABwZ1OV6dzMQ5IqghZJ%2B0gpfn%2FSy%2BuVC7fxsBzkv5dyoYxB8HofUcC%2FsKsx6J2Fyqh1HuGVu%2Bm4P9X4cfPdJc3oQvxBDoxwNIgxlyeoBpdgsJPz%2B1aKcVNwB95&X-Amz-Signature=56d8b2932f68f6d2fa74510039e83816f005caa089b22cca5bb6392017e4722a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

