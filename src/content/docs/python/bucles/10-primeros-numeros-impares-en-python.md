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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBDRCZU4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCi%2FHxHHZ95c4%2FIxgEn5F6b61aCxOg%2Fxp8sn2SQQ0QBBAIhAJjdY9BABQLG9ChKMLbbeNCbqJ6mkGF9S6FaQVnaXBmnKv8DCEAQABoMNjM3NDIzMTgzODA1IgzPeShtd%2BN7THBJy%2FIq3AMzXeHFx%2BDCecVX7RLKyo2for12muylCSVZ%2Fh0Jj%2BUjVICc%2BkexJccADSBUcIDQtxQSyK2O4VYxP0afMr45AN3OYYeBwQTGs34oqosc01XDIfFWuyDluu09JLoZubKl1XxIHSFPYMkw0eW3TWrMFL8AAB5ryjtVOFVaB93ZcP6GyDl8f6CcyiSYT3fxCPVGBRxZ1Z175505ctvc2j%2Fh5kI%2FETqjtUTh6tIJgBHHOXtZwBDEkNeciI96aRL%2BfGHFyazuiPHelzbLveKmPDQw%2F%2FxHsz%2FAGSIumhDYxUAvB%2FOb%2BtIPkiGl2YaVo1FeAS4r3G%2FoJaYnRxMmgrvQWvJk398sgIexLsgVzUaNyDazljban2WFwHkd4MpmmzHkBceW88KMW%2BY5LF2jpZKOyUYZhV447gtySaECBfJUulQloHIMRW5Gri7xIDZWMyKbD6TNZ6rVMFXXyzk%2BNrm2Q2OBr%2BVcFgX3D7muY3KOqRfrbZpXRvrQHGWHnAT7EW4KlRSZmm5T73IVegtQHCV1dvK%2BWkigbdWx2tGJuyjscCO4Y4YnI283dGvpUNVie2XaGFwxIUcTLMIQPc4BdXhBubJzTkg4og3dVYHjGJD%2Bgj0kV6iaYnd9uueme%2FXyUuF7%2BzCz6MTJBjqkAZHgXsBZUwhSVQQKj4TKv%2FkUTZ1dCv3TRXINW%2FMM1bjsJiEepBOfV03m3RGSQ3wcXx8eT%2FEypRU7rj19Ypqr71WIO6RpaQ6CoykljVDbxpgpjDaXkTDwbTpyYSTtOZ4aWTD6fS0cjbY7GmkVTDivg1Q0Vn76MJkC%2Bxe6hUw9kNsYPHr0XDmXWvwqAXBliUEtFsAyOID0uPhD7j7MNO23MsahYNmU&X-Amz-Signature=f0da174babb7bce410d0af6e9a1fc2bbf0d5dd02a695455660fea91c629d75c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

