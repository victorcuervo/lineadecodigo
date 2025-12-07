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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YME5UV4J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyWbJjCd7%2B3tFNUTD07B4184HQuNS4u2QR5UycFuq6kAiBN9%2FqB%2BNGshia2oPQmhm9bAoBTl6695IR2zYQNWAS%2B6SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME97qSUDhpIzuRnQGKtwDWa4FE3R03tK6jWEKHD39SI%2FtCqxlkM2fS7r6T8czz2jGp61%2B2JqHa2R40geUZm3X%2FHVFEXYaDEDifM%2FTsi%2BVYQeuCupb0V4CrKFPPPqcM4VMcYDZ8nN8dM6rfQDUQ%2BTmWhu%2BD%2BvT4%2Fp0YP4Rv%2FXK6p%2FYwDDSWAYZqJ8ByRWYjVU1P6TCKJs65nXXGchfhaCB04fKWnlkfotANaXyh0TjGGYK%2F%2FuMBIhfmjtjo8MkmLejsyRSAEw3EOvE2CKBT6VxSQEXFInV4gTNi0Bd3wk6pQbBqRsxbNMJeV%2FtxTFYWuqbGru0syAHiW3Ha6r7u1QAZ2jR8djA%2FzCe6JPS2GHF4cGXP2FN%2FDkxaOgU1EgJFm5o7%2F%2F2YD5Nd0rJV%2BLD9%2Fz2USOVd9WOM619nddgGdj6hUuCmDDiRblSATHQT%2BjLcAkNL7MA2C%2BwIcaqWyOZNoDeIuX5fDaTrbjJwRUXvpk2x6fbxFKWQmXUwcJXYDh0gUV6AoennxWHEumMglui91J4E1a22T01lNfnqEZy68l%2BuwmsvZIOnU9WwX8xxMvXQJwhQnBh9aMI2NGA1eEhdFYMNhfmqEWUkksO0ADe6RxdCV5fbKByII8z7gEeOMwykO0FWWP48sf0uqR%2FMgkwkajXyQY6pgGY9yU4yt7GSLAISzaHSP5gvr4fx3AfXZaWF1gqi%2Fkd0u9Q0D9wNRWJioFh9WWdrZWfn9FZz5VTMcnGnUnbXysFJkYCLBVgzwPmNFXV8hVIaj%2Fsb9snjy6KUrhdcwqOZ8yO0TqMlMwP21xI%2BPVqRGiu2w1MdU0Xz9K58Cwwk%2FdVYosS7bUHdXDoDBp8WL0q1hAr9e5jGpPTRcf6tESWAwpP7EN8uaBi&X-Amz-Signature=00c851c39287a6106a3422857e0ba2e389378dde8305389fb9c79ee972067352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

