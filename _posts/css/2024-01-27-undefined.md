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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDPZ5Y4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHkCBPYxkPngFJXsK6NO8mwUNkF7lpbxHt0wXe6Cu%2FLOAiAMKBoWQF0kLk%2BeHGQNkEtjr5Y1a8wl3CDLewFWoUosUir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMH8Yxm3YvJmwCt6VoKtwDyRHxql6eaTwemEGd1Ukw8miv6Ktr5ytPy8AuAZTA3lDhfpzSb0v6dBeYXnh0WvpGBOr989vrY4rHKDRStUBHJsf2jLP5ywJGjstJ%2FklkGLFQdcf1HMmC%2FWZYu8neo9XCaZGKcx0yi22BiPpM%2FoTAMiNiOfrc4g7ASVw%2BHQxFmZAzLEzI7EDidynXTm%2FJ4Nfyl2EW1%2F01d5cp5zYug5FKcCgGd8jD3FiU7AQhHga7IkBRI07HZ8MftFWYa8hbYhjzba4b%2BZhrGxWyE63tyDEaF%2Bu4kgnyCWUUGu0p5oCi%2BBcPJ2OZ7jownHLyLJ%2FbavzB4KDCUQB393IK4aKi0nKERh69kNE2fuxm%2FpDlmRq52Vj5OHxCqQu8wZDgdRXtkp1KtzmQWhFW%2Bvgp9Gel5FbLiHD7V9FYh0YWhyAo7SNoSwpA6O3BKNwUjDd4%2BaE2%2Frav5Is11926X4r7Q98kn%2BSJs9ftWxuXbkmR8se%2FWjtDw4wpng%2FXRhdjB%2BhJuQbe7dvLCdQ3%2FUrrCIy31irrW5xSNLA7nGBDxTa46EhtC%2BoAvVYsxRYJ%2B1LvTnOfhkrkEd1QHSBaxHRnwil5wD%2BEnINLe0AGn7E2gr%2ByaXe4y4gQds5sSONwUOKb4wIPb2owlP%2B9yQY6pgGtYTYegFar7hQm1HEnFZxS0MdRW3cLJ%2BvEzIN8ocVFNWiX6Pa58o%2FRFdZ92N1T4PH%2F0wPcK4H9zsFbfcoa9q9qWEPBcyxyoGXr%2FNiosuolFf1ndTiVogVWW2a0nucegq03vbb884nr6CpETmuNI5bdqtZcoguJjtvXftwWxJ7evU0xKjX%2FeRjaT83RC6MGcsibIFC%2FVR%2BzKK6CpzVlY7iUtoqRsBiS&X-Amz-Signature=9756670ceb560f6251ea71ef5baddbbf218270f24c861970477187e697f7a0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDPZ5Y4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHkCBPYxkPngFJXsK6NO8mwUNkF7lpbxHt0wXe6Cu%2FLOAiAMKBoWQF0kLk%2BeHGQNkEtjr5Y1a8wl3CDLewFWoUosUir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMH8Yxm3YvJmwCt6VoKtwDyRHxql6eaTwemEGd1Ukw8miv6Ktr5ytPy8AuAZTA3lDhfpzSb0v6dBeYXnh0WvpGBOr989vrY4rHKDRStUBHJsf2jLP5ywJGjstJ%2FklkGLFQdcf1HMmC%2FWZYu8neo9XCaZGKcx0yi22BiPpM%2FoTAMiNiOfrc4g7ASVw%2BHQxFmZAzLEzI7EDidynXTm%2FJ4Nfyl2EW1%2F01d5cp5zYug5FKcCgGd8jD3FiU7AQhHga7IkBRI07HZ8MftFWYa8hbYhjzba4b%2BZhrGxWyE63tyDEaF%2Bu4kgnyCWUUGu0p5oCi%2BBcPJ2OZ7jownHLyLJ%2FbavzB4KDCUQB393IK4aKi0nKERh69kNE2fuxm%2FpDlmRq52Vj5OHxCqQu8wZDgdRXtkp1KtzmQWhFW%2Bvgp9Gel5FbLiHD7V9FYh0YWhyAo7SNoSwpA6O3BKNwUjDd4%2BaE2%2Frav5Is11926X4r7Q98kn%2BSJs9ftWxuXbkmR8se%2FWjtDw4wpng%2FXRhdjB%2BhJuQbe7dvLCdQ3%2FUrrCIy31irrW5xSNLA7nGBDxTa46EhtC%2BoAvVYsxRYJ%2B1LvTnOfhkrkEd1QHSBaxHRnwil5wD%2BEnINLe0AGn7E2gr%2ByaXe4y4gQds5sSONwUOKb4wIPb2owlP%2B9yQY6pgGtYTYegFar7hQm1HEnFZxS0MdRW3cLJ%2BvEzIN8ocVFNWiX6Pa58o%2FRFdZ92N1T4PH%2F0wPcK4H9zsFbfcoa9q9qWEPBcyxyoGXr%2FNiosuolFf1ndTiVogVWW2a0nucegq03vbb884nr6CpETmuNI5bdqtZcoguJjtvXftwWxJ7evU0xKjX%2FeRjaT83RC6MGcsibIFC%2FVR%2BzKK6CpzVlY7iUtoqRsBiS&X-Amz-Signature=7e0ceae03b4cf8eda2bf229ff1930b81bbf73e70a7d15472fc2565d1411ab86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

