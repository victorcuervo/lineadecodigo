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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQUATDQ4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCFvXV62pVOObpzZ2nEYCNzdhG%2FiwBYVK4G00cqzY83SAIgUmAya75aRKLbwKMFWe0qB9zpX7W5L9POo7xkXB2rwBgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIzayUmvG422OTPblCrcA%2BNVNRCM1zihn9fCT7A4hL7VqtJnE1Up1EdJ9ksEqhj4x4v9d3CocIWgfWl9up%2Bi8Acm%2Fv0PzQXDoke5TDOwWCPuoGVV0DwhT1bcD0Pv5bUxsTHG1mDIT7TotcAXFEO2apUkKD8%2Fab2PHnQO1%2FSV86%2FZTSMTtFGML0uBzAG5%2FHzvmVzT9zmeJ4FI0ot7soIPsSqmX1RFaOlQvRPN2XYUIETJStfzlhw3YAsmo7jv1qx2G3%2Bby6Bz1UJwUG6TdXinwlznGC8za2JyqsK%2F7%2FPDd5St57hZhprxS07BnwZgoGR1vsle5D%2BrAAjJA2pusnahxE6fRzby%2FwNeRWxJMNiR%2FOn9W8TNIRu16S2Gw%2BylYHPjvEnCq0o4mc5sT9Z%2BISmYBdm2q4psvG9Vp31ac3AIW90j0UUsDwRsHvE5sgFMOSvmjSNqM4KDfJntD%2Bi6VyjB1zzBAdXIMHBP%2BnHvJparf73fz87%2Fryee5yBgG8jlv4oc2ofHhjTwTOLfjpN04s0mTSTEUTRH%2Fg8ch0WA78a0WTDL1652xI%2Br55S6D%2FFb5XzMYsslrnHFz2GvXfMt9%2FQxPfZ0c8KQv66E3jmYONb%2BSUjBORFuo60zOoycBCAFXqXSjdHceNbqDSjWqhobMIDpxMkGOqUB6qzHPvXgx1Yb94b047kCBsA8QFVZJKEl5X26X8%2BmwOWT3YjEnet%2Fv9JO8vYHUiZ3phDCjL%2FTWHGd0fkkMtysZClEXo8hrZ%2F%2F2IzYWiT6aVahrVt6eQS66F6U4RwgXAJjsDVS3vxcdfPTIzrrpU6q7qOUSrBsFdPDf6XLoPgQujDaqEVhQLVdrssQYZxIpan9NbK6jKQBYBcF6L4kUExy0VGfQogx&X-Amz-Signature=3bb1e3bcf2088bb3beb59cc2013445c12ed5b29ad20f5dd94cf332df08aa2935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

