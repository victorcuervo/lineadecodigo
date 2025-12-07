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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CWAXGTF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAecZkKu9wO1rwwJNc5fgZayOJ0CzCrwK%2BMLsbDlGJb%2BAiAavdqlrLOsWX99UZgokZnIDGzYLamCcKAsIjxxLcDb2iqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5CIsW%2FL5Fvywtv2MKtwD4w7K3eixUEiQ3pBMq%2Fl7kav2rTqWDZFdsQCgb8%2F%2FXtIM4OOCMuLZcevhzJFUjK%2Fl7cEUcQHbNhhsj295L0ioaFveDQZfkmjHCV%2FWufOtVWa3b2IAEzrB6JTwd321N%2B9qe0W%2BXtAR4q7n2sCPWkmaNIp0MgnwWo0qoI5RVLUoByfPShifKr6Po5h7T9xS6e0JaE7Ty2bfOxOLPz9IF0qsP4ZrIK1wuNwdYXvEdG1YCoPJRqzYKh6BIjhW00SaGECiSm9QaIpm6oFXcuC3a4m82jXF9qaRxnCjFuXaM%2FK9ID6az6dU%2BPHvJ5YQut%2Bwu6FITLJEevi5i0qT3Sd3C2coWN1sB0DGhy9At1d8m%2F0Jhde7nx17hrR2ji3B%2FnnL7S5UuWDwwFlpT66QAUBRzPWtYoTXJfzErByDTF7D6oCl9EXsfF61OPyxtodg9nDsy5OgFv0wYoETmEayrpXn7w2ykZ%2F7frvNePjq9QsvB1pylVPO0piwEkwSfh2jqq6NOhlT2D0yoU%2B7ivAPO0TLwfb2w4yPDB7fMz7kzDjHnF8p4wT39NHBOPGrOoLd9O4vo9oyMr0bjc6t667ZHaXtUFhrf87yPIwKuUuZgt6MJt7Du9udRISgDxJCw2%2FLe7gwt5nVyQY6pgF30iaOW3s%2F%2FQEYcwq%2BiuPhIEnEHX5dgca07R4pjiSII2%2F0%2BNFIQBtZpE9EzqxoDfR7OJtli1puHbc8CzOpQ2pPVuLNK%2FXy4J0%2BfGgp7rmug7TeZ86EqOk%2BLckELgT75sov9xLgtsweaSXuPeCp2gyvnVvHyVjyvT0bqamlnAAHENeV2kls9qjuf8i%2BwJwJhDUdKcvjQa6vhWeVwLUsS8Lg5I00kgCz&X-Amz-Signature=0f7baa19c87e7799f3d88722bf80778a7f65c7c4f3fd0d45072169d8787c0539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

