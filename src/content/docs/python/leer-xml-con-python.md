---
title: Leer XML con Python
description: "Cómo utilizar el módulo xml.etree.ElementTree para poder parsear un fichero XML y así poder leer XML con Python."
lastUpdated: 2023-05-27
author: victor_cuervo
---

Si hay una cosa por la que me encanta [Python](https://www.manualweb.net/python) es por la sencillez que ofrece para hacer ciertas tareas. En el ejemplo de hoy vamos a ver cómo podemos leer [XML](https://www.manualweb.net/xml) con [Python](https://www.manualweb.net/python). Para ello contaremos con un fichero que tiene un contenido en [XML](https://www.manualweb.net/xml). Este fichero se llamará data.xml


```html
<?xml version="1.0"?>
<nombres>
    <nombre>Luis</nombre>
    <nombre>Curro</nombre>
    <nombre>Javier</nombre>
    <nombre>Marta</nombre>
    <nombre>Virginia</nombre>
    <nombre>José</nombre>
    <nombre>Sonsoles</nombre>
    <nombre>Isabel</nombre>
    <nombre>Quino</nombre>
</nombres>
```


Como podemos ver la estructura es muy sencilla. Ya que contamos con una lista de nombres montada mediante un par de elementos `nombres` y `nombre`.


Lo primero que tendremos que hacer es nuestro código para poder leer [XML](https://www.manualweb.net/xml) con [Python](https://www.manualweb.net/python) es utilizar el módulo [`xml.etree.ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/). El módulo [`xml.etree.ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/) nos proporciona un API sencillo para poder parsear y crear información en [XML](https://www.manualweb.net/xml).


Así que importaremos la clase [ElementTree](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/) de este módulo de la siguiente forma:


```python
import xml.etree.ElementTree as ET
```


El método principal que tiene esta clase es el método [`.parse()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/parse/). Dicho método lo que hace es parsear el fichero [XML](https://www.manualweb.net/xml) o la cadena [XML](https://www.manualweb.net/xml) que le pasemos como parámetro y crear un árbol con los nodos que conforman el contenido [XML](https://www.manualweb.net/xml). Así que le pasamos nuestro nombre de fichero como parámetro.


```python
xml = ET.parse("data.xml")
```


Una vez que tenemos nuestro fichero parseado lo que podemos es obtener la raíz del fichero [XML](https://www.manualweb.net/xml). Es decir el elemento principal que agrupa a todos mediante el método [`.getroot()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/getroot/)


```python
root = ET.parse("data.xml").getroot()
```


Ahora que tenemos acceso al elemento principal podremos realizar búsquedas de elementos o de atributos [XML](https://www.manualweb.net/xml) por todo el árbol de nodos. En nuestro caso vamos a recuperar todos los elementos de tipo `nombre` que haya dentro del árbol. Para poder realizar esto llamamos al método [`.findall()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/findall/) al cual le pasamos el nombre del elemento.


```python
for nombre in root.findall('nombre'):
    print (nombre.text)
```


Lo que nos retorna el método [`.findall()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/findall/) es una lista de elementos que cumplen dicha condición. Por lo que podremos recorrerla iterando por ella. Cada elemento de la lista corresponde a un nodo. Es por ello que si queremos acceder al contenido de texto del nodo deberemos de apoyarnos en el atributo [`.text`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/text/) de dicho elemento.


Así habremos conseguido leer [XML](https://www.manualweb.net/xml) con [Python](https://www.manualweb.net/python) para poder acceder al contenido de nuestro fichero de una forma sencilla.


¿Te atreves a leer un fichero XML que tenga valores en los atributos? 

