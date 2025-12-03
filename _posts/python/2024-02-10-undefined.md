---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R425JTMU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDs6xvqKvIt8202qcFYMLP6TRRs2pNZ%2BYmG8nQw6g3NgAIhAKGAJj5rcQMnfV9fRL25%2BrzIfP7WM7YspUz%2FuWQsWMeLKv8DCCIQABoMNjM3NDIzMTgzODA1IgyoV7VlwE1H3icOMQIq3AN%2Bspy1hi4VxYHR4cIrISI8VlMG5hRqxf7Tf0qhImAPytw98EU9qnLRevbBH3ZAbUPRlXu1gq1gGS9DHn6mt9Kz9iqg99IH9n4nDQVRcNehxBi06H5fHqaWnWk2Pf4hvdN2OdBoIPJ1L%2B2xZ1EfT1yX2doWfI8eKz66HcExd7J1NuU6OVHh9jyfiRsrh%2B%2BpZUH0BbrHp8Bv%2BZBgR9FrqO6w%2FP25yUUzWU10vQYxWQK3P2soOx0li9hd57dWLtzSnLiWQQEKuJ0IPtmhIdLgd6gJP94qWl3smuNcyr6iOs4bjlmMT9verzHOOtJadnb5s6CND7AWgKtqe%2Bs7umxXAoQ0wBuuCAvZF1lmjt3PJasE63JBkbeIGTjLEnm%2FuMwpFyUDQI3LBlK5K%2BgZ8C4F%2F10HZV7AdzT9kdMfXxNDBjfXDq4NEeBkBiDrC5jr0pN3UJG6OGIgJ6wQiqbjVt0m8g%2BnVk9albz3i%2FBE9YHWnKXdRyhpnLZdBQ7h6Hct9lknjSEwAuBLb6KFtZrEK8KFe8QaRIViZTDgAyiqx%2FQreVcl%2FwQAWmJu76SyDWPC1tYUjfF0Q0WE%2FLg8vF1y7Cyu4DadUCzTEnmlGQi6b9VDDNPGGcps%2B0R9DVEVJQ9CbzDvlL7JBjqkAdYpwFsjABo1N2XXJWZdmMgS7A3%2BjlVS5jf7fSCjifmWDNQ%2BD4SjKn91iTTqnaCtOfLbOtsHu8M5WnhVcKrLXzG60Mxc0ZZ8k6cJpPcQSA%2BlvTCTLNvgIF3yxs3dQYHUDPE40lEHtlUyGDHtMfHGQ8tzsp2ITiehyVahALEe%2Fx2RW%2BpTrwx1q5dOQLXtEA%2BhCVH0DoOEzdVkwtUWpaUV7UWHc8xf&X-Amz-Signature=26a0d7b02c045643cbf61d6e0702950932d2d061fc64cd12de686570a2780afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

