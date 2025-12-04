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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YA7XCA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCsJFop6VpldKE6dB1aHGRY5p2SU0qXQmhc39FqlJqxQAIhAOsf97%2F7gPVvepJLpJq8oSXzoHBygXY3iWk7b6hazgL6Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwbnJTNqy3mVSNDnyMq3APBISUZEFCiJRf1I%2F4FO0QRruecVNaxHp%2BWz0yMzhCytresBZYqTGPYtwpZt852Z0B2AM8kzsKtMrna16t7F9REACQg8HMW4M5vIQf%2F%2FFqRhicmJA5x200su84ToIZIR7a1yZCwu9kBMtUGNsrqkwTorRLimDgrXy1%2BDBdZ6mxxoB84Kk2QFfd9tqohiq33JS9j2nOPtrAWDZAqMTFGIbHkiDqUHXVdXPVxgafpiZ9qh81Z4%2Fkpw%2FttyCcehPK%2BWxw96jbIj46UilQr0MVJOEM7%2BP3R9lOa7DHavFdsvowV8yEMZoa7saxp7p7sUULdJf5iRUH0hEHiwv8u0Nr8ALi5wab23Jbl7X26CAt6vqs%2FQZfhW9eORxXGkkh0iV5T2hi%2Bk2e8GDoV%2ByrJBxd89EBVcE27c3hCb5YAWWfR%2FCFMSrLAnFZJTB%2FwJAp6NQRzgRxPwxWCmHy%2FvBFvSO3b5w9Wn35pu23xK3frvloHS%2BSc4DXXhIVOoO2xQ%2FL7InnNRUqjg0xhieqfUllCQG%2FuNGl8DKj%2BqcT%2BKV2R7NHs%2BND9zOoH7VsXRujxehT%2BFRG%2Fg62LyvrJtdBb5QAzs7nTkld%2FUzyTFIvyZsyHmV5NuwlHofkzJTMT1O1Yg5fcdDDmocbJBjqkAQXNddVJRzECR%2F2XYHXz1o5FlucKRatCdDWKoKH2BrApL91C92T4gvnkU5DH65SJcCtLbQsAPXCgbaRuOfNbld8nsCcc4EIa8JNkF23u%2ByjzWF9w1rritwxeAdjtHM2M0irpM337SgSs3UbSpaSwFRRMhvfhSRrOYdDeVPuzeSLP%2BKNOKPFCRcglxNBLXEAv14hTpJyeJgZV2Aua9dPm3WQC7Xvq&X-Amz-Signature=6a36053777193af5cf0724f2d1ecadaf0abdb7bbba18d7d73d3ac2a8a7db065e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

