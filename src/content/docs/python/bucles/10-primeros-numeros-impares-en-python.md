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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUPEWGU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGf%2FPYXdSa%2BrVibbXxSa6zXxnnyLp2nrIofzr3qBb9nIAiB7CZNGO%2BGlMG0%2BDGMhLJFzqzX0O688ZLXTk%2BigeFjKwir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMrtvzN%2Bn2DRehRqRwKtwDh4uU9IiuSyfymfhSoxIqe9x4aEvQSVjN%2Bqm%2BLFrXAc2HjKfyaticW3MoJHzhuF7pjoDBb1xQnNbYtme38%2FjIRhuVbRrq0nutolzUmpVL7oqpIVSydPlDf5TMecq44Qw2p%2BOf0r7BM1gxPhsLxV6T8XUOux9F4tBHX1lKO4cVEK4kGH7vNmoNQ01IP9o8akxynSTVj9hPauQr%2B8MmoY14qwWoIe7wZQYIYpl0hSEphAg1ALSQaSjQ1N5ED1ks%2BCgYOP0%2Bwsa4mexjwufwjr7DUYegbWR1%2FP7QKGENGrxCRyiMhwCABIj%2F%2FZ8sUwo0e2ethAsV8uQ3UYvmWczsl%2Bi81WF6BPaDCyfbScDbBQWcYnMiN1TCe8aOnuxah9OUh9nT8mRRXQ6y2DOTOew7StpJkrf1N9ADsie6Mxxk%2BZY%2BM9CowIASbNT3rSwVAkIdKoPWNqkq9jLjjBXOGPysDxOPhvmf9NW273N4ujyA%2BcZE2UKs4bEqKHOmsJF8oJRJ27SgSxjHZaUxeb8zpqX%2FotvOuwACaWJlvLoPdcPiDfdi4gyCPLa61ha3Z5iA%2B1c2FDm5rd4iP4buoKKFoSkuEIUpPrSE2TpjchI3PsO0FjY4GInNslH1tjOmUojEY%2FUwr4PGyQY6pgHSOhWUemexb%2FX9UFH88c5YnDkLApETU9e4d6MWBsQmTOzciAEjwkJMOBDlCdZCNt6IlnlkNyOGmclwmB6P9XzXAKESw%2BOPJdIb3YW%2F0YfsDJ3INbE84jeu5FQQMJZfNxxayeHQUeBAm7s4w0lLfiRP4aYKtn67B%2FfsvHhNeDqJl8RsOvkVaCtzmWE3PJX%2BGFUVI0JiSJtmBOaMp88LEgLopgAvihV%2F&X-Amz-Signature=8bc9b4eea237aa1cdc3ef6441b13094bbe1541e7b1b5f2ad82427f310ac2692b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

