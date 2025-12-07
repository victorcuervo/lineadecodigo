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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVSG7JWV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDseHSf3ZhFgvsjGuINg9oOm6EPlF6cNibgK5LxAjNC0wIhAL%2BWGbM4dzTZD9uaP9nLKKSFPFaMsSHkKyvV3EB9K%2FvuKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZToXK%2BY0tIDKWtQUq3AMK%2BR%2FTKlVMCTgFmEeKblkoCMtsMjFn4Qribq2YWpK3VE5mrL%2B9XkoHPRKe7nQGxRdyGVwW%2FGaUtCa9fly7CAoO0IPooFq2P6UrhBYHbMlSxWbQgIWpLxUKBU3q7G6w%2BU0SoaQ1m6wrof2j8jcJ75VIEKLJ0D4OM2I%2Fi5bP9BLEvfF1oZ9Y96iU4I32ZBXNfH1Syg%2BsAlzOF%2FyPIwX1VMVrOlxoDc1%2FyLiPZr2MkspLtOnH34g649fr4jfwD2F5Da7FbP%2BSQml51a0UtvtNX%2BZmr1qCYt5C3gGR%2FUWx2IHEQd9MHVMzzsQO7e%2FrfS1EQPasbXgzUi7BDVlRHAnTDJ0vGxenKTkg%2FH8l%2F3Kz2fZ%2Fe%2F95nLz76quqveQH9RE8f8SvDZakdnJrs4cvcmj0vMYiyWjJSwohBhFIbXTiPfEV%2Fv8LYlNM2paCq0hj3UKpXnkwkdCUb056UL7VcG3Of6vXpbknmpYseLqAbf3%2FKaKjxcBZ22Rz5BOoOL4dbApHsH6u8Aoy7a6RdaV%2BdsVpFcXCBAFLh%2B41XWhJzhqwiBqhpLGOR5Om1TuJwFcPLCsSv4QQRKNN6wEiAxORGUglOh%2BwJ3Vi25V8%2BMYU0CKe0mK8cckhM8b2MTGjqR%2BqqTDEmdTJBjqkAa%2B%2BSXGNgmW%2BtzwGx6FlPbVn3ZTs3YIcRYI%2FljFOsFSRXC4TUUzngy9KdGbVCmo2Tdte0tgoW6WlIpEtl7RvzH%2BRu5I%2BPT8OCp%2BCEy%2BSv5u8LXi8pVvYlybl95M7x8bXG%2B1N4aDIMnouKcXqGdBKpHdfu4dg0UIr6h3d41FVCk5RFblEhG7pUnjwV3CYmGYFOuOYule9RESI1aKgVYvU5k66623M&X-Amz-Signature=21bb25fc9fbfbda851ec4fd875dfe952aacac0e65bc523716ddc6a77970ec067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

