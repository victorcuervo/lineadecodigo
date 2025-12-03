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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663USJPUTF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIAuZchF%2FdsZ%2BvzkMPEfvd%2FzfHDE7NjnzLH8r4vrSq6bIAiEAxVLx%2Bf7LBhBZU4gZNd0IiudFFLcrXpfDRBxikCIMMRkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDF2PH4mX1fmvrMAx%2ByrcA%2F4suY7pJFbZcJZR5SevjtqkC3mUrfR%2FN5PoggU3u6iV9qFVTPCOtOsNYOg8OMQZEg383rDhw6BiLa%2Bq9JKO5p04Jsmoc%2BxCBjgUAgHplTYY4AcrgmqEwbI7V%2B40PYv5ZYoMb%2B%2BrC0uckxoDH0nRoEshBjrCwYjzruPMXd1QSeT24m8GLJiKV3dKSO8bjCWITYH%2BFCGsUigL18bNca%2Fmr4q7H5drQMyrrqiSUs1q3CwRSIrZ71WCvRGaO8yPauE%2FEZ7wWH2PRO%2B3ywkPxAfYbEyRTTNqnWCm%2BVK5rXoy9RwR3uiMAd0EOeCH1jVQEVhAEwB7r9K7bezXf68AkZB0TrqUaZzYJAjG0n7uC1B3Sh%2FI891%2FjvgO73iwr8ZB14hbSXuEsdHX97wQ0jQBGCF3%2BEHVGQUeEm9k%2FqJxsN93adtiSkrJlCMUVuk9HUSRevtCa1f0rTrysERva4gQxDjY22TAFiN8qw5i4UQI%2BsNED2HLTtMsSyXhPDsGs7iKf3c%2F7BO7e5VoJNO4SwnXBEqWxX262zFJ86xnHTuVwAJxIB8VbMTzKvDEGYECTZEwsHiXbyOjiXH5oN054YuejUqVUjhTzKDobroRXpA7jWRDDnvWlsPKTwU4U7Mbzb4kMOjBwckGOqUB3Vk4nqIIuYC8AqVj86W9PbP86ZR83IIOs1vpxuKfor9qZvOJf%2BiaZS0ab2re3egedpAUiDEzjCi1EkZw7NxzckO176skelmRaSWX3mCyRtEc2MZ7PhF5ZypSdjgDzZ2%2F61LAAUzA5nn9vE71Wmp8CUIVYZ%2B17Aipb4XHodsgK6cZs3D%2BgOYP3Pjpd3%2BumDHK57VtKNbAxK98v1pdwptOxHT4dO23&X-Amz-Signature=81aae1ef85e72584bdae3e5e1e6ff775a4a18cf24e2c33598f21e4c6cde27027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

