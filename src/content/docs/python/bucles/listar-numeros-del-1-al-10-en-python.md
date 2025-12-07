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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA7RSAI6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFge%2F8%2FHmnSa9UN93F7jFOlapfmZINf36kLVywfrtr%2BIAiEA%2FDSNKv%2F%2F8k4R435l66SqT9gdCgTgF8SrDmks%2BoTBI3sqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNpDYcxlsQ3bTuM3ircAwtor%2Bf1yCUlknjILUuSObPQRyvTPnwz2djcB0%2F2pkeGmBdYgqvgULEAvfGDl1faiuI%2Fkr1ZKL35QJlzHVMIGBORabZ0Z6E1A6r%2Bjb%2F6WA0I%2Bpukfv%2FVh0N%2BqOaj9AkcofN%2Fu%2Bg4Es8bj35oX1pq276zKC6XjK8tI2o2APxglbifiQ0SToC5vDLdhs1hmZd4QBWgfLow1Rny7RYkwh0DCoVDXwC%2BHFMbEMO80SNPy88oDYFWHmuDdlHDoUutgqPR0xkZSOExT5aTkT7E%2Bzr7XA3mCHTiFowAcJ7%2B3wS4%2FRxntr25fD1ODLv1XMZ6UUt3D4gR0L37PpWlupk4cxM3SfJplqi%2FHCajrKvtrmlOpyu09dzJsVnxDAynfSfJT1ZnP00cKwkwUBqjiD7E2NHP%2BZkAUARBZ95OUhSoIzlG%2FgGTISwQSVGQp01K%2F15eYoct4gmjMNZQqskZWALaAexjkks%2BJ6mgau6NGuKmh6yzZjnfO6gDL9%2FRbwAAmgbXhHEZQq33eeVh6rD8Ufu%2Fh4e3AVjuSog226kcTkd%2BMBvSCvfxb6W6DIxm%2FTmfqmy2VQJMCf%2F%2F8YRQ4fUW2Ij81nYT1qO0K0LMVKVtNY2rppaG8JsFRibjRpay5dqIDtgGMLSZ1ckGOqUBa5mecIe6ENFg93zCpY9A374jf26vTuIZIeJ6Bfo7J8nNKi2Xm7pDbK3scQs6DHBG6zE%2FODpsmUSvYUjSjYENkQS4yJQvwYEzCnFIE88esLqy0uVrO2SMqDVY%2B%2FBx2K%2F5%2B9fpIcu65RROU1PG8A85QITfQJaZZUhYJcvmLJf7nMKRsSIsI4wcWdkA3obkCkedTZ72qMoJeHaDFSE9nuBEF1VpXW8%2B&X-Amz-Signature=5c38b2d0c512e18b841417a828ee4dd498c8e3ee59d2d596b8494aaacfc63d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

