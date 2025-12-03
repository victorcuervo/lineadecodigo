---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q27UGUGK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFPwLcm%2FZjRtlC60Y06kYdB%2B0%2F2VLQ7RmxBbLW3FhgkZAiEA53BOv5PyiNPfO5HJNw1ZiziHVQWWvRFxtXB2rxmF3hkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDAd8fK2R8PO26sJSsyrcA%2Fh9w46GtRsxX%2FxDJi3nFCtbfX3cJKKi2qU9BTg%2Bp2%2FoRGZ3s74I2e0OwftYNxK%2BYfOHCKWDaKvWBbtyK8nSrfQ4qIR1YB7wBng1qbxqmQJ%2F414iccsnI3UffkDK2afYMcrLxRi64UPx3lw0cOHx2%2B3BPAaydomXQ0ZRjZrexWZO2B41T%2FiH7DFj970woEI65myz38KHqROgKJ6L42ty0Oh4rANDNzWIkYg8l%2BNzePSc4r0ZEqQ3qHI4ML7LgQZGaptzJTc37MEgkuH0qaJ35lWJo%2FJI%2FZSAGu9pr5TbO%2Fvj%2Bc9Grk%2Futet84zsuv6byq%2Ff6NRG%2BhmkwqYeBS6Zm6%2BT9x9J4%2BeX4tMxis0BWPdmrrexLaEi7GXta7QithGgNDIv9kTz2LnV9gHXQ3A6Iqbe5GtvZWUzeopPS2rtfqJj0e2FwXbDG%2FcMtzwpEfdf7tCl6YZWfm85UloSIv55kAFPR6UQ0Ku8urpTwuvF2E9CmAj5ZMp%2BvNYw16imlz3PpkoMXq6M2NAjiDBhuUXcl44vQ0Agzegipu2UGfOsii1ovXafwsBf0BUSKMRiHS6P1IbUp6OR%2BjAbp3y9xG%2BFDo%2F3vaiSm33YnkTW7m02ui1y2uGgXOu4fzVydWt2CMLK%2BwskGOqUBmTZ9poxqygmWOLXFm5ui0RtVkCLh8B46aEIKgIHU14hsbN2iMrcSSuqw%2B6zl3HT5Wk0M7yHKXEyQjvDkNqT%2B7pK9BiNJ41n%2Bp05UcEy2COYBME2ikAUkOaFLEjbPy3P14xg9OKanNebd2ciKZamuyEh3zkF3A0kDT4MWtOzoAHfObPRC00H%2BkL6mIZdnoYecGVRRt8tD0VRzJ6nCACz%2FRZveJ0Us&X-Amz-Signature=0023cdd5f44f38bbb613ba94c11e44bcea529f234878fcc01d727cca1d203d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

