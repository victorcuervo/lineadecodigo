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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZYNZUX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFslO8IA4A8YFR4Ef4mGY1TATmGDsxBdZ5bovwp9QFMjAiEA7y0UkWxkInKFmfC3ct1K0V4BA7gkWZz9Npd%2B7OVTz9Mq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMD1jihfO9NcsBMYTircA3p4bi8ysloSfvKpY0tTDfRQtaHDE0WryLVqB4dz50b1w2rO5aQmEmISmuYwcUQQdxXztDyfKuOkIi7R4A%2B1pATcebNI3Ok0kSlnUn2owomR%2BgZWP7fXhvLaLDNeTYEN7QzdJ1ZF8ic%2FTW8W7R%2Fo70yma2eYaku52tVXpgEw7LH9aXs4SfLIKToOzkkMDZZ38WzPfDvL1RThNuoNFX7ZAc%2BfLZEhkoh5S5MIw%2F%2FzsWb7CTkZz%2Fmo0ZATSiNoHRDmHs332nrI5AfonnDw3wf9PxDRbx%2F4%2FSBjc6bUUTNz%2Bzr0igL398e%2FayatDRpNdiYMl7EXQ4wL0t59XnqxmVMNnyYr1F2LjIJetIJyxJf0pURV31KJPxyQTgNmdQOx3v0Kqk4XWeqjk9VDS7gbRekrsyen7XgKhMd0r8gXl69jvvn9JRTbKY1gLsfbF4sql2Whf9k%2BjZCtaiUa7YGqW4%2FE9KCcRnAH5oLVfrL3mrSzY5A4e16KNR3TTfoNS4va%2B9Wt6lScqp0Y373swgpJDulp1Ly44CSBNjDqf2ga1B7hBSHXrxWO2DIw%2FY9Ev9q%2BMXFSEKjsSTHAbyXGb1%2B1sxQthPFE5l7WVKeacXrcR9rpnNWjrqC3oAau2O4mkTuWMNncwskGOqUB4%2FTyo9prI5S%2BmtB1DD0eFBhRpAKlpI65RPSrjSJ7CdzEqhJWNJmI%2FiXXQhdBVG%2FQNb2EtIMRXrVzYqjJppAyJ8uYxducH7XDJSLjmmwnNNQD19guJLqpmqrdLMKfPG375Hosk0drpRehezuhoVXg7Dsoj53nMhsoDHp6NxpNymtNKZH7Ngj0LSEQO5XN5%2FBpkbYSgQKeDLlblP7C7Qm2qTbk0N3u&X-Amz-Signature=d79397cf8c54873da4bdff8d00672bd48fc70b2b6f4eec7b3503f8ab257a24cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

