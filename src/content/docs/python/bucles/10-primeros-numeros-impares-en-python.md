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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFB2VNC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9b34txB%2F03XW6s9r5USQwA6jnLG3j7pudWULcSPPcnAiEA%2BPlcUYmeEPLPww0YEWk60UdUaNVVVBNKTya22FBa9rEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFTYqBOt3oRPYYsVhSrcA8wmxKuW3DgnlYO7vk%2BMAj3sUy8m5RMPpqQIlGX3JIdg3JbVYD0s2RSn5RsJec%2BkuTD0eC4crPNpq8kYWNs9NCz%2F9T95P8EHzi4jipxL5wWxRBoK%2Fdk8MmfW2w9Cujz%2BOLs36biZKRomAqFOkcnQggGSkdCuBNdbSgcWG8YFWyrlj0WOKaEKYP2ksZVrWaZUZKGV%2Bt7jhF6Krim60lT6KJ2rTpBU156JRfug1KY6wABJraJommkPPVLa6ZdLw168sImEpHCG%2BenV4JQm4DPlj%2Bc%2FRLa9jjhn33z0q7laDGWnYLyQwivpq1BZJ%2FTwRZ5u4cfpbfsMWFn7p8HY3RirPBurokWUh0skNZkk3%2BgIMUVs46wC1Uwct1mQkz9UJ567PbniRBQiV70x85qwjEUUnNUzQbB3tzcldSpghJeRZCJ7TfO468ulsVUPFnDI9e4vhw2ZTnwgVB9E0%2BaTQT3HI5l6DS8qIBW%2FE6aPmC22Jf5e5gQDIGZKli1mZNtzZiYy%2BZizqCUvG5CGCO0mfd4vFRkDpYb6MD61Z5MwmgkZLb1dgR0e7IbXeSf9Qf6LR8wIr9ianHV9pg%2FgzKVrm88M%2FwKNCN9Z6MaRf3Rk4neBTghPfpKtY%2FaWCjJKSQNQML%2Bez8kGOqUBSjSRuz9P9qvAfInhI%2BarRSk%2BjkurKC6zy%2Fpqu5taybPZrhZ4U4tjadJr2C09xTWogkMy7nYmycXf5kSLilgy3Fk42kemfKDIWDegsbFnSBICCgmixJ%2FqJAJlw1pTlgbqg6H%2FOEB80LAF9dOccYaVv1M%2FvMsmTsDbpxEXvs2G3HZS8DE355BuqohrLxWM5n01PJ3msSAZtODDLpNtabOmHSd%2FQEsE&X-Amz-Signature=78c8e79c29898e89899e5ddc0cf6eaf00a771235670416055ac45bbff4c95abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

