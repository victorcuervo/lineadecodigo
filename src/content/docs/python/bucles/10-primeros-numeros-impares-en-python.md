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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCAP2C2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDRlqyboPb7ZsJl%2FITyGJIuWglVw4Cs%2BCEUI0IyRYAd7gIgZmyTn1DV4Ukqep5lb9EnySY8AfkVuQ7DQuPVeIDwtT4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKjiJ08%2B6%2Fo5uV9iKCrcA9hbPMa8kZvSVBMFDPDVVXEvce4%2F3QkLECZkB006IjUM2o6b%2FVXmatUODN1uAr%2FOmmV4Htsp9%2BZRg2NPSQH4QCQbM%2F8t08nV6QbWE%2FFFWRvE1F7nWbS%2Bt32XAo0%2F1rhyZduYBH56pCIZ1ctH5uj5VaWaGJMiIDUPQwuq%2F%2BiupYjgEQlRIw%2BEQiakRb0s0Npzoo3hNvvmfum6k2VcjmlzEDk1s0u8bknSnZowfcBm%2BLl35ugd%2FKX0SyRmWJbLsZ%2Bt4tFbVjhq%2BOQwoyrqY3N8b4ez81j9%2FKa1okygKcvtHQWXdbLRWYvbHhztEk5CyMUm8HrbqOMcRAFJx3KwwQkHgqIwZUz39hSRf6Xo1lL8TbQADOmn4Tu3TaK8FEEEMhpz7FXR4p0neKfZTdf%2FpXGPEpFm4uDawB%2F3Wk%2F%2FcDfW8CQtvc4eEsUnzb5p28NFQOyS5y1P%2BTfJO6kLxQ%2F1gTEZX354wA8sdf6uQpuQq86traC3dF9VksqSwYpL7Or%2BBUMnr%2B%2F5BttpGVLIbR%2BuPRp8Pj1IqlQzTJSWGEVaxaVrKIX2MFEUkvVKjyQVZrOlEFeoYq7zev7g7DbVfQvWXoAMLIYl4ELZtQkO2sUjjxx8BT4JUvh30cMUd5oLFBRTMMSUw8kGOqUBR8OQa6MOUCRLQmVwsAf5CKzyic2wgZ7QGtFTDuSZXsenuW9%2BFzSNyRNQQlSe1VzzOQ19%2FRUzZ6yab2RaSzeuSoujWZf%2FIl%2BcLTOK8W7SrC6txd9kWFUG0%2FAitxrKPQ57lywpoVfeAGasumrOT9owUnx12tguhlhGAC2X5PxDp5vn2OiroOS7Vo%2FgV0TiP3LkTiUBzWgJI6Zb4iHCkSIxzE7kzeUH&X-Amz-Signature=b55ed3d4f19e55253f440ac0e01363b57ac1e11c1e0f5b35999904f1e72ad796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

