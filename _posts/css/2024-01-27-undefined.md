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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSI56ZI5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC8zZ293zUMLsJuKfWpGUXEZTGnbnXBYX0MGRKBWPweWwIhANz6xiuoDfbRepBDcFa2EVFUMaorom6X4scf1Cw3R9mpKv8DCC4QABoMNjM3NDIzMTgzODA1IgyymqiyVIk18JkAvfgq3AMjOnABqVTrf%2Fe7jpHiDmACZjWx61xFEBjvRWe44EpOYH4D6ejeOO9s0MFjRhOaG7Pt9JclissGwqnUXL8edXd6zOKHTqd16s%2BB%2FNcGjF02MDBrFLW6t5RhYYUdRsZTPqdWjk2mYkiIs5Qp5RfOGb%2FecLDvvroTga0txRWGyyyyCWJQd%2BvgwjkNrl79F%2FwESgjA%2BIfkVwQ%2FwCLdT4gJUlPg4xgDrB61xW9KhID%2F%2BBppfhjixasD5EkgrqIgOopAVi3t%2BFwm06aufrA72Gz4aK2kS62z%2BwYxtjn4gfANIXPmFB5L0%2BtOZ%2BZghBWP7gGiaw317pS%2B%2FVn9HtHlQjGMm%2FFiN8zNFWXEiUZ9G1xsE6VFowTzADYR64mNPSDM7Vm59vp1jU3DzW3eD12%2FtuDRy1%2BQh9XVOkeXJEvh%2B8DsoRXuC33Oi7aLwyGRLHZ0rh1jiMi4y4BUorjxbHU4DYsQomROFD5GcZifuGu9taOOTjjLxUD5%2FCJOrBZXV2Co2vtQM7MrXpIWlt%2BUksIBns6disNYrSJf%2FqJF7QRN7E6FNtZgJioYCHe1xR7D17oxfnj%2FGAKGyfiwTJ0XZxSCN%2FjkJrSutFInvoaM5LcM0KqQ996fwVCk0Svd%2FHWzt6Kb9jCj6cDJBjqkAfq1pVeiyW1Wyst2QeYwS%2F4vvfPsHO2q%2F6AQgndQWjW9%2FAjM%2BO30nECtm9YPkU7MOa6Q5IK2L9yLKPQlaOzqaJA32GGwp04HDQpEanWn3OlyAk1NSMidHk5EdOrVUSDxHKiOr2QDAmCixBR2trLmtSefxNFZqVt2mavAOEY45CBjomQ3%2FwdpqM0XzRtrgakRt6RjJDOsE3iZH%2FCLbI4aQWwwNrdO&X-Amz-Signature=3f78d6f0ac9e6bd1dbcb819d44aa67b07d82a96eb7fbc9b7879f6ba4e827f65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSI56ZI5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC8zZ293zUMLsJuKfWpGUXEZTGnbnXBYX0MGRKBWPweWwIhANz6xiuoDfbRepBDcFa2EVFUMaorom6X4scf1Cw3R9mpKv8DCC4QABoMNjM3NDIzMTgzODA1IgyymqiyVIk18JkAvfgq3AMjOnABqVTrf%2Fe7jpHiDmACZjWx61xFEBjvRWe44EpOYH4D6ejeOO9s0MFjRhOaG7Pt9JclissGwqnUXL8edXd6zOKHTqd16s%2BB%2FNcGjF02MDBrFLW6t5RhYYUdRsZTPqdWjk2mYkiIs5Qp5RfOGb%2FecLDvvroTga0txRWGyyyyCWJQd%2BvgwjkNrl79F%2FwESgjA%2BIfkVwQ%2FwCLdT4gJUlPg4xgDrB61xW9KhID%2F%2BBppfhjixasD5EkgrqIgOopAVi3t%2BFwm06aufrA72Gz4aK2kS62z%2BwYxtjn4gfANIXPmFB5L0%2BtOZ%2BZghBWP7gGiaw317pS%2B%2FVn9HtHlQjGMm%2FFiN8zNFWXEiUZ9G1xsE6VFowTzADYR64mNPSDM7Vm59vp1jU3DzW3eD12%2FtuDRy1%2BQh9XVOkeXJEvh%2B8DsoRXuC33Oi7aLwyGRLHZ0rh1jiMi4y4BUorjxbHU4DYsQomROFD5GcZifuGu9taOOTjjLxUD5%2FCJOrBZXV2Co2vtQM7MrXpIWlt%2BUksIBns6disNYrSJf%2FqJF7QRN7E6FNtZgJioYCHe1xR7D17oxfnj%2FGAKGyfiwTJ0XZxSCN%2FjkJrSutFInvoaM5LcM0KqQ996fwVCk0Svd%2FHWzt6Kb9jCj6cDJBjqkAfq1pVeiyW1Wyst2QeYwS%2F4vvfPsHO2q%2F6AQgndQWjW9%2FAjM%2BO30nECtm9YPkU7MOa6Q5IK2L9yLKPQlaOzqaJA32GGwp04HDQpEanWn3OlyAk1NSMidHk5EdOrVUSDxHKiOr2QDAmCixBR2trLmtSefxNFZqVt2mavAOEY45CBjomQ3%2FwdpqM0XzRtrgakRt6RjJDOsE3iZH%2FCLbI4aQWwwNrdO&X-Amz-Signature=b6e6c5e930cf24e4f5ecbaf862bfe809fa336044ba2edbcf829a8aa72ebca9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

