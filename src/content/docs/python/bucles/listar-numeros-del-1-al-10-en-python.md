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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBKU5RF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH1XR5Y%2Fclb4FOXNpzwZ76fItSedqL8SI6f6aEBXEIuwIgBZlpJ4P81eOezeVAykVDIC6cZmwstGMv7MaZXmH2mnkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLyJO%2B5hy1IcsMsjLSrcA1PykXQL4DyaWU4%2B5GsPS26TJG%2BS73x%2BUmQxx1FwAiXulnxOagXnecy1qZwzuiBlaWLPD%2B8g6xMhrTJFAxQOE%2B8co%2B5I%2BaFBz4%2Fxo0obW6wPDI1imGi8RDGjnkWbfnP7Ho20mmOcRpETqC7GvOaEHKr%2BpaqLsbKsW06aMdGnDxwp1iq46Ncr%2FNIMaFuibsRW76sdtXUFqavsGI5m0ZsifKbHagKNCV2LV8dNkHpNaP6Q8wrADV4cRnXuWZWJ7P97Pw3gcKt0dcm9JUB%2FS2m4J11%2Bh7%2B9UsTMXVxYsmiP0CnwQnDY3qcPM4RbkKkdZ8VnEVy%2FhCnuAw0k40oGCrtjTmAht%2BZZ4TAUjuMRsaU9ilLRRy0oFj15F5LqDY3ZiyPIKmGVdhhDWRdK1WWARaBBvjM%2BoDAr2KcVFx3er6ej0rxRwIYC%2B6p5ftj6wXVDj54wxUHomN8aMKQ8GcIU5oh%2FDjFrBE5LJmGhILdUmVgLVOpOwWd7NCI3HDJuDThXy6AKEnEgkYCLffY596UUi7TKYl%2BllqC8MJnVf9229am0odbgVlWpdbwA9l%2Bv0xqLx5ARUwwaLFTGO%2FApV39uQsNYU3VIWYBH5x4YyLvzBMxQ3R%2Fwoi47SsROpWA%2FsDpqMMLG0ckGOqUBODD1Obq3If31iNKScafHmsu9hFfqF4voOlSoZTEmNZiN9fGfiaYObw%2B7UM8ENhOYNrm8ITtU2qtzzDy0lful8CFQRYatPFcyHElLb8qd2jL2u5lmcutgMLTI4Yzwb4vzpl9NHiuX%2BSMCihMwJr1BAvYet4CZeAyg9x3FvJBQ%2FIqm4QVXjDkdJ%2Fw34g1ieSu0nfyTO6cRGGRWDrY%2Bw2OOaidTHU1b&X-Amz-Signature=d2c7577a1fa93d2931788b70442a0eb32fc2ea78eaba99167d198df1d2f576d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

