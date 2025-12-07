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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JPLTN7I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAbLhjHUiM9m3CWYUclWyfd7R7dkGIaDarGlTOaNcOEVAiB1fp2BakAhGGSLWxBF228AFX0SPg1YbcpHy5xDHRNPtSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU4KsVcb13LtXPKVTKtwDhRrKT0TfR5ZLyAhh4JLuoB%2BEaDOVwi4hvlPF%2Fzg4g0UVkTEjBuhG4aAXsalmy%2B6CTk6VWGtwWs0baUByGshFSvN56NZoW%2FIel7AuJBLht7%2FJVC6iwEfYlpIjAZtY7PLZE9v0FpEPfYBG8kJiP%2BFxiMZyPjGc4GFSp4HIcKLA%2B6SS1MR2A0%2F14A4Lbox68vuOX7mfrV1ynAezJQwA2lhl1QjIClf10nTkuiJCZ2IhbOuUxCxknR2YV92YVMWUvUcHuLzRoBRz9fcmGVwTXrqTBVLcrnyd3SxAvR9cG5wQtM7%2BcjAtJMQHCtwYeVEXfqhLHRj4ml7MO3IKbxtLJmsLpjtMFlReIvJEevTljLSiK%2BBOuBUEnTQPYM9SUyQlwl0zehmXPyUZZBJ%2Bp%2FL41HQP%2BSbaUsNt0zJ7%2FOSHFf4S55n41H6KduvZp4TRnclkRaOM5Toejgk75Bdn%2FUIVUKhZdzRJg4jxpniTDRgJpSB1tkiqI7e4C0IsvF3ZWF0c2Uo1UjC%2BQYqgEjA8pYDIhVlFYVAEToKowWws5sB%2B%2FYFn%2FslT60N%2BTFjJp3vVW4zljiXAahef80rsyaUb4m7poGOthsQTNSsz76qw6SMgJchMnUByUpQ4OtnTK58EUakw%2BpnVyQY6pgGu8Vxoun8WNpyBr567lV8n8I9sQ%2F%2BOKZvXrRHXP3sPOo9JK%2FRIIf1ceJCKtkS69bl8R65bOPjTSHR6v%2BCscMBBQ5lpz%2BeBXLtwLKQAvqX9neA%2F4HCh%2BzKdErCtHkyQRVoPVhgA7H9tp98YCDZ8lmj%2BYurv33XY3%2Bj7ES%2Fn3ejuhPHK%2Forp%2Buke9BDA0R7DGl1ezazZ97ypJB8na0Vf81GhVn0Pg1Zy&X-Amz-Signature=99f253931fb6331effee2169e8305e2ebb01f5e822204e7d992f2a3340df9dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

