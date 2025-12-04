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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LIRS6J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFiQ1EzflVuQ2O3LjLJgZV%2F9OlKaqFKY9FbC3ZaD3AzpAiEA12mhn57yI5ZF77CjAJW7gg9n8s4v1%2BTvBZXIgS%2BwjdUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNv2OKpOLTqOcgXMoSrcA%2FUgNgadtI80QRZWsSG8%2BVk%2ByNpbPbw32r7owtG2%2FNh6z5Tcz9b1bhKzRg9Prv6R30ypyrua3PMaiGSf2ydyAdThVu3o8vQqu6t61l%2BugqnKgf2LgzuFl3hjhDQ8zbo2eSI0ErcM91SHN5t9d%2BCF6nbtCPxiH9qG8oKVc%2B7QRsqUbBLoXtiDXta0Esf%2Fj1OlT%2BWss5%2B8SdjwYP8IFdHFB%2FLcoJ7bdQkV673OXZYjLIn9Zim8MyLCCKBA7GKuUcaO9hypNDVcDmCm2%2FOlsyArrIXLjTjsGxRUycfMQvy4yEhLgj167873LNkgX8%2BlkuvNjwh6NrVVxTGthAwhwvFzuNp1vc2Lm3m0zqWJN%2By0xXIaz4ppPnwRHp%2BYM6FcTvyk1Uix5msjqrj2ytBHGJbyl%2FgWq7a7rRpzyog6CRzlFmzFwemCPGZMSmiIZ2Ngd2K4jBv2JnKCaH5hVEoulYwkBD09ZWXp49z6jZ4AOKKjr%2FYz%2FvxzeCjRnUmQTGm9hPD3ZgZ33gEX4qHuwe0LP0REAVg97gf4DZE8LfMdgLDKTKwQg21K%2BCJxLlVfyfhvA2nZOYzFiD4veFHyWWujg0pkoTHSzpexFNRPpmV9x0HQ4VfjzypIHuvYjAV%2F6f%2F5MNeUw8kGOqUBRjgehRAQcOhDVGE%2FxG9ln3kPjcZXN7fnjErWaMvdY%2BU%2BXzRJGA327zXJgPgBYMvYhhHwWuOmo5Sce2ghti2KtTakk9ZY7MIXvdj%2BdANX0LRn71DkKoNXRAj4iJD4C5jwvFrXV7XvQ9mgT0eq6M21bMGzjMieIH8F4Ob4y6vGLW3h5YP2fiFQdVdI8m3lTzdFLX2%2Fs1I4CI4v1sc5xpnDG2l3AESJ&X-Amz-Signature=5b87f6541d9666fcbc8f9db1b4f19b6aac655db988a9ea9becc734bbed52f86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

