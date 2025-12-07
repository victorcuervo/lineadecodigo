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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PYUFTL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcZZT1ljbYLvrgmxAM6VEFsVNAAPFnb%2Fr89%2FMSRlVcMgIgTMVJkHl0DQL3vfAoEM%2Bu7ket9Qem9NRRGezDyBn0A08qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdP3yw%2BKxwscXyZZyrcA4xWRyzy5jX7DOpxTM9zCpZ4jh6njpaczjjfVUYBYyIfzEVbUPhZoct4L8ThVeXJ6rqFTY4Cf%2BelwJDVtnbWRlPCfYz3aGlFEM%2BQIew9ZcM0OiFCab7qEUpyIV4p2p5BhPTaHDnYzKt3237PgjqUj%2BNtKiF1vap4apYIA6QsFtsOtAiQD92AzgGJgl8stwI2W8CWkLqzi%2BHBlQ%2FWRAtOrNmq5idAYI88DCqfeKHyacl2evi0AtwW%2Bov97TXE2HBqnlc48m1FkFeKog9FnWMZGkScryFROhtDqDgutyR10PrxgKIRQnLw%2B8JU5ESMXEAZ%2BMyCiELMLUqJlVsRWgA7aCqaanHThqM59FleyPUfWSd6ajgGeBKT%2FlmZJE0l7EQ7I83mJP3CTRX%2BT2UYN%2FbQGYEvBUGYPazv63TbaujfPY9RZlhdsQIC3U1nX03ExiCF4DwaE7iWhwsmAOF7oS595hK1LEVbc6hQWnL5Km1lh97%2F3H%2BYsnVN2vsZEWeITAkgN4OMh9GRJXEBuNJ4hvSDqIrZS1oe83uk2vqyAJfE%2BMr7BWMGMpxY3jwNjg9XliEFooRhNgkrMRG5hmbOgaXs2FYUpPLF1gB9pL7JOXkoYAL3CCp8m87H%2FUp0pFRoMNP90skGOqUBkmu%2FH28ik9TocVSXajYk1TeIdZY0S8VdLyY311v4Og3Tthh4SAKzdBBap16HB08v1rKpNDRsfnLmiBjz1ejWAOpGvl3nk2YMUB8ea3VgLWq%2F0q6N%2F5CM94PiKBVMv%2BpHr07zkg%2BHIe%2FHahoC55HRZzbiGG2Jv3QUH385lkPnxHMHlGrD7BTcmwO5K98fC61zETWMPin3yvvrdDSjxcYxMFq09EGn&X-Amz-Signature=7738216dd1e906dbc5838cc86623b1815bed0041d595c2d904887c108c83b62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

