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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNNI2VY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDLzDhsWS76nAnFyEJVIl3rPDHpyeBANP8lGfz1%2F5nkCAiEAgBPcqXvgB1q%2BKN85YPSBUamwlsyQ%2BSV3GY9MxFFK3y0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHH9Atq1mk2T7ZcfEircA%2BJwbJ2Vj4DV6E8k7gJ1M%2B1lmpfmjNUKD%2FSDrnCUfefJVMy6Yy%2BnBrIJ3Jee7ZP%2BE2IIjGZ3%2BZ%2BaPQUPteUpSsi%2BK2ZzrRUkuStIJxFKtFOTlFs4EueJdpqaiFCAHULv0%2B8PZuwkY2Djo%2FtMYaVQQZolW6ML6KKRSEMHnaHoTiTtw8o1gXF%2BC7gETGhZ6BmbDzwVNva6scxkXcTixARySQeL5NytJD5%2FAoISo5QubhxJrsKEYnClr70G93s%2BkJt4Q%2BL2nYJkDnKdXnO%2F92eAXLKVRg3gjjuUKJ2vGPyU21ZaFngui%2Bf%2Bp1oP5NeO4ugjV7m8Dzs%2FEZhgozdOCg9fHIkHn%2Bixku0%2FURGOvfurfnJEHBOEdsUwvdRiITF%2FQtSb1BThl35PlNzqCJDttjC9svk3fDZFKt%2Fr0qClXqsklci577hRGoP6cJswObSV2DlFZTvQCl9rDRmv%2F1xS8DPc%2FYuJYAfTukhmKANkDv89S0%2FFMG2Vl6AYBeTr04Bw3q7TDWcGxLG4WjDYDa5pxBsPld1XbV%2F59qmOFMboMVGUcXji5R3fEAGsjQigPuHDP%2By4lhsFloJU2F6P7XiUvq5fQMG3CsvPgV4CUyST8QqfqM1e%2BtUM16rc89V7mD%2FwMPPoxMkGOqUBSRjBjKyunjqcKmQMZ%2B9WFGE5GADXiXBtWO4pNMI%2BGcpm57PsW2SGaf7jZ6s79twdDqXIiDwD7IESjQRmIgArAPnju%2B%2BzoX5k61%2FVBEpF2velVFd8X0VrGgCXX%2Fk2IN7K71%2F64I8lB8jrs9RHAcXci%2Fixqu2pB%2FaDVm74Md4rpmsrBJd8h7K9boM3YHgYVh7eALILPyYnDXt7UiZvN9iEm1Tw6sUh&X-Amz-Signature=24bda13a9ae94dddf34580b7af044f191e4a06256af6169d1de3332c5be70c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

