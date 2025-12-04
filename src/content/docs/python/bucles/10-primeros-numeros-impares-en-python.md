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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZH3YI2D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD3EJyzedfEP%2FkqDoMvjGfgRD%2FQ%2FgVdxfpSB3jUe135ogIhAMKyJCwVGyL%2BktsumLrGu8GIu42BGytT6Ke4%2FVjpRLwiKv8DCD4QABoMNjM3NDIzMTgzODA1IgxrK9DrXTs0CAZI6oIq3APooxt9Oq3lLV%2FLyIQSOv%2F19k1LIT1C%2FyP%2Bdd5YnTKtpD0KaU5rrjhXrXpyoA2pzXO7SZW6hP7XMCmbKYIwX7DxVP%2FleqEukZils2FQtTCp2ZMV10bBgs8eNkzMOQ9ERGU3ImIKRRdH81pzzH6OnG47Co0Ogbr%2FJzEArPrSEX0rYgVR1Ezf8AVrf4kdmUlWn%2FTaDSPcO5HYziUQ%2FF9wvzMsryc51xPgEe68wSNZDmhO%2B1r09wdnTVFYA9NQJhqrDpXYLPoBcuMpJGuLsqRrG2X34MpHWSfv6Wj3%2FZ5GMd0P7on9DOF56e1WBgFaEu3KlvKtNCwImG9zx%2FkU4%2Fw1%2B3o6ck9%2B%2FNFXLFftUWiGYDKyiNKWPq2wPw%2BNa%2F3GkRR2oZLg%2F6RTvGv5v2X3Czqm4U2TdItuOcy%2BLH%2F%2BjKe4d5uXY5EGxT%2BgAvgMuBZDZZNpmtuPbp3WmrsLrEJvNN6Q3ZID2qzIibTLp1%2B6K7C%2BJVTAqpx8gJJ9HkHzKH0K7HFKrpRSSZFzAjorE7d%2FtHI0Rs8%2BMxogJEhw7UfID%2BbF1E9ivWOZ4I%2FVskgP9B5L0ipW5Yh1u4L2aMi13tQi%2B8x56H7W8kNNWn9TMoVcFW6PyxRD9TDx01F%2FlKPGdeNgCjD7rcTJBjqkAaO3ViWs1nU1y5ufVdHMewbQ%2BZGhCF2QMWunQdhEEv9dPiA4Fe8LI6A7L3gDHfoZcxwTIkwTDclm07Ixkq48Uc73VdZLPcljUuR5wciVr0aI5YxYxJaFQdUySAE4w4Ifo8zjcccRznCTrRHxqlU1DkwJTiQ9N7xFXqOXBCbG1rLdMfPWgBjIfubwCfSDwVVAGYxXIN8%2FGAgp0Vd5CO2Why0nTuJy&X-Amz-Signature=693b5e1aef18293b824acf004595f90dcd361d3f13848c66bb388086ea6c9067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

