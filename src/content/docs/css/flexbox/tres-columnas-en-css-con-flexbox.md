---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2CV7WWB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSoYi0N2Sd%2BpAfzobm9HMuFwlCY0PTetyqNqt7aorJiAiEA57YqFszZptD%2FpdYIcrIroxEtGHl3anqRMR9F94c0%2F2Aq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2Fvkdx6wEP%2BYadM8ircA7PWwNqAYMLlbMuOuj%2BGl%2FINyVywO%2BNNqsWpcRWDWsNNmEn4NBMcG1kO1QDdRWQ5ydfExiegs4tLqOgSiZcrJ2s0%2FdTyz8UVFtcABq9rLfyophjmmoIH8zAkI0PWUiBnkiQVHIW%2BzvvB5UJkKPdIA%2B%2BHrxE%2FwCY11baE8OLvmqn%2FzBtb%2Bw8ujOHVjUIwEX40f%2FJ96efIR%2BVQWpeTb8DUH5HZCzsur9CgYq90Z9Vq5Od7NPQan0353xz2gjXMtf2I0yazupVrEfYwVRcXPAFFU%2FsrsOivcDCNaVQj8f7bDc2Sf%2BlRxtrq9EuVtIGFhe5Z7jl0%2BpGNoHDnLeIQvO4WxYZr59t3jI04ot2Ee4xjcgok6eKjsg0v30Mdi0kkUCHLAHkAJbtfSQEjFNLkQfyCjO8%2B4NxfH%2Fu0d3TYQcmtW0bthz11m6rhZGTb01uF18bET%2BGalwDX1fBXDp9aw3sNNyrI5M5qTXYM1U23lkWEV1KHIMXDNib9wIOrjbtL9fFhknS%2BBKhEcWQMrH%2FO8D56rUlUyyw26d2inkSGZKK6gI9k2K%2F%2Bw%2Fbu7fq0t8ceC5bXtbniGhNWddH%2F2EN4JiLXnRlYD%2Bj7Ut62aQGBNd4YWTbRlTvrtWHESo7LHCGYMPCez8kGOqUBWU8qBHDVq1faAWNj%2F%2BFXTVyi517%2B00C34QZyJTgxNXEIWL5%2Fi7XLB8XAOOc1TwlKt2wBAfu%2BVgNhU9uVDg4ekHWMCMwDqkmNyDDmODNah8y39vmHwUny90nHl1%2Fud1lJciK6pD7aarZ9eEP7JYQShrBB692JvjrSn1auHZfNtTAhqUDQgnoiTkpB12JviVTpyG3QkX2m7QtwziUdzCZ3gIKkVnBN&X-Amz-Signature=3b2721e9bcc00f32c1d261f34a9fd9cf128fe30c40d2d9df001b4a402f685a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2CV7WWB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSoYi0N2Sd%2BpAfzobm9HMuFwlCY0PTetyqNqt7aorJiAiEA57YqFszZptD%2FpdYIcrIroxEtGHl3anqRMR9F94c0%2F2Aq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2Fvkdx6wEP%2BYadM8ircA7PWwNqAYMLlbMuOuj%2BGl%2FINyVywO%2BNNqsWpcRWDWsNNmEn4NBMcG1kO1QDdRWQ5ydfExiegs4tLqOgSiZcrJ2s0%2FdTyz8UVFtcABq9rLfyophjmmoIH8zAkI0PWUiBnkiQVHIW%2BzvvB5UJkKPdIA%2B%2BHrxE%2FwCY11baE8OLvmqn%2FzBtb%2Bw8ujOHVjUIwEX40f%2FJ96efIR%2BVQWpeTb8DUH5HZCzsur9CgYq90Z9Vq5Od7NPQan0353xz2gjXMtf2I0yazupVrEfYwVRcXPAFFU%2FsrsOivcDCNaVQj8f7bDc2Sf%2BlRxtrq9EuVtIGFhe5Z7jl0%2BpGNoHDnLeIQvO4WxYZr59t3jI04ot2Ee4xjcgok6eKjsg0v30Mdi0kkUCHLAHkAJbtfSQEjFNLkQfyCjO8%2B4NxfH%2Fu0d3TYQcmtW0bthz11m6rhZGTb01uF18bET%2BGalwDX1fBXDp9aw3sNNyrI5M5qTXYM1U23lkWEV1KHIMXDNib9wIOrjbtL9fFhknS%2BBKhEcWQMrH%2FO8D56rUlUyyw26d2inkSGZKK6gI9k2K%2F%2Bw%2Fbu7fq0t8ceC5bXtbniGhNWddH%2F2EN4JiLXnRlYD%2Bj7Ut62aQGBNd4YWTbRlTvrtWHESo7LHCGYMPCez8kGOqUBWU8qBHDVq1faAWNj%2F%2BFXTVyi517%2B00C34QZyJTgxNXEIWL5%2Fi7XLB8XAOOc1TwlKt2wBAfu%2BVgNhU9uVDg4ekHWMCMwDqkmNyDDmODNah8y39vmHwUny90nHl1%2Fud1lJciK6pD7aarZ9eEP7JYQShrBB692JvjrSn1auHZfNtTAhqUDQgnoiTkpB12JviVTpyG3QkX2m7QtwziUdzCZ3gIKkVnBN&X-Amz-Signature=4d200a3ef7aa19956f3aabf3f5dd01362b1fc0e0ec269d56710701db8198dd61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

