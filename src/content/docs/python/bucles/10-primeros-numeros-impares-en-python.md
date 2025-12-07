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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BYK3Z4N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvekda2tYf15LutJOsB7fDt%2BAt58cWvvQu3cyli74uRQIgRO%2FFzZmEZfW6HxlD%2FqFHMZWdJNJB5mScBb1eqkJ9TMEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGkF0Ncsl7c89s3oyrcA2dhD2%2F7zvt1FgTjw5vTnmLA2UX5oKN%2FwXm07T3oFRP2KnxgMfv3gELFZuSngtbUrsNoYZVc5Y2ycBL9oZLAaVB1N7WhhAK8ukq2Uz8FQ2n3Mq0iO8U7H4fH6X1aAZcBajIqxOEs26%2FWJVmmtE3slUF0yoPrGomf5czrGAQ%2FJj7RTI%2BmTWi1yToXpB1qAC0met8ohhX%2BUvCU4kYShWfl5FnU0c0xGg9zb9oBsdNAV2sNRc3kk%2BpWA4NM9KgrIHqU2f42qI2zwI2BKuOWzw5LZg%2FkRN0IN5NnncaBx3rhkJrRM0zpEgByxhvab5OQ%2F%2Fv4aVFz9VKqY4AC1tpJni9Pslphl7okkmkPOMkguLBd%2FInxNr5vivi0vllouvXsF%2BeYyLAI7CGempfI5sReRYoiWgSa1lbKDbHqOD%2BDRR%2B%2Fcqh1c9o8mHS3FScBId7jGiotwoLCXrcWidT%2Fsuchotb%2FL9ugnGr5AdYIV2REfBoA82qUX%2Fh%2F2md%2FcdDaUpWUwr9c3Rxc%2BQ7%2BmTlEZveGKFwhIovLLz1vzA3qIP%2BeNjTBz6bv3qD%2FuqEivDqgbeMoFu5icYFQayasOX0Vz7vCHVx%2BmhjTgUf6VqEuKn%2BUyni2Lsmw6bfY9Nks87AqCY8DMK7%2B0skGOqUB8V%2B35yZogkPxEMhxbUvz1mD18jO0pglKhWpOFAu4frnYOMq2AFI0SQ6RNRSLo08XpG9RQvQoe%2FhvvLIVnnhqw8J%2F80%2FoSV%2F5pgrOte%2B8CizR5At%2FLesQSFMngSfSV1G4LgW4EHrGzrKW6Yc%2FHfUZeAt6%2F7U9WZQqpXwv6vEvTldYs6RLvfD4d1mmC8kysNl%2FhsNV7IXO5AJrasYe%2BGpZXB3XScQK&X-Amz-Signature=fd97cb6a936e78a5755cb9769078ef8a8a0d24cfcd7ac556bb603875ed0081cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

