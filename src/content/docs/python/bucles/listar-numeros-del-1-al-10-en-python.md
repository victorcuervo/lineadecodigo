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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWB4JXV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4w2FRknwQ2%2F6rfAwaYJyYUIzArtcMx835rCVL%2FrCasgIgHll%2Bzhwt%2Fsu7GXgX0s4awAb%2Fpsw1PrdAhWUK7uANwRcqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEc7v3EQwMsC0dj1cCrcAy2Vh6s8xBCLXQNwlyx7BDjT0BcXA8JSKSwi8JSTRS%2B1h%2BYK5b1fHj09UUrB23EYfl1btEMYprlCCa68G7cWE2lDmookepcKDDaFRet7Y6KeyZ8YWI0feUPnUa5g10X8I0KYXP9Rs4j%2F2lusnVFXXF6V%2FklqcyP5oAulLuBVGSZzH5nxLKBvIQrH%2BOIhb6nVZmCVPgrj357p%2BSKiKBeObj7lh4nk%2BexMWxIRGOPzXF8a%2B0qWWNxR2MCQK2bAEgyjwfXVTjUB4e1O5yKvw3mqGAkb1sBxWL1hT5rYspWpOU2weFogj2bmj8f6rE4HJGZTfvpjC52jEeBwGmEFcCm%2B%2FGfZECGatE05fXvSAD2qYli%2BOEgGSuyoe%2B3mkXlKk24gnSCaQMJJC0vZfuECIj0yGACOFoRW31ZFWC7cUYFpXCmVI5vaO1YWOirU%2Fis1KzcTc2I1XqYW09yn%2Ft80NEZ7vQIHhdgOJ7Dlb2r6g27WzzZGAM1r368pU81OTrwuSpOHQACSb4eR2GGNkhpCY5iu2YNcesKxcS0YcNOnTjX7NgWOnN5%2FZSHR%2BnDGOSyPF99FzYuxPWj58i6l3HigMol44gdKYOVXHN8n%2BpuZ4XvPPW%2B4K1cYYbk6NpW0PDZxMPny2skGOqUBp7e49qQIhTvTrumV2%2Bn9TTCqF8aheTnErU2nZnN9Lmw3wz0L67zzrM7yj8bm5vSENoxJJWhRWm%2BTIjj%2F3%2BlR0OPmJJ0sSYJtRHUqHCaSNeIU9uis%2BOU6HQW2lXUtUY9zNSelpDE0Jo2mmoW2uLpz3fnYM5V%2BhaaOOExiBlPqOEMTeamlaJeA342DlgRrpoMQKGEY6fR%2BcJegd8SE%2F%2BjMcJ%2FxGL2J&X-Amz-Signature=87b2f1ef557edec9e08383043285f6a323b12f032ef4564b0c7b897b9357b89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

