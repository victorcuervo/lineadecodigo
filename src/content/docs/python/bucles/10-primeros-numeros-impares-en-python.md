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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJITYUV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA3EEEpStJo5SXkz4AyH6r%2BOTON1630rR3sRMqt7ILWAIhAMT%2FnKyiWhQFPGKwEUymxNXLY1mxh65TWEDF1QgWTKcvKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnUZ7nz2tTgyOxoVAq3AO6AQKku0URphcdYUY%2B1DTcss%2BTywbQstOSiOmRK52clF8WL0xAIfOoLzbXagfs1tOv2gYlxLI9QW%2F1gXsk%2B05%2FcDshMKExKjpFnGlAguiXkx3%2Bf8GBvqhNt8XCx2ncdNP4IXVSgYzNJfHtWxv1gGsmcODXImH%2F5AkeXkvPE4%2B5MIyl3Q7ZGqSg6ooduOl91fg0UcuJ88e76%2FKGulOFhoBlTOQgAis7qsJJ3mf3j3Wlk3AD%2BDs20a49WmdMV98btnfQfxpLDnrMNrLLilaUYT1iHlDzwUkGM0K9J0N0270u6uTDyfHERTvBIfYI%2B5o4VgdhNJEhKrBnrhItiowMYzf2xrJ9gx8CklxwI7WtcEDtn0KTZ6xKRXTAFRRTLsNnBj5LpcaTCteFqDWc%2FPqjMZr1j7i%2F2D3FD1ciEoLy54s2OXSDsN%2Fsqj%2BfTPltCSo%2FUGLgKeDFEjzL33n484%2FsMEEuxjV21RhJYegFued79PSU162i6RYG1rEuGfHxfJX2LMi2SUdbyi3rUaspwTbhcPmHYY7nLk8vCzat08VY2CdVGrP0roEO%2B%2BQdHpe3JlB%2FMMsnND3GMbK70mH1G9WCOFveYv%2ByCSU4QRi5RlWt32MDI%2Blb0dDlM5n1tlCExzDP5d7JBjqkATpitPcCQIq950gwgj2U2TbEeGx84xRJJ4NWE0cGqS5nJ%2F5cCMjwCoRFn2fst5ZF0X9I3q8Lv8B4EJsHmEDukNIoHSy41ELDkExS7%2Bq6z97rWPIpDhtg2fAc4JK%2FjDJJgJeM95aKdhr9BEU6M1vRm11CkdjI4RwLV2Rz4UcmttsN1O7ZtcA9CGPoXaolfc3ZA02Ua5mDb%2FJ9oSmPXLB1GTYYRsLc&X-Amz-Signature=5080cb06514ab3aeb0fa05edc1549341eed5d45f037fb0f37cf0b0d10ae62bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

