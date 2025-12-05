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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CWHRZXW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFasC%2FHqBNC2Oyyi%2BdAJyly21Q%2F7dUAEgnBTWCjXBgGXAiBUG1BsvckV%2B6StVD3IBKqHJrh4Ud%2FRLHByjL%2F1RViBZir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMRLVpmg7aPlI4JJOOKtwDya1CADgpSc16sje5KLhVg%2BKZfecU1cXEQmcjh3EXcdKRMOZOwE%2FQYasBO%2FmA2LbvpEJQi6A36tNanOPniHh8jhIltV2NX6dI3b3Kdz8bS%2FUsYVdxib2N5XFMDf%2FvlUOdx6jF4rmtzlEQmRGzk0Pm9cyamho8%2FRzw0l3YBWeapMlfWGgjK5XPSFZpVJmstUA7VyoZ2aqOZiKaBkofZW6I1kbQOOLhc199J1d2n9RiUqRWYRyk%2Fj9sFFip8mg5lfMdxbaNOKB7jzfxS2kuHE4hcNXguPLJs%2BL3JqSyED%2FeF3SjhUEHtSLc3RTmoBhBoqwEXh3QYyL4Nup5WB1dY88Vyfakhv4NpBBCLxtQmNBoM6J162WWuF0aQT8XD%2FcA%2BKHmcSeb%2FWu%2FzXuqSncmM785cmzFpe%2F1o1LZU1nskH532WSAwpTuRScTv2ai7kAhSK1nKYMmQvdGFOjICwPppuC90XdBSY%2F3IHCYaoLPz714fVj7AMu7%2F6TBNcmf7hrekT11FL9MTXblwgsd4SQo%2B03081hoRgl%2B4ZMBjIRPJqLt21OAc8A06qEcCRM4HGS25DxaGdIg2QWgr%2BawW0M1PWQ9qnaRHp5bXKr98vDGMlz2DUe9975X8cLOzCu0gEcwtbDJyQY6pgGwIwngxpkBKQFlZfWDZhlw1QUnVdSXV0yvaJswlWutEvhUBbE2X%2Fg9dF%2FSAZaa9qrg0fsW6gDxr2OIK7nyxxPQAopBYdct4zKwaqVbyJXGRmNYLBkMQPsQMUs4sE0QEIyxKv6oaJY6bViD6qnCaPkScUIVf8nvx6eeYjHPfKRgV3RYVN%2BAFUkOjnkkejJo1BUICuTHmDlGWwJCarFtYbI9IH4BWJAq&X-Amz-Signature=e8e23cbe80e28f815cee4b2a8dba8ca63116f59dc73c34037e9eba2c960c5cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

