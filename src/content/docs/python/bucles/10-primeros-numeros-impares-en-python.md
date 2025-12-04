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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSOCXXT7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCy64wSXxGGq2sd6zL7R5uuzHzvjaV8LZP52MlUWHuVcQIga3pETmxiFZ2cERK%2Be3gMaj%2BHP5WEw38cFIsxy6f98ssq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDIeYo%2Fa0kIuPEdgixircA%2BdjQQWJi8S6ZEugra3qcnAHBUWKZGeXl6V01JBgiI9%2Fc%2FbR2V%2BXOYQW7lNZukenpf%2Ffy%2FIn%2F668myOy2DEEhhvymgl%2ByvAqBlS7s2h%2Blh72XyE6GgyvVt2zh3XUhNUzNYtnpL9x%2Ba5p3FOBLyF%2FyGf%2Fd08%2BMrU3Qo9bFEvDGsmgJMOiKnv0E5YwmjqSqwDjJ%2F2kuZkH%2FD4UDG%2FcjLKF2zn1SvzJD6H1kN0969057g7wQ8vdO5B8do%2FLqtDJta8%2BX2TCLWSb%2FzkpQBdw2k7bYxpqpqGINDSDDhnFzLxa4bhjhCFHGEmpwrKO0f%2BJiv3o4iNVmszwCqMRL81sf9wgqrqDwr1tdr3E6xLUPHDt6nDN4EHVjI363Ae%2FNn%2FO2DA%2FfXpuoNXZZuMLCRWrx%2Bfyyy56%2BKH61QgCwM2wCo1cCgJOv%2Be%2Fhq02qSvtWJRqbl%2FlkRuFl0xHSKWDIF7V1neLQ7%2FMul3%2BivWsJlrdXY3SEYFP%2BPNfzYTRxhfK6d0Wpb%2BsHdGqZU33wrenpsBmWjP8yT%2FdomMW5WvN18PvU7jb9jd1rIw7u0Tdtausm%2BF7SwupedFLAIh56nzZGbkTkaK30KNZbdV8NwdNoKLcWtxXKiA7FAiNrEdyMO%2B9XDMqMJSRxMkGOqUBDtDjIvEw4fBLH7iDsVPyjzz6mMjt6uzK8CjgFXmaXQHEcZBXl0RFJX0rNpmNZVrC5RWUcYm3Uab40wOdLfwqiuCB5eCAmKnOHZsfQPGdYdZ9ZdTya0yRBOKYi%2F4VLCYKmDjaSk15wnQUgkdXB72dUnQ7WpVhSmgBYfWybKoGEb66I5C%2BrbL7ZIVCYE67Yt%2BpTYdmUUGIVKylaiLFnlLx7kq16yev&X-Amz-Signature=e648b2d4e1b92903c018d0f9d417caf549a4967bfc733d79d8eed6d775d55869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

