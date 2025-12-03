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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNMCR2N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCNVdv0Wa3ve9jbPuXNBu%2FTC1yfRPiY4JYZejl6JmCSDwIgYsaoBNsBrfcZozRXQWBfaCOgB6HE6YJO%2FBCS2QcRrS0q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDEDcsN5po7O3aIWTZircAwHVRXBYPHqD4H1uzJnsAW9%2BuvtAqElw65lbsjDfcNVY1tfqtWjLEfKffWLV9460nVN5jWjkd6I6CAAJOrWD9AXeQaBd4XDvuxXyr67ZJs7lE6f%2BkAuZBsDaOPJJ3FBUeaMvuanojVulUggOoAe8PaAbEc2B77hk0DVBGzTgb7xMQs3sXpyJ5X5%2F56nJ%2BHJCHXIIIAeOi5Z2mGTMOKBdYSrtj8crSQ%2BRJ3B1bhwbKkj8DmGkYoxR3EEUoTKN67qDmbmedIinGA9z78TDqD92D4YO9Ow2zt5Ui0Ey%2FxdzeIlXtd9Lq9O%2B29VKW8sSThdtpa%2Fm%2BnQSUgPPzx84leK8b8tQen6inSSqnhbMM0uWE0KNWm5bwLz%2FzmdO2Gw6Y97Xhnw9ZQErXd52KCGfzf%2BZYYcJ2PcXDtWQeNVzGtCC36zOoSXIoW5ZamsKhLQbqRaPqLUF%2FlZILM7P151ENW22hr1OqG5R7MwHb1aI%2F8CkhUmqVsBMbDC3eT6H1WUiLo%2BsBDFAgOrMpzmZW8ipq2sfDKFSKpQoNNhGjKqUblfqjWp6hP99Steq49td3PQBI52YGpWKkf1qVz10BEMenzOEEF8eZci%2BNaNcU4bEONlWmvLXfino6jRTevoVN61fMMGmwckGOqUByROm%2BJHcwA9%2BxqWXHASbMmb7DVuPKyhl9Kh3dgjeJ9AjtXe4lmA025VYrmtqk%2FeOgEAVAyuyYdsNVAL6D0FGzurlYrOZwiUysE8r25JtDqDTubxf92ZFLSxrhOnEIm95NWG0ae%2ByCguHFqLUOwFBvXvVg3FLGq0UdiuxZw2SClX1mavqggUEn%2BVgKQnuBrUysi7BKXF6M3a%2BDbB9NGQDedsEZp9o&X-Amz-Signature=162427e5b3ebe8878d54588b39c28d753a5c47971b0865d08fcb450637a06622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

