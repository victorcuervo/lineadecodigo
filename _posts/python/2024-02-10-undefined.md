---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DRQJ3M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDPUo%2Ft53%2B0vNZH8diQzyai1BUsJU5RaQ%2FSymy7L5nHfQIhAKkJMZEtGSTIWeO%2FBEmw%2Fc3NKuFN7RcF4c87lSrIoD4oKv8DCCkQABoMNjM3NDIzMTgzODA1Igzky%2FKNHVmpsWq1wtAq3ANqzH8b9SNInvlIQiWESZJUs2X8QVf3Oyqb4dOAIe7vLq07bS%2FNXIhdsW9lIvAZjN%2FfiU4ePS8tr8HWFx2cym1bmbowg96ydIjCIQoNkS93Sxkopzb0muh8ssiUdUNhFmbuPxxV7p%2FDYkcDyFS04Y86jlegP7B8rbIv2YHpENqIxW%2BgZ3xKQddf8B14e%2BhiByi0lRaORhx21YS8RIiyv0UUV7T9eFkHr8WmPejrVwQD9ao9IdPsmq8c1KgqAIuGXGKKfOByrg3PherR5atgF1eh8GiODqxRUoB%2FBw37lY%2BPANw9dkdHCjSAsSfDsPuOySkn2CEeTW3ZSu6jWPWZ1D3t7LPwVQoqPcTi7uZbbHvylXwsSBnAYi0BiiHrGmSlLh8OikgwG6FcwwPPPKR7ZfONkcwO8Z966xMnlmps%2FxyZhIJ3ddoEu1wAJggQLZ6VtNgDPYB7tTP8KxGYfnyOexiUFTL5Hw30bav67DTfxTPxqI%2BffmUP4r7KWhxvvs7Y5FJgUHw%2FjAMNpyajBNC6P12zDnfzlXt581Qg8M7CZ8KuRAoXLQtzxGBh4YBxCjtFfOCsUxGfJ6EKXPY57cIZjvhQNUHVEGCt7qSwRBQ%2BjyAjPngSClPyDOveIbJbXzCD1b%2FJBjqkAeYtOXekYhoA%2Fkgc4lABS3WW9uQ2xvVqUoonYi7a6c53I6TCsP%2ByRpPipzaRADslUz%2B0Y8zKlrwHVSC07P2Xu1fOCgBWYLdJ%2FXR46sjyFHl8%2B3Py9smd6G8hnPE%2BBb5cXo6nIDe3cnAi%2FQSd3N%2BmYvDqK%2BNMfG7F12sOWc7ux98NtOJ5nZsfGdRR6bGwVaCQxQjim6PWVSc3VKvRWBGPE6VCuEEG&X-Amz-Signature=842ceb5c602a652055dcf1c53175e9e4e1cca14a2efd51d253c1c50f86e008d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

