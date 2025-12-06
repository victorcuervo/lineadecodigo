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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJGFSHA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQOMwD9fyyqOQDG%2FteezX%2FJieq%2BMcwdZApVwbFGnZ7PAiAZ8NnW%2FiE4b95o%2Fn7ntAWqbdbbc77A4cU0BRe2Nkjm0ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM2Pvrj68RrNRsZA3NKtwDewm98Xy9xzHpyM8smYbgaVXx8IkQv0B5%2B%2BCHq%2BJp%2BTfXVloBsFMgeUPCOtnRijhjQQ40NteyWfdVjzO9xztkeJzzcBwo0Qx9UR7KHm%2F63LxWfIiC6bHn%2F7CD8pMQbeeH3tJKlE7w799l8GQfZb3mhB7zlek%2BSaoq62tnO3UrZFNqx2Y1w8oFTp1%2FwqbxPGeVHeaGVA8SDZdL1gpApuG0cIj9o9E1B99%2BOtEplL%2FqG5k29ILjvvvwDI5L017nicLQcdMe2p9enQ0VgB1ypMzxfnWk6VyL21KqEZie0xDjNavTaMGfEHkirqI%2B5YH84xjruaCwpPJRP%2B6Slqzp8F2snpBQrkd35w2jkX98AzzwKbH96vopn80nHdZJr2ZRATEdiccXmffRep6IUGyjB5Qgnj2t2SXDTXTY6KU%2BGjMIOthqoJTa2gj91vupg6NIWR2QElJM%2BTmOVvC0kwH9KHhAa4iZ0VLDOuD0ubFf5lc1NOmdUiIacQeMlr1AIIqrkd84fSYFf6xxWD5yJERgPlbrKrcZdIsSN8ab1%2Bu7gUwDYoCTN5xXlUHojeGvJ6Rlo9GOwb8IorCjjC%2FjFKWhit9g2nFl3FXORYx%2F5y7vZqrHEFNQbrkqx2%2B1SN%2FGn%2FEws6bQyQY6pgF9DfcUmYb9mIn%2FforAMLsnwNJlHY7nTdSmAt6NeufdiLTuyjjQ0JckgAbDIBngXuMzhch0JZTwH9tnXCdzGKga26PshBoBUYSrDS%2Br00QeWbUezi21OoJC6ZNwR9xHEYX%2Fi50eH7tmq%2FjCiG3f0Cgez7lPYZ3W%2Bwt7lAcyDRun75n8JG6bNgIV9%2F12%2BThFZmNw7ruqaZMXEoShowfZPszKp0ae%2FIoM&X-Amz-Signature=30c7e8631206b6c04e8810563d4c959c027d26719e990c0c437ca42da8980822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

