---
title: Comprobar que existe un fichero en Python
description: "Ejemplo que explica cómo utilizar el módulo os y el objeto path para poder comprobar que existe un fichero en Python mediante el método .exists()."
lastupdates: 2024-01-28
author: victor_cuervo
---

Ejemplo sencillo, pero muy útil, en el que vamos a ver cómo podemos comprobar que existe un fichero en [Python](https://www.manualweb.net/python/) previo a poder manipularlo.


### Módulo os y objeto path


Para poder realizar la validación de la existencia de ficheros en Python, necesitamos utilizar el módulo [`os`](https://www.w3api.com/Python/tag/os/) y específicamente el objeto [`path`](https://www.w3api.com/Python/tag/os-path/). El módulo [`os`](https://www.w3api.com/Python/tag/os/) es una parte fundamental del ecosistema [Pyhton](https://www.manualweb.net/python/) que nos proporciona múltiples funcionalidades para interactuar con el sistema operativo y gestionar rutas de archivos de manera eficiente.


En concreto, utilizaremos el objeto [`path`](https://www.w3api.com/Python/tag/os-path/) dentro del módulo [`os`](https://www.w3api.com/Python/tag/os/) que nos ofrece una colección completa de métodos y utilidades diseñadas específicamente para el manejo y validación de rutas de archivos, siendo una herramienta esencial para cualquier operación relacionada con el sistema de archivos.


Así, lo primero que haremos en nuestro código que nos permite comprobar que existe un fichero en [Python](https://www.manualweb.net/python/) será importar dicho módulo:


```python
from os import path

```


### Comprobar que existe un fichero en Python mediante el método exists


Para poder comprobar que existe un fichero en [Python](https://www.manualweb.net/python/) lo primero que haremos será definir en una variable la ruta del fichero:


Por ejemplo, podemos almacenar la ruta en una variable llamada "ruta_fichero". Esta variable contendrá la ubicación del archivo que queremos verificar, ya sea usando una ruta relativa o absoluta. La ruta puede ser tan simple como el nombre del archivo si está en el mismo directorio que nuestro script, o puede incluir la ruta completa del sistema de archivos.


```python
ruta_fichero = "ejemplo.txt"

```


Como puedes ver, aquí hemos utilizado un nombre sencillo de fichero, el cual asumimos o del cual queremos comprobar que existe en el mismo directorio del que ejecutamos nuestro [código en Python](https://lineadecodigo.com/categoria/python/).


Lo siguiente será utilizar el objeto [`os.path`](https://www.w3api.com/Python/tag/os-path/) y, en concreto, su método [`.exists()`](https://www.w3api.com/Python/os-path/exists/). La sintaxis del método [`.exists()`](https://www.w3api.com/Python/os-path/exists/) es la siguiente:


```python
os.path.exists(path)

```


Como podemos apreciar, se le pasará como parámetro el fichero o path y fichero del que queremos comprobar su existencia. En el caso de que el fichero exista, la función devolverá un true y en el caso de que no sea así, devolverá un valor de `false`.


Es por ello que utilizaremos una estructura de selección if para poder validar la respuesta booleana:


```python
if os.path.exists(ruta_fichero):
    print(f"El fichero {ruta_fichero} existe")
else:
    print(f"El fichero {ruta_fichero} no existe")

```


En el caso de que exista, mostraremos por consola la frase indicando que existe y, en el caso contrario, mostraremos una frase indicando que no existe el fichero.


Como podemos ver, utilizamos una [fString o interpolación de cadenas en Python](https://lineadecodigo.com/python/fstring-o-interpolacion-de-cadenas-en-python/) que nos permite intercalar información de variables, incluyéndolas dentro de unas llaves, dentro de nuestra [cadena de texto en Python](https://lineadecodigo.com/tag/python-cadenas/).


Con esto ya tendríamos nuestro sencillo, a la par que útil, ejemplo sobre cómo comprobar que existe un fichero en [Python](https://www.manualweb.net/python/).

