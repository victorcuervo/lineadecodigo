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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZGHYKD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRwwTkhl96qbmRl0LIWzcCc2Qh7XMCFAbaOGCxPwF2bwIgf6N8VEEI8%2BX%2BR35GXmzCHd5bSjNLlyOffthef71SF38qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMC8yU25vwC4ELPdqSrcA5JaZ0RCuV2LWbSfSPI179LqQFPngePZ0si%2FcH%2FOy%2Fz13ywR64pS03FOzy9Gf7Or%2Bma0uJDe3m2n9KhPpK4Q5zujmfJbn0s764el08aNFO0TVlxooNo9Nsblm0HkIKSW3mT%2F3LaZYzM5%2F0y7AN5vp2hBZh%2Fj5p2t5ui3gyGoAtYbw9Os2BLN%2FX7z1OBMwwGOKYvXP3wzYobZ2JzugVMIfRFlwQyvgXo8TDEf3OGfazo0VtqdI91rFVwmWeJ9lAmdDC0wBxilSJxRNVu8Cv1nGa6LlAhk%2FwRwaMvoPXd%2FH%2BQgbaEKVrPEgTePMlRUm%2BnLVp53uEsYDZLFq7kx%2FOZBzkf%2Fij%2FaDLzeUJFWsUp6kFOgOupE%2BhxXN2XCc7Gt1j0e2SkR8EE%2FoHRUYnAMHLHciKDQD7P%2BZ7Vc8JuGqO0dC1abIlCBfg9ktmU%2BajSXMqeGccsmkAFg%2FeEoOXPgLlbpmTjFMXvtg0inz44MFCp%2B%2FcA4LX05yu2rfLgq9F3JQlBqxOsXmsn50fUCLMYgkQaJXZXb%2F0PDvTXg0VHPSyCyUtXrcOswEHjqU2kDpAC9v%2FpPS7jce09ISHp00DZBr3cdheEKJsZ2Ojq6pM4sNd%2FjWWav6gYOv%2BL%2Fw4HDDk5JMPyZ1ckGOqUB1VR%2BH73uRtYY%2BdRzY1%2FzXdzhJBsbWPe0jc4xNQpemh%2FHREluPXXIx1jtcO3%2Fdj8FxTjI0OpdtNiwjimaRZUB8IDjbdGPwdmBoyYJNm64PA31H42aGee%2BmVhUMq9VAK%2BdLhqmnVRqfS1ErGeHEUNXEKGktd993i3Lf6eNcQonR5MiwxJ%2BK4ohHw%2By%2BPLf%2BDj8nyq8IxVk71Lj90p%2FKknx2cGHf4Vs&X-Amz-Signature=b8205939c31d5abdff3bc9a0786f99617db96279fe92c23bfb8b77829eef02ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

