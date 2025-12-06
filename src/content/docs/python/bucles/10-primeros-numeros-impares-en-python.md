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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIFWVHUR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID8B6peD6WvP%2BnH4X5GvZgRYskCt%2B2ZLIF5mlC%2BGv%2FDeAiEA3juGrA8oqTwtpVA%2B7qC85ZTCSuA7GpQmOTgiLFvZM0kq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAOq9oKjX8ekb6JrgSrcA65llYcru92Tbi5JEoFYRqSgxR5xZPIGZUi48j5jLUDF4weW6U19dJ%2FqNORUnWXGVxN51CSByFAfgzqkmYAuZUUpeTV47uYlykBk%2F%2Fw2CVLqAGPTPAhA8WOctvl1XhB%2BncYT%2BEcXDdPC0nUsmYrvsMoomNlD7GBo%2F%2F%2FxTHdBgpIzcvq%2BaJm6szgmHOwduuvq5OtGbtHXCojKsFzOgbh3L4X%2F6531tHUKMPmJnOO5DkECuW%2FY0wL%2By3Wn%2FA%2B%2F11ebG1Z4ifb2ARq32Me6lEnU4T35lLF6DWOHMj5780quFt8ign%2Bh8zDdgn%2FlfTLYyPXM1ezzFI%2Fg240W%2FXlAh5Wq6yaa0GzBvhXNPeRjN%2F5%2BSaoBx0feq0fYXL7UOPR%2BIA49288k%2Fd%2F7QwFh4mwwAEBjBA3nLLjz3YIqUvppxvX03gIyXalt08jH89uMXbxNYbm3qe2pxUfzse%2B7fuoG22AT55d3agByi1xmkYUXwJE6lOoxBt6LTcQ099cF9s2mauyoUKcmYX3cCXTWFVpcMqd8gRQZT0lc%2BvLbEuc8poE7%2Br1Ju2Q1EZghx1%2BkF60Kg3qxiijnb44jxn8l9nVZ7cLDxv4RQiaQiQ88sOL1nuBM7slmu5rr6wVchFHsDAziMLWnzskGOqUB3o8HkgDOWXgn7MDfcUfEl3Hb0qb%2FDhw7jcd79aazmR3iByBdt%2Fjh51gBvM5ORzjbZ5wd%2BIgnyxmi0kgQdXEU8TghX8nxc0%2BB1atDBRynb0t8R8Ziv7oGn5VwyBeWzPWzJmhwwVWwZ9gQh%2FyM3q%2Fp296JtYxzuaqd6l894L28jwuvSnUjUMr27fC0EBzGGm89foKURJQ9MVyWHcZepimxJP5gkyR7&X-Amz-Signature=7f93fef0f69a31100fac7cc4fc2a7d094d43e4f8f8290f8d7a693de46cb43330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

