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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YF6BNKE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmd7A6jEEfMxX4WyCmR3XVQ4qKzXisORLPWWd4ed%2Bf4QIgRc1sLDGiitxTrch9NReKbYMU35zfS710CohV2TDGbZ4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKIoLgGLH8W%2BEDlircAzLRt%2BmcbBqJOvAUCHH14FsX1EMQsJVMVOxVqycUeFW71IwiFD3Jt99q9%2BA18HEQXSnWYOLuRq%2FOB9FvBDcFnva%2B7lV8M71LIymVgrgWOH0B0HeF137cpXaayHU1YwxfQsMQJ61J4wYN2T9lSwy0%2F7ACugl9W90yKaoaF6KHIPzXKebWs1ogsLkBvizemqQzYWl52xuWHQiAQUJRbRrerRKXvGWzbKrdkIIr3iAjR2U3MduTWZNbQhjxmFJpk8zJNnQ2r3cW4%2B0zz2Z4JuCYxz51LhEQdkNfzElrEfwUBx7abzoIALN4ot6qSOj8iSVg3Kvbjznayh6SHEZKMBkGLtQ8f1PuCTQlT6ye9ejfTjyUslDfqm01DG4afl6YwxAK4soxWx04fWr0I9eNrV4VQ7w%2BGD2Ezt%2BdF8K60Tef42%2B8zjJuAfsHkixfAnG4wEEeehKSGC0Qq%2BdxKHXUCKie%2BcTcJg%2BQ1WRsU1c43abhOcw3w6zWvFTsw%2Bmb2fdb9tQyywqegyxyAmQhCWFFXMkkDxGY5DDWy1PzbkmwPl61cebvhWe7YLJwOeReOx4zCIsulm5HJEsTiyLvqohpvkLyY6i6feEVLDofBWLG8fBblFSezH2PNd%2BW5AZCphrGMLua1ckGOqUBSyRNOL4I1DheYzoItujvDK8M%2F%2F6EWf%2B9QOl2sk03rmJUg2IW8RFEIoRqw%2F94c1hJZADI7lGYgQUhVRno%2BoLEFnY2pPWT7C1SA2UGLqZTI9z3anXHs5FR1I4uSiXiCEVfkQRC5cjgUoTZn%2F%2Fr01lSqeegMTelZRxJEZNv%2BR6dsggccTr7jMsU1O6L6e0vYQwqbId%2BjlRDkU3D%2FB1vd%2F9e19Prh70i&X-Amz-Signature=40deac36540c82be4a7b1454b0a70c5917ec6d0f9e1e415eaf0a8601fd1fd39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

