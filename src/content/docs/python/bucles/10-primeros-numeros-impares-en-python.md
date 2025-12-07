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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZHN4NF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOJiy5X1%2B5LKKic9EuOF9APmB%2BdA7lrqZYvAsS4wj9SAIhAPg5qHmHYEa4XUPo5w2nQn5V6S%2F5Gk%2F7xtLmOenUtOqgKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMROdAoaIFoPzQmvcq3AOP9ywydLaIY3r8GiyM2cxPuLb7T2n%2Bbp8pmIgIPaG4BOGaTiONW7HGCR7ZIw5q2%2F77%2F5nG%2BwS%2F2oRyC%2Fv%2FaQV6uGzq00aonKYIfmkfhdeOpb8sGn1I6BS52PYOkAIGeh0WhhD6l%2FFBBiNvc1cRgghGTW3TJQ2d7gU9R6X1XyzUsN4oUfGES3xoUXIKgjcmBL6aa3o8S1FgXitun3aDRESMQI8FN%2FCF5bqeNDbkJlft9FC%2F9cl%2BALNaUx89LLMmyEXp%2FSqe3pcPHEOLxIkJq5OS%2B3fLvit1qUjXWdw4kHMCMhWolMOde9fBKGKkPQ0%2BL6xso8XlgWsA7%2F4FQrHgY3g%2B5ZJEM9fU5jwKFoJytJBeYD0J6k0HIyNJh%2F3s60Wot3FZhjpgq8JZ1CUKu5CotNJW8bHlS1arr35ZT33rSQqeQiMMOFnUnDi%2BKJq6O0%2BqJ%2BWwiCBr6l4m0S3ZIkRY3UOdytB0qswXkjyyKp3NfUJC1BC3UbyIjaFUkzfRmA%2F9CPegb5wPfrcax7ZpFaqUsiPJ0YQfcW%2BlSFzGAEFkZFoh%2FIDRQ1sRoXlg9OTvozazTbI8Uisd7pF%2Fd1GvknCEMjMihCebQinkksHK5ZSnQT2UXX7X8IFHNt4VRh%2F7NzDfs9bJBjqkAfwK5Ut6A1cJnI14wrTJftMCsafhW6amVphiIpNYpMp52QUCDgNc4rS2z9rorGLYulDmEMgaNsr83rb6dxtAzgKlnrSNF41xxoZZ8lJVPr%2F6IqUBOQx1pmTJxbZTXqyPYcAZdx3WKv4J2i%2F54pkBZXJTC4vHTVEIMa54dAouTSr3es%2FIxSDOFwgTBtS1sMeGXb81EedRJ0wjbngXfWPgqBn3s2%2Bi&X-Amz-Signature=7c9a3558f325dd91a9f331cd5cbeddcc5653c96fb762fa9e07aa91d9d8662185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

