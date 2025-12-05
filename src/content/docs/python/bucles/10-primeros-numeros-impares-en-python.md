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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFAFRM4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxPgputG8uhVidw%2FMQn1km%2Fr7yveLbNv2MGikUpoM5AAiEAm0KIpwBMQt0EhFDbHXnD4iHsfqu8vlzkjZC4oHxOfS0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPAAhVcCN8YNFwjLyircA%2B9oosSrTHptybZArCFNxbmXgm095p63ZeiQiKHJ4NR1nEVxPt33ClmeRrVbY7JROxjkiz9osfW2R7fyMNf5U11dLjRpNqYN961DsEs4NZjAdxRM6RSLqDDxM2v8OBopyHLFCNnekPpDUOMjyT9g4MQz1gv3g%2BCc8IXoDD2Q%2BWhQsC7UKh0J%2FPe%2BdeFjq6yNhlJoof360dipfqTl8azoHHoW0oeRQ67Bcpt9et38npZNsFZ4E4BT8Es5oTBVWUmNuzwoX%2BaV0hS%2FCi5jkBXDPoDRIfE3N6qC0O7QmYgJ543aqzGoNQnLBR5DQdoCKVFjvBQdjpr3FnxorQl4051OznV6ykpcymCjUPPoOgS8m1W0JytteGHe%2BzJkIHhrXAA6PIiyU1BicevoOgn0q1ykYLvm5caBFuLLm6Hpq1oneLpkaqrqwNOzeSaRNY6wRyrc1UUiZ0u2Vau%2BDC4YdbyvA97MKJmTtHeiz497rBX0hxslV%2FC9RPjgayeChfvOdy0aXguaHErXeQJHWRRChA%2BbKVBmXAClImvFbJgGd%2FD4xCZvXT4rJgGfWrIcmIdF6rnFIAPdbhX%2BquOMJj8vOcwd334vRDnPgj3%2F3XkaEepKis3XH6iK2jsju5HTn0BGMJP2y8kGOqUBtTTI2dPbgigrDEr1Oj1S9E%2BeWyCpLlTtxgG%2BWXKz7ZLcood48%2Btkm2TwJbxZvJCorG%2BqalITF%2BGwnVFYm%2BDdjIdaz5mNHm9hiJ77H7Q8x39lsfh5FyVeCY9BvSeaffNrcRITkZ%2BrVSfI74MnIsN1B%2BI5OlApugDgYrFIIbDdZ%2Fjyit%2BWYTXNa98SOqDdkG0dqBihSSrcuj1uX11swvMnT8SX1uCr&X-Amz-Signature=b0e7833f9c7c3338e9f082e2da8b7c0c55567d689631bd304221cd1403e200d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

