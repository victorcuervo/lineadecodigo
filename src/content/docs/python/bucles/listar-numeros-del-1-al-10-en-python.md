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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOEBJ5SV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqF5uWxaP%2FihLSLOs88v%2FploN%2BC%2Fq%2BAtYasuGlseHHyAiEAnt9xDED%2BIjzPmCU2IPxr51h8TOpklYPNFwGJhDJNNz4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLDFo74%2Fu0iEWazOpircA8pQETQg7H%2FBJwo93WLqiDEAOjL%2FZmsbrQBJy1QVepP7wXzPVqQy57lsGMI5gs7KyU%2BSG%2FIM2bdZmgZvYCraT2SFBpr48K0ox9YPNaD72AojxLz0rXTOFgZXDNVFHK1pZ8vtZ7KlCvVgRSfP%2BhguaKNoXjNZKx7%2B2bQ7SYZOSYN4Jd5IwWjSn7Rj4L3uodg1Up%2BycngZOWE84FGRR6GbbDNTnGLcYH8xF70EGU%2BAY0A%2FzcOCer38P8oVe6KgXDCDjdSPzTCcI0UQFKyCjyj1Bj%2F%2BBYk6S60Ic2H8icuo95oohLRVhFM3ESEE07BMswUrSFdiYc7xRhhr5Jc5LAEuBXPl2%2FqUPctJ%2FtbSBS84vh%2Bv1YhxjkRW0aifVwib5ln7Afap77mQfzHlElbzUTtajgebhhQBMlFWIHAdzsmcHz4YxvXZpOBSHHh9rdeGt4oxdyLi1nICaIFKpyhFqQuEwDbzFb9oB7QqcT5QQFHVljKaMDajYBd4%2B73VXvZ6xtHiDR6ghUFCJbLAPsv7aFCdRRWsSVd4QHWMelXmAjf%2FvV3ShPRrreZGpOmLtn0SwALKLDpXG4XfaJ5R1klZGi8lCdgbuPWPpK7yE2MIychuAEN01y3tvfaArnt7m58oMPOnzskGOqUB3nphp9jDnUYW5%2FjPYFFdNiEOQBZyyGgqlkDMKyUiypA29sANBqluhk9%2FokBzN2X%2Bg0QSrSgBmSGlc8qrdPhTIY4GjYG9RewsmD7eCPWNcJvqxhaHdUo%2FnLCdM8PdP0TypTE5xLfHeQsS9hYQ%2BofHFys4spyQFZIcWQgUyKYa3Haze4UkUzn66Ln1FTIMscl5PJ9cBAcpfb3YWeJ3z%2F3o3V1%2Fy4WR&X-Amz-Signature=ba9cf6cf5d3a2893fbb5869cf227ce6f870b515033332485aaa16908ad9d433b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

