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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZSWP2FY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDr9rdfV3WOsQKH%2B4DygFIw6GF7O2vNhDNfXZaKLvkc9wIhAMkVn4kjmLy7ol4EELwePhvr8n%2BxFibxBvYlpj4jlCamKv8DCD8QABoMNjM3NDIzMTgzODA1IgzCwX2LSBPIk6eLB54q3ANWb%2FfB9A1qSegKU6JgDoDizz9iE3Tk4hyk1uw11wMygLkpaCPla3wUuiq6gyfzq60xgVWmPStg%2F32ZM5%2FrotD2edH4UxH3BlMokvCv1XdREFrP4YDy5jVOBMGBWMIOblor7Hh1R3Gv8WxD5MTWOpYKjkZETsflxq%2FslS4q2r1R%2FuY6EbbH53WzxMKoGlp3OFRXVK8tscDUvQvC9TwvEGMfVny9%2B91%2BV0hRb%2FqfsK49pMWIBh5rps%2FJp630aSUyKhpkvIDPvaM12HhTNTa16bNXfq%2B6sBzygg332RbGypWj9nO8VtUo67VwT3aPrpvkFToB4XBUVrY4VTLs7y7Y4FjQEeFKl7QyhP6PFtxrhCpumPpgvZ%2F7voW51t2B9fq07%2FLW1JoaGSxDbayASYQIrzI5yKsF%2Fycp8KeusQCZn%2Fs4OoqS0%2FEUbBQjq1MKCs0y%2BGoYxnwF29i4NE9BfCw4MjitAJYfJ7Y5Gi7xFSX2q23V6hXdr6iKugjEqgSqsCObHRBKX1GNbUGGl19M2ODXQ6PyVGu1zK5xAcEPXVkFV%2BjZXunYxDUYVwodIOf%2Fviw8%2BP%2F7ZhFKUtXuNQWhOIRWg8OgFOMXx9X21UZV3kcW%2BOZyxfwjWkjjTSXeD9Xw2zDzysTJBjqkAYhlkZr3EGivotyogAg6L1qxQSE6jHl9va2SpwuQlaHIire2GKWbIUjhkuaCEMLkTl0Xq6KYgYb9b9i0puKZeo0yYSCV%2BULlQ6C%2BPbj6Y%2FcJfJJdVpANNdUnGYqaxx83MafC1u0iJtbF8czSQhYgq8Vcj%2F%2FoGnKsxeEDsouhaSqpTat%2Fdcr3AvHHACjd0lL55TBorL1bTQyO23IzzTh5Q1rX5%2FQ%2F&X-Amz-Signature=6a15f3436f05d58353c326add6beb3ba0920bb080173032a6361a39a4085c675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

