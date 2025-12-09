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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS3KG4VL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PpWBwX0DpvPDxYw1XLBacoOcAfy89jaOvFqLPYrHXwIhAOXgwFPbnRjTB9kYYCnvgGA3vHHKB1Cnnp0uO0xQ8D07KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvLpmiZn6UTdv1Xmcq3AOAOnsqnvcMQZEq9zChi%2FMWH2%2FThTtNWBPG9oOI%2FCLOwdUA89hClh1Ml4vTtvg%2BDWKnJ%2Fy60%2BAzuag1NDmtPrnI%2Fd%2BqhvgZPi3nUMO0BBCO8Yg4%2BrwtN0sdHlVC%2FLyT69mxA7BBXnS2swYEkYcG8sk89mQVbL8dMp%2FwqUX3Js0Kw3TZ9VgTo9UqIWguUodbZT91lUMLGAiczTqzKII%2BsO8GAr7dcs3cpwH%2FooiwVd3miWjq%2BNsWlP%2FNifxOuVKeWSMXEQk96DRBJ3GaoFN6RMhw%2BCeaIhLkq%2BwXzbOJwwqpyjolbCRqzu7wVmI8NqUOUtHp9QooMYnAOS%2F1o2C6JbI%2FatEr9xPqlQbwTB%2BYcsdufWlcZNAPcioDw0%2FLHAeJ5VqigurTOpY3Hb6bMIHYVBvtKj0%2BAn74zGumWwIdkqNDyDd5t0qF0285259RCgwdvFQR37oOMKRZvFx6ZZKZ%2F6eIXKt2jKYmx1L%2BYqg3H19S83NoCfeswaG86iXq60WJ602sXdPG%2FF4MExAeMNuGfXYIJkPn4mer6SFv%2Bzz3pZoyowdxNZlZe6xBQ5jJshzX6rPTGqsLhHA2VKTqRh7SAF4K3Zd0xOa5diTxwJKXLvhfS%2BvWzt41pJIPKR%2BG7DD3jt7JBjqkAbKrs17OftyPfjZnr1qrG0hzRS6Gp%2Fflni8PeIW%2Bky3s0UniDZWhqpXjBaQke71rzrz6oVTb9gjT%2BfrEEEGpiDgT8WlbXnFOvDofyBfcfN044%2BukBJCtkwdhh8sMpoRw8kTC%2F6N32begV2k0JHFGonsmS%2F42qzRzq5Hgw9vZ1w9z3%2BbjIVJpDHRVMTAYwnHjO3fHFwGA3ZEAXGPH%2BJjNgsDJnYZ1&X-Amz-Signature=3f7a62b52163a1c7d1c3be54d5377130bad6d0a22429128536140a21db41f925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

