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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQNJOYOM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIG3EAJcnor2LgpoIuNjgUWg9w6EP5sKugLyMB24%2FwPEBAiEA15c35FjltWwDSknzv7F8uh9eEHATmMJdqewVHGsYhPoq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGhjviOfiJ0HRLNWKCrcAwi9hrRdL1f8mNBo8VQk72gltDIIHJ1OCXHCrFbYyZ%2FmmjOr0NKUm7W8pEfpSuD8ZEY2FPw%2FUNeqht1buvqrcduzQFQZdFHbkQFFp6JYy8JZLtnZBFLrHf3vY6j%2B3NvqR%2BxPBZ%2BIH%2B3bLGRyv2SnBQYPg8chpBykckOL2lQtHS51gLdh%2FspG67gOgizQzwgVyGHFOzjM0mREJwXo%2BYL2%2FkKKU2Y2yF2yjIZpvcpciWVwJEo%2BwGpV9zRolk8RkEvhCYae2m5Cwu9Mp5ikKSJ8no6OhytswdzW1%2BgEnsphkecO2Q0IS58gIQ2nqotHn6QLFs8X4r15%2FQyqYyKbMN%2BA3hVwDa0jvd6Ng84aUL45UoVDa48PherzyJ%2FafklQSI3BeBXWxbaC0NU5rs0mmUji%2FwtQzbkKb4qSzQxTN5uOn2bSg%2Fo%2BLxMQkJJ9f2KGgpsSaYwk%2FdLzlENgJz6%2F9rPWd5307ED7VJrGyGhGhPHHgiD3giblFlOuoiZcPLY6bIU36D4b5J6E0CvpXtcaJ4BO9z6eVvgm64JyOF6YnXKlkBZdRi1fqpUi23CPkBVm6u4nDiO79xghxXn0IKPs%2BWXJTRbSVDcK7ge0h7%2FT5PCqWPAXib91kVM9MDUvzi3aMLSmwckGOqUB%2BxKlIhWkMteJd5eYua271NWsXy0OVxqWrL4NFf%2FC1G508Z9iFvtNPv0Wn58sI%2FZWbkw%2B6RvVSSRo0ZMlwda9gFykPBDNYPR19pY26eddsO8OI%2FpINoGvhZx1f7%2B%2FNYCT7UA%2B%2Bc3LBTZ0OfaS1tszoGsewZniPWdZjolOXeKH%2FtWl8deAn7lE8nMJV2Dm8wigD08E1tX%2B8xTztyoxsLdL6uUVhCcx&X-Amz-Signature=d3fd0904acd9dfc3a5816b6b756fdf09349dc4c575224b073e0989b1b9b2310a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQNJOYOM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIG3EAJcnor2LgpoIuNjgUWg9w6EP5sKugLyMB24%2FwPEBAiEA15c35FjltWwDSknzv7F8uh9eEHATmMJdqewVHGsYhPoq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGhjviOfiJ0HRLNWKCrcAwi9hrRdL1f8mNBo8VQk72gltDIIHJ1OCXHCrFbYyZ%2FmmjOr0NKUm7W8pEfpSuD8ZEY2FPw%2FUNeqht1buvqrcduzQFQZdFHbkQFFp6JYy8JZLtnZBFLrHf3vY6j%2B3NvqR%2BxPBZ%2BIH%2B3bLGRyv2SnBQYPg8chpBykckOL2lQtHS51gLdh%2FspG67gOgizQzwgVyGHFOzjM0mREJwXo%2BYL2%2FkKKU2Y2yF2yjIZpvcpciWVwJEo%2BwGpV9zRolk8RkEvhCYae2m5Cwu9Mp5ikKSJ8no6OhytswdzW1%2BgEnsphkecO2Q0IS58gIQ2nqotHn6QLFs8X4r15%2FQyqYyKbMN%2BA3hVwDa0jvd6Ng84aUL45UoVDa48PherzyJ%2FafklQSI3BeBXWxbaC0NU5rs0mmUji%2FwtQzbkKb4qSzQxTN5uOn2bSg%2Fo%2BLxMQkJJ9f2KGgpsSaYwk%2FdLzlENgJz6%2F9rPWd5307ED7VJrGyGhGhPHHgiD3giblFlOuoiZcPLY6bIU36D4b5J6E0CvpXtcaJ4BO9z6eVvgm64JyOF6YnXKlkBZdRi1fqpUi23CPkBVm6u4nDiO79xghxXn0IKPs%2BWXJTRbSVDcK7ge0h7%2FT5PCqWPAXib91kVM9MDUvzi3aMLSmwckGOqUB%2BxKlIhWkMteJd5eYua271NWsXy0OVxqWrL4NFf%2FC1G508Z9iFvtNPv0Wn58sI%2FZWbkw%2B6RvVSSRo0ZMlwda9gFykPBDNYPR19pY26eddsO8OI%2FpINoGvhZx1f7%2B%2FNYCT7UA%2B%2Bc3LBTZ0OfaS1tszoGsewZniPWdZjolOXeKH%2FtWl8deAn7lE8nMJV2Dm8wigD08E1tX%2B8xTztyoxsLdL6uUVhCcx&X-Amz-Signature=865fd9825139ee9eb089e0e5a430ec96ad7fd774ac23a5f27194ffcfcd3d408a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

