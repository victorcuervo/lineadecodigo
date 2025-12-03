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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EG3PESD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCyCnePHcWcQ%2BuPJXsxGDc3bKG4YhDCk%2BQp%2Fss%2Fipg56gIgZ9Z4P1GYW9DIS%2FJdmaYwUxCE4uU2R7wy4jHZwJqxynoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO%2Brct3Fg5SEA7MV5CrcA7zXsYGmNKQEjNXgSDVCNkoB4DQxjPbFt2nhdWt8uVWid4fZ7x9k%2BDGATInCbE8n7eWzf9Ad0Xt1W73uDbsthK4i0VKuj0KZRWgD82LPr1RHpMvnzE4Xe2aMgaGubi6cx80oe%2BIXsHlZvmZsg%2FFE4q5BR%2BQt6bIGb4f5VX%2FLjKNOi5HsWBHCyA4yhPiDeqZJ6kIDPwixh%2FCheBmV6adFh9T2xjZIDNCb5NURamLVV16HTJ%2Bl3jpAvHtFJyKd791hzzioYI2OjOf0Nhx9EIjF7CzC3tNXFPtfF%2FNlK9NqlfPcwEzxe3PMDg8hkU9TkTWaM1ItSXNqEFZjQdPOvD7qFEEwfAj4D3VrW56ctFGY7GilvOqq3Ym1rzU41Yib4G%2BsSs%2FQSrIdFNWd3aPN35ZU9zDSohoedP0%2BY6uVY5N4qBJ4cxGZ7bVdDH%2BqvUZgXX5Vs2zKF68004PpUbmjYhoThWb8AV2YHfko3axyD2O1Y85eET2GaBfMzScIz%2F632i4rioBFJUfhL7ry2le8esdcxPpHdH2rhdj9yRdluP%2FHPuLgrQz2eqO7GN7DgMAb4Wekz4Q%2B2%2FPFQSXsaiptWETpzliPsMqQDntpb9f0JVB0cZ0D59XEZKBpam9l7zvPMKGvwMkGOqUBe73tF016nxZ1muQX%2B62kJJOYLo1xjxWhlg%2FrY0bEDOXrrbJG6ClbwXpJySsgUyxR0%2FGuezEIs123u5HTlgeCSGIqa9FcczuQ3QDA%2F9EiJRR5QPJaUv5FC3AdaU3faNf5qBOWaXRuNlZblwHJb1CIEDYbPIvteQwM%2BwS%2BzpDWk2UJTMXpTSrwORs%2Bt2uLFqYXkwG8YAsgr%2FtLcCwt9DOvn0CByrtY&X-Amz-Signature=3cbb3101115035278664d8dfca74f8352794611d72cdbc827af39ccb562ec12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EG3PESD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCyCnePHcWcQ%2BuPJXsxGDc3bKG4YhDCk%2BQp%2Fss%2Fipg56gIgZ9Z4P1GYW9DIS%2FJdmaYwUxCE4uU2R7wy4jHZwJqxynoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO%2Brct3Fg5SEA7MV5CrcA7zXsYGmNKQEjNXgSDVCNkoB4DQxjPbFt2nhdWt8uVWid4fZ7x9k%2BDGATInCbE8n7eWzf9Ad0Xt1W73uDbsthK4i0VKuj0KZRWgD82LPr1RHpMvnzE4Xe2aMgaGubi6cx80oe%2BIXsHlZvmZsg%2FFE4q5BR%2BQt6bIGb4f5VX%2FLjKNOi5HsWBHCyA4yhPiDeqZJ6kIDPwixh%2FCheBmV6adFh9T2xjZIDNCb5NURamLVV16HTJ%2Bl3jpAvHtFJyKd791hzzioYI2OjOf0Nhx9EIjF7CzC3tNXFPtfF%2FNlK9NqlfPcwEzxe3PMDg8hkU9TkTWaM1ItSXNqEFZjQdPOvD7qFEEwfAj4D3VrW56ctFGY7GilvOqq3Ym1rzU41Yib4G%2BsSs%2FQSrIdFNWd3aPN35ZU9zDSohoedP0%2BY6uVY5N4qBJ4cxGZ7bVdDH%2BqvUZgXX5Vs2zKF68004PpUbmjYhoThWb8AV2YHfko3axyD2O1Y85eET2GaBfMzScIz%2F632i4rioBFJUfhL7ry2le8esdcxPpHdH2rhdj9yRdluP%2FHPuLgrQz2eqO7GN7DgMAb4Wekz4Q%2B2%2FPFQSXsaiptWETpzliPsMqQDntpb9f0JVB0cZ0D59XEZKBpam9l7zvPMKGvwMkGOqUBe73tF016nxZ1muQX%2B62kJJOYLo1xjxWhlg%2FrY0bEDOXrrbJG6ClbwXpJySsgUyxR0%2FGuezEIs123u5HTlgeCSGIqa9FcczuQ3QDA%2F9EiJRR5QPJaUv5FC3AdaU3faNf5qBOWaXRuNlZblwHJb1CIEDYbPIvteQwM%2BwS%2BzpDWk2UJTMXpTSrwORs%2Bt2uLFqYXkwG8YAsgr%2FtLcCwt9DOvn0CByrtY&X-Amz-Signature=24e621b8745e70c295981ca0f5f22f9cb03a3f74b90722cdcdfb83c6a12a2d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

