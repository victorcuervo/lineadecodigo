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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XKNEIV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCInnmYoaOKY4iMYXB3HEWgf1OTk6OHFByeWVFiDuRe3wIgVgw4k5q4jPU1XfP1MZNPHwCpy4XJd1dGdSkGmO%2BMpmgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfiDkv7huATu%2F%2FofyrcAwNQtJinzAoEl6XvA59TQDbDeUuwcZiCurqW1kistinpfecBoOWV8EET%2BngEh7j%2BAoXASkWBzJXdLpgujahLLJa0bqxlA6Ad9BEn%2FRT2MuqpYiyGSdtl3GVppcUXm47es3U2V30j1A3eMsaHWzeDrLtbK6FVO3XlPcuQDO%2Balg9q3aiblS40ynnaus7dW08D03PDPhIddjc6bWeltH3Jv87egodcL8d384AG1B084dBzDzQqbr3C7m9o8pJ02Mz96gSqxvKug7LUi5Mx5o6L1Qv07gA6N7nQt%2BPdsw4n8mmmhFPmWV%2FhTkhExrzjtouL%2Bo10IkFqwm9Kgz33Ja%2B3S2joUtdA7gmd5i9%2ByYLFfa9u3zPXMp2ZDSR%2BMvKG%2Bkdtz%2F%2FJqChpTrS8p28f%2FHcQR79pUsgpv8Pcqt8FRN2tSMcOJeEC%2Fe4l9eSexGp3aOUfxDZpCLZ1ICbPDfRITJ9NRrylGe6GPvgGt6rv8Bg62DcHiN0cG9hMNZStO5Mqg%2B1IRUA13%2BKJo2QAbdeFvPszRkFzoIuCRciV%2BaQn1dfmKeyPi2HeYSdB77nPBAnaudbrZZqZag1%2BkKBkDpV%2BMd3jTNby5f8O%2F8FfCLRH6hOUL7O5HsLDQoh7NL945XbQMJf90skGOqUBQhk2ZRF6zxbs9v3%2FCN8R9erAbz2%2BgrIskEwuGJ9ZCiNTTlXT42F0lddyVqjdXLc1vkHT2PHrWROtoVbbZj%2Fx5hQS8oAH%2FhDtroBg8zQ5puDbwF0WReOwzRwZSnDs6GHsxvNG%2BY%2F%2BNf%2FWS01%2FXAoV972ge354fhCjIwRDXn6u6qRCqCvi972486KYU%2B4PpeeyxFbvqccqSbRCcfdP%2Ft9R0h%2BeEL4V&X-Amz-Signature=1ec6d3db77a6b12983e62a4f67aea37781287269ce5562c1b75550987eebc365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

