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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCEXB74C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGK%2BA7rjmKi5wlnwoGFHONea6H0lzdX%2FGDyAYNKTvdNAiAs7OObJREYxU7NI78TkxeCrh%2BaxFLv0Ew4YWmw%2F69r2ir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM4M6ejcMqV%2FVCsq%2BLKtwD%2BEZIcmToB%2B2Ffo95%2FipIb2n5b5VbbO6Q%2FXrj2NGNyX4M0dnTx6QwOyQk1nmNB00IMR7%2F7lOPvnmEaipkKXI6RHGFNBLagzFph0UFvQ%2FCweLyZeDtbBTYXtj%2FE6wTuKluTGfDyehVFSEjXgdzPop5NqZP4ZTZSz1U4opzy2Up3%2FMdZfOi%2FUGI%2FBEpTWAc98pn9%2BBX0h0xNKq8kQIXMiyDmXS7%2B2B3YCVbujC4jWNhHXTjXH6innYIjqoPSKA%2FYS%2BScWEaPEn4ADhN6fr2fsgRxq58iKjhzjZfvepHUlNq2khHXWUD%2BNWKsiYUqat%2BcapQxqk05QO7v6NL0uQcDnvTmYLLHStQinOsd0cE9Vte%2BOq8cKycwL%2BjXq3Bi6jRtusxUmmMEZ5D56lhgWYTITtJm3rB2MSVvdH%2F5Vi9RriDiKYxT4rag%2FNP50VX%2FhyV5FbQg21xRGsIvWKqRHcIixqWk3oVvHypIjv8YrfXmCVytVqoHmmm8q2QE9KouzqMqRgch%2BYE9S%2BZVsIZwtpBN7rfaoBR9PQD2l2C3ywJ%2Fow67zI1lWiw8gryEwTddJZPNnFH6isJXTGm0FUsDNG48eJ2BppNw7YatmrJ0s7EgvH2gNkbffxzXyE9GMDWMWgwq%2FPLyQY6pgEEvxKmyq6rTgzYAUk66RrDcEDqZD6F4s5UY9fgupi8%2BdHjBa1L%2FoUyf%2Bmz6tFpKETCpdr1NmMXz6X%2B13Ue%2FX9JY3ga4V5nA4hkDbM9%2Fm1wFUUu1eosoFOaee0e7FGq3hrLU6U%2FclNtXaWIA5sox2Cmh4J4j9ptOSGzuD8nbwN3cOuTBAE%2FPpzv5bPgtVdPQBRcEcKQjETVXVOBTjdaMRqu8sDGBc6e&X-Amz-Signature=34fc086a7e76606b47aa33477bcc84786821c7324cca326fa260325faef79e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

