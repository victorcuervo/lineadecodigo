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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774DEGZ3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmyBGBL8oYFfW3s%2BEQUI65P4owZQI6c37TGPhtaxPsmAiEAoYA5heir7cVF0JrVnMlSa%2BEVoJcel27Q8sExczyHhlIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFGK1CKTjD2g62Fw0CrcA3yYcoTaoGiXa0MiJg13JO0wYnHZjLEM2C9cnMiyR%2BGg15Z7nNdVNY6d38DBiYYN85VAUD2eaiTuRXkuWpl760f9YOO4AIhSry1B0F0%2F0YJsRVo9bDm7zupXgRUqqMd3wzXb5QZXsxlOTwKkmsOhIPTnNczq%2Fnk91VWXB07Ay7tejBv5M%2FW%2BkIfJ%2B62rFZs26ozushrUjmkdGOUjDtuHBXqWm3T2BdDVAjF6jy%2BGJMo6LC4iks6WYzhir84Qolj%2BYZyHaqXvPkruJJpn9dYHbahtpXKMTD9Ox%2FohcfUsOVI5hKHGhHPzHHm1%2Fu67Q1ZihqGxvUMRf2Z%2BmJKZGtDXwBxM6l309RPfEjZUhOyV803kBf%2By8q4tZt7JSB0%2FUXK3WRbUPsyT%2FJ%2FjPEsyXRHXipP2%2BLrLrikWL8%2Fp0d%2F2Cu311NnqCetBAoc4JvO54pPHnl01Ba%2BtWT6Uj1213WIXYkBuRMNru2GOZipHGOdBY6ySeykbEMeCtdObCcBwFS8EZEqyJYspJe9oGQOtzEWXi8KEUW9tatJoy9rjeJkDO6uXXnwWXxGnz3rYTjKenMMFYQBIw%2BWYP9M9PgE1Gtj2OHBiitMoPnraTYPzaY08hLYyQM5LiEfTHOn2WQIMMNWyyckGOqUBToky4%2BOBC9i6pYvGRfvaI2PTpioqLv38ZixwQXDgvAH1BXW11MO%2FaOJNgHWJ2q1i4XwFv3QW07rwnOa4zPLwDQdLmGNEiIzEbue9tQNJerKShvrKC%2F7YlAmsS4lcZAqjtKpE1XnkAs3bWoZiWzF33gji5M3OW07qDfD5Ianq5aR0%2Bwk7BZm%2BA5BSlCIyG7jTDdiAV9CSrzHZOpZKetY3QiXDKGxE&X-Amz-Signature=8965af8f81a81367259ff8c2458afe05ed3afec52c8d57d65a98af79c41d3fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

