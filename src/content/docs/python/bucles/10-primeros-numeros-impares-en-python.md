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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FFCNHA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJYYCO4mzu3NmPduZi4%2BIx7rb6kgIz8Nc4FwzKvrFfLAIgcBsdJrnJKmTcB%2FLUHRmDfCIiFvFqjBXEtFxydvSQHD8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLtSJ7A9vvttG3LICrcA7Cj9bU6K9dLnVGmA61bK7%2F%2BbCvO8Jie%2BfeHaxWMKU8vD73mZ%2F7g5%2F4cfUMGy08Ix4ZANwpd2HDQZw%2BHQHyPBgZkNLduy5v3pO%2BciiKQL%2Bw0Pul7jhVqPfg6%2FPogeBT53suAIaef0L4rZjJOegP4CQMpMWEI2tjL8rCf8l1iV1gP9yaxdyFl6zjZUIAP10UGiZV%2F06DpAXG0WQVsTccKi2fYpSwg28wLTcmAJc42%2BQCCqQEwXDmwduC5yJk0Nw7h9%2B7Bv%2FiC1yrLlP%2F8d7Ya1PqbRAR3gU04n4ChoCI0t3DZBo%2B9eOoLl3c%2FQBnERWiFYRgdiMlZqEXebjb7NaFhYUAYBm9VTjjFvZbgzBTeiSZiUGFSmjVaq%2F8WLo1Kbf1lf0S6kvTLD7ljeH8NfBxe%2FU6dH3Ue%2F3hxe25lLwPdBEDkrjcM3NGm%2BM0BpTAsb13tr3LRMD0sX%2Fd4b%2BHk%2FxZ8bu6ky7y31xtbUUTdjNfvmjqfQ5Cu8USd8nIcknDfvc0gNRZ8tVO6pr2%2FaWyS34Alj4BwMncbpujPDPt32TPxl2%2BHqCJ0%2Fy56UnBUy3Jmcb4rN7a5htnClLAron%2B2k9ITbUU6VVAloaFmAl6xZzb%2BR8MEtuE%2F0OnUWB5SwkjbMIGH3MkGOqUBpxDkXLiahTiZAon%2FxrvTa7vimUSEztUs62AT4XO%2BlD2KKIBs5Dk%2BvKHaaPepzKPMzK%2F4TL6WseKlL55EtHTRQ4AAvYPKUZzdSOyJLprRKc9PErOgoXyobtDuy77wRI6S5HwxjRPrHJ0mg4KpvqzIsfRVndwf8a7HSX0Mwwy5fv9LxH6M%2Fyxn%2FvALreFS1y60%2F%2Bybg7N8k4Qlv7e%2BncUcdWOHPxE2&X-Amz-Signature=3770041c776071a528489885137d659d063a3ca780be7187b6b02ec77481dd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

