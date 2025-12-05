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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q3RUJWK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FMvbGgIaKk2B7e6RHJcdBsd0ltKZ0tjP1YYAWmqqsBwIhAJaGSsFUU0MS35g%2BDolxrSrd%2FBqf3gIEKfCnPMs7qMsoKv8DCFUQABoMNjM3NDIzMTgzODA1IgyXr0G5JPh4mp%2FZ4IAq3ANlVUrs98TeUdQ0QddGx7H4F4lE6sAlDtyRWnKBq0XH%2BWn9r3ZLYyAhGH%2FX%2FGqUlytfGuCSu96Trj89mIskxeQZaT0i58lLR3I60zfFdkpzYW%2FB8ZAKI7GYruIrMc%2B3UotLsIdpgjBnt4mBUgjeWiGD7R9vSNq%2B8Vy5NRBDUDZgsorjHnJTKUZQKMuijMU%2FEPN%2F2ab9%2BzDler5BqjaYBLHcJNX8Uhfl7g3COhwit1Brtkiet20nu0zfa5FmqugcrTf749w%2FkQe9ecEJNx175%2FpoFTznUsBY2eUHOj3mui1IWHY9B6cka56GT%2B%2FCzfzMbxkRdU3g4WcfIVVwJgQ3uunRE1A%2B5%2BkoIV2wUont9hAnkExJLZYiv1QfLmp9QRi4KEbia%2F6H3RnQB6K7n29TILsCjPVVBq0GwvCwlWIW21kjzcq7%2FLBJys9%2F%2FyLA3HtYJ%2BP0kz4Bw9hx6GB9a%2Blgv9gBQw64TLN9mVm6VCHKoOsrgRnskUBrmNh3fXlm52nrWO8%2BPyklhRD8mp0qCV4eQG4N8ooep%2BkN1L5%2FBRJxE3PEmK64r1jHrVK%2FBrqnJOpo0hUZezlYkP1hBlCueHOMpwvWXVpmoQK5D3gssrMG1B6QarwL9zV7bI1KwDtBkDCzr8nJBjqkAX8QpBMJ1gKqyAowRMqwy%2Fi8q%2FmF%2BvgJaWo0MJ%2B96G68NygVhsxNUpLUy2rKhnMHCNoBlwn0nSvbI9IBgQNVQ8czpgICb6bOcVAKsyXedbk0waygi4tdAMv9TGD5ZfKHSKmkCz5cBvrQMELgVDyQGY82pMzyIqHEIxdHeuStv64%2BiItFFV95Yg0hPvtVyhGdoe9UiIrPnGCduStoc6wTo8Ogr%2Fb6&X-Amz-Signature=f1f962c9bdaa950939a769c5a7f79fdfed25c5a379654b08a3a1eff1ea08c1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

