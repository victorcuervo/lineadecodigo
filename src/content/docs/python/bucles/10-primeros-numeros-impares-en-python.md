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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6N7FFDK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDDWBGruWclKwV4QzynvyA4Ow%2BLujgdCKLPUn13xZXnwIhAOrzzlQ0vcdB2zoWuLOKrTOqQ1LT7oNN9WneIVBulYZuKv8DCHUQABoMNjM3NDIzMTgzODA1IgzA0%2FbkLklXKsIcDjEq3AM90jg3XtH8L%2BRirVc1Yxlwt3hUdtQevlXjornw7DKwpGNZpMhfyf0DL1Nx4QzDgy4VbbsiG4CS2DuRPttZ8S1IWFBWZuY6ExwKML5fpoOHxX2Ph64iDuY6XanDMzAtgbzOfiE0d15cqUkHz20bf%2BS1MBK%2FaXBvTfiDB%2FolJZjI%2FudO1RVCv37InRoPIqzN7GMX9pkbTCQgmAFORMNq98C6cAHAHkknEnSftj136Umo%2B%2B7LPl4ahNdBhuTTmMA0s3b4q8sUp7bjKKIfBmGpD7LSdtgvMo70Xgz1FmaPjfKBKK1ZQlL0Dtp3X7LAYiMOL8FC6HcYP8Vzv12wIlMG8GQQw48WDipwULEhfFZdKs%2Fx0RhGIZtNe1vdTI0KZMBlRyncg7Up1kzN02PZCNG7OpIgYmZkezVzixhSWjGXQCHYSKD1VeHmGZEifdryqclADpDwvtARohmMeMM7P9a5rzDiHd1vISVw3RgimsAKxr8lMoTIaA2IkkPw9RhzZTmX5hAz34tUzoDpGSQ9Dy%2FghkY%2Fyc7N1pkb9tmplh%2BiNp%2FPikI2M2GEfLXh6Q%2FTOOfEYN5kY5vUmIZgGHw8Ah9KusGxVpmxldAK%2B2axYNsv9A6Os%2BpZOcO7tK9nj1SvlTCkptDJBjqkAcvU38KZFMA5e2P4JwRe%2F0eRC%2Ba%2FbbVoEC6PWELbrGIhj4GZle9FKF9p72w4YXWQ9mWr37sXzAIg66P%2B4hp99MxxVekIavoGS4dYiFqlgDaopOYavQviuA%2FS9aR0BjSrMl5cEImvtxdxr5gfziPnHJr3Ij90UnIkVbh%2BHHoA3iuM%2Bna8VSqjx04xlSWpdMcAcTqKpW53I%2F7P9BmUvODJq3aJP1HO&X-Amz-Signature=cbcfd49f6d509edf941a43da11e3301c93b7f5dc61f740d10b950b77ab71ec22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

