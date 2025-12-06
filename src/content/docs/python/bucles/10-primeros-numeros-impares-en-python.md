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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5HVY7P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjhc%2BMMIC6FOTW7902cKDyg%2FS8HKGWME997D7aKz0Y%2BgIgccwgwkX2cN6QXSBRXjCRXKvJkZVL%2B2Wkwqv5PqmGe20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLfoXo0Dka4pp6xqHSrcA6f%2BezTtXR5OwC8Ta9bWXzt2SeI0HXDwt5ZpqrsP8Oi%2BFWw5m%2B1ErS63aCTH8ych20MrytejNKiRU%2BrmO7peikFTHbExi4aDFO2uDtsXxQU9xCECY0U6G70%2FDWg2X3%2FSDdphXCnurlYxpu9nBRumrSirlmR0jRCuqoxiiPHWVlqMN0j8G1KZjy%2FJr7JxF0US5xzEldtyeGT92eUIkgJgYQQ%2B52VrJhiKC%2BoGdHx7dDDmDOkSiQL3QMIsOuzOytg6Y%2BNqyGXmy%2FGikPpHmBt3QcrVtTryCl43Ii4YMlrN0dC3HuGA93dcnAsak%2FEei0mm8VezbP2fSeRm39Fdm7pWlgMQ3bMxR34TnoYk4wwrvEu1RJ8y18E6aiaexwhJ6PyyQ%2Bq4u1%2BkNdxWMa1%2BWHN9P2uPgZsOgTgil7sW1KQT205J%2F2E0YusN%2BCJSkFpzsBnRKfCxjbOg4yC2Jrslu4l7see1qM7SxJKOtAGORVURP9hbMuHV4bZb0jC65qlIJ%2BSjOLo%2F%2BB%2FqNbh6ay86xLGTITL8CeXGToBYOy04jaO8GHLRXaVyhzbCCzWuRJ5eURlXh5KVj4gfp%2Fb2MtoKbrf5gjqWoMczGHhgnw4d2OfjVJrc7P9bB1rhW1AyTr5BMLO9z8kGOqUBMnSAXI5PR1aHp7axo1hOmRjExHdS%2F0IeO9t1jh7IBJoc1T3fi6WT7rOC9X5Joy%2BpXAr1NSHd6qkPYtLK7xl3sJ2rOqijzNc0lv0d8IvV3WZq7AZx7td9ierwVfuC1Mw0K%2Bo1PPv2%2FhchdIPGyWa4ShGpK8QAyH9JYEXTu9DfezGSrG2YKK4%2FRtQgvrgGWyPn6osxgoecao032iQxxPNmQ103At6w&X-Amz-Signature=e32deaa0376a5499f56a034cd8f0b1832ba17ebdf70f045d88f1a81a41e1e345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

