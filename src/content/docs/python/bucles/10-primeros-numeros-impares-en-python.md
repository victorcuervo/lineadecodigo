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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I5AUQ7L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZn3dbRxrtUX3uApI2e7olQbaNw6DruCqDA2lp4VP3iAiEAyIByGQxXP9Kd%2Brp95GBmA%2Bdl9bOKnbWQGUO35Q5f5xgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMbydUwajAKvJtf17ircAyKhRWC3N%2BKGuh9zcDQ2IPilPsUzwCQ4hr75PVOVJFWEQV4bVbRKaSPArFFR2UEBuoTOsOWn5fwg9VMhrsEiAXhE6GHcVQjNEU%2BGezSgd%2Bq5S1o%2F0cQFLvRpXpalCRsi99kmF%2BwVyU5zddxYG9VSaVZY4cqzBjKaZAtYHRerMYaOTob9hYudvWo0Rpgkyu5k6ktMbeOJMFw9nyvQhKSSVDv0BCp6EkgZ56Isfg4HOWOM8p2jHAffxma%2FSn7ZrQZXv7L7OHRJhaqkEGH20H82EzQqTtFttb1MKeW3CMerw51yucOX%2B9P79oGLxtjVwHDeYfWQdNOha0RPzwRixoGlXoxSPVWSeV8S%2Fih7Uz2uZ5DnHL8vkF4CAdUFpzCkkws2UZ9Erp9Ifbocst1whtAhGsCwwFbSmYUIDnQ%2FcnW%2Bh6WZF1%2BNC1mnhZDYQJvDraS%2Be9CMYasQDqNL8DvixLvXwadGu3jgWNRAiffiUON1nxbN0O5p9HN1kQwxaZjD9wnCpgpt0TSudxhZmcJpGRgL9Y1AQs6CHIQR3QONjzQmBLF8JfWMSDjJwXUdNITYPrI%2Fb6GLTUmBX2BRHZuP%2Bla3MIyMQSYbwBh21Ap%2BnTVXiiRtSvtV4POMWqsDlsINMNfly8kGOqUBi%2F2q13FD5J1BEGlNe8df5mA1RpboBnGxFYyFtWyDYAScs%2FAMyJhbGTRT33mGhZEnyhZXi0tJSpIYKlzLuLxITHfHoXWYD9Ej43Ut696c%2BK56UtwoKoJ2oTc%2FC%2F08C9PWb74C9OTD2KHdyzYWo7xPzAdWCkCkl3aQDmesEqbKqVXWEsVzHDhal8TYylf2Y0i%2Bwig%2FNhTQ8K1PNE%2FH8bo6hIYsxJ1X&X-Amz-Signature=2559a9ab9eceabe91abbae6203d21d229043e9474f4da04b1f8d65a3485bc95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

