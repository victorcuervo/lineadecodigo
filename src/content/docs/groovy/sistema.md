---
title: "Sistema"
description: "Aprende a interactuar con el sistema Groovy: ejecutar procesos, capturar salidas, gestionar errores, variables y tiempos de espera con un ejemplo seguro."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["groovy","scripts","Java System","linux","windows"]
slug: groovy/sistema
type: category
topic: groovy
id: 3e7a9dfb-adca-80e7-91ae-dc0f3cb1ceca
author: victor_cuervo
---

## ¿Qué es Sistema Groovy?


Sistema Groovy se refiere al uso de [Groovy](https://lineadecodigo.com/groovy/) para **interactuar con el sistema operativo y el entorno de ejecución**: consultar propiedades, leer variables de entorno, ejecutar procesos externos y controlar sus entradas, salidas y errores.


Un **proceso** es una instancia de un programa en ejecución. Cuando un script inicia un comando, el sistema crea un proceso separado que devuelve un código de salida: normalmente `0` indica que terminó correctamente y otro valor señala un error definido por el programa ejecutado.


Cada proceso dispone de tres flujos principales: entrada estándar (`stdin`), salida estándar (`stdout`) y salida de error (`stderr`). La aplicación debe consumir las salidas, comprobar el código final y decidir qué hacer si el comando falla o tarda demasiado.


[Groovy](https://lineadecodigo.com/groovy/) permite usar `execute()` sobre cadenas o listas, pero `ProcessBuilder`, incluido en [Java](https://lineadecodigo.com/java/), ofrece un control más explícito sobre los argumentos, el directorio de trabajo, las variables de entorno y la redirección de flujos. Para automatizaciones mantenibles suele ser la opción preferible.


## Características de Sistema Groovy

- **Ejecución de comandos.** `ProcessBuilder` inicia programas externos a partir de una lista donde cada argumento ocupa una posición independiente.
- **Acceso a propiedades de la JVM.** `System.getProperty('os.name')`, `System.getProperty('user.home')` y `System.getProperty('java.version')` permiten consultar el sistema operativo, el directorio personal y la versión de Java.
- **Variables de entorno.** `System.getenv('NOMBRE')` lee una variable del proceso actual. `ProcessBuilder.environment()` permite definir o modificar el entorno que recibirá un proceso hijo.
- **Control del directorio de trabajo.** `directory(File)` determina desde qué carpeta se ejecutará el comando, algo necesario cuando utiliza rutas relativas.
- **Gestión de salidas.** La salida estándar y la de error pueden leerse por separado o combinarse mediante `redirectErrorStream(true)`.
- **Código de salida.** `waitFor()` espera a que termine el proceso y `exitValue()` devuelve su resultado. No basta con imprimir la salida: el código debe comprobarse para detectar fallos.
- **Límites de tiempo.** `waitFor(tiempo, unidad)` evita que un script quede bloqueado indefinidamente. Si se supera el plazo, el proceso puede finalizarse con `destroy()` o `destroyForcibly()`.
- **Portabilidad limitada.** Los comandos, rutas y ejecutables disponibles cambian entre Linux, macOS y Windows. Una automatización multiplataforma debe detectar el entorno o utilizar programas presentes en todos los sistemas objetivo.
- **Seguridad de argumentos.** Pasar una lista a `ProcessBuilder` evita que un intérprete de comandos divida o expanda el texto. Nunca se deben concatenar entradas no confiables para construir órdenes de una shell.

## ¿Por qué aprender Sistema Groovy?


La interacción con el sistema permite crear scripts para compilación, despliegue, integración continua, copias de seguridad, conversión de archivos y administración de herramientas. También sirve para envolver utilidades existentes y procesar sus resultados desde colecciones, closures y clases de [Groovy](https://lineadecodigo.com/groovy/).


Controlar los procesos evita automatizaciones frágiles. Un comando puede no existir, devolver un código distinto de cero, escribir el diagnóstico en `stderr` o quedar bloqueado. Capturar esos estados permite registrar información útil, reintentar una operación o detener el flujo con un mensaje comprensible.


También es necesario distinguir entre ejecutar un programa directamente y utilizar una shell. Operaciones como tuberías, redirecciones o comodines pertenecen al intérprete de comandos, no al ejecutable. Si no se necesitan, ejecutar el programa directamente mediante `ProcessBuilder` mejora la portabilidad y reduce el riesgo de inyección de comandos.


## Ejemplo de Sistema Groovy


El siguiente script ejecuta `java -version`, combina la salida estándar y la de error, aplica un límite de cinco segundos y comprueba el código de salida:


```groovy
import java.nio.charset.StandardCharsets
import java.util.concurrent.TimeUnit

List<String> comando = ['java', '-version']
ProcessBuilder constructor = new ProcessBuilder(comando)
constructor.redirectErrorStream(true)

Process proceso = constructor.start()
boolean terminado = proceso.waitFor(5, TimeUnit.SECONDS)

if (!terminado) {
    proceso.destroyForcibly()
    throw new RuntimeException('El proceso superó el tiempo máximo de ejecución')
}

String salida = proceso.inputStream.getText(StandardCharsets.UTF_8.name())
int codigoSalida = proceso.exitValue()

println salida.trim()
println "Código de salida: ${codigoSalida}"

if (codigoSalida != 0) {
    throw new RuntimeException("El comando falló con código ${codigoSalida}")
}
```


La orden se define como una lista, por lo que `java` y `-version` se transmiten como argumentos separados sin pasar por una shell. Esto evita problemas de escapado y hace explícita la estructura del comando.


El método `redirectErrorStream(true)` combina `stderr` con `stdout`. Esta redirección es útil porque `java -version` suele escribir su información en el flujo de error aunque termine correctamente.


Con `waitFor(5, TimeUnit.SECONDS)` conseguimos limitar la espera. Si el proceso no termina, `destroyForcibly()` solicita su finalización y el script informa del problema. Cuando finaliza, se lee la salida en UTF-8 y se comprueba `exitValue()`. El texto exacto dependerá de la JVM instalada, pero un resultado correcto terminará con `Código de salida: 0`.

