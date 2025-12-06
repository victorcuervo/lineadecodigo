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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YNNBNEK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFzjpLohd%2BUgVgFzbZ4zerZN0AVwOiMQbVU526fD53wAiEA4QrRtBLIK8FIHlJMiww9U0NhjsNX0Nmtw4X19zjfOM4q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDMReSdIsZGi2wP2pvSrcAwn9Bfdg5euaUI0uVrro2NrGYXp%2FjH5AFy%2BwhX9Floc2M%2FE%2Fzxu6DWFXcP52mao%2BG5E8sBqsiGm2C3cb8FF1ig7%2BgDquM10sL4sLBq5Y6YXqJZi0yqKIlDyFjx38%2FzPOwz6fZVK%2FlyzsTiXiEFIblQU1wcAJ%2Bc75s7M8tLkM0%2FNIpYdggVvF9kLkrCGQ31DUiL4XtJnnkyZSWOFwKb9sFtt7lmHfIra8RPOCeONK3qvlrAVXlMOV3%2BCP3ho4sRyyQmk6C35Lox6QnSC150GZtT%2Fd3PGX4Th5XtbLLxdwBTljYnHqM502ougoJVz8FQ7FL0d7HCHazHRqQBGbZ77bLyGm2AqFo5COHmbJMnZwWDJQbSwtK4%2BqIczq%2BjS9Gdn37JhxkaO9wF9k8qf88R9Lv8c%2FeR%2FoBX6WlPCTiIP9nqQv2ek3puJOisgPYpkPHXbc40SrxvwS%2BQtTnO4IyrQz0NC3O7WKXr9gqV8UfctZWDmNIGbYnTqjx5Qk5ziu1hykGieMuadkLKSrJi5Mp7iwSgmOcwY6DTf7KhSsdptguM%2FT5PTXBFed9uOclC0plnhlyGQlmOTpm08oB%2BQ5mwH4xS16t8sNNb3UQfZj67lBW0CRPl4MDRK8Bs9QUAvuMLWnzskGOqUBUx2pz8TjzlX9IMPOnwfB5v7V8YDYZ4lPibGtU0RfE5qt6u%2BDPRBHVzR8PAJJpCVhgJoNX2NjY9x44QWjbNBEUOX7U4kYFJRb0sDCprsgTnjU5lJ6b79KA7GGMWD8H57019qWrF%2B1oAs8V2TK1Cs%2FJQDsmK43Y%2FcVjrwCQIQNoAar3RubIHc7tflxGglZjnxni8%2FQdFfrBcup0X3dyGs4ui0U8p7z&X-Amz-Signature=537c94778076ed21fa6279a126adf256fc6a08f9f6f8298b37ae94fcc62faceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

