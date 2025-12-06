---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK3BVSB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTgwQU1ijhsuzbOFLHnQW5Oj7%2F0GtvQm0mhqHpPMM9zgIgayhi8j%2B7ugm5HSFmuQj3DQAWOnFRFCXP0GMvhFGKKL4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOx3Fe2ZYm8%2BvGQh3yrcA6XZ7MiYdXufftqQqJYQqg%2FvoS0siyKLJ%2B92ZviPrpfYQF4Ufptr0NoIzOkjJkAzPdyKa27P9l9dgWcuk4t1IYrGiiskZV1U%2BvzD1JJ8ozCiEE2U7A1NjakDPQ28dQBEAM0Rl%2Bl4lho5j3Vzr7fUIh6Il4ynDWBac6hAZTVAKbDvFhdox%2BAJRxlVacXoC0q0Z0ltDRlJsJ%2BpDl34Ay8660ymLuprIx9W85B4Wo62%2B4QjLRmPaJYY0EjGQtfiBapu39Ige0kQAF5vgiYGrRt%2BdYPtqSsZWRfv5QIM5IMSMvsaN5RFp1jD%2FGgbGZLPEcKbuwaqJkw3h8JpNp4BUw%2BLLM7jeh%2FVpF6TidiWS1e3W82hkgJnRZQCbtRNHEz54j5pW80J0OuUDwPw4KpMsSRSXbvvmwomLtzyOu56Fk5MZNt217d4eEGL8y761zCXwueFib3DGbTj5Vscl5mKDZJAzmscRqLzj1oxT1RdrpoMHx3rLMwnZbMQ1TdNbbFVYYYDLKokOf%2F0rrJKn4Yov0pWegjHxlpLUL1II4UWwZv42G%2FLFE5p4o1RA57YuGlBECi3%2BKVG0%2B1mdKoGlpdsSu3GrI8LEiaDNBpHxwlF8LGNanplTC8Xasjffajk%2FrbSMKm8z8kGOqUBVTSfAEJhZJqydfPMAzilwrkK0fqW4Vf8ubN2J3bQQt1A3jlnuMYoR8prZj4BivDNmStqZiNoRSy3lLGLqo%2FdAnP11pITHGUkmHiO1%2F0H1Se0uKyDK5liy4hrCxrZ01S%2FGODkp1J2dUY0O0d1Vvy0Qwhbe6QYNcmFUjSUVn%2FhOZxdBDasRLU8mJsfTVo7VqiknOJArwrAVyoTGDPjdmvyCMPcAlVD&X-Amz-Signature=0b0b4065a47d2b6ab87e69974e00149c9682a7c096069530c26e5b9eda8ec627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAK3BVSB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTgwQU1ijhsuzbOFLHnQW5Oj7%2F0GtvQm0mhqHpPMM9zgIgayhi8j%2B7ugm5HSFmuQj3DQAWOnFRFCXP0GMvhFGKKL4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOx3Fe2ZYm8%2BvGQh3yrcA6XZ7MiYdXufftqQqJYQqg%2FvoS0siyKLJ%2B92ZviPrpfYQF4Ufptr0NoIzOkjJkAzPdyKa27P9l9dgWcuk4t1IYrGiiskZV1U%2BvzD1JJ8ozCiEE2U7A1NjakDPQ28dQBEAM0Rl%2Bl4lho5j3Vzr7fUIh6Il4ynDWBac6hAZTVAKbDvFhdox%2BAJRxlVacXoC0q0Z0ltDRlJsJ%2BpDl34Ay8660ymLuprIx9W85B4Wo62%2B4QjLRmPaJYY0EjGQtfiBapu39Ige0kQAF5vgiYGrRt%2BdYPtqSsZWRfv5QIM5IMSMvsaN5RFp1jD%2FGgbGZLPEcKbuwaqJkw3h8JpNp4BUw%2BLLM7jeh%2FVpF6TidiWS1e3W82hkgJnRZQCbtRNHEz54j5pW80J0OuUDwPw4KpMsSRSXbvvmwomLtzyOu56Fk5MZNt217d4eEGL8y761zCXwueFib3DGbTj5Vscl5mKDZJAzmscRqLzj1oxT1RdrpoMHx3rLMwnZbMQ1TdNbbFVYYYDLKokOf%2F0rrJKn4Yov0pWegjHxlpLUL1II4UWwZv42G%2FLFE5p4o1RA57YuGlBECi3%2BKVG0%2B1mdKoGlpdsSu3GrI8LEiaDNBpHxwlF8LGNanplTC8Xasjffajk%2FrbSMKm8z8kGOqUBVTSfAEJhZJqydfPMAzilwrkK0fqW4Vf8ubN2J3bQQt1A3jlnuMYoR8prZj4BivDNmStqZiNoRSy3lLGLqo%2FdAnP11pITHGUkmHiO1%2F0H1Se0uKyDK5liy4hrCxrZ01S%2FGODkp1J2dUY0O0d1Vvy0Qwhbe6QYNcmFUjSUVn%2FhOZxdBDasRLU8mJsfTVo7VqiknOJArwrAVyoTGDPjdmvyCMPcAlVD&X-Amz-Signature=0372ed5c189a6f9bd901bffe79e610a24bfc76f50a8de0f63f1ed3899c37018a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

