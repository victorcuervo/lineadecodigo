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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FWU6YW4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1PpZgYlBQyVHRaD1%2BnA4YAgfbSOrpNr6Sp%2BTd18XB2AiAI5vgg3mIF9G2sWcj5srGnFvxQjrhm03gDVWiz8nKiTiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8x%2Beoj4EreWA1NIHKtwDk7ay1H304yiDuRZe6R4T6tNtGXJJa04w1wR4fyp00SaX14%2BZ2B6P6k2LiaMyUfQXGgJIrSiTOWC25%2BkVhY3TCAncqMRphlth%2Fyur%2FaBkXTpPkPZcwJUnkMzpx9iuKwDr1gZ0h%2BVzgICcT6KDjblRg0MzwK8%2FSFZ1MqnDu6ug5Nhy3si2w8ludbvoOKdeiQXe11UFK0hicucZpBnQ2yPwA8H53aICHAI%2B2TUf9Uhh0C9%2Fg1y8DvFc%2BXHGAzyahPIf6FIpHzk%2BYeg8QSBcWL2nZHRZV8ef73xFpZbSrOk0HMtSLAeIzgAZE%2BniHEbm9H8l6LlkFq1bBnwUNQxBk2JMbVFpOOQkgTcgvdX%2Bkwzw1hQe6mD%2By%2BU5uj5gOHMAbQ66r4%2FAZqdBMc7zysKLYoCBLtp7qHFF813yQsxI05IGspAwOqqFafh2LQ0kWZcqR7CgOAY%2FOJtvJ9erk839OGgdPdfQVO7twzUFlFINNRFkJfL7xRWGTUuEP6x9xpZpdZXtNqc%2BQoUgXd4OelrsBQuGJXuearntR7o4%2FQICTAp6B6g5%2B8pNvfeYd3TNXseMf3B1NfkDdPAWn%2Bm2T0YHtx6avjd8mGYk8QY%2F8ssc3u%2FNdDFzT39P2y4zStfP8C4w%2B%2B3ZyQY6pgHtWsEG2kfmuNRgFwjAH%2F%2Bs9N%2FPtw8a7q0jsuQn3AWSNWKAVX2N17LC%2FrAp%2FHsBGuDWpynFc5IBdtIF4DTcz1CrMw9xG8MlqXD%2FY3Pv4aKHj9tvHg7x0vl2%2Bny0qbB1yTtqyne7%2BHuUT29NxVroh0j717HbtrRr0HVB95AI15CD2PpTf4ofbAn%2B1CuywaL%2FsKu8z%2B%2FZoekPfBgHIvE9xfaG%2FBv6RGPN&X-Amz-Signature=58783b907843ee96280ea2b0a908fff76f0af8d80c6793512f932b79b8397daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

