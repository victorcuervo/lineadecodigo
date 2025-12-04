---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GUPKJHJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIEPg32e%2FTmdTdOaBY3u8r%2FtJ5sUaUwk2%2BfQkqa%2FejbfUAiBgt1GSZbhhEbZ2Pqxi8LWVbDVK0uPuLBQfUQQfr4dZhyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMTauu57fLlOdlFxfzKtwDg0SjJzLxyErcIaN2qHZhuxGB4%2FZIL6%2FsYP563R8Kju%2FVbruu7NOESlsMZZ%2FGi5bzhslZGEWalXhhcsgzoqA2ylwXrM3gHAB%2FPiaOVF6NwP3bfx%2FDknKaPokQzoc9mAA86Red5xmQnq61lUevirQzdbydKhmgEFIsaJtR8%2BLSbGO%2BjKZjYD7XYGVc96GTXVXHetBqmY%2FUamQ%2FdrTlpsc8kvpxRwcryEBZuhVjg4EC26QcWBlOipuWvlFFOlEcknVkMo4byq7rIHEBcz7KqSbYY4RqQc4h2K3UmVWV4xHB6LXEbPPH0XZh9JNW2UHt%2Fs6InWXaiTH%2BQ2IYAXumKArTX6cTkdqq6unM6plJHridIIbIoLyh%2FVtdaEpjFDQSyHUNdFRge4g%2FIygRY%2Bzl9oUZw48aAKUV8dWFEQpmzfS0l%2F8GJau%2FI1Ozl39%2FuOjb01cZ%2BIaWGSGbHnXTaNLgoLguNMsnhsAHd7OvtF9R8mu3jYCEYCT%2BkUkcwopbZSTPAmMw7kctsFyy42DvoOTPRwLFF6tDZY6oUYA0u8oEWMBPDw1cEHt9dvIbJroURrMPsfX%2BQvPvwMcLc451DS1IIJbmgFV35%2B5bdUIzfnV%2F5gKVwkWM2xMbyUspBYV9q8swra7EyQY6pgHvex0z3TpMtLx%2B8Xk41Ld%2FpduY5Z35O%2FKCBHuh65XONutm0t1XWpD2urIM1HEM0kqIul9GmGTIZvmVkJZ16%2FxWy8U6fFU7lJXWyZ%2FUToGQJWM8JZagFqqmHUoALmNUQ9HsNp8txp8uKCodB6bpia3vRs9w2dYayHn8s33TLamymNhPeZYKfTS9lBlm2rechUuE7Jp1PloJg3I%2Brncf2ooHCRTPjYgp&X-Amz-Signature=240d8b7799adb15deb8bff6bf4d7641ce96bb32676a58e8ad12a82aeb1f8b966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

