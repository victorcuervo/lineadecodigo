---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KDAHCM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhxbCYyxHRhmdWD8YOg2NWQueMZWasGSjXyZpisaD3aQIgUOBO5YWuOxVUgrQ7PeMRKzqNGe0tPdduU30ck0pMkOIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHRwYkUE0ECQsZu0ircA1zupK7k%2FgwZLumXk3paFZpPc%2BUf9i70znDqQK0f9tDTqg0Ki9xbn5Rz4O5sQWIUrBPq3om3peYAVNYzj3q1LEsXr7HvS2L0Yr%2Fx0RgAWmB1DtCJrLlcnH2H5E9%2B83hmC4laSrZ8P5aymXtKbOle2eiF94wrK0ToRcjd4psMokvDFHPEYaXow1FiUN%2BN5eQji%2FfYzsLHJombTtQr2Cz4zXDs3zt5Dz0JWsBOoesVSL0fOTZ1qzpf6l1DE%2F1KUEPm%2BZUz1ITF9Oif0B8gPc9I11%2BsQRUHh9%2Bvu0Vzm0v9dQqvqghMIYfenfS4xbVv%2FKTlraWaTWzpBaKBMaRelxt%2FamYa70qF7wwUl%2BVZ1DR2Uri29ueI1mG4kV5FkBc72fAQog7Nv4qS49VtaMoPeJmIKxSCPdMdw0ipRd%2B2Wmfz2pJl9wWsTp5N13VnJynuUspslkPrOPqU2yKpqBzEHyEI4CnrFnFK4Akn5mN%2BTCiAnAnnFTtTUiRhGX0rexb0YYPIxtEZQhm%2Bueoy9lCkcXWUh%2FiYK29bsMNRTjJnSELaK4zEvR6HtV9EjA31AI2GFBiKm47rTKs9qhnlbSBineU16DIUYC0xKq7I9HYdoARtJZc%2FcHqp3xhjWL6BmiuJMLeZ1ckGOqUBg0VtzsSWVapfqMUDv6QV%2BHF%2F7l4UhUE%2FaGiCsjltNMkbVIniOF5%2FNfAM8DTIDtxzGJ8Niz18YFFhMhBt%2F3C3EZfll5bbaBdEjxmyx%2F%2Fy6NhJ6jyROG%2BnNEMRdryJMQ7u5CqJXJhz2z%2BWuO1a1PybzL6IRghGc%2BF645Fs19GeFh06oIRCRxQ9Nfk8SIPumnrzX7gLgmOLMMAuIWR57rtq5TK1uUey&X-Amz-Signature=084fdf3dc77c9f73450fad4793bf64b3582f99fc93423f47148f11a3a6378bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KDAHCM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhxbCYyxHRhmdWD8YOg2NWQueMZWasGSjXyZpisaD3aQIgUOBO5YWuOxVUgrQ7PeMRKzqNGe0tPdduU30ck0pMkOIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHRwYkUE0ECQsZu0ircA1zupK7k%2FgwZLumXk3paFZpPc%2BUf9i70znDqQK0f9tDTqg0Ki9xbn5Rz4O5sQWIUrBPq3om3peYAVNYzj3q1LEsXr7HvS2L0Yr%2Fx0RgAWmB1DtCJrLlcnH2H5E9%2B83hmC4laSrZ8P5aymXtKbOle2eiF94wrK0ToRcjd4psMokvDFHPEYaXow1FiUN%2BN5eQji%2FfYzsLHJombTtQr2Cz4zXDs3zt5Dz0JWsBOoesVSL0fOTZ1qzpf6l1DE%2F1KUEPm%2BZUz1ITF9Oif0B8gPc9I11%2BsQRUHh9%2Bvu0Vzm0v9dQqvqghMIYfenfS4xbVv%2FKTlraWaTWzpBaKBMaRelxt%2FamYa70qF7wwUl%2BVZ1DR2Uri29ueI1mG4kV5FkBc72fAQog7Nv4qS49VtaMoPeJmIKxSCPdMdw0ipRd%2B2Wmfz2pJl9wWsTp5N13VnJynuUspslkPrOPqU2yKpqBzEHyEI4CnrFnFK4Akn5mN%2BTCiAnAnnFTtTUiRhGX0rexb0YYPIxtEZQhm%2Bueoy9lCkcXWUh%2FiYK29bsMNRTjJnSELaK4zEvR6HtV9EjA31AI2GFBiKm47rTKs9qhnlbSBineU16DIUYC0xKq7I9HYdoARtJZc%2FcHqp3xhjWL6BmiuJMLeZ1ckGOqUBg0VtzsSWVapfqMUDv6QV%2BHF%2F7l4UhUE%2FaGiCsjltNMkbVIniOF5%2FNfAM8DTIDtxzGJ8Niz18YFFhMhBt%2F3C3EZfll5bbaBdEjxmyx%2F%2Fy6NhJ6jyROG%2BnNEMRdryJMQ7u5CqJXJhz2z%2BWuO1a1PybzL6IRghGc%2BF645Fs19GeFh06oIRCRxQ9Nfk8SIPumnrzX7gLgmOLMMAuIWR57rtq5TK1uUey&X-Amz-Signature=70bfbb3ee85a0de0b492da82d00da7fe8d02265e3fac6e82f78242588585e1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

