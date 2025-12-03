---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPUZJKVS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDS5rDh42LISWirEobI%2FQk71qS30nQhPLZ1ti7nIR8MtgIgMoL7YLikzRbS0ij3PGFzRkSKZwuYnQcS9fIp%2F9rpp7gq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFPBSZUyGjUcu7jukircA0UywMK%2F%2F6WSvE1cA0wNaf2wBsYm2JplQn4U%2BuxgeqtOy0JTPdEfrWK97UHrKEqcT0j7kF98hIKb7y7Y4tsJHqjJVs89jnU4a9hsdn04rB31wn402qJhro99W0qAtmJOOEchvcffqEH1xllhxC4njEloDoFrfAYWDfmzSLtr%2BXj5G8Y78JBFzKMg6lmXFNeUA2D7Kg4nThcROn9qm1R9ylazFpgoSz4bj%2FWfgkawn8sXN3uN8eA70sOQYGcDJFLy77IeDiVvFtd6SI8jcgjXoX7O41%2B74q5V2%2FqGnEZGL416AbBWtLZpvsZNpFZ5JAt7Quny0jBTVkijMfe0o3M4O%2FSuBvo7Mm1nAmCZdOO0toFk9105fFWpLQdybgv9AkTcqB9hTbHhZv0V5XR3aPljaEjfYXBWUW6p3vaY%2FncXPu325xvd86dObbvv%2F1TxFN7CXqSdAl254UNJ7mJkiwBs1PfgY6fLgCfYaiSZUSQY6iMHnB3RKIkWVttyI9RZUX%2B5V61qCRyNi62g%2B60uj%2FPZ8jz8GeILH1bMsRqFEt3m1Qji4igAXjy3pHJSA3IF1d7Riy9%2BV7u2MPvbCWJvLQ6oxquUkqtPuFnFY9V5ijSQylAI1%2F8BzSgo7ZvXr1MKMIu9wskGOqUBjqzSdr984M4%2BTE%2F6%2BXugotPAi6ExBumjKNZ095ck2Lm%2BA%2F%2BLhXyb%2B%2B2nnVEx8XncSdqAN8VK2w22MjN8BiNEBSMfqj%2FqoPqovmeDW%2FDAf9aM1B9GMbnXQBv6emmag3BktXIzZpv9Gb7lrHipgU0BFPtLIjSD3MYEfxHiHgy11QaeVZFV2dxC1xv1Zpf6tAq8IuVcFV360n2Gf75POyAXABOCJeWQ&X-Amz-Signature=ec0faa6f9367ec45c8a6edb29ae7170a23de0b4d0398e17f2919fd68f577f480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

