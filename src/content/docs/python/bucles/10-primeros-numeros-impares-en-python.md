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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKYYSIR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIToYOB8A8phSEldNKBND3B8EbnlK09bkLrkbXQe%2FNEgIhAN3tjTnz94inRzW8X5cwlJCarWpuBHNi7hLNnidXRuC5Kv8DCG8QABoMNjM3NDIzMTgzODA1Igw6J8KL4WI%2BHjyf2oQq3AN0LpbYbxj3Xfw%2BdcxXVf8z8xilyVGyZ4PFkysRBFQN1S7zc2qjXVzm9XBaQJLNTU02Ky0hBcMLBO4KYcSLRnzDFw5EH0ZHe7dYFnRFsh9%2FnXauFirYtCF%2FAnxNLpotInqYkEjS894ktkLVNmchyU7fPUbCOuH3L27XEgnWSNgcrAVHS5KYFnJofMoa4tdPLU1QZbAcrDdTVBacmjbgNLpEsyDQgYCbUVIGRlw53535HarRqo7D2Vxdxka2A1pWtlXtN0r8MgdAT5fPovnDBVKieRYPjwnu%2FaqEwM7y%2F4gQkNR%2FheUx%2ByDPjH3HE1gvqjo4QpVlAMHWjMJI3FZWh%2BKZEhFhMp6g6C5GCRnWYkFCRPj9UveVnOuaaS%2Bxl7nqxUEmHswn3at1soybuusyk1qnJTFmAvnHjC354%2ByiToBw%2F%2BVaiyBNXg%2FJxP9QbYgCLucTjPIihd%2BgQCotr%2FyfQGULwvF2ttZtv8LQYg2Sme0iFjsayuZ8P%2FqCAY5XfNmcUDvrpd7thIE%2BQZWIYjaOj3ZXGm8lKMPFM2G%2FB%2FvucjcKdkDdcTiIqCKyB1A%2BXCzEcfykOFNGFl9m5NfCuFyxptvKbgck3hDc35cKuFFNBowuVAot2Odt8lXrPLUKAjCV%2Fc7JBjqkAZxWo66mWlld0nf9Q7wdXHWZQEUg1CB7JGexalhrnXSFWt%2BrOwuluczeZqXP8ppmI8k%2BWTYtUCzV7o68xI%2FRh%2FAt1rC%2BaLK6PBgosjeCks9igFGmYjINpsRlS0QJoa2o0MJz4wCKZMdLBAKcL8SIkeA2g1Jf7uDoWxEnNmb1kcunxwx%2BcfcZkFxZFms63Atvf5MMVFuCf8uywdeP0fdvWb3vjxUm&X-Amz-Signature=e73224a8301a83f44c625e21f52ecfedbd55a14649fb9569e0e6d3cd8d0f662d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

