---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJEQUY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvOkzvJYv6r6AR6T5JvObv6rD40enM6iMEOojEE9I4AIhAIt%2Fc8cPNyFyUiTPLgNleXGuvc6NrGzp6%2BFoPLsOD3K5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzhjMCwSiI%2Fge1OeHsq3APX3RwFM94lhOyNSPZLhX2scUdgFFIMKf4svergjjHrAlXswkbnSy9zhWIcbiuWvLXeu3bClVv3P54R2cct2N%2FFV60%2F6UJM1grT5yo%2FEBHSswSgghFlFGV5dkDj5NhuyqQ63TUL%2B3LcoDHwx7paDICMuUZ5KR%2BPxKicG6nlihHmBiHfe5GPeKeTZh7qYtI4APr5zWPNjRfx2yaInoD5AwXRBJD0Stp5xhVeaJlYjnacSBLlsv8iV96utKtYvs%2F7ph9DMQwtY6fA4CRikqFE1VYu3zx%2FO217MS48b%2BVfs18G2aIl%2Bt3UPdFcbUOKo6%2Bhge335MBZ%2Fs5%2Fk6y0f12qFEJhyf4pmrOP%2FyzFThc%2F4K2TgQgCbDxteQthMbD3LCZGZ4bfZCZ%2BWcmaLSR%2Fdsw%2BfgdCf4kgN9YUIJlYDnX8k0UPtn4rt9SrEu0EUo1NR0y79qjeHg7SnZsy%2BMuiTGxJmpfxCC%2B9OOJcEUwdGi3Er20K60E3Biefs11HRnSzkS3pfmi6ne2IOHQEZ%2Fov54lSup%2Bne4MRHBese6JX89XmYR91kguyObpNCPsMzS8PhE46EYf4kyYj1pBgVPcxUOei0xn7lCI%2FNyuvh7GYHkoYMpVd0iaBkX8y4%2Fw8zwpqBTDEptDJBjqkAf1oHCFsPxW5yPY4eFYzbT38tQG%2BK0%2Fj5IDDiLaFp2faDlK11%2Fs%2Fmvnt8z4CBuNDo%2Fkwt7fG%2Fgq8vkGq4ZIYK032hYAuAWwE5Uikqri5FugtYl61mvxP1%2BCfA0aPuSgXPGysnj5xrWAwDDVAsvL9AJci6m7MS0tzk62kT6k5TGhFiJXLTYb1Yxj5Wom9TqYIaaz4Lq7SgncKMA5S8KqpoTnSV2W0&X-Amz-Signature=6f732a9dc744537f3b384d1593c427096c919896587a83a2ebf0935c1c02aaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJEQUY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvOkzvJYv6r6AR6T5JvObv6rD40enM6iMEOojEE9I4AIhAIt%2Fc8cPNyFyUiTPLgNleXGuvc6NrGzp6%2BFoPLsOD3K5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzhjMCwSiI%2Fge1OeHsq3APX3RwFM94lhOyNSPZLhX2scUdgFFIMKf4svergjjHrAlXswkbnSy9zhWIcbiuWvLXeu3bClVv3P54R2cct2N%2FFV60%2F6UJM1grT5yo%2FEBHSswSgghFlFGV5dkDj5NhuyqQ63TUL%2B3LcoDHwx7paDICMuUZ5KR%2BPxKicG6nlihHmBiHfe5GPeKeTZh7qYtI4APr5zWPNjRfx2yaInoD5AwXRBJD0Stp5xhVeaJlYjnacSBLlsv8iV96utKtYvs%2F7ph9DMQwtY6fA4CRikqFE1VYu3zx%2FO217MS48b%2BVfs18G2aIl%2Bt3UPdFcbUOKo6%2Bhge335MBZ%2Fs5%2Fk6y0f12qFEJhyf4pmrOP%2FyzFThc%2F4K2TgQgCbDxteQthMbD3LCZGZ4bfZCZ%2BWcmaLSR%2Fdsw%2BfgdCf4kgN9YUIJlYDnX8k0UPtn4rt9SrEu0EUo1NR0y79qjeHg7SnZsy%2BMuiTGxJmpfxCC%2B9OOJcEUwdGi3Er20K60E3Biefs11HRnSzkS3pfmi6ne2IOHQEZ%2Fov54lSup%2Bne4MRHBese6JX89XmYR91kguyObpNCPsMzS8PhE46EYf4kyYj1pBgVPcxUOei0xn7lCI%2FNyuvh7GYHkoYMpVd0iaBkX8y4%2Fw8zwpqBTDEptDJBjqkAf1oHCFsPxW5yPY4eFYzbT38tQG%2BK0%2Fj5IDDiLaFp2faDlK11%2Fs%2Fmvnt8z4CBuNDo%2Fkwt7fG%2Fgq8vkGq4ZIYK032hYAuAWwE5Uikqri5FugtYl61mvxP1%2BCfA0aPuSgXPGysnj5xrWAwDDVAsvL9AJci6m7MS0tzk62kT6k5TGhFiJXLTYb1Yxj5Wom9TqYIaaz4Lq7SgncKMA5S8KqpoTnSV2W0&X-Amz-Signature=e588751b28497139c2d2a803aa103b84c1789c8a586b7fbd5eaa1d57fa950657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

