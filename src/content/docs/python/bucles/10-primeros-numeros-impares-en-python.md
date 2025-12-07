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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIEGWHP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T080018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9A%2FwKhhO4xUzoQkt8YQ8NPqDwoJ9aGnJC9Ph%2F9Z6RLwIgBjfeJhNdEYvpqgT%2F%2B3zy6mO0%2Fv5iHs1rN%2Fp8mufokGMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjGHWXawdjhfclScSrcA3%2F6PGWQQVrP4%2Bc1cmKnUdmWGUYh1qax%2Fqra%2F%2FJiX1uIJ15xeFCr26gT0saKM7Drp8hpIZxaP8syeQHFL4gNt%2BmIa2ibEcZu5ZDTaHGX6zbxA5eMSuUz%2Fp2qhTML6e3Z%2Biofzl0iAqnhVJHa2DgN92nvBl1e37QooTpXOivxOoG5aHVwjv3PEUkCeKqFItJE3meG3dytXeMQY0Npi3S2CrnCpxg7qjIHfvhmEOzwbNXFMSYqbsf7ZYmFs7k9C6qS8763nqFbnKToAXbDcBOHtYlXiHETPHXFeMkGPRJXej3Zg0R3aun0%2FHIJZN8tzFeezc8GRMvTtriHeAyd4TO8SNz6JvDr41eKpf0H4zWLut6Z8nynyDwridwCTiUv3U5DJjukV3Y9bXt0%2FrWuY2virvjljXlr7l92vvt42xLLHC4I7hkDSF4b0OnHZMOtZaEuMt0yB3c%2FghHT92RhnSKA5BAD4%2FcDwEO8tvkRqUJJYUFk6BvDZHmBTZMXlEkL5KkCuVyeDLp5zsL%2Fq6PTetzC8zoy1GgvbinHqUw1rajxIz1AKMYcwM7pu3YuKM1DVG17RX22dYA1JJTcb2fizrwF%2FYimmWF1TeJTFQRvXh%2BxFUkfEZgl8PvSEWvzd4KnMLqb1MkGOqUBEFaatGwrUfjAAU4%2FD01HpbQbvARbji5cf3lO1ihKyz5Icy%2BIOgI8tTVTOWGPjyz%2Fl29O8XnDBSw6WXickIDP3Sy7QUOSZfX1Z90ob4zRfiPpJj76JbM8Sm9WTZNNia39XSCKt0wwsI%2BewoH8TxVdnsNq6pFqEDePmCtbkyVdk40YhhkZvI9pHGI7D09LXLvz%2Bl8DtKHUy3FXaIVPJXZQhUhGCP4T&X-Amz-Signature=5d5771472b4e52d422f3042f9866a1a54aab66d8ae6a53b9d8eaaf0b3cc3f9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

