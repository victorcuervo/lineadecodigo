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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQOQEW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEGDVSHZstYGPUw2EJOF4XGyqo6vOZd%2FJZ4ISa3dFCCkAiEA2fII3hQsOfIrqVRM93UJdb22xeersaEbBG31O%2B%2BKunEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEu99N2jWTf4%2Fq0h%2FyrcA%2BVfkYi0yAZ2pd%2FonE2DmWKNQuXM8DWBuMyHiyWi1IPqgYfo7bJajkJm7LX2jzNBhU3hbWuq3wkvZHHCmVM6lHplYaZ8dtt7D5kzfp4SMUc1ZjxfoW6iiXAD1sXg77h4%2F%2ByNfsDCjGOJUDjVy1deeiRqmO40gGZuoqiu4kBmmm%2BvlGGeJfhDEAlpAvEjG5DyTRfl%2FbECznwoKvohLBN9GNKLEeHLHCjw1GlprSjgnFYXU4jP1R8kadMr7oM8Ofs1Y4aSL4jBILIgRSMX5nlyuelNi0zFkXDs9LYc42DAvqmtxgV1Id6z91UH8WRREMPaIIwuiTVXzLJx54lYHZTwJ%2B0gzT%2BeBwC2sB3mx23EEkkEwMb4MbaaFf%2B5d%2F6Unn7zN8t53dzxc5MfS3cT0GqRvnZyS9%2BhTTDYTKqJ5iLIRbtihUjrTg9HkrZ4rBF0SH1buXMcMgkNY8OWDwpzWjfV0tgv3%2FZ12ejQeaLuabbrBhd15zEHBgDbUd%2F3nCz7qKSElL7FY9pnzdHp9tlCrBmL%2Fouad23n1dFdELdzzfZ20VQdh9haHk0l8Ud2Kqak4uMfb4bFjRMocpbd9pIv2PEJCCEZybsZbdcbGcmG66ZtJuVyUEevcBz0L14jVpT7MOOuxMkGOqUB%2B2uul9B7tw9DRWQxgp6C%2B6Gc5pcD0EFjcE%2F9J16xc5wE78Z%2Bm%2BWriZ9q83gISt0qBcY%2FOFwTq80A08PN6Ywuwh8UPIpfFC1WRkzh%2BYOD2mLYfXvnjs1Z9QA4hF1iDCBFeMH9dwNaBxAAwcEmHI2ssRmioiwILoaEy0mmQTOPopEY2tzK76BtAitaOkcQEuYNMDiILdCpOUO4p0IOkL22avaokqYY&X-Amz-Signature=6d8a6fbe42229674012e78c469950c7914cf9c514ceda6563607b11aa80d0a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

