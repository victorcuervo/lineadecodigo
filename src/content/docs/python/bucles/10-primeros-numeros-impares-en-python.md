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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AFRCNUC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCI2Q%2BLgpxhGCk7Z4caTbMJQXhd5NQpMJwyNPVJrZjavgIgDnO1nLdzn%2FCspB5CM6RuuB0dCzvp%2FO4sQrN7mAxO46Aq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDDNiZe0xPPR1y%2Fu43yrcA6hi0vuxwg%2BYxYI1a9rhOClzvjPkxH%2FiXcSBCq%2FeseAu9S5Nyo5cYfUhymQq4%2FxAnHFUzympckPES2C%2FbXGw6sGaQ%2BYnCDMqDQxdrui0bZ3lDTRXSss7UKtBzn90KFSNozzXL6qdxfBsRiZe2v%2Fq%2B3kTpgya2QJEWR6vcSPXOwz28Etux0XYMilPEkC7tLAUX0TpmIh3O0OeqqSe8VQRDrqJ0blQfR44qNxusiESkMvCuNhhMTZmJxC08ippxHIxCXxl7BoSM%2FcKlZ86oSS8omNJzeKj3R3feuABPPA3HotZ%2FlGlYh9ogNAJNjq%2B2uYEO1IcqPXAxWW9sEPgws9fhZ6qm1O0pDzZ3RfSEn5TzsqcLw46mUPad5%2BOevmxjRlweqgjn8Z20xW%2Bpn4222YbSgcGmAIB8u3Gw6pMbDxsZjqamnW5cETVE2KLZqPfLNZ4r6uKyxElbNQ5CnEEfchSpv7jGZFDfdJ%2BsSh1uCL3AmN3czbXGl9zwtzfwiVjXBKK8JHhLYz9AQeT2iXhWLB%2BcM3%2BvHAP2uworpGOgtbvBvtvHmccn%2BfEQcJeMXecwXRhDB8mw3rSrTnodrknMO135%2BiiwxvnwtRpfIMXqq5fhFDVQTvuUYmWBIrrPAPBMN73wskGOqUBp0LSbehBZfQlmZoPaNtqHkbqDXBF%2Bt7hTrWcH%2FQmuaHP3d71l0WH3YZB2naL%2BAN3RYcUmjTQYSazSCDszuV7e1aDoTarpClg3tHYUD40LOyrHFi%2FXCk9jwlIDy9btCSwrYlp4X8aFL9BD%2Bp5ja4MQ5z1PLwoUVVFplOJGs%2Fz9bGzDNbKuZ2tXygH1MY3L6nwyOq97TcIKXMX%2FksTwEjRofA7g1Nn&X-Amz-Signature=87ac05391a557d964a1de01a1e1c418ba30f6ae95dc1d6c94e3929dc557428c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

