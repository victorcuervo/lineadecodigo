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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKXLY7V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcMQKRCPT7pl%2FityWOtqUbgLOi0ECJ%2Fg1OebK27HXsYAIhAN0PXmg%2B2rbcu9tUTqW5o34iyD%2FKdVcSFeRbcgk2RPTcKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnEutJwqJyurhYxgoq3AP%2FDpoonLbu40%2Bqv6o8mz3BPD7lKQ%2F2jII4FA62%2FMxQ4lIH5i%2BESGqF2hBhTBTPdJPTqCZk7IqXlxStglcldWX8%2FU2%2FH46THXiVArULIFJFdJ1sCy9QnbRXk9U7Hcx%2FXOZ7DCCDU4PXYA3mURUa7Ykchd%2Bn%2BwoOF5LhVHEEVGU4Vv2QQA0i6hal2eKDNiLOpAiUCGa%2Fn3902QtbxC9Qg4flZuQl1oXnuKnv7cWli%2BqIZ71xcyEhARiStdp6VsIzlH7TTgiz9rJCTkhJFPq1TJnuETK8Z1ATS8PRVtDmD7zckzyJQ6rxCvFOxfcrYyehkh7IZRePy%2Fd0mOxHu7rDz0CBlQJOx1hwdljszmSqX%2F6fOX9yF%2FgTPK7Mcsde%2FQUAghrR5N7wy9mMI3N4K02PDhdZM%2B9DxvhokEsV1TEY0pMa057v2Ag815cdfCjA01%2B%2BiXX6tyWqoAxE1MoYKXg0pRtYSeVTwaJDbRZ9pQwiqQ8oswY72zGgTsD4r0lCFW6cXrVrICnpRPa85g175tRTSiXSWYWe%2BG8a9m6a1zhDra5PR3Z%2Bqfl0E0IH%2FJS0GJE9flYiP5IL38S984KTYvW9Q%2FGNtyMZjPP9AuY5iDeBTEO9t%2BIO9CjlYHGmcJAoJzDqo9TJBjqkAbv7N6m9ozcO62o%2BbJdfZCv6g8%2BCaG%2F0IQcvQRgQ2V8rukRRwhdpKtS9W9irKLjJLDNbtLkQhoWc310EIBmjfl4DdioI1%2F9AM7MoNvBoKWc4pSiQscYXODkIVFhwGwX5eroM3GcSw3TMgSF%2FhmuSfeRt6ucBuEBbZZOYnsoatUZXoNKgEsgo3iaPPIGrKorYKOPAouXBFKeJvL0ry6HRMze4Tdq9&X-Amz-Signature=536f334fdb350ae142a4b8269ea232fc3e32a20a5cd7a7d7c1a49702c25d103e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

