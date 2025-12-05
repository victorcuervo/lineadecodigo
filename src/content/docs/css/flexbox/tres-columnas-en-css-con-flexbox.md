---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7CXIMJD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkljcgtZZt%2FhoPOid%2By2W5BVOf9y0xMCZDM86AmCIpJAIgVg5DUikw59jGOEX6irp%2BuI52%2FYSN7MPdo5TZzabNHIoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDK%2B7pW4o0tpCp2XYVircA%2BBysYi%2Fk2FsI258PeNxTvUUkvBts1GNkoaKWbGZvWgVuW9OfMZd052dGYfWLll7kwuadwUl35W7GIe%2FLEGrJLOI%2Fr5EC5R3v9ajQlE%2FUUTTioXZMLfnug3Ngr9W2OPfzaKp2nY8%2BNSGE7D%2BHcPEabJkeMAtId2%2BQDhxTIX%2BuKPmc7uoIqHKr75A2iXDReJjqzGnORuzXFRMf89L0hJoQj2sAVA6F1sAb4dotJoYDVYeBnc%2BCS8nmRn8p2j8Vm9wY3cd27fzO%2F3vjje9ocnxJi4qzwRGINTbYO8VrUcshiP72e7GlNnWTwIhtEwLEZLzclu92ERBsm5LE7R2yAgBgjzL1U3k%2FUv0y9qn4U14rRZdp0cs%2BvEED8uPDDFRRLMGxDSqpmulPjmFTCI2tLTr2sKX7WB5nBjw5Mg0fjNpz%2BU7H%2FXm1ZeWF3nMHhrwCG3R4bHjprGR7N%2FCTl2H5yUq5g7DHsdCMIKW4vPXu1scrxR9U6cyWxLcE%2BU929NXFvsnRIwOYdWgUErX5BC3Cl2SCPLBoeET%2BJYsM6CsG6em0smm0hfiZR3Q9L1mWmy92nxGg6KFcHwFJ%2BJG5o%2FIr4e4gJcFIbxUkvQ37wlCE5ydnDOwrVQPJfVb%2B%2BCQUiqpMKrey8kGOqUBm%2FvqPxEnoQoLzqTe%2FJjMFrStxcQWa%2FN6kH9%2BOU92560AbThwUxxqoS7gADmskW0MM2soQbI8WVJTmwYCZ489Z07yR8rLHjlph6Wx2kN%2BUp%2FcqeBQdHM8RBR171KYKqQ6h20po13n3Yb4qbmWb9yuZDQnaBtqHZeOCO6O08JTlFkmJF66ymljNYV6oXnb7Sdulm3yUfoj4glF%2FnileImpHOPu6HMh&X-Amz-Signature=6ac958115fad006dd1e28959aa4a8086cb6799592d38e3cb2abdb1c45ebf0cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7CXIMJD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkljcgtZZt%2FhoPOid%2By2W5BVOf9y0xMCZDM86AmCIpJAIgVg5DUikw59jGOEX6irp%2BuI52%2FYSN7MPdo5TZzabNHIoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDK%2B7pW4o0tpCp2XYVircA%2BBysYi%2Fk2FsI258PeNxTvUUkvBts1GNkoaKWbGZvWgVuW9OfMZd052dGYfWLll7kwuadwUl35W7GIe%2FLEGrJLOI%2Fr5EC5R3v9ajQlE%2FUUTTioXZMLfnug3Ngr9W2OPfzaKp2nY8%2BNSGE7D%2BHcPEabJkeMAtId2%2BQDhxTIX%2BuKPmc7uoIqHKr75A2iXDReJjqzGnORuzXFRMf89L0hJoQj2sAVA6F1sAb4dotJoYDVYeBnc%2BCS8nmRn8p2j8Vm9wY3cd27fzO%2F3vjje9ocnxJi4qzwRGINTbYO8VrUcshiP72e7GlNnWTwIhtEwLEZLzclu92ERBsm5LE7R2yAgBgjzL1U3k%2FUv0y9qn4U14rRZdp0cs%2BvEED8uPDDFRRLMGxDSqpmulPjmFTCI2tLTr2sKX7WB5nBjw5Mg0fjNpz%2BU7H%2FXm1ZeWF3nMHhrwCG3R4bHjprGR7N%2FCTl2H5yUq5g7DHsdCMIKW4vPXu1scrxR9U6cyWxLcE%2BU929NXFvsnRIwOYdWgUErX5BC3Cl2SCPLBoeET%2BJYsM6CsG6em0smm0hfiZR3Q9L1mWmy92nxGg6KFcHwFJ%2BJG5o%2FIr4e4gJcFIbxUkvQ37wlCE5ydnDOwrVQPJfVb%2B%2BCQUiqpMKrey8kGOqUBm%2FvqPxEnoQoLzqTe%2FJjMFrStxcQWa%2FN6kH9%2BOU92560AbThwUxxqoS7gADmskW0MM2soQbI8WVJTmwYCZ489Z07yR8rLHjlph6Wx2kN%2BUp%2FcqeBQdHM8RBR171KYKqQ6h20po13n3Yb4qbmWb9yuZDQnaBtqHZeOCO6O08JTlFkmJF66ymljNYV6oXnb7Sdulm3yUfoj4glF%2FnileImpHOPu6HMh&X-Amz-Signature=8e2151bc9c07dc27f9d9c0bbc711defe220b4763b9330a869dbc18ad3abb066f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

