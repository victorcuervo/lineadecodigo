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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTMX7UJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8l%2B0t3qHiTRGRVZYRDXW0CZUkUvOCHE4TznBnZmH8DQIhAMlLiuPmkwjbi0Oq2%2Bjd0UrETJiIleKL0hDv6kQgo1RtKv8DCGwQABoMNjM3NDIzMTgzODA1IgwXFTJQkKP8docz%2B5Mq3AOzqb9ovfe3UOXr%2FZ%2BBe7iAXPATX1lHhLe6ckNKAI7IT%2FA%2B%2BbSDZ8qPwCbb4h8FJ%2B%2BaRW9JoBQX5Bq2WaTKOESTbXeUo8uhGwiIs7PEyFfXrZivzF%2BT9mh6BDi5CeYMR73h9zIb130B%2BDn3ng475cuSU11DLwsAkAP8%2Be8tn3%2B4%2BEuvGEm%2Bcr9XsWIvgfCG3Zf4WW52%2F%2FthUK9I%2B8MNfC4iDiJ74c8ifqKPBRmDiXCS5szqcrATxEtSeHGia43uQ1oyDM1K0Zdar%2FRxYQzsZ7yrKI%2FveX1SNHxO2BOYg65vlNewZgN2v51GB%2Fmu1X%2FvVlyGFqXrk5NG4DNLeSUb%2FrmNj%2Bt4ZFMaPuAZ1BCAOLgVoAQ1g4Dkhso6O3CtZPHH9H%2FreVu4VK%2BzYmMF7G8BLmXjaFbBPj8wCoxOB6Gzf9YZUtCXY2oy3CLzAQjqQmFN5e%2FSv%2FsN97PWzyAzB6VuI8qDb%2BcOIU%2FAwYrViL%2BgtEMq1LiaDT5mJ0%2FBcjc5%2Bo2obARtOCVLISE17zcRQO3TPU2O04hl6jfNDyR2G88pZemNc8btUxOoRrpFb%2BdFL%2B0dIdxZY4Q%2FLKJgR1ILhmhyf67IgY%2F%2BnM%2FBbZ9nQu7ynPThAxbAnYy3YeqE3bStsjCAqM7JBjqkAXkSPJpGw8gp2RMaXiYsHf5XRULoIh8KDYk135PKkqO4qzqgq%2BtRNl5xGQ9bAriYT68v9D%2BxOnXxdPbUvS6phsIunkj%2BbmNcybT9y%2BPn2cc2g0aM1DaE04VEkFQ3UnxaB5VEJmp06CUZ33rwDvIhaHlFAq8wbXeORt9fIhYwYWGUZOTqb%2FhR5KWKNsni5VWihIzpcO%2BKLOY16JHd%2BegcDOoKT%2BMa&X-Amz-Signature=56b21cb8b578b9232bb86d14cfed4f4996abcb549c704010a995e21f091f7cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

