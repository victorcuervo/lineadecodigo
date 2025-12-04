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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWV4BGWH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCn6QujTDM6BDA6TyLMxTqdTwWu22Om%2FZtW9mMKxxvIPQIgRi2dwPsK2ZqxH3Cu%2FxSLkHUMFC1ItdNc%2B3eAYgZZGAwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFW0nk8bYP8PdZ6MWircA5k0I%2FlLw7YgCpOvfPPVNM4lFtblwISOGj3U2qi2Xa4yGk88KB42q%2BRpnjdUCr15TCdf5SS2sopEAiMaIA4iY177%2B9D238wlxtFSnvhwrmqKC%2FNTTruaBYOldHyVujx9HcYofO5Mfob%2BNZqWXUcO8Iu%2B4dCOD7lGqxs%2BjZgFzIziWvkP1zJt1F8nkOFKlARkVZQWWZmLokCbnzsmFZEbbb402q9oOf2MiyUFGOEtYG9eUy01mh9UcwdFvH8J7QfSh0bPZx%2Fgneix9rcfDTHoVQL0p2WMGCyfFEGJ0NYh%2BND45%2BdS0L5j%2Fn%2FvP0FitHJg4DTHISZoh4OY5YMO9a2rm4PX%2B6%2BV8%2FBC1XABJO728Oqde%2FSDWIlLknldsBhMItJqqILCVqRPZquoD8heQtzw77xp8XDpFJsoyevs0qYW%2FUZQ6XYekL%2BQMAL3FCm%2B3CyvCJNWRKS1z4q7wRSJ1GHW9PlHNprIU79lcI4t4cQhDVOILUtZNaoieRryajv2JRVp32YCWHG1XyicaUl6T8zuhdJVvn7UvCIQ7ZVX49wbrqqFndS0TIl%2Faa2vjaJ7cH3Qjs35ZjPvUnasNvWAQaS8MXBPptL2tXgn84sDhoEr3Q45zaR5WwNYxkvuJL8RMNbyw8kGOqUBna7PLU6i0z%2BrGg0nr%2FKWdxSqqNk8izg50G3e4vOM0Bu2sBfNfszSMqFQPDJp43sDCFYgxhI2okCN%2BXWjkpww8oYegJIN5GoH1rN9XLq%2Fhfu3dV5pE8sZ1lcE9iJff6nj7sMnsFJnbDD8Xe08PDV8mPlpI%2Fw9I2o%2BFu5f%2FFyYCT9mwLrz5eDEL%2B2Q%2Bw%2BuFG5rsVB%2BYDc3XnAKI36o%2F3%2BgK8wuyQqI&X-Amz-Signature=acb59c22b36bc1678f6048bfaaa36a11c96a39b737f6e994358997d42efd787a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

