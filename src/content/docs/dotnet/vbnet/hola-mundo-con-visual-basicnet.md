---
title: "Hola Mundo con Visual Basic.Net"
description: "Aprende a crear tu primer programa con Visual Basic.Net. Usa WindowsFormApplication, el evento Load y MsgBox para mostrar Hola Mundo en pantalla."
date: 2013-07-31
updatedDate: 2026-02-09
tags: ["load","msgbox","hola-mundo"]
slug: dotnet/vbnet/hola-mundo-con-visual-basicnet
type: doc
topic: dotnet
id: 58756bf7-dd4d-4e1e-8316-af3dc9d3fe1d
author: Catalina Fernández
download: https://github.com/victorcuervo/lineadecodigo_vbdotnet/blob/master/HolaMundoVBNet/HolaMundoVBNet.vb
---

Hoy les comparto un artículo muy sencillo de introducción a Visual [Basic.Net](http://basic.net/) framework 3.5. Crearemos un mensaje que nos despliegue el saludo de "Hola Mundo".


## Creando el proyecto


Para crear nuestro programa Hola Mundo con Visual [Basic.Net](http://basic.net/) debemos de hacer lo siguiente:

- Creamos un nuevo **proyecto en Visual Studio de tipo WindowsFormApplication** con lenguaje Visual Basic.
- Una vez que tenemos nuestro proyecto, daremos doble clic sobre el Form1.

## Agregando el código


Al dar doble click en el form nos ubica en el **método Load**, que se encarga de ejecutar, al momento de cargar la aplicación, las instrucciones que le daremos, en este caso agregaremos el siguiente código:


```visual basic
Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
    MsgBox("Hola Mundo")
End Sub
```


De esta manera, cuando corremos la aplicación podremos observar una ventana emergente que nos muestra el mensaje "Hola Mundo".


Con esta simple línea de código tendremos ya creado nuestro programa **Hola Mundo con Visual** [**Basic.Net**](http://basic.net/)

