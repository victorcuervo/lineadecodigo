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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DSFWID%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsx99a5Syb9cdR42JsPF%2BKA9m%2FHx6lnqtiM%2F%2FTytd2VAiAf4htA%2FNYv%2B8VjcwB0CVpO4eS8WgN%2Bhe9v7zK5S%2BaqSyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpxNw5eIwXfY8PioSKtwDoJE8o3vTnwa4RL0AYly6pERU%2Bgm6mN2ssItmailJS5%2FbR2alvToAjif0BO2pw1lgyHPDuAeNlVcFdY7Av2xXlTVP3EwpZ2ladjji1o3X5OA101fbpbpX2wAlmL8kW5gUflOIMN2EAyN2Gi1a6PqM04RGt4ix6rSNPk6KZMZ%2FBhIe%2F83qhXPqHiJHT4Qy1wbMh8w%2Fa47Ggg1BE3IpJsugczeC%2BA2KAzCHKB4SR7M%2F7nVnJ5zuYGIoAYGi9kWGTITFK1GFwn6IXtfb00Xk0EuP304R0xi7XLivUl1PusorYlc5OTwJXjNa9h3yXpFhJ5xVramHvKDWRVAypn7OZFovCcsxTHiR8W7EigQUGJAVk6Q%2FJGBYPVkIy9Js%2BX2UR%2Bco3iQNn2AGipwnjpYoNXKmB%2BtnVQlHQM6tTUDGFWZnbdinBW2YnLDShnbSyU9IxVCi9jE8hS9cu%2BJL8xV3BxzJR%2BUnsNP89q1hiYaUuQhTpLS%2Bb4HMJcS6hrGX2xD0GAmuQlk1I09mefH4hFQxQbU2tZO2pxt98MhJ70l6n17he1MsQnDdDYSSXbJjBc2J0NETo0RKUYPFmIxOXawTYzZRmCT%2B5TPBeyuOesvNTnkZteFsqi9Xm7rRlAkTOBswioDdyQY6pgH7flo84Cps%2BsonHIO2mT2x536GLAviKOIhHRiiP8u%2FdJh4EJu8Ww%2BQ2qjS9tQyq%2FRb9s%2FQdZEKRIUnDhlGuvRT7O8GZ4Mc05iQRusZ6Nlr5ZUIyzgP4qRY89ZoZ4PiW8rodVAqboBC0DXp2EtVM8q6Uc%2FDvcDH2gakjiCF%2FQ3hiGetO%2Bk%2B2p9Slm7IcleSvu3ucGr74PtU6uKGMLovDBsuEkLmhMD6&X-Amz-Signature=2cee497e81654467d0c7951473259ff9e6746249610a58570ded203a9583429f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

