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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJ2JBBU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4TXYPgkG5IKl0QPAvGYgokCmkmwo5WjsR5BkXfKdnBwIgV02YnBBX2Z5%2F%2FYgVAU5WUG3eRP5Vz%2F9AuCF4fCAS%2BYsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDD%2FVJf9NPW%2FGlRH5JCrcA9eKnqyqqyTAxk7EHOkSPPNk1nqlUTGd7bczIDN9vA%2BQ2zbOUdsdXsMGRxdhXQNsyxv8qcEod3pwwxErabJ%2FBvQcv9F3S3ragNWv92lqeFIzGdvzhfDWgkl%2FANt741yVKItDhAa6eNohcaStOLqIeZsFO0AtC5BqwggG5xJDokxx2eHHH8vBlKqOwGEw2mS4sVGfvgtSta1O0E9VZnn0inRcf91R7KCD5nIj2qxcchPZzHhH1Z5ye0%2Fc1bGTchmckwXNNP%2F6dWJCvM1ysqOkCw7258ooehu97odc%2B%2BTQZjHPjvDfyGM1SQpinKRG3ZwVPR0OFk3noalI8Ry2rj2%2FVNymhY0jGhvxy7oLNBHzFWCihrwFIRJJ%2BSRb9OL7AUvAm2dDHzTqEjcweEiHbWGQTrYlBzGR1dN%2FQYSM2nfxUFGMD0wnWO7RgLnfgRP2h81EBSvJMsHg5kl456M9qMjsjSA2gWwukd9Ikh02%2FOgXiBkMNCo59OUQAQhvPzDUgAfA6FOmxPAyeVSDvhnkKCOa3sfawa%2Ff2icl3ETTrsTYnoqXYC41ireS6gfoKfipu4RYn0VGKj%2BtNTUobdzkBKIMoxqgrGv%2BpEddYx5iC2QEVGkAcISB10NE0DQ90fjFMOndzskGOqUBmMlAHkYLkV8oqMNGiSsupXdJHp0rLBvD15q1xwwDyypTMlOypk6cWlg34H1bEaaMl%2FUpg%2Bn662fRuJ1lXwRHRGo2F9akkhte4AN%2FXpLekZMeEChTGg4y1VcYdUAXTGHTxyNQqulnlDl7k5uB8bnTLn0fAAnVB%2FHjuniZt3GJX2Ry%2BxsKFbTFB4HjiLnvkMZs%2F%2FU8CtFl8KdKnL9iYY69IIiWZN7z&X-Amz-Signature=95b012372c63c4a0b3b8a8e7d981cf0fd5f4821d58545ce3fdc54a8b256f7c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

