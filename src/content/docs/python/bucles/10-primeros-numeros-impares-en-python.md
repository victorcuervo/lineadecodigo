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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AUW3NNH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW7Qg9n2VLxWsDvenfqDnemPlVKOg%2FCssKn46ZupggnQIhAO5VxMMFjyyl3TYQO9%2BHAH22RabwcwaRwCcuL0ZXe4FnKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BWXz2DifNIPI16CUq3AM4%2Bbc6uUlq4xCH5hJbVKv8Rh1kSpazLP5ZYsomHjJQGDJdnj0ME0YqJ6ET3Z9am8c%2BsW5o5818B%2FYpSlx%2F0C%2FmxU81ei1feY8Cv%2FT%2FyG2r%2FfDVEE4p1wgtgu8PMfFgbhF4qa6xO%2F4W2GaLh1rTPo85oRFpm17Bqs0S92wlU6XzdFndpQxqypld3t98MTaTox3I%2BFBfQphr1pdRDYXgA5PJAnfIt1%2BVFd%2FRUGrgT7%2BJoPE5VT5VJLLLpeIDc%2Bf7l26b%2FLvaaWTJpVUJA8ZKAH3LG3HqpcKSjuu86F2kWUuYlDccCArH8sMglFbHbEWyG%2FURHNzgEGUKmtEYgjLCnL5y3S7E0PeOPCYJOJEaFoockPggTqYuREsJFxAzc92B7m999ycqoOeFjHq%2FcQ1pjWJw6YNOPOvsrlbA2JLJM%2Bmp9JK7Nxt4e8t3heA386ff45YLAqa1hhiRbWm2EERonZ5U%2BflGQ2bICES%2F4ECpuKxRpdv8llcVzP%2FNFX%2BwGQ2OXutqSqKieRzffvn9KgH%2B5Gjwp56c3e889%2BEF0QAn6T3vKkwLk8HMyjlq%2BR4CU694uBWlSpWgZg54CIQCTatVsryFYuk5lozYwiJeJxGwP9nNb3YVyZebY0nW5sCwTzComdXJBjqkAcVCmUvZdoWVTIzcNEbhP4YasTJxY7vWzZgBKYtn07NcNF91ujTIQst617Dfxgp22spEENhDOPH5WH%2BfTQOxTzhn%2FLB%2FV%2B8AQbtxa4OfaJXX7ZjRDtG5Zs4EIg4foy4Ip1KaGWL39z9%2FP08vi%2FISdE6CM%2BE2ss%2FGaJyw057%2Fd%2BSg%2FO%2Ff6amDgYQb3ummg%2FLmxpKMOWbXnRq0KRF0V%2FO9PoI1lRaF&X-Amz-Signature=396e64772cb84386eaa9442e32298c711ad4f9894789a67ca68efbf91b7af497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

