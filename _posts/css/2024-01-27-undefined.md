---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IT7XRKQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDbaiVmSQLsE1b3GaNXR%2FAiOP4TVUIyyQwdokVJF6EZKQIhANfLYN48B9MekfwQrizs8vIxfDdmz27e27XlnvYJcUhOKv8DCCcQABoMNjM3NDIzMTgzODA1IgzWqx2Rn57IS4mevMEq3ANXe9WpZEUFkDyLNTxseOTfK8z7b129CHX%2Fw4QCSmIQghUBnnYiPXUc6ev6gvsfilP855Jk%2FemD4MpL2SHN07eE2zAQeyMFuGQimNXc%2FbMRkh5OXaiv0L0C0rrYENYY8HNEkE4GI4vbtUpn5jXMbbKAyvrM9uUNnLisn7XHtCcKegrtiqPYVzRLCtj2qNQqTPFnXKES8bQaWNgSupGe4IcmTVdnHJ3ChTR8vfeHKBbd6G3EvVU57JN3h0nKL8pweIvdD%2B5VMeA82oLtV0DA%2Fmh%2BNRQw%2BiRGCwiEYT%2BetAewbIuKDys8SoPGVH%2FjVLjCIgni0hHCIzU3EGzMjRFcrdUU4p6uZrGkUJa8j%2Fe8ajFCtnfBBCqp5feKz1js%2FNS0u6HXbNk%2FoEsyzWll%2BOlJeGSGtSAgv%2FDVXBwef8jPhts1qHGAihmzx92aJrelArkWtp77A9AvIF5u0I6g4WmFzW2kNZ00MaI3yuH93xix0UHXjSvMEBIb4FWJ6C9zMtkbTGgzW2s6mDZDH6uZLDDHwM%2FCAdkob2InzjyAD6QHZHJphwA75iyLVm22UNbLF31IL3%2Fx%2Bvhtl6RavhA4Mzv1pakzre6cYojDeHFYtIEBmfVNHyadGrWdOXoq%2FFlyLzDimr%2FJBjqkAZ5dkNYfPGQYEQaMpQkrEQ8JU57ndLWYDmWwH0Dn%2Brzo40jMIWAcDwJFKyfZ4yywqHdgAu2wmmfU3Zh5wfgL5miof07vHhelYImQRhonyxftgWTL6Smy9urhWLbAnRf2iQ9BM4qZ2yD1WZWXrh0q%2BYne0EQUN4qpHwMdjKst6qLzGT6RcFjWeebJ%2BxT84EjywyMfl%2Fc99MtvHpvhrCBE6gJvt%2Feo&X-Amz-Signature=a9cf4b128cbe5494b310754015ddcf6c69eeeeb1fe4a8c0b43211b8b2d63fe4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IT7XRKQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDbaiVmSQLsE1b3GaNXR%2FAiOP4TVUIyyQwdokVJF6EZKQIhANfLYN48B9MekfwQrizs8vIxfDdmz27e27XlnvYJcUhOKv8DCCcQABoMNjM3NDIzMTgzODA1IgzWqx2Rn57IS4mevMEq3ANXe9WpZEUFkDyLNTxseOTfK8z7b129CHX%2Fw4QCSmIQghUBnnYiPXUc6ev6gvsfilP855Jk%2FemD4MpL2SHN07eE2zAQeyMFuGQimNXc%2FbMRkh5OXaiv0L0C0rrYENYY8HNEkE4GI4vbtUpn5jXMbbKAyvrM9uUNnLisn7XHtCcKegrtiqPYVzRLCtj2qNQqTPFnXKES8bQaWNgSupGe4IcmTVdnHJ3ChTR8vfeHKBbd6G3EvVU57JN3h0nKL8pweIvdD%2B5VMeA82oLtV0DA%2Fmh%2BNRQw%2BiRGCwiEYT%2BetAewbIuKDys8SoPGVH%2FjVLjCIgni0hHCIzU3EGzMjRFcrdUU4p6uZrGkUJa8j%2Fe8ajFCtnfBBCqp5feKz1js%2FNS0u6HXbNk%2FoEsyzWll%2BOlJeGSGtSAgv%2FDVXBwef8jPhts1qHGAihmzx92aJrelArkWtp77A9AvIF5u0I6g4WmFzW2kNZ00MaI3yuH93xix0UHXjSvMEBIb4FWJ6C9zMtkbTGgzW2s6mDZDH6uZLDDHwM%2FCAdkob2InzjyAD6QHZHJphwA75iyLVm22UNbLF31IL3%2Fx%2Bvhtl6RavhA4Mzv1pakzre6cYojDeHFYtIEBmfVNHyadGrWdOXoq%2FFlyLzDimr%2FJBjqkAZ5dkNYfPGQYEQaMpQkrEQ8JU57ndLWYDmWwH0Dn%2Brzo40jMIWAcDwJFKyfZ4yywqHdgAu2wmmfU3Zh5wfgL5miof07vHhelYImQRhonyxftgWTL6Smy9urhWLbAnRf2iQ9BM4qZ2yD1WZWXrh0q%2BYne0EQUN4qpHwMdjKst6qLzGT6RcFjWeebJ%2BxT84EjywyMfl%2Fc99MtvHpvhrCBE6gJvt%2Feo&X-Amz-Signature=12500399c83c8b60b37f949f3315598385c78b4004be6213329d51628fd2e71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

