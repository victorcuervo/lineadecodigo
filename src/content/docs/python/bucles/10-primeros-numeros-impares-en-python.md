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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNE7TFIC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVC%2B2Iokkzeh8wm6p%2BesGrlrSAc3SkAPjsmSaQ8XfMeAiAkT1u7gVQTp%2FU5b94%2BlisHuOpF89AiQOopjXEkReq44ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMHyVsOeK9gcvkXt7%2BKtwDWBJBJhuZEvPhsroyqzq8h0xx9yOHSEBoJGygiZRkZ7l3YEPEBLeqzdbQZj6wshUAnPgbiho23EUR9flwuhE%2FD24gQDGp2iZXvsmj88LYJjkgfD2OE43VELGDrtcY5%2FXP%2Bn6b%2B1VTI0cu%2Fcq8U0prB%2Bdsz4zOrMLReAx5t455TV9Gm1UTlEqJy%2BowfZBU6tvl9CMpzLAakZ82Mju9YGXAYFN1CwTh1uUIE%2FoI8qmH9ee8GbQupNr6Ai20v%2F6qUKhjmtOq5JSqizvBSi4Yyje4Tv9L9I%2F03mCDK8wEgpYsqOV2IWWBuS7w%2B4U4vN%2BIlnsgmqNuo8aMoLd7k%2BMjMWSRJWtdRzDMT8e8hTtZShAe3X%2FJ%2FJ06ES1FZGei1SvFpko52N7%2FHfx41WL7rX1jw%2FsbSTWMBM2DwOCdl3e0qRLKKHWj2plVtknLtt3A9kx862ENO%2BfvLzNdnUXJRr46ZBtWzd%2BNxkm5DD7A4oF1%2F7lTa7WJeeBODLdz4FvE9CBLk0vNUek2prZdsI%2F%2FAAcST7EMTWRPkfhwyTHnUe77K%2BNr%2FpDZw92Lq7iIGUmwdakQ%2BZEwgGygxU4fdL3CF71VSxP4%2FCP013jx%2B3oOH4t5KyztmcBwY3kJwbDrG6%2Bw%2F28w6sbKyQY6pgH5Uu3QxYI6wBQP7L8w9Aw9Zxnk%2FjfsrHVqlwmMe07%2FMLdHgPw4iVWQm8%2FUymR12i4XNVoXXrH8dBZQaPBOlB3ngEffUSFB%2FpN7th%2BAaaRe4X9yUxaTcFIhRGxqoj2sMhVcI0UnEZ3uW5K092uvmUviJrw5cF5qBd%2BJb8%2FCbp3w%2Fw%2Bk1hxcffc3fUIbOvVz7TfYf751LZLuEYChnD9vcV5GXgD5SGyl&X-Amz-Signature=9aa660702147b67cd7766cc52bd17bd602bfd1b827561d553b3cfb977a4ce1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

