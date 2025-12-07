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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKJH6SJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCanJcLVyis6ef6W2VoWR9iMAnjrqbBjG7OPtqXOBHBkgIhAP6Fjo9RRc7t5oPcorF2dpGGBjajavYxJv%2BywAM6fNM7KogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztQ31HlG2z5qKsIa8q3APuBqL53fJiDrGLam17wTR8sormyiPxMD%2FoShVhtBn9zQnYmAgV1HqEY%2FU52eLvxlK6OpZTFATKW6rEbvCpKyhYtdT3E13GkjEcrycy5wHmXNx5XlGqLtpC2Ek54nS0GWuIUiv8Mj%2By1aYb%2B1ZhZmm8UWgwIdP7vpTPdXm6pw%2FJn1ixyIS76OYRaeB4JIALfzkTp7kXlKtdcS4lS0ekO0QMRxaxCzLgscA7RVBps31TC8qZU9d4v2WcHABQ86RdwBGuIW2%2FBDobVE1EAYfa3jqmEtLxBoJ8j6CJoguqGwU37km1E%2B7IETvhZjjy5nlS%2FZTPNke1HxeNY%2FmwAYEwP9o78mODAewNP11szhbOlt8tVyv6EOCbOTranl1zqfhwesvBMbpj7Pv%2FF7H41L5xs%2FWDAV0foCrpELblhsNCon3kldCzTa4gX%2F06m91KfN3vKZzr4EO1thrOoW%2B9pEl9LGt%2Fb8mkA35PdO9EJBp%2FBUUKxDCrAbrqN4lJfWk7ycCC1MklDjJskiQAO7zR3CNo3k5RC2140fMaYAcZT%2BEGGtvtpq%2Bz3mPPzMAk7zlw3exYd6ARwNnanLI3ar4E1GxpMl4ktZeQ7Bs6YGDoJzxj39DommLM%2FoLctCXz152kCDDtqNfJBjqkAVXr97HLy6q8sg0qwly55JdS%2Bf06VFkli8IzcEifdfo9%2FsodAkHJn3pHwA5ulyWw4Ou6LO7KtPTsYR5qQp5%2FfxtK1%2BhY5RVpN0nXxcnqaSIojhXqOwmt6x3yNVSAjSy4OySv9oGtOu%2FtX90FakYtAtNRsDAw1vMyJg6x%2Bu4aA4p0SqMoru9TpvbaLnWHwyQkZ7a%2FTynd3dyCOa8BVHlgpR09mmIh&X-Amz-Signature=f4a2da5bb4f4eb0c1f9eff86903b26a33383b87ca86ac8593d252313ec9de405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

