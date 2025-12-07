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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKFXO2E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMRuwevPYPcMg%2Bjjz%2BA1%2B8M4mz301G%2B5HNRWLcsIBu6AIgaFSYG1Y9FYJOi3fXAJG5lWYvflfaL2w7mOb4WFpybiYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtrBIybM8Np8QFaeCrcAxy7FxKlfi8IN9lAiL6SSMTXahBGUx9LlI2VUzipK6R4D%2FfdS6uanWk6xkt2i%2F%2BOvsPyUvYc5Z66XWZ4OIze8k%2B1%2B00oIiyYdVC4j6%2B4cI3tnvvBIyMrU641vJ0E4DAM%2FO0S2lYko911FVweNe4Kn4fYhaxCsPQ3PP9sz%2BpaW259T7MuXIFBH6XQGAn4bYWOBiC%2FL8hT65C%2FERUY5LOSA8JG20ty0GDSbi2r%2BwCHC0v6%2BCs4m7weZLb3U%2BBv33ipbMRdv3GhLxvA9EfmCP9iP7egURvDFjFBFE%2FurEDbmZhDZ4mVZYxq%2FdO%2Bn%2BaWF9KcU6icgOXHD6ItQ29zIVMXTMjUB06H4QwWQqPHDOHDc%2Fq5b02jmPvylgo9p9eCRPhWV7cGVA1y3FX%2Fxz%2FtS1tSS72zHPUmqqDCXRZfZxdBcBH%2B4Ci0KMMfa8RQrCTiF1d%2B7%2FguaBr6tKmX9KqaSrNqRy2aoNkLt2Y2nyl4oiyqGSXQ%2Bwf02ag%2BgiEZ0XJiVIwCSMVTQkDdSZWH7bwukAOgVk5fA09c4%2BWDDb3BG4rjHnhzOKqIcjQeq%2Fjux3FF29%2Bm%2B%2Fbn0V1dijXvc8MGVufALABxc6l8dYjwDmx0NT5%2FLTMVu4jSBoM%2FVBmOpy0xMN%2F90skGOqUBF3pNuc8hNNl7ilWkGREhDDnxLG9Tj6HYK97smYmeqZWCrhdOQF1Hflr%2FKpGJLqii0Qk6sYT7ULIvkBG%2BWQk2vGD9LgIXV644bRkKKAU6Q0f6bQSIj5QPTsSEOqaZ3lBAZHtJgA8eeJjiM8MqeaCJnphHSScgjSddLe2EffNV9TlkphdULMG5SO8DcUBRTIL8oQKenJtHU2HkjJ7JY%2FLLZ0EOrnQE&X-Amz-Signature=9f9316884cf66bedf40b72752913a1fd58fb9c7b04cd62029245d819011e86a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

