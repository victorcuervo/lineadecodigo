---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRFNKG7Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDh7u0dKEnCBkll29qEqsxFy%2FknR4%2Bk4Ibb%2F4%2B3mhJ73AIhAJNiIVpiRV7unX5bPdAxc5JwR%2FV6uj9vaazguASVC6QmKv8DCEMQABoMNjM3NDIzMTgzODA1IgyaEuHuadgdH0bfx3Qq3AO6%2BXnyLHR7T3zR8zT278pXCxZcrzWetMa%2BYF0KvjFooKHRUQ%2F7yjG3r9VQtnSxOl59aEP7%2BA9aRTZqzjufkQG8zaMYxVlgn%2BZYF8UIIcK64r2IKUNyEXvGq%2FA%2BEGvlRaY7AMMzQ3CH%2Bid5ewhafWaeyLj55JL21H1mq5IQdcKikEwfIFWtMUN0EKeb%2FOxdXXMs62ZDbejrGszkYZaxvqVTZFhGDlQQ1Z5TPVxuqGgll6S4bYFQe00XwTyZbXmW3S22Y3%2B88rVLkkVsAE0EmSUsb4cCxkamge8A2oiw7etJp1g0xtK%2FjAKflHOGQuhuYupaA0n4WXU%2FV2jwm%2BsybDqV5%2BnZP3aAw9PeOjEZtfDCGQ3b%2BHs%2F2M0TrJuyWX%2B3jdhupor40lRG2Sjn7p18kFFTUB%2BoSSggA3WzdxUfol30TBkLTKvrp7tpp3a1XrdPFbBVspMQ3JyizQ0AJw55DWXjLMrBos5ZDMFJrlE8qxQpARpuFK1VMq8yOvS7quprg1pk6Vi7bCCoyN%2BV8EogoGNacEm2PtZDYcjqjXPXSTUY%2BTUGrMWQbd7sUCM%2FDejFOOwbBVJE5cQwNxnKIScWIA9gKoTa%2B1bpQdl1oKWvT5euiOcpIVHHP6bKu4T8ljDrqsXJBjqkASqCkqHFPz6Z1bPuBFqhyleFxWQH3Cak%2BPTK6XWAJkZH1ljQZOmLFK9jU6TePMP2aSDgzPkJmAxSR35GXBsNRcwt52WislfNS8H5HuHiA787NJRBP1FrDQ11e95bF3%2BVSfjFkJYjlmzP7jqYPdye53bN9SNPdqNR2goCam%2Fap0ILlZRmHj5hjIOFpV%2F8%2F%2FYJ%2FmpoO3cNWb8mGimIRjjTX5%2B%2FwFzi&X-Amz-Signature=24f3d71a63b22e612f6cddd51beadec3f66980ddcfd025847693204e0ae5c6f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

