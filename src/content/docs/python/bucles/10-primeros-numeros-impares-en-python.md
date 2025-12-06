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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE3FUHVV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFN9uCxHrgjwRXDc07oOeRaXe14jncPk0Dh%2BJZBSE31gIhAO0%2F%2FxJpBaWdTs5k4CKVFi59YWLpwlc53bI08KZl%2BhBPKv8DCHUQABoMNjM3NDIzMTgzODA1Igxx1cEVxEhQRvY8tooq3AO839OAhjOsWpqRimiaMHNI0NeocgfSiq6d0sOzo0XFXhl2hlbO0PRi8Elcb3XcEjfggsEoH%2FH4w2CX1XB5t1OL9g1tiv6LPdNlJw22uGkcGMz%2Bc4mjrQd7IajFMiNf98wAi%2BlOgEW%2BUb6Kz0oYb8G4RRzBW2Ho7hjLt%2FKU5hN3NXq77JfSvGEV8wwFXMC23e57rpbF8f8bVHFn55TA6b6WPlLsvK2L6BWDm4pxKDktrHz5NPs8uT9XthlTzoa9PWrxTJWiImuHAvzZskh%2FGCf%2FELj2C32DC5Yz4ltzzJJNRNiOSCgFim1JH6dYiwAHXmeWYKhkYNkIuvj3VE3uPSuYqovKLH4HMtKCvfLP1uQ0E%2B%2Bg%2Ff4FzgKLDUUBj8WKUKOdyuluQW1rcnJ6oR3E%2BJmarA6BhyGjAkVrE7Eb345DAyKFp04RGzffuO%2Bk8Z7wW9SHRb36rka%2F2Ep4ym7lFbJoBZLHT5V0Muh66HQRD7U5GzWgrcMZ0u3IMlX0PBneagZQzb3T%2BuAU9urj8dY4ZbjDdU7XrEYf%2BT%2FRwoBGGv2l%2B2kOnjxXXz7Q9mgfeHrmW1lgXLlaaT5PK%2B4dAhG97855gMrN08EqOqyHf8pVBj42LSTGtUSIvns%2BRYYSKTD%2FptDJBjqkAVySzdMdUvWNI2DmXCbA%2B3seMy36WGvoCo62JU1XkhEtaSecilonBYXGauJMhoRQEa3Qazf5UtSfkG5IGQzDN9hdiEwRxVF77hoP1Wnj2s0Grrm0238SPh561TPW2kodONd%2Bldr2ZNUeiDpq8Y0LeSep%2FcL2wtPVdkhOsoT6FvlLnjpSNMQWT0w6G3ITvavVsAyTGB9Acx3wMzVVaIZ%2BJDRvEJ2R&X-Amz-Signature=5e6cad689019501717cc22c2d6d2af5c67441d51301766631724025245d7ab02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

