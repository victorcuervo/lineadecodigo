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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL4JGAK6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIADP90RZiAtjsiBVUeIz68ZohvxgxIc%2FhfCbbzLxFEkTAiEAisiP5s3zLiFAhqPBn5WrDk5a%2BBB0%2FLIc2sc5Wh8miUoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDClUlOLEqRvYNt%2FlfSrcAzJvkTiLeuVE9ykxJAuAfdeSoCAyJ7GeYzWXzcrXOsr64xPpUs%2B9Uuu1ra8Yl1%2BR4J5NXzWkpB2YsnuvCU082AhdUp2XIbaJLy%2FJP39QTHaJR6SjFGeurCYv8eFmTjZA6gLWtcmP%2BQHOUoHkGHxx2PLPDXR99WzQ57P%2F%2BOw2uD1jp2RWQ38HAFXt7EpVZRsdV6u4Vn4Z%2FlNxpkHN5Wi7v5pXZ19hmP5wN3gXLiV8%2BldS5fBW3JkBbr0ZvvRzgOIIyv8Zt1XC1wZ8Lanw9p%2FH8i1T17i%2F6Ubgmhc2%2FzCL%2BwfKXTtgAiSO7ZWkHy%2Frqy4noqmggAUIwWLmpdvYejemfiXlzqOGeFYo4aEMhBplJf95lW%2BsQLMXnD%2Bs2tkDS%2Bjlo6fGxfTkXhY1k63Md1cau1B04Z2kwTSfh11GDD6jyx6U8Ua4UVtyIxpcM7LWkJ1G5ZjiljPWQMc55ODvM0UTmXJPOiCy4VLQ3DbnNMR%2BSp9tpe94JS%2B3wDSNFlFgy3WGmIpsHWXjOLbZv7b7rlAtbEiNLcRGkund2y6LSiniyFLZiWF7qAK4m2uX3wbVtTGucLupXzFjdWx7XiI1p69BlVOesC8TSt5cy7u6FE7nxqE47Y3C78j32HmDAN2XMMHoxMkGOqUB2nOzknwxdqanab5qfrpTybFKRzu4obGGGfcHOa82CNET2YJcutwTVkdIZccGcI%2BjunL5HQkCtTs9u24lDcgZhbuX%2FtkSmKR8V1tFjpK2UqjxZpc9o9L37nMbB8SAVBTM4R9kne99%2FY635nNfMri1ftuFCeY6a4JGXOFawb6suDDLGEmVa9HKn%2FDC88F%2F8sUlRPM6j3hLwypVWF%2FLgjOC53YhIUXl&X-Amz-Signature=fec8d7231c663152f7a456caafe79f85d990b9547789f07267e689193f45be68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

