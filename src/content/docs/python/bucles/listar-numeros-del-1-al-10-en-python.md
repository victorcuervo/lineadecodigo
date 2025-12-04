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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHOZXBC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFWLMS7ll3aI1UUaPKjpEVmXRFxui9%2BsOq0C63h47LdIAiEAmSs5h9fxqQlFXSm5G%2B2lAV40Y7ddUUxzUIw84ZnC1w0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOWs10p7YdOvaRnX%2ByrcA6LWuPKBiT%2B5hHscN97dFNEs3jI2inUkXunFldxCk4oEvESHEQl4wKw1EKliCUz9pPwRdIjK4TmA7z3VwMmCDWPg3O9FSY6Ztk5p%2Fr%2FgPb9ntN2XRCSf60u%2Bvfm1LEBA3PRq672zlpJ9qdrkveikv%2FqwscgoD5r0zkZtwXXM15wjfqY39nqpkzmND30%2Bk1GZCUxU52TgPcgvQLPY812GRDG42M%2FTZrC2zSJxMnz%2BvkIMN1GXjAMYruUQ%2FAab17wEb8zAS5ZNgCczBvrkQ4OqQzmBRij9AmxxVVbjCp8r%2F65S3l%2B0izJS1xaz0XzrST2G4O4jeG9vTN983tiUMfQRWV8bzzgVx%2FoXROzs%2Bua%2Fl%2Fd4B%2B%2FJRmWwA%2FIaP%2FqX7GfnTF3qM8IJ7srMQjsJqKJ%2FQjjBDWpoU73z2FGQ9q%2FfwxG7oCkm5xsDFt%2BYvX90yCa6S%2BNlab10svbe8aiWmCdDVMuuFBvBnv685I1oHgjHrTK3BndZDbFGD%2F9u%2B5YMb8epC098sY0V6RHSqQYXgJNkQjrXmKS1K4JS051WMILelGJwmJ2QKuLSQBC6BrJxcLOoHExv6xlF1s5prb7OPFWgXadVYF%2BWwWQmDD1ybR7x35U49rLbWRMZhk86OWpPMLHnxMkGOqUBQ6RNnaxjzZ1UXgfFwyq8STOj5gr7isCg9BAeZ3ihJGUOyVRAecans101Vb4QdV01QcAZK0nv4mUu%2FaciO2ISPi32fcMv8uRDe%2FXBDTn0flNcpO2vl3qk8nDRa1bmsXJPavwb94pJ9i6F3BmUVltgxNI74yGMghq61VJL4JQgcAI1DIzNV30GF7zOQAXJ0MANFVCPXFejY8PXYRE87n6LmUPooBYN&X-Amz-Signature=b9d4ac8d72e260a43c3a9a72c65c6a40711370a36efd563d98e1886a804d9f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

