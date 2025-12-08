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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDLXXFY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78EdhOjgyxqskauCJX9GAdhtmWsbnl4ullpM0NRtl5wIhAPqScEoC4qAHdMZm0QFcd1ioB1ibDu0j3a8rSqTncOx4KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoL3DDMEugfO7ivgkq3AMusnsmL7voM8ukhtZT%2BGYjeB0NQvYAMRLTbnojS%2FvzYSUXyefkgMLNCkXRDaolr9vk%2Bg162YjUkkaMZqgCXS5G7K%2FeotA2R8LIpjoGvlAyDpEuffFlgHXB2w%2FpeF1m0bgq8hUR%2BgLfwAUyeWeOhK4j%2FRUwDrY5qYjtcVVoZ3%2FtD4BcLD58mo9fBgZh695%2FMHShT9tObaohozN3jDRSYgy7olyOPa7Cu9VfyiPoSUamlAaTTqipz6OjB5v1xDKg5JOZS8Sk34QzOns95z2plI4GLGkl0saq%2BdxrFOrIvzm32w0Fhn6HmdonqgC0ovsffRM3SuabybevHpMJj6tIoHq3r4x3kpAQwSYfOeLD1YAHDaYOz8%2FClM%2FwulapRrMaLsv9TdJJy9OCu9akYca8JoYgfaNLaTr8uBufccMiCFBbqvvU%2BwPiJwT3PPL%2FMjU1OSRNpQTQG9owlvs9teZNelI7LDk8QAtjXRvTxt8BGk%2B9%2BrhsA8sE4VK3crpEg9eE8c%2FOOgsUWe9%2BBqHg%2F9%2Bo%2Fou9%2FXgltr1d8olDMnQhsChjmJxZ4lTMJPQ3WkytiEU6c%2BW1nENnX2XNAo1G2YsutfFAaovepr7hBLk9mbMOOm%2BrLU4L720KfE%2FyxEOiUTCq7tnJBjqkATVUjzQ0hRdsxcXmyDEkCZ%2BpVFZUWJqiwGflJ3m2oJY1SVh28itVbYlrtv8wVneZ69KmwTAvFNr34B3i2bF0OUOfIQ%2Bo%2Btn9yaoK150LqtbpxybrLNjx5rrlDRfdAjtCssOYTAF%2Bow0s%2B5GSpWaPUilbi4pc3%2Bs8HMvPMVBds59QjJChDHFkaKlxmeu4ZbLPnDFTSc6netHuORELdpnDq6VzzF%2Ft&X-Amz-Signature=e7ca4b99357e088c3fb9a1edd35727d108be2677fbe57f1721be921f6a069564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

