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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTC3HY2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBp4JsyFFY1tham3jNS%2F9AlZc0qAqcR2ViEnkaSiKkYIAh94Snk9hkN%2BNjHiRiL3uLQoWcXXanU5CpAuWliVl1LeKv8DCG0QABoMNjM3NDIzMTgzODA1IgwrWNDrb0zuJIVZ2Ykq3AO0yG9izVN9lpZ%2BaF20Us0RrnfDDlcLy4LnvGdmoAnsmNXflHAxoF07DTig3mUjvP3J0rMk8U7VFrizTkRKQLnYs3EP8dVobQmcBJMg7GFWJng6x%2Fck0v6aEoRxtQj2x6fQ16p4JxB1igHvl2wyjzEjWc%2FNk1OyNkzQCXvwgK1yrNnK3NBCXIu7p0A5306maQkB%2Feru7oBNrMa6BPYx%2B%2FyqEQQuHCp1%2FAhSm9tXv0IT5Lsjib1gMfATjWO2NlhP7ZhByJ6raQ2ggcF8KqGIce5l2D46CzwAqW4WCySfcHNKu2RieoQPKsCjEn0lolxJwb4wS%2ByZyzXwVIX8RN6uOs5PGQvVmB4AcKEg9CPXfLE9JBsdGyj2T5qAx4cEVHETuA8n%2FNmsjxFeMwr%2BHcnCRbtNjesnSgeX9EOS8%2BbZwsOXwdETsMAFNi9V0ziFo2xrcU1%2FxVA6%2BZpx%2Fyb%2BUe1tN26Owf3FHLFYGx%2BPLh%2FVnjIPNRGzUtuKU5cwoDq9BBNpGb67VJPDy8gotH1ZpVeuBsPAU9fWrEQp7TXBu9%2FHs03jlWSJSKl2gB278eALIkxzCuvz%2FMSYgqvtTqB2BVmJ3S1GaHIu8D8CB3Jg1LEIxaEZ130M%2BISi%2BwwtBV6CqDDw3c7JBjqnAa93CS35w0fDiDdNbdgPq7OKin3Mx0VJZ6QsdqSi5z2xaApOh%2FgTMHfS7o0v%2FiW2zTO0ZGUkosOgRd%2F0mriCX1xlUeaT8lhEf8VkpYyvLghKZGf5w3A5K%2FIv%2F36CAoSkBhF50bIoc4axwJ187%2Fo2BgdsjrNyhoCFKugescMjI7JXK0w6llYLVO1bldqsBa%2BSPdvdHoCOsbI%2F3eMP2s44DyXP1HdhSoQZ&X-Amz-Signature=119da70da5ee3fd5a0eaf543584f2a15c53d44704433b7e90ae5ec5332da067b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

