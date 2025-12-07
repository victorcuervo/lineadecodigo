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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLHRSBCF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrYABNzR7FuoBBZT7ayNMhi%2FDJhzJQGAKn50O5t1zQZAiEA5Z2qIO%2FgkdnXFb%2FUVWQQx%2FY52XgNlMCjIZ7hZMd9fvMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBY3zB4GbLj2Rhe9lCrcA9RUx%2FJ%2F%2B4zOK0IVrJFR5oQX2EuEXGhv55z%2FochyfOqvdNgKlQb%2BN3CH%2Biw%2BUlTDCZuo2JhOQazkCrdUrYppdpbTU7JM%2BcQjuK1yO0UrjGANFDker0UH0skU5%2FTL0QHCmR%2FhsMogjKSDQpIpKweaNzeEZWDDL4ltMhPcbo7%2BgTI9UjxIUrJrj%2FCRjO3VgTrSCjFczU%2F9UymqgMmwusKoHqRqs%2BoH3M0QLY9QbOOzd7Jb8iw2zWWG%2Bkyqc945sEM9soTAwixWkqoBljZX2Gl2LLe5s8JEtm7%2FQ1YF%2B80FBFENRdGb1%2Fkqr1PZzHMiwtMPNtacHFcNTaSTukUKyBW4v6F6YmoMITdvFiNZwpx04Ok4JCS6cyCv9jqCqX8zZz0kUJULDvIQE%2Fqe3P30YHikJrJvDERHkORodFVN1Rnpsc7Fyk08ndhrq0hVPG4SllPbzywlff6SJ9d5zWoKe6px4hM4gBEpfZfFWpaLKFJJZ8aHaWNCAXny19OtCZch5SyjZ8pk%2B%2Fl7xSs1Jm82X34R602saUfZerAoSxDWPzveKQRYY8L%2BmwA16jKEj%2BLUsl1oz5d9CzZNhoz%2FZtSMlMwsMPK5WEmauJMPPnlXEhQD7exqiOBy2I4e%2FtZfkw%2FlMPP90skGOqUBslO1Ga6FtFrdsM6dmsJAmtf8uJV%2BW4UEawbk%2F06lQD3MQLEcLgAAZSNqAz%2BWJgseHgV8ZN7%2Fka3cRkBozPJQVZozLtF6BNcR5B7VpGXYWxKkDojs8AvL53Z9P02iJLTBGpQDeqE1WFrArA1iHtHDlNg9AaqgBJo646pgFJ47h%2FsXwQMiN%2FVeQFcmvlKiWWeTci0V%2BpnWJR%2FByKCDLVoFmwwPiYON&X-Amz-Signature=293caa348c362a52405c228b530ec3c98f046ca680cff42864c7cb8c0c6b5307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

