---
title: "Hola Mundo en C#"
description: "Aprende a crear tu primer programa Hola Mundo en C# con .NET Framework 3.5. Usa WindowsForm y MessageBox.Show para mostrar mensajes en pantalla."
date: 2013-09-01
updatedDate: 2026-02-09
tags: ["messagebox","show","hola-mundo"]
slug: dotnet/csharp/hola-mundo-en-c
type: doc
topic: dotnet
id: addf40cd-b15d-4024-bc2d-886ad529729c
author: Catalina Fernández
---

**Hola Mundo en C#** es un artículo muy sencillo de introducción a C# con **.Net framework 3.5.**


En el ejemplo de Hola Mundo en C# crearemos una aplicación que nos muestre un mensaje que nos despliegue el saludo de "Hola Mundo"


## Creando el proyecto


Para realizar nuestro Hola Mundo en C# debemos de hacer lo siguiente. Lo primero será crear un nuevo **proyecto en Visual Studio de tipo WindowsForm**.


Una vez que tenemos nuestro proyecto, daremos doble click sobre el **Form1**, que es el formulario que se nos ha creado por defecto.


## Agregando el código


Esta acción nos ubica en el **método Load** de la aplicación; este método se encargará de ejecutar las instrucciones, al momento de cargar la aplicación. En este caso agregaremos el siguiente código dentro del **método Load**:


```c#
private void Form1_Load(object sender, EventArgs e) {
  MessageBox.Show("Hola Mundo en C#");
}
```


El método [**MessageBox.Show**](http://messagebox.show/) mostrará una ventana emergente con el mensaje que hayamos pasado en el parámetro del método. En este caso mostrará por pantalla una ventana que diga "Hola Mundo en C#".


Como podéis ver es sencillo hacer un primer programa Hola Mundo en C#. ¿Qué más te gustaría saber sobre C#?

