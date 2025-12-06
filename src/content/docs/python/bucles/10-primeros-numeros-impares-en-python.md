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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GYRNH3E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGIPgpgSbCU8KbL5lRwiMoTl9WR3Ctr8bwzCQzvY4zoPAiBzaxemDe0Q%2FCIhbj7ynKjXLm7MaDL0WL4fCc0Pu%2FHiIyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMNTZAiOOU%2Bndl%2F0cGKtwDybNgZU8lUJiZTB8%2BJm3JIgQfg9XFnuMfO1iz3HCJAohY4nhydaEc61OYNgN3uJHtA%2B3UQXxIh2Jrvst3PtNEUvnY26YfUNj51bsrsQUGdgJizp2imNotLwWBMG2up0oEYLgcvd%2FGxflLu81NrttcYkW9W8jT68omk%2FEp17E1vUAHrJ7Z8F3fNANBQn%2BkzyHZ0pT%2FUQIu%2B97D%2Bmq5jxKWUb0ex8RJ1GXcMhmwqT%2BxAq4ExIYE6HTK1vkqF9Hl07TS6hrwBYNlzgFT1hOqrJ3WF6EMbPJBOoJ5ktalLmwVUV%2FVNBJlR7jsR9AHvIADTT3df7vIGBmCl%2Fa5tmO%2BT7CkbORWATFaApHJUhl3hiR%2Bviykpz1TA92moxsL52nMcoCL2ZbFjc35O06yJL%2F85173c5fS7V4iDK0dXSfajZVtpfaZhCEsuhm9806wlwNeH5B4%2FPQHp5qe7AO7PM6q%2BDiE2hFb8VnlA2kuBHCv2wpyrN7djGeSZdPDNemUJkB%2F3YZtQjMz1%2BJXzPNaa123F%2BHB%2FkhIU9BNydAfH8u133ANPYg1Qiv9F49xZ1jN3RmeyijP3Nn8UYUMW%2FjiNBmi7oFvtp4fF%2Br8%2FQPfmjQbjvm18v1%2BKj6AzGL%2BbRn8%2F3owlqfQyQY6pgHjukL9%2FnyjmNtKcxle17RcojJNK6MyB06VhckUAP91yZy67q2YZ6u4f5Yf8iGb8R82pzke6Ar7tKfYjgHTlWJNUhQs2bWXjmFtsqSYOALBnCrjCcAj8L3MjNhX9iUFtJ3mshSvjglUZgbBZtcbjqlj05PIOxXLLg0uOLh2jCrQIEzJOBqijKTqbaihqOtMHb%2B4iolLL4kmtE0nr7CWUl2Iz0P8BMrL&X-Amz-Signature=956864ebccbd626076977366fa0139bb4923749a4528c09774c8f59bb62eccff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

