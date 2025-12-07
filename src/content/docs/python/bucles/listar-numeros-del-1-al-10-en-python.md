---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IS6CCFZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgJOO%2BRKMK448MZHXDwEI8w7dbdFF6fIsfb8x8uRJM8AiBoDf6H5he58NyOPyFL56jsJS%2B858CWBHt7ylAMBwfWtSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1zk5i4yqktDZxZNkKtwDxBFu2Pu%2F%2FZ1lfKujVawNWcARD6uyY%2BSmEZFiYscFLQHwYzkB5eLFyFWxtTd%2BSkCpQPud5AZ8a8Rh98tMK8y9PJsZkx0xEfmrr%2BI8pYI%2FiPn0ie3M%2BGKnU5uE%2BmZ6I6K2kti8%2FZmWCc9FLaE6U%2Fh0GQ%2FhZ5yBec9gHaD87v7R%2BlV0t0eJ0kRTupLuQG%2FBuwjI%2BrLjt2iTgNTnmSZarJciY68wYqkXExhjjku7g5LiIlZ6DEXs6l8BlXJube2XFrkCiHXiQ8QUcAf7V7CrwkhHeHIL%2FB3muYm0gv06kYepymQ6i0KJRj8KMjVPNoOWeVClHIf7PrVCQuxvZBZ40SiOvraP5tELo6lFDt8FAYjAC1VP4xJZCgSK9I8V2ddknar9XhKNzjt1uI0YqAOB78eEscbRd8GkiPWy5G9a8yOFKY6VvyOLUGV1Ho1wZV74cggSizW54GCQErv8RYasAOuflguU%2BZXSxCEIoTwKO6GqLmZ8c4i2oIdkntkFA02DrbYNgJHYNVuxe%2Flrdq4kho63mKJ6vjDq8cZPGzBNIwMX0ga1%2BezkPaBb6OVNM1tzjJY%2FJI%2F3HSx%2BC7VSgrBLEKErKA2IHnSDoLK2netVc1LFbe%2Fp7keU4fRlbDlAmF4wrf7SyQY6pgGatEVbmfYhV8svH68PbWrRH0pmF0h228DOxbhczAYpcqc%2F53YDnbIA9cr%2FsuR6t2JGuA3yvL3Yd4yyziJHfXelJXbOgD3GWdlZVzLp9PCCJJEky6LqE%2FEV0F3cS4wHdAA9zoxmR9xqdQlunzwGFrZQeSR6s0iKyKW5B0XB6YAJ80xjcYsIuZY%2FchxE%2FW%2BauD1IaMXeASWR7acnUjYCqwhBwrQTTgOo&X-Amz-Signature=f4770a681c0f83429ba60ccff465a9a3562e0a649a0d7918f5d9d7faafd6a6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

