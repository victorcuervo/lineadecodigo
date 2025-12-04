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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOQHEU6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIHpiFI7vqGzCu%2FnPdZbgK%2BFzRD%2F7l2ZQtdY2uzypbGGZAiEAspwnr6IFp11b4BHgtnNgFycDdejj9De7n17xqC%2Fla38q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCVuHKCHMdW5dLKvYircA2XJBR1qAx1BeiHNreHAVOQsiowp%2BOU%2FCDd3MlBUXRfyeo5VIIbHXnLT5G8C4FMkifROIE7bMxi4yC3El%2FFfz%2FoEdUJDSjW3lUgQSd86J7OkguxfewJiqKiul9o1b8%2FBCyvyct%2Bul6ZEseBCwCBXetWhcrEowdxsxlWoCWgNXaps2A03zsNtYA2zSby3uSZUNc%2Faycn1edJaCTK8JU%2FhiGuVWDxdot5RXQfL2V0hj3fJGTcOnszh3ax6nbzgKnZTPCerpRS2b9Nhfyc4BkohAihgzgRAF7eaPZwhr5yPdz5BIAlMzQzKGUkw25hzalx0K6WjjUagkSSbssyN1SNab0Rs3Z6kLsI7MYcWDznBK01%2Bqc1FvXZmouT%2F14tVvzsrCpu0%2FuTiaiG%2BqcTsCCiNceS5v2dKLpT89KedfEyM2lv9G4DBVgS5Iai05PzO3bj1FBE82%2FOmn8qyJQ0ubL73xSoIaS4z7u0mEQKIFg4mB6nD7IGeXqdzpTwkzfTOZMWAVL7bX63wxNENwCNnaAxGx4%2FQ3rg%2F9FY48F4wquLN8z5HnJNREFOFh59syN42zuCRS7NxvjfvLMw3A8V0h7Ey%2BEYiGalI%2FblDDMZZuLfajo479rq%2BsLLxEEJwI1cRMOytxMkGOqUBsI7cArxEEjOZxzYIfaNNexpki9%2BRLgKkaRkllCWnRB5pQg9JQ6d5z7b%2FS3KD6aX9igSdYhzM2ShHf9DMeCON2MJFvFtgALyUOu60WshBNbcfXE5LjqEupEaCrAmitrV7mYhnHP015QCp8fJJRGyq%2BWQoLinPVqrwzblWXh5mp1KzTBXGKZ0Jh9Av85O8oxb9piGuCe88KgNECzd%2BT65Fdre6N5qa&X-Amz-Signature=31350463c0802501bf43722bbf610ccfaf66df4a510d3d7fe12fc30213d160f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

