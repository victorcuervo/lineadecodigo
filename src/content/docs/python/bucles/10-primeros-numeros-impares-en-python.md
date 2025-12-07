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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKUPQ6Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHpp4kW2Ky7EgbI0lypivdLMcO7P2x3dXH9LkiCNgFcwIhAPAT1U5vwQzqPZbkVybEI%2F4O0OM03NlM6NafOGhhBDG9KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx6LDCQrN3pEEceR4q3AOaui2WhucLKazGIhc53Uc3xiyESpnMf%2FyR54OI1rBh8uJtdxSsiOXIcvPmEqFcaBiKAGnUp1OljrXCZrd5FsDd9sGkoTPX027CiIV%2BxcRz5lLIn07rD7Ye5GqgP6fGprUm0RBLZnLrQbtasBiGxlukn63mcLveuWHMAoTVOnX0%2FkAdKUHC5CTzYvjl4PPADJoMbZc0bR20BEj1xm7lQze0yafRWNJBBQ2NVkqn75Xs1cT8%2B2pXYfcw3lccajqxDcs8Mu2cdyZJ57PE%2BeFYvrpFxNN5RerFYook%2FiK%2F%2FnfVw%2FgOvYineRxAkimMbKjOOQmarFyvvbEG11DPmOfugEiiiE65A1E9cmTLDdpeazNwTtvg6b9AVI5BzHvJy6q4qNqeWuXU0ON8uKyayUb1BP5PPBCbOpN4R0vCzNMUwUQ5EivQzuHwbbjU5y8noEsFl7tyvk4irzqH9acpYCByEIfCiLeYBsLsAFBO8dL0OB5Hxs%2F%2Biwxnpt6PuBiP1tgPOBwKyyM1sQ6O8csXmv2gXaYT6ev%2Bw6Vi%2BZgfJkpr1iVkTurwwK%2BzfVNPvGCixsVxAG5VvCs6Qh%2BgI8sxWUiyi0XB747sHELcA%2BJB9H2KATVoyggnwVwRl1H6JMD%2FizDTmdXJBjqkAfLK6H1WcuGnpK0oYIxgeVV67fFQ0K%2Fy8P57d74V1wlKW6zgVofW1UOyRbvxFi%2FERnI7wu25GekHtdIM%2Fa7PSLH6NoxDQFb56gzfFW7yTzuHb%2B6qEdIwuryYlnta%2B2B%2FyGqf9Xx2uCzGYYLrFfBemjLkfZTZ3E1tHYP8zU0aSPEotcFUr5TroZbqy%2FOpW6XmFwbvdYFlzXmISxGdksYQ%2Fii7lCQR&X-Amz-Signature=0f0c147ac2a1a03ecd101982a2b2cc6f149bc987bf444aa0d359b7ab0975f72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

