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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VISXXAVG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIBaR%2BXYzTuCtxV1MD6IFcT8kcJ40DxEOrZLJ4euqOPsgAiEAvdByt5hYyyYS4WrMqTIhTUvxENKE3gLqAw500Ra1QTkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDBVRw0FHvX7kElfGACrcA7LvYH%2F6JCJmxdq0BV0rhxjil9YRW%2FcM2VM%2F6NhM0AK%2F9MQZ1o2TD50wWAiF1DKWWN5ObUg5QdDfQul5zG2eIKn1%2BkXbHKfD8GhM9tlRITCizI7gZ3a5C9PI0N6uOnwbobswaE9jL0mPRx0kdcZ1E4NHg1hnhSCigwvNS7ytcjIQTE4Q9zVxYFkfOtXy3Lbh9bT2TtmiZ0xQnDruzLKrCgQCNyWh2AWSEvVI7g5nwzEtjse4dXEfGSaCdk42tisEnuM9Zawx7lLP9C93UV9CPURJcePF%2F9DHj7GoPgBeSRqGyErJZHYcRxm90pOSxUxspPx7Jp1JTVA0%2B8frpj9tyCDgthT7OQS8ty5peVy0R9Uso7Xx45321dML90NkgeXW3bZZzaP4JOGkItRKqOsFWiX%2FDoHUNqf3%2FEcf%2BXmU4dTWiOvahvM%2B5oqmY0Y0L1pg56LR3D%2FY6xVtRJYbb97FE2rBX2cnK52vWipYhLJ40Lu7BRzpK9xUrtVqa3V2GOn6SmYUVmCs6E7sFsuBmA%2F8%2Fo%2B6bTP5WPP0zTC6nsMt3badMe1xh%2F%2B4TC96NIDwTF2myY6MSGHNnLHwQwQw1gInZztDz7IW%2BX%2FmEWlvF%2B62eiVL%2BsJR6FlgBijefUzqMISqxckGOqUBfmgT%2BgKy1ZPAd%2F9HTNnnf6nkH1sxJepDsTMYDNl5r6w2kCV%2FrzRvuXCHddJ70T5fjpsxmRxhzF3%2BM5gxg39vnTNhEdiaWJsCozP4bsICBdCJwZoa7hUS3SiNwf%2Fhtn0hAWxFbp97LfMNisCkMK5Wh7wSbGMoA7OUMa3irUpE6FStKrRXeplkD%2B%2BntToPFsa%2FxDZYAgo0KiHiJKWRVoRoA1%2Foo95P&X-Amz-Signature=289f8da90a89f453c5179b4584cb225d112028c4577bfe41d39796c8ea679603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

