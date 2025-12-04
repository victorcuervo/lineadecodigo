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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBYQLFX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDKRaggeprA6Dts2B%2Bi99B6qZRvYfEZ5RVGzpn2hEyniwIgPEoEqGlzgNeUXdy%2F47swmNGrEFKKJD52wtKMsfM0ALkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHteHVaVz0phspiveCrcA%2FAELuGX99P8oCXpr8gZxFpLCnQmCAWjvX7Prltl2U8i%2B4R9suOv9%2B1kS7WJKZ8B%2FrL9L%2BzKxJOxKhX5Iv0OfWzZoodGZOWhvzSff3v0OyDdVmPhmSh40ToiVDaiD%2FZ6oZtqIaVmCplCm6rXz5tqQ8Ajt%2FAZpQfJC3m7%2BPoAi1gJ7IMj2N0GWIA%2FwMbifNltmYM5PtOQc8RMr1hIJZhh%2BglqKDd%2FIqZm%2BrBcW%2FtPl%2FuWb%2Fdgt8dBgo5wXMGJzfDQ%2BkbXpoYbU3nkAwjvjV8vWyJTSyS70sXJUs%2B4HH0pBHUk42XehlS%2F1RCWWEfnEd%2BeFUGVTVkAwYodv9sdoviJ64n18Dg9Yb6UncoalecRWpFbcLRzNmqrxrSOQPhnOaZ%2F58M8gbtLlc0E16UeNEh%2Br94uZKkxankWmzqAjDKa08jZzozbtYAt%2FWdNUCiZ6ayJY3%2F1aJz3SllABiHxJ6JnRrhGlL%2FJGK9Hp%2FVKQqkGasdj7bUAXQ6SNem5A8Cc%2BGYOzwxvi8JVZJV%2BxS5Ep8l5G%2Ff1OLBPUitC6e%2F5ZJ2kTQsoruEh6L4f%2BpvXu2aBZP6F4LAvBBPskVNh7npHTSh4KteuPTfZHNhOGue2ISG1Y4sH11CC9vslkYg41HqDMP6FxckGOqUBlr36EbSIZ3NLMvrJqCBZYbVMqbQqP6pdW439ALryUQQTgjh05XTgCvxPeLwAWn2Yco2cGwJ8YIQmzJK3KA%2FNcF5FprJs61j865FDsle7SH6uW8Mpuq3rvVflTz9bGjDFVJngDxxarCaSnRGGvNUTaiB0zN7kEpFhWgvWMaXeCroZAKPQzu5UqjZ24lQBEfueJqLkbAwelqz5e0AGTqBuBcX%2BQaQk&X-Amz-Signature=03185af8e8e3a7e80ae48665a2bbc2b3213d7974081e559749ddeb52240ac0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

