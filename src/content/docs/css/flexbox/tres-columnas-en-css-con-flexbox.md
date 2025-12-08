---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTRYMEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1oT9R2%2Bogn2Ccu1EI03Su0qJJPb%2BZ3wSitWWFPd43gIhAMyW3PL8aYXf0KPP5sLVOci5%2BAWRIQraV5BiiLf3BH1PKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDToe3rgLztz0Sb4gq3AOt8%2BPV0By5ZvqrAC4Kq6n9r%2Frn7U03uxwHEvYrNkjRALWz0zOnI%2BEH%2B3Wez1IXppp6D8DOG1nMak39ZB0ztAodXTegu4hUS2IAmFJg%2BC23Ifdd4M22r%2FwR2h8gKJsxeRmcbs1G9By2Zi2BBnQ0uigGUA3E42Kn8TrqpbPNomDWvYT2M0CsmIkPxmT0OI6uEjKYGQ0ARFtlJLxSXmvXF%2BZrVmRf6vwXQU4Lp29FdQs5eurCeRf0uy%2Bpww1ntGIx4SchhkPpMw9%2BtNmo%2BDNR2EiqVVDGCBPMZCehzxZ%2F5Wk3CxNMN1lDv0sTJsa%2FpOQo0UcD6GjnjO4VSo1VtAp6b1nsktOTb8opMqHgbWEe6hmFQJrsr7pSDyFdemmgXowSLdh%2BzqOKxq9THug8YoHkdfgfBjPsPC3FcPlr80TvRhKTcA7f9gqybnUoHDFD%2BjUGcHZQjvmL521D4A%2BvbBoZw5PxJce%2B2gqwlSRXTp%2B9CQn6WjaXdzgF34cYslcx2UfXE%2FlBZKDKxzuDL8lOTjsxQewFGobr%2B%2F%2B4nWJOrGOn8d%2Bza6v7v7DZIR1hCg5MFNqldZkq3BHKKtp3Xs5o3HQHkk4fML564Od57pIPgNodaYbR9hKDyHoywy9qQxm9NTCO79jJBjqkAYcWpql%2FgJu%2FZtoxC8Ij00uUNgtwPZM0NRjxNWNjHjCdTWMuuvHFo9%2BLEKKL11ME92qF2MLLI2jA4r7Vt7jbFQMDNlbuKiBL0cBR2RQGfZ1iATGxGUcSNk6apMwvLf8EdX%2BWdWTO0BewRBK7m58srBCXZSQB9BB7kFFHzhmLGl4tHS96ougV%2BDZmNqtNYg0%2FbMPa2EEdngHd68pd%2F3IQOj1tk8jV&X-Amz-Signature=11d5e1d4271b0917fe7935b01cf05aa8a97ba5ac61e5f9cfd450445dad3e1bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKTRYMEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd1oT9R2%2Bogn2Ccu1EI03Su0qJJPb%2BZ3wSitWWFPd43gIhAMyW3PL8aYXf0KPP5sLVOci5%2BAWRIQraV5BiiLf3BH1PKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDToe3rgLztz0Sb4gq3AOt8%2BPV0By5ZvqrAC4Kq6n9r%2Frn7U03uxwHEvYrNkjRALWz0zOnI%2BEH%2B3Wez1IXppp6D8DOG1nMak39ZB0ztAodXTegu4hUS2IAmFJg%2BC23Ifdd4M22r%2FwR2h8gKJsxeRmcbs1G9By2Zi2BBnQ0uigGUA3E42Kn8TrqpbPNomDWvYT2M0CsmIkPxmT0OI6uEjKYGQ0ARFtlJLxSXmvXF%2BZrVmRf6vwXQU4Lp29FdQs5eurCeRf0uy%2Bpww1ntGIx4SchhkPpMw9%2BtNmo%2BDNR2EiqVVDGCBPMZCehzxZ%2F5Wk3CxNMN1lDv0sTJsa%2FpOQo0UcD6GjnjO4VSo1VtAp6b1nsktOTb8opMqHgbWEe6hmFQJrsr7pSDyFdemmgXowSLdh%2BzqOKxq9THug8YoHkdfgfBjPsPC3FcPlr80TvRhKTcA7f9gqybnUoHDFD%2BjUGcHZQjvmL521D4A%2BvbBoZw5PxJce%2B2gqwlSRXTp%2B9CQn6WjaXdzgF34cYslcx2UfXE%2FlBZKDKxzuDL8lOTjsxQewFGobr%2B%2F%2B4nWJOrGOn8d%2Bza6v7v7DZIR1hCg5MFNqldZkq3BHKKtp3Xs5o3HQHkk4fML564Od57pIPgNodaYbR9hKDyHoywy9qQxm9NTCO79jJBjqkAYcWpql%2FgJu%2FZtoxC8Ij00uUNgtwPZM0NRjxNWNjHjCdTWMuuvHFo9%2BLEKKL11ME92qF2MLLI2jA4r7Vt7jbFQMDNlbuKiBL0cBR2RQGfZ1iATGxGUcSNk6apMwvLf8EdX%2BWdWTO0BewRBK7m58srBCXZSQB9BB7kFFHzhmLGl4tHS96ougV%2BDZmNqtNYg0%2FbMPa2EEdngHd68pd%2F3IQOj1tk8jV&X-Amz-Signature=fd45d11bb60bd846393ee32c2753c35192dd6d785e27048d7f43f4f22f339a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

