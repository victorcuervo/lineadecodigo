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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5JS4ZL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBqvRpTzdszAoTwgDSNgq%2Bz%2BiG7kAAC2wwy3uPN1%2FaubAiEA0WcxmTKPzaHrfXP0YgaqTEomBl7xmBk%2BlXeUsPufTg0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDI4pdB%2Blilap2xCWQSrcA%2BKnZHpyCXAp4cVm4feSgwew%2FBO5jnMh4ud2xbZ6zxXFeLgqEWvuJ4mbqOEDL5oasNmVC69i092efi%2FsLkDgwmGol9EGpJBBzlBGKjTNgofnqFaZC8phDtmJgslYcKErVR71e29r7ueSNgYKK1QJiG4h0JS0DiNu%2FYd24TfQqPgFhw3J24Rg7oNBZ48H0LguosSlLPNh6TZWtmKXW0WWslAONsDuW7Af9TB%2FCMWkhA1r0CJKFOdIHYjNw40wPDOYlNAQkARMgjaYPr7M%2BkBFV6hWiLeGhg7o2HCRmEfoSvqW8x6QAgRFvlXgRsqW3lhA9DEn0FY%2FpGA3%2F3VIKlXp5oYP%2BeJREDTGh2jj7E5Vbi%2FwTMonxXXWxXTdHfe7afJVIUzbfePXzvoB8QWpAaVH5dO6YK5%2F8Gi67QtIvZZhgMJ7PdFMKBasXvUMkaW%2FTcPErHx2Xf7D1D8lhJ4xclXK3k%2FmyY643dPi5sbbXpfBkjVRW%2FajVShOagu2yjjMV3Aftw59UYbhhMbxXFw27XdFs9L9zjG8JPcRzLDO%2FiYssZwYuinmd9uLUI9ShpPuNEfw6sVghy3CZW9HsZWo74ZXey67r2OZC9ZD9Bp4WA66zPpmevCAA6kgbHLlYcn1MLu1w8kGOqUBfEJVNxsrbbh6BTq8mkeHFjCZqBMJrZ%2FM5VFtds2pxarEI8vX6azR32%2BC6NGG%2BnjRAhZwT%2Bk%2FsqJUNnJNGGhCb6RErdwhrKWYAQaWjX0wRSZokjcY17eP88MZ00Bp74qcHULf1p41kCl0C%2FHIEGQY2D2oo01G1x9q43LZNFVporPYcr1HkGGw4J5WIQ9Lgo3EcNvE2vrhNWeDf5znJIee73ReJ1wi&X-Amz-Signature=17f04c145267ac0ea021363a2fda318ccb5317bc70cc400c31fb7c6b000852cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

