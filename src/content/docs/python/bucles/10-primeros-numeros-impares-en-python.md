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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IN253ZT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3FVKH7r7Q4vzAoSK2VyJccu6cHtXrPmGXS%2B9hVeRxjgIhAJMfbImK%2B9MYlnO9TQbChxe8ezcTGdQizywHR4z2XiAIKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytVYx1mg0b52Irfm8q3APWd3HK8kdSCHa5PJ4%2BSleH132nJ9U8spXre7dCobEadaLPvWL5LmKbbWIp0FalNjs3QBjuZ2m0rV7TDrL0YnHDehcVVzZzdq1ykvrDZJ36BR%2B8SWE0g3gVQIj%2Bn1fAlKEV1tu5Ip2pKG%2FdUijMd7QQ6EM65EJLDdMg64%2FM8%2BI0uCqdgFfZbOSVQBeMTWigAOPr%2BtqlHh6dgBrKl8dFHI8e6MNCxc%2B3daGVH2V255Prs%2BPQ3UkMVzegrLxF0%2B9oD1%2BhsBoATlYXc2xjDs1hC%2F0SjzorQ0ADX43gXC7vvlXy9cjNEWI3%2F5MyaNKLRdRVCBCVShrtAnUrufYPLE3%2BYncaryUo3A8%2F8SbTw8evaHSl6KTzfXseiGmbBGPmaYpMQ1I0Xa3WpIzfBbDNP4HFQOlpMXHOXO6wI%2FEfvyQOygActAyYGXNOGpZBTV865%2FSzYpJv2K585h%2BC4I%2F%2B2uJrlgMdt9e4nwB9E0fxe3IeeRrQiQEAcMcedTYc7ogCPiV8wt2Y2ZnPMossDn1bdpaO754vHtH6oDcAAlCAteVYkhdjJdMxALC9Ap9ROmrQz9CsWQvJzgb%2F%2BnFJeyln1UQKATNlVinX3kLf5%2FtZXgJtsfGN95wZqg73RBEWx%2B7BejD3hNjJBjqkAW2l9FhgCm%2BTlzg2Ikzl9z4nv3z9aBEi%2ByXrc33Dl0hja91WWeLl3Nnz4eXdUzoL5wuQJCuiSSxsXKX6M8N2ZO5qfSnnpQTz7ARJzEqJPf7mclCc%2FP4M9PHg0TZF2Jf8KA8xkGOVF07XO24h0M8i4xR%2FGgApsTm5RLvlHf5XLht5hkVFIvCjWSLyMb0lKVXyuWKjlzYPg2PM2Maz2PCyTv9VBY1J&X-Amz-Signature=a4f681efe4657007752e5f2a77caf31b81dbb2c84ada60aa9b5b479463313012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

