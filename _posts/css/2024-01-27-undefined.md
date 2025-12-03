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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SWHYM4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCug6dyqcSY3zjNaKvbwDrpfWY2OZGuynOYC0SnrGDBeAIhAOUzMdNJ9HoqIZBbB6j94bcGbiaLjQ83mw%2FFq1tm8S1lKv8DCCwQABoMNjM3NDIzMTgzODA1IgxQWsxrk5Zq65AXPnoq3AOk0kc32RIBKxXICmQoiUSHuxjIOU0sXgLphH2oFWdum5GKaQNz2Dq4mETUyevuh1XJJrhlEppp84K%2BnGFS%2FWjAa5VQdjLXOUJ%2BkHwNXcODUHWo33hvxl4sbRhZtEnpkuBsUlQc4zvItk%2FfBM2NYy%2Bho%2BcbRpZU2IEbG81IosRrDxORm7RpZJoDPihJkuAHi8CL3psI0GH1U%2FiR%2FW2FXJR3i1vAiDglK7vM9tJmUQ5XF1V2xSy2OIERzB6AkMmN1xqstBIS2a4T9NSTBmzJWuzLG7RMmITt162aigNQmy5rTYOhtDpBwvzt3BDle%2FCOMfoA3sG3PRyHINPSDnbt%2FRN3lFHQ%2F2SQKJo3hWcbJ5yeWFR9u2RptOGvX2yI1K%2F9hZ4WVD7CXWVSP4JTz79yiC79xmjioQcAUryaXjQIwhASrfvYHfSQlAyEbRaPiX49Q0GD8XOh9QBZGDgl76T0Xd5CCLfKagxVA9cSzZt38hKqy3k1TcbmgCPQaHFuYjJCD7jQjmFFytP0b4GdL0%2FyxOhDJ%2FL%2BGL5bdtmS5f5JbIe7t2pnfNLQ8I66FbN%2Fr%2BY79NPLNwUVKvlKB5QDs1WWLNxf1jInKLha63sVCaYtaAjVKbG7QNeMK44vbdjL7TD2rcDJBjqkAaWlF5pK9Wptda%2Ftin3bm5pqqEUEmqz3pwCk%2Bx%2B6lltRT6XLobDfYQOlRNOuu%2FdRxJ57Y2f3VC%2BSmtvpNZlUV2HBouAsZ6kUUnRKLFjDY5lfCuz8C9dfqxLFlMjJRZm9rTY3NaIPdgz%2BL5SYAKo0R6cF0DZwWz0lXG2tRYX3yOR6iL5DvV8AyVDFEfNHVvWcAQud%2BwsCQAlVTo7b9pLu991EqKg6&X-Amz-Signature=72e445a9ed279e6c5f32862877ebd6a71e002fcc0ef30770cd230d3c1ac94644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SWHYM4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCug6dyqcSY3zjNaKvbwDrpfWY2OZGuynOYC0SnrGDBeAIhAOUzMdNJ9HoqIZBbB6j94bcGbiaLjQ83mw%2FFq1tm8S1lKv8DCCwQABoMNjM3NDIzMTgzODA1IgxQWsxrk5Zq65AXPnoq3AOk0kc32RIBKxXICmQoiUSHuxjIOU0sXgLphH2oFWdum5GKaQNz2Dq4mETUyevuh1XJJrhlEppp84K%2BnGFS%2FWjAa5VQdjLXOUJ%2BkHwNXcODUHWo33hvxl4sbRhZtEnpkuBsUlQc4zvItk%2FfBM2NYy%2Bho%2BcbRpZU2IEbG81IosRrDxORm7RpZJoDPihJkuAHi8CL3psI0GH1U%2FiR%2FW2FXJR3i1vAiDglK7vM9tJmUQ5XF1V2xSy2OIERzB6AkMmN1xqstBIS2a4T9NSTBmzJWuzLG7RMmITt162aigNQmy5rTYOhtDpBwvzt3BDle%2FCOMfoA3sG3PRyHINPSDnbt%2FRN3lFHQ%2F2SQKJo3hWcbJ5yeWFR9u2RptOGvX2yI1K%2F9hZ4WVD7CXWVSP4JTz79yiC79xmjioQcAUryaXjQIwhASrfvYHfSQlAyEbRaPiX49Q0GD8XOh9QBZGDgl76T0Xd5CCLfKagxVA9cSzZt38hKqy3k1TcbmgCPQaHFuYjJCD7jQjmFFytP0b4GdL0%2FyxOhDJ%2FL%2BGL5bdtmS5f5JbIe7t2pnfNLQ8I66FbN%2Fr%2BY79NPLNwUVKvlKB5QDs1WWLNxf1jInKLha63sVCaYtaAjVKbG7QNeMK44vbdjL7TD2rcDJBjqkAaWlF5pK9Wptda%2Ftin3bm5pqqEUEmqz3pwCk%2Bx%2B6lltRT6XLobDfYQOlRNOuu%2FdRxJ57Y2f3VC%2BSmtvpNZlUV2HBouAsZ6kUUnRKLFjDY5lfCuz8C9dfqxLFlMjJRZm9rTY3NaIPdgz%2BL5SYAKo0R6cF0DZwWz0lXG2tRYX3yOR6iL5DvV8AyVDFEfNHVvWcAQud%2BwsCQAlVTo7b9pLu991EqKg6&X-Amz-Signature=ac4d75069d21fea915a6d72989b503a455eb166cab085a4c335ba6ca41237d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

