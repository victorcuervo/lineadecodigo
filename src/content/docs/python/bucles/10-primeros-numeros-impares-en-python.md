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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RQOFGMI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCG3J%2FQ%2Bn1vTW1O9PlO4f%2BSWy%2F9Y0Wb%2BunS9PzIqhlNXQIhAJ3SZb8OMjoTDIXnoEWznYlp7juEaUZ1jnymvX%2BDN9ttKv8DCDwQABoMNjM3NDIzMTgzODA1Igybbd6FO4E4CSzGBTwq3AOqTN2smLNdP95Sv6oeQtrrwGkDw6QL8R9liK0ciH%2BGmK670ZGZii0%2BjTpQAj%2BEHWNS6BsbmOpOCiTS7fP4KeyMEjg7QPim4lPLDFQhGESg%2Fo92VPIg0SBdm8d7PvAwvrSW8l3eoNwwXL2GIMcvZO6GmMNCBbnpvfcgsedTOPmddmWIOn3NJlMV7Op0UjfWVnGgyZRHZoa3ltTDJNgjTfwnmuntk1Z4jl1T4m3Zd8qRzdAqLLrThy%2F6Sl%2FPdNyRyXZo4jVZHWIP141L3wW%2FFOLQYgcR5I0HFh0Jkw860upXUw1rJ9%2BhgDG3WgEroxxZqViklL63b0iphf75vlXz1YLLFJMAcmc3qs4rJ9OsD3rkU3R389ems1qNZLdvkkzfmqvbWq462YhfXLQJltMQTxN%2Ber12%2BZZha4OWhvrl6xoO3elBUbl%2FJqJdpUqsfTisYLr4CH85i1IgXTobfbxNiNhckn84uGLwlhg0oCWSAc5wTIMVvqSq5Toxuib%2BBlKNOUXO0H3m%2FE%2B5JrLIxUq7%2BJ4COb6ja3Oie8D%2BhMKW7U0IsbZwGzy8LrIbN1bj7Kbdi0%2BGkHlNBklL5i1JZmL4JgK%2FbH8nM9bdwtyt1JC94nYynVwAnV4F8r%2BcJTrc3TDH88PJBjqkAQPuTp9Ub5CPAPFUQmfB0pCnakJi8SM39t05x%2BJcPNr6M0iPpshloppBW6%2BVUntjeaP%2Bzs6u7e9sLLuFiAMCsGT3CY0e9zmUuBC9ayygkOrl9OAxwFmV%2BO8jeiIPncmnxdUaoIGDb4f5WSPvc8sRbmF3ST1hY9Rq63j8H9FRQvT4msudPdT%2F%2Fr7gSQwBUq9UzfCzI29gckxnNTWiB3a0s9StyP2K&X-Amz-Signature=7644918ae19d6b29d4ad2791699e0e5dcd239107c553f7f93d68614314aefb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

