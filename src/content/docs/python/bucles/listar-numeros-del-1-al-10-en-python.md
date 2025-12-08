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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAFWLUZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLmfUJkKkjUDGm4Y0GTZZ2PMWS1xxVPupbyiy3m94YAwIgPUb9fGJH8h5FtKLfEakpOMU60spG5zX1QIMwcZNBSoAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP13Rxs1kKzQhAm%2BmCrcAzbt4cLaGDAvqzWMH5HXscQ3SKB5Bn%2FZAow0CkTmyZclUQTEaHDIGGHtwISkUkCvkbFcUKJJs7tRIrDa6PGG98awGblEJeBwyvxs5qpbWtsBOnQkfQPd5irfhRAE1xTAGV%2FZd%2FwmpqundadX3V07zC8QgQrwhk%2Bin9goPMwLy17EoIRmQBsDu5IEQN0nmIp9hqRw17VKzYD%2FBtpts2o5fuPAEoEke01Xo3weqWru5DRWGVwoix4oc%2F4ArVfwT2hreP5c5MRcLqwufDASDccPLhMlKFntKr%2Bd1M%2F8VpMZ2mdXJ5X8GZopFKzSqHuvhabTLGluQeT392rhQuAD4JufyDmqClFVRsFU4%2BK%2BTZhqJi%2FZba64Q2tFKOs1CEePxckzh2i3xs%2BinaXoyzQV1wvlp0YRTf%2BEUc1ojcOry6gkbghzeAHGb5paLDDJJtl%2FGdD5qHUB%2FYcRlcAkdBSEf5JkzklrzuysN%2BNRabDn2LOEVKb5Z4p%2BcFRL3RUxv%2BThRYNn1hhNieB65nLHSeJyo36RZRAEXDfINqCQoZZ1BGvfcv7SXZhM0hdtI7xZ8VNNN4i280C0faY2Yjki0pbo7xTjIyDQM2ihMR2WyDy16ZNfPv6ev6%2BXyGaE1VA%2FZ4QtMMzB28kGOqUB%2FXMuK%2BPftUylYewQtn%2FFn4AdM8IPqLD3XM3Ze%2FKJg6NMsl9Sc2r3mrs3cbNY3NeQLa6iFgnjcmmoYruJoZPxiOVpDFL4Dk%2FV7pc1V9lWA8awwZp1ytzh4zoFGkrIBYBiLWXIo6qXXobkGU18Flh8H9qh45ZupQpYfu1OgOkFSU9rcDj4nZc4DPT3E3OL9%2BMu9foaZYhINIlkrbfIwz%2BS9ibplP0Y&X-Amz-Signature=1ac1d7cafac780e0f8f9423a49bb3f109bea5bbc1ee8cec3df4b6fb7e291be75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

