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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJPXEO6Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T082529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYHQ954e0EVVPj2D5mGDs%2B%2BVa0WPlN9S53DY%2FANb6bYAiAYePsyAVHLn5qSSxh3SL%2BRSmiOc33fUpdEriht4aqChyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM03KYgDe%2BfPsGJu8iKtwDskOg5zl5c8t6ENYvVjzQ7U1aZFFxh7aeQ%2BpGwGgVEv%2Biq5NIJv186MEpVgHcAvsdU91r%2Botv1H7uZ21xtiH1emuIFB0r8gSAOMuJPAgYCz51UMFrcPqd015LqRSQ0WrmsjtSIsCczPbARHREFBOeQt8YTEE6lAuZApP0cRob5s5ki3Op09EFzntg7hAX3mJ2UvTa1BFRn3QAF8qk1UyLQL0LSswbUa04I26OaXCDdvwnHyo79wMvyaWW%2ByiLJAwchh0S39mTWHojMZv9R5EQ56wled3pji9mL%2Fy3idsYKA4kcIfByxLzpfLCx1F0A4IfOZ00q9LZgtVnWDCuCVo455Xo9gblrkpqDN6iyfycubOTnFZAte9S5x%2B%2Fu5E9vKMhAGJl9%2FRzmV3FN4PyLlO%2Bgf95vU8yOGJ7%2FG7ScVfpYrfd0i5BDrq15l1Ji4nQbJ6AAs0TjOYQHIoF4ZuDoh4q%2BTm4Xia1Cp21jYxA2X1qIZO3Yv%2BW5N13aKO2ukswj5ak9dGOfPOmkSDFJuE9QXHomZn%2BiafnsbA%2FwiPzqauLi%2BkBbPC%2FWDHCNVAd52xb1XDSEWLY2iwyf5vTJDse%2BWIGzGKPvDa4HrnTWZ8HDbTlkT%2F2437RN7jC03KMhdswkO7ZyQY6pgGF7VqVzJlnuYfAvtdXOJ2PVMSpcqE79hyfoEQUh4k8p4S3Zkpl8NdkAM3nSL4%2Fzvv%2BNWbIdl5%2F%2F50emIJX4Fx%2BtCslcz78M7Kv3O8gAkWFugcGlsde%2FpBpoeNr313slN6PHk8sMXx5Z%2FlmBNQY2hgQKAJI03O1v0rMnAC779fyyyVPSts2HNL1jaWDoKjeuYMYYw8IZpNrh8VfWD7X23eVYLcEoGv5&X-Amz-Signature=02b57d2ced726e0328e7f258ab68f6f0e368c3be71d7a621e198cd9edd9c0f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

