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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GE66EB5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8WlKhDqPaT7Usb3YZYSITj7swXpslgr4vEoVNU9%2FYaAiBMm5ndv06UliSl7f86MTyjfOCFNU2BAMuXU%2FmX76y8liqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcTROIAiq5678%2FKk5KtwDc4CHOwUpWuTdRbEyCH5u5HPHr33uXZ%2FlJx80DccNHhVbtqVzz1cZxTNxsfbYcHiS4VbPXnsRzAcdLUp731UTx9yyjoQi7se7PkXyx6Tx2TZGZoz01%2FRAFu8zYcmku%2Fhp5K1JinhaZ4OUU2Oo7Fqef6zO2RI78iUeH4I%2BPs%2F%2BbqHbrnGgH6qUyXgTrVb7W0YJhA3%2FPqXFgMcqWKhHOq19B5%2B%2Fh9BDbFUvwCmfG033ledGi87isneBvSwkO%2BXozmUz45mVkPkhJmIkE2ajYE5hOy4NZ8ozKgk%2FCKRPaHQNTtrSeC4o2vX6%2FCAoGwJcBf%2FRqJhBA98cWZ9Tk8yMJbceuPURJaiTAr9nIVU4%2BcG1bPYZ0Ppgj%2BJWf3P4UgGuSVi%2Btbro2u6cfxhv3Wj63gQpcCxJqxf7WpAg2m7RMJ7C%2ByzWlib%2FOAng6uO1MKM7spjI5rZdzaDVAKjBM2XAVlFCXmehx9ZpLo4OIGtMz8QiP6C53RSMPmjYe4MY1w6o3sWtCwUP7Q6x26lhsVhC%2FQQldcvfe0%2FpE9PPhpK6%2FVU6L%2FxDoa7jU%2Br4vILBkk5mv3GXcCI9PiUXiuwYh%2F%2Bctlutqbp%2BREJAow48l3YdiQA%2FcUtLizh%2FR2r6Ujj1syYww%2F3SyQY6pgHLh5yNvRhGZCfAdRAu8UJIgwXStTtgw482p0YU4qDluQ7eVaC3Mnv8LVTm2Jhs%2F8cGUuyU%2FH%2FBLVsJwhlTNmWvQX7Djvtv%2BFAUTjiz9JEkiGerEuk073MEOsaxk9SFPE1K6jv55nVbsQn3JxLA44kNF6KhHpY9y0nEaP8OAhCpGJQBKWGKvyNms3MapWCe3bTRT6QIqHZzGv5QOdtqKArPIrtLbr4w&X-Amz-Signature=083c4f6ee8714c8bd97bb2945be6ad57a04e68903884e49aa3784a97a15522ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

