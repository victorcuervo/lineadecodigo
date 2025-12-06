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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L42IANV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxtG0CDVo7cHsUvgEtQ9cP5kybk%2BeyGg25YKu3i8xcYQIgI7A8s3iA7T3BPKsaoPf6fianyGqF%2F3a%2FeDXjk2YehYAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJjudwpQ1H%2Bsrt33OircA%2FK%2BuMKPqBT8X%2BHfBdBlpsS9P6WflWhY7nh%2BaprPUhNIX6FIVFU2OGFG%2B%2BKkkVP%2Bhghmx3P10v5frHBxTyY3H%2FW91rE%2FHeSsnyw2CnpMkKTwoESBq5Wi%2BvOLGkZnxCETcm8niV%2F4bDuacrBkoXyLp2f34WthzdKHMnuVZt2bVVuzcXu1JLJjWvh6s3tNvEoKz3Qh680JAgLPh9L6XTvWuiAQee%2F4nxJ72QXXKMsxm55w%2FNM4GDAcDSNwfDsmJNlFPWT0nwOJcPOqcJ%2Basrdxh4pAkJkcjiBOWtznMAwdtY0MpEol%2BV1J09%2BAVhj7Q6B2ByyB6cscrqjF4RGd5hh35ner%2Bc399KT1kswQ6nhx3HQbOWKBS95R8X5%2F4xq7mrGa%2BlPELhW41bntds01pbFkiXOjFY%2FHCxdH1WDAPvIjwYIfbKkCw2MmPXPR4H9x8YHcZsdNY02IJs43XUzQebTLkXH9Qr6R90uSwDbETFM7AF79CeFWmU5TNjEDGdSi%2FzKkF9CyTwgsXXc5A3x0sMlMSN0ZHSpwUzw%2FthCyVPN0C2A8qeXo9bIgaaW5%2B66AUGnNQQ8JBtHdrto2b6Jqdc5%2BWh5V8HSyYTB0L7PVNl0Fd4PK8unISl5KJxEX8lfMMPam0MkGOqUBq025EqhLImAe4gg44ITTsJhZqqxFrhlx9T5xBv39QY%2FqpwIXklOxJ6NHkIWyZpySzqlAL9R4FunhiSX3iNifzi24eE%2BGcXjw3%2BjmGnzzVjKqBPVHiMsjuBVvTS11frJSbm2CanbxqUiCCo8xynLhQEfHO3Ft0Bc6qD8qOrqLo5RjjxzKkxTtN9P%2BoRpWCleGWXV16j53bvtHoJ%2FaeuM%2BBJWcoaIw&X-Amz-Signature=170d5bc10a4b7e184b020ee9f5b393bdfeeace93e9e9bccf28794bb838f66be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

