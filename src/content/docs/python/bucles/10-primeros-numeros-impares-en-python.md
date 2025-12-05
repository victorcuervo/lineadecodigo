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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6S5FTW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxrHJz4rZSeZb8ekC9lvYghX1TcO0gxLNL0t1qqVzRaAiEAhWbKuNRJW7cAiTduVXBLRpVvPmwbHuWid6dbmzc93FUq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDD4%2BfMVnLWxz%2BeEbBircA%2F8ATC8pWzeqVWPpgDQd%2B7hbQt%2BdiLRngQl%2F6X0jvDExSJn4sJ0GVHJHlwT9UmhX%2FlKuzuKo5Liw2sP8zI4995fGHTEkX7g0c%2FaZn60df5PPyjzScRn4ieSt6dIwLNZs8JvgplL8w2hAUihoqL8IiWc3SxKANZFCngTaxUW2%2F2BF%2FH1%2FyRVWhh9ocQzZ%2BlRHcE%2BrDiWNy600V7k92TK7tWl513BdShLDmzPXIsogPV9JFlNfKWgBJpz66N8iMfGRSjEy0FBy2dn6S8zJud5VWcDxLepMzk2Kc3pKjYYiuXB%2Ba9pSgHACQyObVhc6djeMjXkGacIQ%2FP%2Bcjuw%2FMkN1W%2FN5pasftMAT9C1UpSGqRfyppUgbRJM8enmcnMVpfFVPXclbN0KST58mTAg8%2BTJIsQsafWEArH8ip8P0PBX4nLLp3Rjurvp1lbuAokTIcoifL8T42ZqjW7i9Dgj%2FYhpCYGC%2BtsBwUau%2B8vyjbZ9VnlynBWYNLUy%2FtCKGlshzmlpapS4v6CJaCw7%2BnrpRKGjfhext%2FdEz%2Fj4ghCSBrCKPjJMJLgt8CPYRRT0vfx34MEoy7ZicQvD0TNh7SQVEuttoiaF9EaEFPVB4n38MXwl0OCJAuva7jbSjHMMtcK6dMOqoyskGOqUBWzNu105WUUQEdzglrXlSNkPD2fNPGFrQyHbMGg3nfwBmXP8mgo5%2BhkGnd3E%2FDZvVsob4hvOS%2FJ5ALWstBTVGLzZrzlgE9MrK7PuhJWPNFz0VAngbC%2BPrUm2PlsBGGUMhBtMTC4h8waow4i3nnZ18imCNr1sS2ks8Bw%2F1wCI4b%2Frbo4E00S1r6gRKtRAzq8EFM%2BmRFdEZMi%2Bvq0Dd77RpgmzxW%2Fos&X-Amz-Signature=7d4cf93913df9fd96c6acc25191eb97a29c9ccbee6f717dc1049c0fd31e78efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

