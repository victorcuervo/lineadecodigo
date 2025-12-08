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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56GGOD6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6KizRlT2tsRkaVDjU5CJ4HWf12M%2BZAYhpzJynFJYWMgIgeQvNm2OIrYvL7wXsQBFjDevUVhD0sdwo%2BvGucayNGNkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDu6J8%2FxJHuL2Sk3FyrcAwwWg0LrFn7qsZudvZLwlIiraFr7kFLOlp7L8Hg6wH%2F7N26B%2By5Angh0WqfCteATrllEkJ04KXDzfeN9WEDUqqPnLl3%2FlmNSn3USSvXqWtKLrAEOs7ashUHkVaQDJ8ZsrMi%2FjYbvz%2B05WUCEDSaoIAordk5kEnEdXRIuzoeZYnH8XqfFrHHrD86DnungMhUk00pcgcfe7sfzlKDCyjobQr5odOQt4XSIwRIsg1xwYmvWFYT8GReQE4Ln9hB%2BnUcd35pMOeSBfVghRIV5wzrihjXeQhEb6WKOn3nR%2Bcd0LXfzPFlhmecTN2FYK3bTbYbg7LrVTE9scmzhTPiFJ2qgegwO1MPaTdlg%2BNqwv5Xgm2o76WSPHLLI7ZrqJ78oSR88t1DPMRNaXhaKXZqxUuxWy5Co8edOIbjG4QS2Xp%2B%2FF1UAEqwzQxgsSx3GPGNyyeraUwbwkFtx86%2FO%2F2%2F22kBxELA1VaJUtDts7jW7YOuKWK7mZoeWBwsWeexRX5UvEDW9PZOrvY0w271HRnk7kALNdyZhTojgqlOTxPQaS4MYpcKKk6ZTbNiCGTNv6Uma9Pg1%2FiQPJKpk1rFqisnRqjgx45noUTY8owKJiJH22sjVi4LZB6sMy2SGe49LE%2B7tMPvk28kGOqUBeJJQ6KbkSZPnXQRdfG%2FeruwZiEWSqSh8HgxkXkF6sZbChIjweQY1VoV00ETc0ZRLEO4YuZEGs6lTk47M4Or24ABKTS2h15U03bpOMziyXQ26boLwR4zN5TmjBs9KJM4fFMO0ZwLhkTGdMkMB0Jc7YEHs3LiTrbfFD4sMYcRoRb2unJLJCkU5A2%2BcwO8qmr905%2FlynyjRjocEJR3ctpGGsk%2BwsB5b&X-Amz-Signature=c3e841381de2a53f2dcef5c3d33b8e16b0e921487b272c405d28002a10fd4d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

