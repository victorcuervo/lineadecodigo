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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSWZ6M4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF%2Floj%2FJ9344B5SY6KNI1Dk4MWuu7YxyWtW1Yi5%2BbUOvAiEA1tOUfH5XyHARxm1O4MCrUrt%2B4VOfTq%2Bb5LgP%2F3%2Fk0rcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEn7IWGrta7xHjzqZircAy8rC2MbBPsYra5Pkyw71wnhUxMV1jvWMGE2thD%2BiRuJuz7gxHLFO6Lk2iI8BGyKQZ9M%2FvrDtspWnAD9VGDR%2B4170ePvn6M2Nz%2BGgal6%2FOks5lplIpCzKuvF29avgRKGI8drBCyp7m3Pe4U6l7PhpPaE5VsLRbdVo0s0Im7qAyID5r5LP8ak3GktBnkMyVG%2Fj%2BTtM%2FzsAOv%2FvyXHJpzSKgAU%2FZW92i9jRtE9UVR0nWRe2KNAB2rSUnE1v8OoM1EeN71XYQFqMAjHLDRFHXZ9ZwPazIpQPbs5AmjXuoPf5qfFrRoNi7W0nCmLR5HJJtJHw0m3wgtz82Oeaqq8qSaDyahf9nOHGV4S18Lfob5L2N%2BOgIoHnZi7hWl8w1kbTLOVAnynt1H6weV9RCAomKAExMVF7y63jRxQo%2FQoOuzQcefsaWy3jVB3rhRZblFhl2%2FtD3CBmiLmO5Bx9rFTrxK1FOejMxjo1nEgEn6SFzbtGYxiXQ1BeZMuJx9%2BkS75V5pwg4OUUEkCn1yj6MUhKdYgszSFOet9ghoM3xpeCeYtwjG4A3N8yNEhpsn2vL74Ui0aFlVeikMzroJP%2FTC0LguYNCBsZ2KTeGEOEan1YvYRf41ECm8E4Zgz06MfpY3jMIyXvskGOqUBj7HGCbXvr97uq7dXqYAPkp4JgLqgY28SAT01xzjOCfAf5lb0ryGOU2av0CkapTqFMQmGB1bDa%2F3UCHrBorcoXJIbAL8pNQ2J2uqsFZfEFEAzPdhKyDb28DabuJhPcsrRoYmpgo7s5pCk9UrVgv7MefGZkYR%2BmL4VgPEW17iW317%2BVSYCV6epT7XjEIP6x%2FR2r18OXKPg%2FSu1FzimXJ%2FQjbdUqSbf&X-Amz-Signature=6acdec290b9dba8d88d2f4ca55db8dbaa7bdc2f62d9229cf5e441812533fab07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

