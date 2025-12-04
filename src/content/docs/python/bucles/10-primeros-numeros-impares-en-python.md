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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYLM5ZMY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIEvtagtjhiLdsFkO1oyCU3bjjCPBShrv3kQHgEjgDR2wAiEAyj6zD8sYZbBnx2kOh0mK4jqvQSlFqVhPDsLp9kmZUG8q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNdiluCWE6bhhSf1gSrcAznpV0JXT74H99L5a7sKWscbQ7p85mE3bIyEQZv29SCQJmji%2FRDKDVgsvV4idar1Spriy%2FEZHrvQCF%2Fd2ePVxpQU2xG4lNLNoRSwlrQRP5I8dPXlicfk5rDkDbcGs%2FNSYALrgXWlsU48787TjJdyJaqoKYenBI34GD%2Bh40drDYEqa9o%2F0Xeu3WdvCvOIW3ccOJSqH7QKnROguoHFb7N3BqbPXlKKueSvUUOY%2F1wsdOfVLFZ4hAsIN2rftOz5RAKyHI4Pt04iPMleDRje0XjtFjUsxBXZfeeJZJ70R2oGHTYCPg8ribyKvCmqFZa%2FOQKVsRLZWalgLbhxDuk%2FTRoyYZB9LnuK2otAxn0UMQHnVXzMpSy7eANU9TnSxFibHny6qwVeVbvmgk4Tzl%2BxdE53vKzOtyFnVRm%2BAad6Zd8w%2B5Bq7CLxYezQA2DuFS0W6MFegK8MsC7QhrIX1dH3FENA1NuVqGV%2BV3rVDuLvGvURTL%2BV%2FF38uxL%2B1HXZcWcTgFxngk1%2BUEyZ6rDfMt0Q%2BNTj%2FmeUwdeEXYm2H9rfD%2Fus5wTiVNMztZfJqK4l5CbFhD%2FxRrnY%2BBTuritl5UFAFqlvcuG5y2a%2BWWOaEvlnTu8jAhqCXCJazVXZmx8W6MDMMIi0w8kGOqUB2SWFzGd7uFMEKl2AKf0PmypSUIwZ7K4idsJ44BghWdsOcvrMdzJWfKieIzieDFPnHMOlritWWXTY1greDaqkQFUmw7UsQ7yaLYQp9cCluCQUkN02E%2BLqRQ%2F7n9ASmnKllYor8pqJgBUgQoboUYc8%2FocA38FnPT36dxs1kvlIRJuAR%2F8q04SGGQbKwBymoEBlf23QvT9pM0FfbGgdagt3rC9vSGYO&X-Amz-Signature=4517737e86b8baae48ebfc1cb94bfe20a5262388459abb93e0ab911cee616ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

