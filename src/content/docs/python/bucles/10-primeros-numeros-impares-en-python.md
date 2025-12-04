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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGFLKBC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDo8qAw1zAw1cQHiUc8CY078FPnAI75udf0Sv62NK6S2AiAqA9R87OJaRNC6J2WgtN3X90B9y58lTYxVczVar9t%2Foir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMN4R0%2BvRs58%2FdwEm%2BKtwDETgjMGuBkcJD51U1QIerTsRDuf%2FagYmkwJfZ1E%2BY40qsoiFItllnHuYqYZW2Zd%2FfYqeypeZvPvMFn3y14BA%2Bz%2FpExQMNxzHBewTLSHzc4N0%2BV0AYp5RvfZKrh%2FqgSn%2B4VlC96x2MLkMwnHlywv05WBkmjyxbSfYYkCRB0XmHaS%2Fd9LnMr%2BLcISPGHHFbhD9PJ32nqN7oSMz7g34CVLyZUsVbWOgVbFt0QqFS9gx8wrgs3PaTZwEJHaGuw7q%2Ff3ILRH7yM%2B4XFu7hXj846nmCJZN%2FenPzSj9CLD4P5pkuiUbFMtx%2BvwY95udKtUHRj8oahnKobeiHbYJ2Ohobuz8IS2odgyDy67gY7ueTlYHLE0uB1hTLya98kK8gFjQtsCcD0SrprMiO3txWUvDVMVYRbWVQ56ITVv0UrhkqiLLea%2BY1%2FXm1jF12XU79FJIoSrWWPiQSCZbjcJQRgpKUIa9mbFIG%2Fq%2F3DDsaXUzrh7AUUfaIlpOoiwWQmBt40S2UbZJeHYGzwWTxyFHK3d%2Fk9UKrCk3ZnD90IzC8sERYuq2LZ1scUxBTKM0DHjmc5oRrSxiowEzNp6jwipkbY5z5fj7UQ4K7nYN3EaQ7F1lj3qj5v2gH23AhoMepQqtbIeEw9dzGyQY6pgEf9CMGv%2FRsmJxQi5zKbsLuWyhPP%2FGWS314BAVLUJLoaeBTRZIG8inK17OIq2eol6mQRQFs3Xk3iJeLn5ryqCVJxVopWSku4drR2QpefbRVbDQ5Ubmbc8%2BJ0qXExjh2j3W83TvLGJDly4dGJs6DSr6bPggAPYmeve4C0QzpLf%2F%2FQKtyM4om1imJqXEzDSgakVJLDyhT%2B9LASHW78XIDwb7Bd7U%2FTr4%2B&X-Amz-Signature=3511800e5b363361d8b7fe6bc490e662a3b7fe5fa35eee6a2471c3016a5168d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

