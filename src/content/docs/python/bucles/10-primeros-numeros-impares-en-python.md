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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CJHC4UB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDnNAQ2sEYm5aiTum%2BOc5PNht9KpWHDd%2BEbELaNFpps2AiEAmPW0DBX%2FgN8W2UmnwgnOA2ZwJBcibPHcsFqQXgHeujEq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDA9gNIT9VWefB1moNCrcA78yMpESN%2Bfhw%2BAZj3uRJSNyMBOYnx5zRle52p6oEfqcCdztUeyVxSVYoVqhoenjvEAMC4wJohmpm2wvp51Xk9CfJG77s2fw38DvWH5mRMOr5jcaKPLg4KDANlXP%2BfQZGg90kvSQxhTUBQCqxsZ5DZTPqQyAwpy8VtWXjhlsRay56Rbu21lJObm6x4GfhVv%2Ffq0klyM0%2FXvY2RoTvBJa%2BoKT6hDWLiDkqjsu0aVG6Gbz97gM1dI7Re5tBZ1sPtPAM9naOLkRAZ42st8Sq%2FtwAvRwb9neZr5T9h8%2FerTi3ebudwscub3zqtptYMSrZuJSeUCs%2FISD3wB96lhz19gA6Z7nz40yajbsihpe43xUkI1Z9rreR4O4bUndou7pAjl3GADoqswD%2BrD8ZSREoDb55Ovuke0CwbmYAG3j%2Fbo5tcx2JF8q6Re5Z1UpiHupzzrySgJ3WjpqCyIvB%2FaZ5g%2BR%2Fi4aYfd9C%2BjL6qQDjXIw9MAo1GZj3070%2FZSSFHVLmtcZS0UBBY8nzrvBYYQP70Sfr2NSD5OQ6qoWr4HHaEo9si7HIfm5LxIXtjr2SDKh9Gq19AGRRGJnB4VP1VPd3poG%2FwQWoDrSYEhnZnEhx19GDhpehlEp2WIIv9Bq%2BWIWMLiixskGOqUBM1OnJxBVRLtyw8FyJA80Jo6A1YS4xCPOKk716%2F8lZeGYts1EJoCiB7TPQTm1Ec4sb90O4EpNlBHZgnIPoCTwWILiaDkbF17yu1849ljmsD7pOIuoRPsTjatcCx6Gafl2CjR2Q0YY4u1lGvCQE47eKfaLo7Xsgyq3nrBm28%2BuquJEJcr0LMabs5MzzJE7JKnrAyX3H1Jw1e8LkQGC%2FQ9Q7V23xBe2&X-Amz-Signature=b60f039972c3309eb8d5c3c314be15bf8613f3804c947c15c4dd7d2405a5be7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

