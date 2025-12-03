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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XVQHHE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC18oIBRLRgZhgnLn6131YhBwiyVvhAsrj2frhxd1887gIhAKm670Tg8IptVtY3kP1xxcCx9vUyjlVEQVdCaqBdYYaRKv8DCCoQABoMNjM3NDIzMTgzODA1IgwOGgVUTTLT97e5TXMq3AN9XY9AbUF6t5pJguRIEsdDhIwhZV4m%2BzAGyKRVd5p53zNjXKon2n3LkOU9BhiblZXjfMvFq0YKz%2BT1IK%2BtZOTcqUqC1fcccjEZ5yBqmZI1BtTYKB4AWq6kTAuxX4T5%2FRVmR6agVbWlnl8JqqNz4sf%2Bfc9wrCvbEyEy2jW%2Bi8Zw6WGEU1GAznGkqht4ZMuSTLAwnliP9xAVpfiF9SppCL574UuNI8FCyuKH7uoum5QdwCYo2bvZSQWaeYtMHG9JRCHRRb%2FVSW8lHxQFHxBRRJyfShYT84ZVLIU%2BVy6earmxCHV3Q9NOlxmjxt9sm8AgTrcM1RnKIqWxMImeoL1RIXlZa1srDrOdZ1MjJ706A5N2TErVq0M%2FZTxD8h3oj%2B1lSXnVi44F%2BjJdongNpArXk%2BZAno%2BnEdniPNyWG6l9r01yz%2B%2Flkbwjp1qeSm4yG1UQRST4qKgeyQsFSORrYfFl2Nv39QaCkLp6R%2Bv8vok6Bt40XCdg4Jrg%2B6Qe4k2D4OZMS5el%2Bg4V51IVQbuXrojF6xhCe1SOOf6g4zbD8Jxwrt8jTLgegN3Yhrkk1YLPoajNEhpDz4c4mAo3WoWtm1JbzBeiLOU3Y4PXlU9LfudckuN5H3SaXOYV9zodBWev%2FTDa9r%2FJBjqkAWevHbIuOjfcrN1QN5cHdMvqZkwQZxFnvsgb3KJ34T9XJ7Pkdxd3GncyScxadAORXW4dNTNuKMXBvpBj1HLCua7nDsMj8zkBjac9QtTo2is%2Fq7sRMVrXyTaOUD8vul2d%2FctN94RNIJaLMRC5UvPvxFP4jdMka6m8MNh%2FUYdMp5p%2BpVV2UQH1CaoPjwRCB5vR%2BSf8X3QCFzvRwrV1mzHcX%2BmKWb0x&X-Amz-Signature=5bfe878f6e50332cb28eed7254c5fbe1c957b8d4f45d052338b39635a1d67ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

