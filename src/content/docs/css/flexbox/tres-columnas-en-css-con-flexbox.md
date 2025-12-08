---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGFIH44T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6ubmV4vLA1CrRzCNzEJjsMElJlWO0y2%2Bpn7EdV78GsAiBzy8SLIa6Qkov%2BV58Vk3VPzbieKQG%2BE7o3aqohbNj7NCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81IC4RKPqlx22zUkKtwDJOzbGczQM4gN0VErcz5PGkfKQdDnUgvjPlVqYPawfSNfdJxi32xj2tzpKjMR%2BJqF83xbGLYmGOpr5%2FN7lYnRds8KF2CPFgcMe7hEZyuj3nFlk38iwxj%2FhHAd9HRAtJ1D9%2FkRU1fcAwg0Yx4rnPr3SztS%2FeDSI0idCiQxC3DIcSVxFaFFZo1h3j%2B5kWKC0YMvtQOW3Gw1aGQQiRaCuKvoH9pmT1nPpgqagKubbF8nIBafcG05qAkK74QCIPloj8B66lT6aXdDl74EQD4cwXsPBCFdgRUgEFh78i5DySaagvH60EDU08dy0oID%2FCco0S3AqnClFjW%2F845Fq5Z2zAFSECYeBohf%2FFV5pa3j3jcJwogcMfVOLN%2F6Szu5v%2BIvnd9jbN2FIilPH8ON2iNLrHYLusQ%2BkRcdDkyJNp0sot4%2BfaxbeE%2FWdOLzgGoNyvQGcg2YEAW3oXdN3mB%2FnNlfqI33eKNEoIBPcvUNVCcMGixhTl1kpd6MKHMEfj7H%2Bm0UouVNTXh7zf1t1cRCWoZvxPYHjT7sW1oGVdvsPKY%2ByqN2svkFeNzZ%2FSRI2yWW2CzxDqx10myeTgEEJlVrg2RX9nYyLuXpOhw7UdWLOZeWy4VQgg3rLP9x6lL0ME4anIAwxoDdyQY6pgEB%2BMeBo5oNkkNZeky8ngBld6EIBQwbk%2BAOp05ZPzl5a22YDEX9ryF5dhhe8116tO3a7u9d8VXr2x746w7ZNTgNOBAkPz%2FKmvB5pUKMFVR%2FVg0OXbhX0vvqGoNjXFWdrber5fO%2BM%2FDDNiGgK0OVWzOyMtC2FQKWpFD9dtIi70RQ%2BNNvUAaA1xdc%2BXHiEn6sSCighYxJsuJKcJSyRVy%2FDyLjAfaYSroz&X-Amz-Signature=7887ae5debd4ccfe3969828cacd64eb7bfd1da3f3b1ad1a7b6ef22cfae99fa58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGFIH44T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6ubmV4vLA1CrRzCNzEJjsMElJlWO0y2%2Bpn7EdV78GsAiBzy8SLIa6Qkov%2BV58Vk3VPzbieKQG%2BE7o3aqohbNj7NCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81IC4RKPqlx22zUkKtwDJOzbGczQM4gN0VErcz5PGkfKQdDnUgvjPlVqYPawfSNfdJxi32xj2tzpKjMR%2BJqF83xbGLYmGOpr5%2FN7lYnRds8KF2CPFgcMe7hEZyuj3nFlk38iwxj%2FhHAd9HRAtJ1D9%2FkRU1fcAwg0Yx4rnPr3SztS%2FeDSI0idCiQxC3DIcSVxFaFFZo1h3j%2B5kWKC0YMvtQOW3Gw1aGQQiRaCuKvoH9pmT1nPpgqagKubbF8nIBafcG05qAkK74QCIPloj8B66lT6aXdDl74EQD4cwXsPBCFdgRUgEFh78i5DySaagvH60EDU08dy0oID%2FCco0S3AqnClFjW%2F845Fq5Z2zAFSECYeBohf%2FFV5pa3j3jcJwogcMfVOLN%2F6Szu5v%2BIvnd9jbN2FIilPH8ON2iNLrHYLusQ%2BkRcdDkyJNp0sot4%2BfaxbeE%2FWdOLzgGoNyvQGcg2YEAW3oXdN3mB%2FnNlfqI33eKNEoIBPcvUNVCcMGixhTl1kpd6MKHMEfj7H%2Bm0UouVNTXh7zf1t1cRCWoZvxPYHjT7sW1oGVdvsPKY%2ByqN2svkFeNzZ%2FSRI2yWW2CzxDqx10myeTgEEJlVrg2RX9nYyLuXpOhw7UdWLOZeWy4VQgg3rLP9x6lL0ME4anIAwxoDdyQY6pgEB%2BMeBo5oNkkNZeky8ngBld6EIBQwbk%2BAOp05ZPzl5a22YDEX9ryF5dhhe8116tO3a7u9d8VXr2x746w7ZNTgNOBAkPz%2FKmvB5pUKMFVR%2FVg0OXbhX0vvqGoNjXFWdrber5fO%2BM%2FDDNiGgK0OVWzOyMtC2FQKWpFD9dtIi70RQ%2BNNvUAaA1xdc%2BXHiEn6sSCighYxJsuJKcJSyRVy%2FDyLjAfaYSroz&X-Amz-Signature=c154e65681fe7c0aaa3ce168f7ab4f58d682386100add89d35a83c4392ec6f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

