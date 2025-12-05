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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWL7Z4RS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmX5TCA%2FUn%2FR2M51g3nlC6v3hs756tjt8V9jBuTtcLQgIhALl0vBui1FUYD2eKoMPPTG%2BRd8NlSekrOwFYWlhlgmeVKv8DCFUQABoMNjM3NDIzMTgzODA1IgwxhOFqFNagUFX14Awq3AMtytm6fIuwNKVZztrlr5IT4qo0q7WXhwUupyyq1LvxcZJV%2Bf2LrSxu0Czdw4mTlgyWw%2Ft3dHknvSEC7BF%2Bm72ztybriyEAiNkn4tcRv7OMJL7LfxaEbSs2mu838ArJaV3S4%2FArOLiR8Sg198s2FIys7clRWl5P3rjs2J29HrWwzDFip6HVMRsKj6sq%2Bv0W2jdhgSdyRiU3KTeo1f9hoWqW7XfdTJkOhekJgH1bEcUcrekeHUz6riVOYgFin6ABhdeaoaixMfltVNQo91sdDiZVv6G4vq64FWIPWQrn8EFiG4Z%2FruxwXsNfKFA2Qp0D38X8joSb5DZP4bk0bXmjydjtxtzVMymZIkSX6kir2VoG%2FELZXmK1HfBP6h1I3EILKhuuB7lvLD8GfHIQzV5ZJw143prHgj4RzX3taDqGXfMJwEL4kfmCAxeQTkGD5xaD0iVI8IN%2BHtwoSapy9uf%2BAhn0%2BPNgHK9ey%2FXx7JldASGuvL4Wfs3bngbxWfdNYyXPwQaeaFHEolfi6q4O8%2BAvwd3ivmQvhUiRb9ndcY296ij52OXpT7x54rwLG0%2B%2B3TOu%2Fo7P%2FM6Mn94tgRl34n5eIZvUSFhQQSRac6YrDs43P1QnpvtRngXnOekxFWjQ8TCnrsnJBjqkAd1fK%2BdDl9f8YWFZNG8FdbeuD0vYx5d0V5x34VV335RJAT1SF%2FXLd3yt4005v%2B2N2dG6YnQ08y0mPLrNGNxKIY4H%2Bq%2FjjElOfGr5YU8hDi6sMxAPxyPdRFVUMK94WYes0cXp%2BZo75VBh2ebdwvk9HIqy75faDDpcGL10F1hJguKkF1%2Bbd2jLC7I5nFVxHkdoe3VGr7SkXHtGfjeve7XW%2FfpfjhUJ&X-Amz-Signature=6a9f0abb9c05cac23c9da55e7473f669cf5c11859b0744d2a1f55d039e1161dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

