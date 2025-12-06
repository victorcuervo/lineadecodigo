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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP2VSQX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCo0txLkCUAaO%2BNq3hNH630RcbuHQL1icaDi8974f9nwIhANtIPcKTQPgx%2B6Y4owI%2FGclZhD80Scw%2FuP05K0NB04fQKv8DCG8QABoMNjM3NDIzMTgzODA1IgwPgkIFY7cRi2tkzSwq3AO%2BxDpXSO5asYOenoBChQRO0ucJ0Om6H4JWIDnvkZmVdcP514c6QIEChtGOumvyl9j3p%2FbP5ui9%2FdA7ojpcTXwRE4zFPwwANOyanpMljpVsyO%2FJmrAXqk35c5P6xiNxbUlSSdMFVFLTXP7YKUpYzeJXbxfYyP3Oa%2F9BDUU9%2F%2BzGNaIogf7BE4e8J4jOQW0twPTX6ZGrFc9bbaKhtf61h79sfW6yUmWki529mFtZwjtCa8zzyYDwRTdJ3%2BDVmGSodrIIYCGSeRZWXvVwR1tHz2jX1S4oxrdL2oASFDvZT1ZWMoYWZznavPn7b3V%2FbrV8yfMa1An7B04WZFMYPm5QSUhSCS6lsQIx%2B3ujBcOgI9U0PoDpvTRU2z1njUD9kpiMTSisC7VvUK%2BRduibiVVoYOH1eaef5Uq3Wh2expnBGyACNoXlC9YeJVNIL%2BsQzr6%2F0JOFlujLh69UNx2dvB7S5SPYxhyLzorDG2n55R8kscZ2Sap2hFZEhEJ3%2FbvgH%2B8fDYVp%2BxSOs5HlwVtgCqD2ciUU8JXEedP9vTE3jbgw5eh05fqLaQp1n7lST0RnaGMsqv1QFZwKSGD6ofrGPvPJGdUAcr8vF7AyUjWEyQDmk6T6z8KAkgX8fI2QDFaMrDCd%2Fc7JBjqkAX3pwtL5TPiz%2Fye2CnmM5IUsDRa7fCQpLnGbW%2FxAMjI4xmT7s21WNT07pi8DhBfHV96gSD5GeCi5IBekYn8B7w9WprrNrUeA4%2B6Ge6qJVaFAGyO7t0nKVOW%2FDEfdLZ1hhmDzVzE3l6aMkfVokHyhgpLB6cPHHgIO2aPfwGbhnETCx6d6s9E9TBCRzZCAOczcqW8CCcacANz77SKYNVHJDswyGYHp&X-Amz-Signature=1b0216de95f133d1f3e8fd65f146d6e03351364e0363fffe920a314ede7471c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

