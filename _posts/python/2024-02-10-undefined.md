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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZERSUEP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIB0wyNtHdQMQbqPThTgEY2Y9IpRvp4voyrevLA6ktQBwAiEAtt6%2BJI%2F4EFPjLTrlNKM1l85o8IM3pTM7FXMbRhselPcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDr%2FMhDQXBXjU4YtgCrcA%2BD9nStS0rXFhLU7Xxpf4CVPUfeerJLOmWZtBJbw66h9VFKqz1plz0HQrcCe70i%2F8oy2fIjnZDI1yOUln8dR02I3AsV9nZO%2FdZWlRxVpYEZLqba%2BrmcaEaQZoVXHWUbnuN8cVn%2FSsGAzmzaniRQyW3srZLxc16%2BjB06O%2BdcnmS4pnwg%2FbBjpp62eD9ORJY%2BFjOogwa9CSkaJLasrzvEtdnfDujlp7ZeIM4zbGim7jCvzYQBBlmCCGb4cLQvkTydaXkPx5pk8EFhOJT%2FuGJy%2Fz3Jay1VJu%2BJh30mfzyZKo3vGHE9o4iWPfL%2Ffe%2B6hMouxuraSkPuwjJ76SI8T7v%2F8Ee267cM7jWvsVuYGny1jKNOEQ5xRzwYDq8hqGlfoWnGZXn9w5hEUx9TP0i9YkeLqAQjmVkCo5mm%2Fsz3yP7zwJKL9uIUVHkdDlbpsZHPRliwKdFD%2FpuCRiOMpoO7rN9KXbJWOfyPB4g5VPu6nbULugDH15bczJgE%2F3MgVCMMQC%2FXIlyCAorVF3%2BL4KlL19R7sp5RFc7CTkHNzYntDJaWgBxDVNnlUirT%2Fr5eXX%2Fat2Ppiv1gTS9CoPKxcodnY059O9Lt%2Ff8RhIqNso8PSFd4vv6CMP3nLKMzsCnOdhcQRMMGbv8kGOqUB%2BOo7QU4u2JLmSikTejTQJmgfUeWi5HA871AZcfEQcsEZCb6i01%2Fl%2FkpDDnw0uctHwFDKBLxnQqaoCvq9RXLbuFIz%2F8%2FMDBfwV%2FDaky5u81o3Yftv%2F1R87Lf00jmZOqxaMM3YXVyAxWfr%2BOjGHkMgW%2B%2BzQLDq2mZhvxxQmbTd55Iz23V%2Btbu00kRsf%2FdatNWRhVWg%2BvIcrOC4Hv9fpoWgtUlG7VJV&X-Amz-Signature=d40df4cd012c19ef1509cd3c95e3fd88d3bdfe505bc74517e252ab6c4dc66dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

