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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5LNEUBQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE0JQwDO6hjJgCOV9pcDzSg%2FfAm5AOW7GHUoDGNbOIFgIgQDti0ephCO3zDma1F7OBFhP%2BxmY1rS8YCFyW0mNeCMIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBST%2FHxVwfNSPx2zircA4FTd28myXHC1BEC84tDsK%2F4%2F7VnE8cAE0KxhuCEhw1YkyS6Bh5JIHmSI6txBfWIp6A4cB6G6ye2D80L3zQGhzUgfheP1geFaLx4qQ3ClfTsKyNIB9Tj9PlsNHYHDReoiEFv8RtCg9PAG3rn0jTGasGI2DE1PJCVMVmpDvB%2BmidJOy8VXBJrmDfiK5kqDOVo72A9rqZMVeVUWfwIkiVbUSxJQVFzeP3d%2BICekjj9kWvjon%2B4aP9SkM3ujbPeInyCzAMMW7bVEFcP5b%2FeQ97p9PZFZL8ZACOBOlemryTOb1ltQE9VHMnyjiUdPLAOT7Lnf%2FFNDQ9u0ta%2BGXOcyXfZyx5a%2FcQP7qThlLYnPdaUtFdNouf7HQ8j7DH55DfO92%2FBv4fwclGjg1KxMMF30JECnq42EpVJpHJc6%2FK8WsL0XobKxdOQgD2pT5Vs62HLvwAoib%2FhnZEV0%2BV%2FWtTPt%2BoupxwAqFxAsWyU0ZzfSzDM7CuO20Rb3tdkRVa2uRzdM%2Fj4CIjstV%2FOLyCp%2FxoowmYfB90orKc%2BitjyQbaJWDWDsQOYmZ6SnrY5dsezlrb4vIpFKlw8MbCpbNmtpP2GCWjbCEIWeaam2NPAKzzXtGqXiBVrsUCAIUWLMCPZRurtMMKZ1ckGOqUB9l4VfT%2F0e8Jv213P%2BI8ptofj7D5WP7RNK%2Bi4x4x4zfqhJxixPWQM%2FEmUD%2Fl0zUCdfhUzqAA%2BfAbXcztwlb7MjJ63VXmKogX2m4RbVRLmw39%2B%2FOBiV%2Fdx84hJ8Ijniwo1fqi%2FfOB0xT3XoIGT87n%2BIBGJclUcSfHS6lz7QRNb3cI3EppZWopYBYgZYCo92Rf%2FylGOYsE4rVAkrmzqU4ohByedi%2FpC&X-Amz-Signature=07bc7b76d188ee7c4827bdd92d41659779f3fa76f266236144c7ddb4a9ad7bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

