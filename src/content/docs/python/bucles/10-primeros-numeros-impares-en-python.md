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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UFDVYWL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVdxh%2FQ%2FJcsv53Jnqjwn7GQTkFsqldUHAYELkhDPWcVAiEA1Lhu88fmF8zMZlduuo2CNVYXmpKM41LaLVERE8MR38sqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJaJDZCzGXme84LyyrcA9QBTvjIZ0J65IJ4H1NvpYpFfpedLjehm%2FEDR5qSFNn%2F%2Bv8EKHPjaZ1RbrQNt3p7RXpvFz%2Fjhi7vG9eDWZ3cJ11sxqMpVJwi8oj%2F3UTjXHLU8PgDoBx7yXFNbcBXzxRVwLpLaLGb%2FZAdeR2YTxja2sPWNLbvSq2ShZSUWUdkGx6zYRsDqvgLSiDoR4wY3UGxe6%2F99DAl51M8jo7JSdgnsBJVJKluYBP4IqVMu8bL1qn1dFemBcD5zmMmUtnL6zhUSTXNtw9Yx3QmBxOmwWWfaH5lstQBDiW5CBypiDen8JqQ7W6BW6vVXb2G7EYJOT4tkgVk7t%2FCGJke6Vv7OSGwBCBKpm2WCNnum6NHRJ56LC%2Bb43nm5qEPL0AWuuJy0VtR0GgvgXkLiGq4jr3RKgQzCSAeXBiDTVbPjtIU66903JBFCNglNABMK5vme1cu%2BkVOXttRzzSK0L9z9V3e6%2Be8M2e%2Bx400N1dJB89xJMMhyIpGn9EJtqie67IICDXjDwFHNjNtPEyjfi0NVr%2FN7oes3O%2FobHivZx12fuyBz%2BXtEEmQtpN9Q6w%2BfPoMVFcQ8jxLg37ovsm95CVgmzCv%2Bx7qH%2BwzKMGfVtYiFbEWUQmdW22tYHmfH0kk4T8otqOaMLb90skGOqUBfH%2FFRplsWd86jc1YP%2BBB31%2FmxCrTKy%2FZS%2Br%2BugW3jd20PdXtm1AXm%2BbAxO58QFVrIBRJ07G33vrE%2B9WWLlZGl6YC36YLC1yzUxnj%2F1GgIELZ%2FKKCNV%2F81hEOWk4D7aZIZ%2FM7verLa5lIT4ORujb32eq68%2FNo%2FWZ2Ggoqf2b%2FZWgbxOXfGKwDxGbOUxnkfaIdF0vy2Sj3Ur%2BWY%2Fbv8Qu5x4HRJf9u&X-Amz-Signature=ef9700886113d7fc0b0bcfd92ecf3bb191295c8451ffb73180f0721951cea016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

