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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GY3QG4L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDwo1%2FwWyahDAiDsWbwMspQ3Ee5rdTt60VxmLEw%2FyQU1gIgAvrrLC7%2B3fV%2B4aqoXAw%2FaYh%2FKZIWsk2QGV1OuKhMpGgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPqZuvycScjpzFJ5VCrcAyjhrhMooKN1QgS95Y4V08LUksfddFOn4paCG%2BAlBp66YNkub%2BCWrL5euafkfAUPNNxT0tYIxPkEp6CPYTMMXOXBaaZ2t7lp1r878yg9tdchXMwe2rNXKtGIS008ayxuKo43i96W0gFLy0l3eUQQxlKN0bV%2Fic5kReIb7vYs%2FbYSSBd6RmhNjT5r%2FjschYUIhWVAj9Vnk%2BNvDmHwfLXdJCVQioJjLUblqF%2BscIk8VSoW1kxbcwjmE6Tvx9WdYmxen1NMvF%2BgKfLd63O5xWbWJjqgPIr2pY%2By%2FEpkf3%2B2sTRk7VqE1GpYP%2FlzI8pWsVv9PsXalUQhUx%2BD6kTsg86lvVsNVokKr0qjXk1L5CNpO06wk3D%2FF7klJ%2FePPhcZvqUOHJmHYSN8RwU0Ew7l0hs%2FZ3jAcd2ebbm%2FdXyd4NLluMzzAhe%2B1fU5zjKo6jvXeffD2UginBHlGfZGyu8UzOf59bF1pq%2FC3nrSv57NKoKC0%2FJSaA25ckJcloJ2945jT2vHqraU7wRTPIPmL%2Fq1I1twRIKJFdKCbKx9NPGgvhlZC4bqUiUi%2BTCqrZbAKye%2BIs61OvOtYgV%2FJ%2BqrIs5Ya0zsegH1HCOgQltazEmSWOELICMKjOWyPNJedLePZvbrMOO5v8kGOqUBDQ37Se4QDJleII7G2o82z2fg%2B9Pb7moEOjZPem3ITn4wwz5DLEacmiq86%2FsbdeOdxMbUOpFACEUEQws7JP8jERnnMIbpPYEl3OWO1GsjOkV%2B4SyRmP3a5XL5EnyozT8e6xJfzZHupXBMAIOjSWyajdVwVTfR8ANBaiLR1H1%2F%2FR8OO%2BzEBnjos8NzEt3uAMdbh2gZCGCJ2iyyB5%2FZqpQQ18j%2BYyGD&X-Amz-Signature=33ed5bd19c87940fb543d125e0404ed236e7f99f480afa47167f0b891fcb6f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

