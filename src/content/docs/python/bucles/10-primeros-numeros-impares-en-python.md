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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCMQC7ON%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2%2Fx7txNdcb8LYy8eEQGh4T4g0bUtCUaFec7zV3KPbIgIgd7FUdEpAKTZJjEa6pTuqp%2Fz8fszvX2N7khphzPvGDuQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKD40HP4QXPMZQBBxyrcA7QZ03Cu9CFOh1z0L546%2B0s10hflxm9PYAybgAkSrqpv7LyDCqKeXl2GBdSoiAnxXdPuCoALSO%2ByERhkPuYxUq0st01ddsqKJyr1s9fEsYzb2xni%2BTP0Mx5K%2B%2BTQlLAAchAD1Yauik%2Bs9uYnSpiM2L4lM3Ob3N1rh3YdSXXb%2Ba1Gu3CS%2FxXlgaZUf9xN%2FFKXFoBxwx4pnjIphZ2StOdsNkm%2BBa3%2BZJMAjRIYcKau2DjAdGqzOgeJAKA1iUeiStTwmE98KjHTCAS7w38O3gAWHm1cLM6om%2BMyPl41vgTtuWXazRcBhAShnHpnWpL2IQrravJnKmh8y9Y%2FS%2Fxf9zfwhKEvMFVtPyVgkDoIrh6AOctqy21JemYzSEQdxLRkjFX50UZUyN0pBREwv2ouCmgYS%2BWsinCprw9D34QfuLLIQfuJ6WXqUA%2B4a4ZGhker9xXnEhaH5NoAZnZWhBr0GntEAhgG8yyWiiAvqKOefX6jNmfbF1LbdE0uMistdgb5KzpYP1Yxsf07UurRKOlaCEJYcx%2FSzXyGsxocsBeayKni3dmwtXh2Gm5osLzkkWIkGjLhKQ0gma5AMRGGRxXjRrY2G43Umr%2F%2BA0P%2Bdd%2BXC98xOrxISX5ZuK8X%2B0K8qzRxMK3KyskGOqUBqdii1vvQwxeFdf7RR4IzO2z66H5wcg3dDJ7Uk6I8f9jjfvsA6lqiTlg61FhsWZDk%2BNF6Bii5c7EkVQZNrBOxjPfCPMWiiGv3YbhlXVWPd8WuGvNqg5aE5e5T5HZ%2Fvc0huY2u5sdjxKtCcIr5uM7oyZUqV3s%2BQbGoqxm0PyyyIuSEVdYoNfxAQqVFLtMhx2O7PyQN5k%2Be28zn2O3N3PwJSQATjbYu&X-Amz-Signature=7b95e18db39dbe8860436ad1163ca2453fb891678867d8e847ffd1086f00ee94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

