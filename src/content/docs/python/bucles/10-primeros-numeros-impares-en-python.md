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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHJ5UM2U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0Ix4hfMclevOk6v9Qftgf1qdFYZIGsUK%2BOOjp2gcZxgIhAO45BM81ewtn4lHQzLn7POPX%2BD1Kb7ldnAvOQ7WUsmErKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygr88%2Fe8neVF%2FaK6kq3AMRrtT%2BHDBOapYNaTA4q3b4e5WTs6EkCBSn37Ht%2BBhrj8KtqQdDkwnzbB75h2CPTmkiLEWieGhneGCQSf44O8HS7LPz1iY0sja8ni9%2FJWHlLgTUJXN9pJlvNvPK4VS4oCrsEXFktrzSW2uv3Ds6YhY0YReA1egM2HHH4nK0I2hvbwey88uh%2FNm5X8ThFYz3ZkImgVoetPGTzyMy%2FJIuTf2pkXa%2F3miLv16DELu7MbuSnpPNzyRO6B%2BWHsxHyUVr1nu4ic3xz94reXE0OBkwOaUEGB0TFL41X0Z%2BbV68J4gV%2FUgqoQzMS63VeQyEuNCtaeV5vkOnhYx2fKDpfHrd%2FoWxLLUT9%2BwYmiG2X8rzlNY6D85Ij27iI%2Fo18iSvEEjEw%2FiVzRqDMOFXv8g7ReCxJBU%2FUTuj8VJrE4ZIB4Mlh7EtDPrtbGxetiAORey307oA3zFLQDiOvIvYZwLbyY8cjdTtSVTLPlXvoqOT4tppfAN2bCz9TxKXDZI10RrkFe56cBFosynaRjf7HXCd06A1U%2Fow6JKJrW7FN1xEgr%2B8q9GRRcA9%2FJ8V4regNJ6w4UjCcrKmfi4iVXW12AvtiAeTJ13rPU1H09gMclbnt%2BoU%2BnRiVpLp7fEVry7a49ju7jC%2BvtbJBjqkAYUHbqpzwb9UXgx8DTXdx16XRGpEBBzjzPBIxkhQXjvv%2FpY4d8k1UJYAUYI4F%2Fdw3zS1W6XZ0ZFRpYwnSx%2B%2FneKRHC2H%2BbaKo8rPnEo2CzqEFxr36lH819UR5T%2B1Sa92WT%2FGzAX%2FYdp05KGphkZsWUjcZdbfYWQODfB0ynxJgRMUg00scccH7wr2xBIG%2BQCM5W6FykwB%2Bwb1frierI%2BLieqR7Al1&X-Amz-Signature=64877a9ff6514d5f7b6eb30267f377afd5268f91a54c01e1968f606eba5b4cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

