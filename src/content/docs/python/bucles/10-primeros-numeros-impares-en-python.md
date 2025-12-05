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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6M65MS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX0yNuv7ts%2BysIV4RM9d0aia%2BK0jqt9H6IiXohtwaTgIgDzuBk%2BMlV53CKmKxI9PE972ZPSDyIqb9aglmUYt2WJwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIpn8RlbuKcMiUs6tyrcA9mw75TMvXh1oO93Qio7zZseKktHSOt5gK55cESm4%2FfJy0tEbXXk9wS%2FG1tl1W48n2aRJTt9qi%2FpOiuE%2BDHqIXAqHhZDAkvvHj6ERLVSic08p2OUG89%2FijxsVlUjdwlz3E4TWAm8LpDg1JF3aFFSbSefKE8H0AMwtBOAsZmpkldnIw%2BurbXMlYMNcsv3b9MbeXwIpgDX7T7IyAfIs8XNrjvF91C9Uj5t4UJlrky7uNG3ug8a0epvDGhPS8Wgw7ZkSBFoZbRqDiq4nwceAARzccY7M%2BC4phMaqSqu%2BE0mUt%2FMDxffhNYsZqcmsY%2F7%2BAk2CGepWw%2FDz6ORVPakslp0sRJsaBVx0nSuGckzeIW75cDLjKuiq259ynvRdQ7xw96eW11uywLQAxBX23csUse2FlqPYo%2FbJ%2BTTqOdLcmeg4jsD8e%2Bx7xywwOlyK5qp1aEPy0EHBDujtNiCw2o19o4m70KRFpUoK%2FR1Y68mkRUqAeDQrr8F2We7fQI7ZYMBT%2BXDYzY3%2BA2Yt%2FRNaJYPNV1uCJFVFV2yye0mBEDdBDyG53Wys8xOk8Uwt%2FTtD1NDiiTjDxl4r9%2Bsvs6nxGk9I0dJsCZZoJzanEjacVt532niKM4km0lsr%2B0In4LwNzmlMLSMyMkGOqUBUDmohPVEVrtQ9ddnGrJ7DgRD90%2BTz3RHERqPVnNTK7OgmoeVXDW2kmB37xmhYgUUcnmiveCKvmwPjpyj%2FGtPPfkVk4Cp6oNxBoKDiJZsFAeXJ2UEzlauVkjl8VNIoPY5pE3xisPgIRbTV%2F496k5zqLoFL8FXLfh4k7edMI9ObXUDrK2EwsZWJ624qfEriNcPFEI0pVaBLEbQu41tAZpoCV3QgILb&X-Amz-Signature=7be3a43835dae2d75d1b7dc7611b4439a5c26c250af76b50615ba601f6aa3af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

