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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5XGJMK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF3PL54l%2BOeKp9hp6Z3QuUi%2Bu4JziMBlU4XlQWpq%2BBZkAiANm6ND6Nr1WdWTs0GAm36327XhMdthWJBLEYwvko0xZCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMIB34O4IwXWP0Qs7VKtwDumCsuBHpifo2%2Fc1feq0zRCzg4hkXp691BWl6u3a%2Buz36tWeK4FmfjLGFTzda%2B54afZcnZnwMJKCeJ4%2FSmtDKwabjRM7O6MnT405ND5KsI8fpuepjtE61GAvvPrwZud6AZJvit67nEd%2B0AF6t29ll5QzBPGmAUyTD6mGjIytPAx13VzdQ4RdFbellMT2a9E1x6O3pLMbWMH6Cc093Qge%2BKSg1fuWYZ5lAdu1DcpHBOe069Pi3BNCc9zkMbnneJefwSKr1yWYe6XHFp8O1hpWL5xGM2hKXG04WJVqI3q4OEY4HmG8GpcnbvfsYhGCZmCXlIEShxYJTINOwUl5nP2ldDYmnll8JokP8LTjkuS1qzCR90J5oikBq2L%2FYPWm47%2FLn8jEmYWpWGKDeNy5YQT7LXR%2BdyCU8yh3TXtS%2FyPWl%2Bu7CfLx%2FFt5eeDsOGV0sy86bC0zt8md%2BI9DjZHiZLcRbKO0WF6uGGise84BYRTZmZ3QhQdJ9fxDDM9ocRlZEcQLhjZw4NG1CueSybW%2B3ThnOjIRoNnwduBUnnF4AcTyrA6rh%2FYc4P4XfiPMbzK4%2BZWgDsjmo2O3DbjOminPEpQtp2uyduD5wPDZAerhPWTMRWAXly4B4MH2iAETNc1IwsdTDyQY6pgEbprg0o54Q3eddy4JTPDNVoU2IVt8R2UF2ND3QR8PrQbMloc4717FfweODOwQdr4H%2FMlcaArmFsXBjjGQfPt5MFodHzmqSHFg4PF45SRY8FHpaZu6XF4wFLH8LZBo12GiW%2FrhUYJp7GYFB0koWcOhO7t3TcgItuyzDqO%2F3%2FU4RB66wHO4RLLtJru87rzojJt%2FVC5byApzPLIeOANQdCtWOvoqpzITt&X-Amz-Signature=38aee592c7bb3fdd0400fc6a18ca556fe09e6989713486300bed25522e89830d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

