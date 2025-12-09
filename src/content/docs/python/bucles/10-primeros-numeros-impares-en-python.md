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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PIPFTX7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQqR2oodGhbF9LZtUJTv2E3b0O8Z8ZDK0TJkRTzAqr5QIgQjyYLGUCz8MrZp4awCH96vwHC5v7DoEpmQ4oY4anJf4qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi%2Blg9r%2B6FK7fogMyrcA5jNPEyI%2Bz7ZfpI1kPNqqJU9NQYZJmNtrSPcE8jhqpyGxFHcfTxy%2B8jKEWsTldvQHh%2FHGdh37gaL50NVdiP6TDiRXtZZgWSFdbyNMiOh013%2BB%2BpPIx%2BE1VGErH0hUZjcvQqjxs920kIqWxCOlWhsxiSkCNblJpzlQwn9ZuVtoEkcfytstUvq1KMYCcn6C8uTwrIY3R6KufgAQsLpQ1u2oMbSm%2FNVn5LvfxhhvSxMKZZMpZ6NOF7wWr51eza8JeBwHZvw%2BWA22JhBoEGW1s1W5m4dbJjbICUyJS4UPRShpPmZ1pWmcvZ3tqQKFxJbDVODycpqUd3qCQ23SXfFhZJPixCc3aWtwqb3X%2BanS4FFCvt0BPpmJEe2YSvWTWcQqFRy4cvQ0o9NhugzdfqPA9wMHqw56Hdf3%2BpmdEJC9tuqbqwqvtMplZIuVp95KeVMxzHeoQgGY07KMrINtldxizzf1k%2BzDnQO0W78mapGyViWdnvPONz62WLHyAKqFYHS6sKVR1pLviXGy27DITyrI3ZXbkoGUg3wC7Z2seIcb5OvC0%2B7In2vdwPNtZqQsHZ2v0Eqlz1223dHE3hG2cFSSTsI52ibOFmNkOKEZpe4RIglj0Kav6dXz5Un0%2Fk9kq3bMJzp3ckGOqUBED4nj%2FbrRDnNwtrB5ZJoZlPUqO6m9haOOGIk7GKIEaCZpYsmNSbnnHFrqi%2BEXbpPdfSXhz1FBoM3TozxH3BY%2BsSTH4bbS8yghmLEqz3hQguOe942qwp7XpQf08sYJhvSzO0tW6K4PxMcoMtMLl1d4hljRFpKETah1M%2BND8zX0q%2BNNOcZ4GqA89UCAuIT8ba0RYoGmGdSMg9XvcBlBch6Dud6XwRE&X-Amz-Signature=ae447f0f3bbfc8a797931ff545107054552fee28765a4d8885946716c6967bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

