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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I63WAHZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC1JVBUN3jqpk84Tb%2FVoXYqPdtD%2FnSFusIRCbJCLCl6AiAOtylnhJ22WB2v0lzm1kcc93ueg%2B%2BCHElnsRUD74kEiCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXNT%2F%2BkU0ntY3g7%2F0KtwDOabucBHi7Sdlfwqu7I0Yecq%2FS9Rvg51k57AQ1I760L6S9%2BHn0A0631B1tjNicr35qMXAB6YNGrVkrLqjc92zmXwlFT94pjo6u2%2FJ4CPrLLpgP6RB%2FkL0YQAPx%2BU9mJbqpMkZj535zQDudngF5hUzXTUCWsV0a7UuSg3RvvL83cmS5KVcWLFpzG%2Bw7b4EB4Z2VlyAS2oHJZ5r0lQVMSBsaybguwdmzWaYjwk18kfHWScqaql1Z%2FEoRFrc3CbmCojWVHQFg28GFFPBxi%2FgB1PrcUcCgbwx%2F77L0Xgrzpcd%2FlKgk28wnSYb2byeP%2BQeVs0EDZ4tFhzOdDOZkvIF5EwcdgfshUXZohpwCPLM%2B%2FX%2Bqf6pCajoAMgGlBjh82EFBGsYx%2BCmzD6uOWE2AkQAUpxLzQ6omN3471sMJo5G09WEbELviXsfPX8vIjLVtrSPbsP9ykEuTHDpebdk%2B35J2uODCVIepVNlKZFvFIOmm6uSlUygGePLAkTd40bTjvr%2Fu2J5o72hwOYe%2Fqm80W61qTjer5ag6tVPRKk3GLByKoXjraYp0KukprTPqLJXaFvNtTW6Moclu4N3eIKX6dYxYJuKmRMxhuDbVX1AcC4F%2F405jyg1Cg2VH5iUJfF7BcowlMXfyQY6pgEE2aLi2MdYMiikDD1cq1Dj%2FZDnSQe7K%2FEtGAsL76vs7Ke3WHCysmPGq7yAWJfCe5Tb0SitRmK0ZyL5QJ4ma4bh6b4lbr460mnpjLYb5KghfK4f7IH3nnCpLaDND2C81aJBq1sMVweAADzdHnt8XkuM1l4YKpkLuMdiNSW74TffRB08t4b974y4n6vCWE5R%2B8UOqNJY%2BhF3Sds0XvPBqwnclPsrswQ%2F&X-Amz-Signature=cf42a95eed1194778e11e42e6eaf1af004ab82fffed9dacbf1ee4796afbcea24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

