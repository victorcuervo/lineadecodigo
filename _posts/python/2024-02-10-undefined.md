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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4Y6E6X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCPlRySs8Xmd1L4Mi3bTXatDgKojGZI%2FpOiDhqlQSu5EAIhAO%2BaflE3kGjXnpCFxl495FfvckwZt%2FXi8muhIfCPNK7ZKv8DCCwQABoMNjM3NDIzMTgzODA1IgzHyZ0ruG2jQq%2BJb20q3AOFZX%2B67MjS0I%2BE3V%2FgQEy89FQqyaGAgp%2BoVmWJeRmUWu3fTjnAW1bGCCjYT6UiB38t%2FSxeXO8Py9ppRwqfj7zfLZt%2FRZSIFf7pHLsy3tkj%2BQx64y6f31gZzPssc02QJj1odecd7yUXl0LLuPgji9IG%2B8Q9FZlDq%2B%2BiHMUihxLVehhiglD8lDHHwS75PDB5Slp5hfYve7PYbhoQINgid4sSC33F5DE2krfir7ZuQKb05nSY2HXVj7vhCz7ncfVYBPRB4Bd8L39fVJ6RlA9zCQwRVgEn4Fp4H0s%2BoXxSaYapvSCelBU6ZGmdpqa8sN47689eJLy5ZtXZ%2Bu8a1%2BfnWyS9BcfBJZuVmMtX8IAfvnQQAsjnluhJdGRB548H3W%2B7RtlItYKDrNpsl0kNoWvcRVDQ%2BnpzfbY3itwxvVlq7J3JcKbegg1y7dxhoQ5GygTxomTAgQWoVi46%2F4iii%2F%2BzXBaEyiRULfgmgp5lwS9qQ%2FTczdMOocHQ%2B2rJPKoPt1xKgJyRoGmp3ttLXa6UqMyscd6lkTVuB6OIUqUZMpCfbb8owLvc2o0a8HCyFebbDMhpBid%2FjIEmlseiB6CF04LVjyKTEhCx%2FOnkHMt66InOIBqqHYmhAKr4Z6S3rwj4gTCDr8DJBjqkAVDc%2F68XdWXon2Qzplvav1rdj9L6m0pKNU%2BzbJGMTo%2BuPmzHRdDsWDmwnix%2BXpSSxjemYTHGijs8AMeLBPzKwLuL%2F9fmud2H2pDcHXdk5GU4KX0iJpjwdfBaKMSoiiUk5Ad4mWJzh4eQXrz%2BrejbnFBokdrV%2BGo077Q8No%2FnixxIwmDdj5ro6TmEeTN6ESxPmw6igx3w0h%2BOUBcc7Yl01ValHHs0&X-Amz-Signature=3c6f77d9dffb697c8efaecc4e49cdda40af9e83024e395b99142c98bb8416ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

