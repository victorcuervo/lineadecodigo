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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCQMWBAB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICghDU2EbAY4T6xovCo4yzICrciwNTGxxiApFrNt%2FPyMAiEAsIIZHGxbtNpHqQuMV0TmVOsmet%2FTzJY8yBGfM1zdAFYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOILkxpHIGCI164WFSrcA1JWUGp2VWWjqjmviQKRfW3BH30jeO8Lwc6V60SkzJaMddqWToSn2bPc1dMSwqTT%2FLTXLpiH42UBEFVJAT0zLybX7HNZa5eLrLth4ETrrQEWuTs0XNyBcO1pqp0nEaXgPAbGbyuvZndPPPgDKnkJpt7V5vvQ3Des7ZJcly5kWLFVTYkSpysE9%2FG94s9vLrIkyFZQc6U0RuBk72trpf31y1ZST98K8%2FuCpyLCO1DSytnju4G2AP1Jragb39Y8JzPdXG4H6DNHyN4XO4KAk7773wnpAhlgz0r2etidaIDJa8lUrkz%2FPVNNfjFM5tx0qFngfj7XitHpQUQ5zwpICtW0KX24zSRb9MDPKCz%2Bd27AlpDPh4NPYJZtvY3gL3zXVzNWdgMdNE%2BQ2jqpe3CoWWgplfWM4jh14k1Ofd0uWeXHn%2BhqaOuCCvDO%2BH0oCVkXpSfejZDw3L%2BwMHqsbuvTjY%2F0%2FXjtdiQb6LKQRkPB8sEK1hR8PxVB2RwDEi6gcduEDYpD0s5EGteph44WsFSktxlJ0gd%2FfRVbeRWpsXeEgUTaeKsKBEGXJU5EhQ%2FDoVsb8Xw%2FsRbx7MjkhTGj87V5Ng2%2BOHMeE2NaduzNuHqmv%2BoTHO5AZMb99a1B3t0XvnXDMNiz3MkGOqUBqAU8M%2FH7g%2Ba%2BYC1nFEclDGBh%2Bcbnqz%2B9eAINCGYZeeIxt31xGnmPHWg3jalbNFzSEEP%2F2AEG0ZC8j1cSYSTvDAu266E%2B1o%2BTGV6oIClCTCW1RSeqcGnsM4xI%2FKh71kFsM8PGmAMD2ol1dhuKy11TAIWOBw1cMbSXxmhNVM%2Bz2vFl6c5I0sYDtBZraXN%2FrVkYI9L46HmfETXhWhEC%2F%2BAlS1fQAPak&X-Amz-Signature=8191ee65bd4d774a4b1a76b4ae6a91951b7d6991c4a8cb7b90ed41ff35e2c580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

