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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MZROGTY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FwRHPhoOz0tAzrtJmfEUjkKxom9CD9%2F%2BOYBu9Q45wrgIhAP145vVax2JlqFKWPco6LyedaCP%2F9jv0E6mBWGdJ4a3MKv8DCGAQABoMNjM3NDIzMTgzODA1Igx0dzxDL0pPe29J0fsq3ANdYTElu2wrJZywSeebpDxQgA3nty8g%2FZZmYFAjW3tf06xMw%2BM1LnQPBYkNwAlm9Irw7FKdPd4CA2g4jBElCN5q5bzHr24Aaeb0PqBFpFVEa79ZEppTfd%2FHSo%2FcXsZz3gaQNJITgYWI%2F0Q2aiLiZVnuBklQ9p7KZObNqiq0cfMKCvQeG3kla1h%2Fa2HVhTm3H9G0F3WUWDJgoF%2BMfQyQxEIbFaOMRk6yuGziKmhuTS7B5WsdjkOPC157eDdqpPXVO5w%2FAbICPA0kM354Yqa4j1FXE%2FAjw4hxYvP7ixiwz1psH90RxOFxJNGFwtSUt4OYdfW9R4k8EPbka%2FK5hiHdXHwFIA%2FOJ2OKEB6EIirdHas5Kpbq8u3ql5%2FI%2FGfSe%2FsRZrT5u3en2iNH7n3doHEXmotZHl%2FP4UfvhIpGS6AlvVNKwjgbNybncgw0vv3Jv%2FspChGoZRAb%2BjAI5hbXJoayM9T%2FxfFC5nZ%2FCcQlgNy%2BO57ue8k4udaflI2336eI25eqAsPhir0qvk9KvJOfdo67fGjWIhOfvCZc3fK4ghACHs%2B12wWRBr3rsdP3SYLafkfusqm9ZvWwPadqTjp6jLL90lQko%2BZoTIcNb9cTs5vWhaa05%2BFa%2B74wtZAbQ0UXMjCf48vJBjqkATF316eann9dJBFa64lBy%2B0C8%2BEcHL2MOLfqblqDBucJR3cVoIte4qwMZn2kEuxwM2Wono%2B%2BSd4FQIedxSA6m8cPstEDCjP5m5%2FVjcCRXEicArhfzmxrH8LBQfc321dYoFMhYw7CE5qcs3SDq2IjdvOEH6T94%2BDyc8YGzDi4%2BQDkwhMAZDtqe7U%2B37bOOnzrg63%2FcKLrr9f6pliBAY%2Bb63oCGqRV&X-Amz-Signature=1b80516029f11922fdcebf2466de0066821d0f4eeadae8e10193e6fbb3ee007c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

