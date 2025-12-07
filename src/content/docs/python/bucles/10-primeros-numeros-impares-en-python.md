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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRCYI5J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz3JFE%2BiphbXcFaBqeHusxKT4l4wZkAwtOt1YSkYOUAwIhAMPA4tFPz%2B8kV1P9NYH71YyRstRGyYeblEzsqx8eY07%2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu%2FSkBSb3sTepiWNIq3ANbc5MR9ejzvxA%2Ba6RXO1jKyzdjUMcWUIOn1BEtgi7U5ti5yqexZnZy4KRD6nS3R0dc1aJtlB5UNCPpmDng15aCups275yp4cFjRdFwITxl0oW3OtYUxl8E0ABnThi5lTKzGmeD8F0k10%2BBN6Rui0Thei7V6uVwZ6C9YKUdFRXkL1b%2B2fzuWZUBRamdyWBGOY24SROdKTTaS6ke1nIoCL%2FfuW2fg2m0N7jyuKCNRMoihU03z5gTzme1%2FmfsGCDKt4i8dtRagQ7R%2FbPFfGtWsgPupHwE6BQKItnw2%2BYv6JY2giwM%2FHIGscPBl2R7HXfSZ2sc8IcMj6itovBSQY6p3jpS5fNi4uBRHe5nbwIkxQloUwri0xbjD11yx19zHAbEIMymFQ53FjGlrEEBWW8KSyzESfVJGn5Z8EFWcZYSYUcafA7hcIYaRzBz9AaVGkdHUKV12jkO6hrudNU7cqdfWXTLDqO6GQx0fAyw0%2FD6AJgNuYCRI3VwWoNQ7Z6ziA%2FP5Jw8cN3nwaTGyM7zoQlyc%2FuZ6hJzTYLP%2BUS5Nrqw9Ar6owDfafcdEPGM0bQnv256RGHoQZwUvQ3Eqz6l%2BSRvpbyjRBRW8SAqONupx%2BhdsAwVU9Z4vgzPB475yQBWfjC%2FudbJBjqkAVoqxvnjBUtXqZ63GZpb7dLorXGlLKnIlc4ElMQCH9wB3a43sYxGxc1oydSWuUrx9A%2BwPr7ateAOj2t4nUVZhHLSraSj7mpUkA11ZcTTZaDiV6UiOBGqxQbOoMrYgOXY9QTZhhrRSYLpkFBZoDq5eap%2FUuUE%2FSVOAAhhRjOg1iTW2aVaVpIKvVOsWFBoFpZmu%2F89IyBQffYutVvPJcw5j55nwgFD&X-Amz-Signature=95e9e4ec95f11e659a3c3883cad10da7194d425b43ebdb27e37110300382d95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

