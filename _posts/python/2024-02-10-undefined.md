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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2HCYWP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIQC9%2FSub98VSOi4%2Blygddtnl7nAPM%2BSFbygikD9XSSxpoQIfHLcL5vl%2BS4Efs8nsum%2BZ9xvUKC6EDpzOS2xyIK8hvCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMon7QEgWXH6yTdxXAKtwDY4kCyNCWSsnVmFpRfXJPW8Np1w1scWXGdU6wTqqfObTPbfN9ZURfyEebWZO6u99Zu%2FgRWMSNbovTtl9upG7nEJ8dYV23AVvvu8xRjdna7HARWIPx3HYAqaON7ZeIdHeZ69kYfq7oTWbJ3y0uF9OsEKXIQWAepvscXqgh%2FUeaClf417k5o3Oe%2FojDBVi9Cv05%2BugJUWoc%2FPOH%2BGavF4Fw5bF5bt096mtrl1y%2BeV%2FaDdHiTRV3iMWVeJLu754Jmupx4gvws5vFIMfW4jijh3cqhOPoFdY2UwrS0ytaROTmJxcqQgKE3%2Ft%2Fao5sYQW252QQJEW5j3aF%2BfiJeGfSenvdHHAQwGRIfuhgojSTJeYugqBvNOGwcHUAHjsJ9gKeL6WDjGTaIgXIlLn3G7AUrVf%2FVaVHpHKyjwNQsI5EOD4sxadg3PufwJmczxzDO7A6vfWeHN6b0vA6GsE%2FITk8RF8BpqHHEzPu6AwOQy%2B7i0O9lpgMXIvsPefxMkL4xYlJCVzi3Ma7%2BXw%2Bh72qtSiTCQqs9ryss7epln%2BSkxmF43EG%2BTz9bb%2BqsqVXH0ilONNoFuxdyMgDBbeP4G7E4jwNmJ0xxsZRxjXeYU8fuiR2fbZslLqMtIq5UkU4aWAhxTkwrOnAyQY6pgFzjdxXFaDEYTAvjSCirvwDgepdLOeqHuLkmfijAkPg6eTl4WndmESp78IWQtJzZd86iLW4TZ1Q%2FHXo2EUSnoMCdga9A6ttwnUfUWtJS0XD0r03dEgL6oclU0BKVe%2FXYx2GOuBlUZ0LdzWqwc25VVkEK3psUvF73Gd58n%2F23dHDceR1yoCQhWOlf4B%2Fh21t1UzQottZU9F4eSQwye%2F7Urhy4gh0Gm9%2F&X-Amz-Signature=ee10cfe516425c0b959cfc20902d4c7481942a17234714bfe9fc1276c417f135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

