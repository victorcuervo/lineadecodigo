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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UG4MXOQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgOb%2BuAkDgtWFr%2FbudHTIrGkTubUz%2FzHPlpR%2F%2B%2BVnS1AIhAK4mZOkrSS1AFpXL5pAMtj4JupOUB%2Ffs%2BD7DMtax6jC1KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FgdCjoqIg9K4A014q3AMgCdx272DY6PK1AgkoLdr38n7BdzDDeZ07ozoYi%2FpHMwXCwJHfz0AuTzNcNuLnw8HoPuNgpTZ9SOl2wuz7PI0nCtbjSNq4FP0vLUaBRSSObdN3ghRbm%2BaWWHsb%2BRZDq3FV7o7Y6e0%2FFhvZ3bKwx4SfBy84IoEJpIbxTTmPg2jGdvEdkxnpWUR6r6u3%2F%2FDUxe5Bl6Dx7vbaYYaiQO8jD6u9iG5my1GPJvdiIw1SRUyJCvKY8SoGvIsZXQagG1%2BLsvcgHxpkUWjcJw2tNm5rvKtNu2HTltzIMM3lYhD%2Bu1H1Xlx9K30xHdbB2ofwuei0azZAOW6BnFQPwmH2zDW2s5DY%2B%2B6BnRhUbR0FMXBBlN8OP6VduQ1ZvhCJWquXsmD7u2Y0YdF0lBuYZFKQcr5laQcRG2mOyPEpwEkdPODi%2FIv70BE2E1Nc%2BtdjB4lz3GM70b40NLjEYA%2FVl1fSV%2FhSm734i02wbx3Fl0cuM2dRIcjjE1A9fjNeFEAZS3dLwWTkpqYurPoxzWp1K5pGRYERuevps3u9A8iBvgfwaIpaTG5zNh5fr1RImVUJy2Ri9MiVvD5AjgrINkpQJonx8iTi6hJG3VqYd8%2Ff6L4gycFfgth8TkOt5jwpGqPZY%2FtBxjCk3NzJBjqkAfX7HfEPOE5r0IIa2TnHadqd23hymiXc8AbVfKyLPuUvACMmHASBO9m5A8WNlKnvm1IZeqfTnn%2F3%2FvbZHPH6%2FgPCNhNg%2BNm7WUmQyPCnfZQ6j%2Fiz1R%2B7voTExBFNl9st2p11shHe54eEoHhO2jHb5x3gl4hPTdF11nJdvlQdcsJcdjAN79WrL4r1CYQ%2BzEdnStdOEdEUgcgoHIE%2FLCg9fCvQF9LU&X-Amz-Signature=8d7a95e4115b87f5c7ea234ad5a86068d4e6f93e84e89da5fae921b3e7b1ce6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

