---
title: "Ejecutar un proceso batch en Groovy"
description: "Descubre cómo ejecutar un proceso batch en Groovy y automatiza tareas fácilmente. Aprende a crear y modificar archivos BAT y ejecutarlos con Groovy."
date: 2013-08-04
updatedDate: 2026-02-07
tags: ["batch","process","execute"]
slug: groovy/sistema/ejecutar-un-proceso-batch-en-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-81ce-b90c-f0f5318b1cc8
author: ariel
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/procesos/ProcesoBatch.groovy
---

## Proceso batch en Groovy


En este ejemplo vamos a ver como ejecutar un **proceso batch** en [Groovy](http://www.manualweb.net/groovy/). Para ello tenemos que saber que los [archivos batch](http://es.wikipedia.org/wiki/Archivo_batch) son útiles para la automatización de tareas, por ejemplo revisar el espacio en disco, ver el contenido de un directorio, etc.


En este ejemplo vamos a crear un **archivo BAT** (MS-DOS). Abrimos cualquier editor de texto (como notepad++, sublime text 2, etc.) y creamos un nuevo archivo, le llamaremos "miscomandos.bat" (también se puede cambiar la extensión por .cmd).


```bash
@echo off
echo Hola visitante de http://lineadecodigo.com/
@pause
```


Desde terminal de comando nos ubicamos en el directorio donde se creo el archivo y tecleamos su nombre, aparece el mensaje:


```bash
Hola visitante de http://lineadecodigo.com/
```


## ¿Groovy permite ejecutar comandos del sistema?


Asi es, basta que teclees desde terminal **groovysh** te abrirá el **REPL**. Escribe esto: **printl "help".execute().text**


```groovy
Groovy Shell (2.1.5, JVM: 1.7.0_05)
Type 'help' or '\h' for help.
----
groovy:000> printl "help".execute().text
ERROR groovy.lang.MissingMethodException:
No signature of method: groovysh_evaluate.printl() is applicable for argument ty
pes: (java.lang.String) values: [Para obtener más información acerca de un coman
do específico, escriba HELP
seguido del nombre de comando
ASSOC          Muestra o modifica las asociaciones de las extensiones
               de archivos.
ATTRIB         Muestra o cambia los atributos del archivo.
BREAK          Establece o elimina la comprobación extendida de Ctrl+C.
BCDEDIT        Establece propiedades en la base de datos de arranque para
               controlar la carga del arranque.
CACLS          Muestra o modifica las listas de control de acceso (ACLs)
               de archivos.
CALL           Llama a un programa por lotes desde otro.
CD             Muestra el nombre del directorio actual o cambia a otro
               directorio.
CHCP           Muestra o establece el número de página de códigos activa.
//... más
```


## Modificar el archivo batch


Vamos a modificar el archivo "miscomandos.bat"


```bash
@echo off
@rem Programando en Batch
title Ejemplo de Batch 
cls
echo Hola usuario %USERNAME%
echo hora: %time%
echo fecha:  %date%
@pause
```


El siguiente paso es convertir este archivo en un *.exe, para ello usamos el programa [battoexeconverter](http://www.battoexeconverter.com/), nos generará el archivo ejecutable, lo guardamos en el directorio C:\Windows\System32 (lo nombramos "miscomandos.exe").


## Ejecutar el proceso desde Groovy


Creamos el archivo "ejecuta.groovy" con el siguiente código que ejecutará nuestro proceso batch en [Groovy](http://www.manualweb.net/groovy/) utilizando el método **execute()**:


```groovy
def programa="miscomandos.exe"
def sub="cmd /c start "+programa
Process p=sub.execute()
println p.text
```


Ejecutamos, la salida del proceso batch en [Groovy](http://www.manualweb.net/groovy/) es la siguiente:


```bash
Hola usuario Yo
hora: 19:10:47.86
fecha:  23/07/2013
Presione una tecla para continuar ...
```


Ya tenemos nuestro programa que permite ejecutar un proceso batch en [Groovy](http://www.manualweb.net/groovy/).

