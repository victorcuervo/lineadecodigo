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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMA2DRJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBMcPUeAGv5iz3UAxr7lGR9zPquadcgaIqKeElWU88kaAiAIb3gH97XjTtjVbbtS%2BTfV%2FnLwxK%2FkGNBWTU7BJJ5ExCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMRWYClA3ecSlBC0fYKtwD8ZDhqlinsbjP%2F%2Flb3lljyWKnjGFkeCPYd9FnjEdV%2B1DzCVOBI6%2F1oZdtqkbkdTpeLvQx1P10osdSqylDU3v7NhzGm3o0ehi9ekHODZD0irMqewT9%2Bqg2V5jze7q3SBeZD%2FedLy8xtuZb3Ig6%2BCCAnf6GiyUhgeI2oAFUQvKPttsGDMX7pTZEsJiFKt%2B%2BQQz2ycZY2BjgD5AH3WomsTyVz2KezM2bsRXyhiRsYVfg9fGlMxa3vURWmA9SoG2jacZztk9fhG2L9Z8bfe47d5GKl3Dmk%2FTqlM82OXlSCNGl%2FKY7L%2BWX1RgSCzynkrjiuX07Px3wgW%2Bi2fXi2uFeKGNn7US8xNzet%2BrtTxKPEP2kWfBaPrU%2F%2BHXKsDqh8NazEy27HWYX9MXt0yfc4EjiqT7e%2FHJdcayAQMACJZToPAZ2IinAipwzFBxo78ohR%2F9w5Dm48y0ShzSPoIk2xGw3uFWYDmRRKKArBqG1oZlvD9npHn4VeF5Bq1f68Z3MjbtYyT582QOWMKyza4gyuNa2fMEnWmub6xoCDpQUOYti0Hp%2FHDV%2FdNyxGu1iNMbxyV1z5dZ8yqJg%2B7k%2BCFm8uAQhjyaR7QV3sTqME4mUcypmJGzDE0np4hOaT0q0YaRvzBMwqq7EyQY6pgGWRq3yqExXXhEOLxnrJnZm800viJHbQnwunIOPRWGHjAauPuJLsKMFuDAxX2AogyWFkAhwxwNLjQCewn2GFNnEANVnRJTFfDsAgs3V%2FM2rUkjL9%2BwbxC2HkoW7aWyk2wE8%2F2QhJtW53xlzbWVKOAAI1rMv1qYwtIrVFjO%2B5IfM13%2BT18LQ5mlSENq1Oud2EYEA4l0DwZTyGuKROrKewL8fvWRRkJGK&X-Amz-Signature=3b5868cab47abb2e9aef3f67bc4319d3b3afc2729f8a76c7502246a663bb1c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

