---
title: "Documentos"
description: "Aprende a manipular documentos con Groovy: crear, leer y actualizar archivos, gestionar recursos y generar contenido mediante un ejemplo práctico."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["groovy","document","file","xml","pdf"]
slug: groovy/documentos
type: category
topic: groovy
id: 3e7a9dfb-adca-80ae-853b-e067c826dfc5
author: victor_cuervo
---

## ¿Cómo manipular Documentos con Groovy?


Manipular documentos con Groovy consiste en **crear, leer, transformar y guardar archivos** mediante las API de la JVM y las extensiones que aporta el lenguaje. Un documento puede ser un archivo de texto, CSV, JSON, [XML](https://lineadecodigo.com/xml/), PDF u otro formato binario; su estructura determina qué API o biblioteca conviene utilizar.


Para archivos de texto, [Groovy](https://lineadecodigo.com/groovy/) amplía `java.io.File` con métodos concisos como `getText`, `readLines`, `eachLine`, `withReader`, `withWriter` y `append`. Estas extensiones reducen el código necesario, pero mantienen la interoperabilidad con las clases de [Java](https://lineadecodigo.com/java/) y con bibliotecas de la JVM.


Los formatos estructurados necesitan una representación adecuada. Por ejemplo, `XmlSlurper` permite leer [XML](https://lineadecodigo.com/xml/) y `MarkupBuilder` generarlo. Un PDF no es texto plano: para producirlo se emplea normalmente una biblioteca como Apache PDFBox, OpenPDF o iText, según los requisitos y la licencia del proyecto.


## Características de Manipular Documentos con Groovy

- **API de archivos simplificada.** La clase `File` dispone de métodos añadidos por [Groovy](https://lineadecodigo.com/groovy/) para leer, recorrer y escribir contenido sin crear manualmente todos los flujos de entrada y salida.
- **Gestión automática de recursos.** Métodos como `withReader` y `withWriter` reciben una _closure_, es decir, un bloque de código ejecutable, y cierran el recurso al terminar incluso si ocurre una excepción.
- **Control de la codificación.** Conviene indicar explícitamente `UTF-8` al leer o escribir texto para evitar que caracteres como tildes o eñes dependan de la configuración del sistema.
- **Procesamiento completo o por flujo.** `getText` y `readLines` cargan el contenido en memoria y resultan cómodos para archivos pequeños. Para documentos grandes, `eachLine`, `withReader` o un flujo permiten procesar los datos gradualmente.
- **Soporte para formatos estructurados.** Las herramientas de la plataforma permiten trabajar con [XML](https://lineadecodigo.com/xml/) y JSON, mientras que formatos como PDF, DOCX o XLSX suelen requerir bibliotecas específicas.
- **Operaciones diferenciadas.** `withWriter` reemplaza el contenido existente, mientras que `append` añade información al final. Elegir la operación correcta evita sobrescrituras accidentales.
- **Validación y manejo de errores.** Antes de procesar un documento conviene comprobar su existencia, formato y permisos, y tratar excepciones de entrada/salida cuando la aplicación deba recuperarse del fallo.

## ¿Por qué aprender Manipular Documentos con Groovy?


Esta capacidad permite automatizar tareas habituales: generar informes, exportar resultados, importar datos, convertir formatos, preparar archivos de configuración y procesar documentos recibidos de otros sistemas. Resulta especialmente útil en scripts, procesos por lotes, pruebas y canalizaciones de integración.


La sintaxis compacta de [Groovy](https://lineadecodigo.com/groovy/) facilita separar la lógica del negocio de la gestión de recursos. En lugar de dedicar varias líneas a abrir y cerrar un escritor, una closure delimita la operación y deja explícito dónde se produce la escritura.


También ayuda a escoger una estrategia apropiada para cada caso. Un informe pequeño puede construirse como texto; un [XML](https://lineadecodigo.com/xml/) debe analizarse según su estructura; un PDF necesita un motor que gestione páginas, fuentes y maquetación. Conocer estas diferencias evita tratar todos los documentos como simples cadenas y permite reutilizar el amplio ecosistema de [Java](https://lineadecodigo.com/java/).


## Ejemplo de Manipular Documentos con Groovy


El siguiente script genera un informe de ventas en un archivo de texto y después lo lee para mostrar su contenido:


```groovy
List<Map<String, Object>> ventas = [
    [producto: 'Teclado', importe: 49.90G],
    [producto: 'Ratón', importe: 24.50G],
    [producto: 'Monitor', importe: 189.00G]
]

BigDecimal total = ventas.sum(0.0G) { venta ->
    venta.importe as BigDecimal
}

File documento = new File('informe-ventas.txt')

documento.withWriter('UTF-8') { writer ->
    writer.writeLine('INFORME DE VENTAS')

    ventas.each { venta ->
        writer.writeLine("${venta.producto};${venta.importe}")
    }

    writer.writeLine("TOTAL;${total}")
}

String contenido = documento.getText('UTF-8')
println contenido
```


El método `withWriter('UTF-8')` crea el archivo si no existe y reemplaza su contenido si ya existe. La closure recibe el escritor, genera una cabecera, añade una línea por venta y escribe el total calculado.


Al salir de la closure, el escritor se cierra automáticamente. Después, `getText('UTF-8')` lee el documento completo. El resultado esperado es:


```text
INFORME DE VENTAS
Teclado;49.90
Ratón;24.50
Monitor;189.00
TOTAL;263.40
```


Para un archivo grande sería preferible procesar sus líneas con `eachLine` o `withReader`, en lugar de cargar todo el contenido mediante `getText`.

