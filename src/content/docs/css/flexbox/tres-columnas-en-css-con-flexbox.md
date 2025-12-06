---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LTQPBF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSlz6sgj0CsjPnUxuEabVKnRKldrXzT4QHqeWQhEb2RQIhALc6SxvPeRFBYkSvirBa2YPA3PUwgkRzX04mOhSxkpMmKv8DCHQQABoMNjM3NDIzMTgzODA1IgwlOlnEYPgMdm4P4%2FQq3AOH8xRA5OZ00cjt8RPM9PX938PZUc6%2BErIMrSoC52TvkUvIFVq2JloV7Zi5ZI8uXStKCCQn0Lwzt8Oy882ecST5H%2FDElUBkc%2BoltrJF6eWdvfGI2LX5c6T1RyXrHYBuB9cuqDxXvkjrcZTltvprcF8Yiwvx2i5D4SMM6ETPQ7Y%2BMDi29Owle1zidgVTB%2FnLiYApnwX7ZFgCZ3VOl%2BOQmGuPzwVZo%2FXoFeZsddvCzmSMr6amjvNaddgvX5QM60Pfr8Zq52b%2Bd9fWsJIF%2B%2Fwjk6IZvVOgzu%2B2mu9jf459JQn46m%2F7es55Fl1J%2F%2Fphdg1glT80kOUSKZ62PNQLY%2F17gFswzmMC%2FVWYX9vMIPdHj4tChxLlwNdSceWz3kl8xpo29DTDISfuIksSE0Kk0T3%2FnJG0olBtnRz3i6C0lEkB%2F5Nqr%2FWKrQG%2FB0SahNPHR92tvPrxMu6n4XmVYqxYWhMnv%2FpEDYpd3m9hJgQ55v6EAhtTqypycnu9gRv9HX7XqW163VnMRZw%2BsNQzNGvYkcIb%2FxINeLeBskPFsBeb3Ddo1meAmeQiBmkuK%2BmmVZRtH2r335AxVmZfkacR0P9vKvKMaI%2Fg8NQBjyb5uO2LHrZgag8mVlCntnckCQCgtrde3jDeidDJBjqkAVpOBJNVOJJ4G7Gyi87STlAByi2hwGAcNSvCel%2BX%2BJbi63ucpduGi9%2BdviVG9a%2FY0jPj8gnP1uldW7lzaq6oqoNltHBTBdlWVKCYghZ%2FeFosjrA4lAv0%2FHFDiZnux9r%2F4kRTaAgS0yEpcJ3Z4jCTntNKGzRDXOKRyxd3M4wFVS%2FBAiQSmvwqhC1hwLA9vrkC082jkZQ6QhTHq7iFhZjPUy4bT7kD&X-Amz-Signature=d168f497a9208f0fb030e2a0c66b12c1725c9c58539efd3d924898c4d59650df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LTQPBF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSlz6sgj0CsjPnUxuEabVKnRKldrXzT4QHqeWQhEb2RQIhALc6SxvPeRFBYkSvirBa2YPA3PUwgkRzX04mOhSxkpMmKv8DCHQQABoMNjM3NDIzMTgzODA1IgwlOlnEYPgMdm4P4%2FQq3AOH8xRA5OZ00cjt8RPM9PX938PZUc6%2BErIMrSoC52TvkUvIFVq2JloV7Zi5ZI8uXStKCCQn0Lwzt8Oy882ecST5H%2FDElUBkc%2BoltrJF6eWdvfGI2LX5c6T1RyXrHYBuB9cuqDxXvkjrcZTltvprcF8Yiwvx2i5D4SMM6ETPQ7Y%2BMDi29Owle1zidgVTB%2FnLiYApnwX7ZFgCZ3VOl%2BOQmGuPzwVZo%2FXoFeZsddvCzmSMr6amjvNaddgvX5QM60Pfr8Zq52b%2Bd9fWsJIF%2B%2Fwjk6IZvVOgzu%2B2mu9jf459JQn46m%2F7es55Fl1J%2F%2Fphdg1glT80kOUSKZ62PNQLY%2F17gFswzmMC%2FVWYX9vMIPdHj4tChxLlwNdSceWz3kl8xpo29DTDISfuIksSE0Kk0T3%2FnJG0olBtnRz3i6C0lEkB%2F5Nqr%2FWKrQG%2FB0SahNPHR92tvPrxMu6n4XmVYqxYWhMnv%2FpEDYpd3m9hJgQ55v6EAhtTqypycnu9gRv9HX7XqW163VnMRZw%2BsNQzNGvYkcIb%2FxINeLeBskPFsBeb3Ddo1meAmeQiBmkuK%2BmmVZRtH2r335AxVmZfkacR0P9vKvKMaI%2Fg8NQBjyb5uO2LHrZgag8mVlCntnckCQCgtrde3jDeidDJBjqkAVpOBJNVOJJ4G7Gyi87STlAByi2hwGAcNSvCel%2BX%2BJbi63ucpduGi9%2BdviVG9a%2FY0jPj8gnP1uldW7lzaq6oqoNltHBTBdlWVKCYghZ%2FeFosjrA4lAv0%2FHFDiZnux9r%2F4kRTaAgS0yEpcJ3Z4jCTntNKGzRDXOKRyxd3M4wFVS%2FBAiQSmvwqhC1hwLA9vrkC082jkZQ6QhTHq7iFhZjPUy4bT7kD&X-Amz-Signature=7853a812980997cbf212cc35c464082db439607ab89097e76c69181ae7f41eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

