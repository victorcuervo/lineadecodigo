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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNXMTH7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7etEaMcZb26NxPb6Cl5u2wPnmVHWNnk1lMr%2B40WptdAiEA20x8DhD2OIG1pMlIuI17bo2S%2Ft41vRiGBn5xRXk2MOYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF1IoWCRsh0TvMHdByrcA08%2BthylfTaZ9Rw8qWgx4NxEE2UFszXhHfEs9FpSwKyPnd2OR9GS3UFhEBsU5Ncie7vnKICz33nBInVHJba85bGhUEcN13O98hYtp3M8mkh7I6wVINvM0oPLhfVrntRp7r3ncdOxNmtPtQcDQqU7LH0eO%2Bh5IbeQH3k%2FaAO1NkeQuGSv%2FSthWpq3wmAeh%2FNY7A1X90tp3PUnm9I1PXNDCaHIwzomB3V9FMvjUHS%2FNl35RNNNNqQ3Pv%2FPCv5jNtzfXcOaXpqTZT8dghiwaSvyvJsBWZl5ZX9vYNtd9OOABpaLY0AtPOUwQOh2jFyyHNA4Uk6%2FYii2c%2F0cQAw9lR4dl57uDMk0NOVG3dJ45gnIO47hfpkNnhus8Sfut1fLzPkzSu8F4E0Bu7%2BNW%2BoyxlaztAzsvOO9vOO22xHlKTNkcxY4u%2FOo%2BeR%2FyXzSAhRchGA3HZh0DU3GPV4zGAdoZzp6X2dsNGBTrrGq5efXkyOaXr%2F8zCjR71jA9JOEfejdyPlBQwCr7aXol4H%2B1cHfuzadV%2BYe88vnvZ35DylOsUwLLS62C%2Fst97EkPQQtZ3VAT9ADX5Z9Z5DVAQlstuW5NIvZzDWp%2FQAaiuBYHJ8G%2BtnfDDoqUWKVofnkBq2b4VwfMLum0MkGOqUBJDcBmJnBVuTDHCUvj%2BpX%2ByXk2x5ig%2BM%2F%2FOUMxrzeJf19QdaAD8IzAgM%2FITDZ5dYpP2e3pQgWFf0mdDH4tqEidayqJfl%2Fqnb72CQ%2BmehK6YrcHvhBlpYCYdPIVV08ehzVg5128xU1GuK5ZvbAJ%2B2Q2L6fu%2BV46bS%2FjTAgSplfeKVYmI82tvP%2B5ewEQRUWtchreYc69pEErbhkT4LJPj8arsO2Uepl&X-Amz-Signature=8324a70871cf30002c638edcf35a41ac824e2534db6fb63be0cc6bb9f05d4189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

