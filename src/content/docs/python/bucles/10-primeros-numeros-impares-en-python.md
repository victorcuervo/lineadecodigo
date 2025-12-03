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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZCX2I4W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIH7HgLAlqN3Qlffam3UU49tIyUpjOnW1wjTwzAehzED5AiA4hhn0fIKvz0O9QXf%2FFBwBJ2ZdSNPU2h9sOKuKh8I6Zyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMbH31nvT3bOzzQH%2FkKtwDbeOoA2CshobW1LFMOnghzmiBlN336bwTATE%2FDvr3%2FBztKOV8vky5YXv14UAniXglYiyVYyxiy2npPwNuA13CtF9eNFNcfKHjdNgIHbTP2orVw0gBjcxFlRPvYTsLTYU3F3WSAvSHLXSfFoEYOYS8v1hJVGgV4K1%2Fk9PhSnL%2FsHGCSJyaeoJHUogYRw3xDjGBMOoaVwbZSzapL2q7Blzu33O4DwDfTgZkD2sjJykOSMOKS3L36TXcknDiiCt5m0RqInnitnYBezQdZj2KpMwGEstdaePjvZslhlQBhBaTq1TObglyN8BizsOF09DErvbViaQRP2CRD4I7p3in0KlILhG8qP0LIDUCpT5t4CDA8rLKd2QTOP85ZGHc%2Bgr9B%2FpNROFZY0iQKeE%2Bz4TN1dID86OkcMHdGlKlfGin5te1ySkz7Jt5JmUBEgjNkbiiGMTtTFRSj0hPYX1DDWnaJ6HBduMpX2GlTqgMNEIl0ePQS%2FWoj4C9vanN40WkDNE11RvhFq%2BwFPhLcSa7t%2B3%2BgH7loCFtQ2eKdqIRE%2BsDaoL2sBn%2BSdecTCTMEIhO4mM72SZRHKexMwdMP3vHCEkIysRg%2FyRrN%2B1B3aRf90KQYSy%2F2%2FPd9yXoFBgsoryTWGwwgvjCyQY6pgFRkCFcGg6tY5O%2Bu2WlDZ0Vs1CEKqRqVAjQXmPPjih0o%2FYPmi6jr%2BMFcRoDDSnazzyLiB4tg5dQ9kXmBDzrgbF6QAZgqh4TbagPLzaxPqkKpfyU8pNvIJr5Q357uWSobYdQvnavG4BVB3tyBZQX5zlImBm3IQ8v%2BUIKJshIgzMi%2BIjt2CYcKeW02DsdE7B8Poq5jOCfm9wa1aWv7R%2FkzbCaF1O7DnYT&X-Amz-Signature=397e2c7554cb928f13ab264095513e613e2619b6271ae912ed0b87e9d1798809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

