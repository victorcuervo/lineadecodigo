---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIWN75T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBb%2FKtww3m1fW9SUieaoNPnj28lRVthvQikzSDDxPJSoAiEAla%2F18ZP12X7djTVef05AQYdESVuZ9vNOdDeRHMZsjyAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGDKSkJhTxadYKFoSyrcA%2B5jHJxoT10z%2FnpdIqhQGyiKqkzRxcegS65rKNn6pSHJRFFEfdyrZetxVuaKBl%2BpEegyHjdmG176RmhPXdNiDq82hMYuBLp7hD%2Fb70URyf78qoF%2FRssybyecEME8tFvMqUHW8m6%2Fa4FeOIoZvL%2FDoOrvfBGAx2QXvvZp4YQ06BnTqeFtcE7PpQTAVd69dknHsVWUZE%2FmtIDm71wIrZPHyTS99tPAVMNw1jPla%2BLKH0EhMd1rno1EUJ97S5R2GQKiufgY7H1q4fPSnFIdU8WGTsnqQ2LhU8iVQXQ9uJ4ij4RDiMeSPUN5YQIMCMvxDy21F5W77nXQdWQBfcOOtXHayJqBEO%2BtbyrF04a5MVuyvdypj%2Fy6kZj7Zpv3sWZEyDnnfmlZkYq0ZqPKFXc%2FAa7M1YKJcVPUEGuhJlUzrgNmsCVRFR1T4NqLlkiuB1vULTCTbOQgHDoEy2qwyxDGNVUVIpYwfShkwl7oDzrzbSmI%2FYCoXOMEP2BsR4FxdjjKK68c6H7HpKyhi%2BIwnPnqYPaGGl19NH%2FeLRABFZ0KUxHj1NrMhRmgakWrUISDlrVqBSHWwRq7pJ5mD3WMGkeUuy2m%2FyakLmmy6hW8xxs3eknLdIi4VO0%2BFXEBpHMquf7wMO7pwMkGOqUBgTKLKpR7%2FVTpR7fjd4kSI9Not3hfegr9zXYfNus6aVfUZmfVCrUosHI3L4mWh6QNSEKtY0gyl4D61%2BhsiUk98MsW30cStKUHgtwb42r1GsxLWzrhN5NMiHZCePwmKN4FB9S7Q9GL2syVCAbQMEQOSh4ZB%2Fz9pDuQUYy%2B6Ira4OJNyieKJ21M4yVTz1fikAAcOHZm8rBsJo7gl8vjnjrNFF%2FGRLKe&X-Amz-Signature=73295ca669a8b337ddb588a5b1b5c5d5870d633814803d4c5aede389e7e9bcb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

