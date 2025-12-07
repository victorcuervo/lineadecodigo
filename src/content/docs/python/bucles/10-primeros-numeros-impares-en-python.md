---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
slug: /python/10-primeros-numeros-impares-en-python/
author: victor_cuervo
---

En nuestros [ejemplos básicos para aprender a programar en Python](https://lineadecodigo.com/categoria/python/) hemos visto ya cómo utilizar bucles para poder listar los números del 1 al 10, en este caso vamos a ver cómo podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


### Uso de bucles para listar números


Lo primero para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) es conocer el manejo de los bucles en Python. En concreto vamos a ver cómo se maneja el bucle `for`. El bucle en `for` en [Python](https://www.manualweb.net/python/) tiene la siguiente estructura:


```python
for variable in secuencia:
    # Código a ejecutar
```


Para conseguir la secuencia nos apoyamos en la clase [`range()`](https://www.w3api.com/Python/range/range/) de [Python](https://www.manualweb.net/python/) que nos permite generar una secuencia de números.


Así, revisando la sintaxis de la clase [`range()`](https://www.w3api.com/Python/range/range/) vemos que nos permite listar los números.


```python
class range(stop)
class range(start, stop[, step])
```


Por lo que podemos sacar todos los números con una secuencia generada por [`range()`](https://www.w3api.com/Python/range/range/) de la siguiente forma:


```python
for numero in range(1,11):
  print (numero)
```


En concreto hemos sacado 10 números ya que la clase [`range()`](https://www.w3api.com/Python/range/range/) genera la secuencia desde el número de el valor de `start` hasta el valor del número de `stop`-1.


Pero, esto, nos genera una lista de números consecutivos, es decir, nos muestra tanto los pares como los impares.


Así que si queremos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) tendremos que comprobar que el número, antes de imprimirlo por consola mediante [`print()`](https://www.w3api.com/Python/print/), sea un número impar. Para poder comprobar que el número es impar deberemos de validar que el resto de la división por 2 es diferente a 0. El resto se puede calcular mediante el operador `%`.


Por lo tanto el código de uso del bucle `for`, mas la clase [`range()`](https://www.w3api.com/Python/range/range/) y la validación del resto mediante el operador `%` quedará de la siguiente forma:


```python
for numero in range(1,21):
  if numero % 2 != 0:
    print(numero)
```


### Clase range con step


Además del código calculando el número impar mediante el resto de una operación de división por dos, vamos a ver que podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) utilizando solo la clase [`range()`](https://www.w3api.com/Python/range/range/).


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHINGY3H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDu66lhljS8EmJdw5dj1j49iGiAGOhMJsjxnKSbxl1eBAiAu03B3CbHCx%2Fb%2B454e1Sgv6gq5I%2FiiA9egCQSrbPAeUyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo6N5Tps8QDnSFN3yKtwD%2B65B7vBIR6z3YMUKEe%2FC9koiuIZE%2FjsimW8Ks%2BXsgxpS2WoUJdqmYERjc41stcz38FNnxVIIXp82j1wd588WHfotrxeN8Rxuoqte9xOuIDqrWAlIZlfZTUqObONuIk9i0sPNPL7nY8Q4iwywNiC%2BTG32Yurm3df0RRqYvwvmYof9XJ2MnVs2Hd8jgsKQj%2FY%2BmtfVVJ2W1JvpnCdusd32RUQMvMWkVqaeb%2B8HCPX4iospdCZ0e5o8KicKsy%2FIFR7wBI8OedZhRel%2F5VuRdBgyYJglqD8XcplEm3qK6OHDRWybmUT%2BA2x5h20AwNfu9Glw8tQJP1aDYItePUDUk2Fe0ZL7sJWffp3TIB11%2BNt5ozFtgDBPXJFMZivrZIG9Y7yjBPkcmym8VbcxNXbRJSl6w7iZQz3EeEBNhR3umTYms%2ButgwQI%2FNBPIB3epNBVP3%2BNfM9XhNcE1OfHIGxDLiQ%2Bda0aqY%2B0v7nduFo5D9hsSNrSWDAvQzChOHRrXDgg3YfFcxt2Y0986Um09KNlnbQtygdg%2FpH%2BC6mF13QSS0zPXhUqCr939%2BkZBntseJn41pi4RKaE1r%2Fy2hHtzHN42A5jSXdkuVlXTNp1bsx8ztVdq%2BkKa6EERtiPLv1KVzww6sfXyQY6pgEtIa34HLePmIZLcaTHF7yKxYwMt12%2Bl2O4USixlcloimHxBOUytk5VefTmILm1ncx3a0QbmnXSbCVY7e7bkt9DU9TISvkPK%2FCP9g5EkdQP0XNNMprWDG9SVgHatOcNsrwKZK5yIi%2FfYsvdS9gBcYScccHHw29Ao%2F7%2BSxYN%2BgN0y%2BJuk%2BPbf8%2F%2F5dbPiWWq3PNykq75AgOnQvRVdwJYTuDvHOLodRWb&X-Amz-Signature=f126023851f8fbaf320deae8bd35abb32b4f28abe40b820829d2fc24f4f25b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Mirando un poco más en detalle los parámetros de la sintaxis de [`range()`](https://www.w3api.com/Python/range/range/) vemos que hay uno que es `step`. Este parámetro nos permite el generar una lista de números con valores de separación entre ellos.


```python
class range(stop)
class range(start, stop[, step])
```


Es decir, que si generamos un rango de números del 1 al 11, con un salto de 2, tal y como conseguiríamos con este código:


```python
range(1,11,2)
```


Veremos que nos genera los números en saltos de dos en 2.


```python
# 1, 3, 5, 7, 9
```


Si cambiamos el parámetro `step` y ponemos un valor de 3.


```python
range(1,11,2)
```


Veremos que los números están separados de 3 en 3.


```python
# 1, 4, 7, 10
```


### Código para listar los 10 primeros números impares en Python


Así que podemos utilizar la clase [`range()`](https://www.w3api.com/Python/range/range/) con el parámetro `step` para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


Para ello, como queremos sacar los 10 primeros números tendremos que utilizar un rango de 1 al 20 y como solo necesitamos los números impares, le añadimos el salto de 2 en 2.


```python
range(1,21,2)
```


Por lo tanto el código definitivo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) será el siguiente:


```python
for numero in range(1,21,2):
  print(numero)
```


Lo que nos mostrará por consola la siguiente secuencia:


```python
#1, 3, 5, 7, 9, 11, 13, 15, 17, 19
```


Y ya tendremos por completo nuestro ejemplo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/). ¿Qué otros casos de uso se te ocurren en los que tengas que utilizar el parámetro `step` de la clase [`range()`](https://www.w3api.com/Python/range/range/)?

