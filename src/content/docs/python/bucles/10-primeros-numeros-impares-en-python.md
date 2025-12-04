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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33OHVAA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEs86fOolWe1RyCoOTzRqiShIDd7NgF4eN06auNRrB72AiEA0FAxzL6lcMnIn8V9F6n8uJiY8gwTQucVM6PngRte%2Bswq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLP01EHs5jnW36ZKeCrcA07WQf0H5c2cAtsXuAkiYYXNZzIjq6jww5RmmBCUixY1jJK%2FnvpXznim2vsynq10VeVFhKh4ruKcVrqBlL63A3%2BOUYeMXKP9%2Fzi0ppLyeoIEHmkHGR4qrfhweXOSDwMXPlD4M6HTjsYeMtxpYWEfPUzDX8xN6OcflVuTpFmEW%2B%2BBcioXD202%2BYZ2aCwQMDvl4lVc9HQuCvPwiMOeAVZ8%2FAn9H2PAnrtjmQoke78QgmVCD1ZPdAxV75NEYwTEOU4Zs%2BeQTUoxZ0%2Bmz2vw2cBTooUgeXsnKnqhoxATY3qv0NPWSLKquQHsO74QcGfZHNiRS%2BkPqR95ccBHqUM84wCKjIDQ8cqAVCFu2OZYEYcHRH49AeW8Tsdzr1ZpIsk5RihbC07UyS%2B55S2WV56aaf0wng1VUfG5OXu1w0JnhEtn7GUk8T1cDU%2FyKuD19dLnWp7zgMsPCeXa5UNTuHYgc%2Fanf4E0MgC7oJE6JEcT52JV3IJ8HQMF4FwC1bUvYd7iX4D4Ihphz7dHNkEKneG%2FywuWAcgUqZI9K3tT9hTMmco1JL2WoVJ05kUAHiZqHBcVvfE1xUjltHaXnXT3G2Y27K9V6C%2BN7qgpkwZM3PJGmwfRLmABFnKrCZ6kWz1%2BUr0lMLiRxMkGOqUBvCN4q8Q5DSykyXDnPN0xtTEQnIxrK1kHRuWR1RaJtjL95cZNe3dUXR9e5H46vIOIyUxBKH4tEczydUd6F%2Fs5ZRibDb7Su8t1KXs9AjQxhzl4Xypzti6fyHxv4M4i4JzMOYne5J40LVoMgH2SgT6Hebbg1zlc1uZJgZtaXuqg2LM4QghFfOQ8Jo3Zmuc8f6%2FMyrqkdGAlAoo4zoVPcqjLv7Hb8qzp&X-Amz-Signature=8dd6fa94500c82d96e58635ae338466f371d00c952d919ed19eb4eb0aa6adddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

