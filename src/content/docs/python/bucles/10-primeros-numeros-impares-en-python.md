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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7OODBT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAttRACGKZoKJQohzXPVjDmvp0FLTzQMp1uYYpSiX27AiEA93yKBoGVG37Hb1UZpLjuT5kY2A%2FHNGR5NR723ETLRLIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJTgl0JFAJ0lB2ETAyrcA5f9UYiFmiGHzcihj3AfXdnsXGybDx8FzoGz8%2BAX1S0DBP8s4DRB8qMAGAZlo7HFgQlUJAiLJU5SsnU44kFvy4wa37uwmrhVmuzjPb59aZN2E3yyb%2FOWDHNf2MymVoe%2FGZx0dRQZMkvTTYo3u%2BEyPYIHaBfG9ZukFsVYYSmt0b26HwNBSkDafyyo%2Byr9FkldGT95QsBKGePzWixNqYO4yG5anHywCXsYCVouH2OnZ%2F4Wb6qlQTPA%2FgTiuBd3jbaiwOs3fvZ2GvOXvg4MY5KUTDh72IxR2BBS4FuSC0pOz%2BOCz9EurcmNqybXrk5%2B%2BGNHno6Fe4nmME7wKVJaxy%2Fed1NU5ZkNGBNrVL1sT%2BlyHzJ8bQXm5WcZK5bxvJ5INmBhJIIoQVyitPvCP5rXHB83fQ92CpzvnBDvPPVNRFRiyTFeB4N1SmsbJ3p6lmgQIfqVo32HPCGYZ5HAf%2FSQyGlNVLoMXy62uGY32I%2BwLxDRORcV0FMlSjlGnfbBUowvNqK1HI3yxJudZBKjrqgBF4%2F42aE5Z4uPVa%2BJf5GMry5KDJHaobWMHSOZz76d718XXHZlw5i54q4CvUmpoPfLPLr3tzR1UT%2FR%2FrpVk0GtkLEJkGdAdaVmzRjBRX3YbyzZMKbDzskGOqUB9jPSOKyGLxjpyuKPZqlN3VjAZ3rbN8MbQiAk8BmA9p1PMiXVQBvET2ZRCtBjgRko73AP4crn1Pe5gK%2FWEcyBC9rHz8hsUVL7waVkwv%2Bv985XGMahYFNLDKyGeMGmf6pvt3C%2BSKnjc8Xo4jGAnOh%2Bq4%2FL5%2FZrhV3O715Byr2U18lbD34Gvlodz8%2FFi13kf4kzjBG6BGewp6cOTqVsEKxPnon6FJic&X-Amz-Signature=9c5701e32ea350d43f7f20407caf5335bdd2d877a96fd4a18f33dc53c76737e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

