---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDZEMI3R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhGbrQ%2FN6rWQhmyAj5tEcv4nkD7%2BwdCtYTga%2ByPxU0%2FQIhAM6iW1A4mTVQjwzaGHv1eT2kRxEIH6d80350qgdVZTufKv8DCEkQABoMNjM3NDIzMTgzODA1Igyyiy9NNZfOaedgwEsq3APECmRJLCq2fYXGev0cC1dADDkRJB1fBgU5BLtciYg4mDEgSHRB9CbU5XN%2Bzyd8s%2FqQOKFmpwE29GyENeJnQd%2FjwSjWeGHEX0SiI6tS1BZiCZdn36cLDC6WjyhTU4nmzbzzeXw6oUsRUEdLZOLMOUqYQT616LXNiuh1s5CPp70Q25MzG6cmqmtvhwRAlNegecIOmpHfWpudSmDqydy9y98fkNHFMg%2FzSpmroKnJ4HDFpifPIuV4qStLDzdUA7Q64geJPHJomeLQ%2BOUwj0mJQChgiJYSFebvvMOGyolqeuupa2qtbZdvTbY9r%2BtlHi0pVmBT6gc6V71AgB8%2BkMkN%2F7ALirCbG2AZ2FH2M6E%2BPpLjVH4AAqpE4ix46ndWsQxhRx2sCy1f%2BBcMjicced8hTmvO2Nq7qZtHVamp%2BHlRCJmISu1DudiJkPssWt1N4BlUAMy8gV%2BzctGhM3VRAY3%2F7Ns8tsq5yiM%2FAW%2BLT1f86G3Sg5zc48%2BY%2FdFs7Ay7zKNU2pKHkCgwVnDcc1OYjlG1EiD%2FDtZax7Z5XVTrsIlH3mdR3Nr25O3bvBpI4NDYk3r%2F%2BylbZq50oe7YsJTQNjmgsCbz7y%2Bld41d2Pn3Lr8nEEnSaRQ0qIdqHlP%2B6Xb70TC63MbJBjqkAbT5CezRyAxWnNELMJIz1pHwvNZ2mLYjuy4tU5RfKm5D4zxOM8U8rPm%2Fl73WOMeQ0oxHUeUhx9w9EVcro0fnV2ikaFmjuZdPmOgfhi2P7A6Y%2FQ6%2FHBMDQDRym8x0AFKqDE7alhA1XpammLTbWvJOWmycKIv1dnu7QLKmZ1Rinx%2FYlEd4EJY8SueCGCQkyQ7F0j%2BbNM%2FBjdm8s5K%2BKRKAZQxaO1aC&X-Amz-Signature=3d2da935e88022eaf075a49522fa7e125c44bec7962de213c98cb93b8f312608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

