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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNA775I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAS85lNxu%2BO%2BHcOmxAG6dqnrbrAmQQdYNBlm90RxZr7KAiAO%2FiJtsF%2FRrrVXwCA5yJlAB5lzvEe6ocqCu0mo5dzQWCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMfM24AvkzE1s5rUFpKtwDHIGz%2FX%2B4p1tt8C%2BY5f15oJBPJ%2B526avNQJgk8BE%2BjImJQwfxK53H0Yxks4%2FCj4Mcdxfl5J%2FEgCxRAVA%2FjAgSFZL4n%2BPZ00xSiT3jx2yLfaIejVJ4hjHnmEidxiCuEgBvMPXKY19IAX3LemCuX0vK%2BgiXgIvR%2BP1bsjC%2B7sYE5%2FZYl9N6JrO9mLZMvw3tb2Y0Tzx4cfjGclcLhH496W8L9kTb1CLHDj3RrItIit225Q5%2BNrRLq6evatyFBMZN8ix5%2Fj9EgXRiG4PB9vMYcb8BrT%2BwRFYnLoYaDMzizgI0LioxBgth57501Pal1kMoRcLEYNltXF2cBjiOluY5duo8gzNyPPHMGBt%2FqVMCAYiT6cHjtCL2DqHaJcW3f2E16Dyd1UsX5c3pjGum4jWWZKu7%2Fz899nXsdWXCej%2F033E0huxbDTaMzSV3Zs%2F8lmd%2BjtCIoVC3PNkweZzoFvGrTOkcIOcUQ4Gex%2BHmSvvUp1sLwWcHI%2BfjxN6YiH9W7mZVn8x2vkHkA3%2FN6MQYyuirf82MKmaWExqctE3sQ3yRSUT3Up7rYK8YWW49SOyAUNDyb4JWw4BdOIo3nrnP%2BPSnMtpLvOxyJ4yXgDoEYpL6jiBn%2FJl0drXKbBTwt5KS9GEwpJa%2ByQY6pgG%2F7xxdca8fAk4gTF8lgET2ddLdEJbyIZqiPzVLbEQk64afKQWdIC3ebswr%2Fy0GVnkM3f%2FImzsshecQjl9xUvmNQnxsR%2FVsYpIxQ1LfQK1IaHNTE%2B06UK4%2BdMX30smAZXuFIFEHiMLhoxD%2Fk%2FjKTGPQxI0yxQGwketVXWJAVD8p0stjVtUmailfJmh84GHN0JwxFAWfjhKiBddDxCq8EGyWqRIAFoUC&X-Amz-Signature=2fbcd845f86ad0e6db9873c79b5cbb3c6e0f7fef30e614e44f681e280d86c1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

