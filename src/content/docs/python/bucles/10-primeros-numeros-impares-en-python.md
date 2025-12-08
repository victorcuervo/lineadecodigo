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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVKOXPX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByNpRA5GLdjSamnleIMdh%2FUE0x1%2FB30bwk2XG5KoULIAiBhIPqSlsomKZhBe%2BoNqtkAPyr8TXZ%2BuHnet90r4JA7XiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwj2kHtwc%2BcaUdW2xKtwD7U67gR%2B6FNB2WiVI%2Fs6GNV9hDu28FDai%2BdDPwyFKlhDa5irDCmjr8rOdANeHaIglKqLp0fabdCQ6Agh7AN6MQSEfR8EFds%2BsYhXkjFDF9QdETPcmISzSgAQUoYr5%2FkcGVSdXuVdbG00lBFiAdAvVV4lHPv2GSR4NRPkgo1tPxk5uXXp2WTF3T0Q9h7p4doUjhM638B6oLuUTHwRZn1x5YQf21ML5lS6YJ2sCNBdvi3lNXOfHCLpCwjiPsPht%2BnWOLgm50w157MqFtKZVJ8fF80RjLvNNo%2ByvrzoyPmwod8xQX1Sy5U24Fe3L%2B%2F5OgVCksDdbwrn1CIeAJO1ESzG%2FIlGr6FIdAvgHB7%2BRhV9Wtlh3dRm2ACx%2FCX3J%2FJeNiSux%2BUqFR4wrEO7HExo4wpfNFVsv3%2BnYI8NL9Su2jy3sJnpMvcSiX%2BYSvorxXcpyZCjMVKVxdxYhKjWPei2CMTJfJE6z0dwt9ZIa3eOVBeOiE4HuRSvCvnRbHu13%2FF39pOXG%2FynfQks%2FqUj8o4sh6xiNM1FrKlxrShEK5CEFD5%2Bx5biO9x4iogJLjNz9Q92I7WFAAIUsZSLQoNnqiwI%2BKFEnjVqS3UXzYc4hdZIGTgkIQVmM%2F2H6vZbEstzapzIw7tDYyQY6pgEo25aOwLgyb4qYSkvsbLVNGz05kaAdWYL8gKql4ryQYjsenOb4MC%2BhB%2BFy1juGDwGJ70d9m1R6fcmi6%2FO3CPvzv%2Ft9MnMGVXNpX7UcXTkc%2BIX5%2BwNaf16mzC5pcB0jDrHwxxKMrLVJ13Lp6Twhn4ZUxarNVe3oXw520fUq0tg%2BUEuOkRYERVTdyPfhCPm947LaaUEP%2BYlCmYJCw2NJIhu%2F53aWzE1f&X-Amz-Signature=bde9467dcd66949f2bfe46ede907ad26a576abd66f20ae2a6042da16827d35d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

