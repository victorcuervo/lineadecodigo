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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYYJVF4O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPzhF6EpFdLxmaFVxlJxqQqIGZX83MM635SIgpqHppVwIgEHr7CFKCx0iszrMs%2B88tEnwYf5MrdsS7OP69rpWR3ZYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSOliNhf3Nr1YGuPyrcA7GKTN%2F7gH8%2Bi%2FCU5fnefenZ7lAckFWM0LzI2yqIDejNRNwqD21X1gXxwj0tVudNpM%2FLkXX9NrqclVv3cG6MIXb4S%2BQeHWI%2BFHV51hUiyygjBm0hk4GrhbhloIc1N%2FqOde8mZzCDgzPCHrL6FfoA7DpCEyr4rA9MLA1GY074s2njXSPEFHDF7M9IwsOM8KhbZVoKzvwnZHvdGddoGLr7l%2Fm3MRYcahU8wS9NNcCLi466sU%2B6BHU9GXWd3rC8voarWAYiNeubjfzHgybvOI9YMSwTLn0wgyBCk%2Bd%2BIgDkQT5x3X9CQXVwb3O9WdyZjWbm%2B70PA9y%2ByWo5wISw%2FruqgE49kEIZWWzv9JB5CkzGO0fs7hkOxPIo0QN3UMdlkpQapJtShcx%2FORx5h2bAMTbWnlWMyTKnYWoT23FVGaeusbuQ0eNKHqxy5oWrS9B0669BWO%2Bpwn1c%2FsFFYa1CiO33wWMIfOmeRtlyGSXyN%2B3O9Cji%2FzSyZKl2g253W%2FVhCpXt9s8O59Smcavt%2BGx6xmZPv6ukt%2Fk3iRFrWPe187DCEgA9hNlCgNC4gyjJNNu3VuOvJsyW1eNLyla1uF2Sx7zoRE3ulPrhPJrB%2F1lryn9I97fZCKZCWuHRSr66y79iMLaH3MkGOqUBgwq%2BSiyI%2B4DjghKoAu6HlWOZev3tK7nn5CtS%2FauaNFpuES07%2BUuAtJ3OaexGg4%2BBHZ27l3bmqFcStGqg803FTWhEqBDvwf73C59X118%2FHGXQq5LQ847cq%2BxgkMIjjryicPviRlX1uysUMRvP2VDD43B5Gej6GH9mFNpUYXYN8%2BUBSXJ9u4BTlWxExT9d8%2FJoOuYBoxG0cgwHk9EnG1qoXpOPAL75&X-Amz-Signature=b52254a636d9e0c15161fa08ad22cee83374d137026b5aa1e2b7ffdd987eb6ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

