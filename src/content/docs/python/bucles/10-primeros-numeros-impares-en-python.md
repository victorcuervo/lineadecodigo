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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KFIOMFU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyLwGrC8esNTp0r5Q5heLkoYvUvzdIzVKx4AX1inxT0AiAwHCN70ARfwslDZOhhlatoJ6ouzjij1K%2FyJB339z06oyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiDpXKUZh2sZUsiu1KtwDmKHuknkkCHE9rfDajJkmGeosLSdDguIP1ukU3%2BYRZLyEVPN2Nuh4%2B7H1MPW6kPHZIroUOMw0h8n5wqVaZROHDWlWoc%2FXAk2LIv4O3XGidAD5xc%2B7R0gS%2F%2BuRqqwyBdpFssPvfpznJiVpSoPmMTmoBgckT%2Fb%2FXz9ymfmhuI9rmV10Ccc3%2FMa5sSaxmDqGaROVxqv2O1cFWG1W%2FES%2Bo5k12p1jhcJBMFAnbE%2BCikHOsJ9IwnwJbklGhatenth%2BQZoUWBSYDR3bQ%2FAcLVu8swD0BxQMT9Rnnh36vPXdBSXPQ54zrcbSAtdm5WLXFZVhlrOZPQcrmMLyP40GUYuGiUnpUumzKmzraCp9kJKuTszCs%2BWFv5GEfD3sso7xBFFX6WUu%2F6lva00iGn84zlrR3JlY28yz3QCilEkvaBlypUhew42EwuMsufDbiaZa%2Bi2fNduqMeFTUoyxpD1ubhUFbVJJOVHi7iiBINuxErrkpMmcGt7wGV05wTKhpFnCb4ZMk9uLJzPOs911KqpPK1Cc%2Fly7FTkSlSlFhfq2THbGrvYfIIzl1%2F%2FKFY9BGqLfQ8nE8JwEZ2IeazwRyz3UYycj8VHqC4rurmVNqfn2YvZwqgxwAFTHzBI0yagXn8w8bY8wubzWyQY6pgHjzTz4uCJ%2B90UCUHpF21kdVVcRRR%2BKbveBCyWPzvmBwt6Nhtv53UhIADSR9wDnNRX%2BmjaOB9pYV57wvxJb2gDh%2F7jLNSSPvonBmtSBAwVBAHKvAmBhI34pdN0hHzq%2BQpmIlMqdd98JP0V6ajsn1ofjP7UDYowLjcmlrVKr5SnlIBrUNV6%2FfQ3ZVgKPYGtWGdbUduxpgiVvcbfCzJHlDvl7D3Ap0xjf&X-Amz-Signature=e48d30e5c21bcefb3c9e62cf3b9876e9c17aab03455af71d00a025390494ed43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

