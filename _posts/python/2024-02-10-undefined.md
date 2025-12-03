---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665APL6O32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICMDeuDINRN%2B8KJ5gD1%2B4GsCO7FNbs%2FvorqVD39ZEYcIAiBkqoAae6RkyZ2sraNVwNcW5l5lBvrCKMavSMXWRxH2PSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMb4aOc8Z17m%2BZjoImKtwDfp3Hv3s1n5zlNVgX49OGLk6mOAE5rVALphvuHrnaVWDv6wEkTrXN6gWH9iPF%2BeAydYnMPZl3Z6wbQIV8j7QNAi5VedMfYpn0Kkaf9rQrZL7uIKstInzRI%2BjXxfvNXBNK71%2BaJ36%2BiWIAZePgIfTnkAqm3ahntRCgcCn38%2BdwAPZraiDi9enDhpdBgUnNB38%2BC4C%2FGfmhE3VfF7rKdM0kdNvN8iEym8cY3YddJmffsM%2FB%2BLBIioShgYYlj9bICWZZ%2FEMVoe4Nlk5%2BsKuD2GaMJdc5MLeYc3F%2FIt3AZumFNzi4RWoqG0RHGQQ9HYo82WLE0QuoOKVW1V6bZ4QsM5n8Jly3HBzylwiLI41z%2BP1jTW72xuLWSdO2%2BtY6NBpwITIjzuoFqP2b5J%2FpYRlSgGISUpqUGpIZpSAxY6jDM8aHv%2FdFgXlWCf%2BPW8TvkRFSGpCX3C4dxfweb4RYqS2Fijf2up%2B7DO7PggB2Jn3Q2Td8NoC%2FWogeQ332h6HIjJaHsmP08xWU2d%2F1m%2B51x%2BUJ1Keh2eui90nVU503DtlZqQqLd2vdxm4ax2IaRrcE8I30yjO8klQf9WzBL4fbEJcGaTsv0o%2Bs%2FVGDZx07aFRXdZtlTiHuxEFIvcnnMR2yhbYwo7q%2FyQY6pgGp46df6P499ei8UL4c7I1dUWSzsyzXjNt%2BYeRoHMDPbJ2U1Tun6RMd1DQd%2Bylcb9XYQnPb5tN%2B7PBkuopL7poUest4yEoefdAdgOex%2FjBP2r4G7Mx03mh5DhznGaQol43ReSac%2B24ruH9Br1n0o2ZzeLetK6ugq3WLSReHTTI07MfvzZNR%2BXLj%2FhQVM7Tf3JyiVF5iJiw0OAzRG3FzexZntKUm5zZp&X-Amz-Signature=909fbba2ccd219424c6ed0e85dd1c7da35ae765a652d83b679af56195f8b8335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

