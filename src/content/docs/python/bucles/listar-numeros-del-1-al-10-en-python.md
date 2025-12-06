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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4AEZV5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnkLOLVTcqyuN7GX4qL3eFiVSgOt7zL5KmeOgdHDPDLAiADjGPl0fzlq0oS6ahr%2F6nnAJAzHCnnSCCoCiuzw6Rj4ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMrVFbukHiP92ZS6EIKtwDmMtJBz03sQFS%2Fe61BnDdvSUdE3t5dK5%2BjrcxxeXX8cgqOIcP8nIkRIbv%2FT0MX5YMfq61gVXgaMb93VBgiH6m4itfZbuC0b2TTtX1fzNjvrE8994Jyx2wSzU4jUAe7kf7g5zHoQ8EIgoSyd3Yev9i6VFvrO8z2ZIl%2Fc8yylE%2FdWeJZH2ORqUhAuU98jq3yAqH%2BMv6rJsZu880DlSHa5gnooRpG1XypqFiUtRN04mRgl2G1X4xmG%2FsZ4tp%2F3pcsvrV%2FAfMDUd3%2F%2Bf6F0o9DkfYqhejWwx3OYn3aROco5bC453UdWAA0b%2BRXiqBeVSL9y42ZMFmqRSvK6vXX6828z4aFND6yxZ%2BkmEcbyw3Cb%2FJPAFl%2FEJ9lcyglvIuLlb7EAHUCz7fLqlof%2BqlDovBTXVJ0oBT9EetSY3gz29tPdRCYSfSslkviuBCvix0KLCgr8POSn0H0Wa48upF7RgQj6aHKU8O9aRJpn8tzNeSlxeVNICeTZgspD5sKugpVpTujvX9YGOlos91jM9WzKxOGk3qgnQF7OX4tdzyHCbP73zfMzuXn8GASsgnwh%2Fdq0Yi66EKjHlkPiZ0FmWhYdP85NhKXPqeCf6TsTCMm4Hyusx6psZS8uTHoDOajWm9iD8ws%2F3OyQY6pgGcNcdVQx7UnpWYa%2FuY6eyoSQTS5wZ8pRcMewXJvrIm88QvhHN6bnISVi%2FTXfS1YPzNYA3areK05ulecLoOdqELCzH1m01rGthVUsjov1vf%2B75n9Mug3%2Bz8fmd8seFTfwJWuN5ethbux41iJOr9zFnYgF%2BhDJkH1Cm8YLoM4K%2Fv17nU8s26euQV7KDb1bRWPH4wyiNCkNihQi%2FQHV5LdpGG%2FPTbQhhR&X-Amz-Signature=1b46e1bac6e4e06b6d80b8b172f97bad94cef29d2ac3b857baefded1a73bab9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

