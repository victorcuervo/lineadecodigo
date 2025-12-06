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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLMPQPV7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaoAlrrDbGl8gOlETnDfmfNiw54O0HhO154Z2cw63r3gIhAOD6aJdKFUqI7h%2FOUNbadFS%2ByuTcuG1KFJOjPsf4ErKoKv8DCGkQABoMNjM3NDIzMTgzODA1Igz%2BD3zY48rdLvz%2B7mIq3AP5ODIDcn%2Bob7zpIfFrZaQsXec6LtbyRmVypQJvqXQ0xLNr4HlZ84wEz9%2BhAQK7%2F09%2F1hyzODbpiHvkqmQmBusN5FiEZKy1F7PgAIx70LPMOMuK4P5Mr3Kv8%2BFVB59BMLiZ9%2BffwTjnz93SIGIIBKyvUmDQLCweuk1UYpNKX8qhTPbL5d1l2KQv3LBGI7sV11h%2Buk0GPXAFUZX4W0QoSwlCs4SB5MaCQsVKrvNSZDsv3%2FCv1ugvgbPFBKgHWx6HPw8bvicbftZrbtpyscNxQkQdYIFPwSrNgvwThXmOOQJZwH5aDx7Dg8NB%2BCHLVzQGNnAc5pbDr4TuNjvuXS82q4LyfmwzkmWcKrDc9%2FrGZ2rrYvtL7%2Batd%2BoiOAUMYO%2FhsNJGF081JEO%2BCQW7TeXzqO2y441JlGw7y4%2BWfkSoDyX%2BIKC5fAN%2Fmz77WC0P%2Bq6HP4MhDdK4pUG7pYQoNgMcdl5wL%2BKt6T5OnGbYR9g70K8xjM%2FZJXQXggU7kneNUxcKEPwW4YlTJpZtMDxb5Ecy%2BdblHitLGJXCMabFAloSNiS5OkqR8WnK5Lpmz1aUuApasrbFIpzDcmnmL2iaeTKlE4Kqr%2BHS9U8dRMCe8f3gzEStwrzUqK4GHpCZsLy4OzCS6M3JBjqkAY5GZrO3tMp94c9jTdSUa3sje3%2FAh34VyJDKPyyYrZ%2BjE22roO5d8oFw7ISSBUHIpZJ2LRDagCEIwNpEcIDymcPHTt8%2Bf8Pia%2FwIMTNSSDK8F5KeacwhtyKXh%2BR4IjGFeJBxyjmap0%2Bs%2FIHcEYWiH9Wqp7gsO4TX4gUSJLrhS3ECA7nP7TSJN%2FCu7bVjoXdL36rI7h0sV%2F9%2BUyatEaK6fY%2BukCfr&X-Amz-Signature=31e4e02e303555d27a40f0207981a7bfc273c729df5c07733f7629abd5908c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

