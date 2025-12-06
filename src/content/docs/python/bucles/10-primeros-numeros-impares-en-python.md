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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDD3FZN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCigjo68hTA6rtfAqrVYpAIH%2ByVPrpYeU606vUpA%2Bpr2gIgP9w8o%2Brp7AFCu80XLpCSvzUBZ4dEBuaNNCtN5tLsqdkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIZY74NQNkfDG2x9wyrcA0mffDK%2Bmm6PQgM%2BeOqK6D2J2Oy7F7PzQzqK5xjqbu%2FWyR2Q5LBGGDGLVkoBf3xOfQFDO7iWqy6F2znONe4knO5VsW8MWiCN%2FV4KIsWGjPGrh7LZRGfhYDsqAmb86%2FUvxH6wRZzUvNWAwNOHGnnlBveBoy7XWsIHK%2FlAfvQNuazqRVmrIxgeF5kdOaNSOlRgWfZrE%2FHzGofLVinAbdGTe655ciPwpwUrM807aaXSPeXJcg9z2vCs4%2FKx5yuTWzRQSPbit%2BhKwft4gckyk7DOsNlgBZdekYZtJQJ5cScMY%2BH%2B0qEt7gyrbca0%2B0G6zOQ0cXGcVH9vcaVXCLXXCr8%2B%2Fa2xsfLWb%2Fi83Fdvd0fwFXTK7aT%2Bib9j0dYX0bEv%2FWqLOz8uQzJAR6y%2F6An4roXyDLBOcyjpf0%2BtS1puyJDzuuAIaDGPzL5xfFsAK6oUYwXlF80uqGt0TcZNB9BlnwC%2BwYA%2BrMl6KfzREO3PtkcIZJ4vf4xCHpzuwKkeUx32G2HO0OU4kRKN1AFjg%2BAGkDNlrCuimc3tZMXbY89OsvuI1bRuUDad%2FZ%2FMTnXXjpWdd%2FDuuCRZHJvZxQbkzwIJGdQHlDPgbN1DSkYwDuClr7BuuaVtNQRCrdEX%2BqXwKvpQMOvM0ckGOqUBJsUapPCZdaUzY7xwFe1Xd1DUfnR108%2B9sxqtM6c7UHr6AyeP72wVOzhA46wnO6SwNxJoIHzBduiWasZvgmzSzjwBCRw4aCetgq7v91zCA9E1y3dU9duUQe8CxjtHDu13glkdV4oG5kRlL7rkbHmxPl4p8hvzrLb2B6z2o3zhNNCOGkG8AAdXG8bIFo6CEDge4ZOoo9GJ%2Bdyc9raApDbszmxsu8F0&X-Amz-Signature=855684a6b00340abccfd997baacdaf0bb58402314524aef85ed29e18e92d25c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

