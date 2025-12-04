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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZSXRDG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCD04TD6xZPUXTnG0ivvs6hFeNjn5c8mvwOD%2FITNzw1iQIhAK7%2BUQ30%2FyNSX3KB6aDe6WMy9xnk%2FzXZ5cYe2%2FBTTiXKKv8DCEcQABoMNjM3NDIzMTgzODA1Igzq%2Fq6uIkSLDsTvZZcq3AMUpvKsBxx5Vf18iM9dby1Bk5vgPu0k62BkBdDVq5aPQoCxHuLJSummYKMY8JhB5HBPMJGrwH4XaS5e%2FUv0cFcq1kiKSI8BEbsvt19ZHBZ6xnPp1sL270xBY4JdP9snSImS%2BseE1bB0TYysXbM5L8S8NY0IUO0Gv88XPaQkpXyaQTxvlOSaw5%2B6oke9F3jibE791XPO1v59bQ0lK2HWNj0hdg4Vvi7VYbder6cqdXiuycLwUTgUm0JV4C953SsuMJTPXma42qpJfktYvcZxEYCjLvw6FTXz%2BbQmZyGZSCdz1Q6kNOkCRR%2BDhecR1%2Bxs6cZNWNmQOalrfifQcHkfsKT0kU6iz2j%2BRiqYrAD9XHpduhjjcez2Qd%2FkZ7IoI3ZqGaJPxvNeCxBzuOCst%2BXOYTZiOjFrsishVuhOj2K2bVKrt63c1qRAOoIL%2FE8SMmx%2FfDGvvfycBcc8ti5WLdGxBAM8XPOoTHEBNvC6gEP9J%2Bht%2Fzx9pFk2wfILNM7tTsgc9cfI1yvERrPsWE23wqpuAaL0%2BPlaG1jQZtJVFADdjeBV2gAcCSq2AglWPPL6ftwaxNl7qg7%2FsdoOQMbnKpCFRmlRu8RDC7sKArOe4Jh78HU6uecE%2FR0gY3RKgnf5dzDsocbJBjqkASnVmiI78A8%2Bn1O0J83U7sQ82%2FGSjReO%2Fn2ccJ381dfV6JUO%2FsZ5lxHV7H2shyXldakUGtL50mwNMU3Fv68SAoAUuWP3BdTsjhlXaoaqkbjlPHtboBOeugiXjqhs7EcPgBUyJxQ0Dpns1kwMrPs2OuVWSwEcRY0nwUwtsMjVYnpXeZ%2BAV477JzeJZf2SQ1%2BjJ2Yfqfb7P5WCUngmQMGZU%2FZXeg6Z&X-Amz-Signature=5a7ef5a2cb3bf34a52a2d13ac1792c6daa1262a9b5551d7d7d3eb19dd804b2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

