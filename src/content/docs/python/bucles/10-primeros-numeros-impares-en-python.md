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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUN6XWRY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5RDHLr8dwUiT1%2Fw3MuzALp55RY9%2FWAllFDrGh%2FSeJ9AiAJfm3tpAd3fpqagtODsvNmce4A%2F%2F27s5lE4tBGWNyRySr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMGNfmspqwG7D2SMUCKtwD9WhdCCcKbk%2B2%2BGwhLUAsJm8CGV63CwkSRoS2oyW%2BfaVHczwfiV1IchZLCh1f3yFFSVtdbgXIRuSLU%2BA93kUxbCoedEKepKIsP5jmpzTHlHBEtDceVdSmzAsXBFSVNEH%2BnAHg62z%2BltN%2F%2FngXls5SSwVeZbraWETnscp9PgknS%2FhTSTfEH4jKiHCDSGibY0o8BymTjeiaGMe9kxtmaC%2Bg284O5Zw1Bzm0iKecvWeM1jIjQWrCOILbi3GyhXASCjeM5y1CAPr%2BuyXOg2lE53vE1H6CbPgch5lKyxAiMbLLG7zVSZCRp1X%2Fe1yp%2BhhKV3hggnIJZvkApmgaRXx08Woqi7oMtxpOTcZY2UbWABvGc8kJDW%2F2hIXoeeSzKAqn%2BmgZIqcyJmKXK6%2Fk6ON%2B9pJTo73lrc7LXDdAIu9ePspbJ9Q2eesFEjn99IWUnS95zOBqhAI7otvCFe0bwdB3zgNozc%2F4yRMVaqLBMcBKuxmuEQAzPg9JNhb%2FV%2BV%2FNWG0UDMEMTe7kj7MKDT2F8iH%2B8N8ppnYcmWfzy%2B5Xg3J692kzCPkqsNG9tO0xLOX%2Bj5T3MnxKK85svODbmmIsTnXk6VuUwHkk64QqeQfZxEOv4E2mz2EsLqyipxu1MAzLnkwjujNyQY6pgHCXYxDpFOMPaow6ku84DiU0hhOaFDHpGOxp6FziOLa8%2FcPF12q2N%2B6Xzo9Hm2k10DhSzaAwJH6Wg7DIY5m2LswB3ax0Z%2BohxNj%2BhmoO4U06jocneYAz44Kh0ax97mv%2B5RbtSBS32ZVCsgKotFmxZblEgolUTrAk3SJHxy8VIgheEUgQY7SQYdv9GZFbO5z7ih%2FJEt%2B8P7wav3vpmc9XFoQ8vgDRfpn&X-Amz-Signature=a3e2f411d35c3bfea24262d4cef83359750d404eaaa64f2a62c95fe01a74c9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

