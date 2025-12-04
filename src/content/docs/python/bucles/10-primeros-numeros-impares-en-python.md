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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQM6WDIW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHLaO7zHr9SJ%2BS%2FfP1RNYDJirmCY0lTVoXxWAZddhsJMAiEA7E25vDT8e7%2B5P%2F16NB9O1dPstS0hZglLR7ERLkTG3RYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDElJlR3nHWtHQ8uKMSrcAzrOfZxb70GhnZUS9gDjHW9Hab3NCTUM08lLMH2HgbD8Du7fb%2FEADK8lYzrIp%2B3d5V6W81mq%2F%2FRwu9WA3bF8xCi%2FTftRRVtQEil27HTv9sS4dDBBaFVeSvc518Ni2754XbO5%2BeuAfGON51XvUjq1sM%2BTegvJPqxGVLAS3wNhIZKYjUsTEsXdwPfWDL9wScb3ZnwZyz58E2iFp%2BpX%2FB0un7t9IqGcaYZQlpL3sk0YEN%2FRnDlq2hmYLn1CJRC8Asywoi7gqxBalE6l88MjNXbM0f%2FHcUNDQf4yphmqsBEfdp%2FClkQQ8cnSQIccfxksFqJ23WNQqbzu2KzSRt9NJuZmx0NzjP3NhWqYj3XnD2rPvxTSzvizpd2vOZw%2BiyEwrQ5aGrX4bHaTNvrh%2FNIby8IN%2BNzDT9xBXvCMeGvF8htRuNlXSaqbRvtoVedDmPYerlmG50CITWrZs4l13XYtAx9vq1gz%2Ff04VzHNoDqgHvML7XnGFCBMsyfSAhXOlTh3UBe1mOND2WyqDRmOs8QPU%2BEDcZHgZ0ZKr7NIQcaFv7DJ%2BJBsowdkvOZ3BwRzi0ljhpNdf9WwOS8Btjqeaap3UqfNdNm3eq7gdF3Uy7ARVvAPVeWKjwLAzadDHb4A%2F7jDMLHUw8kGOqUBV6Bk20FHor2sxPzroCK9VB48K949zLZxNazrRk0BAfCOS8xQkUwm0l6TBZ8cKjco6e9mpZTCDn72LiyQ8KcyZogbGvMJrZq41w9m1qTp31s8LEMTUaOqLZ25ABT2%2BtxBCLA7qG7lQdIV9L0MGYgegOar7FO29cKVwF4S8QfE%2BjPOP%2BpLz9a2N98DYObDV3CZKQVjxmqzv9uDCxnkD6BMsrpEJjE4&X-Amz-Signature=99ed6fe54329440873c15bba190fad405d71f8c2fb561082823bd5412c0f82b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

