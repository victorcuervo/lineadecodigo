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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3B72TO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAbzNR5KVnSwjc%2B3bYyuNFQ9A0rhmZ3FoLzZ7rIeNskgIhANEoibnwWweX3Wx96orza18KDX2104Q3GZbzfYl1fQacKv8DCHoQABoMNjM3NDIzMTgzODA1Igx%2BbRS84xhXbG0KuJsq3AMr0YSN6VyJShjaRptK2oRtLgQLhmb%2B1tI%2FJrospyXGidl0HMbhWtvaA%2F1pruliEsguuEK99JMS9j4XagZtO8rqZ7x3Oqa%2F05UfICw%2FcVmt1%2BoIPDLXv%2FyNX%2FNJwpgVRtItWmDyIgFokWf8mHKWUVarYX7qX2ekyN36XuuckPKtyrw5B7OAP%2B6im092U8UtgfTMis%2B41no1a4SywbnHbRbc%2BZFXfnvLjZUIhU87OEZ9gAjbLk6ae756hBSICBawYvhI8DRoCKhP%2F03Wo2otZSZE15fQlM0UaMHMd8YDRD%2B8A3avweHiCAL9wVbiFd7xcK38oT0ezoYI3tnc0S%2Fa5aeLWrF5xarB7FliIh%2FZTiKILBP4dfTM%2F0VikVDTKqi%2BeT0NdCXzIlASngBU%2BifQwRKmv9MwHeQXkInZ6fpjxd2estvymyEbM3aN1te7PZ8OYQ2v2N7EBrGkmVTlGaJ4M%2B0U9fPmBS%2BIKKmcaAvZaxWxce%2BfLU3RzEUX69ed65LSdytWNdb9xkI6i%2FYPxsO56M7pq3XS5YtJEj86o48L2JoGDe4TWUk9UCvsl1bhWGA4niZYaMJ%2FojFdIS0E7eBSx7GEefOkxVqd4tvRDwcqcY30wXU4bgTQaDSG%2BS%2B53TC%2Fy9HJBjqkAeQen%2BTiX5jWs06DSEl2QwNFho7OKkvboLzrmF%2FIWAk4LpYSI%2Be7ck8tmxFiZln9imFJJ3qUP4v%2FTBsPA1ARNpsJQ%2BMyufdE%2B%2FK15D%2Ba1UHxKKCepPjeyCVsQ7Dx0ZYA3iGbO6Gkaf%2Fz2JsASKkItQ%2FkNrcq5bnZMGBzL2pSlsxQXvbAYM9MMmgcQZeRGNYeyZNbxID6auTDczT%2FXl3EoDLC1%2FyJ&X-Amz-Signature=d35fabde7025594deec9270bbcbf355118b9925753867b3da87aadc457d5d685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

