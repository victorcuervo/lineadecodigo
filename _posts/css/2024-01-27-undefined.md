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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEJNQ3B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDrAQFfBy5YbBi6X%2Fw1METwKOqi8dllSp5DIpOfaPXziAIhAIDVL7JEC6rFThIaxQ29T57XnQ1lgPt5sHFd17s4uB5aKv8DCC8QABoMNjM3NDIzMTgzODA1IgzLavgPSuWsHyLQlDgq3APiTYi7kk9nNkQqqzXS0VgOFBNw66EuijyMrv3hQOadovFncjTqMWmAKjWe1ptscNmcLISW8MDBlU8SkWJLsTzMSVnTdLRUG7vdofoYEp6YYS3ztQJGRD%2FE%2B8FtVvVhvfr%2FBFt%2F5th0AxdLOheKRGRyOumToE05pMN18GFSJoBNU793MLzdXVbwkXDMAxD%2F9ncJ%2BibRXG%2FMnErBelqr1oiMp4YjOy480Ejrr8fRY9u%2BsfdkikULomvXdo2TBA9uDNf4LNAQYlx3Mv%2BE6gfZ%2FMKyUnMfEYt%2FKj%2Brrux7mB5I%2FDDweR13YBeRc6C9sCSvtBWTkR54Gdfyml2zABATfdePc2Lcl3Ptp6gsjWFM0WNUQLG0D09nv1z3vBn5lsIQFRyfq3NTENcjr2ZP440wkc0sRJVLN3KBHfuW2uqDIbHik2hzW8ggCi9zL3ZkxaEXlHQiDHHJL6M%2Fo35G20%2BqeOv9i2Lzlb4rUTvFRHyndYqPGGQkrmZM8BqdfSJWSIyiQyOTkf6GsQ7Xqu%2BhBHnVZU9FO9RihZB8IiQdkniop8jcDAxofZnXAq5BpPGLGZDKAon5n0ojHboxNfCNatjdmcnS6FShWYm7AEitf4xazKClD4Rm5uIyea%2FKnVkPUTDBiMHJBjqkARx25Y1Ll8kkTDJhgdOE15jLCecmRln7ZkrUv%2F0UC1RRb5hBda6jcuwAJ1BCaE3BI1fwQIRvds0Ecr%2Fx3hRk4BkK2caijApHbVmB6D4BoIPATwE7ALJRNOcblRE2%2FQRmVz3%2F1gbuze%2F64cx029kVNAWZ8bKQ4NUQSqYl8DIWmWaqn4cQ8ZgjbgyFWBwuqMX%2BDWftQR1tBzbgjXN%2BMeQxxffSaFKn&X-Amz-Signature=2d91beea36bb6a276db6dbcad8a36e4126d19a34b4641dc239a8eb138b189693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEJNQ3B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDrAQFfBy5YbBi6X%2Fw1METwKOqi8dllSp5DIpOfaPXziAIhAIDVL7JEC6rFThIaxQ29T57XnQ1lgPt5sHFd17s4uB5aKv8DCC8QABoMNjM3NDIzMTgzODA1IgzLavgPSuWsHyLQlDgq3APiTYi7kk9nNkQqqzXS0VgOFBNw66EuijyMrv3hQOadovFncjTqMWmAKjWe1ptscNmcLISW8MDBlU8SkWJLsTzMSVnTdLRUG7vdofoYEp6YYS3ztQJGRD%2FE%2B8FtVvVhvfr%2FBFt%2F5th0AxdLOheKRGRyOumToE05pMN18GFSJoBNU793MLzdXVbwkXDMAxD%2F9ncJ%2BibRXG%2FMnErBelqr1oiMp4YjOy480Ejrr8fRY9u%2BsfdkikULomvXdo2TBA9uDNf4LNAQYlx3Mv%2BE6gfZ%2FMKyUnMfEYt%2FKj%2Brrux7mB5I%2FDDweR13YBeRc6C9sCSvtBWTkR54Gdfyml2zABATfdePc2Lcl3Ptp6gsjWFM0WNUQLG0D09nv1z3vBn5lsIQFRyfq3NTENcjr2ZP440wkc0sRJVLN3KBHfuW2uqDIbHik2hzW8ggCi9zL3ZkxaEXlHQiDHHJL6M%2Fo35G20%2BqeOv9i2Lzlb4rUTvFRHyndYqPGGQkrmZM8BqdfSJWSIyiQyOTkf6GsQ7Xqu%2BhBHnVZU9FO9RihZB8IiQdkniop8jcDAxofZnXAq5BpPGLGZDKAon5n0ojHboxNfCNatjdmcnS6FShWYm7AEitf4xazKClD4Rm5uIyea%2FKnVkPUTDBiMHJBjqkARx25Y1Ll8kkTDJhgdOE15jLCecmRln7ZkrUv%2F0UC1RRb5hBda6jcuwAJ1BCaE3BI1fwQIRvds0Ecr%2Fx3hRk4BkK2caijApHbVmB6D4BoIPATwE7ALJRNOcblRE2%2FQRmVz3%2F1gbuze%2F64cx029kVNAWZ8bKQ4NUQSqYl8DIWmWaqn4cQ8ZgjbgyFWBwuqMX%2BDWftQR1tBzbgjXN%2BMeQxxffSaFKn&X-Amz-Signature=9b6d30ef6826bf9c0de40cc668330c2b2ba674b9ff5f3741259aaec52c7743c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

