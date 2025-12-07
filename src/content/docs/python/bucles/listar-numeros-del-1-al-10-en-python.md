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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GE66EB5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8WlKhDqPaT7Usb3YZYSITj7swXpslgr4vEoVNU9%2FYaAiBMm5ndv06UliSl7f86MTyjfOCFNU2BAMuXU%2FmX76y8liqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcTROIAiq5678%2FKk5KtwDc4CHOwUpWuTdRbEyCH5u5HPHr33uXZ%2FlJx80DccNHhVbtqVzz1cZxTNxsfbYcHiS4VbPXnsRzAcdLUp731UTx9yyjoQi7se7PkXyx6Tx2TZGZoz01%2FRAFu8zYcmku%2Fhp5K1JinhaZ4OUU2Oo7Fqef6zO2RI78iUeH4I%2BPs%2F%2BbqHbrnGgH6qUyXgTrVb7W0YJhA3%2FPqXFgMcqWKhHOq19B5%2B%2Fh9BDbFUvwCmfG033ledGi87isneBvSwkO%2BXozmUz45mVkPkhJmIkE2ajYE5hOy4NZ8ozKgk%2FCKRPaHQNTtrSeC4o2vX6%2FCAoGwJcBf%2FRqJhBA98cWZ9Tk8yMJbceuPURJaiTAr9nIVU4%2BcG1bPYZ0Ppgj%2BJWf3P4UgGuSVi%2Btbro2u6cfxhv3Wj63gQpcCxJqxf7WpAg2m7RMJ7C%2ByzWlib%2FOAng6uO1MKM7spjI5rZdzaDVAKjBM2XAVlFCXmehx9ZpLo4OIGtMz8QiP6C53RSMPmjYe4MY1w6o3sWtCwUP7Q6x26lhsVhC%2FQQldcvfe0%2FpE9PPhpK6%2FVU6L%2FxDoa7jU%2Br4vILBkk5mv3GXcCI9PiUXiuwYh%2F%2Bctlutqbp%2BREJAow48l3YdiQA%2FcUtLizh%2FR2r6Ujj1syYww%2F3SyQY6pgHLh5yNvRhGZCfAdRAu8UJIgwXStTtgw482p0YU4qDluQ7eVaC3Mnv8LVTm2Jhs%2F8cGUuyU%2FH%2FBLVsJwhlTNmWvQX7Djvtv%2BFAUTjiz9JEkiGerEuk073MEOsaxk9SFPE1K6jv55nVbsQn3JxLA44kNF6KhHpY9y0nEaP8OAhCpGJQBKWGKvyNms3MapWCe3bTRT6QIqHZzGv5QOdtqKArPIrtLbr4w&X-Amz-Signature=8063bfa46e384dedc70d6fc1b5d9d3c69fbf4acf0aafbb385c60da7d37fbd93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

