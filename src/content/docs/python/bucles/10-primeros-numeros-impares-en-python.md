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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP4YSVDJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FOm92qp1cVJwt%2BX8%2BiV31rWUOmHU02Nb9ZxTbzN6DCAiAEXb7i5XsLQz%2FQQSb37voWtNH0jrOaMo6yNFGOR06BwSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMuEfoCINGtatn5wU7KtwDHckvfmj295NYRJOHzd9ubTXxEF0yqArKyb4viDkI90sY%2FSQHOr3fVj2oeJLExPExXaJbMr3haSct6L%2FhOG1HHgii5UHE7I1a9Y%2BiICOVQKyWEuJo4eM31%2FLtBGCuc%2B4iRVp8unGjzO2JNbJHWc%2FmJlYBS3bHXY%2F0INf1LMr%2BrwpBvvfcuXRvFhO3OST8b3pYsBX2xFRBfAzw%2BMLL3%2BA00QkGuCCrenq0Zuce%2BlEVN7fx3pDgp3ugYGtTV%2FLyHAHXLlU6MUL%2FCsfxyjq2BY7GphvdKvxecCwr1jCy%2BNBJMaXIbKQ8cbxx41vRRZmA%2FdFzE1siVlplL3yzW2DEC9U9rDnQ3YCs%2BWRSsuN8ahVPk9thHq1FaVMDCtyXvna1pvHjPAkErl9lMH0cnNtQX%2BuUk%2Fwy%2B987S%2B7R%2BAm5O%2FBho8G9CUkNh5g%2BhsoNcmfciV%2BDfrX9xDRk0U0XH2M3J46O%2FEPIkl8Pe3OcM%2F5FfFdRgVFLONaLScPO63M03ziBnMhjT0OWoP9uMpKtAT8m1UFvbMZwyeZQCU%2B8YEGtA62RAJJ5yVYlYirzzpGdmPesfqU39I%2F%2Fxt92LPqHKXpSa%2BlHoX7sBFuaMMk3Pr00PDSXV46JmEPDPjVU7U%2BnvXAw2ObLyQY6pgFKfC5GW45%2FQEbwxf%2B15AWNtPVX6KCa5T5cmKd1bOD%2FmUkwk4HT6rJg6HA3KNAeJLqKKdRaPv6913bCVyeYqQL8oWellzKfThBW06H0HiICJbqR9YNN5YvTN23Yt%2BUdN2WQKRM74gko2km6uQiLh01tNz8gSkXAP3Zyo8T28aQESE76EEXP8krMyzhVvFKeZo8SmOsbBJAaPrEn11qE6vlf%2BxL0tUdq&X-Amz-Signature=cd1f7b39c24343675c16c86e4d743993ebe3ee93bfe8689472efa675f1a050a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

