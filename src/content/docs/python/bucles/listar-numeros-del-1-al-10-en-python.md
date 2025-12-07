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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YSKQBAN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOdRiPi5q5TUdXZWb9z6s2oV4kxb1AH8eaqej81lHh%2BQIgcTzpRwhEZAnz6mUuu5HeL0KCESAY3MHjeyK53ej6Z7sqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfR9%2F91%2B9rJjf60tSrcA0G7SZlWnq7Rp3iTKDIKwz4fToQCsrbNqlvYd6Ru5iA5Xm5UKoa494lnNYEE6CnqICIiM7vzpPHXS7nEs9epxV95aUDKvwXAXfzTJOvx95daS1%2F%2BbSBodAPF%2FNHboytOwq3MEczER8y2DF1gfUS%2F7XfLFxAj%2FQ8%2BCM5V4y08%2Br5mmfWRB7ohHz7uicUW%2BmcHC5T6IdlVdi7rj9R2Vpn%2Beioiq%2FQG6dgAk1r914kSRvHCnULf7E23a6SDg9raCxLKQEJgvdUa8KaKpnZtM2IgbR5KfgGNd6kZ%2B3QhbDDXmHAyssgOySALno24znPk%2Fw3rsFcxf0eTo4WmMI4Eqd2XvMzltaFKgMRoONhG5GcwKkwo9f5fucPOD7b1vyXE2MDXEYLY%2FAsfawh5hS%2BG5zN%2FpXknIq%2BvrXZuIgsNUOExzcDSD5M1CGC3WlJ4wgP47J95hRKTKfV%2F%2FqlHIHCeXt8t%2BZoLdA%2Bh%2FGFc10Ru4gTw0sPZPQSuQjms9f4wh%2FaI7gRoJwPHvOFfPxUYdAwGp5SSGg9Z6zz3vrpTbTj1gD2VDj3GMXfBQoKs7NTf5dKuc0Tm6kqRoH%2BpkOtsNsMDzBufv%2FSDruX4qbTfC4yVD8xfw%2F11caUN0Xnn7dkbBBWbML2a1ckGOqUBfT5DyCX3eOtxI1QGY5alHBE6pFZv%2F2DmhETt3Ps6%2F3hyYRiLaJ8eOCwlQPuXWUU4XDurXlZ0AYrqvJpX3ozq8BNAszwrRmO9QBNHHv%2Fp75O28UD3CgkFkDOslo6Jg%2BxkmNn0PBj4I6LZwcKDOMw%2FEvoTUxcaxrqK7MbWtpTiJAPKUswYELSjdWFTTerax8fmTMWxbKrAVmUxXaME4R%2Fi%2FWxU%2BCEi&X-Amz-Signature=d90cfd60713757efae4fb0ab0d1d8be4af57588e691f2b1283757438f3a8c70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

