---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYBDUYAT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCCwwgMsObEjUjDUI1j%2BquHJLi%2FcORYOLBJEZ2bE9kVzgIgG8XFDhTUItkdU%2BjqCS92VVSsIbbwbOeylh2X5lyE39oq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBuI6GiyqRvT5p%2BEvyrcA8wg%2FuDi%2B5%2FqSGkxFe8pMKGAmh25r3uWbsHSkIoN0bkdT7pq9uaaO9fE9ArlHcZDMMgORBe2xdVYiZXxXMp1bbzd0yt6MWRn%2F0ummCwpITVDNFv0Hw8qwqGzrJ0UPal%2BEAKpnDsxEYuyn%2F4asLVGsO8eECnvyIsYl5DwrqX8W2AMrWqRhc%2FQKIZ0b%2BCaXNAswaEX6RVRkk%2F0J8Dl3pLvEiPJplvp7wk4W3z%2Fs0JjgPR2Altvdjd9%2BI4xmbtbACTOs58XpJGgzACdiSQkI8SNCQXP3evApXlwWVbHJV6Jr%2FQMOmd5g%2FXGKhllBSQl1myQPvU8wWrv6uAhjV3TR6Xw0nBsJXprZiTApFZqOXKxYjNLzvH82UkUnJnXVyGmMSrsubOUOlqbDdb2qXpS50H6oL0dlNpWXw81Xjtlj18DdP4GwX4OEo26grYrdH8kL077LcpCw7UR5BZpYZG5SP8%2B24QCviW0rxRA%2FraBHp%2FzkHrV5Fx3cugmfG64oV%2BnTCRSyBBWY2y7MmMNtNIFFxbwfdraY5ex3%2F8LPorBh9F7wpDE3tHVxnfNzjG6iNHnYf5u%2Be4YCgN9nIg9D56rsmZMMJcL5ChMrty00neSKmx1sTc%2F2QM3zt%2F%2FFXSra4yzMMyRwskGOqUBplrqCZXO2%2BBnlGV%2BAO2HzMFCPtT6hsdW7QIzFKzP82knaDPoT3ZLkyYX%2F%2F2ioD4Rt6TjrlPmGl8DBLcx7p505nSuX3ncF6cViJupJ7VXkVtqS9ub48QBSY8e2eIejFP5s%2FB%2FhBWaEVmJuAwnJQ4d6kjtzBJTcxMajaC3tkOj7zlFEbS0nkUkWOp7JjAkLJ%2FMYhJAu00f9U8m%2BwBFqtbA1yYV5lM4&X-Amz-Signature=4621408acc34a7de3537b26b4f12c6245b07716d24bc5128e126e978df1b53b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

