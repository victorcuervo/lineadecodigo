---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPVWTEI5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCKKCCNcuKVvbOZbHRHLdFQTE%2F1Y0YIu0c2UVOZ5mVqAQIhAO%2BS4Q%2FGRuvWoZKVaryK7nYI2qjKQeK3gOTEk2SqnuAqKv8DCEYQABoMNjM3NDIzMTgzODA1IgxEcMa4L4s1IDkfOEkq3AO%2BBfBTsCS0d7YvEt7oCulRZ5IpAHrIWOaZRBeScSH9RXNMT3ivY50N5kRsM0YhtvMYKb66xq8XQiWf2WmG8IYpoed9nTam2AMxUuPEEdvH03wePThR7guPIw6pr0RdmhE0p6ArtbiFrGwWH5NzcMdYuKT9gXJpiXqnhSLoPlfyG3HUnslWaf3nI9g0R%2FVKqtY03EICTM1Q2AyJ6QRtn17I3F%2FmAJQHI8tNMFSxmiEoH8HNJUTjZXv2aes8AfVhqJEJopo1Q5DsUJja4BK036vLB9FrTn%2Btt1ev8RtQAa2wk7wu06XiOSroJv%2BZA%2FgVOQgtfjlbB0TJ3ETpaAqXm0%2FUR1%2FuJRuQF3hmD%2BJX32y%2FWy6GdKSQRaHtw3kITWBgY8FmODbWLr%2F0e8F2Icl1PkwPbHWwJAUv1VGzShXonk3s69K%2FwCvjPQq3X2zdv7Vp1raowKq8Ch4gORWC3KHbBG%2Fd%2BWvWZOUahT2foYWiGCYUQGhqbVF4yxa2TnEB%2FnuaF3vgqc4mClkxR9gX6DT2hCuG0EkTH4hPDbuN2ym4s9K6AK8iF%2B5N2wqxhQYGRi1RbDL5Hm7K%2B%2BE%2F5womh1eCuFixL6fy5QE68KgYPtTypSkjA60bkjdUObrOroRkbzCDhMbJBjqkAW%2FIZxPi%2Bdgm2anfKsN3DqsK8fIfILq7dlexDYyt86xyAJTGYojoVUEDGy1h4ol8wbsHom34Rhd%2F1r%2FjjfYhJkM42RQRBQc4BR6VJv8%2B%2FTOCLaKz%2FmIBC650fL5oXfWaStslTuIm9pa6xI9cFkKR6wvmq3UPeJnNad%2BeildUd1BX%2BItgB0OgASISieeDXNcoS9A5XfBysGcIPaqZxWvOafeiAVj7&X-Amz-Signature=c35ae87b61c9bb40546f5fbd082b2edd000f14f0a62a5bb491739ccad1522a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

