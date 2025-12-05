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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVABABC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmIzncAFpmv2IeHvsjNvly1ueh8wxDif0VZSB0f5dE%2FAiEA7tJqpS37S2cBasV7Fiusry2FYxPBuFQRkLjl%2BtYNkNsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAO9BeWXgXr1BbX8UyrcA4bU5Oi4yZCq1PkxSJQe0vLLKSwclwMBQuToQNWo4pBR5XG4IYxJ1kgrHB3nF0noQ5b22aVCZKF%2BfZaespvF2qHe9CJvVyjtELeeLgymp3qDnH%2B7BX6HVMHOpgh5CG57BfAWEjJJ9JfGLP%2BEBdbuiJt%2B%2F9KCt1%2F1w0XT16RkhRLBGFF7nt5wSTiy7A7%2BVtzRGqeAVCXRhD1YoPickvcTMI5EshG2EsU0u1fuv1%2FLEbh4kjS4Cm4uiMGDSlH0pJiz7pIkG4gDWDCID90B1zxf0KtOyNaDcYl%2Ft1y%2BdiiMsilGeLirKwcG1nL%2FEg0hassf09lrY2QIcrbtveyhxovl%2BV0D%2FKzSc4npGT%2FCDlvoeg32hg9zNp8HvOfv1VbwWJUhQczA3Xxa4%2BXX7o93%2FpP7vvOv3yERL6gJ1FUx1ncR8CrlbEAgFflqgZ88z0QKHZ8WWAoBwYJmVv0NggLdpqgcskM4lBWLzIGnivj8OpM2J4DrCndCewfnFM1yPCbhqbOSYJKx97uUyMnyBVqPcYFMfvI%2B0dNI8McDHy1AD6N53hZMu028YE2%2Bagalwt%2FB9CLHJOrgKl3RE%2Fy387W%2FNxi4%2Bw79D2ZfVyYraVqzlID9KFmFLNhKVrJl%2Ff4w0%2F9CMJf1y8kGOqUBh7sBMgUCD5oLMGXxCfE%2B0BfiKw%2BLw%2BPzs5eVW1f3u%2Fopog7ztDCmzizYLudxDsqiBYCI4dFKco21B1PzL5JbLUa4vCPpSStUKthLBKxHv1VDo2ckoY0c6WojBWl1EFN5yAzUmrTA797JewiOlgUQTJ5KHsKCBIHC%2FZln1%2BXyZmFqwxavtHRBuK5cK1puGAX3C%2BN1H1k%2F7tRFO2i6eGAH8RxVlFGw&X-Amz-Signature=813a8ab8b1b895349175e91104f0fc27669a4961e42b31d5bdb933d501d0e256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

