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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPP5KAC7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCn7XX4x4tpYXrt8sXa0e7%2FootIKcuZOM9wMAbYnh17KAIhAKzHYvRZnPMgp0z%2BtorVhFBpPeFd%2FdGa1yE51OIazYDjKv8DCEUQABoMNjM3NDIzMTgzODA1Igynr5FsImfsLRFJLd8q3AOeYBUjohpOOk4UfQWyQWF%2FBZdgciLdp43wbTsd7bLBxPCpo6ZVsDZMT3sYVb8hBFhnNb61XNha%2FRcUxoXEdnEgc65ux0Xuepqtn6Px8SvNUUjWHwh%2FxdSly9KZdlEFuTe0b%2F1YCua51qXxPST4m3FBLsGbzz9Pmth3E67q4p1viPNfPNka2%2FkWPeQZ5ildVv40uKANEPQuyJtsw1wyeSzTdZsSKYZaSF3CI74UP25ckVi3CaObJ7%2BbPSYmE9W%2FvzfDN%2FYSH7knsHSpwRPsCDOxrjsmxBsouyzIaXp1NWtt4s92QF7psPvLaYGHzOTLSpWvw6aBdddAbiuRpiNP%2BW0HK24Y9mPIDFb3Rxv8fNJoIyM%2FLqAkW80onBzXngJFy9iM7A2G1rnqN9XUdWNUNeSwO4Im4KitfQWNesrfFA65vyNn6lYivFlsjOFOGr1lo1rW4j3RH%2BV9TRxLIRlMQCvSSyI90BATfEAECZvcgK%2BabOBkR3EroNoa%2Bg7RJwvBzGc12g9zM55hZIOw18MUZS9NcGU0nFG8kxR9J2ajXfK91GyGBNPwKEuCZ0sfw%2FnlkMQRLX3EYkKGa3kNScS1x%2BiaD9SrANBQBqpa35mxUmCbnQl9lZxIn39lKz3YvTDY5sXJBjqkAT6M86k2JhrjXv30H%2B1mMtCCc%2BIyRYPIf%2BKm6zamdjwVn9NGiQoqkTCCBaQZvKVjW7t2lP70YwFT8Luq4FAqFNmQTcg8kDHtOIHOBX6sHalkZoRXrp8BHr%2FUUi788YJE9vO%2F%2BXtNLM3tJLZDTUS6aGWwryTvm6tu6gYCPXW9rGV57od88%2BpnxWx5dkf%2BJEySguKQK7tS4aU8hhBTedlzuUFcAUPt&X-Amz-Signature=e401440d7e3bd6773e5ad5552c534b98be6c05e6405961e5181b3dd0f0769f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

