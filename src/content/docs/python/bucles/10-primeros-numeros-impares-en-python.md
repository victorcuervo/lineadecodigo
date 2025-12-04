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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHT7NTN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8dxfW4g7MD1c0HlXnF%2FyX4VmBLB1w4MMGcBqVSlqZrAiB7tGW3EVqEbrNVAUp9H8yP0Mdetd509I0mkcXuTL7LTSr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMbWSui8JjWI%2BK1rliKtwD4lCcNZdGLlik%2F73jaXFFnu3dkFRAJP0qGxDTd0z7EXorroiIkEWVsPAfsJHuUKRor1SbRHlUaQR%2FNOf8LzMwhMaVRmUw1L8fwR1xi%2FKgav90meaUNaampBkAjnja%2BV3XKjpzQQhTbGmBZZ7cMIoVctORVcwJqV9ON4wgaL4svGoPLBlVMk1ILgHZJXoRtxA%2B9KRDC%2FVIoHELu2iq1rEZeaNRgBAL%2Bft9n6NhC243Jbsgbpjy9b8jZb1RoXlXu76TCwdOFh3g%2FrJ2jzRw7HUOztU2blgO5NhFr5oSixqb0V7LRgWCMB5GfRVvuYW%2BOVr3oHXUkDysRo9fC%2F9z3Q%2Fq1chzz2xA97a%2BaWlFyPr4cbB0DqcDUlzkPdp5LBKWRUZnS59adBo7X5uFaJvdM4FIP637VLzX0HpM3Ty6g6Ylp31WsZrOVYIzeNngvT%2B8ph5IKmKGyEvDzixorH0uv53rVT%2FL%2F0%2FGgCwPcVwQvQ%2BEZ4KDK8sgO0qtnWqDwdySTo4tTiyacsys77jMjvsDRxllnCf2qR3yn%2Fb%2FWXzqndzgPNhTaFgLaaKDSjumg9WiWlYKq%2F%2FZigK%2FCm6azLlh43rGvwdAjJP1RJYB8JH8RXpcQfMFqd5Tmjo7EJSKzSUwvtzGyQY6pgHG2PP79Oj5Vefv28MU5ehRl89CF2vAFgh%2F%2BonUkOnBqToWF3WakeD4pZDjVyw9uHIaTd9sh%2FfpDWtU%2BePyZ55lINyy5RgfSZgHAg%2F7nzqD0SX1QMlKlmhh4BLOBSILwq3uYwEROPVw3LiFi55f1LIw9cDMXfXJouG1Tj1sRzJgsRaX40nLpuNwOqSPmirG9qv58LYzMejXPVnrIILetta8jglwHfRv&X-Amz-Signature=dc9a6e6888b65b5b65b90e3871265122227eed8dac3bd372f31d2ccca2df9caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

