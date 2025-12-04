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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDIWWEGH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCID7ZGrKcMktjmoQVsEr05zeLp734C%2BLku%2FKfFbABTR2oAiEA2YblHTlpt1jpH8Qtt5ifxwWDe3F1jb8pgR4y05OxLPwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDFI24c1Stb788WNMhSrcA70n3WG9YPJEmAkTrsj5s8DjaY8eZgcAT3m76JEzGL49iqsjNZnzdECvYk3oayY0dCK6q6V8ZNGB9at1NOJIv9fIKvQ1V5QCswUsftBPIhg2m5v5%2BdccY9pF%2Fuk9pclKgdfrUZLx4VL%2F3nbXNn3pvoc1Ws6ae7TioQlg99%2FS%2Bqlxg1e%2FbpaBTej6UYkrA3lewhBbSXu1kVeHnBZWJH6a2QVksPgHkyjpzGvDoIUgh8WPXiG%2BqbS54t9qKb3E2obRNKpZFBop6vOXhBhqnzi44oi4EuImjz5614x%2FxQM3zkjz1MM5yCxK5BPYpDhJ%2BORd1WA5fQ7FOOpdubdx%2Bc0skmet6tznyaY8Wnh%2FHukJyh7E6ssAOMb%2BhkDEN%2BSjcKsoi0xvtQYS3vJ0ttsecjt4nLgzn17OucK8VPC8uaS8T8obwlTqrYIuedFy6KZzu%2FRNj3HqB%2BLIzUcxZ4ET2kxHSRQPFUUhLNtABGzfiYmsT1eZ4AfNvQox%2BsRkpua7CMe4fuXoYPG7aTlAUdpgQ5Dp%2BaJ20RIw72epGbG5yraLufaGPT51L%2F8eTyephZfn0M06b%2BD9CGw3PPLnWiclKZ7I5bIhcRgrOS7xCiayIjwOthFaDtp9L5U9Xh7J4kWVMKG1w8kGOqUBEPMVKQ4Vut1kC%2FTsYe1dbKuGovLsuEV3O%2FKrGlIqvZ9btIHESCKN82v7orlo1KQpqv8m60wI7orO9KUpbYdkpgzoSn9s%2BVwTO1ZKZuzMEO8v2c7hj0LNWrFkDHWE5mYQnik2SbDbguhTz2AZ9Ng%2BYxFkVxshriyRDxc2KYkZ1Udy%2F4FKBtdu5OkkFomLKYokDeY7K4DnmsgsUV%2Fba1n8aWTiarbk&X-Amz-Signature=9b930c4d1bde6ccc8908ae62cc221655afa0c0293c21ac05024d25dc8cea5b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

