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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVV6LHLV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9fY%2BTiJCxq6q69EFITYrdYmQplgTUkob0sXh60%2F4PRQIhAL%2FCyXwXe6U%2BehBq0LaY%2FhRVUaeSdBZf221RDcUJX8emKv8DCGgQABoMNjM3NDIzMTgzODA1IgzQhWfCHuDXWMeitXUq3APe7k%2BgiwNm35MuSUuE9I%2FhLNK%2F2%2FxgdU9tNiFQ9KOZyh1UPPyvF7lOe4GpdqHZS28A1QDjOJZJvMy3Q8eR8WXhi2YegB8bMZ1GO%2FJQqhTB6KGGm%2BuaI2PXRgiP5AT%2Fcpzj0a8ZnghpCxjNqsI%2FcvovA6iPhmIweyj%2FTMWscZIYELlzmeYYGfFZG1PVqdrAC%2FtskKh1HMfBzQTOyjj5KfaiSuQpa4zpej%2BE5wB7fAdESk%2F30STo%2Fj%2Ff9grhVbotwuMSjC5CW6%2FRip2EccrPJz2qCHCSxFJZvYvHADBmevHHBQzepB%2B87MdeEmTTetCnyQIxbA3XOjpDOBX%2BtF3Gs1C2TywWYa1ULV%2FIZ5XQinRM5YEXEafwdj0HtiXh9xA8CH3wzfat3tgYfIP%2F3s%2BVbjOJ1shQ1Ud9FOC1UJhMOQLYPpm9griPanBqbyLJ7ymW0exadi4%2BejvGIY3qZuTyogGQZ3MRpXT680kwpJEDkPi5vlofgQJgcIARxOVC5AiieOqz%2FPnVwdss12hzTygKuZ6E1XYJfno4d3YALhrbiJRw9bjC8tMuezSto8G94B7ahMqSC3tdoLU3QBvAK4tuG7P9lZxQXgPi8I4dBVMR4JCqm5a%2F5ykIovKargYKFzCexs3JBjqkAXEQ9WTp8UFgnVIZl1wM8vb5pEVxK%2F4YLmq4oNXUUwuSi%2BtC%2FNXWv0X8ZP1mpsRtsbrhl%2Fd88IIcEaK0V611laZsSBMdtgf0DMOzGYLxg%2FKK6zs1JsaYLtTKd0hXw5Lhl2aB1NlK%2Br3WnmGLhrkNYfdUVFMXG0Dt%2FvNiIVQvL8A30QLCk%2BtuShKzU%2F4kcjUVH4Zoo5DljMgI383FpI%2FeHSCs03yU&X-Amz-Signature=3d1bff1c3c9698aa07b96a8e268572c28272ae85851e4239283c648c6542afba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

