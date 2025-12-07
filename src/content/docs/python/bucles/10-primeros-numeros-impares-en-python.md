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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MBBJOC4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwUlRkeqkuEboOYhSrYhT1pG1uh4C6vXRUTGIr4sOybAiBQ4y4noHghQGn5nsPlri05abcdu%2ByBsBQn60mQH1CmnCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiSpTlodP2xtbWriYKtwD4DAyLF04mXZ1pxjgrH5%2FrKebeCb6WWLL5QoFf0cfGtGko7ePvMIXmNaSxHhhFv%2BeXPN%2FION4ikooRoVuIrCFf%2FRm6U3dO5lSe9%2FwyKbzIcNT4Shsotv%2FqJ9SDb15JsXN4gy9IYuFAFEfLiuU95wZYWzfrZ1ggW1UqJ%2FYFZNc%2BfjkuSNCSXEki%2FQkx6f%2FG9aXsyM758RQyVPj9RVr35D5x7d2Xf7IyT6AaC%2Fo8jVi5%2BptkdiwYM9Nf3VWvIC1%2B0GBcNOk85Xb%2FbJn6o%2FAr0eXd64hKcyE3iZwLqL2jLnELFL7OiWoCHMA8BhYyNICtxM%2Bw69APD6q00%2BW%2FNJuvNHfQPRylINPn%2BcCkooTZ4up%2FQl0814A%2FENl%2BuKbErg78d5TkcC6F44FE83EOLifK0piK25xgh%2B3p1FlNtOK4bGtEwtV8DWVsGV%2BkWYPu28fkF8zJa1Jvgdvgt6Ka0ZFJV1YB6inar282KX6tUpAcEKpa0dVUPpVmeUv9mMyssjcuqdg%2BjstPD%2F5qlaZ5UMsO8rlcQKe4u8aMgIuv3h1aC19jS0ypo9GQL8WrWE3%2BeUePa6j9yUnjQd7%2FG%2FFisdyn0ebR6wfujR%2FsKFye28BmUYuhHyBOLj8tJx%2FVSsHKCQwyP3SyQY6pgGu8yrdbWYrX1eSglEsMrWv%2FH4toaq0Xxztil3dj%2F4bZBFuJwikx2MLBXWNMkZhsrTmrRvGvLHl2lRqJpl%2Fw8qk61SP7u07NqfoH4GMisiZMM%2BeEheT%2Fs8nvvY4UkMgxHe6oc1TiJR1GzrKltYX0eAfPpBMImeamZfoKTPwPOMSqnxPKoa8WrRSAy1zNYomOWqf3hAcM2zoI%2FlEZ5ijy6nRpvun7DXW&X-Amz-Signature=f7cebdb409eb7016f804e72d76bb794b95b382d523a437bf28a04be09d625d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

