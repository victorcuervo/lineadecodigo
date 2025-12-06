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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OASN7OH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRqVs2qqt5E4FDli4P9zoDAbkl1b5Ui0kwytgxpod4OAiEAyy4g%2FUCGdzYuljS8w3Ul9l5mexqcmNrz2TA6FbjMP5Eq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP7MGMi12agx7XG6RyrcA5QPWeMHhTZ7unRiN0P326pqQHZ3pPpLY8Mn8lIXINBE9NSiwb1zluJVGgbdlQaW1ji20KWH3iGnNof2ItmlhN7ZKJ1H7Qg%2B2tmPcAsJL8i3NF7evXQo3xcTkgvoB2hM7I3LsLPD4N76fJ23VdO%2FtChJ1gOvqj4FXC1%2BaO3WWwyMPs0nDeaMUkXdj5ZQ%2BTFmugZ7OJBlbCPjW%2FJz5%2BHs6NgBrx%2FqbdCp7izxF%2B0XmcfNGup1dT5v5w%2F2e0F66ZXDHWk8Ej0oSEicyTLqM%2FMpUyN%2FqBch4OblSBUC22eskQhYp4veSWMv7OPFka41unDPDVAr0CGJK%2Bib0F%2B4XdqafHlZSrEKQQL0thbGhozpYguBxbCO%2B4eBSG5QPLOwvmACe%2FC2vwAcj%2F%2FLjHHHfQ0V4Y7pnRsQer1Y5De1ejFhOHlpa3LglyTjNAt7skxdTO7rHZuaIJPP53%2BfNGG852hBJUGSjIuYRPRu%2F41kpFMQ1Zsqib7BI8W0oLEQZvdKDAk0cFe3d9BOGzxdNoFbn534v0xhW7ndEkD%2FVVMq9OLpvHltOw1bZzXC4w4xx76MQ50I1Ycedhz0QdH19%2Bo6Be7idx0COY0yF5D7rbuK%2FP9KwfQmehKnlKTRbNPa54OyMP%2B8z8kGOqUBOIUmaNEaVUsNyjlDe2Nrpujv0SVJrRx%2B2iGWctBsTm0XJpq5JREDj1mAgagtn%2FcQvtnapKjwmUN2%2FS%2BfldiJ4hzEevm1pVisMWcdBElhFyfq6QLGrpT%2Fwa1opnUKYMHhGBop8v%2Bfw8Tbn9jMNYOt%2BbPhMjbO8bOeHztB5zDQrHTORsQJqcldz1whRhri0iCkB1rRcs%2BTEKk3Qyj61Ti2ySMw16pk&X-Amz-Signature=dd43f2e11e1659d72e5dda2db62aee7eb7ba98eef28c4dd112027e06718065b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

