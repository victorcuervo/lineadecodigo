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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VENZEYWT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIChpSUR%2B7jqwe%2BOajkuxheetOp2E9R1iNJiRvW0qe2J6AiEA%2FGSchUNQV3FmHlVW%2BSwL8q4Mu6hVH1veU9qNCZIl5V0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDL9fOBKpVpwomDCkMyrcAybsdNmepqKcE7AJQyDZHI50OJnr1xvWKiM3G%2BqGEFaFhHefATeIuYNXk8qL%2Bk%2Bm9ZinN%2Fgh4uvHGVktv8oHYB4PAeaMlC%2Bn3u1COKhq30%2FMMhyo6gWHpNxS8I81TqLMj6kk6v4o%2BKPBC3oec5MFb%2BHd4nV2Cr06i2l7uhTEhVsbdV6m5HX1cdH%2Fp0ajwluc%2BS2wOcuIEirPf8iGh9yPuikxb9xjinRG8B4L83hoM%2BGpsmGJanGsLpW7yX6wbCM0HzgyplTTUaUlBoDBSwnxvaYFmay%2BPBqcgZ1r6L3YbW4oRDRR2bS7gXpgw5la2VgqO7%2FMLOuwIFTutkNtbVz9W39hjP3uaaXSBDGtLlyeTn3JIGWV9UJZ5mTKCwF73v7qO1SONCtXRzOB0AgnpEtCuqgjf32v9H%2BnhgTB62pseZ23Yz7Y3YfC04ObN4S2Uqg9YkMuKPIfTjWpOi5uqDRy7%2BVDhi73GwPX2AKRkDxxzJuc73srZ2v%2B91czDKGzZITxpTljF1kVwHtbFzZFN07c0fBu4i8NIqcrKysx2KKJapD6wAc1XwimD2F9waVO5Gq6fjYrKhfYiHqCNlH1yraCuwrmBfS%2FdphriFFwAhnyifM3pLxJ7sh0dB9nDBdKMO%2BuxMkGOqUBYOibB4lLDUkt3l6EhMMMQpcn3qfFItfQ4JqU3mlrqlzj8zww1UXZy%2F9VXxDGIBusv2ch%2FaEiRJnOxyDQ6ovgnSw2YlikxNazxijq64QJtZmlrkA1dlxTbgxFu%2FnJBmCWTg93JHZptOxOAMC02J6PBYC2QTzd4n7aClYuqPP43lpEmvdBWOdxQ7ANHsEcxzf4vhYFvWv1okxubFNyxJHs2vos2Qyu&X-Amz-Signature=72827cb75b7ac939de56e075b4e66b85d3b86862f1785e4a036c86bfed7cd61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

