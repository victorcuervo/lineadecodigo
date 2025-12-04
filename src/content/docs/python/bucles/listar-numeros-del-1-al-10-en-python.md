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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667336ZERH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcLHFCfYGP%2FTRjKHVclzGMvdyjEx2cABN1GD6A2SrYAAiEA%2FH1HD5vsloiS3qFzrf9oCkCqDm2LrRVZ8Wlr3y9ZHfwq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDHdD9jPYGAxYoOkgJSrcA4d7GITk5O6xYFNU0BFrecf4hBUfeAOlr769oM1PZx6ymAseh7HIEUUQ%2FtqQddIH1XEaNbEoRKxEQGpz%2B5cLyVJXHY40osgC64MAch%2BYDPYIOSrGILpTNQuUmlR0O0Z8JynQ2S48hx%2FgqJdr3bue%2Ftx1UdJRCyL39Eeg6Epo7YCup6k20bP9JSHh8Zk3f9fsCx1UILwVttHRhRRqrD2aK9dmzV8DkaZwjD8bqC4CCBhH1yuKVQlhxaYnzHEQzjEfUr554wrQpxwmfP%2B02VNZxDFUueTchCEsMaIP1tD4lQ9FCNPy79smABroslXH%2BwMypdrReNTqTsHGcLSqyzFdpKUVIJu%2BHLCKAk87iis%2B%2B4gOqzJV0GTd%2FGifn3SDZyyWnNqJp0ckO%2B6eF3J83YrTZWZakt8UtPtGqDuIGr3Akkt2bsFUGANlf3Bp7u4mGb7MtBOj4QjW82jlWGsoeAnhm7hgyzliWmtw%2FtxyX3GCKWN%2BeRlRMO8ZZwDhZZLJBKoWbigYAVboZaL6qy6zSvOHAar5FzLOoMZgHV6amf0GkEP9wQTBt8wd3nq6f01b0JxXPPqLnAQhj707u815WAZs11%2BkOvlZHLu8ddKumj6TKOeu9Y3jC3YuEwhssOVIMJXcxskGOqUB%2FelB9c2rTiEqDd6ap5j%2BvMKsH3bYMgiyTddeW8yMIzTuXdk5KaP%2B13fSqsttamdGspPPb8%2B6KeEGUEtiBNmF1E5gY8Vax3qp9WtGXcvC5ejZu8bunkVMJrOIaqmllGH3L7XSnEK04XSQHbk4Md1LMXzW6ryYRlP5t1%2Bt%2F9%2FbLLlvTNBfgmS13Fm0W7PHoPfeU0XoLAvPuCe1BNfr6OmTCeTFEnW2&X-Amz-Signature=94b2bff0136720b2573d2a128cad303518f74129e82436d41905b31f5219a781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

