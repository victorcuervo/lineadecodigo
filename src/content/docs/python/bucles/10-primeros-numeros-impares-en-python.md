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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFYJKID7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCnQ7sceWEHtw%2FFZKV3sgk7X%2B6H1xQXHaloH8FeKiBK%2BwIgNN%2Bc2iBXpR8mTuOcl84poYzeA9DlIywRaIdRYzPjly8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCoYcvGxhu6DHxUA6CrcAwG2tN9OzXJdh0I%2BOtQnCBgisPgvcykDUzovIrP%2BKU44GQ5Nq83ms5GhUCJvwOcXn8Uuhkr%2FaOpfjrTLL6MKL9u9ms7MSDnQmo1Enok2EjIx%2FRMT13jAVOqHcXm9EcR%2BpoJ0ZI%2FfMXbLbV1nbKWIvM0Qv4B1FkMfc6Zd08wjmROJa7kt9cHqQOWrNic%2FULq5ouf0UZ6yDwdaWDG37Gd3JYKusWTNIa063wNLd0IT8kKHQtC1TxXEzT5KO0V4jb%2B1Vs1qMk5a3I9CLNWwQB23q4rScLC%2FBGLGpqEAEbBcK1QkVONVeTbNAfoPOaQLQzs%2Fq5THe0Q6Emts7PmeCPgHZfZrkUJsm%2FCqXy4tz5fcn4LmDx4kTuexYhzA2Ddhb7gZ1wpXhnAhDK8yNzquP%2FCTIfo6fRSi356G5Bb6uJGQ4KtaEF%2BG3X3Lf8QOVJsiaKMI8RRdBr7wf9VimEF9Kw1c43nV0WfOhAPumVsJMbCayJElKVjQZI5uuJpL4xm%2BzghO4rnZc9zDCPUsLOSYV%2B9DtCGH7WU%2BNlpLUezRYFXMfeUgDJdyy9w0P%2FoUOMiASxHCqh8GDayEhRn0QOFUrbQXbXaJHOsBQUDQnXtCYxcGzS1PH2UP2uqEazFbicHqMNnmxckGOqUBT8rtgSDGtG%2Fc54BI7HgXM71ysLO005WqIvICjuD%2BhA4Z3oiroNoVCF9dRPoAoqsr%2Fm32YVix4NvNQu1ZsT5ScoMJNooNKNPojJE6ZTlQqLd2P2McxNGtprEk8MDepYmrGZXRUkRn7F7UFes2b0pKsWlOb2A2MP67EvAVaWLY%2FHoqRSS3a%2FDTHj2ljwiS8gMShxfNybybOS1Y%2FoXYb3ZO%2B%2BLsNRpL&X-Amz-Signature=39a5c939d65591c7ea6398f8e0e42350df592fdd6d98a977a026b2f24a029430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

