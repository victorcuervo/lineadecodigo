---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ARJ5VF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdbAaGPngkRwsF%2BhSU5pJO8vd5v51qvMxFC%2BlAlMCNQIhAMNTZYcl%2BrA%2FR6M9LJUhOHJ6EL4cbRrfj70hyu2CZkwPKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGGzoT1yH6GT4qxEQq3APFerh1mc8pYJJPRSQ0L7o6PVHG3nbvBxm55P5oYIaZJiqQOMqBch58uVbcd%2FbaAjU3mtdG6WGShq0CIlqIb8vtIZ4%2FIltkgA5I%2FDLoheSfJj7PgBP7czY9TmGciazuly4tTQYR2YFwpetQnhUwS6KZOJz5jQSKSRR06pUJJ6QpLo849%2Bra0poZUTANcgdWyUd5TNseiLfY0IPwZbxP4pfyqypcnglN0TXg2tMOmbFeaM8bHQn3yqEQvyBeyOYbRnadlcZKeGxFPi5INcL%2FZiKS5WCR7tIMQF787rgl8vre3w%2BNbS0QckcIOpwUlSvmXpdlFirscJtHDwlb3Uo7BM3dHfsOfKs%2BAY%2Fmx3en4ZDwKYnZ61hkedTPJATn7fa0bpcxnFyGdEGgQ1TPEN1hvvOViIHYFIzCGKVPnhDw4w9Fq8NOBAJYOtH1qKcLAl89K2fyOl8nCdAgozruo%2FVZTFCLu%2F7MCOL4u%2F%2BNJ2gcPca7nVnirel3soYaQqg%2FPAVbM6APtmln6OkrU%2Flu87JpU82aUC0A6DQ6%2FvwFs7WP9OfGQAvPMwp70MnasQjCHUifopNVaye7omEa8UOBOjXXZQonG2Po%2F4h1D0M6ddBy5IS2ZU%2FPpGpFKUPXzUTogzCrn9TJBjqkAUOMvM8Oh%2FDVXKF0Tb4eVuI3plivtx1Vw%2FUc1Y8s3c8rgZfjsYPuLkOeU58ev%2F%2B6yUo1mCQ98%2BMU8ZjC%2BqBb%2BVKEJF%2F84vAerlkrkQndFFgEVHSb8FmJsEHcYWy0DoBhufbrCfdO6pIend6WbL5ZKL%2B8fbjArVkwmVlh7jyiUk0EglY6Iub2p%2Fg49GSUgatLHF4j78VFPKylk6rn8rRptstd9H8i&X-Amz-Signature=97f7b664a2a281c97bd4c9c5bf39e2cc2277250808aafff26a693e0bf9f0c5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ARJ5VF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdbAaGPngkRwsF%2BhSU5pJO8vd5v51qvMxFC%2BlAlMCNQIhAMNTZYcl%2BrA%2FR6M9LJUhOHJ6EL4cbRrfj70hyu2CZkwPKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGGzoT1yH6GT4qxEQq3APFerh1mc8pYJJPRSQ0L7o6PVHG3nbvBxm55P5oYIaZJiqQOMqBch58uVbcd%2FbaAjU3mtdG6WGShq0CIlqIb8vtIZ4%2FIltkgA5I%2FDLoheSfJj7PgBP7czY9TmGciazuly4tTQYR2YFwpetQnhUwS6KZOJz5jQSKSRR06pUJJ6QpLo849%2Bra0poZUTANcgdWyUd5TNseiLfY0IPwZbxP4pfyqypcnglN0TXg2tMOmbFeaM8bHQn3yqEQvyBeyOYbRnadlcZKeGxFPi5INcL%2FZiKS5WCR7tIMQF787rgl8vre3w%2BNbS0QckcIOpwUlSvmXpdlFirscJtHDwlb3Uo7BM3dHfsOfKs%2BAY%2Fmx3en4ZDwKYnZ61hkedTPJATn7fa0bpcxnFyGdEGgQ1TPEN1hvvOViIHYFIzCGKVPnhDw4w9Fq8NOBAJYOtH1qKcLAl89K2fyOl8nCdAgozruo%2FVZTFCLu%2F7MCOL4u%2F%2BNJ2gcPca7nVnirel3soYaQqg%2FPAVbM6APtmln6OkrU%2Flu87JpU82aUC0A6DQ6%2FvwFs7WP9OfGQAvPMwp70MnasQjCHUifopNVaye7omEa8UOBOjXXZQonG2Po%2F4h1D0M6ddBy5IS2ZU%2FPpGpFKUPXzUTogzCrn9TJBjqkAUOMvM8Oh%2FDVXKF0Tb4eVuI3plivtx1Vw%2FUc1Y8s3c8rgZfjsYPuLkOeU58ev%2F%2B6yUo1mCQ98%2BMU8ZjC%2BqBb%2BVKEJF%2F84vAerlkrkQndFFgEVHSb8FmJsEHcYWy0DoBhufbrCfdO6pIend6WbL5ZKL%2B8fbjArVkwmVlh7jyiUk0EglY6Iub2p%2Fg49GSUgatLHF4j78VFPKylk6rn8rRptstd9H8i&X-Amz-Signature=9c3a55531feebaa8d82c96a7b7e1453b030492bde717909b933a476c5b70bf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

