---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CXC3M2Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8BKIhXEYnZJzz6mZC9OF9AZaFgcXO%2By6vvenGmbcJYAiA7A0bpaRqddxct2bdoWUFlraLGsBl03TuzHx92d1hk3SqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4wBQPG1wh1lRYpaPKtwD%2FJSDWAlH7SC1W0LCBdHd%2FJzx6cAQbeaoQ8Vij87WnHegxfQPBHwig4QaFDyOqEPF6sMKHrnQWBggcFD6YSoABW91axG61dLC7NkANmkvn%2BbNQy6wEVlk9eik4kWvMq3ag2vT5YSK5dCS%2BiWYLYPdO35eyHZAuDtfpxEyW7Fo%2BjoeJRwEDi5%2BmCwRzVuWML2B%2FgUlcm68K5FXlmCwoZN2H8JZPcVJ7yriGoxEkUGNbRORgzZVPlBbwimKadO8z7A9VY%2B6ZO7DwCwUrXpqSTprRjXtYr1LCuYw1fKpXqN%2FgYW3zC4o8THz9%2Biqt5IyNf9m3zcIPuwUieNRESCsiFGedP5pMrQSOc4ghAJQJDfSXVfRGy3lLdyRQCxgR%2F8Dezp%2FlavMsdHhlf0PKfnCT%2BHonjaKeHd24r4bwAzrEaGJGKYJQgGRS3ZXKoaHJU1vfjr1iunxVIZrwdvxwLN7ef8s2mjjz9VALVrsF21jAtk3lkKDqvSyrjjvkd4ibzbVKRJ8PpkRTLs6JgoWEb9eHhjfXWxi40GstYLif%2FY5Qj2A9rp%2B6%2BSjVihn2KWVrdOVJqIFtrxPJIwqcxYQ0Nrra4fL%2B5rF%2BQQboQOZVXoRGQ%2By%2BZWjrgPEwym2TaWx3uAwooffyQY6pgHGwL5oElvaK5%2BgrCUpLnlC85FvexUr1HpJswWcFNGSoWDs67buUGtuzWKwV3%2FXNrvKsT%2FWrUevMMMoeYi%2BwdEkGJa0X1i8i%2B7rXno7gPdkmR%2Fq4N%2FLAP7xpsSvQ8xAZJVmJADK%2BwXO%2BxpoUM1H0TNkU%2FdMg9cn47%2BDKnzDO3qI9A4CSt%2FpYzrwZC7lFl%2F14a97ganQpz%2FO3hnyXI4X1JPubXGM2Xoh&X-Amz-Signature=9c9e6a441b2f92da014ff76b62fbc411fa3cd1616a330f9c07f1f1cbfa3c9690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CXC3M2Q%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8BKIhXEYnZJzz6mZC9OF9AZaFgcXO%2By6vvenGmbcJYAiA7A0bpaRqddxct2bdoWUFlraLGsBl03TuzHx92d1hk3SqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4wBQPG1wh1lRYpaPKtwD%2FJSDWAlH7SC1W0LCBdHd%2FJzx6cAQbeaoQ8Vij87WnHegxfQPBHwig4QaFDyOqEPF6sMKHrnQWBggcFD6YSoABW91axG61dLC7NkANmkvn%2BbNQy6wEVlk9eik4kWvMq3ag2vT5YSK5dCS%2BiWYLYPdO35eyHZAuDtfpxEyW7Fo%2BjoeJRwEDi5%2BmCwRzVuWML2B%2FgUlcm68K5FXlmCwoZN2H8JZPcVJ7yriGoxEkUGNbRORgzZVPlBbwimKadO8z7A9VY%2B6ZO7DwCwUrXpqSTprRjXtYr1LCuYw1fKpXqN%2FgYW3zC4o8THz9%2Biqt5IyNf9m3zcIPuwUieNRESCsiFGedP5pMrQSOc4ghAJQJDfSXVfRGy3lLdyRQCxgR%2F8Dezp%2FlavMsdHhlf0PKfnCT%2BHonjaKeHd24r4bwAzrEaGJGKYJQgGRS3ZXKoaHJU1vfjr1iunxVIZrwdvxwLN7ef8s2mjjz9VALVrsF21jAtk3lkKDqvSyrjjvkd4ibzbVKRJ8PpkRTLs6JgoWEb9eHhjfXWxi40GstYLif%2FY5Qj2A9rp%2B6%2BSjVihn2KWVrdOVJqIFtrxPJIwqcxYQ0Nrra4fL%2B5rF%2BQQboQOZVXoRGQ%2By%2BZWjrgPEwym2TaWx3uAwooffyQY6pgHGwL5oElvaK5%2BgrCUpLnlC85FvexUr1HpJswWcFNGSoWDs67buUGtuzWKwV3%2FXNrvKsT%2FWrUevMMMoeYi%2BwdEkGJa0X1i8i%2B7rXno7gPdkmR%2Fq4N%2FLAP7xpsSvQ8xAZJVmJADK%2BwXO%2BxpoUM1H0TNkU%2FdMg9cn47%2BDKnzDO3qI9A4CSt%2FpYzrwZC7lFl%2F14a97ganQpz%2FO3hnyXI4X1JPubXGM2Xoh&X-Amz-Signature=02d77bb30d059674ff5c756fd4dbdda1cefcb12a0ed243797575d475e0669f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

