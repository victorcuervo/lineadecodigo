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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRT56EV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQChKAGRdnvJGakvJLktGikKFrLE9wsIVXQ%2F1t5u4Scj2AIgGABQMAdukiBqJt0XUULNfYv5YrAA%2BoDB6%2FBIJS6e%2B7cq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPnMLzu%2BHSN1B%2Fx6KCrcA7htnrYfM4Alwv5xn4fkdAKe2fQo3tHmkSHqKI6Cj3uf4V%2F3m%2FihhnXnYajbUzX3yTAmXbqI9m6odewMGz8P39WnG89JXwbg1VaPdo3fobjiOCJCPchlrzzZxA4zeFRrYsqrpl3ZWpd1pf3eg9w7CAxoS65o0C3MN5kDhQZ6SDZnXfOj2wJ9NH2PQQy8SKEn6%2FllbXnqC%2BmaLnu6QxerqwRv%2FLXLVtEzQDtAf2wxQfuPX4YviskN3f1RgXuR4WUPAXPFUcXnxKshbsxfVt0EuKu65AA0RQeSy%2FhkWqSa1KYHCFFl7LxHCUMsEgtz6FBLngYxIfyA2dDavz8b00waDMz8FjZZOt41jxi1iu%2BHAemRbCMH32y9d5JHsbEwby73j8WGTkiG4AN7PtOfUEpifXW1wmFuRwyfB1j6inSBFK8brT6E3AReTOVrLpK%2Fw73gkS7Mq6d5YjIP2xLYZh1FzJGu4ziJQia933AaCzYYig1lX%2F2uU1Lh8%2FXC4Yi8YitkJxjAYS%2B86RPcaZ71EUtctATUSvokV89vJyFWUbNcvCCA8CBW4jDjZgVlJlIEG7CvI%2F5iX7Rq%2FHvwUeLMtw5lySZsVfyPmg5%2BCE%2FJv8Tc8MN%2FZx2K%2BAwhubvIxP6gMK%2BWvskGOqUBeoGcrFfdo%2FCb8IPMH2KvqFIvtwOh2QUSs7Yjg%2BLB9VEMswVMBmRjHVZVidyWRl5OgA6duGBHa0HU0msCe%2F1tmWI01lIMbWL4f0Bh5RMNbjgq8FoOAGvAblKYP8TF%2FYa9QhK%2FJk5S8a3qyFeRtJy92J56Nh2%2FdrWc8Fr5QZdwxXvYd3brDvPQGs1XYVJJzA8Xm819%2FQRyQ1SWRLr%2Bg7lRX%2FF7xnBx&X-Amz-Signature=383800122d190aa3d13fd27339e673fe96f71e9c71cafee8cf9b5c1e9c3619dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRT56EV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQChKAGRdnvJGakvJLktGikKFrLE9wsIVXQ%2F1t5u4Scj2AIgGABQMAdukiBqJt0XUULNfYv5YrAA%2BoDB6%2FBIJS6e%2B7cq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPnMLzu%2BHSN1B%2Fx6KCrcA7htnrYfM4Alwv5xn4fkdAKe2fQo3tHmkSHqKI6Cj3uf4V%2F3m%2FihhnXnYajbUzX3yTAmXbqI9m6odewMGz8P39WnG89JXwbg1VaPdo3fobjiOCJCPchlrzzZxA4zeFRrYsqrpl3ZWpd1pf3eg9w7CAxoS65o0C3MN5kDhQZ6SDZnXfOj2wJ9NH2PQQy8SKEn6%2FllbXnqC%2BmaLnu6QxerqwRv%2FLXLVtEzQDtAf2wxQfuPX4YviskN3f1RgXuR4WUPAXPFUcXnxKshbsxfVt0EuKu65AA0RQeSy%2FhkWqSa1KYHCFFl7LxHCUMsEgtz6FBLngYxIfyA2dDavz8b00waDMz8FjZZOt41jxi1iu%2BHAemRbCMH32y9d5JHsbEwby73j8WGTkiG4AN7PtOfUEpifXW1wmFuRwyfB1j6inSBFK8brT6E3AReTOVrLpK%2Fw73gkS7Mq6d5YjIP2xLYZh1FzJGu4ziJQia933AaCzYYig1lX%2F2uU1Lh8%2FXC4Yi8YitkJxjAYS%2B86RPcaZ71EUtctATUSvokV89vJyFWUbNcvCCA8CBW4jDjZgVlJlIEG7CvI%2F5iX7Rq%2FHvwUeLMtw5lySZsVfyPmg5%2BCE%2FJv8Tc8MN%2FZx2K%2BAwhubvIxP6gMK%2BWvskGOqUBeoGcrFfdo%2FCb8IPMH2KvqFIvtwOh2QUSs7Yjg%2BLB9VEMswVMBmRjHVZVidyWRl5OgA6duGBHa0HU0msCe%2F1tmWI01lIMbWL4f0Bh5RMNbjgq8FoOAGvAblKYP8TF%2FYa9QhK%2FJk5S8a3qyFeRtJy92J56Nh2%2FdrWc8Fr5QZdwxXvYd3brDvPQGs1XYVJJzA8Xm819%2FQRyQ1SWRLr%2Bg7lRX%2FF7xnBx&X-Amz-Signature=9a53c1993e9ad716fe0d8744e22d478c14e1ef0a0390c9c00f0ea88d61faf09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

