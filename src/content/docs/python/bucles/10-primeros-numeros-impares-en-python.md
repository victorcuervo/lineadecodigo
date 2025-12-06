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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NP4SWGQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2BkxoisHwdLivhEkrrYU%2FbEEZHd3yiOwcHV4PowQCcQIgO79N8%2FwO5o76zViEXraKSFZdJdcWxsS5RPj%2B2qbr1oQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBUivwE%2FTe8ArxSwuyrcA5k7VSOm0AEyQwvtKc5KxtR3qFvStuSSYZ8L%2FqS2riPM%2BWbsCb9Nu4693g3uZ59F67sWQq6bqN5oMiJh4erQj7aJoy4ZMv%2BWaOwf0uGTr8wh5QZb%2Byv9tEc1WjAJvaNQisHxzft2CTkcoddKEA%2BTNrAFHMqcHI5MKjl6l5i%2FKD6yoYOjl6eMabyvuJJBtZNmn%2BqtKpcaQHHLUpDOY4NTQaUY4jAMChhyNgfFIMukRWhVTqWVnal5m4AtyX%2BfSXbudhJsYmSDL2QL%2F1ucoIs71j4crO4psQuZx6xbt%2FCFYcmsZ0sHLub%2B%2BY9uM0RpYsS7IBS%2FyiN%2FKlnmXucX9KqATp0f3s3Y2%2FyuzeUXhVEZDNU0awldfKPVuLiyeUYdEG4Q17M%2FT0CAoqj8MqN%2Bbqbvro2iygM0vJBDIjG4ZdW53054FAu%2F%2BW5VhPgh0DgmBydt8n6sar%2BNhkhEDsR7MCi1xURFOsoWA3fzn42Wk65yDVFAnDIGdeQXTicpyVVhQMNLo2RkpffqC%2FfK850nkPdIqBJ2mWbDqQdjGQCdbD%2FefsBwr4W7xDnq2DKmlsIQI67Z3hv1uaOJ37am%2Fy2j3J2Q4OY45eeC%2Br0LQsZ0Y1rhK7mJ1ZY5wO0KT71ySZqkML6KzskGOqUBajEPW8HEfBjh6Zbbv9MMyJv8uC1tRs33WGEryWsKSqpJKXdIEPldU9Wwi0sQUfH4BXP4zkvUh0KBXs8uh6QCDG92aYJa7ExEGI1TeXE85xB%2FoFbUy0ExzrTii1vfEV5m6Yt5SbrhAaOdlO8JSfHncp6g5cI9U2bK1cNj5jRgmM%2Fi4sq2%2BvIUBBhDefeQi9wdos7qSoRBlV2p2gxMFBJpP%2BnQtlLS&X-Amz-Signature=0e7737affc9b328c195cb05e6b9c4c114f308eae513976b2a9c5692fe95a6aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

