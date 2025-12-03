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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CXFIVVQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD6LK0sZKDsHmOXtCCopu5KlC%2Fb8g70TBAqDswelGkNpAIgUvGm7F8J%2F6dQbztv8jjZrHgQdu%2BtPMoEGNZ0yYUrWY8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPNWNUn3Trk24inAHCrcA2YjNEpuX3ZCZVx0SSEHkF5A%2FgYiJBwWIlkk70jcSeNGnS9uuDyO45nv8FebOZkuc19deqhdI8Qv5usKxsh8ckdl0XuZTZ9xu6qX3%2F0ERiIz4AfsmbbvW0U9%2FEbJu91eDrCmltPrBcindiYwhbD%2BeXcUO9ykkdKIEUz9fzPVoEvoQawa9iyB7lXlQQ49nGcxnDdi%2BIAh%2Bv1LSrl28iYJY4dJyTNg%2BKzOiW3eDLb0fcOadsiIh9fDm1Yr3YmmjWLguSf7n5Q3GpPG2j4%2FPBuIkX9mLAL2TGiatSmIyLgdMc5knoqchqI3JfY3WJ67hGcvEF24Plu0OayS5Ov1o1CIUgHq8Fi1n5s0U3tmPFGd%2BcAgcAFiBAPODnF2X%2F10D7tZd1%2FuHZo04aWehRN4bMWzSbgsE%2B82ZiE0%2F%2BU%2F76sXuSjNKo0jC7UTFX7I39L3k3E8l%2FoBGgEcQ93pa36Crdt1qy7KKAx1ozgQwgW2PeaHrm6yIX5MXZPIeSuDaXBnWbk37f%2B4Ju8Vz51KKCQM5B4k9FEpN42k%2B41DGGHExvNSQJ58W1J0T7hohABxdM75nikJw9fnBE21cABvXsOo7rTUbUPe0I1pkmYsuV1pbTQzTR2mikkHBOHSmt%2B%2By2OJMJTNwMkGOqUBeBC%2FfK%2FAz4i8tXFL%2F95ZTFR3LEPckrxXUSGyV0aMhnrzMomHNxVohh4cchtfCaBNy1B76MvlqChAXIUUGiGgpC4UtApHu9UlIbcEXCt%2BIb4jdZOw22573UpGwJLZjic%2BBDrFQ%2B1cHJTOU%2Bgl1O1gTmICFTtFGePpUbwgN8FNFJ%2B45DnSl2fhf12qiuQ6E6MUJHTiTWaFjXsvT%2BkxIn82zp%2F3jWwQ&X-Amz-Signature=ddcb84ec48df2c9693b86005d503c62b6f0e6001cdfb6a3ab7cce21b211ba321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

