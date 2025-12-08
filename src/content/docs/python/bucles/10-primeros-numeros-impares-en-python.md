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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657JUXLY2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdU2Ox%2BHNP8N2wjwjhnhvfPNatyckQ2dDTns81TlfIQIgVfQoonTE2R7R7sbGhvkm9qNPG0csFBSKZ%2BDfvTFxzkUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQM6vDzIRLQmMdK0SrcA8bQQgOUlHEF8LtF%2Btqf6ok%2FuvloK1fwl%2FztlPjb490vp8zF37WkXaYbO%2Fj%2BFDdjkiXm22f8wUTVcjUA2uHt2Ie9onFEmUnscddDXdkv8ypZHH7S%2BqpWmFkccj6WcfX5BmH0%2Fs4FdCIEWtK%2Bot%2BhabDinBv8C3GHU8%2BcxT5jjGhYVgDjldWOWaTXXoGJT4hG%2FvSCRZnA%2F7p0Ud99cUrkAyXjKQ%2FohfFDgaxGmGq9GoNlFeaClWYNRi7tOfpn2BpCtGD%2B27Dr0C%2FBVSUoXZVtgedXx6t7TIRlyoIaRNDmz2PWwYihNcKbU19rv4LrhRyFjCePoI9TiKdiQDgY27h0me4dz4xkrKrf3fkcaXm3sXaxDIfAXyAq%2BgoFdwb5rj4zHf1p%2Fp8R5AkdFHiLIe%2B%2FJyI0LwgdAgHNBqHC4X3zu5LifUAJDpMaC6vyixBvGUX9vqbW%2FTXs3d6mVCpm2SL8n3tY8IgeEJTuqdoxiGZchNgLuuGE0xogzU9OVch1FfIt%2BEuBcisB%2Fu%2B%2BYLUT39iI1TKrhDyLkGGzcsjnB5c3Ch6Q%2FavqxBM0jnLRtHryZ7DxgPhxKkN2HSYhcHHYmunL8mC54MEAxB7wCcJ7t1UZjU7nI5aTwN%2BkwHlaewGuMN%2Ft2ckGOqUBgtFGp%2Bei1rsgFMVsK5EROEFjVE%2BitCQ0Ql9fAzW%2B%2BuNUyL5CsKr11xifn6enUWh%2BrHPL%2F88we66OOYTgB74QZ1CWZMGfssVM2MElEqyc8v7g88X7tAbzgwbT1jL7wdOa%2BKiWgQqaTAPE4%2BHst9INAH6CxCRh9ZoHvZ9AJZflShpQfVZ7vZkRhxzRLybb2%2BjlUwLJyhPZ7i9rddF7yFwNkPcaJzY1&X-Amz-Signature=61031a6d2f809e862d26c0d98b05e6c9a7241a6e3ccd391309a0577ca3d4bb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

