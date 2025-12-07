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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY3CZGKR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc3CYzNicnOUKFFFeLr4cCBnxI76p1T%2B33Ymiq0gq67wIhAIRppLE077%2Fi%2B5hll0SOumU8bkO9UwMBPj1lPMcHfWQsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj6R7wefjC4BpMRu8q3AOpee2XdzPqzW0vViCyTpeAfrPibdb0f%2Bt74KdZ5Swx3wFYc8CN6jt3cfeHHp8nLa%2B2GVwCxzjEPJfokqngE3F6Q4GkM1JcDNVrtyJCiVYW9Emu5zMB6FEyphV5E144ebq%2B9fSpa6mZB4xYSwAa1mmfqU7ligtyeHvOkF%2Bz9K9HPe06A3gEWFxoKr3Lck%2BgbrNZgjbqTHek56Hvqo3GUrgA1mk78qAv4vd84Wnq5q9c7l3sCDgWpCSYnG3Z1A5As0bdnwbusBCz6og%2BNcNYYXmk3X23DHHo2E3lQytmQXG5MStv%2B%2FODaWyOqXaoNaOjHbyJ%2F6yVGeHcg%2FIM3h0R0cb67EEmaxPOTtDWe1K5fOs1HdZZPMLlLNjALh3Fx1UFDT3DL%2B7ZBmJk8yW%2BoJLHugRoggnTNC1jT1voBGBQ3C%2FPWwGRExN%2BJpb1q9sBf2O3w%2Fey75%2Fcx4FBxBe9jJ0BJy47l5pB4mZlUtgrtqzP9uqjkNUuzF0RAIgr4rEdCe3C8J7bdZ2S%2FzWZnnDuAnGFxEpvToemOqByzxytA565cjxcj%2BATQScZYEFCv4F2SSfdsGi%2BKTOWeUgxx7qkmfafRK70cDMKzlRi2sgvNeZTMGCM%2F59XDGBQ8C%2Bk6NgJ%2BTC%2B%2FdLJBjqkAbZ%2BjT7G0itZH8F61jyscHAMyD9eyJ9ygi9FR00tYKW2bvv7d%2FHxiib00ZszWsnaYexjcj6asZhop2A4nk5Zadeba%2BLW0WCXds0zXlQOQzTO7jZLUl7PvvYhB8C2jlfxPu8ViiyJQ%2BVumyqd8VxRSg8oMz6%2FPBatibLe4k8xbVPiSVMoANveGDnBDD95Q%2BnIlC5wT%2Fxe8pQwLgWEy6r5yziMaoJ%2F&X-Amz-Signature=36a8db4765faed6ae4987ef3dbef8efe704ffe72f313f136d8e666f9a6a3e5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

