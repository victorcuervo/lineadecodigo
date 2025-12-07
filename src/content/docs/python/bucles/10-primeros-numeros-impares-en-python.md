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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMFH3ZH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZJXYJ4RlfSQowh92dFTi3Q8dCvs7QA7Lt3%2B2sWaBFCgIhAJWfBLKVS%2BQJeL3F3dhXrvjCXE13XF8SQceX%2BmzoyBhcKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQoPAdznC%2BbUzgU8cq3ANS7xcWeUOOSoQLYmYVecAEZdNn1BH2kN%2FBjpe0TJvnUkysC6koZJm%2F3FJgcvCAQO6ew9vR%2Bdbm%2BDHFO6G0eX8KW2PllzbtkOepOzXRWTQ6pUIFQahG%2BasGnnLiO7zrBt5PQm9IaafLX%2FkB6LVhdYusYeIa7ow5BpUrTn1zf%2Bscs1aL4pq3wTpFdRa9x1e6etqVtfHbqBFJLw20%2B01l8ozWc9ver5tgcAUcsuRzgxEvdbA3nA%2Fc25Cw3DnzXiEoyE93NlFRxQyrvdxhJDeYcbB%2F3XcHwTvsYu0ujQWY4Nvc2hQmwZ0axvY%2BaQQtTSiUPzi5Ocrl5MedAOT2LSSE4O29AsGwivNDRopWrYV9V%2BPjCTwCaICOxm23g%2Fclyh1HvXn%2BpwS3W0xl1uDMzR4XG0Uk1NkDB1bN4hTp02JVLwxvOUkt%2F72XrTn220gQTQgB9MMUxuUkrcjC8hMEHmrPKci2tqhHp%2BE4o3UZ4v%2B6Zx19TSyqqCnRp6y9HgKC6ZH5k6s4MYb5CfHR4sypOavbX5JeX8tUkZrZk9qHma4fdEyxZRegqKiK%2FpK%2FPYKNIyfKNB8emaiySWzOrhdNNcSolvhFGleprILSEum824NM0TtKYjddix%2BbpZWgv6u%2BmzDH%2FdLJBjqkAdX4N7%2BujRjPg1H1dNjp2xtB9gRIY3S0SOUtLOpw1r2VvpCKWnRmSTceshA%2FviCVD70KbTMahsEpWWGOdkTLfd%2FPM8HTZHB1A1y4V%2FugQIsNLQAqYObwBPh6YKn6a7L7Hebbp2mn3g6NPeDCM25EJOtGo3anY5IXkI%2F01kZ0o6vdy64%2FnXqR4GF71hQl8I4dUy9s5jSPYOs%2FO2tvGsaWCn0pCg8d&X-Amz-Signature=6a1eca9653aa7c1f5f86a9d6ab8be12ae978816305d68bee907e9ab47d82050e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

