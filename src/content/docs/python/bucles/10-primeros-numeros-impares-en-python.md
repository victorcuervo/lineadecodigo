---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3LSNIH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDmT48JTx86rEa0JtCfIWBzJPxH6I8IWBmXL4Eq7MyTOQIhAPMji7CUk29svK03TqcjuTDzplTS2JaLW3LbRY0XRBLGKv8DCD0QABoMNjM3NDIzMTgzODA1IgzeQp6RS9uLDgaIMf4q3AOt%2FuGP7oKeCZp1QoLjiGJKGIVDNUXLuWwEE4Hwv9kmK970bZ1DUc3Qx5r75aD%2B9uYOX7GuFiPome6IbO94NE1NDVqJ022UUq6aq6dDzW%2FmZgcdQ3WBxpz5YzjaGeMBTeFTv%2Fbs5h%2FNrmg4fOAb2hWiKie7JtcbLhzleWunVINfrPiMOl76LDsdbwm291HrROO012jNFMOSPQpKHr1%2BWiIgLe0T%2BMfXv1xgW6yLf%2BUf8KOPVV%2FGH40YGZGq7pIWTiMpYLKyqp07nAM0Lb%2BxAfLiuHZsBY%2FY59zzeiMhPIJw%2FuD8B%2B9zzJQ3PnKEPBCrS4dMyQzTcrKc%2FRkEio3fEqVAmHLffTiX3SDXTWQ7AeJhqQDoSuAWfFkEg%2B1DNsuSOfJSLLgplwyRJArpgQxlYl8DotPuWhq2bl0RT9kPpFx3ijj3OBHA5ohaYn72mha9KJ2%2BR6ylhrSBAojHvPRTxDqLmVqeZbRfpC9DRXqIVThlDjlfDw7d2gvX7ySOtd0bEDE1BfBD78BgrGpA7nquc6UqIjcG%2FBqyjCnJ8mFFiH0NrhhG51FE%2FR%2FbT1iJ7TH6iRr3kiWM0ivVyWrguPrc0xTL0wK84Xf0omrj6DlPHfSw2Jeb2QNhrZ1EgaSR0jD6kMTJBjqkAfhQKOosWwfpsEaIrUUB00Jg9F5Oiz9TSQxBlYapabQQWs4%2FfYe5%2FS8xWRqcQIEr6VHlcRA%2FIf76GtUE27o1yLcGY9WzNKOuqxGZisvcwpzdNrbjH7N07MR7EE%2FubgWPJp64nt%2Bjrh9C0HEypHxnucnKDu29VLrr%2Fx2fDvVqurAIuDnAxPIlWqYxx2zKcjwbcmyRfOJLPrlCDy%2BTG%2FUIvAWnhRiQ&X-Amz-Signature=17c5889b253746877e2e62152d0e31497c6df2b808936edb625a6b79ae036e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

