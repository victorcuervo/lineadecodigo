---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636I3EPCU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBd28lkd1N59q39KafB%2Fhbsd5PHG%2BXTMDZmP5Xi15l5AIhAPp3BtRksdhUB8K90C2n%2BgcCE9X6k2q%2BLf5zoubQ502tKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz70oiHStek84e7aikq3ANW0%2BH4Q4B8KXXpw03vvEJhY0bSFxihd4k2vnYomYoaFrRRoq8yhomjtjxJeK%2Br7hIoKMzn%2FWkKVqTrEfI6jIzxiTuSpg21W0Z3pjl7%2BSzTY8pLxmIq%2FcTXJq2BsS0oqKhWyF%2BCQIErFLnSoQvRdTR2N4Te3FOl2hEVfy5TexUArZDjRmobwAdfKoAfXu7vA79qkNk6twD1XbYcxzU44%2BqMslQpvKCXfa6L37JaaCtyFfxfP2RoAcxfei5WUgRktcsdEhrqiyyylrv2EoRW3p2lhefvqgQiCDqO7rEJPo77NvFYsG8ggrYDzoL8dAYI%2BknNVOFRRYw60OZQ0ZmPWldb7xWrMUCoc32BlbO0gM81cIcamZPpW8QEoO%2BmiOutNLi4t5D1aikKrEMiDlGharWWiAVsGuo78laH20qwRhmfQGTayIAGSFcpj2I5VYtaVkJaKA4LBvmGYMXrkM3gn467QTnUCzBrZkcxY5Pc7TqnNH3cGL9%2FO399YNi4CUb9c7b1X%2FwU%2BXJzd4W0Ulg6nRvOZYtc7WzQQJJ2zDl1vHQACb8tHs732qLD4DTIa%2Bb8ky%2BzaUNmhfS8COENHByMJzmh8zNteSQt%2BhajIbenf77hgSE%2F3CzOrr9%2FqKTylDCjtNnJBjqkAZpAeZwEUdXuk8efvLfbAtxVLM8JOwh5N0H16ILZ7c4UTfQlpN%2FFpINQ2tevbMXjBFFaFvBSPP1Fo2UZmJxcXQQ7N7Pxt6M%2FBCHhKWVWg2JxGVU9Oj1ZHUVIIDtNuZgG1iE3DEQ3NT9BC20pApGN1%2F3E2jK%2FggstmKxv0wAFeHprKJfb6OIT2g1Eqf7AqTNbY8dxp0G6%2FcqqZREke1KPssVS%2BQu5&X-Amz-Signature=064ddf1c443e5ecdb51ab6a16287ec6445016924179bd34b85d28ce325670a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636I3EPCU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBd28lkd1N59q39KafB%2Fhbsd5PHG%2BXTMDZmP5Xi15l5AIhAPp3BtRksdhUB8K90C2n%2BgcCE9X6k2q%2BLf5zoubQ502tKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz70oiHStek84e7aikq3ANW0%2BH4Q4B8KXXpw03vvEJhY0bSFxihd4k2vnYomYoaFrRRoq8yhomjtjxJeK%2Br7hIoKMzn%2FWkKVqTrEfI6jIzxiTuSpg21W0Z3pjl7%2BSzTY8pLxmIq%2FcTXJq2BsS0oqKhWyF%2BCQIErFLnSoQvRdTR2N4Te3FOl2hEVfy5TexUArZDjRmobwAdfKoAfXu7vA79qkNk6twD1XbYcxzU44%2BqMslQpvKCXfa6L37JaaCtyFfxfP2RoAcxfei5WUgRktcsdEhrqiyyylrv2EoRW3p2lhefvqgQiCDqO7rEJPo77NvFYsG8ggrYDzoL8dAYI%2BknNVOFRRYw60OZQ0ZmPWldb7xWrMUCoc32BlbO0gM81cIcamZPpW8QEoO%2BmiOutNLi4t5D1aikKrEMiDlGharWWiAVsGuo78laH20qwRhmfQGTayIAGSFcpj2I5VYtaVkJaKA4LBvmGYMXrkM3gn467QTnUCzBrZkcxY5Pc7TqnNH3cGL9%2FO399YNi4CUb9c7b1X%2FwU%2BXJzd4W0Ulg6nRvOZYtc7WzQQJJ2zDl1vHQACb8tHs732qLD4DTIa%2Bb8ky%2BzaUNmhfS8COENHByMJzmh8zNteSQt%2BhajIbenf77hgSE%2F3CzOrr9%2FqKTylDCjtNnJBjqkAZpAeZwEUdXuk8efvLfbAtxVLM8JOwh5N0H16ILZ7c4UTfQlpN%2FFpINQ2tevbMXjBFFaFvBSPP1Fo2UZmJxcXQQ7N7Pxt6M%2FBCHhKWVWg2JxGVU9Oj1ZHUVIIDtNuZgG1iE3DEQ3NT9BC20pApGN1%2F3E2jK%2FggstmKxv0wAFeHprKJfb6OIT2g1Eqf7AqTNbY8dxp0G6%2FcqqZREke1KPssVS%2BQu5&X-Amz-Signature=bd110eb79e76a548452387a784c1207c5c76678f89a1e63c5a10a811233eee40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

