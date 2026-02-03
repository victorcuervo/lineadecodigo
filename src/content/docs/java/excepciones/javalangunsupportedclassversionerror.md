---
title: "java.lang.UnsupportedClassVersionError"
description: "El error java.lang.UnsupportedClassVersionError ocurre al intentar ejecutar código compilado con una versión de Java superior a la de la JVM."
date: 2007-01-28
updatedDate: 2026-01-07
tags: ["excepcion"]
slug: java/excepciones/javalangunsupportedclassversionerror
author: victor_cuervo
type: doc
id: b50dfbb0-5b39-452c-a2df-d795b924de6f
---

Hará unos días me ha tocado modificar un código [Java](https://www.manualweb.net/java/) de hace unos años. Cuando uno todavía era programador (ahora la programación es un hobby para mí).


La cuestión es que edité el código sobre Eclipse, lo modifiqué y recompile. Todo ello con Java SE 5. Hasta aquí ningún problema. Lo que no podía imaginar es que la máquina virtual en que se estaba ejecutando en producción era todavía un Java SE 1.3 (o alguno de sus derivados).


Es por ello que cuando mi código llegó a ejecutarse devolvió una `java.lang.UnsupportedClassVersionError`. Además la información adicional que nos devolvió fue "Unsupported major.minor version 49.0". Y es que desde Java SE 1.2 se dispone de la excepción `java.lang.UnsupportedClassVersionError` ([puedes leer la información del API sobre java.lang.UnsupportedClassVersionError](http://w3api.com/Java/UnsupportedClassVersionError/)). La cual nos avisa que la JVM intenta leer un fichero class cuya version (mayor o minor) no está soportada. > java.lang.UnsupportedClassVersionError, hemos compilado con una versión de [Java](https://www.manualweb.net/java/) mayor a la versión que esta ejecutando en la JVM.


Si vemos la información adicional (la que me devolvió) lo que nos dice es que no se soporta código compilado con la máquina virtual 49.0, la cual corresponde con Java SE 5, el código 48.0 correspondía a Java SE 1.4,... Si quieres saber que versión de máquina virtual estás ejecutando puede poner lo siguiente en la línea de comandos:


```text
java -version
```

