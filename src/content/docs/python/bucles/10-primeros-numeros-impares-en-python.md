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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRJGNZ7A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7bJF%2FuUpPQSsbpAka3Cy8qTfuSvO4WxGJdBR%2BrBrsHAIgY3KsLw6PI36mgC%2F6Le7s7LjgN5%2Fsd%2B4DcL%2BypYfVBB0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLdtd0D3x74P%2F4tPTSrcA74NWpAC4MSAakIvGL4TmYCQLHArRotY2hKUL54EmW8wM%2BgeP%2F9%2Bi0jKKsqoA7ktb1%2FDkE8euDOAHm%2FqcXfuu1j4xSNZAzOJiECYyMHw%2F9E4sW1JuDjzTfK6ovKixuUtDhMi49C%2B%2Fh5Bd0ADNd8ACNfp4wRMEVo%2BjVETUXHFZuJbizbHsqcIlWf2bSd84tZPPRRrQOgX4gqr9Tj99jtJNeBFvZs1WkmKfHOCxjaKX3HnPjgmJ5c3puzsAczUsbSR9mjcOGgkQMTLHHQ8kEQgP724bNchcQHtxwsGy%2FFYhV9jjQUMieaxFOo3BDCOLzBRB6Q2IlA0JSBYZWQWytQllZYRa9dHU72QmKRMXTJZIUiQRPrZhH4ZCKPdjH9efdidmUOMVcVhxmmLRGXfXOgdPgpS9c4lRm2uthLna7q2QMNF54cDt2hrHl8sJrZ0%2F3rPMM4yN8WSV846C9210Bp1oJzUzyt10U8Wtw6Q3bRimibmnXE804uO3AFFTMQc2cxfvn2PAjG8A19nUg94xJRmuVxdbfcga5V1vOrz2hgcpOt14JcN0i7S8bC1Xx%2F8iQ1Y6RPpwknzKevjdpv3%2FAuaA414zmSjaMJCEUtkxtIPpSS7qb1p4qjzkF%2FT4PRJMNPG0ckGOqUBJi3NEmTITH82l1Lp8s7YBRvbfge%2BXpF4S8OGF%2FePj%2BWpjl5sceMR1cSBAaNxmicIzSmgyjL0%2Ft5Oh5d6xwqyVGJ1oOA8uW9ZmJs3oeCtRGYGtVvBglhPfockNLBjSq71ZrUcSlH9YLTwWFEFieYwKOsbNbzqpj77qeHp%2BLmyAq8JXef6m6R5TIN9gRJ2HF7xEXp0I%2By%2FuE%2FAe0NgJY0k9k%2BB94er&X-Amz-Signature=fd7bf31564fc72f0b0e10af493899c53ebc9d2becb03fc02cddf1e35d77de169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

