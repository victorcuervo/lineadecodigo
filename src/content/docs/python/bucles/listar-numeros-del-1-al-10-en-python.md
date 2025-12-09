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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632G4DWKY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCha2aUwBGYaqGW3fw4wbL%2F9jtCI5nEtPl3jYqpk8qUfwIgfK1XmUp4X3Tec6XbgJs56B1Dfh%2BLBDJdF7RiNEswunYqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwKS83Xj7XvObr2ZSrcA31BAZBZrs6I2%2BvJwz6IkZ8elQi27PfDdnLwboPZUQ4tEBUz3L3siEbgZB1bC7%2FQcKClSkPWyNavMD%2BZxorWOBtQK%2BheNo7baFxmQSnuC3ThTITqq3Qhj942fiocHZVKHjigdoO4pHkSbjxDwG9CDf6p%2BQlOHOK7jVCeq%2BD%2BZZjF0WSY9RU92KJ9IjMEVH2pwznqREiTRhfJsb2SghTi75b%2F8gxdqFB8WgRAwYyoB48mBNySkt1OKvKA1PXs4k31XfpTBXmTDxM4NNW7pSDI3x7t6ofDjUNt%2BgB9%2B%2FgUYcrcA8h5v2ryzj9EVtet8gU6uYJbyEJOoeM0%2BsgLa82l3oeDEJcB3pnC9az6lKLExqP%2FguIyd%2Bsyz%2BFHp0l4j2RDW9ViG8wCGNGJ1aoongYe3EsB%2BiBpANRUrLnb9wsDMYky4%2BcUY8ApAyitL9KOJH1Y6%2F5f3%2Bo2iDhiJ%2B4wqWnRnIla4fytVdKKMAlI6O4zkOYIZ43Mr6cLiXmo1NTYTveQRx3GBszfFKcenwR1FW3iTBHDPIbuviWmi4mIWaqQlaSAYN4CaYV00vgkMiNDyze2zZ0Bgh1lhShcyjP2t4%2BSKFUABReOSe4rVb3%2Bv4MEvXg4XdHVFm9OpNdLMegQMIiH38kGOqUBR4bSco%2F7m1r6x7mSJ5MxPMIEIFd61oiVWYKYJNxX4koyg5%2Bi%2BX9xAU5UJReSih8C6nIIK6jWIVhWPFYlcGNR4Wi4LgRO01hbQojY2R7izuAOOf6StFAYjxOTdL0KcM4j4Ll%2BoIW94oIgexR4Afi5KQ0QSOP2ZFtIZ5HG63y8fFlpMi6dDbiev2p%2FLhfDg9UNYWDmO2PhpsYznys4qL1mpQsY%2F6GI&X-Amz-Signature=8c4d1c31dc41b990a23405be8b3e17d3fdd663430b799fc467a3be75fcea3977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

