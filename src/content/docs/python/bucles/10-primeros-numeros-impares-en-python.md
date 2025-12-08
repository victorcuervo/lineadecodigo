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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BRUQI5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV5hUoHtLGBRpY2ok0teDdTZXgUuL52OKQ3PuhI2O1vgIgbBv1L56DsVYPBd9%2BhJ2aH9hfOAgMg%2BQ2cyKG8SX6VXoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0rEFNo2JFsf8WDiCrcA1z12ZWxtr9WCd3AMb%2FS2LadQSxffh2%2Fwpy%2FUf9tX0zpKxGMcsYhyOyBZvct60lS6hnPV3sbk5LLe1WP2e66uGP%2BVA%2BAwzGfSDsXnfgdf9apBCamRqkODjNAqZM6zMHyuVEtVHUi5fVtIsrXDj92uBFXzd2t6LNLJd0Jv137DpWhMsTVsF%2BJD314V5H%2Fr9y5g%2FWNKdc6Euvjm40Hbwey1kqkHJlYFEtfo%2FgAmwFMONgF%2BArATrsAYXDm3%2FkZCQynVMTGb%2FXElP16ooY9O80GCO65ck6bWR3Wi1jZTS%2FiCSKqjNGOGV5Rhtavu9YePo1JunFCvfasI0lYvDN17ssp5Vewir75s6TPFao6hex0CTtBfNcTfB7vJa8LUuzm1eYHU%2Fq8edAlMWzngPmI%2F3IRXeG2g2MRI0golBeq2%2BarffdTYvrdQHlY3%2FeV0WUUGsciNxVA7ja50BJg9uRr9wW%2BeKMz%2FO5llTVhndHk8%2FDsjYPzagBKtSVbAu3yBDA5tlJ8cwGrrn3EAI%2Bq3zazp6MRkhOXQMlUPY4Mrrcw%2BnOi2G0l2FriHue245tgZ%2BBe1rlWB3XjCttqOTEZm9TlCyPP4Zs72LeuxRiTz5AlqcrfGxCB3wOM2YcMKx0fbYvvMK3d3MkGOqUBJUnglkhfeAJl4f1rljmq1u5HjISpufVr8q5wMKDov%2BOOXmJHuFn9Zy6Bk4%2F3mSdP8F1UQl31n6eCX07ygYhw3TLBlXPXdIWSHA5OM6kY1oEStGtQs0ikLPK51vBDXgtvwPBKf8xdXLr2Grq2LMie5WwkSFQRohg3bEG2kV5%2FPk4%2FUK0bwyJDENCnAWk%2FRWuDHcv9aG20jlzvzzqC7TBwZN5HE2Pq&X-Amz-Signature=3fd6daa27ec1154927e0f5b19ee2e21acfbe8c901e94a166e44531cb3960d8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

