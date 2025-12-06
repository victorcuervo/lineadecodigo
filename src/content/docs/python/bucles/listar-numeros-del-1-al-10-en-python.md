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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOI6Q5KS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKsQqqSSNb8ZVAkgelfHRSsaF54UIsxPaeNF6cXNjNnAIgE4GAVy%2Bwk6WLNRI37%2B8KDJycI8oW%2F4UOAo6fcr7ZFpEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOcHoWvriqXU2itq%2ByrcA462qoDVIyXwIbUpcT%2Bfb57gM4Co%2BQ9EJKfTgfBc5lSwVj%2Bx6UMJkgQogiU3Uq1gCH%2FluE6UtB97AgKD6v7lSNLWk8Uolio2w65ty7hdo5O4J0VIzoPc7aFJbueFhuCqcSUtuZrviEYR4JnWO6wqeAcT2hgnA7dOzTh6Vn8VJqPxkxfHoKALdMqxjFuHsdLvZ5NCW22cvBMtsKZHOPI9MSZtYr14JfeTzMQr8ZM3RvF%2BX%2BgmuKO%2FQ%2BS6%2FhrNqB73T0kTrQ%2BLTW%2FPLJoRVhKrHO%2BS48Fvfkc04eveygF78iqXHBoMX8M76Q0QBrzN1%2B78c%2FiJZV2KTxK%2FB42z07d3OX6eQ%2BkZyplyIN4IVIlGdm%2FfKW0b5d4yviBSBZbLg21Lp4I0LntoZSYfH2Nxb%2BrmcYDmWysaPoD5t2TJN11e7U8fxnJNcaT%2F0j8vW0pkD66qWxzGfJP0TMde%2BbO%2BsGRmmFUBGmhNpzeBbU9TRGYPYK4SwCVHoM3gVmSPuNcSmHDkiXk4BbYY8iCLjW64oCOoRkLSm0wKMMD6bYX3oUFGu%2B4vP0U%2FPdh2myUqqrDaDJH5t4jZaigtb5Ezp0S%2BaMJYgIr8EVsBkZ2VdfM4q5Yr7piY6Vo8l%2FAavXaHkYEvMKLH0ckGOqUByayKXCl%2BE31aH%2FFmd%2BGbsyQ2xh8On3ZLP01TLt1W0LjD8bYnNbmenYLK50qwOuM4ccxDBW3tziBXuwbHtql22XFgzfrTWRTb1q8F1aIRQ8DPLA1PytjT%2F6b%2B%2Fd5L3m6NsNPYw2SV%2FTAIdiCm9FCPXAqW8p%2F9phnOypiQyT2JEi1LU82b%2FWJxsprI6LUP6ou%2BcdU4t%2BTHOyDvmpE%2BQIKrW2JctfCs&X-Amz-Signature=86eb7fc8b98d83113304f71da69d9b7916c4b1723aaadd17f117cf2e9cdc6488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

