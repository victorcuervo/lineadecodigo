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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XW6FFES%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0MZd3pvVK7SToVPWuNdYHtM%2FeqlieZnxc%2Boc8pyECEAiBnuT1P1pUBrynKElhvsqEYUa8AOFoc9JPjIwX0QIIqiiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKzRFKlwQyIrbTVBwKtwDF%2BgBxQpga3jmm6BgGsdK7SbkLhMTu51gP%2FN7WjZzwm2hSAothfw7vlh0n6JRXjtszSMDenmL%2FDEX9WORNmdFfmjUv4%2BSzSUxXz3cX36ctp6MDbRT8L%2B5kRnl%2Bl4NDEtJu0CIMxeBmggHp3kI5DWRrz02zgDz0Pd1ZakHNz%2Fu7q4Ga21Z7TA71oZ2RoggOuHf8oyVwBjX%2B09Md42TOcZaHqzHMQzZSSGrQf4WhkxIgrge7wAd9k5mt1jUQdzfvNQvQlhP57LTS7nDhAwwdE1xkk%2FAJqsZkr7zu6nGigNeeKJBjgwaIt3E9ACUtMSPSraL0oEEMT%2BGitDd8V1dFZG7lCUmp5ht93NBY%2BC0LhRGa8d0d2UCp6SQbl8MkycAa2%2BUPXZ1fMFpJg8GWK5l%2BLC%2FlRuAqW2t7x5OAdw7XsVUJCImI5IjNjWJPMjS7raMgIxTbTprdxfB82IL7%2FN%2BLpeNeDIgyXktOmf2rioHk242knFee8JKAPIbR8c9UUdOYiJMclniaPNKM%2BnK0MMD8RgVYg70Wkp4q9Kln%2BFW112cUBUMhNtxUK1y0Ir%2BKEqNDKj9z2WjvvrrJ2RLPtPk3Zx4SEUhApwiOE7WFXU92MNMCEAirBCxW5lGtLraGH0w06TfyQY6pgHuORVBR9z20a0yXhuoo0i2hRwhBdyzEltGAy9o4JoLtsINnBI7zPLV7ZUZPXUEqrKCft3S1Yzi8ZJ%2FAzgn1VrbLO8Bowv0PA4KaUdzd2nsFKI7X3JU%2FIUTtilRW%2BsZ4KICOkd2xUH%2BipSFYmB2wv0qgjZj%2BUWg4zbNirxq%2FlZpMOgv2e%2BTlG%2FOv4pZbNEOo756Zc8YgjV7T3se6b%2FGd1BVB2qMiqvw&X-Amz-Signature=5a47f98265efd407c809c388acda4d1a28d9c6ada1c4b071069fe1554d043b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

