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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYA34LT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg7xbsSVJqsX7gJDbiXtXJMVGbBi7urbKmDgo7E9%2FVjAiEAojZZvHsQXLPixvglokyoTu6d0E87moC3rnHGfgLJ%2FhMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJb3xb67hyhotJqSyrcA4%2FGalLw8rmuCxT3SsVPwRf9LsxuwWgaeRpij%2BmyuZB5836G6i8%2BkCO%2FHnvD3X25ZiHPxFk%2FQu9PX5QQnUeu%2BwTbx9%2BZWFipyBYeMDOje15Fo4h6Qp3xIPCcDgDDcn6QogzU6W3sab1MjJum3wVX9x%2FjbR5q51CX%2FJbgVBu0%2BBpkEzK%2ByUadP%2Bnh4ELz6TkJ0Yo%2B6HIqGhoi2ePX444WVb7KBBkAbZcgyUsahREeIt3juXBu8srYOp6szaPKzEEZNb%2B94hz%2Flk2R3JFc1Q%2BPTifNO1UgD3b8kAWOv%2BQ%2Bn9OoeDLL0IeDZ05MleWh9WTbmIl4KV2ZU%2BtFCPaRX%2FXKUNBewG%2Bf39y5sK6a%2B2W%2FDiP9eGYWItiArF0r%2FXuW8c%2B%2FKyC7Xcg9iONI0YaNYBV07nZtevci%2Bz2Rh6ABtafp2%2FhbgKG1cZ2rTfcl2x%2Fp059JfZNJI3OEfZxt%2Bf5m9Sf1pKw%2BdUmXBsncYyiQep0qaop97q73tFtmXDOfkkgxYarmQ5URopqvc3VLvbrIOS8T52dv2DO1JczYOAaApCRSea4AvDa9qN7mkLBi%2FVKhciJqVmBOkGn6emJewuOQ0KcozItllvCTNCgOdFuP7fWrwzviK72TRC5NyxelTHXaMLaZ1ckGOqUBZRuJcEQrMCPrdmu4sHAH4Ml1pi4SnNkmJ1y9tphg4KVkBoOCplsfrRpMJdOQ6g8xljS1aFs0ryDWZkvQ%2BmhwH8glb0Nrg77SyHDV3AK9Z1%2BMxUyCRnDIilfgFPUPcCrUbYcTG01EPHvHxZ7874F5GwcpnWgBHvp5Jpp9B4%2F%2F7ErieO5Q9LY7%2B%2BPTj4ZP3gs9%2BYnQEvFlUx7O2InFw9Wk%2BFsrLczt&X-Amz-Signature=1272d5286fd7ad933ad84e5b3b04a114a65a82628b6957023d40c03f656c45c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

