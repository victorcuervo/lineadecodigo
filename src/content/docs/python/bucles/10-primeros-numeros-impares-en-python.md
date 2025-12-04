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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKJSU43Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIAnY1HZiY%2F%2Ff7097VOE6Iyant%2B65nZFa6UQpNGOKpLtKAiB1%2FA5xXHcglBk%2BEAUGzBdPZP1U%2B%2B%2FA9lX0LSNoRFah9yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMQ1ImXgulJG2HwmyCKtwDMx%2BzNU9Q0DoeZn0JuH5JDJn2%2Bnd4dt6KmFauZGstsN4aAbO%2FN%2F6twYW1hu34C5YIyBbbUqbBvvEVM%2FYFwW45jryF76OZBGaKhcFOIk%2Bdlw2dt8yex3AFG5Ebc7fmwkFfM%2Fp%2Bw0oBe1bJTU7FBjITNTKKLnSk898TtCQJRvgee43QAAWocchau4a%2BGULzDXIqhUvxsNaYmWx8rvXfhRzuTwuc0kj7A7hAW7JJWOF%2FPTZ9O4ojpQO1n%2FBQM6KRlygldQMb%2FS5fVV1Xmt%2FeYP3QqtkBybS90JxicMAaHuJQifMP%2FvtuclNmGhNOBvcEEAjnFki0KQUXcjHJmt%2FHUe6pfwUJxFCGPRvv7Vwa2oYQGdKQuEZvTyxWfRbSIklvUn%2FCpZtuVKpfxsL14By4wMy3LUiAGyB%2FqbDRrwPYnjxshgWRNsGGew1WfI4Vj1DlxQ8LoLT32QAdwFBbvpRezyUeerOkyp7YP%2Bq0qh8HDtm10ZitHjsGWMS8VOm9UTjj93HzH1jQT4u%2BAM8eZo3IHuT1J0Zw8qq6zxvQQtblaOA%2FvsYJ4KIZSthLEco%2FDALJfMVDSZ%2BORMSDGL6%2Bl%2Fbyn8WQdJ6M2ERRUWbE6F9uabuZmNyCR%2B4RraFadKSvb58wiJXDyQY6pgE%2FTQaKCbRvrm2I5s4Wjx30hTviUQhh51q9335iWYwl%2BGg73SwzIFiL6mxbKzw%2FVbAFjsQKBbLFshuXo4f8Lhi%2BS%2BwjHjWMdFrnhJPrBH939Wh%2BrPjRpcmtJAoP7YTjIBBcGVy9X7iqgxV9Hrw2m3xVqurB93uQg7eDqMQp8YIP3Yb0BctNopeySVMETAm%2F0cU%2BX7bTxnefk9heFthkbPZMfPZZ2BOW&X-Amz-Signature=c5547182573b8c36b048bdf3d55c4d6f3375f5eb7cda837dc5ecc662d64a4d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

