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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR5JHTE3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ8uR7Ks9HwyP%2FHSq%2Fgd3AoqleDFVknRCRXpygMqmysgIgDQjYf7NAE3Dlxr3367nna5dxsyqwC%2FfPPhNiFj8ggE0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRxw5D9nJ9j9w%2FUoSrcA62Zv%2B3LS3jrJviMhn1cErkmlUyl8fS6v15f55hWc1RpGHs860D6niglgHlEjl8ZAJ39g3bv6GO6qZ8dWR6wr1xfuiAfOAkSOmfeCxjSubLyxlSde6ktdy%2FkclxjT60f0ZOA69sjkb3EevXkBnHQdmlUazUUD%2BTLVp7UnJmLUByNlZ83cXjrGtdxSQHDChvWG1YxDlomGVB%2F%2Fsnk%2FNOc8IHsVyRUp82wkjbjbtCgwhS793HE6WL6PxZ2omA%2BwcY4uz%2FCr4T487qHZsgKUnQD6wt%2Fo4olXOTNZakgjyjr1GYn%2FcE6uGrsYGn1j40Y6UxPY4%2BzH8dGFPnu8hS9tcA6FChkbfJwYFBG7PkJPsx8L1FniYsERLbMHU6kiVNQRuakyhx4DsAA%2F19%2FeAFEcfwjF2Ra1DkUsLJLGqUP9avUZ7%2Fx%2BmQUo4gyLfPIpBk7lrBg8Q%2BGJd9s98nITeRn5yZNi1oRzj9SnsRmhxV1q%2FtGJL9SAyab7A9stJOwloNItNIkHDEKT0XCO8UtFQQ3lExF%2FtUwx74M%2BQEgxlQumulg7aHvU6tprKwLIhn0owN4Ma24bl0LqYfIYyEhKRwBPqsXTiQU%2BbQ%2F9wADp1AR36yMyzuuiHIRl%2F2wV4%2Bv8XbMMKmi2MkGOqUBPXd0R0EiteMxuR2BoSeH%2F3KbmQ2P6WUZ9PVLvMl8gLwzd60sSS7GNNzeTjxaWIDc4x9XnyYIKysnXP0c3UNSRq7jG1kHzje6RE%2FLsV50PxmNCr0%2B9QB7pQRHNckzE3Cn4dx%2FY0pxJ4EvDFUFlaGW%2F3wYOss82etha86yTNd8glu3lnuXS1QDFfGG0Sciv2cE9JUToT1PpazuwY1e1zeQVrnlOA4z&X-Amz-Signature=37ba7aa9ab439acb38cf64e0bb37400b894b0e37ba71fe6275bcfb96741636cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

