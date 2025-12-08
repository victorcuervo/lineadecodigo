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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP567C73%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXeaiOl%2F1Zpxas6U%2FGgbXWrPP184lzuKGAWCjxscuLVAiAhvx4AL%2BPn6Q1%2BwQCUT0xHBlgYch%2Fbjl8%2BDdF8Ds9w7iqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7lrNAdB71%2BjTHLRKtwDvnUTJ4sOuQTPah9x57sfPtDNbWcz%2BCJQ%2Fc0y9gEQigZlicIbNrGPNx6BYHtPo10wASXO5I1LYQHv3u0ZYni90K1riMMRN5ltkdNwQ03E3eJ7SDewPr%2FzdYuPc668k%2B0FYvDm%2BP3U5buyM9H69ajfIA6gj2Um4p5IBtIEtQ3u9EjAN4yeBgiv3Z31Bex6itKNPWGIBIrWMxosFdGCZavK028GKvKHMMZPXxBZ2T3lgi4cLqU2Sd5lODTLUxl3GtIhU%2Fmt4VKuetQjsi1vyjZ7h2UCTosU1HXTBcoymtH5huaBwRVrZ0na46DJD1SERIg7TR%2BcV3F6R1eUBiDO4XoN54wE6Y%2BADDSDMf8%2BiMo9qts86Yw43E%2Bt%2BYZL9FZwldr8OQXAP4KdCsklMmzSY%2BrnMx2eugag7V%2BhYziYNUIAYosB01bh%2B7AUdPisYlAyNrXD%2BmQq36yrvax8LcB5BqsYbjBOwi5aak2VgDd5uxpEgy8QgoZVaQ1RuBPQ%2BW%2FUaf9nFPiZirCrVSQ958%2FZ3hud%2B%2Bx%2FP3PRziANkYNTgHX6jmV1uHgBwE8ny%2FySRBilE5v0v6kDRV4a5%2Bo%2B8qeIG0gPUauIqHt8TS5GQu61Sk04E7XILQVKi4Jh2wDXTIIw1O3ZyQY6pgGkFca1Yz8kGTrGpLzu3LTeLNWE8eQdWhyhww2CxGMokUltAP8aUF%2F5KEJhvl4ygGAg2azGf8zLwUAIAmk7ouV3s06Dzr2rXmXuHehr4C2zx8b6awIkHV6kF4WfN5SgyucKE98CJQnUMHRfO1063P5uL5L8Dh%2BEC28AGhbPMjMJxdHmTX5tAJSsBJbYVx71KQtozhiRvSfnHyojZ5T1jTsmEJh36Apy&X-Amz-Signature=7f8b0e18ba513a69a41cd6ee149d0659d8676594706d142d154a6fd105565d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

