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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WL7JDRG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT3qdBN2bJlfRnXrCNrW8aFBVPOZswMRh0d7xua%2FUR8AIgIdKslWb%2BeDkmnbBkfG6aCdHigyVoGi%2F47yzo%2FhpwA3Uq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDIJSHXsChiE8DOCgoircA4t1OmP8cjps2vMJVC53TU96RcqvU3g8VdU%2BEMzmL2S%2BQV9SZ9VUHpqRKspYSH3E%2F3kPgry5wh5%2FB8rN%2BH3pepAtrZkx%2BCXd5sQH%2B4YX%2BGScjFheY747uam2lXY8HqCZJ%2Fgpv9WaNtMtcgiiIIegNb24qo3f9Fug3dD5kNFuGle7HaB6zJQ5JH1xpm%2Bs%2FDjH7XaXB2ohjK98Jhwv6mSPbLkWk3Z6HmmJS24%2F3RLCxxG5aB%2F1VQmDeg2kgS9UhHhak2HkV2tJ0gNp5UH%2BygvzN297mlkjt0gE7hJaoaHyvmGCjThPfLRJ7hANPrhlQv24oy%2FQ98hZZ193M2UWpwxdJcJzAu%2F0UDsUTDnTBxdo9pinU6J4H%2B3pH5lSbCZrxuVyqJ5D0xph3g6EADEW9xLdY2ocaE%2FNMZL6REXyAOjadU9J%2FebAhQS9qcdGQ7FGdQa6WGAa7saEDLLmkl54kjhh65WMyQoWd6IYl6884iAnDnK%2BWXiLnGj4WUwkLKNXgbErxzqGruUbh0fOqmX8g%2BDNFcIRjw0Xleu8gdJcbZ%2FA7QYGxl8%2BvfD%2F8rDO0eOP0JPQaigxgazpsPAObmcdhXY1iyGW%2FML%2FHHWO8bv2d3XfzEhch6W1qySuF9db5%2BKEMLbF0ckGOqUBOY6DmvyEYhPeYXlUIFrgf%2BiOgZEUlLmZeXMIDhmc26KQT9UUnemD%2Fx%2BQrpD35ZO3JUKUKLujl11pj5xN%2FEKldr2Ny%2FQx1yi6LuNNvunoGY5kXP1YwepFzYXnwCIMp66BQ4aqLaZJGiR7K%2BDt47FMVzb61uGWe5JGRya7wL9UNp%2BL8rdtHvNz5llczeikkJ4cW5gLTV4gJNfxHaaRyaH7%2F0NbZKK6&X-Amz-Signature=11acbbd5030039a5a61e17f06a581fef502a2ba120ac4a6a5e15932fc587f4ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

