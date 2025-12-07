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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4K6EQVM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7DRZiJiwTH3BG%2BD34S77bcFX6RS%2FQQIjCFOXEeTSNAAIhALPyp8nZTMEB2t1vcgZGqTv5Et3Pd%2F2eVSa6111Xv683KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwt8CBNUgMuyW9ari8q3AOmwUxEnvfvKUEgYpHruUHTmOkvaSqQS%2FebFtlNmJTjVqM4COmMEo%2FmORrw0Mf%2BbE05bmULXHCcWPwgCz%2FVIZH%2FROZU8C1JZzxu1bwaqD00lnKgWGPuWD9sGly9hppWMqpw%2FSXxjTCeVIlGxn72R4ZnrwL55BVWz%2F%2F3MQW5ywVQmCUcypg3kxYN5QZah039RBghOSIzmM6TZZeGwq5EqnMJZOeB%2F%2BE36qBzwNZNxvNoaRq9E%2F801i23qzGMN%2Fv6RJX0XA06ExHCpBLTSCkGWXzrTKpVvhhdyynKase7st6BhedWuvOZiT88SE1nk5u1QEXlB5VXPZBLVlWi3j5bj3aFwFLixOYBClVm9VGPXeCyecO79wTWIpWGMbzrkuvlWAvT3j45nOUnfYMHu3%2BHrC5sU%2FwQPX%2FTM6xNn6sFaGYbXmAp9qW0vcKhTL4Lyb07DSVWkbmQsnN6C4isP8w8533LgzhItHo1QCpoUsluznXwhWtodPwVwVwf6uGcXii3e3kxUEKWsUS2vWK2Lmb0hcYj1oZuiR5P%2FAr61fF1Wr6HwXa%2F8%2BEDklHrE3VgqZNSYKtpkf%2BFtNbA8wchcoe09D1wKQpfSkTok%2F8Anub85uLouCfn1d3Qi4%2FNU8PcvzC%2BmtXJBjqkATpCCUxfrZvZbTqhgpmGrlavMFQzbton6k5x68Z1DRPP0J7NwmUJ%2F%2BSxmpMxyfCZRYHwhDAMS1tYOLQCNstpD5%2Ba3qEtNKgKBWmA1NL6OkdzDS6DAayqK4kGxglM%2B9uPfUZJajz0uo8upzrHuWPyDDntzjvp5pOykmjmhim4ftXoTmdLhRev1L%2FoQ8%2BireU%2Fz6ABrS%2BXu9KhLuMGE9KXc6Mr4duV&X-Amz-Signature=f31ceb442e3855ae0393f994fe099d07f5a9484d0ed5c621b0c44ec918da418d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

