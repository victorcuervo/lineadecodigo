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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MHZDLM5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQS%2F2MB%2BM06TDieYi02dsv9X5l8nFQyGX%2Bwvyy3O7s6wIhAPnvOEfFfa2MVq3jn58sz5Gn2alXq5gXZDI7N63O338OKv8DCEUQABoMNjM3NDIzMTgzODA1Igx4pAq8xIQdu%2FJ%2BEs8q3ANiuCj886pYeCi7LIzSpkCfiN1LrFrsFq0QgQgaDWCSHBkRdy28vx9NnboNtWc6t1TgGsJw1IyPhpfKb2drHpL7ia3tbVw4RMmj16f1fhhsyD%2Bj1R%2FPN1%2BhxZc0GZzhsW85Y2uCsdxI1zu0v6G10O5%2BY56WiZGIbwOyiT7%2FkZNaP7O7V1wNJs42UHSpz%2BjJm7sCGT9stI1Uq2tFnjuwWP4ZBeXS03R7J%2FxtI3FlOR%2BCd%2Fri0YTmwMmwJMvfVhPK0frm5RWm%2FNXTya2f5OTMaKKnv%2BLyRZBEfyKaQya5CMSvpR4T7PcFcGp9weMGulLGGFGO%2FJD%2FytKtcmBlTuwVY9SUvMV75Tn2YGbQ99lvVBNGFElrpkjCm6UtugWXavtQyKPAUNj%2Bin%2Fb2BYSLBUWZWqsoMTkY%2BP7UtDwczjvJ1pTqyXGWIfPON9naqdGFKObXr328a0aql0V5765r747WfehiKr4uwxwBY%2FhuRcUzeAjN56SIR4SI2cQNcV6%2FRYBHHIz%2BJ57Rxe%2BFOHlGOB7og8hCXxJz25duF2Ity%2BLs1QnGzvoloRJZ0v674sakh0V0aToyod3%2FkclaQbXlHQEnvze7OrteqQazhp3a6FLKbIh4TtUEhDbCppjZfUu%2FTD%2B5sXJBjqkAd%2Fw9tCpRzydCVdJenxEfu%2B2t4Zq%2BDsikoaynB21WCf02UTar6D3UJmkj9Z6SaK%2FUmRRrHzO7O7nB8XLACZmlrGhwdtwVhPr2bbCM1%2BheuEOO9I4ZMhP2XGIO4wgfZSLT%2Bi0%2F3o2JaeX9fo3IX1Uvf5wBpLghSIoJVhNV0L%2FH0FJ65jmyBaxB59XPXlIRaC2d0a%2BUFtkkUd7m%2Fn70jQQ07eXCSVL&X-Amz-Signature=7e4590cf7d9367252f0b12724b220301f1bf62d0bb25d169a67eab8e92c2d260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

