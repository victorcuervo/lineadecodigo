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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXOWGIE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj1p7C3pFaEUIY%2B34E1IKn%2Fl7UxEkyYtz1ZiGdeSS8FgIhAIBxkNGh5ppMOHW%2BT3x2lVxSniHmO2fOcKb692MtMwr4Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyztoxYpgB1cpytbHYq3AMM9HMl1WUvH29suPzWjyFnQEqg2bX5tauDKTNmbAgILT3UYFIFr1nWeu6mEAssj%2B1NF72GLFgOzCmarpWfOT%2FOhoVlGrDIaiL%2BZCXkHcSQgJeF1FYnN3Y149ZJExwARifB9WYx9mxNt2O4%2FWVckxaQV53aOMxZQxL3pEJwFlWKtMW0xM4QUMPhFqhYvTeN7Ao39QgNMwLIoJ0Rob9KEYAWegndDMirG6yQ0gmpAcSSDnjSXDzqzM4bLJyJGrjyQG3boCs5W8SNJPbq32le8dzP9sJtwFXtMxsteISn4GtHZpcRi5BL57n4YTe2L129%2FV9v3TibmDAFxR23lK5J2RQg67rDJR1qmxiXFOIgfQfM39zl1P4Pn968ZoMGaE%2BrYVTEhm5S0fbZ7V0V9bLobYsP6MaW7AbfC5b5ApaJjItxozQRsKAt8ucgj9vVrK5mFVbe1O4EazA9vdXNjgvc2txhTqn98TJSlE8TFw2%2FfYnrg0ibAT9TuqeuT7M1Ft%2BC3Lbk6lc9kcKEdIzgCcl4WbTd1h7S2cy8FIyKSPu25A3yy0dI6mrYHbDqCFND%2Fi1oBsHnKGZG0VUS%2FEFnxycSYvkIW6LN78L9J1q%2BxNtYApsAq49Do7b3G6BoUZc7ajCS8czJBjqkAbI9lmYTalDZST0AHeX3AHQVrH1rhs2Eh0G7yO3%2B%2BQuWsCb5C46BppgYHIfQ4lP0dNzfKlntwKhEJ3VXGb78z0qEM1dOx%2BjuOLiID9z22qgKI%2BR%2FXrCCbPdcGciU%2Fb8Hdz6nIZvhtga6lZsEqwuxnu44xa0fZxTTfvRLZVHSbdJwX0Kaq7RPpiJ1oeAQmtu3CXhZTBpPHiuM9bX9IKNK%2BHzrNzBL&X-Amz-Signature=9dbf82a51dbf7642d9013a2fcfc9cf860f7d741f7d62a2c9ee7e37296dc7dedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

