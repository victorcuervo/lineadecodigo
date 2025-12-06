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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN3A7GCN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUWG55QUD1Y1Us8Pm3IatMiB5Jol4G7C3OUHHGyDNYgIhAOEUUbeX%2B1Fydqhjf5Bo%2Fojur5JfksjAwvwTsnsx6nDEKv8DCHEQABoMNjM3NDIzMTgzODA1Igxn%2BKbnLaJpfIt9%2BYcq3AOTM9qY1GwUmaabD8WYPDAA85cCCFZ7c43fZNDS2afsXdHKGVqty2WNWX8lYCD4iF6lePG9TE6MGkxwYLZ76Y0oX0bk7yEQLPTQm2mQEwnyFTVUUH2CNVF55NpF6%2FaUmIdc%2BJN0US%2FBY9P7yD86Idj%2F%2FtdQW2Akzb4U%2Bi%2F2soGUc5WjL1la0rfAuXxIUh2Pi%2B1nUsZw0%2BTl4hE0CXOwOujPYXKwuxnCfNnnfyId9hc%2F2o92bqUgQGhmN5R8rZgypP5Ch2W08vQQJ9gjHlwJoE9GSx2iMkWK0LfQ9HRPcCTXB9oBMjNnA%2FpZCxQZjeatwc1eoSCnv1rEcmj1dvSPIAwcEsF4LPePzffcg2tXY9h%2FvnHcqgSvrlXxY8Vz9LrAzf%2F6NMh1M9AQOgjpodwn4yeWt8fa06FS%2BrAnM1mvBdFZGrPMvYKPfj5%2F0CrG324rgfLiH%2B0yeLa%2FK10ssTpfyMcIXoupXVf125To4lyE%2FVC28H0zszpp%2FhaEMxKN6VItvdTNu%2BQYdKCQGeHjy99PNd2RkkKt%2BPQPRMAwAkr8qLjk5meckD8EvtaU8kw%2F%2Fou3h5xb%2BMEzpbOlBVC8XdZX%2BZl46Hz4g8USxxRrcK%2FGIrwEtU0gUxfXTxovuBAXUjCWvM%2FJBjqkAWp17mzORjpcmG2r5qn0CwyUts7DE6y%2F4e590r3CQTrMMf%2FWLEPCS02cHjcipX7kAy%2B8ltCfmGiAYXcRCVDC0L%2FKDM7dkyFeVVmSYb5xeu3nsLP8Yv5eEbQHB2mTMMdmzI22r45U53Q9RnY9877bZIqtTusTx7fcBdOgRl1j3VPAIZwFsYx%2B35O5XzhPmBzA%2FhHBrObdlrGxdqCbhShIdfurcXyW&X-Amz-Signature=9a436d7634816c8cd8f9ffbf054cb6cef74f3e0b85073f822074101812396f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

