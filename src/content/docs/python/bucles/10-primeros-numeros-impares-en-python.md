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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635YL5E7I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrVrVHaHU7y3qEESiw%2B%2F4GbvGNyxJi9WfUnGXZMYkCSgIgDWe5Vc20PXndbhtsCfmb7%2BHpygZrccc8GT2gKH%2F4uAEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJMF1160LplWfNYW4ircAxQzUEOBPNMK2gzT3i8s0uqDTVc5MMIzNSPfSRq%2BoE1h0DuW7dhRPe8pg5OtHyhGVpwK%2BCkLNeoGD2n5ZkC9A0DK89nw1gjHxPQIiQK1zbEd9KtcALvc5QKIRoDCLi7EERZJQKNvmGIgInEBDlKJpkPlPzU006wlOvYrN3lof8N%2BHZGeEfviF29AeYmgA1ogj7aaCn7xWRwnOjDusv9ySsvKcWHH%2BkIvhOoXV%2BBM68W8yCTHXlgqPJMrTCvaiFf7V3jXZEMMOts8hz9Y%2BkwDCUiD2GQiEUuVg4sBJuIo8TrbD1jTAHTy8ghk3SKH44jUGtdbujIQ4fxFYwrm%2FsvXzDxrCABZi43hmGga9YB2LAw%2FWCUgiMYenZS%2BoytqvybQdbzGy6QFTUD76UlwSfoZtXY4E1GZxdcL%2F%2FU9bv6TSYUyRXAcW8aY72kkzEXWWjcZVW7x1dgph2LYoejEW8YWeoW3QrGj79GwAN%2F%2BWbdrQsmoXHWSt1e%2FTYkfZKqiAwgYfWQx1vetdOtI1qmAbJUmud%2BGpof%2ByVcaary1d7zQdFCvRM9Pen0MIQj96R7AQAbzYSj6mKKKL8sEC2O1l6z%2BAM1uYk1S7848aJrpfRLiD65%2BaODOmRu4zyOZ%2B1s7MMDVyskGOqUBAfZ5V3Cv099sLkpLeDOUlW3xR%2FW13QoP3tQY6QmBewaH8lQgjgjOoDKbWbFGy87G%2BVQLZbF%2BhbF0g4zkZuA8Pek9tN3ibwNvI7yb0MKlTYvdb0LNnvUlwjm%2F0pyKFv4BbrzWNa%2BiOKLPS86mULa7Yrc989PaT%2BzdwnBQxrGVLW9H5e1PJ50jjclPU7NYH%2FT%2Fid%2FO1hbGoIh%2FTWqz6U4ei5dZSUSg&X-Amz-Signature=5cea1e2af61cc57ce6b8d5088d142df0f925156b1eea6ae23fbec6d230b89eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

