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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6QJXCN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9s1LXCDbnvtH2x81TiZwXqEsZBEHiVvoeVDZSQwvzSAiEA4fL9VM2nOS3TAKiFqW%2F%2BLJdKC5q3bN1x5%2FqrPWOYBqcq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJtrK0GDxK520dFnoyrcAwdcvBPATvoBXxjYAzu7BsCiXPPIUvWwsbevXMVoeNj21tgXcJrZc%2FGGHre51CtQfLl51Mec2izz%2B0oaxaTQZR%2F9SttdTSq%2F2T4veIboACFKIGRLjyst%2BzfXSdABlVObWojM%2F%2Fr6wLh0bApWrRgsgKzQ6LYBZys2ePBWVOLlt2EBsmSSnA6ofezyyK1qp8pO5ThT3Zz90Kt95xVRR%2FPUrse8IYHePkWvQiWlsWfxbxO3j4w%2B01pZmomHdy41TjPxQ2pyaxfp7s89w%2BrKJwYSt%2FFu7DKrVEkG5fKJPwakqzQAnGdWtMb9Xe9I1LM%2FNGz4yJV3JUrZBSbHhcl75m5e%2Bt35R0D9jz%2F%2B8iZgtca4eI7J3lMAjQbHN5R9KgPXvGdhmk1rmmyZ2NfNv87Ts5Id%2F7U92Vn6vcyhk0JQNWB%2Bi6cW92RUx3lzClnu%2FduCb%2FlFcGix0brRjZv%2BMT0rJIcbmXLpiBEORVUydKNqU8V2uV6rLZ6uMh4tjFxM2849ZULz6F8th2N3i90AhXrk7mZze%2BpXgWG32RxenHCq0Rg9004YOzEV7RY%2F%2FGQAxxpb5Wy4EUON3gteyR6t7aGTr7xrdqBW86Ru6Th8ROFznsjc6Ip6GJwe3pisCWvL5T%2F1MOKmyckGOqUBlPNl%2BjoUBPk00IygegtNBVrGJdD17ToozUPGjM3BQOOXDp9HKwAI8aF0TQVXgLbftQN3LE6LsrXLAF4tnwpz9rUxvKu9gyJNqGs%2F7ZUqvTJLhuHjy8UGlKi3PnGBEqBCKHobM4uublEiH1arsIxLVYjDev2xpavP%2FS47rV9q%2BJcKZcQxpiQBNXM6eK2oNmG5limhwA%2BciDk9RQIuWC1vLy4UoBl4&X-Amz-Signature=12b01cf00d6411a3920e99c598a3f66aa583f2727384e208c6c5b1580cd922dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

