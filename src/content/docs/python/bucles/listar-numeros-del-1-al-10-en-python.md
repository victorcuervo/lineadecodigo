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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5TFVUS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAno8Xxt5bguJCUxtnQ80I49Fi4uHA5cgcW9sDp4UizHAiBCeEABGZPfKB4pFLAkq6LZc1fxCOYZkRW0iP2UHtOn8Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM5gw20hFYFZgjM5B8KtwDq5K%2FzDWLnzEimt93MoT9a%2BEMEJayKu%2BmAl%2FsjJL0pHLhLdHbg6FG9ra3eU7fGwthCJ8Vd2SrYugQETR0ufpR2TGxXGsfVWRQqIrgcOeEwMo%2B5GzLTWz86%2BNg3tcmSOzv57ObT01eLVXCkD51nI2JvLpLShSWwSnkg8XLiRBgA3Yq%2B12NXuO7V9%2BW%2B4GQz5gUqHhwpc5OKPBjP0k5xpRYAEbn%2BkIvODNURC2v%2Bw6rplroSjSxUNdtZ9RvPJYkq3vDBxX5pMwvLz%2BlAALfh3m%2BDd%2F8bHfizIdaATs6Kfnt%2BKpW6P9jUFPAU2H1xAeYIZW8EF7Z2b7wcnj3E5Sx7limwpa4vgFXvYc8UO2ZyiQqkYvWPzFLjtaEgLKVJabBDVo9TOuHQih9Siu5mkrN2OXq2mxjoaml%2FOLpmLK1gc2SmN1T3%2BmLgQkD%2BR01uk6y3%2FqHJ%2FXq1BgXUENxy0s4Clw2FDuvFynCR52fs%2Fh2Ai5RpLzb6A2ftuBYfb%2F8a0f%2F16YwaS%2FQQqofsOIjwtDugbbAaY4btucQPBQMa1q1l%2B%2B3pCsXJ8Sl%2FsIvWrKf08eleoKoIvRy6f%2BJcUIKF0wmcN3x046K%2BS1p134psDm7C9ev6P5nltRih%2FzQlRk%2Bc2owmMjKyQY6pgGvAUhXYpDehmcpHH5aOy5McalLqxSpt41hQG2VF29LHAjzuwNZ6FQfLz0Sx6a7viYj%2F1xbrKdOk%2B8ZEQuV1DOHmVxr9H7EtHT%2BfXwXiWihDm0qLzxnC7KewwQSzP40i1obGpE9%2Fxkt2JMyoSN7amYhfcSP0M3Rh1775MxFPoMXVdKoEKvr6Pe%2Bo2u6ZqXhvYJ9K7uDYwoFqw8hlqodhSujAOL8MGVK&X-Amz-Signature=dea450513e96dbfb274fc57f3960614cb5976309ef6256cef482af2618554415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

