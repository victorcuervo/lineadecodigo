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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z262LOWM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeHGNAoIrG3QwIg7isOeYoHN7R3jDf07IJoKbWgsNpBAiEA2kihhfKulkPuT3dksb7%2FqnfAHUZzOqJQMCppMQqOjgwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9dO2bi%2FlCAluw20CrcA5fly1G%2Bcceh%2FbfdQ2SiKWPFKy7%2F2tFjdte7ubMOO7Rf0GcPSIZ%2Fm5voHwvAFP8fK%2BjSM5zQ4kn6sr1rQLbL35QdUP8kxlx0PZeftKaNiSsfheY8Tg%2B2C3mehee2DyrUudUIE4j%2BYTpcolad1U5h%2FpEITGdAzsGiM7MMY3W1d7zdJZOC%2BDCkMU%2BKhIQHliC7JooKaRPok%2B36zOJqsDBaYgmtbYs6bHMpyRHQ887ZWZVtDC6hnI0PyCHEKNWOKnpaTxDgJmO8h8Bd81au5wM%2BV0Bv8NQ%2BZX%2F%2BP93D21TODHeWI2TdpRCJ91MRVGr1AxT0VTV3YyoQyt67AxKci70%2F5xNq6D%2Be7aHgSHXfPqKxndoE7qWgDH8UTM%2B%2BMmS1b0aYhWLyPdEF62VBrpS4VXNuV5jxFtfQMmgGK9oPDqBYya0TBJ7TPOypuvSJpf3cLGyjciVUWZChA93zPGsoL%2Fy6b%2BhXnk1XiodfxFTon3BClZjOCdq08vUMGdfhZfyKGksvzVhpXAR4Vwt5hvq5GBQ4TZH1sbF9pN0UAGVIkMb2t5E4nOOCw1RVwge3hB6OpHmaHExKxm0IAhGLZfjpSKW3DLUe%2F3%2Bau1Cyg5Jdj%2Bcp3g5XAOx97AHxDnFPKqzyMPia1MkGOqUBJK5I5t5o%2F5ovOWFvyevl9HrvBf8HSkRA5dVAS%2BLGHGlloT5UQXr6Fcv9DvimRTq8O0tJfrbOICfWbIa%2FC3qBCkUdlPJN0ZrFvpJ2huJpeFtfD1s8MHxyDr%2FrWhKGVwdB%2FEdt0Y94CLeOriuJxCZZ3wEQwF1kcdhJx0ZCmKAs%2BZS5%2FSAIEOEKRhblydtIuFz222YCgdjZ%2BzfyxLLq6m2%2BrskhRFXX&X-Amz-Signature=24ccb8e5a8de64abf7e56d867dee29007f31e7650daf116fd9326f54b3921a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

