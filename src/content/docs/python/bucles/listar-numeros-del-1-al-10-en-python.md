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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ARWROPN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBQrearXzNy2wSjnc1dKm0YlWQDcaj4TTh2OMHryLHE9AiEA9tJlN9M0j6g0VRMe4ftLbHxaMEaeJjg7xwj51UH2H%2BAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPryoqPkKj4gjCnw5yrcA0H6pDGpe%2BLosUCXyUKU93kSsSwppp4Sckzk64mtuRpLFQiltnssKLZgx9fqYoMYHWZgWV4dKiY3dl3%2FKuNYRluQ3mYi43qaDImaVDEpitLNceunxlwIqa5uyql93JDCXArcoo8mAyqnlrW7uT4V8CMj%2BxTruvKe4ublcwjwOGj%2B8YFv8Yh8DFCrVsvQcSnkgsMeU8kMp5Zw8nm3RXFsSIHjexzjksGX0WKp2sZqHv3JUcYFshBvrehBfKb73V0bFKs2v%2FCaYxtTrvzSclkpMEfTKi7Yy0U3z%2FKDu5bvkffEhdV%2FSsYLC6CDMoQxHoq9mzbsn0mmzjrdAmJjpGHQcDp%2FXcg7nUTPl95whjo0HwI3yqPCFfm8LMPT%2Fq5uuKjV4jejhW%2F2HN3i%2Ba976MTCaWVO7ItB1cYSDq2ZEj5hGCNbObkRMUq%2BCHhb%2FqTJvcc9naZ%2BFIdiB24iAEVWnJf8%2Bf%2Bj0n2P9nEzqaFjgjF4WDboI4VKGCJ%2F4WhHhoeFGbFMc0zfDn5QNP60GzB2EpWBZei4KfYFzFdA27XDCvaAhaFPiaDjqUgRL54Cpnon2iHj2y6PsdGk54fNkOvKY2QNDeCsTcXx7lUyIeC4DB0%2Fs2OuIDE5TKB9Z4zmDTcAMJ%2BIxckGOqUB3x640YMJuWPLrXY8ZDAl%2Ft%2FGS3GoqO%2FRaeHwGqiwtRNkb4ooUvTCT5LQeM3%2FB7ET%2Btf5Oh4GDnXd0GRhbvLeFy4GXAlGkmxYVg12s8ldnkzBtOzPMgr88dxk57DVhN20%2Ba3KxAlbeL2P8F%2BAcPcoNDSlOLYB2w3ztn1g0Ef%2FKW1JrgD02AcDA%2FOQL%2BEiZqzgWLZ49u372RhJtwxSwjm3oWjTHJ22&X-Amz-Signature=ab66c9771393efafe4cea3dff4a8802fb2b4d765c88840267d7a898281f7eab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

