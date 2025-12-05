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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAH7DNZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgU1dj1KrfuXJdE30YO0rCb5e5ZvssJDNG5%2FghWuF9kwIgWf%2FFv0EpJhD0hnmY%2F3AON1a%2FfzK9%2BiUNQ0VMFaMrrYoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIg7VWr60Cs3clG0USrcA53DJqOrxJobUFx%2FwNmolSQUsxLxc7GEFop7lbh8yVTKIKqChBaMsorO0wUKuxnFMAEItFl%2BaFWP3wKRLyAkbMFiDcPXfM0dnFMgl1Wf10EoNGazoIk4gAgYwSUC3%2B8Z34STauX9cG29jjkzQbIagzlIOMdVhqOvOOu9uZi1R6FRAU%2FrGClFhmmDN17Yf16bgk8ypWwjtACa2Nafa6BDTIM5JE6Vb9UIgzIYFayo7R40%2FRsaMoZ7D00VUlfqOV8DFOhKiIvU7E5fL%2F0rR0lD8wiz%2FvLmWpnFmV%2FgafLcg8xleIivIW67Rmn2h7l%2B%2FdvNK9ek00rOXehSuLSER8EEXTywQZBEbEQvHE9sf0WO1xDV3y65xKfHGZni%2FD1OE3BFd4Cj7rztRBrApNCbyAPSV7zlHXOEZCEcPXipCjtEjn2%2FmA0cyoERO6Vflc4hdc2BXFlniweIQrGFlciXgbKFQOogBdZqFc5ytjUfJAwKuK1aKgb3dtHrr3J5FSMHHQjNl37OlQ5A6MjYALV4y17Eac4Dz9wMZiF%2BNTgkWx%2BKfkw0%2Bw9mYK5CNIBY9c1jaFyFf8K1PRqS0rkShLcZOwjDqR9WWyNtS3EWN2BRgAHAii0MSNEl1ACQgQ1v7TYUMK%2FGyskGOqUB0M4AFxyYOMArfT6ZfR9Y91NAEROuQZsYl99o9gi57NzULeYv1n9MTDHjJgxEy3PW4dfYJ0NjhuhdQACTXc4QesAPczgFrs2mi2sXcyDRiUpMr7gBnMz%2FdDWntEw78CA%2FXxK6UVdX751hFppBNx1BL8U8SstPRxNgiPE30YZScAYvtdHhUpObVDVVJjnchif1Ck2SN1vRGi4voI21UiouxqmGFgny&X-Amz-Signature=5dcfa2d58b29fccd4a592f2cecc69843e6487a6a15483d403ff309940f959020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

