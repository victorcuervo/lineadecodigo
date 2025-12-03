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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCACHM5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDoW2sjUecN1Fz7uJgTBAo18JGRtw0EFoSVOxlZXk3zbAiEA3o7h3I%2BwLO%2B%2B0mibIRPJ3RZ7nkkJtcXO4Th7Px4tAqkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNPTygoGodrhdyzggSrcA93we4sJbSU%2Bd0WfwbNP%2FS1aCbk%2F38lZgdgklO9n1rVmJ4SO78zsKa3auFkwRP24Wa4MJwuP90ZAiA7oACbAFwkHOxGxcLgEgsAfTkqC9wIqldybJao7uvLdN8GDoUQT%2FnfresYt3Mu5Jp%2FsIibLkwWIO%2FzyfP%2Bo3IEwdQ0wpf046HX%2FX1mVnnhVMo9kQ0Yu8M5KSu42%2Bjzt1eHN4lnZPCjf8qlp3D4OoVOSgScuzX0mIhpSX7pBxCA8qWQg%2FtCJ3Eds4H4pgeQzagwbtpzcCVDDDnnenRBpIrkURbMiCmkosPMqk4ZyuJ7DL%2FZFDNVGbnxCf4FCMYSnzVoQK%2BOREQxT%2FQzGA0AbLz5dD5wkrp8WVodSYYh1thZrqPsZfYAJMl9xESN8vfyc8isjG2j9sbQ%2Biszi1589bVj%2BtlfvE1f%2FlavG98ACIV9x2Z3a77a6RhJFQ3h12nVq1byMYCKU72tm%2BO%2FpYqFOFbT9xKjPDfOePkXzhx2u0tmQkGsbbJ1AFfB8CKNAb2Zd7YAvMYFauuWHY5qO92DGQsULDyzDoDQwxy%2FkqCjrwilo2TJCjZ7QQqcxd4Eht9FX3ACG2SY7Lx%2Bf1GZ32pzOiA1weSnHSxYu%2FNP%2BbzsjK%2FJ8DSn3MOSav8kGOqUB%2BA9CjPbrXdA5CH5Ec8pSGpBZn5LRyp%2BUaXV7Yo%2BDRh99yXNCJV32MXSimQL%2FlPJlRZhx61ab3lZFT%2Fx2%2FgcQeZZT1FaJNTZW0FN2L2slHiRzAlWKTVkeTIc3TR4Wp5J%2FhJJWoT4K6ury%2Bj0gaYwDfvj%2F35au0k0jwVptjD33lhgGZ%2Bg2YTU3zW0kfkp4AZHb4EYbdkf0cOZSidlmmi1HnFnhUIxT&X-Amz-Signature=7a68e0d937462d2cfb0346aca090e1999175164f999d4d9068c4af9b73f9a2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

