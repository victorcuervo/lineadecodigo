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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFPUN7X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDJcoaJbTShn10YlCrle7VvKaC46SzwfxW7YyjPP%2B%2F21wIhALi2Hd4ndUoP%2BOdeeXQ2o46var6w2oQyFGDWxUvvIebGKv8DCDEQABoMNjM3NDIzMTgzODA1Igw3w6ybc0iM66pWVpIq3APov3PyUaJLSZt%2BDo4wpEx3XbYY9Jsn9fkIeOYJzatdwsNDohX8d3HtChu93UGYvWheIyGyzF%2FN8HmlNcPUPyzS4dG4lMoA750cVizHeo7UF8sStr%2Bhx%2FLNCpYINAS2M%2BEEw%2BXSJsc%2BY9zbigtvKtcY1K293bx%2FKHPaZSMeYbq71aREPOCQb6odKPDb1DfA0xhiPZsI4J0a86poagaekmYkpP50tw1a1lWRtPaUgQvyY3aw0MdSCfLh0YZmxJS5tksik3kqibLla6RvgsETyhOHbSlv01BceAWtLO8UIahP7pya9CaVirhyJgaUhxU7LqyiqnyBogQgy6ePLDPCUC77ad%2B5v3PnHiklX%2F1FRsbhDvskBSmw3QgRa5A9AU0Yq6N%2B7LM3FmQCrhdtlB%2B9XRnVj9DTwj7jLWtzrvQ0PZroyP72EoYrPnKkAH54w9SeEFWk09ZvRg7PFg%2FJMewyQKIPNSKo3OrXNIkPKVqqdK82q19VUiVjfBlj73cfpkpNzSEyjmPb3cArF8IJUFLgFu0%2F50lztHcvBjADBn7mowxxr25vw4UBEVtRH7dWS%2Blt8tWKnXbNCR7%2Bb%2FGy5zeLWq0SmpalBO6Oah1UiibfGXQm%2FvZS6Vc1nX%2FHORHYejDbwcHJBjqkAd5GRkXD8JyD5Fl%2BFCJ%2Bt%2FP6Pzt1T3oG5ioFtYcA1Qim2JNOAxCoYR%2BMDiXW7q%2F38oNNZAGjK92L3zQQx654xKdpggEJsVLfkM7%2BacOFrEJn6KZWqHw5LYH4o7piG7NELVOCoujFfEpw%2BP1ln5SkkUnuKrE%2FY866kE8ssxGihNvPLQfnK5S84RCojF7v1uz0mW4Y8une2%2BIzKbTB7qmQVZR44Q1t&X-Amz-Signature=07fbd4bac22e996e2ffe4396017b72577779f76e2064628029d0d1b62b874186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

