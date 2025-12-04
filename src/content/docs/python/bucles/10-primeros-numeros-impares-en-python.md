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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZDJ3EL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCtPbAKr1t6Y81jVUA0Y9bKfk3MvNES3JcZcinoC%2FCKcgIhAIQrWIJLRcJbDmBjylalqP5%2BJCrBAEiXQnum%2FbvgeuTjKv8DCDkQABoMNjM3NDIzMTgzODA1IgzxiF4q8%2FVYhxeL96oq3APrUqIGjHcUv38HA5u9HtjQTfR4LMPJWNX3AKmBRSNQ2Tkfkjuin9qulckmZCL%2F6mYez5RzWeXUd53WaiRC5bKjuDfuVtiQlFLReAnHM26CTWYkiGv3Q0d9A%2FMHasVj1R4A5mJApAvRQdHxrG09nbGEQHZuPoduQE%2FcjbxyVlvwXCtGztJkabU7oOVy7Oiu4yBiJ4eBNI7b%2Fbl7wWjWOgYoxeF0ilzicxD%2F5ZfHOkgAG1MCC4Wvkf3pieP1vfPsDm5ZeCvm1QhGcGBrea5y%2Bgt2w2Z%2BEQbzc8ugvglpJgNjpAvH8TQPzWOJsOA%2FBYyDoo7JZhiztcEd1kSJAuxdG2Y8lxDdncXs74DHhUsyQTL8V4JQyfvGMwedgF%2BuB41MMNn55w%2FRz9DGUg7e025dQDGodKX2EbCBx7LH96IJWnyJjdchGlzeTJA5J3UIVnY5%2BaytCRzSs95ccd%2BBBcqR2INuAw%2FqWy6TFSm7DSpT2wXUJbCY9%2B%2BmqNl8sKwI9HZG41XAiud9h6R6Jdwd7yoKp3pYQBnOavp1PZF3I2IlZOJLJkUALrMBTezI3tlUXshHmxIF99VSgh9cTdLQHWx8a3hGp%2FQ%2Fd8Q43ggiL7vkaGWG1B74HljaAkbueYi6sDDilMPJBjqkAStRN9YnRE0n1dFFli9P0dxSqaHBZ%2Fz0ynbErukq8by1taMsf3pNspVkGSzjDG4OhHb95AyQ%2BP2U03KOYTnsLFfEbxSIUDCcyxZe7xjTaFmB2c9t4sflrsvkwEUKBzEp5aJLqdbDVVV3W%2FpWbzWCWD%2FWWBDZzFZjqg%2BeBbzYdgefdxjsKQ%2FVhOUTwso%2B0cxqEEr17Z%2F5bx3Vi0%2B9uOWU%2BOypf0%2BI&X-Amz-Signature=bf5befe30a3c7484aa068a44c85e2d06989141e5b58ecf0890986b4ec10a4afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

