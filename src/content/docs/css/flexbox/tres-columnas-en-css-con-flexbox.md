---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFHHQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBslMGa4xagqy%2B6xshDAdYjel48iHoChPw9TJD%2BILJOwIhAMT1nL0NFMja%2BDaeh4%2FRzltxNbGJX%2F6%2FKGNp7e5xuCrDKv8DCHUQABoMNjM3NDIzMTgzODA1Igy3AXgHKaSbiyBOrNAq3APS7IGdgPsbAXapUxD2PHOz2pxKqr8pep791B8i5QvY%2Fnh75HoEDWh0Y9%2B%2FSqLWyiKzLpo%2FcwbHaBQkICsZATurCVMCkFSyrHqPYG0Tkk7w5yAQXzAPoLotOVHps0MbVe09%2FIDeP%2BBnjNXtIl3nCjGv3kdPRiG70juxzR4yyun%2B2ZVd5quZMOL7XEL%2B0Z%2FagGREhBs%2B%2FCTh1S%2Bs1U1YexFCJrgc7PfAIrgQk1L2w88R6Cmvyr9ZgsmLJdoWwHa6lJ4MF9qRQP8i5YJJdP3F0tGFOKh4leSQQYbBPEBdFO4B8hbpFysIA5WnhTF3xiEGx%2F%2FEMJb5lUxBiqu%2FqAFflMGKsZOo4kQpYKOo8RblbX8h9vwQWndfb6pJm87AXOwxgZAndjXjhlU0cbPFI4OMOatVpmcN%2Fmn6hyMsTC9lra9vqqMNkJwanaAUF9f%2FFzdZTk0Vu6TMWi5cUEelusiF7Rb8ea5kCm0ZZWonrDLiaH3wKpusEa4P%2B8TyBt4yVVT5UifWtS2oMvmUjvoqFRjPBVx0bxcYn3JmmsaUz%2FteHRlexeuaxglzusrA1ghmFfFzE4uy8JrDRlNnr4J6MaHN0EP8CDPvS0nJj9tUzEMjSJeD3WYpeLYewmMkAWaYCjD1ptDJBjqkAZ3zb8w3fZWWIBBjT4LaVNc46MJzqBIBqgpJ6qRahon3Dbn2h3GG0Ofpb%2FQBKzgnvzS%2B8teO3VF5yRm0icGY5JQxz%2Bm%2FUL%2Ff3HKXFAB3UUyI7IzQXOdZ3vnrtN9UWqz5JnSrulttefjJccPs6k8q52EM%2BgXP8X%2BgLkGnVviC8pNw%2FsUEhF2A2dqoo7A7DYgfpunHWZX9Gg051AGPe6Ddlouhyr7A&X-Amz-Signature=8866500350827fa3696a330b261b2e62764dc1e8d51970a7426e46727e19c22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGVFHHQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBslMGa4xagqy%2B6xshDAdYjel48iHoChPw9TJD%2BILJOwIhAMT1nL0NFMja%2BDaeh4%2FRzltxNbGJX%2F6%2FKGNp7e5xuCrDKv8DCHUQABoMNjM3NDIzMTgzODA1Igy3AXgHKaSbiyBOrNAq3APS7IGdgPsbAXapUxD2PHOz2pxKqr8pep791B8i5QvY%2Fnh75HoEDWh0Y9%2B%2FSqLWyiKzLpo%2FcwbHaBQkICsZATurCVMCkFSyrHqPYG0Tkk7w5yAQXzAPoLotOVHps0MbVe09%2FIDeP%2BBnjNXtIl3nCjGv3kdPRiG70juxzR4yyun%2B2ZVd5quZMOL7XEL%2B0Z%2FagGREhBs%2B%2FCTh1S%2Bs1U1YexFCJrgc7PfAIrgQk1L2w88R6Cmvyr9ZgsmLJdoWwHa6lJ4MF9qRQP8i5YJJdP3F0tGFOKh4leSQQYbBPEBdFO4B8hbpFysIA5WnhTF3xiEGx%2F%2FEMJb5lUxBiqu%2FqAFflMGKsZOo4kQpYKOo8RblbX8h9vwQWndfb6pJm87AXOwxgZAndjXjhlU0cbPFI4OMOatVpmcN%2Fmn6hyMsTC9lra9vqqMNkJwanaAUF9f%2FFzdZTk0Vu6TMWi5cUEelusiF7Rb8ea5kCm0ZZWonrDLiaH3wKpusEa4P%2B8TyBt4yVVT5UifWtS2oMvmUjvoqFRjPBVx0bxcYn3JmmsaUz%2FteHRlexeuaxglzusrA1ghmFfFzE4uy8JrDRlNnr4J6MaHN0EP8CDPvS0nJj9tUzEMjSJeD3WYpeLYewmMkAWaYCjD1ptDJBjqkAZ3zb8w3fZWWIBBjT4LaVNc46MJzqBIBqgpJ6qRahon3Dbn2h3GG0Ofpb%2FQBKzgnvzS%2B8teO3VF5yRm0icGY5JQxz%2Bm%2FUL%2Ff3HKXFAB3UUyI7IzQXOdZ3vnrtN9UWqz5JnSrulttefjJccPs6k8q52EM%2BgXP8X%2BgLkGnVviC8pNw%2FsUEhF2A2dqoo7A7DYgfpunHWZX9Gg051AGPe6Ddlouhyr7A&X-Amz-Signature=64d720d13e13ebf62786600147ea4503973dae4d38570d6a112fd830d62acabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

