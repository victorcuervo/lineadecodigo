---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPMCWWP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb4XdhEcQPnSwzSTvgOINFsNcgCiqAZgrGZCr5LZtZBQIhAP0jviGD9zSWXI1WfMga7UQh%2BMaFSi%2FksK6JKmDWXb8mKv8DCHUQABoMNjM3NDIzMTgzODA1IgzDVFo2rutvFtNn5Dsq3APkI69WkDCyFJnObrRu0%2FWyezZhR20%2B5WhQLrGpyIHrvdMfxUJ74XxjlBL5LLo9sDJr0jTQqN7NuXVh48JVgcRpkFFd7UVIGISRgjGy73Bv1KYJ7Wl0HpDi36JqhdNAPZ3JIntJroRlXODp6WGHVdKFeGEVDj2Y5XPmzMdVfi3IYDHv50T3O7SN3Yh9YiVqF%2Bs7k48H7MCKgr42vks7lOBX1aRrX3ZEUDdMq90QCPLP5bfr4xEX3BgM4ykGJ%2Fis6i39bwA%2Fm1k1SkcMd%2Fq%2FK7R4scdlziJYr44p%2FonyQqBWedHiFw%2Basmbp05Iay62BiTypmVDgK9S4u19bu0CKQXxJMw4I%2BXQIqKV%2FIJb4VvDgtTcSWzBnQkG4ovEkNsIdp0jGwjPfKN9ds6Dit%2BzjDntCLCM3RHINK89PgoDSGqTx4hHVtGkk9IAR%2BBCWePEerasgI6T0mICxUHSzUwJE41SrzFzq9Ec9cjsAckvIRRM%2BytXlMJfy3vMBf%2Big%2FRpeS%2FYm5VnR3hi1QLNJ4xFIlJ0PgCE%2FEVOyrF%2BzHOWVjEf%2FlN%2BVc%2BOVmOb%2B4SYW9lZGIiGGJDsV2x%2FLyvZWRXZ3llZJIlApVAOmzS3wkDfjllVsbMkaDPk07x2tfKIaqDDQptDJBjqkAZuQQIj6N0wt0Kr5YQoWGdOvJGpGCYqHyfxQ2wO5b7NiMAGmgcqk1TPQT3%2FodmNp6m383YfV8fYp8po%2BFjoMmbzJBykdnwtSGzw2XvV3GVgbUvaeUWeN5qRETvSgAzntR3qsrv2xbCyPBV0z67g7BwsPJdBPMGLxhr55noLb%2B6kQOEuVwNvsoSKpwK9TvjJLRd%2BnSlXr0Pt1tnm1yszGE0xUDL%2Be&X-Amz-Signature=11d8bdc21eba9d807305377782dee25439306a08e2f214389cdcdf9d6e78c296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPPMCWWP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb4XdhEcQPnSwzSTvgOINFsNcgCiqAZgrGZCr5LZtZBQIhAP0jviGD9zSWXI1WfMga7UQh%2BMaFSi%2FksK6JKmDWXb8mKv8DCHUQABoMNjM3NDIzMTgzODA1IgzDVFo2rutvFtNn5Dsq3APkI69WkDCyFJnObrRu0%2FWyezZhR20%2B5WhQLrGpyIHrvdMfxUJ74XxjlBL5LLo9sDJr0jTQqN7NuXVh48JVgcRpkFFd7UVIGISRgjGy73Bv1KYJ7Wl0HpDi36JqhdNAPZ3JIntJroRlXODp6WGHVdKFeGEVDj2Y5XPmzMdVfi3IYDHv50T3O7SN3Yh9YiVqF%2Bs7k48H7MCKgr42vks7lOBX1aRrX3ZEUDdMq90QCPLP5bfr4xEX3BgM4ykGJ%2Fis6i39bwA%2Fm1k1SkcMd%2Fq%2FK7R4scdlziJYr44p%2FonyQqBWedHiFw%2Basmbp05Iay62BiTypmVDgK9S4u19bu0CKQXxJMw4I%2BXQIqKV%2FIJb4VvDgtTcSWzBnQkG4ovEkNsIdp0jGwjPfKN9ds6Dit%2BzjDntCLCM3RHINK89PgoDSGqTx4hHVtGkk9IAR%2BBCWePEerasgI6T0mICxUHSzUwJE41SrzFzq9Ec9cjsAckvIRRM%2BytXlMJfy3vMBf%2Big%2FRpeS%2FYm5VnR3hi1QLNJ4xFIlJ0PgCE%2FEVOyrF%2BzHOWVjEf%2FlN%2BVc%2BOVmOb%2B4SYW9lZGIiGGJDsV2x%2FLyvZWRXZ3llZJIlApVAOmzS3wkDfjllVsbMkaDPk07x2tfKIaqDDQptDJBjqkAZuQQIj6N0wt0Kr5YQoWGdOvJGpGCYqHyfxQ2wO5b7NiMAGmgcqk1TPQT3%2FodmNp6m383YfV8fYp8po%2BFjoMmbzJBykdnwtSGzw2XvV3GVgbUvaeUWeN5qRETvSgAzntR3qsrv2xbCyPBV0z67g7BwsPJdBPMGLxhr55noLb%2B6kQOEuVwNvsoSKpwK9TvjJLRd%2BnSlXr0Pt1tnm1yszGE0xUDL%2Be&X-Amz-Signature=596ac153f6ee9e313cabb196fc84a17364624ba1b810868d8b54e508c839d191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

