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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3EUNGKZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFvF2679m0oq4d5lWXCBsHur6SQuqrhTT9f1vda0e0zqAiAnRJIyUqIV9jQ47w%2F1dAmII8FrAz4y0vYXSl79brLOPir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMC3aJtvyQ5%2B222VIfKtwDxWPtLc0dTWfZenYreAJBSgwx7H0h3TYejgVpkjpkww2D7hbmhzIVu4HYNVTijUC2jVoQ%2BGdAWEgiqiWmwWws8sD5m2vU9vhcWrGF93FLT1%2BSqPNo5PsmIlcet4w1HPVevdhjio%2B5b7kq9iehbWbvtIgcwLQHO1QmJAbg2ZQsztqPwoe4CpvM%2BAVXCP9sEms2p868fGacuLDYTzpW9WQemOgSL7ooGhLhYZU%2FQn76pJyX8JKfTz7%2BCVjCiOFYuFsBcQuagcaxfn7CkdKcJpUrmah1arTJbmZgN3ZPTY0l8ldo09kgi4AYnaBiob%2BTyb28Dw3bQ5GmtwrodSEX7EuqAQN67nCr1bTn1nXmhsd%2F%2Boeb%2FkuWbtiU3chG%2FoATKjcYGlb79IzX711licIX6nUABqYhU%2BxF7BpZ%2Fc6Jz9td4J3DIoIh7hUWMVYAjT5oF4DDa5VXA7zW%2BskYOu6b3XqUe0h8B02fFdwhW6ZA9SzYvbdkJn3uOeLfApx6veHhjgCADX%2BQ%2FPfX5rwDssQiGKqpyqpBjs0nopo6Zcbj%2Bkqf2XYRZykmc6q%2FpK6jyv1Bxx%2B1En3B%2BCeJG6G117fcLz2NbhFn0%2BiMcy9XXOlWsMPjZuBRjGNhM3OC6kneP6Qw5ZDEyQY6pgHa5juw97H8wU6Y377DiEhY7%2BWHEP%2B8cgeh18Biu4Gi2g7oVAmnvq%2FEdt%2Bt6%2BLfGHrnbU255P1yJ24YySGBuHFuO0%2B1MEJZUzbO7HVTQd6b8%2FDQIHS7RL8gBOgXmV%2BTbBtjW5eBxzdvwsW%2FXvq1SWyGVx56skUi0W%2BLdEC740Bq42u5ra26xnCSRITXf4DEswKNs8mvsyXgt%2FPthjHf%2BsQOBDZn3wbe&X-Amz-Signature=c213e0db2b6f0e3813b397cc073440e5aed7be1334048b96873e810f9efdbbad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

