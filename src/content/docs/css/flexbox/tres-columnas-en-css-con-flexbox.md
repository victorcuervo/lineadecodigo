---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBMYIFM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMp5xubRavHsoX0zCA14jFrbLv3CqRbctEuhSJWrsknwIgVjJokfKNZH7YILZCC2waNylyczFvhpb67QjNu98JWhMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCSmBXUpqKEsAh3bJSrcA2ACZ60QRfI6%2BMBbeR2pkq8ruDmQxxQzF53Bh839KSXq8fYqNkdvYTODJvpXOUAy0nA0xva6wpWZMumcwcH6To%2F5xRBXwIu8FUjSfiEx6hYo1SOlwlx8r2r24%2BUdJDLWoc6qlkJe8uD5a8oi4IZkIaPaIqJN42VpklaIijcSekKk5wz0Oq3O9Hr3GeY5nd24lTLrdxoDalNCOz%2BengKzHW02hvMOZVxtHHLTl8s42a9bRwXYiW6eF%2FaE6yh1WzP5hPP0pRK8hAn9qulqXZfR2Dx0enl%2FVezn4vusKLmdRjRktBaE3KNN%2BNL1LZp1L06IHKr0UjK5UETrb7LGGXoF7LIf%2FMSlycQjKimo2TlbMyy3%2Fp51XhipujTJczsVyyS0TaS%2F8s1CtRcBv%2BNmQZL6PNjKefKSq6AT4kLUTiu8eoCz%2Bm%2FVGSeD2%2FcafTTs3jTWM9pLGnUQZUcr5RyRgxN1T8TH1zMXNE%2FSlaRvA9EeMFAhtGVXllGNG%2ByxiWEE%2FgPPAYYubKEcXvL0mYlZ0z0t4UQveTDAbyMKs%2Bm5iTdpezTdgk%2BfwxMsDx1QseP7A3fFaVy50YpQuZXXC0lxqZs5B%2BuT7yuRnjsU29un%2BKSN%2Fiw2wZ4ITLVaInDZxLXuMIDrz8kGOqUBBLn6tpBQKcqySRFp7e2yFqiQ20uhGuGyLMbf5bVMdYEARsoIxi6nq5%2FJVBUpXMn0T0esBThN9wxcaIsJccFkS4Etsukl5GyDiBe5iILr6nwz%2Bvn2tfeue8gwr8xHx4z8hSjIGpfj1ItrBKg5tsKPRAuhCibiX50x8px3gLvbXEgRniEC1jqPWDDdhKflnc1YmsX0RuMaIxB5nge1QTkNFYvHR7Fs&X-Amz-Signature=284ff1621969e40fa8c307a20923d97412ed1278262e78d25f8242be14efa730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBMYIFM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMp5xubRavHsoX0zCA14jFrbLv3CqRbctEuhSJWrsknwIgVjJokfKNZH7YILZCC2waNylyczFvhpb67QjNu98JWhMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCSmBXUpqKEsAh3bJSrcA2ACZ60QRfI6%2BMBbeR2pkq8ruDmQxxQzF53Bh839KSXq8fYqNkdvYTODJvpXOUAy0nA0xva6wpWZMumcwcH6To%2F5xRBXwIu8FUjSfiEx6hYo1SOlwlx8r2r24%2BUdJDLWoc6qlkJe8uD5a8oi4IZkIaPaIqJN42VpklaIijcSekKk5wz0Oq3O9Hr3GeY5nd24lTLrdxoDalNCOz%2BengKzHW02hvMOZVxtHHLTl8s42a9bRwXYiW6eF%2FaE6yh1WzP5hPP0pRK8hAn9qulqXZfR2Dx0enl%2FVezn4vusKLmdRjRktBaE3KNN%2BNL1LZp1L06IHKr0UjK5UETrb7LGGXoF7LIf%2FMSlycQjKimo2TlbMyy3%2Fp51XhipujTJczsVyyS0TaS%2F8s1CtRcBv%2BNmQZL6PNjKefKSq6AT4kLUTiu8eoCz%2Bm%2FVGSeD2%2FcafTTs3jTWM9pLGnUQZUcr5RyRgxN1T8TH1zMXNE%2FSlaRvA9EeMFAhtGVXllGNG%2ByxiWEE%2FgPPAYYubKEcXvL0mYlZ0z0t4UQveTDAbyMKs%2Bm5iTdpezTdgk%2BfwxMsDx1QseP7A3fFaVy50YpQuZXXC0lxqZs5B%2BuT7yuRnjsU29un%2BKSN%2Fiw2wZ4ITLVaInDZxLXuMIDrz8kGOqUBBLn6tpBQKcqySRFp7e2yFqiQ20uhGuGyLMbf5bVMdYEARsoIxi6nq5%2FJVBUpXMn0T0esBThN9wxcaIsJccFkS4Etsukl5GyDiBe5iILr6nwz%2Bvn2tfeue8gwr8xHx4z8hSjIGpfj1ItrBKg5tsKPRAuhCibiX50x8px3gLvbXEgRniEC1jqPWDDdhKflnc1YmsX0RuMaIxB5nge1QTkNFYvHR7Fs&X-Amz-Signature=d06d0967090bf0433227681f583d47fb517f9781c1f56756041b1ec15fb20a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

