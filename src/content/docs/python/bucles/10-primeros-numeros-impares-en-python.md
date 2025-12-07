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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPQVRYS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3TQh9k6Zu8KxWkBCUcuzRFiXs%2BT7Z6dhGRsPQ%2FFHoVAiEA%2BohQzJE490iSxYoKemzTAIBab6aOf5y2x9zcyBAsIfQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpB9kgKyFC%2Bj6fFNyrcA%2Fa6EDjliTI6LV5F4tq5GBRyYoUQ6XNWWccytSXGLsKuQJGfBzcPr%2Bjj6frm%2BRLujv7N0Qk23mGQvwIpgW5x%2FpOJig3EOzMTecTyH7WhRm%2Fb%2FfUtCb9Vezu2LjIvswwRWeGx55dTArzGTdFQJSUj%2BO1g%2FefT3%2BuY54%2BmKaxmN4fKAzDPvDEI2PjhPxMTaE1OKR6ySQptgKY6onPxkNs4w6h9GRh2ywLOk8a13oKIBerN4pEo%2F77sZLuP6om7aFB1qPl1izgb13Ezqw5d4kkQ8uSrthP8%2BoNfd3Np035LIgBA%2FjqhhNiakynraOc4t3X3nQxdmYItWvv2maZMwabEJ2YHnqRQDo%2FOc4J1PqFa2rre2PpdOBDdACoH55Z6YAymHqf3lUNFqFZSbSAgVllRdId7t0vp%2Bb%2Fy6BWYQ66lpIjmxNRC3L6Gy8cOf9zmh3jntjn2AbXWYzOePf3m%2BInRYxYmRiLRxO2%2BzjaL3pUOq254A9CliaOf%2FssURDQnLaq8xFASC55dk30BRQJsYioUoYVEcWYBG6Mem6RfWd9zQhQmD6yGgKgmFIt9M8U2JfftWNgmw%2Bmasv1pZ5AqUskU8CwgQll2QG%2B3ny3kNfpK2%2BzVWzLtDyLDD4rve647MLip18kGOqUBit7eBcLpU2VTw9rqC%2FpoNAjGgS3yswvVXQPAfUEj0GJgUisYaMDTbeqT1sI%2By3MlocMuuNZ493GXHhbepc87cgQKE8ufodSr8bPMkvDgVzALJSVLQgUrDnedf8F4DjBP28YgaPY%2FJCXZzSEVrQaBSM69UCqA%2Bo6ZUoOeZZeW8DVi1ZTI8ppXUbACp1BbzueBr9LfzGbfQ%2FrmzcMoTCBEmHrm34wK&X-Amz-Signature=ec5be830c2d237a253c0e38c0371a320530940475e17c79baf2e933e48848072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

