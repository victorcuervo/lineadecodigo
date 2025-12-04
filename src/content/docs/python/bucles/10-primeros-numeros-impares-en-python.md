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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJODLZTO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFZujS0bUIwlmUk%2FuFmUbij3fLVjIFjQr1pPw4XbrIhSAiEAv0r%2Fqd8exUYRyINTr4B4PwWiOtltGsPjPaZockQh5okq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIizbNCvnQBzJER47CrcA6ASlc9vqE3J975B%2BLnjtcxE0AL%2Bb639N58SviXIrg5YakeeEPlZnZ5RD3Z03MEpaeoj%2Fd%2BHU15CNMHmSEeCGE1sOK%2FmYF2Jx%2Besioe8swfqwZDgfPa5vQCjhAnJBjVGcBP70alm9cMpdEOPDKqPXwT1cjx8EwHFFOPmDynEv6QLP63k0dj%2FbAX0BHcxaYhiGHJfbBoL0R6E0uIJASOy4OyvT%2F3imIh%2FzVbhw9VtNlZzuu5%2BmKueGiNwmC7zOVpNFm944b15%2FK9BStnlZvrvEJxZYnIECcksDm5xAIn2mBLdo0ODKUAC%2BSLo6LNtcZ9RAd7Me4iF8smynswEohDrD3jZ2%2BjF4Q5V9dq5vsFIZGqTPx6AXxDLXfX%2BxOQh1XRQ48Fxu3Uu73s1kK5IxqAGsqHd68qQqEU3%2Bt6OzpYW3IMIfyE44zRajJA1b3A1EBO8esQF3DJQ8xRfq13WmKJBr1klov8iUPpRfNWm6igZn%2B9NYt7klm4DU5FEDYRkmN7txF9jMdXoA1notRrrnGmjtb32UfJK14Ve6crhwi1a1DB83aZhX7V5JlAMNN3jm%2FdGbC4NqRqCGjk7sN2UHeDYZaJ%2Bw0uEUjbpCrWwuJhftNqUKFNXMP%2FLlX3l0mwYMLG1w8kGOqUB8RyvAY7UrvSVejS9WwmR4SgyGbyfhiITdknU2dj4oKpfyijCRn%2FR8L8faUjnzUpzBBi%2F%2ByYGHW%2FQYqWWBsvbE1uDsuUFwlr%2B7ZL6aYuozuRBd3o1quzhHdrBQ92kcmnwZpCd3aqhHWOvdH60Q957a2bLqehbQ1NIqE9h8P5E1U5gmOMG72Sw3kBe4E57zgo%2By09Qot8DJ0iSVm4CcsRU544%2B8laz&X-Amz-Signature=b4e1b74512e8607d7de8461f1df76b859ff3efdc431a2888d331198418977cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

