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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FQAPZX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8tGyJYiDrZUUpiN9tz0B8FAT62QNFL6vB%2FI5M3Dk4HwIgQdKBviVGQszcreq1uwYeYx78hxuNa6t%2FchZ4DAt12e0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDO50IQr4yrxdaaqmaSrcA3J3B5QRGwMW5Az9U4%2BAMeDmqV4bqF1Id7Sjfsg0sz0ZLaobieNkXpMf%2BwwL%2FlnKMxX93z%2F%2Fie5XR9UxYEkv84Dmk4%2BO87pg4CUNWiZrpI6k3BawRms1eHFCa7vezspl0Vikrj%2FcZd7QRjB5j7FFeBv2ygafNUOxtNW5Z9xGvo7lhr%2BSXbLGykpCGQA%2FpVvam%2BUjMGxLTmI4Hm3U90Dy%2Bn47Io16Eg8FNej1hz1S7ySNGryEwr1a5XxIDbsHggj3ckUqE%2BWHTCXIjgo3cv3Af77%2Fh4WwzBvwtXxiBfyUQ%2BtgTJznAvZSauvzAWxwoJxWJVWevC9zbvtHdvzcmT%2FLogblkF4IT9ypFAM9nRoVYajVTdyR6MqSIFEzxb%2Bpzsf56E1g152MUiknGDo2CfvjX6AF3RmPFFBzA49NQUANPgP%2BC7eNNM1%2BUpg%2FZIo3IDX%2FCuTzp6ncENQAHvJT0yTUtXFCToVU0uOv8%2FdOZA7QIomlVCkok1jsV1DbK%2FFAK4t5ceRPMOd5LQ2WLKF7hRzlLDtTKLxYef6HDWal7izHciqJcOWtjlo9NphbwbgJ2aXQdfFIv%2Bkiso8SEQC9AsQFtj%2B8ecFpyvjtj8yDqqKeWrdb4DLt2faZRrd5%2BWmdMOenzskGOqUBo7aXJFh%2Bxi7w6TDUrDUNJsiIwJj%2FzSc38%2FXcUNNFIgeVmxrT15ayH8kqc6ywTywJZm%2By8N1TqmJN%2BuoXeH5umCXGKa3CC6kT%2BR%2B7YsMZj7e3FissIwz3z2ey5BHSmZTxiZ5%2F0%2FdD9aZiIKlXdw485lAlhs02q5d%2BL36rrxwEZ3014zAqxdn2wuZgt5F12lG%2FUS6ng0A1HvQxNnLAgxXuNrFQDkbW&X-Amz-Signature=552c253487cd6a957f408e0188a4e11517248d430bee64514e6573e659565d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

