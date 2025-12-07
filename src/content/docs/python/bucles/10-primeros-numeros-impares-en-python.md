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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJFZBTQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLNo44H42EUULx%2BVygrgoSzSSyuvH2hk8RbElMnM%2F3EAiEAmOavkgdLBDVYM3dhixG1AbQmUWalR%2FmWP%2FD%2FOyn%2FY4UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKgPy0zX4dtQR8BkSrcA650GzE4vQIFM3LGo6QoDy6gF1KHCLLw8xiOi4xZVbgnp5ku332QG5VM%2B4AlVuJMqqaSUnJa3UitM5FP7obvUMYhsCLfTcpg0aN0cwwunVoOu19hj6wg9zHxOVNzC%2FjlV0EMopcmrQzMebNMOaIB48jC10kI3MAIkw8%2FuiK1%2FriDVhNH7J1FpBklICvljuTY76vc1k8bsT5I%2FB5YNYucy1Kx83eS2LC83AAgwHtNCuE4inhRO1%2B4qWfkLQCsiUiQBR7OC8KbuALQzLo2xtQpSuFCae2Ziq2bw6MM3OfzsY2AFS770rEIkWwX5v8%2FewXhFV1oLwrGMUS5Zo7fHkSplfW6lOVMInpUcU6FT5DX8DiGToCi6D4w7eM%2B52lfp4Mycw6xWZQePqtRD1W6epm7c%2FXWPrgKcYRQMRnG8liC2w3n3McQw62%2FCUqTtmBJDNUrsLIfm9MYaPANdrMj96w37G5u1Jq9cmiNta6xJPT71EW59a7xP5Gig%2FyaHV1%2FsBVbtxdx%2FJPbu7y%2BPK4G6FlYG8ywCpg4ksadFbBUhjK5RysJFHA4kEghbzO0u%2BibU%2BUuISb%2FzJ%2BNfFlUHwHAzPCmRt4hM7YdWiPK7vpe3NYCnwDejwHQzGer7xXFfdbHML6a1ckGOqUBkO63S2cHp%2BvQH6MypQP%2B%2BWIeEjm02jVootqvQcKw3y8OpieCG33GK9hRNShgRe%2Bo5OLgOTdxSm6L7dPzWC8MvVZ8F%2FvnwxvpL4W8LMH%2F4Sx%2F2RATC1Wqwg0ObbXdTFrXSzNGVuTURfZDpwkL6RSgysD8O32xy7oEqQFf9j1iYZpO3A%2BJEI3BXBConynfBjB3jxuCZIMqUD3HC%2F%2FRnskH31pHbKa6&X-Amz-Signature=22f7c64bb592eb4a95e759e7acbc948c5cb365e91def4c85d3cd39bdcf2a465f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

