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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN2X3IL5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqb0eg44MmFZLnJ1yDzF0A8DUHd7E%2BFGPqFgecrDxYjAiAHDGTRaEKkPRo%2FOeCp%2BnhmoM6x3S2X2VfE%2FQUymqPKBCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMif9g%2FZRXyogFc0%2BwKtwDmZhwPoBfpIyYtz5p17lMpTBcr%2BG1royEZX%2FIy585mHWArvUNA9TGySks5hRFbriECLCFgdw7%2BGwX%2BJ4yH077%2BRU1svAFnt8LETDjO9GgTnbkr5hW3D0CX1X%2FzL%2BjV3dGe8aMfij5by0xONPHEcY6Se4ulwAtM8Q0AnOnW325hRGbU5dgK%2Fr4vGCkESYyrz%2FGZbqevEpXNvIq6CfSID5BsjCf3VDfqG%2BAfa7ZRt9nmvYtnGRqP7IMm25oq7ZnlJhnM5ufYVXbGo6MDhfC6%2FKlZI%2BqPQhVgPBK067%2BxOzrxvPyXVEWFXb58rOW4BaEnF4jqtMV814%2B3WekfnMXV3S4dX1xD1YA1o37NGhilopdtO6eR9SlDjOLIZQ%2FJRW0TqrwOTx8wz8bZOP1AW5rdIfXvo4UghfKiFKZ4p7jA6MrirV9rPWz342xMPllw%2FmVzFqDPSDdpb6519s%2BmVl5xoh%2BCfnd0xvgHMlp2C7H5vNIM%2B5eh%2FRJEAFeA3U2Yc1vBf5TrObb8zIr9u2cA14bCSvE0ofJ0boIvVa7FmP6WLxDvx7AwvwdrXrJ5LkewlV3I1URKu5OUMG48z8aVd2Dpc4o35%2B5VQdDrslWNE99VCCcoOyc3dqwvZPVJzNiP%2B0w74vIyQY6pgFRloQUM4D%2F5Xx%2FGC7Fg04rJdp6eNepsHFvYLiG73dTqSpaltdtu4bBk1%2Bh%2BVaS%2BKSnRqJO2e5is6C%2FIvE%2BnyJt5K9tFgiEdOHyj8hbk4GZsm%2BuT50tFcAJMsz7Sbh0iYt8XAT5mpUgn8v7R9o6QNXbs3rTZcLMOAP%2FgCNNN5sWXfWL00wyxP8THkHs5ndsX9ObZVc7xHmyjEz93BPNquST98gl1jRE&X-Amz-Signature=ab82928712601445e062bc0f7d4d40bfb865ac6c489088613dda157ff2e4d2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

