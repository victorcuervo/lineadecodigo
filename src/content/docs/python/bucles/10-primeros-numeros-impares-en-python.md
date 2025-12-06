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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU4IZJO3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHINoYN4Y1KRwip%2B%2B7im6e6JWng8%2Bu8AcGY8ELVap7rAIhAI290ulPEMRahJpTmuRh4l%2ByXoNHsSYhV9Rg5uon34E6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyWZ54UEaNujTjcf3wq3AMdFyPY9FgvLpYsuRhD9d55eeRxPopuDRuw0VYjZWd8WEas5V1G%2BWf739fUDPUm65qLzxr%2FLRVv29lKBYH8xlBR3TQ6p8herJXklGEksmO0r0D9ujV%2FI6RFnNFrvhgP5%2F%2FPkDk15elGvO28BROhidFiNr6EDGeGR%2F2Wi9naaf050LUUzNpgdX6w8JPSmdq93SbSofqeyBcanYH08yZiWA1pgEKVCk7tby6dkAqaTYzxUJdBYUpsjTEgFijGo%2BGETln9LX1%2B%2FDnFpL%2B68R53ABVq0dkB59Bw3fsMMTV45tNHjss2Y5C1P39iMuOqnIAuZwBhzQ2n1O1jmMuFAr2K4xECIS0PSS1%2BEVDiSKkLujGE%2F3stRgwOApUUE%2FARybZZvTdyBy7jS6m%2BWNL9XW32Zlm8shzmBaWKP%2FYhgZ%2BuUAzDId8Gz1W9xvt9oi6P7QHK4RZ9v5ncufrxJoCKcdWJ%2BS1Wm8NaVaeqvZiL%2B2ZwY7gx33z%2F9P7TJDPo6DlUuzxQcgbs7ovTgHxIV8ro3%2FQ6n6rULl8dNrrbsmfZ9kl7xe6S3HvjV3J5mpo4K7gbr1z8b3uZtekgEe3rEMFkpPTufk%2B89KeFhyqMmtPZTEfxxxCWhHdWCIslD%2BlQG9CH4zD3ptDJBjqkAb4ci%2Fuw%2BEoj7ts%2FsTe55sixbVvCqKwDpnqPziI9P%2BP8WXGPr8i4DVBpJi7dgDuxXKrdqoGAIeZR9N5czUMGDOgVGAwS1l0TVD70TVu6rLKPX78TVWEHjY6%2FLJS%2BUgzsTV7YAN%2FAaRa7ztra24eEO2OmU%2FqXlW48rJ5V6mkDSNZJBSXqKBS0opiJhB3%2FX%2BBGkYXsNxqliQ84lEdT%2BIn8XXBFBXqh&X-Amz-Signature=2d85d2bfc62fa7e41362dd0721f28493686f8f4ff2fd4cfab7500342e238fdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

