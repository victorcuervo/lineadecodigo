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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T542GXQQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDOUX6U%2BY7TMTkNf2%2Bds%2BJ8J9yKJDoOaRrjbTQpdeXcSAiEApQZCj1Ure2LTqtdd8tEZXwSEFleAEPlIeMptXDWpSm8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDAV5vEH5w4s52P2jECrcA8NTVORRBQlkAWCLX%2BFs3W6dIxYx%2FZ9pxFZRB8qe868U09RxROyx%2FHts%2B52%2FFuBy1PTBI9MlXf%2FkGcmSo39Ob4EpPCdQBG8v%2Bg%2Fv7IY%2BldcHILhZaVBbtKZJNcaxvt2jFfBWZ2ZJFaBWAyJIajCCwJlXKaKrKtg4a042DQGrsrf9lEoB6Re7qaop6M04Ne59zBZ8K4D2Z5d2n902Xcdk%2Bav6FU9tqnhgsD%2BmjMhSE%2BjNUeOfj%2BfU%2Bis1QQC19M1zZ%2FOjku%2FC%2FFUZAYSFCUulC7J5vVjSCtoc6HGB0uR2333lY5GlqhrF0t6R7V1TD4D%2F5gByERBq0ge9Q4b3EXSys9%2B6viDFwwfie3jpnKn0QxvELCRjNzJBbeleWBFPz0QT04nnYV4SinumysQUpmoCfITs60DVXV4FPIllALAHyDUWKH24sjViPJuo5dn6dXEBahNBY4I2H27Ay0bdi5HmsmqEwu9fImYsQsczbEM47QAw2OXwgU84VycwVDbsMeMJ5C7hrkpcHDOsfuftGOYd351nDz28iANTvUKoOQsaMfDvO7e67iyDwnJnokMP8m06A0DFay%2FWChcGxeuOXDaLOwMOxH4jPiHS4QQ%2BQFDf16Ut31j8bHA3jZYWweTWMIK6v8kGOqUB7lXgzedb85%2BSviOOVfeKLloyqNGtq3oVgqEFAhSvRYaQMwb%2F04FbolAWlt1jkcPsOS06xIEW1bRkAe1dh27Q5zXG%2F2dnwRJYR4CPEXElhC14obZhPckoySw2Ejm%2FAN3juVL0KcuZjfHOgXv4rmm7s%2FMz6n3XRhTpkHp5CGq5rgndM1PlF%2FtnkYJUlt5Q%2FYidNtdEadsY2LgKk2YXOSCw7MjvYUoo&X-Amz-Signature=17f5b4c89dfe7e31e6ffa93d52084c285b5c903f25f606ad860fc47e236f7fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

