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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVEXSLRN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIC6693sLUEQU0R78ZBJId9im8V6cXPWXxcMypHpYfIFUAiB9Jn%2FeGNRPM9XlymuinM7tcbKeE%2FiDF2eepJaFv8xtayr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMcjoXW7x6DZYN%2FgvdKtwDWX402wte%2FdGapn4yCLjP4FxDHSy5T5%2BZ2tuVXmx%2BMeTRmqHTndTkKt9exNnNSOiXMdLfYVONqa81cBTdKuByCRHP2EXVLMRiniIZ%2BNaMCMqrCcm9W5BSwSeGfHEmrhulV75KA7XCCg3IKDj065HpdmN21aiwVrNyu0WKs8dy02gQb5PQs2Mc0IXBf9eYvfouRdSJt7ostdvlvQvh2VmRZq46oC2EHxLw3kvt8llBMFSYbE0V3EU1GfVpQxHazHRGgoLlZe5lGLAIyYUqePfAUjqgx0wQKDvUuTnyw7hSQs8lQrkf8%2BdvNLS5rPpAijBWXZ%2FaIERbIcoEOzlTkttJTLvy2LhSildaHnzBoa%2BlNPRE%2FIaqjqyiYPNSJfeWyVSO3WhxQZjjRqVCWisuXD6EdsyOvIt%2BISxpHDsp%2Fx6aQ%2Fxycg%2FrzcocO7k4%2Fbu59Zpe0XuDdc8ColmlHqKxaORU5SFPU4fSAu5d2StjIkkTqVG2u5Z9uJ2wPe9zWSrlmY9RBy6xrApA%2BU1tTJkGvjs6MSRVjxXjLsgu4CbyneAWmy%2BvhUt8YyuisQ7AMzDUnBxKS0lSFLrdnVO9EKBfXclRdLiDAqGKxTcTpD%2Fz7u%2BwgdY%2Fp%2FM4Uvz3JK6WfMsw89S%2FyQY6pgGJ45ByMkeuZmLTOkOtdqoSDl%2BrnyiP%2BoC1XpmVkwpL0g4XsUYa5TTsbovJd%2F93AizDkCaC2XHCtxL%2F2ThWt8YOEgdheAknXuj5hxvwmy7qfFsrTXnTO41948P9rWzScO6eRrKJ6mRxR0tp%2BA3lz3PZuj7SFVTwnyhifKJ90dVuMj4RIKM%2Bd60Wz3RCTx3T7q0KeDYUT4nT8U7PfPrKMNvNU7qG7p1U&X-Amz-Signature=eb33eefbb8571af9188b86b4978a78e48c069c9c5d7fc878b84cf0b52a5f7aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

