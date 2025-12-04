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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUBTFUG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDRQxXxOBhTERJA0lUAP9kwADZSH2J77YULLXuLHOXv%2FwIgNL5roJxfVRc0J%2F3zxO4IodFB5%2BOr7oI6deseAuDLxv4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBFutm%2FWW%2BdiXSU0xCrcAxtmCBfDlFiJrV9yrp4CGvVnKFK68JmlbFDLHaE7ptbIiTIe9zBrc25hHz627ZiSQ83kiSfThZo9ACzz2mvr3uCfBNDjg1sfwrXoyeGvszxMZz%2Fz4kskcJRY7uQnM9OEWokFlFzj6g19b4R0CibasyJKH%2FMCBbpd4yd0pM1O54L9Tj58oxopxRl8FYw6KfX96rwJHSLSfnG6Rmnit1ifZZC46xbvyl8umYwNqbHXihPM2J3ymNigRURSsgxQQUArTd1jeqU%2FpLo92OwUk8IMX8v%2Fqqy%2FfEXWonrE4NBS7Rom2EiaVdrWnrtixv0CVAsfFW8bIcZ1CgIRhyRfJF%2FAtvYAbRBu9kmu%2BGZptnBVgq2%2BOdv21qQNnQRbqIpIBvjgb4JR8KXOoRK%2FAd7b293%2F41yW0C8LT%2FhtmYVqrXO58blE%2F8a%2BF6q6vliQ9nmT3d7DZvmLx8nhOXlClQvXQ8EHRcw4KbRhR%2B3ufqiNf%2B8gMrP4ofFnX%2Bu1WhRfU9PLxgeZxkvU2CYp42%2F5GIJ6ZjRRr4yYF7Jh1hyaEn1UhdgtU1v2trSpdmmLKlxz3sxSf2L7EBZe4A2Y%2BLFA1Mb5nesb5ysaTAsQtEhmyec9V%2B7hxzxtqCAsr764sjkIjAdoMIj1w8kGOqUBNx65jcXcNa4l2XCdtZHzf6YX2cjUHo6fT5PTcQMHZmw7DhqheA9U%2Bp8MFs8nJszhP4CrcXOXWycrqK2JWfiSgfoOS4PQ%2BA6pQP2cGikH%2FN%2BRLqLOL7pDkVhcJBfy6ZszfKaDlAgKg9MDWtIve7QGzA5elezBS1MjaBcRkpRVbFuH86NGUXY34%2FEHUrw9dJow%2FUzjOxK5mXc2D%2FB%2Fptg%2F36Gy9g9n&X-Amz-Signature=38dbd49375515c8d42776a5da73019746bbc8028ff49d545558e0cb6e7d0017d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

