---
title: "Ficheros"
description: "Aprende a trabajar con ficheros Groovy: leer y escribir archivos, recorrer líneas, gestionar directorios y usar UTF-8 con un ejemplo práctico."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["groovy","fichero","file","eachline","java-io"]
slug: groovy/ficheros
type: category
topic: groovy
id: 3e7a9dfb-adca-8010-a4a1-c85b53caffcb
author: victor_cuervo
---

## ¿Qué es el manejo de Ficheros Groovy?


Trabajar con ficheros Groovy consiste en **crear, leer, escribir, copiar, mover y eliminar archivos o directorios** desde un programa ejecutado en la JVM. [Groovy](https://lineadecodigo.com/groovy/) utiliza las API de entrada y salida de [Java](https://lineadecodigo.com/java/) y añade métodos que reducen el código necesario para las operaciones habituales.


La clase `java.io.File` representa una ruta a un archivo o directorio. El objeto no garantiza que esa ruta exista: métodos como `exists()`, `isFile()` e `isDirectory()` permiten comprobar su estado. Para operaciones modernas y con mayor control también están disponibles `java.nio.file.Path` y la clase `Files`, que facilitan copiar, mover, recorrer directorios y definir opciones de escritura.


El contenido puede procesarse completo o por partes. Cargarlo completo resulta cómodo para archivos pequeños. En archivos grandes conviene usar un lector, un flujo o `eachLine`, porque procesan los datos progresivamente y evitan mantener todo el fichero en memoria.


## Características de Ficheros Groovy

- **Lectura concisa.** `getText('UTF-8')` devuelve todo el contenido como una cadena, `readLines('UTF-8')` devuelve una lista y `eachLine('UTF-8')` procesa una línea cada vez.
- **Escritura controlada.** `withWriter('UTF-8')` abre un escritor y reemplaza el contenido existente. `withWriterAppend('UTF-8')` permite añadir datos al final.
- **Cierre automático de recursos.** Los métodos `withReader`, `withWriter` y `withInputStream` reciben una closure y cierran el recurso al terminar, incluso cuando se produce una excepción.
- **Codificación explícita.** Indicar `UTF-8` evita que caracteres como tildes o eñes dependan de la configuración del sistema operativo.
- **Gestión de directorios.** `mkdir()` crea un único directorio y `mkdirs()` crea también los directorios padre que falten. `eachFile` y `eachFileRecurse` permiten recorrer su contenido.
- **Información y validación.** `name`, `parent`, `length()`, `lastModified()` y los métodos de comprobación permiten validar una ruta antes de utilizarla.
- **Interoperabilidad con NIO.** Un `File` puede convertirse en `Path` mediante `toPath()`. De este modo se pueden usar `Files.copy`, `Files.move`, `Files.deleteIfExists` y otras operaciones con opciones explícitas.
- **Tratamiento de errores.** Las operaciones pueden fallar por rutas inexistentes, falta de permisos, archivos bloqueados o problemas de almacenamiento. Una aplicación debe capturar `IOException` cuando pueda recuperarse o necesite informar del fallo.

## ¿Por qué aprender Ficheros Groovy?


El acceso a archivos permite automatizar importaciones y exportaciones, procesar registros, generar informes, transformar datos, administrar configuraciones y preparar información para otros sistemas. En scripts, estas operaciones suelen combinarse con colecciones y closures para filtrar o convertir cada registro con poco código.


Conocer la diferencia entre leer todo el archivo y procesarlo por flujo ayuda a controlar el consumo de memoria. Un archivo de configuración pequeño puede cargarse con `getText`, mientras que un registro de varios gigabytes debe recorrerse línea a línea.


También permite evitar pérdidas de información. Elegir entre sobrescribir y añadir, comprobar la existencia de la ruta, especificar la codificación y cerrar correctamente los recursos son decisiones necesarias antes de modificar un archivo. Cuando una operación implica copiar o reemplazar ficheros, la API `java.nio.file` ofrece opciones más explícitas que las operaciones básicas de `File`.


## Ejemplo de Ficheros Groovy


El siguiente script crea un directorio, escribe un archivo de usuarios y después lo procesa línea a línea para contar los usuarios activos:


```groovy
File directorio = new File('datos')

if (!directorio.exists() && !directorio.mkdirs()) {
    throw new IOException("No se pudo crear el directorio: ${directorio.absolutePath}")
}

File ficheroUsuarios = new File(directorio, 'usuarios.txt')
List<Map<String, String>> usuarios = [
    [nombre: 'Ana', estado: 'activo'],
    [nombre: 'Luis', estado: 'inactivo'],
    [nombre: 'Marta', estado: 'activo']
]

ficheroUsuarios.withWriter('UTF-8') { writer ->
    usuarios.each { usuario ->
        writer.writeLine("${usuario.nombre};${usuario.estado}")
    }
}

int totalUsuarios = 0
int usuariosActivos = 0

ficheroUsuarios.eachLine('UTF-8') { linea ->
    String[] campos = linea.split(';', 2)
    String nombre = campos[0]
    String estado = campos[1]

    totalUsuarios++
    if (estado == 'activo') {
        usuariosActivos++
    }

    println "Usuario: ${nombre}, estado: ${estado}"
}

println "Total: ${totalUsuarios}"
println "Activos: ${usuariosActivos}"
```


El método `mkdirs()` prepara el directorio `datos` si todavía no existe. La condición comprueba el resultado y detiene el script si la carpeta no puede crearse.


No apoyamos en el método `withWriter('UTF-8')` para crear `usuarios.txt` o reemplazar su contenido. La closure escribe un registro por línea y el escritor se cierra automáticamente al terminar. Después, `eachLine('UTF-8')` procesa el archivo de forma incremental; cada línea se divide una sola vez mediante el separador `;`.


El resultado mostrará los tres usuarios, seguido de `Total: 3` y `Activos: 2`. Para añadir nuevos registros sin sobrescribir los existentes se podría sustituir `withWriter` por `withWriterAppend`, manteniendo la misma codificación.

