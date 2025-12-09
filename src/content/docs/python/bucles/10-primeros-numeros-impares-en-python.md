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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6EC2PHF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMyYrKuo43u0MjrhH7mksOkJSvEzpzw6xSzAYyQNjJhgIhAJjC742H3S25kCZVbbie1AZOIr2ww2hZWzXeAbT0rSXVKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTmvqzZZ61xlXBcLMq3APjONYouFPJjoxqoKoxTTepbAMiDFJzN7tHQAVjdTdbGX5Di%2FU%2BNkVesFUxu2hCM6kmrPxDOxfJX%2F94s2jsfbm7iJIg2F1wnDZ%2BRJNljFklz6Wx1ZA77ItM%2FyBMBKx1ITcRYLQZ%2BiG4CFFOvk2rWuyK8tnNTUJSKNY%2BLfIMbCan1KP7DVYKbWcOf7Zu%2BPd%2B9IY6A1bFE3m0qSuSB%2F4zREYjoSgQeO16TxclO%2BPma%2Bqa2IhbbP%2Fid54g8dsSaTg5Ur5IsND8AwskRmH3azQNPAEaE7P9rSSMPWGg2cqpWEn21rY5lrEcwgwWMIUdVQqH8NhtPQAjoFebTZag1sv7kCGptl2W%2BLuRDaDUyCqDW5tiL8afviTruVl7pcVl7qV6eBLL35NiXpsZWgrCk3mUIox0bkM3gO%2FBK5azXmInbaZPwVZuZU%2BSS95xDecAc%2BtTncadQyw5tWc56D4vhM0GvIlF5Os8dAh84I7R3jporXKNB4do7HMwf2qn%2B%2BUWpUasI9lX6lSkaN1de%2FOMftusQhoNsmeLBdrPyW0yqHuVzsjno9L%2FsySijfk5N5EmQyzqII7M%2BS83gWMrgUI%2BH1F%2FHRMLPFeakQgg9AhGSDK79mCMBlxESkdxm4rSfCCM7TCY6d3JBjqkAeRGM8xFxFLaG9sjPK52LvICKmfIalw9UtbVbru1FyVIKH1o8YmTC3BIHM9cEwRpuoCDduX8rXf78EQ5AmUFzMlRQZCMBcQ8E2RCjm0bWK85gZM2nwSvCoATIfMibU7j%2Fdojhk%2Bn5NIm8OZEh1C1hil96WRyG0kJZPkqyqIPuulO30g70%2BbTkcX91lxMSMffiD1c8VQqYuvQyDtCPpXtmnoulgm2&X-Amz-Signature=1f642f90ceb10b7bd96fce0b36ae480aadc49b16eb56dbf17492248463a1e698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

