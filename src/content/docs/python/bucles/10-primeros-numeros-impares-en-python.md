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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEMAUXI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL3aWclshoN9c6fjIF9yFGq9bZp%2B3n8apvuhJyKTdq9gIhAMGBZWVn%2FmYzbnMJie2PhBuzP68Lr7MURdEFI48Hk8AUKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F0VlZBDM%2BJEwEUkEq3APRX78bi%2Bsty0oX2uP2c%2F2lQo86%2BFubcEGEvuNhVRcLPDQRmV9nyUEAKZUVBT3GHzftZ33Dv7t5oD4ZLYX0Zgp3rM9IHBN69ug3a2DE2yIZ%2Fnvk%2BCs29%2BYNnAtOQQTeCfjuULVXrtleIvcM6MmGkc5tEQe7ifQPWZOV40rq64ocR%2B1Lpstcm6%2FBUY8B3HN0mZodgffXD2JoDHi%2F4MAa1LxUv2HnRU9F%2Bo2hbF5lRSDbDV9FJA26yevVj7w48%2FnvKxydAKwsyIHI%2FE6DcfDBG%2Bb9c2Yp8llGM%2B4RH6Jwm5vFiCuhK1DoucINrsc6e3tS14vZaG3P%2Ff5TXKM1VPVDQc2tR2%2FkYT0AvWwTB9IgbJo0ZsQ8Mc2xb7rJ7kkKOiN%2Fr%2FA4WR8AyXvh1wB1qoBr51tyBUsiCnangwX4iEAMXmn%2BczCqmgcS9lplaTH2eWHJLvo%2BjYYi2%2FYEv1ulR3eyAGSLOJMHYghpfaMA2K2UoGGOlWtedNXW4iLwKPZtlKwvFK9yI9htFK3UA7MQZKj%2B96EJyWfGrhzg0tkGU854kjGSto5HwMdtHxvKQdT6Hg954RjvhrP%2FIhfnNeqdTlTe9N0T0POUWcXgROvVg0KcT2IW0xf%2FfrZvk2rN5OvTwDDXs9zJBjqkASJ1LWFqmm1oKjfm21ptkN6RXKwJ4xnwljlKUZbv0eX3m7zj3le5YWK0Ykugr7NelqgZT1X6D7FfEMvhz7E%2FrYT%2BOlSi0TDillgmvmMw11Ht3HPjSzkd14Z9O3VOvx455jdadWv0597v0siOUEzBottmUXBjIveHw3NZ1m%2FYAZnWudgN%2FzhMPYLDm4fq9ErYGr0Ds09PwLHHCp3tMn2iQxOFrDls&X-Amz-Signature=aecc4afd82ff11d7fbf2f5b3293ccc1bd7e6bf63edad110f19e499afefeb7703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

