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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRM67SJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCDhzyJI1x8wD2wJI39rqRSB7wFGgzCk81iH1Nv%2FCwAQIgbJQ%2FxMh2pdR7Rodd54Uz3jmowz%2BfYUvClmX99X2t0H4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMWQO8WC%2Bz4%2BfZjwCyrcAz65aaa9%2BtSQIIAVjjZjGR1PxKfbTdkQgeF2cL9JiWMpTcS2jjJg0XFb4%2BksviP0lnBrjA14kF3yxI%2FGe6BqdMUf%2FDRXnbR%2BwRry5ycxcY8e3c66xjtM1jJl%2FHK896E5NsoUSmdMUxGIdOG5zj2dktuKQVxr4rpgnOvuFuquo5MSoIqnxrzeH8A7Kdusit6svssWn%2F7oNXBtolDiApBm6zslhYLl42H58KIyTxvzAu0JW1olnC%2BkSuK3ChyLOZrr0guGyU3Oe%2BKrRjNyqu7zJznLUrkNE0erln4sMGxSf9lhMqxFbPlXvEKn7lrYZ2Gu2s9PS5LqZPtuLyU4BipapFfBVhB7Bt8fe7ro3yoQ2aB2y%2BxG%2BwOGqKvM%2F2%2Bzp5LkwQdYnT4CbaiuBwYZSsvHQqgyKb5IeR4Nf2xsDFDL5d0cOZZzL28Xx79yiWdw2H%2FI91v3Ej9pHk1mNgnJ0tyC26K%2FnyOCFXOZWgvF2c%2BTDDTK8GVyliQffySxwgM1mnOh6EjPm70S4RVkMZSSJ31hhxCfXLscDUxrhf55dBfDQ8zrWj1dtl%2B%2Bjvlvp90%2FQZyuHr%2BquUnUM8oJuNQISt9eJ%2Br%2BedqwG1%2B24D7L1M1vESYefc9IyJ47dPez4Q7CMIaJ0MkGOqUBRYfdAjO25Va8pgXlrFZ%2BZQahwwuhl2sxKYJRgvaNvpitkrbAaPW99z09bMAQa6tZNujp2%2BfENO1%2B3QYRpItDAJz1TU%2BSm%2FIYAzkrUD1xqzdU%2BATfPA4Fxmq1i9un%2BSf6Ka5fhGlJ2cLOUQLf9pykK8l256CPpjMJJG1L%2F7FB2JcB3WVzm7%2F8JYSn2Dpd%2BPCJvcDbW0xLkdKoBglawKbVmDofL6kh&X-Amz-Signature=ae5272f80e8b650beb3568ff463e062d82b26ce31aec3e5e3430416800589427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

