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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMH2CPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMjIeB%2BkpWnxAWICbaScRMJvePluj0H9eCNn9F4WFcQQIhAL0DjU0Usem7Nm5fEjMsxenjB3O9CS0u%2BTHS7KURwcN9Kv8DCFsQABoMNjM3NDIzMTgzODA1Igwq4ipuYAXu6z01J6Yq3AN6ZR3oNe64vgZJ5Eaoor2ZxvEFv46xmMq7ekCLZt3WSUUAwY1En0Q6q2nSaUGEy5nfG%2BZSpafhZ%2Bpjwvn8h1CrnuSZ3HeVokN6cGb4ptjgXCh6VZFXHWuDroUP3XNfcu2yWVpN%2FbebXnzdh5sVQsAYuoddY%2Ffk1pajXbuJLK9fmjvOWQ6tjsO7zRaJUe%2B3JYCya64QgflW%2BosSuLHCngAvWadoms9aBnUOo7tpw4RCGH50C7mt6lM4Iplx7TT%2F%2FCpRatRbDfU8Yi8nrVg1TlDi9o%2BjP2Hsgd%2BVlPj6ME6osNnmcUwn4HaOfK2NXuMAuQMqqpcNnj1uYTr3PR%2BXpxK%2Fm%2BRqTyiLo6t6grv3aLsgiZ3eHEW9frRrmK8iKcA5fHxfA%2BlA0ul7iioT0j65awfkaBAEKyuj9WAm%2BJsU0FSntkfRLBc5Oik45aRc6njWqrYOhBKZCcKvFEvVpNLzXBzjqT%2ByScXl61gCMYq%2Fq1JZ5Z0p8Ecjqndd9jc%2BxI0xv%2Bp1nyvkkcwtLSPVsMRf2xyw83MoCnfnjQsGxgMOKP6R0uUg68W3qR%2FjiuBK7F%2FWJ3HGpDEraA4FT7ufwIgYWx%2FRZ%2FLUun0JhYXDYAYAlzNlVEXJIklZ%2Fb%2BkMQlYwjDo3srJBjqkAZWMeUN9T9nAL%2F0Tssciwq6%2Fbc0o5sGe1bXj4puNyQ7IgttFLukcPgtqUEZpo48482PnZHEPuV57pq85aLdRW4egJeiuvojwNZ1b2s%2BMi%2Fmd1yGyrvJWn20LX%2FjmcG4V1p%2FjYhReJ2%2BMcI%2FIHNS%2BpVB65xruzVldWkfHT0uMTJDsJsZQnQk48pw9gelMtPQoPLVaJ6E5sYphC5VZcT%2BYOTSnh5s3&X-Amz-Signature=70cf9f65d1892074a973d4d59477dfee48c48e7912a3db307a70ff995dd169ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

