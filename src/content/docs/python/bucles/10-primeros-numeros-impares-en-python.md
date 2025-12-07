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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666COTCDHM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQA5JEplb8HXCrpbPLajyg8B5tllTNSq%2B16BnYvk%2F7IAiA3j1nmJiVpL7j0ee%2BizPt2XXq1HbC6VB1in9VgB2gecCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScg5c%2B4t7FeYppPgKtwD2JUTLoFBD6rG3GlAYI2CCPuwoA347RrGZ%2Fhi0ER9HPTFXJutZ2oOATl3APYx8k6uw%2BWn1wRAFdVNQEIHAV%2F%2FozT5%2Fo6l4M%2Bo62ofNMAlwiXGeSuhZwkgIogDLDSdm%2FuQFpqUbISxU2Yfi8VieE%2B8P9GhjN67mR2Ad81ZzBrK3u00Unm2PyFjuK594uGBBtdt0HyM1jDe2XryFbN%2FGS73o2udYSOhXPTt51c06bpj6PdxQgHeqoPCAV84a3bMuUjM7gNRDcczW26o98KNWeVooRh4DKr9raSpYvR8%2FLbs69G9JjzfecyxgCvVNu1t7r5vy7REOfHPJWcsllfXCpGGQB3Ebb6qAlXKQkWf0SLBk7F%2Byb0NwmKrSF0wdBUletNKV8jHQhM0lzLmtXmIGBScxbZptmzmCBJHBxXLoojhPniSKuE8vp9S0I7duVt7X6ECDOFHduMINmpHrY0M6qzWERK%2F5R2Qg8K8q1Emgpl9W%2BOUp3SGWoASz6KrysIIeZclt6oC%2FPqnvCBdNXgxbNEuaU6kw%2FAlu5XZgpLMN4M%2FpXM%2BbhY5zkRO%2B6tIg2T7KqdFIC6cs4muCxQXqQe5YHReEDp9zmH3HyYJkQuVP%2FgclZMeNhyX2wP%2FhBQfq%2FEw45%2FUyQY6pgEEHGJWRAPmWG00B%2BjKrovfJDN5%2FF5PQTo%2FmzyfHZxRzxafSD1TckvsV9MsmenEvhI0Mur8Dp8eUs9YWUH%2B%2FlqyOPwz5y%2FW3k%2F%2BVUq46URd7FJfjfnRlKr2rKMdjKtycBPU24ogk1Hwa6qTmgu5a%2FSXj9Z%2B8yg0tXHTAZShlCdNPKeqi3oJn5IPillLxVKegIo%2FBuJVZ%2BVZldgMou5HtOcFW8wHNZx2&X-Amz-Signature=632dde880d1c45da07a20c30f1c87bea035c5f65c23c5f97edd85793cb2b3ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

