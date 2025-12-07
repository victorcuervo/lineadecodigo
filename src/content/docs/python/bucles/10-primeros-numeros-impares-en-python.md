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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5GDLKJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpo%2BW8bvVVYnpUubKQtxcefqJfiy7pzuUoOTlHoMK%2BwgIhAJe4HgwG%2FVwhaP7xmUs92x21FwMw6zKjbRjopcuxp8BMKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzF68fEj0NmBs%2BSt0Mq3AODOajkoATgqbUUpOhNTBkja9AZ8aeuQLsmbzWBxNT7lh3tZg2bA7dMvkE%2B13y1KBiNMu%2FG%2BOiS43rz0LC7bP7suhDFVIsKWnuaTXAul1lGR3ecaTv%2F2hBcwZx9jILEINntbE2EWWcXqieJfS15o85Ty8QfJYcJ66gVOF6Xfcnd6BnZF%2F8ndylMgJYC1aR59FxHhdAybtvDb3cDR2Dv6RKcDHC9wzkFRdZyE9dLIBGK2c0JZIi7%2BWWH3OV3SsyD5%2BQXFSICxmHfrSsNd%2BY9PoSgQ8Th19aZgpoAmkS0A42V9QIS8yhP9vQ%2FjVkR9e8orDb7OAyeI%2FegBf4sb%2BrEa%2BjJAyCLrhxhuB%2Bw%2FXbz34000o6Fg3gf1pX2YeLUmPt1pU7wZe%2F7B28glVplzzxbyknnuOEvqoIOWvCPep6ljUfyiyWW%2BcEbxefZ%2BBnEKUgm4KTAHHMGMKq%2B5%2BM3WRd%2B%2BZqpIXNClNc1q4bdhr7jEix33kdTX5VOI7EJ9tK0s0T9H3qM8mb5ZfxL23TfNGJP8zv1x%2Fq7e919LCWMaRdb6kt8ue2Kpn2sdE0tTBIj7E%2F9x%2BmdjC%2BDHT7aHYp9sFV33CM8GFkJ0Fo2XDCz69QqmJ%2BlovCQxZRng%2F9BPPcNIjCX%2FdLJBjqkAb2CHewJZjiCu3rib3N5tB0Ek0pASKjZ07X64BAJco8EyRU5olZnvD%2FWSDU0rqlZo3UHFU6tDQ2pZOczJNTs3j04D52TI54zYcBQrH4ImsOoP3VxPnpxGssQZmOBbyOmxxeXZ%2BuiPFy49WHQvG0j524mtmb5%2F7fj9w667DzeRC2Vw%2FYE0uCyURHS3W%2BR9qdfznOQBvGflCFyf3htEhu4Wc1rZfMK&X-Amz-Signature=8a954d5e3fa67ac45aefa453149869f38685e649139eb232e775b460e15c8d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

