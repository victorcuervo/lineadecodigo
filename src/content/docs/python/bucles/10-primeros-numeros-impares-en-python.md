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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5U65GT7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5NZPhMUsph72AVswodEHIA%2BdeB2sl7FKIQLZWcTBx8QIgYIrlpIPm5SDk%2BWuIXfkD5cLa8ia09ePYglrbkt2D2tgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDK49JhqLjj2QqNpUcyrcA5NdpTfd2hR88mi7%2BUsRyd6qrdzc7S5qnnje8evmpodGKQG%2BDIMrTcS84i8J2O350T7qKEOzN28m6lJnuuEy6hbHz6teTSb%2FvjMohe5zGP5UoiDh3jXXYHb354HaYVq%2BLvAG9ZzZpdDGj%2Fvl%2B0nSIdrTQKOX7DeNmrWF26vPt%2BLyTlL7qnfsrPHSpkI0EaxFnYwOuiLuLoZoFYtRubs2dUKSvy7QmcYqRTGXKRQ%2BqdgDEb0E1YMf8DDWg%2F5RvFf4V21XXvI61t89icaW6dmkrDs8B%2FZo4h2OdQGzL%2FAQw9f8DiVegoclUfvoqCKFdVt3RUPUVPt6KiSdiz2H0c0Ji0hwYev4ks9PnV%2BP823iCM1FZ72qcrxlieC1ep29qXn0LEk%2FeLPWQebXwm5zyd0FaiEKO0aWPC7NJWJroosnibkODKtLmQnFDwaJW3P5dNRIresloRyp6wyMz1GiPAWk4QKS02UIcsqVcJTa726ZHRrBwMRCgT%2FHx8VF4hCEUXshaieNlQVQ91cX%2Fn5ARwVq%2BMMXjTN4tJFlcO8Ac1Ig10CxjGXflPqp1xqSnIEcKRq1K4d6rZ385bj3JxL869%2Fdthv5Vnylc2CtNqW68ug6IJcvyGkn9ylRogBNRwOMMPn0y8kGOqUB8wFUb%2BKGpi6bXyJGxbo8qj8BamdgWFL71tEv6f7UqIODuAFwqS71cK0FbY0hhEfpBq80L45FSH5B9UmQ8sSO6Q%2BOsKR%2BHytlGQJeDUBNJZuF0XKT5OnI3ku%2Bc73FhfIyAIx7LIE2xrMs6WZOk1fMiLnhxgl7425LwZHoezp1a%2F%2BS5lgxyyHZIxrn9HHq3jvBioCMvjlF3FCnL4pGj7h%2Fk%2B%2BVU0sH&X-Amz-Signature=9ea2078e481eafbdabe6b9f33a312e4edd1f3bcdee3d5287e7ff1f64d08d7b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

