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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGGTV3C7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ2Q0VT97meVH0ETGyegjqFzKW1QEXlC84NLDHyx4yVQIgS2oCjSOeYBAKpNs00UTc6y96zPl8JjHTdnWeEtpu5wIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP3pHUtPwbzkrJc5ircA63XNe1BbEA6%2BiiGsNRmbQFkmuTFDOIhTCE1vzVAKaKaWkS7K0rYTv5PBc7Qvkf9P7bbJxWwmViUcbnDkyPUpcqsnBgE0qxzvdMl7iBT6%2BTgagpyifbSKfxiK1K5ZwGus9RwUaHoKg21%2FX94OsqS%2FxtEGgew1%2F8auz7WxoxXE3yyVpKEy%2BKDmjIceywzcBg%2FnA8G0gWuasgqhyO8HSvbUFyJfJA3iVqOLLas%2FPFrVpBzx60NH1HaxN0UJUXEp9kMtt8C7svjBB91%2BAQgM33jU1z%2BpEEFst8E%2FFKCfO7Xj5Nh5%2BAIFMymdvmL5h2PS5qPreRUY0NdifAexyAMSz7rH4rp58HZOwJFcWIDkUupuQAAbAJ4XQSHcLNZfA6kSKlh6uwYi9HmxmOU08RTv7OR1Pd8m9AAWeruqfxzeAUWCyw6uFaJ64HmSW9EOP9suKWhQRyh7kRErwOi4KGqSar6G4jXeTKKrhNTAPncBIWWOAQ7DKrY%2FsFbaRGSjbOIH43wOloNuX%2BO7fF%2Bi56CPBVCmLA2blBq3g%2FptWM%2Fiwb94Pj70UZJkIeWB%2B3HVJETJ%2BVTdl2QmX5wiAAzwphGEKOySMLkR0sVsC3YXM%2FVtjImrJ6u7x5y22p9bDduVUKnMPLp3ckGOqUBerz0NLkZIR7UFov4NUmOtiJ%2FuKAC%2FGmYzdOQ8Xpp2zDsZn5eLDvmUGp9tvBDTmlNet2Q6UoqUP7LVu3ve2DTisxMXAtvfkkzH51n9cyzUAXQBlgSVfbwXvcd8JrDlYg5PhHL4xNMc0bQt%2B3snJiQ9s0Nq8jL6Uyp2n0NKNQ5HW1Vy5uFsYsfmqQXdgHK0w5Z1%2B8K%2B1HpGicf2RmoUW0%2Bsb9g2L2r&X-Amz-Signature=7a40b2b5c7533c495f6e25f502c0cb7cdca4dff28fb5b1ee0ce1661c1619e4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

