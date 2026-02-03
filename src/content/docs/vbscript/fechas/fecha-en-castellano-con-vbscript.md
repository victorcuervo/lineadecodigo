---
title: "Fecha en castellano con VBScript"
description: ""
date: 2007-01-18
updatedDate: 2026-01-07
tags: ["date","Day","month","select-case","vbMonday","vbTuesday","vbWednesday","WeekDay","Year"]
slug: vbscript/fechas/fecha-en-castellano-con-vbscript
author: victor_cuervo
type: doc
topic: vbscript
id: b4ea31ce-e5e0-46a2-a3ae-30e30a2ad379
---

La idea de este ejemplo es el mostrar por pantalla una fecha con el formato domingo, 25 de agosto de 2002 mediante el lenguaje [VBScript](http://www.manualweb.net/vbscript/). Por defecto si usamos el objeto Date lo que obtendremos será el formato 25/08/02, del cual, mediante algunas funciones, podemos obtener acronimos de los días y los meses, eso si, en formato anglosajón. Lo primero a realizar es separar en 3 partes la fecha. Para ello utilizaremos las siguientes funciones...


```visual basic
anno = Year(Date)
mes = Month(Date)
dia= Day (Date)
```


Tanto el año como el día van a quedar invariantes, pero el mes lo tenemos que formatear a una cadena de texto. La solución pasa por utilizar una estructura selectiva del tipo select case.


```visual basic
select case Month(Date)
  case 1
    document.write("Enero")
    ...
  case 12
    document.write("Diciembre")
end select
```


Para mostrar el día de la semana utilizaremos la función WeekDay() la cual nos devuelve un número indicando el día de la semana. Por defecto sigue la secuencia 1 para el Domingo, 2 para el Lunes,... y 7 para el sábado. Si queremos que la secuencia asigne el número 1 a otro día, tendremos que pasar dicho día a la función WeekDay() como segundo parámetro. Para esto podemos utilizar las constantes de VBScript vbMonday, vbTuesday, vbWednesday,... De tal manera que a partir de dicho número y utilizando nuevamente una estructura select case mostraremos el día de la semana como una cadena de caracteres...


```visual basic
select case WeekDay(Date,vbMonday)
  case 1
    document.write("Lunes")
  ...
  case 7
    document.write("Domingo")
end select
```

