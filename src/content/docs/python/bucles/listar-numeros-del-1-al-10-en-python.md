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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEVXHZFG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ%2FP3JS6Fc%2BG8WoB5UAjDOs5F9qvV22NKuSHM1QLNsEAIgS9zk2u4TdYAo8dV9n3k0l%2BQNpB8lqZ1w8qWgkeA4aHYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDDvSKuRYzmOOf50meircA8YU2ly1cUMAZk%2FEMEMfjEyBI8sOBTLvK%2BMiPBgb%2BK9FFvGfwGuqR%2Fv6FQ5lN7qCmQSFXIp8041T2JnsnHjyhoOUqLfGAVTbZrGiL%2FC9cMiuA0MrLL2UnihJxpn11kRGrZyUyVfzDOTqU7k77oolrD%2F7ZuuhP%2FfOOwo4t%2BzPRo0mubHILl8medriri15y36Xy%2Frdalt8%2Bx2OVBij7xN%2BId8P%2FSgiXKunYDKnznOXPNU%2Bd%2BspJ51Iqm7HNxCIKBmZwGpSYz1%2FgNhN9hxea3RAv%2FJNHF6FVwX1UtKulJTn0usDJQGjyRQIKoE9pA7lly58GRnMzA1eU4bgOKUp8DX1traX3L%2FKAacNmA3Jtuhg6TsJdY0Yd0BBc2HevfpmAo3pk%2F2O9IHntiwaQm8TUBdEazc2CdHc0uIdnLwDLHeICC69b5TpV%2Fdhuhsak547nOf37rv1HfuyXX7t6WJZ%2BcGyeT%2FrZUESYga3fo%2BNYlzkmjXr9oFEfqSvLRT0rtg58WvD0VbITVsHiy3oz3Gw7RiYHx9%2FWlxGfD15%2BkjXTu1woR1L%2FMIkZ8D2ca7uNnOd2%2FJm6uDezZijVVefXE8716F3jemAAM4%2FuDoM3u9Q4a81ayCPp2rlfkBLtaMIXiZkMIvT0skGOqUBDUbPG%2Bmu4UXFlKz8v17q3AM0929mWNQmtv2sJXjqw9IaSrDHY10Ds5BIFYNzSmmiF5huK%2BitKQ5ck66NEOQlKWoRGQFrgSE3Ao3KnN5%2BX4OcZQplBKrHYFVzQ6%2Ft4MKl5j0ItsuZDhwA6jfKsM2UBhhS56P1D%2BqNOVs%2FeIaLLFj0VgFYLE7U%2FzqLQ%2Bcyh%2FEGWEEv1HbdTn0jpHvHGuxo5sPErrKv&X-Amz-Signature=fbb9327043dc6dc7a6660c71e8707985e1f874dfe75c2bd4c8cc8262108401f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

