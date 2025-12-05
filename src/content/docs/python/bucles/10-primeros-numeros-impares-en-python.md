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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZPTMOG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDa0UpQJk4I5jCdTkDvhhqHF0Fp%2Fyo0s4wT3zi0ZCvEsAiBmsaFAHIT1Rz26m7CYHQcJAX%2B1HqiQhgFCCSiLPdSwLir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmRJyZGIKbKWj54SEKtwD4o%2FdIyB9SPh1I4m2RV6V0abKf7juUuDIzhCuzad49bfI220EGlDavsFdR4sbTvi1qKYCtDi3xBlVR97A9nyH5LADthDXlmTwJ%2Bm55Hp%2FvbJjiq4l0Qv%2BTFPZSNoSBfsbm382Z0OK%2FX5U2BjhtMR9XnwIaNFvhIPHJizEVY6C15fOJ3bOPy149qlkqypet%2B1lzsUES%2BNoDPWV3CV5e16Ri7oJJOYjvycbYBdaQsTVygxnv3LXwVqEkikMrE2Zv45h9exlMRuPZ4ZXaGAeJh7fcskY1GBiw0NvOhH3JMSy%2F2xQST4K87yWRck7J20LJDAVdEYGTyWMtIGGcEsDUUKYkdlNaMSUUy%2B5FQrk4IN1qUajl3weY%2FqcJzofo1gGhOqtUNxpkZedRy25PY31BAHJ1omJh%2BdBbcCaImn9rL%2BLzy7mGxb%2BFAzYl2P3CSLM5niWLVdH6WVY%2BqRzVmcyNgrpY1htjisrMpIC0wXd6AN8Io9cCY53i%2F2sl1EzXO3pZ5VtBZUcEPtE1yXV2R%2FXWMTMX3GE3rGmHH%2FhpjNBOqL%2B%2Bp6T7tVf9ILq2%2By4Z1JSSljrrLSmHDo%2BDHEl8tPFmIqNj9TCPicqU9uBEPClic1X5BIsdpFdFl9TrdS078kwgsPKyQY6pgGNw3ljpMcZIgp%2FRavegdK8fletvcS8ygVsGFLmjtOgbG0ErU2k%2FMknZIrs7aCQNqWnrYk2k%2FEshKjt7uiQqEhX4scpFMZRjB3ceHD8zpY0FIOB9zjPXjk4DLH15U%2FhBg5fSDwJX4kZgLN1vDHFtcRqWsMdXlSuD%2FLCFTT2XgUGeomud0Lsj%2Fn2fwokyxbYn8cyf80td1NB9cmnlby09e%2F6MLwWx6uW&X-Amz-Signature=ffae300120ff8f6c8cd89d463226825c165c619629cdd592885af73525aef359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

