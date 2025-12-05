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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZRPFSG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3juNT2q1TqBVAYhgDKC9tqQpiG%2Bg5djZkD3DQVleTvAiEApq5pApKBZU2Hms8Z8ZJqpgiUktUypAUDa2d84DEdP6oq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKWhDRvt8K%2BzZ2phtSrcA71chZgbx6dHWnReuqJDDoIAI%2FcJnvBLm3FwVmUhQhHnncmLc9Gi%2B2DI%2BcCWUACCn7kr5DWRhpWNQbANvcA7uJZ5E2Mc71V3m2zJx8FsrbHsh7iwSgXftME9N16frwhp6BgjT8tujbkWwAOn6otVeT%2FPCnjf2pIzV%2FXMUGw9JtFYjwXaI%2BD%2BQnQOarbgEz6YoNjIZ%2FtLTB%2F6umvHG%2BV%2FYDKSLJAElrh41H%2FbSw9PB4hmkCVHyDGbbPOWWgyVUgOiW2rca%2BCXVq%2FUltObrx0f7%2FK04hOGepdmYHoaivTByAdgwSd12%2FD7%2FBtrwrGFyp5JQVJlJza3OYaXPsw3vjultMdDpdq%2Bq%2FpMcmn0Gp6UsiyJii1K7rZTlOHGQ9G3fV%2FHSGCs3Wl96SRxfZgqA9zCfsqCW%2FD%2Fc3sbO%2FhBnxJFzV5e3i1RV09MPyWoEDIYSc0Q211wG0%2FC9dUhYD5GH6IADh1dxzn7IeA47mcZvq8Mt1cdeRFdiaKCx9nl0WOfGKHl8EC2cafekLpX8s2Tb5ufxa56GUwbFk%2F2IuzHbCw%2FDsfYQliEJCSeNFnIX5GT03QOPr%2BPNroC4%2FOHdfyjSPlWmoi545RtwqLaCAmoxebNI8IVViO1RZw7oDr6dd6KMNPyy8kGOqUBn6OF%2FA6yHoAF1To2LzWkjLC58GRMLCc3ujcO5XYuHMaP9rND0WNU6yFO2OE%2B4ZVdz38CAQEVbk39xhyG8hVJeC3YL56Nh92NB25chTBK83pELywk15i3Uj3P6swI%2FmYYNLnQEgafYBc4D3CrINJzTcdU8K15K%2BU4Yx2KzK%2FL1mBxUkI5dpfi8ZGCzRZ%2FJ09ReMV2tMc5ncjEIB62gkoS1WZ79Xnk&X-Amz-Signature=6e2324ed7e838e39a16768f862aaae400282fc38ebb274b3ef30d243de706743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

