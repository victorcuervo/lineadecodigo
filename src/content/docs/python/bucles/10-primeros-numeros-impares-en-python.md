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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4JKIMUS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOor2anSiA%2FJ4V2Y8UFLO7eghKThI2vFaFO9HnwsBt4AiBjbcidkysLZarylW%2FPk%2FLitrJWp%2FxgCgYyw4%2BeqN96vCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMauUcFR6%2B5QACX2XRKtwDQeah%2F5lbW%2Fj8ch4mSr8TstUbvN0ch7yTCcw7YWS9YaIzPyAML7XKK%2BQD%2FJnndH37HHy%2Fw6MYUJQ%2BnJTOW0tLmtpZhQXVX6B3XSzDbxyt4UCyW5Y5Lyb%2BdeAse5jBmAaMJkbE0uuOOJyeBoyyGWIFjgzNjqnHu5yPXQtBjz62RarK53y5dlih517bygGw9sOB9EADzrNgSCPJSSBFolAlvJE%2Bc4GT0bLdtM3cO4obNBwdKr3B7tRXLD0tY9CSSk9FgoF5AUdwb9xQZxFNMCAjVHAn%2F5OLiLnxXP5UpINZuLOdenK4LMkcAmPUUEUBJNCHo7p2Lg%2FszYJAv8cjOARqKYosBmUJg6x%2FTz7mQjh1FyZ4OVZ3cyaWwWFKW1ZKCWKKVa8na7ajGm4BtLZUvsiJ1501fCwX2G7iydLucaX%2B6ISSwy0pgWtKiULJkYecbyYt9gRMT02bNgvgZmHcJ96dJa%2FzzAf2iC3%2BhElJr7mlAxj37T4MftW2AHCGJG2SZaIQhP%2Fxj2N%2B2j6nnGFZ3OOK6%2BKlchMvXD%2F9sRYvPgIRgXvoRiQi%2Fllu1URS2pMVtz1su4yK0Nqtiz75dzLu%2BZp8dc7R56wXJ8OmFwCOZUvXCSmw7SVZgpR2YHXDyxYw58LRyQY6pgEk7macxM6UIsYGP26qUFwtH3%2BsWCFqL8Q4CH4tH9A57Rpuf413f2W74EUZ3Tdvgn%2FENtFZXbOSCTephZt9UaDA7GOeWUC3WRE9XmjEna0QkqMwvgNHDZQD%2Fnz9ArwbZROndx1MaL9MATPPy1PGEuYu7zmb5UPznYeQyYXkk3s%2F8Wbq1cQZMduAkk4U5B6%2FeNp4w%2Fe4qAk%2FkkBzbVuX0px9YPLv%2BLfq&X-Amz-Signature=cfcb6e66b61d125cf607ec4a14df80c740861c3199240e7ffcbe22629f523fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

