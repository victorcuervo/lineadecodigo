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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EFXWDPE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNyn%2BVABt3uAI%2B8wDKbbdDF%2FBGbUn4%2Begf22kCXsEocgIhAI0FiiOVNgFDr8uMSl1yyELVMj8Pv83TKPvAruvehPLqKv8DCE8QABoMNjM3NDIzMTgzODA1Igx3%2B%2F5yGT%2BsHergGyMq3AMTKPQ91WjmaZT89o1xnSuFczbEn9x7jjSiRNCeBAXhuuCi3cYCCdOxYhwnaX2wiLRylVFlE8ovmxeNquACFp%2F6QkuYWEGlrxUYYBuRW36LzCT8z0ee7d4ZWkIqhMieZaYsGi0D7CbQG1WjY5hwudmrrVr6KHf6gAuuYwHkI7nrRrcCM0wc7rQGU6JbNBeiTiq6XtSUfu3KmGX3KhReVn85EsJ3yHc5ymvZ11C2apFksuOSm7%2FOulqJ3MGxDAZdZc%2FOeStx2b8YkdJjAyl4%2BRwpX4dw5V9DSu4huYoC9WC4fGKLH7FfLcnybpY4VbWKZO4wCJWXM9WvPt%2FJvcaaVvM4Rq4BTDI1mIFubPoVoF3ZPXz9wjp9%2BVatXO2FufulV%2BkyTy9lDFdj03ldfgWE7wUlpOBuMgLlgGN7ccIFlQCmDl%2F7bbltZ81UtLTxV6ndKq95aiu2QujL7u882%2B3TzcDOnEwBOMJBeQf9%2B04fuYFPe927mINUJKc%2BdnDzJxusvcC8whB3Qi3Nen2nsWuNp8sZC%2FHxi1HS3deDvtED8T1LQcfJiLjHpTEWaQPoFaAwMbODkco7wu%2FVyc4jVs6W0tvGG8C%2FapDB512JizC4obRDftp5mGWGNgIcKCD0RDCojMjJBjqkAUfOMtN%2B%2BIdRHB5fNzj592pPW%2BTJ9M2uyvJIalTjALOlh5lj6K4dXWbl6ttT2il96sOid%2B%2B1YbdXIHY9MeCZEbrskZX1oX9oTgEMGoI12tvoi08%2Ftdu1L3uYUgPupywCVwE1oUQu3N1ZcvciaLOkcP1SxX9ce4%2F%2FnL32NX%2FXobIHtThI3BsbvCVeeWNXBzOYiKN8Olst1Q6E3X%2FWg0ji2qqf%2BCZs&X-Amz-Signature=a839555207ffe912a1128c1794b5b0e9dcaa838a24bd2fc1edda70a8b573fd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

