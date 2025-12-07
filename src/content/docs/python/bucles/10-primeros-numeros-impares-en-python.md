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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCOQN4YM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzxPcGhYopvvDZftCCg5eTWrerMysnyhZLyDJE9ZF7ZAiAeiop7sczJvOvPx1JhiBXsEJ%2B6KuwysygDK45P4GitqyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw7SIdOU9U%2FrNB8qpKtwDCmaI8DBiM7nWxQrPkE8ILypx1umQ1JOhZA%2BJDCLL%2B6JV1%2FVIG4B7PYENesyfkFggOhYjvF9VMHCH6xMtixL3vpy1fop0Hjpmv%2BgYTkXuM8C4Jh1CWwoERUvEINpEosRdutHDa7qbL6i%2BptdvPSeu02a9TtkaD%2FtSfJ6sINodDDoBA4Tb5e5mIzGDz%2FUHGrurL%2Bud77xYcWzh1hN9JtJAgzgdl9iCM0D7S%2FsIpf04JYWbZoXTqsBURmUWpLiOy7NM4oshnNjud8a4xCgbnUTnlM5kS1ONm9AZSXr%2Bb3OwZttNnGjY1aSE0AlxtITMLjApOo8Nm%2FImZn3HLj6WYQatEm3zG6LHHEivEtZMTqXOz5J7h3wnZ4YSq5LNqueyUtin%2BM1OGIpqv28dxvarDGCBkjH9Y%2Ftfr5lO4I2pJ3ayvFlHecNM%2FVs5o21sES2WPLiHrpQhtbbfd0NraHo4od1D0UYyWMs79st3n7fMZmnWm92DKCJmsaoEtbAlDEnB8Gon%2FyvD%2B1Krcz4qNBkcnRxYBBTG%2BgeD2aLlo7QLsbrv2NjP5sgh%2FxclVjxQHjneg%2BWXeMzWcIIoE5pXZgICfqw8wUdBt4kt7BBl%2BYj1%2BnZQO5DiuK7kx%2By8%2FzBxHIYw9qjXyQY6pgEqedYa%2B3ZaYsnt3rxf43g5TmM3X%2F%2FyTMZ1x5TBv3ATDs2TAiZnbOO2mXmmtfH3bL%2FYb4PjfjZhi%2FOO0u3NcSu7eO4J48l9RsQX7JUVsh8e62xEY8jyxqZO7kvLvJlRwdkswDyfgT%2FZkCxLO8eSFkgvw5xZhrx6vVaHbAeaTKCPkskJb6O%2BUMMJ4zvFIaPdK3M%2FOxheUaTFBe1hQ%2Byi6Y0Ut%2FHk9LNd&X-Amz-Signature=d2997d25c8c168055b76f6f2182b9d2eb6d109da8255d1ef3ba7386a6ee182ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

