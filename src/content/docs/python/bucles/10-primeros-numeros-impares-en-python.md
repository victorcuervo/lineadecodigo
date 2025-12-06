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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXFRJGG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyW%2FWtr%2FVEtJesBJQOWfVItLjlN8flFRtr9l5kx25jIwIgCG9jOwicAqutK%2FKuxlH9qbaleFxqvZ0NUlLgROJtCdoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBznpR4GtdWdqI1XBircAxLwAwL7Gy2cZb%2B%2BRIdqnfW%2FNEqzxlyh9Roke0u0rfl6KQFO9SwEBPyhK5mP9LSw5E8WyWZYR65DvOX%2F76X5y49k8bZC0m2Kb7DkXuVHc020y20yGl4p5aD9Xj%2F1L5gCDNCSnAz%2Fdf%2BxeTFSaBk7yzL0Ipu8wzFP1tCZ7E9zkEVFYeOwcTyErE1P5eDeQ2gmgsjPdwcbFMp%2BnY67%2B%2F5uHy6keRGY2tV3b%2B9kMaUO0pWzADmkq5Rjn8zxDtQoSdX%2F9VThHXtHy8L57bkkz22bkmGbM3DwHg89XVh%2Bprn3icC4BmPtatMWtvdZ1%2FHiuz9%2FR8bobpDi5uiZDesodxJY6Vur6K7Ef2cvirhlwDgOZ6oXCx0cHYNhszLqfPIhOSeadhNMRj9lVe1K4cOVmWSzqppvzu6EhU6WNvviKjBpS%2F7kvhbhiZGwBRs0m7StvUA3jt0q3visbmthwiq80jvd8369koi5x8ODi4LDahE9igplfAi8qRV3oB5dwFXhQeZyU44k9tuprn0ZkKNdFXGeLqD2KA7btH7OIWGfn5LnMgZSM%2BPawK%2FtMzjwsxbuAeQ5wV6Hma2sYDqwfC6qcLSXFRb8YTR1Am4ElYn8IWDZ2CmfInuZMTN7j9KnOynTMMym0MkGOqUBjcLDjaYNBJjfOlV0tooBAIq8ZAO%2FXR9yZYH2tv9ZpqrSHjkO6ihN68UaNpCNWPumU3JpIMaIBvMh0ZSSoWAuldJXR2LFqOZcFx7pyd0%2BB01ORBslYNoipbqE%2BwINkhWFs75dr%2F%2BCTEjEIF2MRX08UsSjCSEjSKFwZgjK0N75wd1uvaJK%2B%2BjjoQcwhI%2BqHeUenlIBZk29AbX1czxDL1iKPPxmtWck&X-Amz-Signature=eeb47ccde5675b90c5a394c407e429b50744922ac884a5dab58946c2e6f64150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

