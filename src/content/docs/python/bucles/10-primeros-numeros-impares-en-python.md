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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U4T7YV2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqkiNkrwGV34DcxBzlXO%2FiffSfU1m0NTotsvZN7FcINQIhAPDvlICNOCFCjciY2RUS9siRWKsji2oQAlzDS7GWLLneKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4eioiHjAdzF1dipwq3APIxJzyGgKfRzlGAulS247lE7XRBBpgmiYxtpkWZ1ub6X01bbtqFzIACJ9PdztM%2FzjcxohmeTn2rCEadtnI%2Bhz9qm0BhUAKbGd8q1Sl2zxAHRYQUvP5ZZO6dilHoAPK7XKCj1KoQVluA%2Fs%2BpftZAjfUJUk2vv6Gug1ZlhVlO5kZuNjNOiYQ0AaaZtdXOYq382zb%2Bdb%2FGxE395T1vi1lIZvD5V825hLCLz1zeMKgZBbyTNCxpBVMTyKrbpJRo22q5g0x62iv%2FjtfVplMJ8z3Bs5tlvCRJaAlt2LNG2%2FWLlUOSfx%2Fw8CS9F4ir6%2FHe8k%2FHPKG0gf%2BIHlq8fP8%2BmfKcwcz7cA%2BYMKFaVE0H5xoTrJlDQCD0214N6%2BMwlPiSia7xPYrdz3oxOsFJbI0T1hQGvkI5PD1LRdUlGPYbw2%2FAJZMbOe9mW5kiWvpqjaSCNvhIhIsTRd2%2BthYc2DxjjtMwJuqLgMg4NSfyQ2Mo95EH4vX4jEH6VubL%2BFn4tW1okbOeCfrbgbvzsDELR08vtklIotPdB8SFpR%2Fwgt9eRU%2Bz2oKzAifKmfcsOC94EkL3tikFeDGT%2BDHMlma%2FIvaapWUS%2FmFPc2t4xbwmFd0cgKf5Z8eM3UfPVDFuh2QprQKMDCemdXJBjqkAb7WHuuG7W%2BrTNlbGQcRXwvipgTVMnKwiL38MkICcxTYUya2sgHJf4E%2BIK%2FzV%2F5dZEOy7OIMHncFxBPiyTMG%2BFoTl5TWMyvNbU6XWqNJKI8mCeT%2FDfWXO3sKIZ8eSLsPXKZTABPOa9CMcXv9PbYDRCFdkbS35jUbgUKBw%2Fz3r1MHfNpWQ1ButM57AYm8Rw3BY2iU6s%2BCzZOjzsXXryHH1tXwb0zr&X-Amz-Signature=4fb2935c9c4cdbdbb7fadbfbd45ce415265c584dcfc4c36c310288dcbcee3908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

