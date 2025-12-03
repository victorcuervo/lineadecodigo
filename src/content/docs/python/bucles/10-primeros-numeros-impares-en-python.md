---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJQKYVSH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICbKza%2FyEn8ohPNlcpI8vyPdfHII5tj2hSesiql2WJJyAiEAnsHv1jOZYcAZD8LGeL1XtSgE61iSk0ZMotGRRnoumfYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDC%2Fxni%2BkZ5iOzSlKNSrcA3Qio14lSRkFoAqqdXPzXBYH%2F0S5kE%2FjNDnMBh88LV9pihqrc5vN7g3SrsQNpxP3TEdhD146BohUevgQwtjT4mpMCEf%2BpfqwGAQawMAcZvyj7u2LRAyqUnk%2Bx4j8Oo3YoCpwiWiVGwNsvWR9%2BQkuM2ISwUyVyU0kkFFNYX11%2BEEBt75HsYiZ7XkAo5veSKsima%2BE%2Br7%2FELocRoXly9qpUA%2FhhZUCc%2BqpdiOA%2BHRtdVjKxSN7vfnvz5TZbKqzuuXdv0ZPNtk5pr28Gz6Eae4KtlBWbfULgZQrhXJ5inxC4RrS%2Be95BdF%2FE5WJIwIM%2Fui2imie7MeZC9azK39lmGWG5xmY8A0kguEC0dm11B6fdINbJrnulrFRAKzYFdP%2B1HfDEpQLyTRARj2tm54t72i24nNjfeWw9NKQexzMQpR0AIx0liwIApAz0Q4%2BpztIJpUT9%2BOozzA%2Fgwp1NwSCR2R3dSbcIMW8CME9X4EyDTY8PjTu%2B5r5WDA3FeRQ3q%2BXMQEOK8%2Fe8Bs8SId%2Bhb8tqjsAI10PyYXpY7youzuly2FEtFY%2B%2BRGwu7e97TPOtY9JD72d%2FJMxr1a4QnRe7bZ%2FX6wxg1tmtH9actDKm8leLR%2BzWSb08LCf5jWLsit%2BwKZnMMW9wskGOqUB19Yn0yYY4QsytPEw4JayGW51F4khgtGSU49qtVF5gMSaRM5a9MivvmXJ5J5dm78cVAfmxXLLzinIyG1xQ6LN9VM%2F5wQM9KPlgoK7MRtI%2FRt%2FeGh7Agtl%2FO8bEzq0h0LWNVV%2FZcamyy6bkS%2Ft2ZIjSGTTtFs0Vu8ycafsBjG9KeFFZMI5PnGLNT1pU600jEQKM0KFUkvVExnFstM0QMT82%2B0iFWW7&X-Amz-Signature=1f3517cc41fc5010352c9f28f98b726a8de479bd75ca4da162d664ad97ab55ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

