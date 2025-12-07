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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDUXGRR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjP0%2BE1UEb5Gr5WgwG%2BSLtX3gw6EoO4nkHFXxyqKwfOwIhAITq6pg8FNS7AmmifvpkeuOQlkOFMcNVY%2Byt1EoGGqULKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxe8OiuLO%2FRM3MMxNkq3ANREArNrI7Qd55n4SZlxkwpn87rNrdBAUKmzR7xh2jiqv5TjdSJAXSEEavpHUk3gwriVfXFpqVxmp9Qv2B4ItGR2Ohksf%2B6ie6NFHElvFVK9e6Y87o70U7stbAhU01TN5egZlkw567lgSEWraihuKR%2FITPzQEvn90ItI5ZT%2FKWIC3512lAWheilk%2FJ4cJ%2BI339iPq6Bigs7dozFPvWCfvgBopvIVoZRr32J2Xu%2FqVa42C0%2FeAmCtQvMkfEL3E5Rda2E%2FbGwUtP1mofznw7plp%2FIOLwX6uV3q1ZLxNYcQbgQSh6S%2FXgPMdGHgplVCyo2iu765LHhj0nl9OPCkDBUgr%2FOOJTIspSvBTFL6jARea%2BcqkQxzbOU%2FhbWdjI87%2FRivBekG4%2Fo%2FUyVmCtF6CyuIZODl3uX2XrObTEfySIq2GX8Z8AMSVEKcKg5T3hQWz3LHAg9Gxrce7i9f4NDRSTGF58SjJHkzMb1axZi6AODNLzm6ZAWwWtmrbZrETEnh%2FucC%2FNN0dTUr7jQN3stuIiRT4T0rCoi7OhYAm6aFSL8aSW6Dxsfh8tLC8yANBbHLPHpN06%2FTvfWa07lxCmPaQd7NrHVgjmSrpFZy5POVENq05EVaNJqfQFJmDtg3TYEZTDS%2FdLJBjqkAeuk4uwz%2FtbZSVaM8N8eT4kxW3KPnh3gmeR9eB9wnx3iC6qWusaRwH790FlAf8UvSweiw80IuEmE4%2F14mLjEnOESYH%2FXiWQ689IJDNxP%2F%2B27y00rbekHLe3GXXox8yZFxN1jg%2BP%2BpbRoSZOXkvJt6U8h%2F8qjJnu0djFbEofd4Nm8oTLx2bY72gMeSP%2FHgjPnpzQ76tVtu%2Bu8Pt4662AExmhHvirg&X-Amz-Signature=cbc513ee564908f13820c4a7c90225b9150648bac23f82653d641a50423f2c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

