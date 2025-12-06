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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BMZ7XPG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzxOLZvJsA4yhozFp1DLq75SyEvDLcP9vjB9iHuFJwZAIhALfhS4PxMg5GB6HyfLAvxsSW9%2F4YR%2FWEbhYpu1oVLBo3Kv8DCH8QABoMNjM3NDIzMTgzODA1Igwt9pUbhm3hBuCaTEEq3ANrsPsChw%2FbBWbrOplZHDQTxAgDqkCXegufdLc7r2NPMazPL8Fl%2BbSUTom5%2BT6s5ToNmkPjS73Au4hro6UUXyyb0Jps3PnifNc9eVhcDBZOF%2B8wNB8JrJ9cZKufx3AGY2rlyeAlAKm%2BSo1EXtHU6aX9zBJm653j3IYwuEmXIIIN35fjLAFX1Xhmlw8tbOV%2BHCfm2%2FsrnvTjT50gUzPVELVeeCM9kYI3UCi7TMCz7eho%2BaZcjoMFLQCXZ%2FXr%2BGF6qauP%2Bj6NyLApWbNMZOWqJnodHve36SJdXg6iqeMnbhLBmbUfiZX2WUYydhLbqlBjkgsiyTsP8pxeGQFNcqXGH45UB%2Bo8XokVcNfMKoNWVaeuzTZC9LiuSLMdIolCrV5fIJwpKmqLOMrAqCCvPsXf%2BbrOkGZnm%2FLHmpBBekso6lk43IDWmBhkPLQZkiz5qcKWy1u9c4n1I1nsgLdql3Vzpqcr2XyI9X3hmUSI7PunJ4IWcB2SioMSEn9q04akcBEqFRzNpM78YBV67EENKySBF2HKUCBMlQjs8Qn2JmBhYmKtylTWEtKeGiD16A4OrF3jLNnQQZjpNpjzGKzky5%2FC7KoX9AMccoSwpu%2B%2Bw3Fudr8iVUog4AD2zTT%2FqRLjojC709LJBjqkAZngZVc3%2B7ZoTGD40RKh2%2F%2F%2B3p8V%2B9%2F0xo10nkUfxcScx0dozwB1%2Fam3o%2BM391ehuL%2ByEv7VfyKEJXjhBkDS8KqF58bI%2BlyAHHZ87jf5jujlg4J3%2B2R7iQOo8SJoWFnK50oYixu9jtO9p1gT6Wl%2FY3pYGxyhi6eMJZBIFOv%2BnzDsTx0%2BKUKPmo%2BPybtlla3Qkjxf1OUgojqQX1bL89sC7SzuQrPK&X-Amz-Signature=aabfdef1930c5ce73b8f60ad6fd99062ae351525edf080d0f498b212490ed2c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

