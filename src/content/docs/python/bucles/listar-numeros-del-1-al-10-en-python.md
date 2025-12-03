---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMAFKET%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGJd7ONIImq95AfZmz5X74OrSiu38w6NsxYzrZMv1NZNAiEAtXu4gEt3GZirMoxDPrsSNpBq9GooiYri5e%2B7PiicLOYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFXU4Uj4Nj96fJ4SrSrcA%2BvtTe6Gjn5Mik0Rw9z50xwSEVNvOXJbDNJP%2BW3WjAHyowaYmhLWLG6FT5pkbNa4l4BWxlSOQhh1q236EHElPmYK6NJsv3hLMHrHUY8iKE3CLtQghfOIVMsELz%2F%2F9KetWs%2BMDk7y3CNeOmL6h82j8avFGFRec0U3JDnC8VBLt0540Sc%2ByKNlBiLmQnn8pOtOGMBJCDtohr6zmwyY%2BrowzR1DgCgHXRQQrXIf9EU%2FcCk65PlRJZOi2yH5y%2B0GuYZvS9HNGmIaPuv1D2hK27xgIYKc5eha4V6W8qB7GRP7orv13kp0b%2FmYhx4zMzCdLFnO%2FfXrrbG3SEXlG7qa33V0vh9VAxzaNQOmvNekNiFwYlKefWsFc3MChBoM%2B5qtK%2F5neX%2BEbl3cZB93FI4fgq5lxV3%2FOr9IlKXrhDWrx5iUwRd%2FOxOcEd4z09hul79ojpF%2BYyFEi43NtVasUOh3aNbSyrSXM8VxzzePPRAvUhNJvFpru%2B5Uju2Akgd3oNf7YIzSZgVibHGattmsNgczPTn46cEgYOA7gFdMfdm96MV3DcEZR7KgF2%2FDYGz%2BQ%2FEu6t%2FY9FVA4tvGJTBgEHE6KmTI2PHWtvoXHoK26oojl8T6P%2Fhib6o%2Bbd5pDt9kE47xMJ6RwskGOqUBo8ILiNxQ9ZwawaSh2Nbmp0qsW%2BIFuhCUcsIMBcHDCqcYOODihMPbnjvGZaNNoQPYHHNtDOfEdw19e6oreG9hKfJgFmAiZZnwIaxdRqiEaykaCDTZYO54hu0nNUQmmZ1bVX6%2B0X3m2h2NrEK%2BGIGMpgJsuehYvOLG4%2FOd9r8oVymNr6q5TTSmGkayDLPpQtQ1%2FHS9SdRrCVRH6RyIoVqe6mTvNfJ%2F&X-Amz-Signature=778c756fd6e91448da30b24bc1bbd05875e0f90308bc4e430bc6cc9c5f2c67eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

