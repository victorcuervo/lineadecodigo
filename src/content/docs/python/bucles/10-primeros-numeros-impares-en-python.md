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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQ3MXFA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoIlJjTsfOoXw0NffqCpzowXBLuchK5eQZ5otTanNeFAIhAMvPkwZg9W697bPx2b2xzHv5pjDv71%2FkK%2B8n4k2X0Qw8KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ1XKZ%2BkW1S%2Fc6m8Iq3ANSLMnlz5GsVC38awPR5qjm2uUtv8Thi7DcSyTWnZBY0UhHS2m05H2%2FUevKLBMlzOtmoCRp1nQ7gKP6vMbAZ%2FobcLBfjxncDgyVZ%2F5hQvJD7BlOYmDXyQGPmE5ZlNtSxF5%2B7g5%2FnJzwN26i%2FNhjyh9%2F%2FOr0MlWfS9cwbIRj5hEapk2wiOalwZVE4XfTCmUp0Ezk2%2FHF%2FuO%2BzADLo6PFQOlJMDK72598o2JFEKz7UFLooXQpOSW028Q2HC8dmeJ6s3bhY%2BEm93tD%2B7%2BvY8LhKiuipVn342B%2BrbNgy4iK%2F7ftrXk8Y9eqpQotz%2FPi3ifvXSXH95%2B5y059AZBwqfeIiwnaY6B99nJPaOo5HXXwVpI6ezVwniZAT7NltdGxs2nj7qtpazZFs3O3%2BalKaz%2BdiTbvbhXOBbqNf1%2BOLq%2FewIzSUkdvBC8MUixljlL3Rx7g5eUgTDY7I2427Cy9k5P0qU9sGiBQG9G48yt4qm4byHyaWyYaurz24NP5a90EFk%2FXzVP4V115kTOYULDz2iHapU54hy3wImcoP8o8gsWZtjcJ40XXH3mqkr6r3igTs94Vm7nui0Yb5F5IKn%2FKWPDk3FpeDRnUuX7cUuP9O2S9a2bCQ9KjQMlfXK%2Fm4Z%2BMCDCl3dzJBjqkAfwYl%2Ba8Y5%2Bpfsw8%2FrxeggOpbh%2Bd%2FL9%2Bz0irRPtDSlHDt26Sb42WX30ueXaHwfnP1KLwTyGDefgMhRheh57st2BsPAv9YarDV2oRGXnbVWPlziT%2BaQ%2BmNbkx1U3weCls7hC4ITYuBuLcdDq9YO4Q%2BhfEL1Kmzp5ZkPMZv6jjx4h6Y%2Bl%2F8NPh%2BI6UkxXzU5HPqe2VFgCApUQ2hW9MivQ6aV5tmitg&X-Amz-Signature=1863ea54a620f1750b76293217165c1cd5cf10085ac72b3d32ba0b8bb7562a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

