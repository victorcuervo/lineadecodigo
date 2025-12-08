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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFGOIY2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVrqc2U9uEERlT01eD7%2FLEZ0ryl45Jrs8G9gP6HgL7xgIhAJcLAHg1WGa3DrcAU0%2B6Of8pmNzc5lztgyf05E19HZpKKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrnYZbvfu21CZUCXcq3AOT2ma5iPV8JkZfdXnqyt0ssXYKxueB0b%2FWj0YAX9TdkJ9zputvvt9CUfrcp4SmfzujIy4dl0%2BITvhi4Rgxtr1jvwEsvGEL1QrtF5Ha7khC7H8DxbwlUgGs%2Fg567x2mUm0BI6foUqplNbzwWCTgTyobTHQcko7gsqPz3W%2BuB53IhHxX3A5god6nbG%2ByQC2FHesI9lKAgfJNTJXofs6av%2Fq1HDY%2BnNCpkvk8sUPNrEwdV9cmAQmZ7IOPLjxx1lxB%2B%2FnbYL88U%2BmfLfxrZz0lVBMtAY4Y9LNoUin91f%2F%2BK0%2FC25g529Fou%2F%2B1KEcSMXmsyHe2Kt%2BDQHoh7ldbupZ6hYn3DkQ8ETWFzdv4AQEkOUEN0aA61Jz%2Bf1gT%2BjmHqAij5EZVeioQuXzsUoyNQUSRO9n8UVIdRndStWb8AzJrIR7DRyC4Raw5wcpKw3fh2b98hTurDGSKCQFlXHzFgpj1iu4jU62iBv0Zg5FFjy7N0VXTe5Yx0fQoq%2B9YIDngkrYTFTHbYqBFJtV3Xt%2FI%2B700FtJolXUMSiCYgc7ZWksgK14Du6p5WDbKNZhU%2FC53FWCewv2qIfOpTFm73UWldBEfpgCc8JQAPiXpvskNNznor88FsD5Ic03XQlnjtp8InzD389rJBjqkAVLhnEg1CoFCbpA1znlmlp2G421WYiPNQiM3fLu87858wwyDV4LS%2BqxKuTV38d%2BK5f8W7%2BPR1YJ9%2FtkZ03DaBJ%2BLouKx4CbbQOZNwZND4kE0PesmbY6Dnp%2Fzgu16higlxvSmZT%2BLtGn1AuTOH1cjX4noaIMYskoK8W1xkS9FGWwZnS5AeltFVmAqAvpeEVLngIBo1w%2FdI1BVo8QrdBwz0UscKZLp&X-Amz-Signature=5005b90fd7d96b962cfb002898b9a8f265116e3e122d310a9203f38434279cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

