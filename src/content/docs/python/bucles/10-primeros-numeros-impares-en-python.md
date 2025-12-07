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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U6RL2E6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBt9k%2BfN4cEZCRRhHPspPh5vvqDHq7Igqw1OCi1nffH8AiAcPPs%2B4IsBMQlO2YIdFgozGtT8ev%2FWX2WWqqafXo%2BIwiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1oemzdo2SUwRSa22KtwDQ0UMbSi1JP3JzO9UDTql2i%2FMKoL6EITBDRFVMRpZ17xdtikr9a%2BaDf6ExdJWQ6uDoJM8Tw0j6z8sZo4%2B4UJnLwzqSIz%2FJv%2BSyH5R2h48eGNM6sLJQ4Q74ProCiVNbdpKGd%2FXjUuS7EbiM%2BWp%2BUJna4h6GH4h3%2Bcu2SLPBl1PBy641EVr1sNMCvIpvg5fhs6AtZL70ULosuLVc7XOZCRHNVFLvGaHecCAusDFLFL782PrV%2FPQGpHHzm627GauVYGe7OYrceo%2BOydHZ6Kagit4ZauWDlQ8kcSdS2fxjKmV0eDRK%2Fu5xbfHqM59mvggWcB6I1i8IOE1ZxYTPLqlopP8pS%2B5dfdXWke%2Brq1hOVxDx2xNZ3XSnyCEirQuUtGmvhP7jWQcErQbWeqKRR3sgXZwXnGMHkhOVWW1s9kB1XSKP8irv%2BmLY99BVayDnG58aRtVwfWD2mIZDgT8jd5G%2B7LMrLLC3puffxHe5FdeRmgcdRzxF6CfQ8BTFCPR1Hcin9GIo9j1Dr3tJFTCMUcWzw0AeI1gpyWawemWnbO6RguK%2BX0%2FY1biFa5A59cmdcuj%2F0CEeYfCWjEJElJC34PZUmYeLCIkd27K%2B0vRMuLrDV79Q%2BFSyd19D%2BrQdyWobaUwvJrVyQY6pgFVBcyexdBTRa7BrygTyz7a2zwY3yQ1n7TSeT0QZkOSTlJgYTvQfBS1ggFwyUvnLyOrAwQvKmKnAOdzFUTf%2F2ckFpBfSSXqv1YsSH9FKg84pN4MGJ%2B0puS8QFrpaHRjgqMpD6wIuNmO6kNaestR0BbUzcSbkvQ2GFu7H3LXGchsYVwkXyEqmcomRhGwJvDHtBs%2FZ12bcm5iWIhNOUvs7LB7WoNLA%2BLl&X-Amz-Signature=899bccdbdf4b7e0dfb663ca7b1fd65d7f3eebfd58521ebe2ffb5c706c1eb34c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

