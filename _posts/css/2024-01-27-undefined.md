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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7XSDAP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDAbIAz3DOeK%2BB94Mju%2FkBI2x5opEMG4lu0AuhCoyXrYgIhAKVPsI8mp6Pz1ycqV6bF%2FtqVfnZI2zyp8Uqlt9Zl4sM7Kv8DCDAQABoMNjM3NDIzMTgzODA1IgwUg3CZ5sdgbCFGJFQq3AN6Z%2FYOCAlpMMM2h2j76wEqCGqI62TfMlSsFpc3Ajl%2BZ23A8HseTAoeW0%2BrSXmmiuGu6UXTvTmJbpcFA34ZgmGbYa%2F7dSduE6AjCYAygLtFlWuk8K%2BtsKxvQFRFnUwYfaZUUVWKm2ONtMTRD%2FKj9PM9veOnduaWE70DpP%2BWTHpLn2tjRjzLRh%2BEx70Q4ovVJ3Q2ixHBo1ajLTvvVW2I6DZ5dhU2TNKi4Y3FCZj0R%2FBveqi0owqGZL5tSTYJkHEJ%2BPmKS0JQq%2BpPsaJp2TJRWEqzd%2FpsDj37SCw6OUYLOrA4ZsZoITUfOXBySTUwnfwteN1Fyb%2BHmGYxXnrRotwexG1TEKpzHZFwBqOd2T5BiW8fb9C3I%2F45%2FIY%2BdOsD8bj1yoHvWVa%2FnUj7H%2Fbyh2KIKhs978QvB4XwPzIh5zEpVMOmx8CyfCx4JteGx6ArY%2FexjLKDnumgU4Ca%2BAMQyDSQUKVOuyxGLLi0SpXf5VS%2BzvaS5cdkGmpuQUYk2Bmy06gcx6XHaLCsq0BaYKv2zuOnJB%2Fc0VTIwFJPOTwj2XQ7pS1tIXL3Es9agRk5A%2B9aqqcG7LDIzZKqcDEpnHBG5IyXrad%2BHeSyhuUWiSkX1%2F5%2BT38faOMDOd86Fh7JP7aiNDCcpsHJBjqkAeFguq1UKKXOjHeWJfnuzzfm4wXhLiA6%2BkPqVIUUVFfw%2Frv3EJ2xwazqKikRgX7ddAsPy0IcSIC5vMLyeetAtJJWLbC5bEATCZdx%2FZDyYmapLDFyqjvLvubZ1Dnb25h3g8U81ry3Pwejse8Fui4nJIcJa6hxRhY5Ae47M%2BbMBwM3FM89IyXr%2BAiICXNeC12yo3ANY7clPH2IFEAQ12ORZTBt%2Bu0V&X-Amz-Signature=5653587f726da37da0f504505c14af4007c6bc76be92596a7d8daffd5969597e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7XSDAP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDAbIAz3DOeK%2BB94Mju%2FkBI2x5opEMG4lu0AuhCoyXrYgIhAKVPsI8mp6Pz1ycqV6bF%2FtqVfnZI2zyp8Uqlt9Zl4sM7Kv8DCDAQABoMNjM3NDIzMTgzODA1IgwUg3CZ5sdgbCFGJFQq3AN6Z%2FYOCAlpMMM2h2j76wEqCGqI62TfMlSsFpc3Ajl%2BZ23A8HseTAoeW0%2BrSXmmiuGu6UXTvTmJbpcFA34ZgmGbYa%2F7dSduE6AjCYAygLtFlWuk8K%2BtsKxvQFRFnUwYfaZUUVWKm2ONtMTRD%2FKj9PM9veOnduaWE70DpP%2BWTHpLn2tjRjzLRh%2BEx70Q4ovVJ3Q2ixHBo1ajLTvvVW2I6DZ5dhU2TNKi4Y3FCZj0R%2FBveqi0owqGZL5tSTYJkHEJ%2BPmKS0JQq%2BpPsaJp2TJRWEqzd%2FpsDj37SCw6OUYLOrA4ZsZoITUfOXBySTUwnfwteN1Fyb%2BHmGYxXnrRotwexG1TEKpzHZFwBqOd2T5BiW8fb9C3I%2F45%2FIY%2BdOsD8bj1yoHvWVa%2FnUj7H%2Fbyh2KIKhs978QvB4XwPzIh5zEpVMOmx8CyfCx4JteGx6ArY%2FexjLKDnumgU4Ca%2BAMQyDSQUKVOuyxGLLi0SpXf5VS%2BzvaS5cdkGmpuQUYk2Bmy06gcx6XHaLCsq0BaYKv2zuOnJB%2Fc0VTIwFJPOTwj2XQ7pS1tIXL3Es9agRk5A%2B9aqqcG7LDIzZKqcDEpnHBG5IyXrad%2BHeSyhuUWiSkX1%2F5%2BT38faOMDOd86Fh7JP7aiNDCcpsHJBjqkAeFguq1UKKXOjHeWJfnuzzfm4wXhLiA6%2BkPqVIUUVFfw%2Frv3EJ2xwazqKikRgX7ddAsPy0IcSIC5vMLyeetAtJJWLbC5bEATCZdx%2FZDyYmapLDFyqjvLvubZ1Dnb25h3g8U81ry3Pwejse8Fui4nJIcJa6hxRhY5Ae47M%2BbMBwM3FM89IyXr%2BAiICXNeC12yo3ANY7clPH2IFEAQ12ORZTBt%2Bu0V&X-Amz-Signature=2e92eed583f2c7319b53adec82b48ff7a718b021b92f0b187b7bb52f7abb2bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

