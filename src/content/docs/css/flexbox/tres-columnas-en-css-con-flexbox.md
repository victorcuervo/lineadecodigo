---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF76JVYH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNd6i1HEYxLRJKGxRdS1zBuu9cYXmdb%2FPe1xRZvVLI1AiBcX5fh1uMQvkD2tX5ccz7LX0Qo82du61%2FafceARjQrpSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMZ68ls6NmHGD4x28gKtwDwx0bRUDghfTUSfJy4or0SFINA8WL1tYBrL%2FWD%2Bu9BV4Ic3RQumiijtqtvT6FHbDSXeXJUumeIQhSLHlrZE0Z3Ue2WF%2FTa%2BnOShpNhDLFgV4RSBhHcwQOfO6h5%2B0urMunu0OmIjh61UjsnupRMoo7Vfu70NO8PvD1tDtwfCjUU%2FuK3SMgshb4VjPLL6dPWCjSvTtSfTw8bYkUrhxbbpt4I%2Fej%2F9jsyn7NWNuxXmUPuKquHzSF9YbUdzDyNIfSMYshDHxK62%2FV6Leus72OtAAaG%2FUNCiaI8Zi2%2FMBxU42eJu4Osw37Vx0elcAhgNPUlA%2FzWF%2F%2FHuh7oYDVmd1UCKolLGR84XW3OubUOtlrhrYi8wiZTU2hqS5UZJY85%2FIIvJkEYf5cS%2Bzfx1%2B9xDEg%2BTPtrQpHfcMf1xJFgQz7kuAuLZtD0TEM3ZyIP7vrUePIAwLatuqYKmhsxQaFVuu%2FjGtbR29NRlpD22IQCRg9qYKxgr%2FXdTdA9SlLxb91j3kXAklOY7IYo9vu9FVeGL6NTOL6NgBaWfUWtpNmAKIukiNnFrnpL3PJVp01NWUiAybDBigBebJWAlMCGf8kFNkVGBj8rgUd7azwDTqxgqzPmlt8qapOorgzy92QPIZ0%2FTswkfTLyQY6pgFMgH608dyQo6SBuQxLkMbdHZbFpn9G%2F2MybpO2nahd7cIbPFtA5kujNhD8qje5uV3FiKyXflKMdT%2BhasRf4urCdjp98g5bbZuldO3WLZ5%2FxLF%2Ftbvu0Ks2ypU4mHamoKLlYClETxpF%2FTRQpYMroxPoM7Jokx98c2N44puZ7cfszhgz%2FE5tTpc3WRYu5v4yXYR7C5FdTSN5hB4g14t2Xlw67WC7zgFq&X-Amz-Signature=b5f3f3dd7e7d0357b1d845f4b2d8464a7ce85cddb46ff80152c7b9272e4be1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF76JVYH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNd6i1HEYxLRJKGxRdS1zBuu9cYXmdb%2FPe1xRZvVLI1AiBcX5fh1uMQvkD2tX5ccz7LX0Qo82du61%2FafceARjQrpSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMZ68ls6NmHGD4x28gKtwDwx0bRUDghfTUSfJy4or0SFINA8WL1tYBrL%2FWD%2Bu9BV4Ic3RQumiijtqtvT6FHbDSXeXJUumeIQhSLHlrZE0Z3Ue2WF%2FTa%2BnOShpNhDLFgV4RSBhHcwQOfO6h5%2B0urMunu0OmIjh61UjsnupRMoo7Vfu70NO8PvD1tDtwfCjUU%2FuK3SMgshb4VjPLL6dPWCjSvTtSfTw8bYkUrhxbbpt4I%2Fej%2F9jsyn7NWNuxXmUPuKquHzSF9YbUdzDyNIfSMYshDHxK62%2FV6Leus72OtAAaG%2FUNCiaI8Zi2%2FMBxU42eJu4Osw37Vx0elcAhgNPUlA%2FzWF%2F%2FHuh7oYDVmd1UCKolLGR84XW3OubUOtlrhrYi8wiZTU2hqS5UZJY85%2FIIvJkEYf5cS%2Bzfx1%2B9xDEg%2BTPtrQpHfcMf1xJFgQz7kuAuLZtD0TEM3ZyIP7vrUePIAwLatuqYKmhsxQaFVuu%2FjGtbR29NRlpD22IQCRg9qYKxgr%2FXdTdA9SlLxb91j3kXAklOY7IYo9vu9FVeGL6NTOL6NgBaWfUWtpNmAKIukiNnFrnpL3PJVp01NWUiAybDBigBebJWAlMCGf8kFNkVGBj8rgUd7azwDTqxgqzPmlt8qapOorgzy92QPIZ0%2FTswkfTLyQY6pgFMgH608dyQo6SBuQxLkMbdHZbFpn9G%2F2MybpO2nahd7cIbPFtA5kujNhD8qje5uV3FiKyXflKMdT%2BhasRf4urCdjp98g5bbZuldO3WLZ5%2FxLF%2Ftbvu0Ks2ypU4mHamoKLlYClETxpF%2FTRQpYMroxPoM7Jokx98c2N44puZ7cfszhgz%2FE5tTpc3WRYu5v4yXYR7C5FdTSN5hB4g14t2Xlw67WC7zgFq&X-Amz-Signature=c5f209f8ca70c2108d59b61944581ed3a872d42354dc48d6c367b5491d9fc53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

