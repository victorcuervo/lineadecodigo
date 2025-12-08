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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665LOWYXJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHKsb8S1nD701VAtdpHWWIV7JnOha2f66xZ2osvsihOAiEA74tF%2FZ%2BLuLCnlakcDGveyWnwHnBupkv7X1z4ggtcVvMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTyLscPoChFXBtpiircA%2Fu0s533Kb8RW7wxn%2BwEkniH2Uiwkxj%2B0H9y1aOmb%2F%2Fyxxxd93ABaabWE3Yu9X5%2BgAFuxN%2FpaTGlJ%2BNwkCTDnjPXVW8%2BdfoRgfqhQNa12H%2FYFwBTNVkPbUwmORUnc36dyJaqRdx8vFm1qxsbVi9tkOH9TYWq2PCNL%2BDuY89yQQr04%2F3mkXcOlSxZXRh9jx51qGg%2FLeRkCxQwlUBOw4pTxJ7zcE67Pp%2BzFW8RM7H9aJ%2FJdFoj6TsMOB%2B9xQGSkpTRBxS4pYuz6UAZmWjG6hAS4QN20l0F%2BBvfuLdSuDcBvr1I9pTcPvaguKn3dbSzQQDfotEqAPhmd7NUCKdIh6Dw%2FLU8TkGjeaWwz1e5oICobIsCWYXv91thoFbZKYdkqjaU3kD5Xe7zgUbwUfW1MAYXl0P24sOZsMYB4uWYp6ECU6VFdtVcJPfT0w5Ffyj8CJMd0AA6CQZJxs9GkND65iGFViaCjvX1yL0ce%2BgWBZlp7g5WEKmB56GhY2fWm4nu2HRl5CGVKZw7UwsmYnbSX9uLBTPsgJfkYnj5Go4mP1%2FJ0hF6etJf4lgpr7gDusB62hIKIofRlL1PLpAQOih8YqIlK5vhBJWUlovl1TBDtfPVLiCXEJrTbbpg1gDFPdstMP7P2ckGOqUBzmXnjge%2F1tDmoIyc3MFPi3rgYPfN7HZCr5pF5bUqUuNBbeKA19blQuKE0uNxXj1ziZrEbrie7wHAbG1yrYABx5npJ3oRWR%2Ff%2FJ7cfv0hSHU0i%2FoDA4fufucUpoOACraDvUW5xkjix7mkfMwAJ79aW06wq2s%2BFdHs1m8q39EJmt0FuHMNz59ZXx3j2%2FYzMgyGxPvG1hwF2%2F4b16hqQC0aWGyKd8%2BL&X-Amz-Signature=3fb8afe5469cc8cf29bd35047d92e52be76ba6ca91c0e54a819253ceba09e92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

