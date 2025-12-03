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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICZ5R7B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCtzpLpCwQIf%2B67RTx1b%2BKX6sqtfHbt4z9%2BsSPahPlzAgIhANEqe86YC6BXYnB0vCiiA3fmfqPsqR023sqVc6rjhZ1XKv8DCC4QABoMNjM3NDIzMTgzODA1IgzyluMVZNZji%2BKMTWEq3APylacHbdxd%2BSF%2Fn5%2FK%2BZIXM%2BgF3Zq7YRCd%2BqjIf7MfQ3IP9Yu%2BuIte%2BRKFI7RIJKzx26wBzD14gkB5vAf%2FHOPWs59dWR7girvIof8xgblcrqA9antz0GXeid8zzwNbAEwdAhZzkt%2FQcjq6cmsfJ4thxu1WOM53H3bMG7i%2BrZO1q1krI%2BzYD0n8Gq0H7cfx0EaZmhlDo5pZ0xqPT5ccUKWMV3ZhTJs12bHECse9Nlwibbdz83Wq%2FQOGGhNB3meJoAISG%2Fpiy1CLvJD%2Fw4fHtTKW7kSLtK9q5oGoH04PZXPgeWalbwaSfJUN%2BR5MD%2FGjF6Sl7ExMr7K4y3pWI24EnlDndufWqCrWfmTFB82k2QpBcZ0V%2BhhMJi5wZQ9mKHzvvGy1bKXpPt5QWSdAiBXgaaPU2vEre7iKsf1j6HYTf%2Fvvlz4DGBSvAh8TYVbKggHGffSEvsqygKXe0x%2F59mSQtO7pDA4qrzRJlFlccdSeEoRPtOW6AQ216nioozJ1b3QT0ZOBrbVlu1nPhdA2Byi9XkZqDMgKZrP2hJB1DJ%2FLS6P8PYDkoi3ED1Pr4%2BT5bbGWOv4HiIptuOnEVOKKHBneYv7pIWjv19dPK57uDZ1qBhTJHKWCK2LMxKewHqQhlDCh6cDJBjqkAXrb%2FNCpaVYzWKW9Ctej5QHip634v5fBTYEqVebnKuadpBuc1G4EOnLLCsIEj7cfbHGWu%2BG7taM2tZafMKEfh%2B5LaaENWcMBK9q1z%2F%2ByOLOUT3A89JCc4NB0lmwHKBrnHpySpHdpaGmVdGtcLV%2BK2wJ%2FmmaTjo8uyDHmsHxXqaijPiWPKc6UEFjrW2f2YDLS9AL5O9U2xjlUmIS7iixzyEE7Jkms&X-Amz-Signature=21acc58888f563f55e54a8433617bee5e389245b156201eeee576ac788c67934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

