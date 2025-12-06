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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLVM5YII%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQL8H52FF%2BaoNdEUT%2B0nnlspn44cHvzX8QIFnmEECfRAIgT54U3FUWNgZjTk1JutT65Z05PeB9B%2FLds%2BRuDjhP8Foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNavHJtJu3RDUCe7SSrcAzPSdQC8bybLAcFQZQz3jRyINPhNp6fc8L2h%2Fg8lLT1DKR7dLGXeMGna1YX61sS%2B0JgFkiZDEJnvJszjiMcL77jwCSYMbB6STrTJosDccyee2ivoGatu1voTjG3JSnNno5zaVuUyDw1lBRddIhpezkzwr%2BksGPPUQ%2B3%2BhLe6kz9XD1wUFsc72msrr9PI%2FM9%2F7DJruZy4fa%2B7H%2BJkyI8B4JjZvSXadNzkOtd3JPa4EXKaJMC7%2F%2FcZ82sQccE0e25%2FSg%2BPc6UtxdyzjKJik7k4JqAppHsxZTJwSgk1bqxVzMwX1gmOpvRkVDixGMoinYh2nBu3Eaw5nzzKraEmEDmVJ%2FcD6MiwuXKjqFIbBRJ0TtDSoWmFg3%2Fmv1JgVAzpm8Q4BnPW8auEovGdVjtnWage90vGH9gI%2FDDlu1u8SZFINx4m0DLN7kmS415lYwHYcjuyRUXGnkp2hPkJ%2FQXu9kMTY8wrc%2BtzvQ0pQw77K7eOgmsUfUPC%2FX%2Fm66JjIes2R25XfLv6LMxMk9xtXfLSxNmEwfJPH0T8fi85mvfUcTJUmbXcQ2bqZXk9a0ESN4oWqAHCNaTQU27BVCCS2kWQx%2BRqvwxVH%2Ft5RKFWJ3ShoRApvt5aB2zcJID0Ge1rtkk1MLvY0skGOqUBhcDInvZ8J8wqhPph17qsYoQSfhs2dhrIJz3M0QEXpSMTPQTmqMYD6NN8XVgjX5s45J7qrjNiWjG8GhPvlwRPKwSEqi09EAW5WHz%2B5aAaVCJ9AtEZP9lwuK7ikO0Ep5QfiwX%2F9TTSqVyK1MoUrq5ErllzKNdEJljQ04ZhppX90vMxyVad3cn8O1VfF0V%2F0nfeEeV%2BFzqFHVM9sCtGoMuWy6g5nymy&X-Amz-Signature=e840332728f9fb8d90eccbbb619b22f198d053d79fb4298260dc1128ac6fb119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

