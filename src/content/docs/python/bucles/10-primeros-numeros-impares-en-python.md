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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKHAWC5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOyG%2FJqwbaUEUbnT9e9di5NKgh75bMzgYvRyFfG1fHBAiAdbxc%2BuPw0%2F7nb4%2BcjkeAII3Yir5KYt%2F%2BkCHgVWJaLWyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMA8mM2kCLJNwRe6lBKtwD5Q602%2FUgUVeLgHem8hBmvw0a3ta9ye9gWdmP9y%2F5oh%2FSEs5FK8XfAyO%2BDhyC2wOUlvF%2BX21O5u1Vgl42j1yJ7L5zt4YBfV%2FB401dVtkGy6B%2BNy99f0mHDO7vvyTRFBY9De702V3OC1nGQZDhkXtsgfEFxqit7rURJ6C9IG9Pgy6zHGi9eySAi12zMsrvwI1g14YBTLVPy8DL7Y7MBo%2B4xM7ufUIkIlOoJ%2B%2FU2rl8twQAToFySt%2B9xSwi5XNHBRA0NaeSxozCU16mTXh3spJt27KaWv6evrnDRFMRlOlQeDxAAcu8d2h1EBSFShw9%2F4MqyAXM4VhWt8f2o4s9m137GQawRhu%2BreTRWl8EAKT27IGxq9nXURjEvzD0%2FF14XabQrcfihOksPXr%2BSHg2Q9K3tOGSd75YNefL02w%2FA%2BxcV7UfFmMVDr%2FIEfZvjEZDcIEz9mWwNSgrCfIj2m7d9UuKNSpWR4bv%2B2HJAflklqlIKW5lC2y%2F5i83UFQ%2FHJ2A5ugqWsf7U1qe2iq4xyx7ExnibgYA4x9YQAv0F53QP1s3jpfAmtwX9PN%2F1gxs2687gFbSxlBGO7Tw%2FCmVbwtKzo1yICk%2Bcjt0u7a0kCb7eyR1%2FvxVUVUYHN7mcDjrD7Qw46bJyQY6pgFioKoKvUg7%2FJpPiA8k3qp7%2FfXQenPmAD8AZfRwtiTFTjRk2EzS%2FScK8TiG5vyyHXQpOl6JBG31lItfKC0Zo%2F1%2Bx%2B5ShL1oke5BlYpzPPWarb1tUo25A3nR4CQe3pdtTGr1pgISIKssBfu2hQpnm3kKLIf03JkyBp%2BE0U2pv34JMMfvmlpqBkbOPCgtdrjkw9YZDq%2B4S00occMrtLD6XtOrrvs9f2tl&X-Amz-Signature=0408d75bfa70f12f343c78f1dcbf5135bec53136dbb6161a68864e80929ba005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

