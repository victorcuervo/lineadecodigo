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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6UVKFZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfZlyC4X2V8VCAqsij5I4oPolb%2B6EnT3kKS4UeczRx3gIgZZi5G1X7H%2Btjsrm9lewNqzZ2pG7iTSmsHmte6CGoRJoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJRMNsYXpmu8gQLw4SrcAwD9sFphUHgb48JW4MkZUEclVHmZXeAYBLc4wazkmPEWbaf6nA3WXU0JwfA%2Fbet2dHPMXCUYbqtRsaxoW5LUoEN7DOjJyOyZo03aVjhDXwERg4v4TBV%2BIrdx2Tm1KS1DmoWNJO2xPysIGZAo7kYF3NonKrp2S5rc9cu8HVE%2F5y1S9X%2FQoMTAFO4tb5%2F6d3el5T3p5%2Bx%2ByY56NQQ%2BZbeu7aVfMh95sMrzRbnd1njPUpdYLtRNaJFwYk7zVsARXgiMUvm0Na0aDAOBvT8IgwnYtfJSKHQbv%2FtJC0%2BD%2BqwLse47TGPA9Px0zONHY7uY0oxh4t32cT1IS2GsrSvNu0frzpc8rHwJEXQIkyNwXbfI5Zr9hMhq25IUSRBluzX5xMoM7FJg2P7c2T%2FX5Ar1NV%2Fa7%2Fy5nkxOWvr%2BxfPSwKnJ9xq5YNY0MIiQI6L0GY9MMORnTzdCPKD5jO9xTQR8CLqLVwydErpr51OdOuYq7u4SzGn%2FpVIc%2B%2FGlUgNWt13Ttq5f0PSvoj63nD9f9Ok1cneFV%2BDO34WJc8GIg9cEu4Y3C7Et6d6VN5DM%2Fqek%2BmKKRZYL77%2FFxhxBHYhmImVF%2FJ3Rh7U6SvFsSXN2S%2BqzIXPzAaK2Gn9biyIDgkOoTTcJMJa9z8kGOqUBlU93fPcpv6GjAUNsU6Kfq6cWqiV98KsqyteGVJUl772F7jlbUSJqv80RuUQ%2FeTDx6vgW5jo1yoeM%2Fzjg5Ln1aG%2Bx443ghKaAb7yW91jvJNNyA4HF3S%2FuNPWJyp%2FoY8KaqweujWUT%2FeNFCiW6v0Y3a6cjMCNwxisYdRNrFiLX6XVoF1sotYdlum%2Ftjz4eEgCPq%2F8KZfvqitVJWTpimzzzeEXOAP7B&X-Amz-Signature=a97161f88a70a68509b225de53e1260117c2dbc34d05d829dcd4512258218f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

