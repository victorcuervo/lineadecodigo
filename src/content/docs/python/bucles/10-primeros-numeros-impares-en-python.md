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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6FW2B5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLzDYbuhYRPS1VUmjIVIIbXn2znbndJsTk6mE%2FsrAoEAiB2ahKSYcgmUFcG5U7Z4%2FEWbuuBWfV9OfQoEAmYvMVHqSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMImWebKaIBu%2BA0cQoKtwDOib8jLXt8ex0ikA5kgjhb0knUAE7da2ZbWKDZRcpskhwV4Ul%2F2gFfdlmE2iJSAKqp701tvlj3bSQwPy5areyLzLP%2BNlslDufdHqsEatAN8Ss63Kbi0J2RBc%2B12%2FzBf6sAl2ORvVdaIe99Sqe0azUmkc6h5h8HYt0Kp%2BLFFo36mT%2BASYMj7zg3guIttiqgrMbMwI0gQF0xh5qCvtI5BnXSiSTdZJQhVFa%2F9QhsYWsUn5ayx8yiT1nC32SYDPUP6ajLaQL21y5eylc1okP0ijftcnW6%2FDuvmFtoAMF9VTvah%2F4q%2FPYmeAyOWkyAtMeKkSnTErwKJeD2aGylCDHDNTW%2F1fOjUDK8eIWIX7S1WNYdxE%2Ff%2F1cpF39R9iMYf3%2BdGypeDwgl279%2Ft7%2BVwAvjCS0YoDofmDOJn6%2FRsJsiTqtHGlbAXyISXwi3uPZ1%2FLhvwCYx3MQZZUNqvYPWRulU4DfstkhzCH14YgTABaElYTv6CBIh4JeZdPxvRk5NKStZYzQjae7JkhFoxVhigmwXgsu8ItHsL3P%2FQAY31%2F12h6Z54%2Fr4i3YhcwVcD%2BPfZPP1qRxClDbpc7we0puxNsyoq5URhOoTblcj%2FlLP17KoJ2v9mOCtNiy%2Fer2v%2FT9PNYw0MfXyQY6pgEv66S%2BLxt%2B%2F%2B%2B3iuo3IESE3Us%2BI%2FedPAwz5G9zSF6xWFMNJS4FUnznqsul74yVQO%2FGDNGXJjhJQP1xICv99OkQ2Y%2BPSKZB3HLLpjb%2BWakM35FL5AWxeHxW8J5zAMtiKddntLhph%2F5Q%2FLs1oBqO7K%2FHRkYxYdH77e%2BqrLq7eukhmSZezsWplITMnWtzAmpFXjRQ9I246SRxpni314ayg02lcy6rnTi5&X-Amz-Signature=d38fa23b257107316d9cb3773f8ff0dd16afe0dfc29074933315773ed676f6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

