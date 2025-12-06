---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIDJRFW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwYgifMbFnorNOtyMfPgZtXEbbj3YUTX%2B16Lw1KbkGfAiBtaid6ZBeuFOjgsvQDw6fRnjBzyXoX5QlwMr5jKcgimir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMWnCQmrKdp9PnwEvtKtwDaSCVnkBnZRW8ubTZqlIraNttBFLOCkikxcO3dVWojso0JjXEl3IDDXQQIp5u53hdwTdT7U1QJlPtM3oKLYe3M0TicM0Ug%2BqKvGooLmGqfTuGVt0wuQbg9Vj1INbED%2FOZofw9Gkfef5khvhPkKXfOBbrVz0dTRkBK7Dpqm9ZiBqn2jI%2FugkYBN9sGukPF3edT24m9rwfNqxim71zvJaxyBPCEL%2FhwIzD6cXV8J9Of7K82GOzrhxOzvXEuWMUg4ANd%2F6E1S6BKWRQgwVTRVpWoWwGsWcFQuDw1TDbEBzd%2BYhgE1S48oZJLOHfNxs9SpyggzR1kpjyf2GekYqtaLRNKFfX2rMoq%2B2fPcDK6NqHPnJ2mKT%2B2OQyFMrc8JywKuyOEBlpbE0OHnXBMvKZYv%2BsSpFW8DcWSvyv6ESw8CTO2Q9I9QTwC%2F7iciSaTLZx%2FKpq8X5AqOde%2F9L6VPdYqmGz%2FmZCqqZfR%2BP67HX1vXhLzOrz9clTtuhmw9MWNTpHl19mlzgvdx9IRyn90Z1o9v1rTk7EZRplAnfYuOF6jf2OCYMeYJpFvQ08ww6rNEs54qeRsjmj1PcXbrdmJIuhnaHDOYRmFSgSQOwUXaKowMpqyk6yVRn2eIc%2BpuZZ7ovUwr8nRyQY6pgGLy%2Fm6pOhgv69iUpuA25fcxvmOXlBnd4c9aDIfZGexfATC84qVtmpIbLPq1nE7ugwis4pGqRqGruRX1Uss92XFbxhb5r1jfDRCFPzv%2Fe0OWIQY%2BvN94cWFkDp5xx9lWBVG1jbUmfzweQYjD7HjG%2FZXwWp9wRd97YY1GTfov2pT3zoFbUhIOBFcVPuV32fheN1rT0sTKdj1knlfRjjNE1QT0Vi3B%2Boc&X-Amz-Signature=71376f534eff281f7daca3ce616edd5f81ae7e94601c3505de1b315cc26e5eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIDJRFW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwYgifMbFnorNOtyMfPgZtXEbbj3YUTX%2B16Lw1KbkGfAiBtaid6ZBeuFOjgsvQDw6fRnjBzyXoX5QlwMr5jKcgimir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMWnCQmrKdp9PnwEvtKtwDaSCVnkBnZRW8ubTZqlIraNttBFLOCkikxcO3dVWojso0JjXEl3IDDXQQIp5u53hdwTdT7U1QJlPtM3oKLYe3M0TicM0Ug%2BqKvGooLmGqfTuGVt0wuQbg9Vj1INbED%2FOZofw9Gkfef5khvhPkKXfOBbrVz0dTRkBK7Dpqm9ZiBqn2jI%2FugkYBN9sGukPF3edT24m9rwfNqxim71zvJaxyBPCEL%2FhwIzD6cXV8J9Of7K82GOzrhxOzvXEuWMUg4ANd%2F6E1S6BKWRQgwVTRVpWoWwGsWcFQuDw1TDbEBzd%2BYhgE1S48oZJLOHfNxs9SpyggzR1kpjyf2GekYqtaLRNKFfX2rMoq%2B2fPcDK6NqHPnJ2mKT%2B2OQyFMrc8JywKuyOEBlpbE0OHnXBMvKZYv%2BsSpFW8DcWSvyv6ESw8CTO2Q9I9QTwC%2F7iciSaTLZx%2FKpq8X5AqOde%2F9L6VPdYqmGz%2FmZCqqZfR%2BP67HX1vXhLzOrz9clTtuhmw9MWNTpHl19mlzgvdx9IRyn90Z1o9v1rTk7EZRplAnfYuOF6jf2OCYMeYJpFvQ08ww6rNEs54qeRsjmj1PcXbrdmJIuhnaHDOYRmFSgSQOwUXaKowMpqyk6yVRn2eIc%2BpuZZ7ovUwr8nRyQY6pgGLy%2Fm6pOhgv69iUpuA25fcxvmOXlBnd4c9aDIfZGexfATC84qVtmpIbLPq1nE7ugwis4pGqRqGruRX1Uss92XFbxhb5r1jfDRCFPzv%2Fe0OWIQY%2BvN94cWFkDp5xx9lWBVG1jbUmfzweQYjD7HjG%2FZXwWp9wRd97YY1GTfov2pT3zoFbUhIOBFcVPuV32fheN1rT0sTKdj1knlfRjjNE1QT0Vi3B%2Boc&X-Amz-Signature=d739262aa5b431cf2d4e82a6d62bf2c2f87617c531ded34c2a3442545f2ed751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

