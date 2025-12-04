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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDEUUGK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFVEr4pU8pLXXdOxfIu%2BY%2FIPcjY7K6sTCEdo%2F83xNt6mAiEApzF8LAceqY0MnIRpp6aioIaxLmQEQnbXejKblwT8adcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOx4fR7YHXhw7Qe61CrcA0qPeIU2g4g27jKi%2FNY22n3okuCLJl1fLT1h%2FnQBr0Cfuote5U%2FzwUvsNCuaO%2FtMKcQ%2FfB1bgp7Fx0dFNQGS%2By1Twb4KLp3HFi0mZY%2BMNEHvKe7%2BmQHr6GPGuik6BR8YsIgsKkzRcgKtT66ghQmbjMMZ1sIrgHJAHKC5pMCI1Es2ES%2FRo2hi9cyv%2B2d1RAQvRpYmgwyEo83hxj9R%2Bo69W1sPpHyW%2BoL7N8X%2Fnaf%2BaT%2F9zMtJSFrdm1l1cPbPGdFySrqAUwh0z%2BzP0ZTbp0U3m7SYPdI8ZN23zT7eFOnQyQVe8N9qztc2zCpsSp8eWUNlSCZGGIkgqXfWSx1wgifiAOto3iasaHrigr7H7GlIposSenNOAHb07tO7NVd4YLTicKD3bGH90s76RQJH%2Fd2ATl3Gwa3zkjdT%2BrsKiZ7aVYN78iEbX1an4mLSwZgDdGFY7D5AcPJsbrwWnm4cQbDqLmTu1XdYzLoaOuvTV73DZTtO3SZCM0TCsouDb8W%2BrVY1Nr1wTScCgC%2FTUoAIS%2FC%2Fq02sRw6QEsLt0deA0qjT8gYXI3dtgUv6UEAK%2Bpx24n4T7Ol9bmmzC%2FocoIYlVdfbujDmSt43LupSry6sQSzwUJ17tNs6f2m8iofH9%2F6dMMe%2BxskGOqUB9bRXM%2FGvQfWhB%2B%2B6Lf%2FXtZ81IJ6T%2FhS53GzCY5rCbof873bR7HO8mM6BiedPi1zJwHKDvARNOyfQqSiulmEHzGcR7l9LspBUVHlzd6A%2FDpP9NFHPkc5N1VxvCRCvpWa632lsNzCsQOvcXsYReT6hnxGEhP4EjlxPlfFDtYmuVVgbmBpB3Tb77lH7rNf5mKI8Iv8ObWMH53tZVqEnXuHq7N%2BKFrVf&X-Amz-Signature=f76a8fb8e72887dcdb6fe0a759eb95fb12963efb29e0705ce2e45d40bec11f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

