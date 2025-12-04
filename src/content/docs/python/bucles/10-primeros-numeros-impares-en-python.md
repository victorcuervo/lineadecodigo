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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2WJN6W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC6bw59CaZZZ6SCCix6MkzwdoD1Asw%2FN9wDelrq4EgvwwIgBvDcpH8j4srhrmvmFPs%2FdmKjLFrFKRxp9%2FDAWQuPi0wq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKk6y4ERMJ%2B0Ia4WfircA00uPjeS9h%2BQ%2BsgAaGT%2FbwSd33A7KKbXL1co31qV3g%2Fes5M6dO6iYdH9Qc%2BDXdfq0wcHIi3PNDwUoDUtQIGv0mgow%2FJVnjtd884TAjFHo61nJYfsHQO6SH8jNEEYEjQiLVM4w0NA%2F5YIONU6Uf07bJXULcCezQboRWIp360FzQBIXxKq%2B9BzHdm6zGxkPuz8%2BHhlMwj%2BB%2FjRhi205%2BIGGvfWb%2BgmT5RXiaIGg9o3nGCITGy0w1du%2Bj8Nagbh%2B0izi23P%2F8sL7Goi1bkw%2B5owp%2BvcAc%2FHV0G66uuyJcUvPc2h3wyCRjOafdvEeeP%2Bb8UfR8D2FeFF3Qm%2BHVCSWBpOyclBdpDexj%2BbHHsuOjT3x3H6q%2F9fFss7eOtk92unROAJDwiKm7vM2a7M4n6ex8BosmiZw0%2B9fHKDRaHZrKWDQO7xALBeKlL8I3Ws%2FzlU4%2FC7WILAdJ7ljK%2BXprZdRu6Bp979u%2BkYXpVwcwDroAta5tSFdptINk0zXjWOJVkrUR7Pn%2B8fwQAHQPYFiGLm%2BIgujwxQGkjzeql8Vq8RBW2bgzhiW0DSdnqXVjEWT9%2BGRW%2B694FJQtkXzycZrdmqV3pSh0SJwAbRW6UAH0AD%2FWU2NgV%2F8Nl%2Bqb3MwboZikQDMLmqxckGOqUBteVQncRTJus7ivjN6qFv6u8DUgNywv0L%2B4JsIe9HC%2BPpM%2Fvj%2Bjy3hFeudbQ73XtSnOLHOhjVy0KOSbpnlc%2FaQxVj6ZMULihqWfeIkJWHlHjVmV9ZB1CRJgwnmb%2BkkffIV9llT2FmwFw4CYE0V3CkVeK8p1MTIkvDDbqcQY37awaALHDOSSZVulobXDJPsFxFiCxuCSd%2F5wry7NcaRNpZdub3FLbz&X-Amz-Signature=98c4834e0ed498bb1172146ff3ebe0119f9b5cc19baeb7fb4950c63b7d3f77e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

