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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737FALD6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD24nN3byw6xlkRhDH%2FLnuAbWoqEXZGkXjf9%2FQ5f4poqgIgFtFpkgech%2B4fJ%2FQUpjvP%2BhFngJ7HDjRxHginRG0Pr04q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNjhGTn27xBXB3bc1CrcA3b32m9dcV38eLDnsd7X5CUI38ROI1eQMMxF9ERN1F4EvKnlfppdbbrjzgf%2B6rJrxtnci4joDR0ub%2Fm4gqasxa7qPheLNKj%2BJv5x8XEhiMj6gq6oY7Nuktuk98z0iGapodnFZCWTelye8VlTmm78Y27jGeSXhGTM5jBaS64KtNaYzXDM6AQylvC%2BtowFqLAbWeYq2PO9cGjJrRHAT86xMG2RZ2VIZX%2F5lJ6uzR5QixPRMS6q31O1HyfbOQGVcubb36trOG0A%2FMAEo%2FwVJpAjWx0rreQeOg8Ri9mE11wosUSVtRvF6dELpxo4Y9MYYD%2FZ7f0qFs1krYnVi%2F3o3XXR8dt9x%2BB5uCaA5qQfNGl1ZqcmJ8vBjOtP7YFD4Pdma5M0oJXdSyoPmjZMUNhSCRS807A8toweSc9h6nPezeZ66giSgjwClbvF7GdSpYPBBYQ9h1ASWky2KA8%2BvJsQBeYfjF60ZTDLuJhaTDwom1WcZb7PxyAF36OFqVmDllXNglMinWUtGus4KgGIFb1BH0%2FVajmOKru2cFnM6hsI539SGoFPpcFXZypdGFCXFHe1mCWQH06a5RqI5Pr3eGG1%2BE9QplWEazAx%2B1g%2FCKJ%2FD3fCZjuQhEnsSwDouzgBBMBDMJm0w8kGOqUBNMuMk0le2%2FzsI9EOEcYUqHAG%2Bbo9DAgnV1nmhFFPLa76zenvi8YS%2FP67NoIxFqLA6EoRfHynDmkB36cMFgj2UGiG888ZNoXs0RAsX8yIsKgDVRkHKOhj6in0hd2ZeSLrT%2BFI%2BSArhRER%2BnuM7umtv2uDmeDBXFegqzH00SBqnQ9LLkL34J9g0bvHxNU%2BOuXVpgZYPVLYaR1tOCGJIZOi96qszHFa&X-Amz-Signature=598dec9b1e2b26f166f03d109bcdbc93d0855b550b3703b900503ab6756d8c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

