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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMKHG2ZA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDt7pTSXo59x%2BVgGicMjljTXEN3USY%2BFb5lKb2uRKd%2BWQIgdnZHVVElXeK2Zv2FF%2Fe6Lu8J9%2FdwJm5r3IWf0vLMDYcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDE821EFM8snvxMUOkSrcA0Uyid8fEIDguwOhtC2Fcn7nOOYXXUSjJlyj9US%2FaWrZ%2FkfARq99e08ew2PT7zUx29LVmql5O9sBubt85bSDZVQxQ5zf9dIsWM8waMOOE6jghkB36Og52Sp4fu7ov0IhuWmGjPtPKsFkKDWOibDXpMX1nTzSWWrhs09SFW%2F6CuTJavPtpY9yvThUWIgXawH5euS6qf5WMCRklNYB7YJNZgkKDQVatUK%2Fk%2F4fm7HOKgTJb2vfNtn%2Bq6oMKUXguriUT1nu63LVSw24yrbcX83e%2By4FIxkgJHYzZee2Ik%2FzJgfwKRVVT7%2BFbkbmUcFeHsbl0dJVqG%2FrY%2BIGOc7AONsmWsAfLKKmRpyLIgeqeqmGMyGkkBGQsVl7G7h4mHcs56E6SrsxrCHWxfnWykP0TEm8SLjRjAkQe4tsHu6pt9%2FzXM9paSD9odLr8f4PJyk13ZtXZXixn5TVSP36O2%2FIZpnx4aR0u9YQIG7lbVKuBFQVIvcBFc6SWQNL0bOznST8cWzW8d5%2FMQUKfqG0hlpdOahuCes06Rkuju7akN92AOKoZW%2BNZnLP7piL5nrWczUNrYYQHZzeEwvDfOfmXKNhwMY2WJKQPVPbUYXTAvLNc6K%2FytaimuYhJfYTI93Hq7ExMOO%2BxskGOqUBebJU%2FnxyVgm1RJIyuwxAbOa5ftNKgi2wV6zm5m8%2FSWLfuLbOqr9QUPf36Dl5L%2FiMqAYx%2FGGK6AqTMwYGb2dqEK1Y8M9FTOC8ITsoK%2BOqHgD15n47C63wmovZAw%2BsMT4z5hUXmik7oSA1ZqBdLT1ZDB4bCKhAkigNFB9IqGlc44xH3fJ0yl8AB2YeDM7cBR9AQq9znYAWLj7VidfvCywzw3HL9Mxi&X-Amz-Signature=2714ae1a6754fd44598db9e688cc8fc3289034f98a7b2026d667ad91b28bb8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

