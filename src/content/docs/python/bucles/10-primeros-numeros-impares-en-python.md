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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SHBRSYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDu6jwfAgWIbw5c5NZ7vD0HKo42BY4XPcVhoWxSOQ4QeQIhAM7hjSx%2FOM6FSKbqDZaHjk%2FpWlXuEJzY09wgLooPcLcTKv8DCDsQABoMNjM3NDIzMTgzODA1IgwuQNCj%2B%2FtV4tzA5cUq3AOln2fvpLc2snaXOZt2mGjPfeDUQjHQNu0mDyyDlNjjW6%2F1VZfN0dvucSH5oIxNPZHjBFFaU7pvFIr4cqMGa%2BlNJAIs4Zt2oy4el3wOrx%2F0kYaTrBD%2Bav%2BehV2GpPkx3W6L%2FlD%2F4XwJvlihwE9xrb1Xl0rnQiHJsUIG4ie0DAFmKcSJ7KItgoMGraFewaShkjsFaX%2FN%2Bv9M5VBfwR5knGMjiisWqXOCYnDRnvdf4851j49JbAWZdmB59rCo9NlqInzCdtem5pZETStJHuCS5bMDJw9Oy2fDVCvgWzqgPvcBip9tqxgkWhjh22Xh7sOzhhvMxQqX3eM8CpcEnChsIy2UPWmPMJz3pxqUDBWAFMxGUSSZ9BIMW58IAaZfmsgjkezuznAfAIr2GPlsxATWFUoz49%2BI6h0ZQc7FThkcIJk3ZhR2XoiXGsgiGNZqy9JuNuv8wQzGEaXipGgchVPUNbMIdSENdrYSKgd8vCCDwBWB79tsqjQfyzQXqAEkdhW6LUoiflI90jXWto5C%2F6O25UBG%2FZiY2kEbuhqwS5Evs1dHhUXIFn1W7usZth5TNrT46o01W7V9Qxqn7wYEKujWyR%2B5sMVsg1%2BVcwCTqji%2BU73wZ803l9d3wF1GmZ25bjDs1MPJBjqkAVK2yXB1TdsVp%2B%2F4KIiIALJlQE5CRq7r5PYl36AMPvJmwDQisO7lkleNzXRpcVECF3ZmlXnuZhMN%2BQAxle4RbJXlX0RQ08h7awDQNqeV0UVwUjinZQnsa%2FC1Oj19qrNSZXhVQsNM35ekVccftfD6bZkHMWFQt4ORdKe9YuSx5KNo5kVh52yn5opxOpGotGtJRaCPuvg1VzGUoF8pBdxM3%2Bw4rw%2BX&X-Amz-Signature=6e55b027e06c1ef074916f7af347fc08b0b0d46d843f07777a58ab7de477a6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

