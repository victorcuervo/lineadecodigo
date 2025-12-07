---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNO2GAM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuZo7X%2FVMvSIghIPyzhZ1DHoJHwPPEr8MGtxYlA2Z6TAiA8P2nTu6KON97U7XSbEyAISx3GrGV0YqAL%2BHXhEZfbAiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHKXWTy746Wiz7WeOKtwDst3zfBr7oVXNhKdgSnivIDLrh4XWRVgjT2eiitPu6wFE%2Fk%2FACMhUIVzZYQi2XcvVsuPlkrhcKzvCVxFjs2%2FwbZRwjFTFq19sibAdoHTE9Hq298IpnYDQxP4ECW%2B7C3UFbjjM55RAUXAmOac6QEx7M31DTAxuWKpGCztohM4JIQSsFosbdzGn%2F6CpyldRtZRDnzp3lcISi%2BWyi1uu%2B7xiPpvMvoU%2FLOtHs48NM7TbsN5tYeg4jET2GBePeYQ%2B2XR%2FXcQjgW%2BeUHr3hu16zo0lFqEOCoU5qbVxKIO4R0LnVfzqGxYQHgHw8P4aH%2Brg41dpCBJFBK4YpHsWgteStQZqOUBPNDAR0KwABlr5yy0KinzfJfVvk2YOrWVg5aSEDv8FOVRwOChsPsFT8gTwfEqSC7T%2FNQsFFWHVysGXgv8s8sAdXQLioYTz4HnYdUJEYgOCInQq%2FWkmUw%2F%2FndIpoMI1%2FRkb8UfdxJ%2FKfOnNpLYRIjwexhmlXtolGAMOss5S%2FpbPPCxTnv6%2BpJ4IOwJ898Yi4notEMHGVJvR7NCcWrLKGlfZBdWYHqcxzpqFF4gepStV9dhuj7YxIgLAJ849AIixE7zaS1i7X8TH94l0ZR%2FJso5DUkIM97uBIaF7Jf8w4MfXyQY6pgGsvbEhNfS3xTswPQC4%2FEESgt9M0cv7e0fOQ9fC56k9vMhO4pJ8E8qfbkIYX%2BbrbMKxtiXCrCDinh7fGnjGfRVFenWtgDFuQEoIQcA8BY%2Fqu9ot10j2dg2pVlEizA8fXWfHSX30MkOb%2F1Gwym1u0SZilvx8r4gJy%2BwEyYxwZThEy1zt4%2FumbUWzssAwVSqJMKWylaNTv6zzQfkn4ITJ%2BAKTsOpjiFys&X-Amz-Signature=410a659863f89e0e1cf21655791d3c1d4c5ee299b0361632448ca0cdff3dbf75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNO2GAM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuZo7X%2FVMvSIghIPyzhZ1DHoJHwPPEr8MGtxYlA2Z6TAiA8P2nTu6KON97U7XSbEyAISx3GrGV0YqAL%2BHXhEZfbAiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHKXWTy746Wiz7WeOKtwDst3zfBr7oVXNhKdgSnivIDLrh4XWRVgjT2eiitPu6wFE%2Fk%2FACMhUIVzZYQi2XcvVsuPlkrhcKzvCVxFjs2%2FwbZRwjFTFq19sibAdoHTE9Hq298IpnYDQxP4ECW%2B7C3UFbjjM55RAUXAmOac6QEx7M31DTAxuWKpGCztohM4JIQSsFosbdzGn%2F6CpyldRtZRDnzp3lcISi%2BWyi1uu%2B7xiPpvMvoU%2FLOtHs48NM7TbsN5tYeg4jET2GBePeYQ%2B2XR%2FXcQjgW%2BeUHr3hu16zo0lFqEOCoU5qbVxKIO4R0LnVfzqGxYQHgHw8P4aH%2Brg41dpCBJFBK4YpHsWgteStQZqOUBPNDAR0KwABlr5yy0KinzfJfVvk2YOrWVg5aSEDv8FOVRwOChsPsFT8gTwfEqSC7T%2FNQsFFWHVysGXgv8s8sAdXQLioYTz4HnYdUJEYgOCInQq%2FWkmUw%2F%2FndIpoMI1%2FRkb8UfdxJ%2FKfOnNpLYRIjwexhmlXtolGAMOss5S%2FpbPPCxTnv6%2BpJ4IOwJ898Yi4notEMHGVJvR7NCcWrLKGlfZBdWYHqcxzpqFF4gepStV9dhuj7YxIgLAJ849AIixE7zaS1i7X8TH94l0ZR%2FJso5DUkIM97uBIaF7Jf8w4MfXyQY6pgGsvbEhNfS3xTswPQC4%2FEESgt9M0cv7e0fOQ9fC56k9vMhO4pJ8E8qfbkIYX%2BbrbMKxtiXCrCDinh7fGnjGfRVFenWtgDFuQEoIQcA8BY%2Fqu9ot10j2dg2pVlEizA8fXWfHSX30MkOb%2F1Gwym1u0SZilvx8r4gJy%2BwEyYxwZThEy1zt4%2FumbUWzssAwVSqJMKWylaNTv6zzQfkn4ITJ%2BAKTsOpjiFys&X-Amz-Signature=c2d27b5731112cb13975f1245cdb9b87664bc5dce13d6ab4c5cde322c6ad83e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

