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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJBQOW4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBdLDk%2FtE4JTdO96UrToeClAZeQgswc%2BaMyoGqBwIK2AiEAzpJGdD3m8QbwMYvudM3e%2BXlTpcOvL9A9I7TnppoyfTkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKThpe3cpjbcMWho0SrcA6V5fyntu7czJDpDYUwmOXmXxRkVc2%2BEJV4w55gBIk6d%2FMyjqEmBYf3g2CRvbH0l6kkVq8ZB6dabG%2F8vTyDjTj7rZVIYxybW0qGshid5YwjLJ6Z4IGRtJBNF0SAJjitiROmiW4VDTa%2Bvd280M%2Bx3%2FdmuEC%2BniX%2Ba66D0TESmwVYfinydmtY339m0us3SEirNC3%2FfD0ZSDfHy8M5HNoMJK31UdBdlrO%2F94SoWhMQP8uN7b9IAXdqagRtneLFeCIqMucXTqUKMCeIWfJqblTBoV0LhlZk9LSI7C9vbqi9UGz3adEIM4rKAV%2BOPclljdy4NPK7odPPeWo%2FceeE2LPUXmQ1o2m04tCMa3m%2FDH39CMz5RY%2BplcvyLH9AJsf9MwPWtxhMolh4KVEp4dJ%2BQEsmV0XDM0c9f%2Fty7y%2BFSYFXBjLNQuQPakeXEVlR6cDG5GPuHeoYua4epa34klf6%2F%2F9gJzu%2B%2FRuh%2FpzlrpKFjCyiGigtg6Rt%2FklFcS9PC8x%2BkBj6Y9O8yPv1Keic2q46mxJo6fe%2FpRIQ5ywnnL%2Bz%2BRmF7nY%2BWQKOWhYYMg52nTnHACqJ71AutVYgdkIBicZcc%2FoMhegyxIl1JHdN4n9k4l6arlVhkyKBOAYgjkAltQAzxMODt2ckGOqUBGi%2BhDC0%2FQq9Elv27tKaqplksmy47ohZSGCC%2FMvjNCtb9tWCKIF7Vf0CTkDpKdlDvughQQ7r%2BSnC%2FQOSrtRn16bFeHJWFwwDvJLFoY3BRdtVd3Z9lUL15ufd9KnoKF1yjydvCPu5xP5Z8a5EC2va7vhTO%2BqbOCGVxHebeOv%2BdzKyvJwsR4M%2B4BOrRMSm7JHsLWQ%2FKldnMKm%2Fq4ZBkpG88j9JECz25&X-Amz-Signature=7cc75ab9e884516c53f388352092243cbbaeff80bf6c0cc6b468093fa9510fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

