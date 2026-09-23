---
title: "Hola Mundo en Dart"
description: "Hola Mundo en Dart paso a paso: instala el SDK, crea el archivo, usa main() y print(), ejecútalo desde la terminal o con Docker y revisa la salida."
date: 2024-02-05
updatedDate: 2026-09-23
tags: ["hola-mundo","main","void"]
slug: dart/basicos/hola-mundo-en-dart
type: doc
topic: dart
id: 3e4a9dfb-adca-8013-b9ba-e350cf9dae97
author: victor_cuervo
---

Crear un **Hola Mundo en Dart** permite comprobar que el entorno funciona y entender la estructura mínima de un programa. [Dart](https://lineadecodigo.com/dart/) es un lenguaje de código abierto desarrollado por Google y utilizado principalmente con `Flutter` para crear aplicaciones multiplataforma, aunque también sirve para programas de consola, web y servidor.


El ejemplo mostrará el texto `Hola Mundo` en la consola mediante la función `print()`. Para ejecutarlo puedes instalar el `SDK` de [Dart](https://lineadecodigo.com/dart/) o utilizar su imagen oficial de `Docker`.


## Preparar el entorno de Dart


El `SDK` incluye el compilador, la máquina virtual, el analizador, el formateador y la herramienta de línea de comandos `dart`. Está disponible para `Windows`, `macOS` y `Linux`.


Puedes seguir la guía para [instalar el SDK de Dart](https://manualweb.net/dart/instalar-dart/) y comprobar después la instalación desde una terminal:


```bash
dart --version
```


Si el comando devuelve la versión instalada, el entorno está preparado. Si la terminal indica que no encuentra `dart`, revisa que el directorio `bin` del `SDK` esté incluido en la variable de entorno `PATH` y abre una terminal nueva.


No es obligatorio instalar el `SDK` directamente en el equipo. También puedes utilizar [`Docker`](https://arquitectoit.com/docker/que-es-docker/) con la [imagen oficial de Dart](https://manualweb.net/dart/instalar-dart/#utilizar-dart-con-docker), una opción útil para trabajar en un entorno aislado o en un equipo sin una instalación local.


## Crear el archivo del Hola Mundo en Dart


Crea un archivo llamado `hola_mundo.dart`. La extensión `.dart` identifica los archivos de código fuente del lenguaje. El nombre con guion bajo sigue las convenciones habituales para archivos en [Dart](https://lineadecodigo.com/dart/).


Todo programa ejecutable necesita una función `main()`, que actúa como punto de entrada. El tipo `void` indica que esta función no devuelve un valor al código que la invoca.


```dart
void main() {
  print('Hola Mundo');
}
```


La función `print()` recibe un valor, obtiene su representación como texto y la escribe seguida de un salto de línea en la salida estándar. En este caso recibe un `String`, es decir, una cadena de texto delimitada por comillas simples.


El punto y coma cierra la instrucción. Las llaves delimitan el cuerpo de `main()`, que contiene las instrucciones que se ejecutarán en orden.


## Ejecutar el programa desde la terminal


Abre una terminal en el directorio que contiene `hola_mundo.dart` y ejecuta:


```bash
dart run hola_mundo.dart
```


La salida será:


```text
Hola Mundo
```


`dart run` ejecuta el archivo con la máquina virtual de [Dart](https://lineadecodigo.com/dart/). Para este ejemplo no necesitas crear un proyecto completo ni añadir dependencias.


El comando usado tradicionalmente también funciona con un archivo ejecutable sencillo:


```bash
dart hola_mundo.dart
```


La forma `dart run` expresa mejor la intención y es la opción habitual para ejecutar código fuente desde la herramienta actual.


### Ejecutar no es lo mismo que generar un ejecutable


`dart run` inicia el programa, pero no crea un archivo binario independiente. Si necesitas distribuirlo como ejecutable nativo, puedes compilarlo con:


```bash
dart compile exe hola_mundo.dart -o hola_mundo
```


Después, en macOS o Linux, se ejecuta así:


```bash
./hola_mundo
```


En Windows, el archivo generado utiliza la extensión `.exe`. La compilación nativa no es necesaria para aprender la estructura básica, pero aclara la diferencia entre ejecutar el código y generar un artefacto distribuible.


## Ejecutar el Hola Mundo en Dart con Docker


Descarga primero la imagen oficial:


```bash
docker pull dart
```


En `macOS` o `Linux` puedes montar el directorio actual dentro del contenedor y ejecutar el archivo en un solo comando:


```bash
docker run --rm \
  -v "$PWD:/app" \
  -w /app \
  dart \
  dart run hola_mundo.dart
```


`-v` monta el directorio actual en `/app`, `-w` establece ese directorio como ubicación de trabajo y `--rm` elimina el contenedor cuando termina. El archivo permanece en tu equipo; el contenedor solo proporciona el `SDK` y el entorno de ejecución.


También puedes abrir una consola interactiva, como en el procedimiento original:


```bash
docker run --rm -it -v "$PWD:/usr/lineadecodigo" dart /bin/bash
```


Una vez dentro del contenedor, cambia al directorio montado y ejecuta el programa:


```bash
cd /usr/lineadecodigo
dart run hola_mundo.dart
```


El resultado vuelve a ser:


```text
Hola Mundo
```


La sintaxis de `$PWD` corresponde a shells de `macOS` y `Linux`. En `PowerShell` debe adaptarse la forma de indicar el directorio actual. Con cualquiera de los dos métodos, el ejemplo confirma que `main()` se ha localizado correctamente y que `print()` ha escrito el mensaje en la consola.

