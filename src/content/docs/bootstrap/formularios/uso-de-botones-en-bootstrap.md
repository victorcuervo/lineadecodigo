---
title: "Uso de botones en Bootstrap"
description: "Descubre cómo usar botones en Bootstrap con estilos personalizados que mejoran la interacción del usuario y optimizan la experiencia visual en tu web."
date: 2013-09-28
updatedDate: 2026-02-02
tags: ["button"]
slug: bootstrap/formularios/uso-de-botones-en-bootstrap
author: victor_cuervo
type: doc
id: 6e0cbe7a-f1cf-4a99-8908-f8031a4e613c
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/basicos/botones-en-bootstrap.html
---

He visto muchas formas de acabar construyendo un botón dentro de una página web. Parece que ya desde hace tiempo se ha canalizado con el tema del elemento `button`. Y es por ello que cuando estemos trabajando con botones e Bootstrap, este no podía ser menos y nos permite configurarlos apoyándonos en dicho elemento. Así que si queremos insertar botones en Bootstrap solo tenemos que usar el elemento `button`.


```html
<button type="button">Mi boton</button>
```


Vale, solo nos muestra un botón. Claro, y es que lo bueno del uso de botones en bootstrap es que podemos darle estilos. Para ello Bootstrap nos aporta las siguientes clases:


## Estilos de botones

- **Botones por defecto**, es un botón en Bootstrap normal y corriente.
- **Botones primarios**, son los botones que nos sirven para indicar la acción principal del formulario. Bootstrap nos ofrece la clase `btn btn-primary`
- **Botones para acciones positivas**, si lo que queremos es desencadenar una acción positiva podemos utilizar la clase `btn btn-success`
- **Botones informacionales**, para mensajes de información hacía el usuario, Bootstrap nos da la clase `btn btn-info`
- **Botones de aviso**, si lo que queremos es sacarle un aviso al usuario utilizaremos la clase `btn btn-warning`
- **Botones de alarma**, servirán para avisar de un error y la clase que lo representa para los botones es `btn btn-danger`

## Código de ejemplo


Así, si queremos insertar botones en Bootstrap tendremos el siguiente código fuente:


```html
<button class="btn btn-default" type="button">Default</button>
<button class="btn btn-primary" type="button">Botón primario</button>
<button class="btn btn-success" type="button">Acción Positiva</button>
<button class="btn btn-info" type="button">Información</button>
<button class="btn btn-warning" type="button">Aviso</button>
<button class="btn btn-danger" type="button">Error</button>
```


Visualmente el efecto que tendrán estos botones será:

