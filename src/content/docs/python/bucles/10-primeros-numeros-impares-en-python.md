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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMOSJCSE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqF7%2B6CIcUQuVSo0N4%2B8QWxLrEU8jnDFK142XqiL3q9AiA1%2FmxVrFMRf0RF%2FxJl3ODY%2FovTfL2jlzhrwGFRrw0LvSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMN%2FNdz8G8R6GTZhMrKtwDzAg4S8ptaf038K5Fzcp8WMHfU6g%2FLJaIg4V0eTGqnNQSgE7IdA9TzSr3I8htWKah2BDEbDp%2FZ2IsS%2F%2BzdNVs7bEU2akOxjkEtgf2kIAh3irZQieOm2uCtJMvpcicDU9WOxllR91pyn%2FbsNXC9mN9ngCHnYRMeNGDVdUgOkLPypJMKamu5zbyJDL6uqyOD3BArb6L2sKZFPXCsnKo8UidbpJHXr56pAFTFH7OfXI46z9XkHuN1cF8LIjUsqu5J8YdFikcyu8fgYF8yqtbvWWGkLk%2FI9yM%2FeP9pEwqi75DmEu%2F3yB%2FXIlnQKhH33eK6x4o3gYqv4mIMw5OqB%2BKaqGFJAm1If35oYMs2gx9D9oHG%2F%2FJ%2FznryBTgh5IrS8YiZGhAm3OR2gvFNsKzGDtyGeT8s0gczDJOr%2BA8T%2BjSJhFXWPd%2FxHjakC%2FGM34k2Nic0iNsc0OqbHwAAXsfpucLA2AATqTMl623Q8yeyfLc1KOBuk0ZC9ZYbc%2FsZZakx%2FoXT5QABlhKkDglXRaGIRkVgatAEL8fR%2FLPAeIHwPYGslQDp0i9joMn7gRY703%2BUHZLpMayS3aMhYw8nr0AGjjKpPMS6KtGdhHEdHaUgZ7o%2Bk5GCr9WCNoFi1z2rf83nqYwz9TSyQY6pgFPQY%2FYv5ZeyLHnF8iER9czQhG0daV41nU0yCBlnURpIn6Ghbtwtpu3F0hUQbRHmuUaSgnW3eOIyVMRaBAdgzyEzKiIuKyZyek3w6rGffOzvYQhfPQa3mj2sNPoO6TaVQfNlgJvA2EOUj0ORw26KQ8kRn%2Fxd%2B9x78OpkJ%2FbOgTYKBK%2By7l24gYNz8a%2BmaiFu%2Fr5PxtBm%2BbYzge%2FlPpJeMuz7tv96o28&X-Amz-Signature=3e4fe1c03b62c56174ed0179e72a5e814826c8c6231c824c214fb9a2cae0d8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

