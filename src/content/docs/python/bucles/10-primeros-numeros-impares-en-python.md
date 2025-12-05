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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFSGYL6E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy8YvUzA8ytOZuAhiRAQJAIubXhpzs2JiHPsJ0oGf%2FlAiEAkY0KI%2F4JVvlV%2FZvM7Ocm%2BC8w8NfVWAVOmvpPjMZJ49kq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDK9diO%2BdEbiDpJyV1ircA1snu7kLCyK5W0u0N1NlDZt505W9sKJGC1ae%2BLyL7EaJuDRFFRD8Nn8wsbZ5LNeqmO6aDYi%2BdGomXFyXGe3S2Eu4LFoHpLJnDXvuKBy5EGPDMT6CnB2h7jKEc0fJlHL1jYeimXhfWfmCXPHv8H9yTEbM26qZhc0WPdT3Cd%2F2d5EuB8yCpAP0zFuC9EZAHD0zbk4f9%2FmS3qPwaRwiIqYhx3BaHmmZgtRvE3xKNFS%2FedtZOOom%2BkndiVu59jHL0qzuP8J2iPrsCfr8lo2Q3cfuEJKnTn1iRgY5e%2F2Jac%2Fvo09A%2B5UhzW7GJw6gj8wr5u36SG1sbB6bl2aPQ8k3Y1OKLsOH0JCQ4Gdxdp89ejOcfEpdAArz8H%2BSjYqCPi04GoQo2IPMk6ncgBKhScblzldlEUKt%2BulQEyIXB3dEInr0OcXEOg9Ol0dmMQHrbmwsgMFnGT9M8%2Fnrcez%2Fg26jT7Jajq37yZzrz%2Fj4bJEuB%2BDLRPEjqaUTT51pJp%2FEzNcqqpAVJW9olbHff5LFH3GwF6%2Bq7OAM0jwMA1YdWGelDDFQ0z4f2JaCfxtxHblbnEK%2FlTC9w1gCdTZ7nqXnnail0brYheXxjDMzfksD5PHdLcJarLQmsTjIa6POWs2nDU%2FQMO2oyskGOqUBEcxdb%2Fre5N1MCSipMByMSKPLvkQnEVBB8bf%2BVowtP7vXTZqYnxHWEFDkPeWlT2gPUmJj2zOx6jR0jdd2jkJuS3%2BxT7Q2RYnOw3G990bAhro7VbzeYEM8d7jGibaEXXq%2BLp%2BdhLqxfB7EE4vOnwx%2BOTj%2B%2BRwgx5ixIzdSC0rQkkfY7823YxW61wh8OiXeA1zWg4AoQ%2BjIA1FWeHMQirNnCL6ulAhI&X-Amz-Signature=57c231a46b266a1140c617eb975e27efe13dffe469d5ac8b4d8472b6d7b0b91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

