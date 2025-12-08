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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW5OLZ4A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgjxNlR8REVrEGyBXPAacq7OWu5%2FOV9TJhN2b2O5MaHwIgbI%2BrONpcc1rvtPbGkGVrRO%2FbB9OuG62unzp1hcFWxokqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPekVXienVQbRaSVXSrcA6GbsWoxCASPuifrTNW%2FgBzIh76JAr3mfTnGA5Fspxr4Csb39uSSUXmAQWDLKCNxCpgK7%2FdW%2F1Ade2oRCZ4DN6EvwxBJjog4H%2FoZGckXT0UiU3E784RZ5LjIXD1D1sYj%2FZxCc%2BLuu5MkKSc6PMyP%2Bu%2BGYNgreTH8akoBkzHl7X5ePZC74%2BZoebqDcK3ke%2Ff%2BhvfErgavDxm38WfvbyYKsvs8obfI%2BGG%2BirCy7kvVXffpdFGq4bEeGYhtwWtYSzXDl1TcbUw1VZi1AXWvZKRnxl4yA5MgdX93YFrwvbjhlHXXhj09Cax9gzvhrpUNj%2BLYi5CKNzUSYrJA5b3unODxVzM1%2FfhLer4yYUl1RtkTScp46miLHCIj1PYm5XjKgOY02gJeqeqL8NAw%2BxlDVbN5IhIIm0ggGqEYBdcid3tzrRFZ%2F0eaMqvzZA4nOrob%2FPkYPfDRoXqUVwokKPxh9DkdotQ4IocYOd8vlNGrKOesXja8ElYI7r%2F%2FQz0gvmxtiDgvgDe6XFQBfiQKSB0gxRMG1ueuOz0qO3S4Bf2A465%2Bd9O6MTpYiMe2ffuJ2zOO5TQr1tpwGqeu4aS4KP0wL%2BjaK5QIrTS8oMOporoatUK0CRmXSb9nX1fdET%2BRyn9HMNqz3MkGOqUB0hOFOcR0hX6llEIetw%2B6RHBBnzUs%2BWDX%2FR5fx28eeDF7dQvBK%2FONGbgzPuASu3QqQ1hdh6qo60qpvA7FEBpb75YuqiW%2FXeRQ2oqUImIJNzm4wbNsggNh4bqtcRDkO2kuPZbaQJxbF%2FYczokdVF9d2bYFowuXoI6ciYlUscI%2BZYOT%2F2l363wcnh9B3RzlAwuoddS7XbPZsl3WEelhsKqNEVO9PB72&X-Amz-Signature=ff713e2348f88a38e17036efeb410b76f0eb7ab980d0421920e5213aa510a848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

