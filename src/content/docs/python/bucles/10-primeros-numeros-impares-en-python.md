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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6I4Y75%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBd%2FWIvqlBHj9APTzvlTVAybwChNCFrSa4pl8MrnR2utAiEA5PnuzweiFOGQqTL8j%2FnMOkL4pi7Cwmd8xdUPi6WiXaMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMEJKgb%2F7MSlFS1yCSrcA55kgXeq2g1GuPaISnJODxW0OlxpjAP4p7NvErH%2BzK84t2zxAI2Q8zSWqRIqZwtAcu36GH7VfmuMdUOoGtey5cLHO%2BUYP51A3SA99UvsExURXpSD9oKqLMWvZj60VqR7MToogJERHGRdaM5gBlhNZVmmfd0TU9yUZzau72iIMG%2Bb%2FJaS%2Fv%2BHU9Bj0tiDjciO51swdswiGsOPGPvMR1ejwUhT%2BH7exmQT0Ke%2FD8ZbmL9Y7s%2BJU1ibBaGFUGXAQmal542AQodOhwJ7Z8tjlufdw1HNhn0tqe4POebkV81VG1V9mKvXcdywuAk%2BTRk4%2BkiWYcvML%2BVszYP1d%2Fwu393gyv4qSp63ahLxiSBLTwGFK9EpRGgVlFeOwGJr7r%2FWzResjCRo0ly%2BVLQ1OonbFJrCmGPNBpVqy4VKKv6dl2URQOReJmeodE4bb9%2BH5ixzCNDff0i4xD1Ehu1CD6tFE7onCPqrw67vpYZ5Bmpw8%2BxM6UPNoWw8RegJqa4rGI8MOknGkJ6kD3YFPwnsvkuU8dXFib29YNqjG4Q6Qjl2%2BQVYFrKKJ%2FI8%2FgJJyDRi9ZAXJ6girsLIFZ3GM1tkBmohNpxwY51X6PLz%2Fx38pZ%2FDG4nOx4Pta%2Ba%2F0jiCqrEONARUMJ%2B8z8kGOqUBV2ZAO92YLz%2B3u3DFnWFgmc7tnVIp%2FjW%2FyNH2SQ1%2FDvQj9XqH8ru9nToOL%2FiHjv7ezVjtorxnAF45x1JxXogCR4g8HdraX53B48o4iQFLJ6DPJOBabQcEadHdPYqi3NCTYGSNLPuoU9P8Q4%2B4d2VB4a%2BXu5Xy19AnXO8fnvG2jfC9oKN1ncRLYafPQFrETreeVHjRsWl%2FA8ypWlQ3CEpblhfl%2Fr9B&X-Amz-Signature=34cc0e43690f9a7917ef52ae79f56e340faa0f008b1f7695e3093671fd2f9bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

