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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQPQ3XT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD9kzGpIVbc%2BofcKJvld2JS0Wu%2BoWr5BcSrepjbpFBO4QIhAKmASUw%2BRACXNM5%2Fl2MxOuAxtYnsb89ogu8Tign%2BM3cUKv8DCD0QABoMNjM3NDIzMTgzODA1IgxuGYcnuVypEOQKS20q3APEj07gxc6WPxA81GXm1faMiPl0q0KnFfSJjfi%2FjpTNVlfBLQUOJcDtwq8yGCEPJ0%2BUYuu5v9gUvLU2GFiCM3O%2Bx%2B4QIoBJfLKw2BI%2BUHEX86XZM20zfRZEttSCDZqSO4FkkrXwhJsp%2FjYkGEUDUSYMdReIr8rFODzrb9gyJRCKfJTAug8%2BAioJBj8SdoUXgBwm6FXF1zAsuOsI8ZY78Bk7wZ9m49XnidrKV4fLYY1Fr17mrB9xlf6ONIUDTKLUthSqf%2FVu39TZT27dekbKF63SS9O0v45Qe8s5UHSptkJ%2FUdThyqIHRORuKuE9%2FC5AjsBKDNOL2%2BB%2BVitqSv0asIudngwm%2Fifvmeo1H0XosptYPLHiAvQrbRWc0TjTppQONzrxAJ7VnK7ng%2Bjq71jC6z85PFVUauHBG2aIK3afsTaeb1wijrC1qoTyrxqmdQbc8NWSV%2BCVy0CE6Zt8%2FjZofLSXhbaI83TykU9m6K92D8F3XUvrgB8pe93RM9OP3VU3FO1JLwlA6gcU91gpyAhOzPz8We3Nh00TqiWH3KeYN2d7P%2Fns65SLBYTpPKGLPEKqpC87HyVz5xiCwRoe608vzlw9iqf%2BCt0jpuu3e6HlSg0soY%2BI66uZwrIsL5kIqTCpkMTJBjqkARofUk8oa0qyB4RqN%2ByuPwGwTEjSwSFvVDFy%2B1gI2oCny8jy2fhB3HYpt%2B1iTyZBz4544rSHFgr1xefN3EpWocJnYfr25cGtKbSpCRBe7luSAUpxuH3R9BiH%2BcLeH2XvDHgN52Vx6yJ0z5aLhjm4o8NGM1w2IG2Fb3gks9tl3FF3QZx0jlBE0ax%2BNoRptUV%2B2eXs%2FE1N5GL5DDSDqfq3aPOJRVx8&X-Amz-Signature=dddd11fdda3f05776aa14b669af6314ec3f0b95b6383e64f9a06bb0192832b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

