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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MW6GQNC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNWONNj%2FEawGoGBmIBzABpbZcShBXBT3OFZXCJPaY1oQIhAK6Hmerzyf88mCRfeqZVCoXsfyqxc005zp15AmF7x4XzKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvADL8mCFcJE5YUqwq3AMlmyX55MBfyJ3bFDM4%2Bcp88j8AczvGnWtnnuO7jgVVvOYx8KAyI7tHfB2uS4u%2Fcx2rfgb8R8Cwis%2B4r8bj4Qlo1kCfgTz9mv7ilC3NunGCuEm1BmlecJRC5RW6e5IFnhBQ9JXT55arxFQ1DXdab4ISkQV4UDzHeqUakzOmLfnhYVT2gq1UTjX8sgtUnR6GNhNRUox06e6Y%2BGvNZAyA4TPv6R8cIldWkWA6gKheXiIKokHLGIsy%2B5EgCldeG%2FbMhsmKvV%2BBvKVY8TuwaU8q3luNeHr6ddznpFzHK3D31bH9eCQSMuglAoGdjW5Y1UkLpg1%2Fk6Ld4Gq%2Bj1spqQQNzYAVtBTHFjy9uSFDuFihxpylxjP%2FjtaRirplc0iB94l30trFs0iRbR1fCqIrclxRO4EIawtf9YEIfzJ81WBHyv09LDOA3y5cnbNVrU5bSiyc1y8c3FXRnYggQ6raDMHxn2ducDMak7319F26Pem%2FIRLiRqhR%2F8wC0ufAG8lWhDBazulpXOtawUF%2FlAHV6PCtb0oomuOQ6bAdZmIYRhSBmFBk7M5kFh0P5GmluDaYfKz2XTajX5j%2BL9PCo3%2BeSz%2FAAY7YMjvCk4djBhyI9bqyGQTmQfiZAcZ1M42KEpuf5TDjmtTJBjqkAVvJQYr8szo1D2VIgmQVkP75be3Uu3QT%2B2pxmHJHwHwptTAD%2BnDs%2FL%2FWJadzJOxbMHOUolRWKKQNlUKnuKeJlJJCL9hfCUYrv8nOQxDPJsWn9zMKFqCsbuy8egSs%2B%2Fc20jX5IJpFDGFMgNpiAQ%2B1B15MMxgO2mUAaqjDMwe3IJJbrhEl1d2pDRPzNYYd1hAkmTkRobzzQWlov%2BKfu9%2F6fW%2B8TiBl&X-Amz-Signature=0dcccb23d140592cd37b134ed3820d7a1dc3ec762cef59c6f9665cfe180f31c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

