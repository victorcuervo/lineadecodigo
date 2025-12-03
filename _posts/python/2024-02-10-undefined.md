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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665IMT7R2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDhzQTS1lzSFqd1fBpbK9nOXmiKMPqPEr5fsAFOpZ4PIAIgeF88uxaLmbxN8Hyrj2qFeCgnQQ0ztjyHyspt7itD4Hgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuFNneaxMAiuPIvDCrcAz7FKKEFf6OdIxtVxNjf4%2BgfSDfWxG9qQ4kLSE%2BAM1Y%2Fls%2Bz3Klr%2BEW2Kp3Q7Sm8t42gpRcPTMfTg%2BM8%2BD3xAldr8sUo%2BEdpRDFBZQwldRyTZ0xtmt9UfC%2B0oXvhIFeqoT%2Faq%2Bsag12YwBzXIhpWnnAcW5yMwpAX0WrFZYMVUvjKkrUdAXfb9frxGDmrvaavtvsnym5fJBRmMtSLKFP%2BhgMuOjXYwOH3w2uogA3RLcdsjE0WNGYnbZvBK2ODmDlT0iUonBOkh5b3J90mKuv%2BVKPrwUlosKL1F4wkSIOss19Nl1QImXyh3%2FklKsmemblp0gwFyTIy8sYx4Ss14UIv5mX%2FRPim3l4hVkme7ZYR4dMfEMR8z8QPdhs5xvagRrAceMBKjqx5uBPAT9ldkQFuF9f%2F%2FdhnqREAc5PMcxkSWzTdmEgL6JN7LtEoIOLmvNsHDyEZDvlWgJkTZwRORFBCqQ49Ei4ZCc8g9ZOd6uQl3H9KkqMcJxqO2eOvDM1r3HJvdnGTnO0PvypOH1eIjOIP08KA1zntsLWo3wqa8b%2FYnO0BFUc2m5PVaeLmmQXqiDLrz01ruG6LfE6Wu8kLmEFfCQhMlBXRSQ4q660hijkds8PVD2zYwXxcuLymwQt5MNrawckGOqUBRhO6zBkvCrFdoyHggDlX4RgQ7TIdeiqUgVAkz2FpoCURcRfm8kjKCnwGPEme8cEMKN5%2Fq8GtXeSXxVUyecyWwEzJpiVZ%2FwmGHTKm5f7QbqzYEhBzo9z20Yb5LEfWyUycqNY6ZrOfBw3iwBIvPly5ev0XfMMH3SWyJhpGe4XXWVIPaxaOmw9%2BN7zFA03z%2Bm2TWDjZNul0xcj8g7nwjEvpOh%2B%2FEHkt&X-Amz-Signature=c446b9ea29b9c37a65aa94efaa3b6f66f87144a9d65f2f57a19e6c05db9ce672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

