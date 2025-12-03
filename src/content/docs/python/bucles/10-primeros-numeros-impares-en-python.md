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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKZWXNZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQD023S317EwX5ek7%2BdvRX1pAkmxFIHiSDpqEi24Yk9sbwIhAN2ZF6eWtF56e1QcVUelTLFmRTD6qIcJ%2B8fS6Rn6e8ugKv8DCDkQABoMNjM3NDIzMTgzODA1IgzHsTgkPJcOBUoc%2FC8q3AMq63bvNquUtqe9Bbc7vSAknFENT0wtXN7M%2BsnWV41yM8JzD4LYRA%2BxCS3q4Q0xXXqyN0428pMWQYC6y0D2pS0P03AZYgwfevoGxCd8hXRjOSUFIuzhpqB%2BE7Rbj3uz5QKdE7dIM14OiWFcnCMwE9tpXQtCojKD4zqyF%2BrVMfL9v9Jp%2F836W1qgjZgvD1tLX6Svjxno31OQFT0HdCL1Ik0iZxrjY0rXxK6cHxSS3unRNFqNu66JEQvnRQd90qIHk0ykRr5jZIo1RBgZjGs7iZfpzF%2BlDEfic%2BWKpRMmZ7KMWGeTwm%2BIafSadx917AoTfAMGKvnIokDeKezZAkH1WomjTX2AP6lXEmkTYJrmDRX%2FSOa4NI29y5BJNmonlfbA2TofcgOb0Ehm9ih6QOAZsXRZo78n6rOWBJqnaQlBHODLAk8jrydCXT8s9vDpFMi6O%2BuRm%2FSjvPaQhWI2sIfh4TIo4SF%2FjY5Y5GKMYuymy%2Bt3MBkTqc%2F4MX7UC0E3VrCy%2F85JQqy6V1mkip2Z%2BH%2BVFuU1ytq7aK%2FW%2F1XS3V1%2Bm38vDzlazW%2B0an1rfJHi4s0LfO84hiuWA2kiy%2BKWdL%2BufKKvZEsOt5NN0uSs1LkD%2FxkWh2iS5hlZIBky%2FjW0BzDDlcPJBjqkAQ8vzmbjx9AeuT2HjEMrTlyUto2HYQwn4M%2F%2FZ48v0XejesloBa0Lpkume6Me3n1OLJfITi2r2y4QQvMigyg1dnShM0KY5JDL48Jb5K93Q98zBaGl32A0z%2F4%2FhHZdO%2Bm0nqYqghdXlg0khvU12QfUB8kF54iSiAGWlIR0Hs55Sz%2BYtZne%2FcqDZC9dTsNgIGZ%2FST3aghAggaM0irORgchE03RIncmx&X-Amz-Signature=f8fb63dc84856577f9472d2129a3331f1c1a096d0c04b764abcaff8c9ea70ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

