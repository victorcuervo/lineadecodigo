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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFFVM2C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrEGFXuXl3fw%2F%2B53uurqbl5ve0Mei3UxjcxYilnlBizwIgLuYswys%2B453CZTMLwcr6D%2FPbzSoDcZRQsGnp4Mc8ldcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHV4k1FY1okDbIZRDyrcAxnB7H7QuYQdM9XoMiIISi0dL%2FSh07lBJO9su7aoTIxwQCRnZYNF2R8zWi8IWWpJ8ezaULaVlsqDPKK9ZqiH1wllHsvXjbjF1SOtPxFyBGg8DXs2%2BWPYq3P%2FFDtxjvQq%2FOxCJLqhtoXWcBamixJNcVvxkU6AK7eYe%2FbsdJYDG2v%2BCdsQkDH7BKQDx%2B7PUOwpxj85t6GE7BIbrUMcZnAIK3U903c5GoWP6yTs4fJ4sLr8NtcnfyF32azCW2kbN4Baj0rv1NO73pcRpiKWDsfT8skEDpaVwFOnlnHulu6qdOdxuQNvXxWgOrrm6rjkpIsDgfsmQ3ZFjPK9WNk8u%2FOwmSGgo5G5rbBXA58omNcrMvo26tMjezu%2B0h3rddG56XFlJqWdMEdtljsH7pGidoh1j3IrBs%2FX%2BD45jW5Ae%2Bh5G119NiCC%2FmnThnxy7xa9h0mlpmwXbtSeAVO%2BTD2nGkcK1361f2mX5mUbL7OfGcpVWrdyndB3%2BzBLECOj8UcNuEHkwN4OsWHtWHzQcDWVrR5tr89zg%2FkMi8NLEVpF8QB6xk%2Bqb4hbPDnw2ASYJ%2FMTCN90t4A5SsT3e1qCL630PBe4CRjHlLdlAi4ul19mAUhV4tNY1xe4oMbPHJvOhg3CMNf90skGOqUByEojEV1llWPr6xDUVpXhlNIo2XTYriTPpEr21MRLSCiQ%2FIx%2FqiPEfBHQrdY%2FoPmA9seouGKKd%2Buai8N6o5I5jeAxmtIKhGfVhc4vx2rCZWM2r0MGm9sylrIom87ptVjo84bzIFP%2BfJEUU8t7cCgWbaSStu3%2BKWB4HhH9YbKU9SOhvXRdGJS5nkvq%2BvU%2BrHbqayclWDri6LYCVECwN8g9xybYew0c&X-Amz-Signature=8d138fe23cee8c79392880ae35b01b6ccb8fa827b49b72b5070d8663f2b32a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

