---
title: "Fechas"
description: "Consulta cómo trabajar con fechas Groovy usando LocalDate: fecha actual, formato, conversión, cálculos y zonas horarias con un ejemplo práctico."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["groovy","date","Day","month","Year"]
slug: groovy/fechas
type: category
topic: groovy
id: 3e7a9dfb-adca-80e3-b6a2-d3fa0d6c7db5
author: victor_cuervo
---

## ¿Qué son las Fechas Groovy?


Trabajar con fechas Groovy consiste en **representar, obtener, convertir y calcular valores de fecha y hora** mediante las clases disponibles en la JVM. [Groovy](https://lineadecodigo.com/groovy/) puede utilizar directamente la API de fechas de [Java](https://lineadecodigo.com/java/) y aporta una sintaxis concisa para integrarla en scripts y aplicaciones.


Para código moderno se recomienda el paquete `java.time`. Sus tipos separan conceptos que suelen confundirse:

- `LocalDate` representa una fecha sin hora ni zona, como el 15 de marzo de 2026.
- `LocalTime` representa una hora sin fecha ni zona.
- `LocalDateTime` combina fecha y hora, pero no identifica una zona horaria.
- `ZonedDateTime` asocia una fecha y hora con una zona como `Europe/Madrid`.
- `Instant` representa un instante exacto en la línea temporal y resulta apropiado para marcas de tiempo.

La clase `java.util.Date` pertenece a la API histórica. Todavía aparece en sistemas existentes y [Groovy](https://lineadecodigo.com/groovy/) le añade métodos útiles, pero para código nuevo `java.time` ofrece tipos inmutables y un modelo más claro. Un objeto **inmutable** no cambia después de crearse: operaciones como sumar días devuelven un nuevo valor.


## Características de Fechas Groovy

- **Acceso completo a** **`java.time`****.** Se pueden usar `LocalDate`, `Instant`, `ZonedDateTime`, `Duration`, `Period` y `DateTimeFormatter` sin bibliotecas externas.
- **Fecha actual dependiente de una zona.** `LocalDate.now()` utiliza la zona predeterminada del sistema. Cuando la aplicación depende de una ubicación concreta, es preferible pasar un `ZoneId` explícito.
- **Formato y análisis controlados.** `DateTimeFormatter` convierte una fecha en texto y recupera una fecha desde texto. El patrón `dd/MM/uuuu` expresa día, mes y año; `MM` en mayúsculas representa el mes, mientras que `mm` representa minutos.
- **Cálculos sin modificar el valor original.** Métodos como `plusDays`, `minusMonths` y `withYear` producen nuevas fechas. `Period` mide una diferencia en años, meses y días, mientras que `Duration` mide una cantidad temporal basada en segundos y nanosegundos.
- **Comparaciones legibles.** `isBefore`, `isAfter` e `isEqual` permiten ordenar o validar fechas sin comparar manualmente sus componentes.
- **Conversión con tipos antiguos.** Cuando una API devuelve `Date`, puede convertirse mediante `toInstant()` y una zona horaria. La conversión inversa se realiza con `Date.from(instant)`.
- **Precisión semántica.** Elegir el tipo adecuado evita errores: una fecha de nacimiento suele ser `LocalDate`; la hora de ejecución de un evento suele almacenarse como `Instant`; una cita vinculada a una región puede necesitar `ZonedDateTime`.

## ¿Por qué aprender Fechas Groovy?


El tratamiento correcto de fechas permite resolver tareas concretas como calcular vencimientos, validar rangos, ordenar registros, generar informes diarios, programar procesos y convertir valores recibidos desde formularios, archivos o servicios web.


Distinguir entre fecha local, instante y zona horaria evita errores difíciles de detectar. Por ejemplo, guardar una reunión internacional como `LocalDateTime` no conserva la región en la que se programó. En cambio, `ZonedDateTime` mantiene esa información y aplica las reglas de horario de verano de la zona seleccionada.


También es necesario dominar los formatos. Una cadena como `03/04/2026` es ambigua si no se conoce el patrón: puede interpretarse como 3 de abril o 4 de marzo. Definir un `DateTimeFormatter` explícito hace que la escritura y la lectura utilicen las mismas reglas. Para intercambiar datos entre sistemas suele ser preferible un formato ISO, como `2026-04-03`.


## Ejemplo de Fechas Groovy


Este script obtiene la fecha actual para una zona determinada, calcula una fecha de entrega, la formatea y vuelve a convertir el texto en un `LocalDate`:


```groovy
import java.time.LocalDate
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.time.temporal.ChronoUnit

ZoneId zona = ZoneId.of('Europe/Madrid')
DateTimeFormatter formato = DateTimeFormatter.ofPattern('dd/MM/uuuu')

LocalDate fechaActual = LocalDate.now(zona)
LocalDate fechaEntrega = fechaActual.plusDays(10)

String fechaFormateada = fechaEntrega.format(formato)
LocalDate fechaRecuperada = LocalDate.parse(fechaFormateada, formato)
long diasRestantes = ChronoUnit.DAYS.between(fechaActual, fechaRecuperada)

println "Fecha actual: ${fechaActual}"
println "Fecha de entrega: ${fechaFormateada}"
println "Días restantes: ${diasRestantes}"
```


El método `LocalDate.now(zona)` obtiene la fecha actual según `Europe/Madrid`, en lugar de depender silenciosamente de la configuración del servidor. `plusDays(10)` devuelve una nueva fecha y mantiene intacto el valor de `fechaActual`.


El mismo `DateTimeFormatter` se utiliza para formatear y analizar el texto. Así se garantiza que `fechaRecuperada` representa el mismo día que `fechaEntrega`. `ChronoUnit.DAYS.between` calcula la diferencia entre ambas fechas, por lo que la última línea mostrará `Días restantes: 10`. Las dos primeras líneas dependerán del día en que se ejecute el script.

