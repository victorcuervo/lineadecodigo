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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHINVAGM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCN3Hhg7CqO91B3DOJrykd1O42gsanYQsv9tEfKF93EXQIhALqKB3co%2Fd8AYqMFiWDBqUBu5RGgMufTUh0tnpmgti5dKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwQR3Ak9%2F2DeZzvqEq3AP2mn4sY7Um05JWOEMwXJIkqNBPcFUCaRzHK%2F8AmQy6gNuCobTgcYgutQOCiB%2F3cFM%2BVtP3wST6XsBM9RpwqfxcWNxQh68%2B2CakvHmFLk4xX8Np8fInHXmnWCpGsvUu3XJ8LG4VFnJiZc5qn8zeTpQkzttzoQgPYRcqlEFNQ4FTsT%2B8RJ%2FN0fJ4fXSLOPC9zVMTunNfY7w%2BiAH2C7yJqHlb9oGUmWl2dmcPRW7zRBFifrVWIqx8ZlxGbHdkED5sZU9cMPtJLRjQrKP6jEm5%2BzNKdTKuisPY%2BJOxuGufDyGChcLdUHTwaJL76jCdfepADh7stTyjFx1eLooQV6BuJ0qZu09mVfsnAtMjEpK%2FhTagIOsYbCp5jfBAIF1XSnIAgc1psyWkATCdveCWc3w05YazO9QxRpZhZj0BEaHjYxqVIPxVCSGTojD6kDJ%2FeA2MWMzg20SF5lHEWOQ9uWyn1sJae%2BtQm3J2uhjrSQL%2FjiC0b6MQJ0S0ntwqo9bDrQ7R1JNOC76oyodmgyhVoOOkRh5EQF4eQ%2F8hgr5CK10OvsPLp8CRMwqRa83vIl9Z296d3jh7IF3gksafRO4JeBJIEijCJvLfmgtUAFZQVAyrf29tTs2cajMtJT48Xnd%2BZDCxotjJBjqkAdylT0jMqJN9pembawu5xYrpCmkJ32TpQlOw%2BTuqIOGXbpXW96ikXui0NGjwY4MqTxJrbO94g2jGKa2gvlJugZPMu%2Fsb0H%2FD%2BCf7X1bmM0Oud%2B7AGbYdj3Dj1%2BKHsPdgSe%2FyKFyZ4LVBYYeprorRH%2FqxGHfdrOJduLuYXobdq%2FkXhYxY%2FH7cpJUBPWIIZ6M9QhcBioUvaJSoQrwkKU9UXXwmsEvQ&X-Amz-Signature=af7714466a54c09a4111c5ae2f2c4b7a3c946f4e7e6ef0599d37072739b70b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

