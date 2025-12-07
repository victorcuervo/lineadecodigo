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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5XL7UC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T045823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDG1ItvAxKgxsxXApiw%2FSrZg94A0DTphedjMOB9fw0HVAiEA8SeLjLfomDhZz%2FsXiRRxSf1E9wI%2BPExSKxWmq49xzKYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMochXofU4rvix%2B4MCrcA1KaoibIVFuvRcsUiALdSpHN4jpqE8CIntEivz%2BtgRiedbehSvZf0ZBi82InDjY76ZJvgpphsZ6HDfMVyRz%2B4K8YvnWgIfTOzSVEAJiEJSI4B%2B0SbQP%2BkCMFF1Q3p3oby8AEGfhQqIdl4BqlrEh3odmSVEnUwYRGlwj9ULeo4wetHu2nF60Ir9X4AZHv2wzj8MzbveX8MqCMfeLaWEcBV%2F%2FF65OfLFJjY6HP3vCgfnS9zyjHFoxiqun3O5gOAzEkuyaa8DyxJ3k%2FAP7%2FjgCo7cYaGFc47wDiBsMtdJnmxbKzESa4uDvqH9qKokAojHeDkjI16le26XRnOxgdYanrLbGCkKnNcOhI9ORcRDmK8EMACSjyST0ObXmihG69Q3fh%2B9tk8TovPBR%2Fny1gGVy9PjVB%2FHsUvAWses1d1%2BFCpAwTFPg%2BOhb%2BemaYMBaD%2FMVtgrSRNTDfj7tKctXIMiYj0mA%2BepT8CUUEmhdvtxT7C1sUCqAE4hBPuE%2Bpcr7XNd16lZRt5kNirZy8yAe99C20jJF5ss5O0STPOu0ilBsPlY8F8xQZB6Ij67N4LQQmShEL7ngNHcsRzIfz5e2nVl4AJ0wnWqPS59Uxgd3YDrU21L%2FODxIn1FmXlT%2BiAz3tML%2F90skGOqUBmeU1ccYB5gakIPVZdhHoqkzL81l08A%2BXTG7NVHpHD%2F5NYwBuAdHEYzQv69e51KKav0vEG3ACS0nej0CchOuH1ZA%2BgoRcbY3gMrwkNx9kyatVYW2Juj%2FCYAoOHamF0FOPxT%2BWjwp%2BybGjruHJlS%2B7NsBm2fFr8X7Ukma3WbD9vv6QvfnWKovfbCzEE4J0n4Eg7GsREknoKGhv%2Fww9QSjAaFowXQCV&X-Amz-Signature=1953915fa1fc3036f0a33c1d90d93a3a8bfe71082e7847437ea282eb23da538a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

