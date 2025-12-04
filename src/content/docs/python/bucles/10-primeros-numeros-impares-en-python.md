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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PAE5QE7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFKTzvQP0w%2FQxhDPVFqx%2F6mLw0vCgBFmH70TMPko%2BeU5AiA0Pxf9ljphhEN4kdgQLtVUi0xQ7hybBkEqy6sXeCgl%2Fir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMdcHPQU7q3obdydrbKtwDV5Q93A%2BJJ2OfljMKXk6O5kWcUp7G1UITkXU9yEA5MZwOVcdqOeyJ2IYQYa1BC6%2F%2BWgV6NA4i2LZTWYiQXSXcRHHICUpAhcqBPcplsWzWpowk28D%2FYnjsDLKEO2P3XePM27olt%2FDLo%2FTBTcfLDhHJCv2Y8ZheFlqp4tSb087lurGgHzGpzrpRl8vhC%2BJ73OJsGSpa1bqM8RAtB5zve8WRZRkV9w7CRVnLRlNdpqiMBkkiwSnhLs%2BHwpUMbUMy5%2Fr4jscQrmnjLW5NcNOlqT%2BzaIHSLPdFL8qdM7pAfFYKYtiQ%2FUEz6YnCWdceoZBVWn%2BU0PvRl135B8tWjlONEwRnlf77NTirU9KzGA%2BE1VPfJpQIwRUDMUsFxMdMSy5sgB7jN5RG4%2B3ki41CjN6ka7yZyCd%2F%2F%2B3Dj1EDPDjmeG3A4UC%2B8Jrv9D9bqO2CtOWqavqOaa630Fu4MMr9IOXcel2bc%2F1x3R6Px%2FAgQ%2BIH2LaC2CAeSiFlK%2BZftrmKcaU7eeqgFs1oBPmK8FGj8wBgSt55nWl0wqxyWBD5X6oIkVbAVbZCz9jfXyhibqJvHl7ET76g%2Ba8pB%2FhFTfgxD9yjLEZ69uyAZ8M2rP51upN6%2BHVXNjGdPS7k%2FR1jgY4k5mUwrMrFyQY6pgGjpxK9hIG8GaENYFgxsda909pffcsZ3uml7t8Mg%2BmUlPNsNEc9eUZKg5GqCS09JvvGk%2FwjSQ0QEeDdLZ47r%2BHsG97bjQ3v7yrd2pSJCvunxDfba7b5JoE1fvy4v0V1Ke3ALx7K9OTmTow9fP7HTll%2BtREpL8nKwXYVfmf81BvKU7DgS6%2BcrS%2BFlPKY3yQHEchp1iVPn8ZnDDalnauL1TXwAphj1Ktp&X-Amz-Signature=e9f84d1e7832a88a0cae5068a807cfa1dd6768079902e64f18e76e8df7168795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

