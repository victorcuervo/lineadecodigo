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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KM5T3DT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfyONKQ6IbNgpaptbci02HCnA%2FQq6ozSaG%2FNh12jTpSAiEA3H%2BgWQDhwkUUgYi6dyHk2V5Zaex0LUTXzCFNcf%2FLlwwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcT3YZ5Pcz7RTu0RyrcA5YlbwznwdgKorA1j0dRgp9XggXtYmdceKWOSZfoT7ynjzN9zd2P5%2FzcO%2FgzOr8WItdZxWiUn%2BmS3CMQzw2o4mzPeeb0KK5%2FZ5YQQgn2v2sUlONUnvyS9fuO%2B3bt3MKHyZCoqXr4pdZVcsvtPY11%2FESDHzwMJzMha8rn5QDatu1ZgtpseFxC1EGHJpj0HD8IDyig7gtcaBUkQI2g4cdFvIAL4RVyEBwEak%2BDwOFkxEvP9fbYLdB%2FX5j8u1dCYVHkYbMOWNICJ94ATzPtruwULrgqtauncE%2BfiKVTtN%2FdtAB5H3Qtc3MrdodMkvjmtyBv%2FSPkJfGItE4sn8OuTVMZ7eOZYfp0sI5YHZpGg%2FNt0m6FRsnZnyAawFPoVMyffc06qykYthTPvIl0yYzJq0vfrmMpnMNk%2BrVVK%2FsFRvMBgRP4IWbBdVIYpILGWJkB2kaIHYVZlFYaVhmbwKIdZPDa6zGkSs%2BERoC95hMbk7mHYLo9zQez4IOgY8JUkMEW%2FEqcm7VwaHaAFPbY0%2Bhhn88z4h1Gq9wFhjdjrmYh1TJcvKGLxgiopePeuvaEKuShFy5aiTMo2WyExu5%2FnE2ytoE8SU9Jk%2BS8BtUccKvVRN8LxJ1Fsvdk7a0kjDbsUw6nMK6g1MkGOqUBaKNiXK%2FJakFG4pTJirjeX3TuLPQC7uwGSK0BTpgAZ8%2Ba1c4Wm3e5GiN%2F5yE5J4wK05y6BG3p2pJJCLlaU5jg5HhIcK%2Fd%2BNXs%2FpogROBpgzhtxJSDPO%2BBv%2FND6m4cvmfY8CyvmFGk3yB6IVQFKT0hO7vfKJ0RrqdzTGHerXUR5pjbI2hAYxWhyv7M09cZUXZ1hUH7nL%2FI2VBAryLl6HxQXz9M2kM%2B&X-Amz-Signature=c05a67f2bed4540c2f3da085d224e3049e29d29bb3d5baaa95418aaa4bbf6758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

