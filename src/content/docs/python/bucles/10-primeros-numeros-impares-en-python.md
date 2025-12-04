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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBHFTOQY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIC7rWjfL8f14yI51%2FwzfN6FREBX6evnQf2rNsqwUQ7RKAiAsttJFGXy7lZk5truy2ALtr0CD7GYHvxWhu4ZPEQ89HSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMd4RP073LsRfYsCKeKtwDdGc2NNCdStRl5cLjdeybNpQvEEwt28Y4WC7fqCwla71wXpbSCnPgvyllj3Yn7mPOiwE%2FLCDr2QPqNJfUd97hrve2f2%2Bumd7uaVN5HW9KsusJ4%2FN8m14NNIn8%2B%2FB14VY8g%2BQOaTPfoEnOIY78BgjP7CleaWgReTbbblqIVAJySUArBgNDJofxsyOxvu2NOCNoXfnJ4GVX09J5L1ZSWXoOzs6NL1t3WwsIbMemINikWc8FzJjaj5n9m9rnIuuMGZbMJUvmvnPbNJc50ScB9Th5piRKJ%2Bu2YTMb6iKObuFCOxkyg%2BY1ldfM7%2BmxzNl8hB3U22a0CkzLT7CrHGrGk0SoZCaneUNiXrO6cNSXW6KNFpwzOG5k%2ByM7xACrTt3s40%2FBRwb6W12Txb3rCaXXqw9ClK1cNUpf1OtKzQbEEgq%2FluqbnsEVNOU1gI2C8XkdZCGJ1DC7%2BX8EaorFja9phyoNsQuOuTMzFkPAhyL%2FAB7dw%2B5FPtwvFX8gnJGKFzRY7o4M%2BQCU%2F6uC3tGjME1piogv4hc5huDYDc9QqEOqbuKU59ah%2F4vL0%2FcRKuAIviJ9PD8tt1zpt54ukd1siBlBW6ppPVbS78wMIHf1BC8cOTgrCFEb%2BdJN2kL5F4pcuKowupDEyQY6pgFW%2BjCyUurU2iyxo0cPVlIwbXqkpeEiYomINThZQyjuVMC5BSaca9II%2B0RrQgnWJgSp2pEeTyPt65REumc9alb0ycvPv9WDNvnF8tkeG6NsLLUrSFwn0B%2BemiflVOk506u8QwvPjbqZPXqnhbmaItJNd7hIyNBjP0zmYa%2B08TyxKp2OhimCo0nxv7xndUhFWznO7R2JeGWdY%2BlfEtidKiSVXqOOnLJA&X-Amz-Signature=098a372cf00785093e58255a8e8257a8a7cf14cd9b3c1840150017c31b6924a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

