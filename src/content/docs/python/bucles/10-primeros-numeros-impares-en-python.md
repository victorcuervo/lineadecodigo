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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EDDVZT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGlPHmd2eDI%2F7WtBypYZC1wYk2ee778Ta5%2B%2B21p%2FnJ3tAiAXLDvjAg9LwZipTltt3t7oP4Jd0NkfGKp8ZTb4g6a%2FHir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMLc14i4%2Bg5zCku6jRKtwD7Jj1MBZHvRtX08lcnp6JzJyw5FE3Drofhm95XYjdM1EPLI1ql5htf%2BOPqEgOk8g85wAkUSyR%2FyxJtMlUoPzwHKT92tWMCYHjehAEowFPJ7f%2BKZkUfWUc8KrH%2Fc27daPQa%2BEYm7PbnW3BI3qwLhsg6Fj3zCSpPsgblxgIThNrCpPLL6WSBj1wAnSRGMQVZPlzYEA%2BBDRysp%2BGGpWZOISkBwpqMhPUDxb4ymS21Wc9OJq283igg1mr4LkVkfxft%2FXQLidp7t2fvOSV0fHAJWakZ5VO7Ntke1UT1Htg%2BeORMch0Jjx%2FXXbh9RCca4vjn1mBEAytrc%2BKqdz1j%2BqdRp4NCKI7w9gZ7y7hFeUxItnabbyHsO34IXxwlk%2BlRSguoTo89ZXzCT3%2FBbDOIWZ5LYh%2FTQGlERmsNd3Fb3DvE4RsJ9kUTbXOzDq49fddQZYjvw%2FuUDYNz0UcU5Wbl%2B7t6TsmORwPeKs%2B9irxDGQNPvusPTX14EQgV2An5Z6nny8ptA1moyayINRqMSOoI4AEzQwMKMgiMpuSRbJIQGUosA173pK96pW3C4CvduxS1omYMDr9AFPkKLgAJ%2BLTyN1V4iyzTRPw9HZtY9tp%2B5G3vMqUzbi0lgRO2InnxCXmLZwwxfjCyQY6pgGXJ1PEgMZdb0Sc3Q8AUA05zitEz%2ByXRddvY23n%2Frnm0wqygU25Xh1oJmSY43WHPWP7hRQWjzZyXbWFpAezioSNeFp6IrjhJoo%2BppeUQGJUSLyxXxsjFP6DPVXarmcdzM%2B98VDmNLgOxUdqj1ZbWSBh8HXfDle8kMqXuH5A%2B1hG1cPJ22X1djdeStC6AUgbGxN7GdRDR81JUqa2PWNaqP6pT5tgS%2B7b&X-Amz-Signature=70dd82ccf85729c155d84202630cd6efb2be47aa04d22b2e7362efdf0e8ba1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

