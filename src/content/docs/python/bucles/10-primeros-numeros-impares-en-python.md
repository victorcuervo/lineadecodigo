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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRW6LM2M%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtB%2B%2BibkzGoNanZZoa3NhOmz8P0T4%2BSBYTulksUK8c1QIhAJ0%2FE29cZWeblQDNPga%2F2BvNQFa0MtKjfn8o%2B8ddTfLpKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3jdn%2FdpvJI3DZJJsq3ANM6ixbg%2BqI%2BeGi0NRAVlP6MJhwjhqhART%2FVS%2BNukpoz9Rw0wt5w79fBpwag7znyKFYUNZZXbF3a18za4gpUulNayTKzh%2BKSEfiad2EesCrZIHIyzSUixHe7FChzYiPeUfRFDcarUp1poX%2FbeRxR6Saevltz2j7RKexrYojq5rIxmhFZwQqOkxcK9rDuCMJfzEjGzIZiXo3jLm%2FQttw1y83AAShx%2B7iF6fzUjAC1tMNrT4f%2BFL0Z7q2VpF0Em33cl4PzC783fH1J3CQFLk%2FWMhSRxps43pyVwSbonmi78uWTEZumldtaO6nXQedHwYrYnMsmLwp68P5k4j4Mwzci4KofcIyEOf%2BglBHFAo5D6%2F8RBORS%2F5uayIp7xhyQNMxKfEgacooAPHVpZXqO7Nr%2FEkROcEQlpoARCtLVWoEsUd7TXJ1mhpqMkwfZCBApYtfsw7zzWtdLuJLWnZoh7Bs9RSuc1%2Foke302t%2FrRJ2y771hPejrBjkVBKaoRDPhZJLOgzX%2B%2B%2FDhrUpQgQK7YfIXX0qB76JplkRryuLsc4zbNGh6qycaGrYF4VPIUBTDvqfeRyNGEJdB1RqIUqTeZAFK25%2BRELZgUe6lFC46xMRl%2BXcQzrFoJpSslt8MxOrfCDDApd%2FJBjqkAVDW7HgUVdJuH3flBFR2Eqr2oPf7%2BLHE7DgWuNQp%2BXm1txpCNNgvdyYYe7qtbu8NpLluboqmOFjPTmC3Ml9VXBhWkV4roBcaM5MAQvw4RcShW%2BLHSPfP7gjcba7G4hr1b99ajB9uh75PQsZqHuCb4tPXC4U6HBl%2FDVp%2BDw2n8bWlWIJ5uKq5%2BrGUJOpZsWyRCZTF9c2Xzo4VN%2Fb7zQQl3CjctD%2B9&X-Amz-Signature=0504eb11a262818725d63a310c62715843c5ce2de6ffe178900ab8fb69f9d4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

