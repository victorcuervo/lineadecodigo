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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAM6XUWF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCOSeAte8D92WXBPYrRro7yc78rayxTwg%2BVWmi6hq%2FI5gIgY%2F83wuoq6dO2nO8SYuXu4gVUrJegsH1XE7cTgSoko34q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBVfy7dINnskOfzhPCrcA7b6hGFRAwFmc3hVmLhmM2TmPoZcXXKLj4RxrdB15U9%2FMYQg3QlN250xXu29JE%2BsU2RNyAp0iKORwUW1BmE%2BAglBPlioMKb%2BrUHLsOM7JFNY6Zs24VykgT9qbc6LNFAEaGZ3CUpezHn4qCag9cxFTZETR%2BcGc9YfItHd66oc2yqjI12qBxBi6VcaGg1etHGuFMeSMm3fYJJ6wNSVU9s1gIjx65UAnscIB7GYv9F08cqR3nsPWdxytsjVd0vZ%2FBKAfmZSrgWaS9SNs6FABkwn1auZ4ayGWvX2z0Ejc%2FHe5hUdYQeGkTCKKjJ6AmYJ0dxN4xsWCvJDF4%2BkXoAvznAN7OUTidtgrdbUT9aI0FO0FhhqFSJNE0T6UUX%2FfEcYoSJ3XDxHU2vfmcfI7Q4DbzdAemdQgskUuQ8XhvT83OaNuwf4W7x4ghce7nnfYBG0QxzjlJFIVwEHSD%2Bu2HEq8a%2FtFVDpxiYkeVuf6vlY7zGo%2FMGQTIVTHYZClgIfVG0brfNlaspyv2bwk363AiKqSxC1wuTanUiZhCpExL3HGanGVsCouSCqUZz3ru2vt8UFRj6TAUNZenXHGpnBDPfyzg2iVypMaOFhU49Nel7KTmNvd2evIN0f%2FKWjWKkxQbyXMMG1w8kGOqUBE5rxk%2FYazF00JIg5DE4iarHaTiTHLeebKNc3lKOuka84I%2F4vxTQILfboVrqK9ZXloZNoJuoREgxcVXrz3sC9r9O4oXPjfG%2FCrAPMdnb1HD44rhrDjIatjoWL8wseAa8paAOPXVA8%2FTqcgN9nTl5FwS8nilfDyG0KUo26L1pwCkAL1cBn%2BOSSIV%2BEQMIYNCjpQJC38hGAN0KvsuKTPUiMoWt99ObK&X-Amz-Signature=ba83b44e59cb51616170701b02c8421c62d2af79209b9875c6224b41b414c149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

