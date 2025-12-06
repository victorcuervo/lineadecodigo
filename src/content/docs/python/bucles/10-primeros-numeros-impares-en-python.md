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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDZ2O7O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAxwNNvi5%2FCtL7nFsPPGNVMh1f5NTxgPF1ScEjPQWzNgIgO4MPPqsgpYRbLkrxaBIQ3ZGp9CR1fPj8L6fYTcZxBBQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCas8Zd25Z6h0IufXyrcAxj%2BS%2FxWd9R6L4bI0tZYCicfb8f%2BIQVVbh8KJ7SaoZ0Qg3Zn%2FOGdXeF5T6EGR9fb%2FwcHk%2FtTooaIwqYmBrrg5YypM%2FD0kNbkVCtjYSqRW6V4vdsc5ND8ugy1krkVi%2FU16R71I3qZ2W2qmti6m3hmj2T2moDVI8gMYtGNtI97SiLDw71snEzQOz%2FWeusGgPxn1OMMXBVymiva%2F0q5tiDB0opFDK70TwFdZhQb5390sRhX1rXing5eiXTlNpI9DDFgaodtrVi7Ax67fteBuXAhrHyi60Y80ewbGVAtG2lT05DfzmD8%2FANbVC7k1pddgihMkvof3mNex%2BWH3rTzdyUVWDiVMK%2BXc6%2FZ%2BpgQyZA%2BGJ8Zyn6IUgFI147yib7OicHtY39sCPWJo2KfMSxOoZoGd8jWbXGBvCG50CD7ZZy7Cgwq0sKcwNwYGz5kUXPqK4c70qV0Eqhus8%2Fo8B%2BVMsUaxGN0LQktn%2Bmcx6VGcyM7IG3l0vuYYNxpcJfEXiSHryJpsCSkHJmOMTDNBn5v%2FNGzcQvi0cbeLLOoAjEJSmw9VS0LEA46dlmtFkGziamV2OcmVmtkQNnT5x%2FmaZMhM5mwrHcIkoIOubUko%2FHP9oa1Ps%2F7POtkW22jca4p%2BG9gMLLJ0ckGOqUBuca5Li2zkfaK6rYAPHMbLu9nr%2BtwE%2Bf%2FkGEvnR9C4jJ8hh0d4kuha7TV%2B1Fjv%2F8Y3xcaCN8z1eQ7L%2BIr8VkeqL3ZEk31YN9e6Wx4k0TWiDdsF%2FiqK%2FgqV7VWA2QH3Ujw%2FvryMFm47YVXlN1Zd1ehgK7DvoABSS6iHYxfdk5BjT5Js7mcu8pop%2Blnpc5qODD%2FBsEw%2FYk8fB68A8Exmr%2BtEAQdTzlt&X-Amz-Signature=79bf2f71231bf3ebba07568d2b22686d66313e36a4043029f99ccbcfbfb49c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

