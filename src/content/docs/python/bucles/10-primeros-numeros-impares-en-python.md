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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNMJYOX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW6LZK4WnscHB6clPqh0Bhr6E9qeY73OFEITQ2Oi098wIgQ5QY1qiHHGxQ9FY1qPVTBgk5HJPTcU%2FuRme6rIeuQtQqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMuHyyVLsn%2F3htJRSrcA%2BiSykj2EtvkrGohAmTCKmxaPo2%2Bke9XpRC0%2Bhe0Gc4yonJHMO%2FpP5UggBpKmmrNxfPeg8%2FUUFhJMwvKQMx%2BEHauB4T%2FYJFPeAK11qD6UVrdfWFBZMLOL91hoEjkZYzt9oJJ7AM6oVSlZ2sr7pfF3U0Lu0V4DK67s9ZR%2FVh7ymJz8nu2ugN7bxlgiKOlMnn%2BvvjSdot3yf%2BaUFgyEyb6lbToHTw6zwgDw0tO2KWC5zrtXNd57q5Df0PspWt9Qqv0yFw4SwLC4IPzB8ndGOxYJ2jqjzuby64qiCCdFXHpUMxUuvBy%2B4KzJvOwTZ3FArFcZjT3D5fWIxcHUmYds4J24%2FhTEmjMTCXWblU0dnPcWTEZhSeF4b8JcDCckaFVceUJYI1iejYw25DC1f%2F0MrEtQfb77%2FGI4wyuTZykf%2FPUzATuyXXiFR%2BExPF4%2FEPY9FRA4ejEqW8ysmLO8uIuZIo%2FBED8FIvvf2Q8jtAvLNIP228FDei3SuDWJ54ELZjAX52cEoTql%2BGR1N%2FJa8RkBgTWNj6nsk8sTylgAC4j5WoAWOKVFEYrJDG67RzZdBjAvR1TEu8GyTZvG0J2eRtZSZSAV33wGfStrlKl9Iy7J%2BU6LCjYDNG1uKJVClLn%2BKRdMICI38kGOqUBJmIi1gSyPCtrtnHZbP66jEdDQFcutKt5ay0mZEwvCYeL1emMl3yBThXYkHId8Xs5PhJkobSaufpmgl%2Fv2EF2Tk4jbw9VDX5bQjY7On9kk3niIVJv18bk%2BMk1wxupgy%2FaJgc6NhFrprr2SGdhC4o%2Bo1feiO1slzCA9JrmxRBIC0pnLWvGSccyKLGC4kB0yKzZs4RLRblRDiTjDQOvH3%2FGTZhJg22C&X-Amz-Signature=a0905b3ae3ee791e0a50c272721d2fb33e4d786914a5e961014a77eb55176b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

