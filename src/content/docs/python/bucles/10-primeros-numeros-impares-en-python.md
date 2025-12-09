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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644YRY7VD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBCNKthm4zv7guuG2JLpgUw%2BktoTnJSkuTK0iv6jKcOAiB6uDCk5BNkuZjEPcnUxfeHCpavXIShtyfNkzCwWoE1DyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTxLzGZXlaGWuUDnVKtwDeGOP8vzk6Q%2Bc3VGApg1BjOsfXtsVQ2FKbX%2BySHog7WBzzwTqU6KX4FN9FXnKNVd7xWgAH0Lgrudujkp0ucJh%2F743gT4%2B7zqjHjpS0IkTLZjXZMubl85D90S1tKKrNExHy2CLIn%2BVgLDCQ3V%2FHY%2FKK%2BunnAPdZJzvi%2BWym4jgRTmWG2R9otEreNlh%2Buicgg6M43zU0g4yJy%2FyTT7BSD5dPqH3kF6Pw2EJAxSgN%2FAekK68RTI1tptK6nbTjwZ%2Bs0WGrTc3dNqsMchNeSdoHSGPS%2BGTyWfcaL6zoRUU67Ife4Wsmbwg%2FZ2n53MjXSzNStLgyzXhQwods5fNiup7x0jPFQkZNj%2FKZEVr0vS%2FGeytVPYDzWH5CXMZsQynvoxKivCXS4VfiL0%2B7BfnsR8%2FhZRqpDpsVu979JdN%2F3jT3dD4h%2BMf5GiXd%2FyRqiP9qrPR0awzvxSZD1ij067GlmoN2nWL3PiUcPGPxQIGYYhKGXwBH2YrIcFX%2FEX%2FKSuElFeqAgSjlSgIoDhJeISRawVuq40xuIMA3gE1pBqHhiJWjqFvSuytswBfsX2gaa8J1l55OU6Yk%2F3DkrTmgrT%2BPrM98%2BPEhnJMajBwxu51MPNyRMk5GsQYnqscIJtWGOEJw%2FYw4eXeyQY6pgF0X2TT0dE55%2F4y9iQmOaHDW6QVm1WSjaY6iykzFROdiAV%2FHBYdcltF8WnwTtqAitbEvvYqVV4zu61KbdIWidXDds2ODJyEsK3m3Pyq7uNk7hivCSdbA4%2FgyjkL3iAlh5C%2FTRlFNR0KQct2de2%2F7vvp27g9%2BXbIj%2Bi6cvOAShDu3WfaoEwSWZw%2FAojdXQ1IcDucqI%2BGLdv%2Bw5YyvwGrhFuMe8TLaf7r&X-Amz-Signature=c19cab9c73cb315b0af0c8e580971c5c5decf07ae809da36575563d664625bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

