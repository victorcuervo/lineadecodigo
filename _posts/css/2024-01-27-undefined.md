---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4GUU6D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDvqE0Edn7yIC6Dg0Qe8gEjj6fnEVW5RKMDAwUhr2Gv8QIgbfKPPQc1SmtOqVi3i4wr1UHBTtVfGzsEio2kTXUkd2Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDE7soaPThMja%2B7zK8ircAwe4J3Bg2MPaS%2FCTSGUGyixR1%2FGy58de5bSPmRTs%2Fw%2FeXee4A%2FMWr5olN4r9oHsEn%2BHf7%2FsRlkD2iOvkxUxMEg%2B0EuJ1FU%2F78kAMgLNNqNSvg5SHi7tSOjbTqE6Xhrl%2BcHP7xKzvR6tmfBvu2P3G%2BXBpmhosfxZfvVQdNkjWxLDJAYPuB4LcCXp%2Bau6C1i9KutbeI0RdHzqlJXodvhRXP0F%2Fq1VQLDfjiWZCi0Mhi635lpKrBQC8e4MqL63VVufXu4k2wx0KYJj8XUrYpyqUwcdlcOKpwFs%2BNTsYEq%2BEHyh8phKPV%2Fxuh54%2Fk5nCUQ%2BsWhxy2ywJCy8b9NayPVNOWAkLwRovpLu0H6f2VXgyBDDCdu8ji6mxVPK4%2BrI6kZWPcDUMxgySvAjOKO8KvpyjOVZ40v9ZciAxiLRrBZvFy6Dk8TX3Vk6BG6Dcf65AzmED6QXuUMo25f4txuIRUcRw9akgqpncEiU2UvhiI3Hqh1DwEew3C3O9jThxgXjCIdCbLfJHFr83E48to%2FigvDV7c4XCSWVnbDJP6pWg%2BvLkAjOjpnhiIT2N2sfUET9Ywr8n%2B4X2SdpdmbcKrMu%2BLsjNVL1dJt2LbhDhNNzySdiX2BFezQx8vf9ydLZKCFseMO2lwckGOqUBxKo%2BdIyemVFKX2A7Jqn1LBqAvBSDOnMxmzS2h6ZdLk79FWXOshdo8tWoLL4UUEMQm0E18dUroUzglCvhGTkt72VALWF3zXzvIok%2FoUCV6M47arUhjR%2FT4y3UGQtrl2%2B1WzEYS%2FIg%2F2zBxk6HjOQ1Ws9QAz47z%2BdWqsdonD5iTvdu99ydOSknlz9LgG43GCBSQACjd4%2FYPTnYjS4OvIiyP%2FOGzPkc&X-Amz-Signature=224b017bdf1de22d9ba628c68e4ac211c8dc6ee6348c05a232ad2dcb5487780a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4GUU6D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDvqE0Edn7yIC6Dg0Qe8gEjj6fnEVW5RKMDAwUhr2Gv8QIgbfKPPQc1SmtOqVi3i4wr1UHBTtVfGzsEio2kTXUkd2Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDE7soaPThMja%2B7zK8ircAwe4J3Bg2MPaS%2FCTSGUGyixR1%2FGy58de5bSPmRTs%2Fw%2FeXee4A%2FMWr5olN4r9oHsEn%2BHf7%2FsRlkD2iOvkxUxMEg%2B0EuJ1FU%2F78kAMgLNNqNSvg5SHi7tSOjbTqE6Xhrl%2BcHP7xKzvR6tmfBvu2P3G%2BXBpmhosfxZfvVQdNkjWxLDJAYPuB4LcCXp%2Bau6C1i9KutbeI0RdHzqlJXodvhRXP0F%2Fq1VQLDfjiWZCi0Mhi635lpKrBQC8e4MqL63VVufXu4k2wx0KYJj8XUrYpyqUwcdlcOKpwFs%2BNTsYEq%2BEHyh8phKPV%2Fxuh54%2Fk5nCUQ%2BsWhxy2ywJCy8b9NayPVNOWAkLwRovpLu0H6f2VXgyBDDCdu8ji6mxVPK4%2BrI6kZWPcDUMxgySvAjOKO8KvpyjOVZ40v9ZciAxiLRrBZvFy6Dk8TX3Vk6BG6Dcf65AzmED6QXuUMo25f4txuIRUcRw9akgqpncEiU2UvhiI3Hqh1DwEew3C3O9jThxgXjCIdCbLfJHFr83E48to%2FigvDV7c4XCSWVnbDJP6pWg%2BvLkAjOjpnhiIT2N2sfUET9Ywr8n%2B4X2SdpdmbcKrMu%2BLsjNVL1dJt2LbhDhNNzySdiX2BFezQx8vf9ydLZKCFseMO2lwckGOqUBxKo%2BdIyemVFKX2A7Jqn1LBqAvBSDOnMxmzS2h6ZdLk79FWXOshdo8tWoLL4UUEMQm0E18dUroUzglCvhGTkt72VALWF3zXzvIok%2FoUCV6M47arUhjR%2FT4y3UGQtrl2%2B1WzEYS%2FIg%2F2zBxk6HjOQ1Ws9QAz47z%2BdWqsdonD5iTvdu99ydOSknlz9LgG43GCBSQACjd4%2FYPTnYjS4OvIiyP%2FOGzPkc&X-Amz-Signature=561eb27d6d43b414820e9711ab3bcb33a215829cf050ec7263ac28a4d0d38f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

