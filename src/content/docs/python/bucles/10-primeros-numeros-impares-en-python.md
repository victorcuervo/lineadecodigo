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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646A5RUJY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBV34E2wF41ogvaFTBmtPhEN8hhOg6ZvG9URAimN%2BCD0AiARBCY7K5rjL9S%2BBnfhGOJ6svDsKYlbmq2m2f1laQz0TCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMPouPUSTqiebwyYR5KtwD3dg4g7xBrOma%2F%2Fe1OjcEjVzsUzlVYt%2BaVD0Up4U0reLJSLU6%2FNH0sbZT9UrGFQmWrWXd0AzBZJMg4PcIiSHbXxLMy5AK9B9qhOJusw9u9SKUxgxPEQMHgO7BMcuN1uhKQFGSm8bQrJi5xwgm%2BPZHnld9Vj6dJgXG9UL2syWH%2F0gTfglxnilx0vgRwKezeSQhcSy8Xk8ftZ3MIcZhu6yAu1Bd6A7Udq4HfrtKeFSU6ljCr5QQpvWAiVQJzR1BmTypW4t75761k3ASCKtWTzOxeS2tYfp4sv4DLjD15PhODUREsS6TDY5XJgjD3RYRHpjO2%2FsDZqjurpl4Z5ltsMRDm4M%2BhZYaYSzfxA%2BuswoQqG%2F3I6GIb0BI5t4JJyLYWbASe4yZc9hS2o%2BaUahwJTAbsxzJs3NN12ID%2FHL4T1AYKQDWEEQ8cq5cs7UNmcI%2FqP5gJiiyivDHDvwL2hrVROXiVMjjkwQkFW6kBX1XpMGCSp6KXEn2nYjtspXF4a2Q41yXVb5GlNyhilZgvpD%2BLmnJ6HYurMscE3OOYpCajNsIyw3FzCLgvPplgV%2BxLOOokTaQHtxipw8iHyQNFAgPY3JCa3hnhcKBE%2BsDyyVzo1YqLrhQpg9eB02PO%2FEBxdMw%2BarFyQY6pgHLtQevWWnhZ%2Bb%2FlYNWfsuJhgMEP9nBHf%2Bp1%2F4AGNZLsv7Liwh2kdKdGZrf3iOKS9yEk7gxRAj5AI%2FsOvLh1nX51UKCIeSFbHEaBCLvbECMyiAw80qbhSj%2FOuw%2BT9j6LezpH8dQHSd4Lp0yLlZB7vEB%2F5IgzXLCEjlrNXBotvrTEHn2txH68leVR%2F2N%2FIWtFW3NHRR%2FadYugZzT3O8rIF4l5NKv71iB&X-Amz-Signature=b535fb52ffff29d00ed8eb1c9d78591443c5834bb57cd453a1ab156986a25c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

