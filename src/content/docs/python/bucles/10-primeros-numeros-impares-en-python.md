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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3QGKTW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3oFO60JDQnBiVFn35EeFoYmJP1P64SW62rKrE6ABVnAiEA3K%2Bruu9NcQ3VNQAlsGn9SLW%2Bsl5Jf9Q7CNIBOmRqXjYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHE9E4hTAfrYmWFM6CrcA%2FFfDV9siWHKqYiKBUkWeQVMnozg3ppo7Qls2JU8xXfRUM3384dXmFccVWo86ypoShs4flcowAKXlQP%2Fb%2FR%2BXFiNQoStnHwraOIEi7m0mSOmWMz0Nn%2Bc2PlfF8n4sULmE6NEAAbMRB2%2BcqPyUmDIQUNXDp6P61gTu9KgFw%2F290xASkKlZyXh7yoA6uBp8HVAywXyQlGN%2BmM9o4AqVSAcKXgfRUFyEjbw9HfPY7BQhe5JMN93U0dnfsD7uA2Kd0mF09TMihnhn1%2FaM4t8dkiSutOTIFQ7ITL2t7q3czj1LJnppKpuLPVg0JQAfpXwSWsKlOxvlQk8HP%2FHsskFrP4z5BuUWd6MDY75%2BX90WkjrErJTKN%2Futzb0P5sHbLKOSsHPR1B07%2FP1cRCU36pou0zGTFAB35n18SAUynva5CHOSpcZKi0CpVmk4w4UVk4fdhEGIiS12SKEfbjBxzBl5sqBWWhQJfhI%2B2vKSN2D8qa7DBGg4CfSQr2OgsmsmpyF%2FFK5knrzDgmdUlPFgiIzbZs10tiSMZIMLQctAmPPfYplgnKdTMMiWrd0ks7gzMZRI%2BiOS%2BRjH%2Bk%2BVYPZcYtaf6UAheqm6t70l7I0SLz088CtvvirW4toHotL%2Bsy6O2SbMNrJyskGOqUBFj3JQMtfpCWZLa4NZlgDQLUmG2JjgnKbZRxYyHtQrMCCVUPIO5t%2Fy46dIQ3jGgxLXkgey%2Fbtyal4hthOt48Cf9L%2FBjXibsDWIxP8pwHgN2L2%2BxNhNQTotnp90qb4OWmsXdDuXEd28lqUvAc29NJWNk7Y9UQophuOPeGel%2FiirHaGFJKYf3UUi3zNglkPJpxDBmdm9vE1YMD%2F0vf3FexbDNAddVjx&X-Amz-Signature=e18b6f92235d88f698bb51ada9f600ce4ec525b8cbf7cf947a134a70666e2ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

