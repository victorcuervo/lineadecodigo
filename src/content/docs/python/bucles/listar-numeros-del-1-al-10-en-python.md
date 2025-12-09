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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE2BDYF5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0otqMf1f9mKSAkwuO%2FIFjmj111NcCORJqlsBfkRpvngIgf1ieRRURpH2732I1QMOGJRG0%2F4iui0WI3jRKphzrra8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9YpwZS%2BqXCNrhN6yrcA%2FOjTkyeJP1FU87r8q5zuIbsUIdOtQdqzF64RWpy1cJqTszeigl15%2BcK36UUi1mIN6qx03Uffsd%2BL%2F%2FdZ9RlLhXLm1uFS14N0uuiqScM9LNP%2Fr0bsPKc%2FKMUd3D2I2Drws8VknP7IZ2BCgf1t4ygpNE5D9RkaajBnQmLlYEx6zMroxcMt3xjbGVA5btV%2FfotnGnC8UCE17q6JPjcbUv1tJpPg29iDxNVZ%2B5EiXmSSfzvPm8PRruWWx5iFebEuxYxx4%2BpMq9V5U%2BU3f%2FEJGk8AYTagt9EQhtABmJIAJDzPqkzEewSBIeHbkWQkm7e2yXxe5QBo8myULpmA1T25pqviRA6%2BsR3zuNV8cHljj12LLvvPMFJ5KZhX4Vkjtb1twKaWjsXQ9JC8B0nDvL58Wsbb8sdA%2BC5gbObCWAX%2FDjB7bz3YmaaBKUuVRglNGBIcjWFQ5LIZL1F9y%2FTmXaA2NVNMW2mbpwvikrBrZJXaLa5LKQ2WWFqBjxZFqSvWxh4Ic7eMlSmN5ezxgwrky7SbOa3iWZX%2BMb9IbBkB0fjIz6UFtk0baP0eDmHntQD7DWc4LS35qGhBSV%2FzntZ7WVck9dJDTR9TVTCCTJ0%2B328ZiByU9DVtJ6wNVN30cW74y5kMIiP3skGOqUBPADsJr7ERSnxVa7P2Tlyiz%2F7aVAbNxw%2FPelJVZf5Pi%2F12%2F88ztU%2FT0qyfFC3rMdQu36zRR%2BLg4xYgAVm2%2BDVftwP7sU5Epbdj5TgXx%2BFQMajHI1I161xZth0ROvoBs%2BlybZRRokbNL1wY8RTK4dSH0m1pqNZfPbcZNtdmxrUz%2FLNRjkZXt2gp7pTNvXXiFjsyUP1oeRMqM0AoUkoDh%2BCnE2MIEun&X-Amz-Signature=b6c37ca27481ffc1a202c2b7a6f46c436307daf27bf52f70b700944dd07dba18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

