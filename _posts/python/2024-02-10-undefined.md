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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMCSQPU5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIEg%2BFn2wimQjEAFF7tCeRRCqk0XPX1mfrxG0UrxOPhB5AiBkqyYXGpLvJKV9XVf9eIoHed9xnw7hAByeM5FwVFI0Yir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMK5E%2FhM6J0hJdrgREKtwDtXaVXVBoWl%2FSh6A38NvflN1evGLV34Q4qVLVvkKItvxXw3SqSYcMyUEeteP0NO%2FWvoGaj7jc8w8p8pNWDEJa3R7FIZZB7rX7HusfwP28ES3d7I0uH1lkEoCoMrA%2Fwg%2BgMVakU%2Fa1GKyuM3Ycx4EtPIKdax7IS%2FNTBV7%2Fj05lCBn7Ft3MmhA8QZZh2%2FkuD%2BE2xjw201XnRHet7ILYi4uF75Om1ROCVsVz8LXzvedWDgG1xDo%2BQSqGPCrjuoSMIwghqNPuW3vP0%2Fy1dSBP3UejQrsPqxiytkYMiHdzCznMpMYLRx25b28ZDKiEn8s25TuAys03jmu6gSAkImPSo4aBv8y2zflJK1Knf%2BIV5FBfecVKhnx4TseRmR6F9Xjo6mSckRttMz3U8ruPui9h08hfLLu4tiknSnr1NsfA6ZzZayT8zcgFoosC0HQn8e1D5lQre9g4V5cNLD8d0glBgssoPfTfmgxD7QgOS4UO%2BC2dFlt69el24xGtQKUUnxrajLi%2F77Bsx%2FGWUjDRRksAcBlbORPH64XpMLwIM2W8bcupZmsPR9X29S6CTs82hCY%2FfjtsRfsDtl0HOCRqSkc8D5yP46BnyvAneahnwfkqfvYTXvLrIzLl%2FUkFfRK9oEowiP%2B9yQY6pgFJSQS%2FeR%2B0g4uZBbuMtpfbzj4MAFV6t7t4oZb2YYYEF4Xp%2BxU8VXkSPFvt67yHo2qR3vJun1%2BCHLH8ID3qvHXn5SJKCScJWmkzItGi%2FQkbriJoS2zSAwxQ%2Fh%2B5xEFA3%2F0OU%2FAA954QHGO8%2FEbEfIpY%2F8bwbqeR1gW%2BjIcNQtD6kh5pDQLeDa%2BhAOIAnYTkm%2FXXduY6f53o1x7DhhH%2F%2Bed%2FynurIwhU&X-Amz-Signature=2a8b73d21dfeffe79f85743ca347e67d6fa201b655519e77646328f04a1b2e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

