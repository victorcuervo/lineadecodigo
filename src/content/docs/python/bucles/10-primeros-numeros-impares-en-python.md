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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM5D2DSJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC77eaVP50MxEYGEM%2BQwIbvyrdIVu3E%2FbXii6idoWPcbwIgJvaJbR2xT1Co0W2pYSz%2BUf2crVEpS3uCOg8e25MK974q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDehmNmHHyuS%2B0lg8ircA1CK%2F1jgg97%2Bk2BtiYFJgSTfYrl5fAzsotYZxuV390YNdCo4yuvGET1LtNl%2BF66NoTNDwVPHxvo2xkgKbfjNnRuEPHzVVdg%2BEsq0U0dOuG8ayIVWdx0Edc0sGJ6i3tHaqiN1CM6Hqq100JaMtJZMGW528C8GVkoanDmT%2FdCpAGecqR0IFwju7oCezfIfQlWE3pftb2gwPes9Ko1AxVzV1m%2FHlHf%2B%2F5nmlUbaX%2FcPzhqTfdtGFewbxrG0Qxc%2FllGqO233PeF38CR5NM33O7QDA7odc4UNK53bnxCLDr3TFuWd9BIV6JzPxE%2F%2FAxN3YrYBKI5NNh3PZAwiR%2BPZ%2BAckGmZ8ukLwnYW7GG%2BMLVsEeXyoFB4Z%2FV9m9AjH3P4%2B6QkttH26dq72Nuc9h4ExqspWKGfGMxu0mXXcHOy3D3E%2B0%2FqQehLeNZVJH2Ho4pHcDT47HIEMWQP8dGCwm%2B5miP%2BrwEbqnQbo5yqLvvTudLFU%2BIOvvL25E19YiNYoRsvcGo8oCk2ZS9fcsN%2BzYLpe%2Fj0Hu%2BEm1TRyO1crIlDhp%2BB2t4S%2BdybE0r%2BUjh7Nqtvd0zvaHffl74rEPN5CqGto9r1zmDSJjtT7%2F0bunMMeVolmyjbSs6s32PT8Aq1fUHhXMJDty8kGOqUBO3RHvnnoVRB7PDTlbuffsYiaG3HXrOclBBPGgTCke0ia6rF%2FALYJWqntV6r6x91VGzNrVXroTX3zEOkKXtQGNNDejXWjKNDOj%2BENeAYeGUleIiLjocLSfTZD5ju6B3LgK1X3IS8mei04KEH8shr9KCxRlYqQiNLbRDsWSAEtLQihPOn00SQKRd8%2BD%2BztJKE0EQr50mOXb7YtnZzfxd2vfbsvLbM1&X-Amz-Signature=4065e0bfe464339fc7f47e51932b0ccc53ce297da6899c60991a57dc682e25dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

