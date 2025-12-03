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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637RMIZQB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCVzLG1wy8h5KD%2BsHxT3g3guW%2BktkEeInH3vkKunK6F3gIhAMz2H0qbEr93%2FjMJDSJSWRDvNwbq9xnXYM7Di6YKQAP5Kv8DCCkQABoMNjM3NDIzMTgzODA1Igwx%2FdRx7jYdy9c4qdQq3APX6b1OGQUFrZ48ln4X7IeJ4c4oKqETkmvKXiyNCYFx7JApj%2BB1vGKYxo0cRoWE1hiHjsm%2FDVeUbolhWTZPJ0YPWGkwMa53eNpCVCUjGJs1H7b7HW4gEDWzfG91CDczrZwATfaWPB6%2BnKZod01nEMJy9JnSfrZOB59uuIJcSzDquHFrqXELdHpzY7TIUCQppw7K2yRv1erenHK%2BCgUhKzmvB%2F8IuRdqsPfHOw4tPEpL0c0m9hepR6au6XCl8JMURBXHcyrS2IqfH67xgjCTp1BAnLYXaKx1ASeWDkgu1bGAeRzLMGaoZNscZ2IrnHULBlZPZZiE7lU5HaCKSsf6to7e08dWOy7dxDqcbgIknDtmEfl4n45p91I8sXtlI8FKiK1gdsvBTd6%2BEGEPGcvVR59FRsbdOsX8znRtvbCQS4j2N2a%2BD62yPdfWnv72nUaWYSX2klVE227lFX8WkKYkSkSdmJPwrc%2BvoZqgDJ5CoVnaZu3yYJ0h%2Fjfq1i%2BVDLmfnB7oYYH%2F01pUXZIHFrAb8CMHwKP8xzwySaroDm5bsfCC8HjJb%2Bv5BlJS0vhDko7JozOo%2FUeFfqvOMfakIHTyGGNhKURjZFIgTd3m9VStFKT1Qqzi24Fsn3CvynHIojDr1b%2FJBjqkATXXg6Ktv2ftUAWsEc5Ymr8%2BGTdGa8Ox%2FuvsMv3e6ZpXGa2k12J5weY2wBBSfkXj0NhMOQD2VH4efPwv%2FoexjbRXOe8rMJJbdGOClfhjAubAiMmhShMTh%2FpclIZr7MEiZfaH3s7O1n2Hs70lRqugek8LqdpW90Fn74CHrBczsT3snMYh%2BDsASu76M941EtVhHndDplx8bcTk6GCeZJ1UN0%2Bg6peQ&X-Amz-Signature=2fc59cf8d726de1301828101282f03a5cf7ecdc7580b07ba841c018d6e4a2c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

