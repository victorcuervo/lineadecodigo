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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RHCCIBR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICw1fRAlsSVAXx4gDGAb1Fyp2Jn%2Bbg1WzYz8TbFEVTqiAiEA6n%2Brf30goqaY76k8a3hXBkL5nGUkwC2HL7Da3L6ht5sq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBIMms6UQq36OZus1yrcA6CHh94tF82Sokn3HFBqRJidqczHwHt%2FI%2FAB7IZzNznzvLfWobJCerr8GKKacewQvndHQzS6LbHFw3qXBG9An0S8saXyzL1lx%2FEG43SgtriUrpanK%2B88CEhGvGP6guw7D5QbFJJRseP2memYD2Ox9cEUFotkEUEkdB6RWxQeZit%2B70vKG7QYqFsB8r63ZYTuuw0GstD7MhhUIFxtXbNWAnB%2FNJ2o61QT1Lun1tBquInqgD4pwOKplhZORa17vA%2FNH%2F83Ons9H3RwHIyOfWD2ogxr84Hz%2BA2I5GOzq0t5pzlXR3F88hR%2FXD1h7UbbcN1fuUkmn0aNb5z2plVMAt8ntY02Oujs%2BP5v2jc9RGbBWK0owHdLEEd7SSehqPg3SFLJ6%2B3hVPa9dE%2FiUqt4dwIXEjfyan3t1bm1ViRA9nYzl0LCBa5ZNQ0%2FOuqjsSWm2Mw%2B5VuvrpyzPBaYoksmVrN5zNIVmbZZuS4%2Bb%2BQ6XCyLZhV50Fo7hMNC%2BAxVmOzNqdlVJ5LFqaFqSCzJepwy03UQ4Nuu9c9qv8bY1a6c7Td2g8ucT5MtReKlvlIT2mfJj%2FilNoOkfdpaExI1KTGIhE8jooApnbvEsCtAf69TYvvyTnoz2PzNk%2FJSS7wlpC71MLGVw8kGOqUBabAO9qvRoeuUXBwSOpCij2rEu1qWb9CDuDo6al9qkewbahOilmMwnPg8%2BKod7rM38iyJbQEfaN%2F%2Fu%2FdslUe3Atvqn0bqcbFmuFwPDmpOOTuhStKnZvu%2F5s6RXhetCdRb9SM%2BM%2Bl0jt86kQVOhpUfdgVLH86zNqGb2XNqriRpJHmK1gPwqyE2StuyMF1abpyrD8%2F%2BAIzU%2FxWS53HoQDZ84PVmXq67&X-Amz-Signature=596bac2ea13798555173d9a9cb1265d7556a2260884a01c15c1324dc924ddab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

