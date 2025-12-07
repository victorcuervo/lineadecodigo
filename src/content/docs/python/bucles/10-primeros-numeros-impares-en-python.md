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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYLJ3R3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIfhBfUFKcP9AXE5pKRq8wHMzKQO3FBv9IB%2BSrFeaPUAiAhDucQfUr%2FhN4dPNtUXurnLqKi%2FzwQYzLnd67y9P1vjyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW90qIUyM127soiX7KtwDop8R1ai5yXHc91cZss2mxZLfXevghRPgu8BBN4A3I0vEx5%2F9SG4UzeDn%2Bl5xRxp8lO3X%2FQnGuRXtIpAnPw1oai0VVNLIJJOzJqxzOxa4O%2Fw7gg07TYwBdau2RIanIiqjDvC3jAS29E6RJVI%2BNBYny2JYYQVh9BKy%2FjyFfW6zbRj6grqCWwjAVd3K5jh%2FZUD5hFux%2B%2FqHP1gtpZGljF1rLSI6TWAZKWsF4ArD1WuP1tIDo6OQSEp4DQALRKmx%2B9hqaPr8WGSdZWLDaLi0A2dvpTBjZR8SeGDLHJHsLJ%2FYFKo02tCA3wD7zzOpFZDSfMHjfU7b05WZGn43bgV6tDRI7EbWl0%2BbeQwPnmZ16eE4t9NTcD%2FT43m3UtXkrLyxOl7MlWEgyJhkC24F205plY44JAyc34gJzVY4UIMxSogXCiMWJXdR52EdA4r3EZ5RMFsI6V8LNl2oaxKc8uOozyrlaORjMJ6ibxZkb9B7ZoCFYcSYiNePmEEt7HC5JFl3gP%2Fqz02j8lESLn7bpiC4ROcmV4yuGTbj%2FdWXiHZsrO5vQ1y4O86PYIRn%2BIK0XcCm8hzdrWi493P2tSTEbEquGqzf%2FqygVgN6QPO%2BTWXFuyGgKnujOM%2FOsjM%2BBgZBlyMwqZfUyQY6pgEcEo%2FCvD6FCKHNoIP84x1KBQ4%2Blbua8DaXWFv7eTztLpu2NbHxlekOtkkn%2FD7HTieek9LvBFHhyPy%2BTYYEkILpSOncviNbP7%2BEWUnAK5krsWiId6eCQ4orRueQ7y7EM5oRySTPicSb18LxoBcVVySrHMMpzne%2FFtckzcwNYg%2Fh68fAaKaEHivlk8XsYcEiF5x3KpeLTPBDrQE3uesOBbqF6MQYIdQv&X-Amz-Signature=d31bade2d5c880254828c3cf96acd0da213f05e77dc37e5be002b101cbe2762d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

