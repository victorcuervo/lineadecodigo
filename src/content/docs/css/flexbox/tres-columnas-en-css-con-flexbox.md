---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLWP4GX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzvJ2tNfJRPbaS0CZjv6DkItDE3fMuDOAhHfas0SWqAiBG7mf0yDrEeYsYcALg0286D2bSwhVqzXgRZjqZ%2Fdzd9SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQRTxcHXWSEnVMhNKtwDSwpcQ95TRMvq2avcqHAVHF3VcaKkvI8AvTVDyqZTfAVKJHlH%2Fjql%2BScCxDzc2fj3BM6MSJs9EbTB1nL7lLcPSHFhZGDGqw%2B8GMBIuqN23VfOMrh%2BwKnlxN9TiBy96xDgDfdqLIawbJI8THWtHOiudFpLnc7M7ulXI41yMbNFZUiV8e3aRPwlx%2B9MRbhULG6Gb4PVT7QQszsOCSA%2Fuwz6EOk1mdo86WkzuLHWSYyx5Qgrlek1vKbEkIivzgEeXc7MU5vHlsD4vgJE7nEhdV4Y1mhVJyekoInPne%2BebwouL7RsNzBNtGhSk2uPOgkuYkrMua3E53%2BtKhrEULdlbpIkOjjvLUnd9YjV8T5WmPoJATH0nHbArFP31wz6F3IY0TbLArbxcbgj7oXNOzMdzNi3MtN8IwTvvmXK7kaL5tLZBTavS0wVaqMjCcI2BFv%2Bv2qm%2F2w%2BmEYUM0gZgP1yG%2FvdXVCuFtRdnhoy0hCpzYBxWzhlGMXlGhZVTPmcwyWVG72zpMrfRbWdEZ2NgW8CQgpglFmS8Rp6M%2FJ3SoyvhHMTabPs9fFIOXSi4V6uD2P%2BLugRXCXB0ie9cyDcUglIoKyI1asXMvCTgB9TvizcQdesC70cySDtTFEAUgH%2Fqq4wpqHYyQY6pgEgRpd%2BZEvXie5Fp%2FhRnqigGqzdUZe0Xakr2x6NUCE5Lk9U%2FLwix6wzSbuAc6NouPlvJ8JGGl%2Bb4kx6InDU91ibpCMqEGaaVU8rk8USptmE1FxDQVsoQ3BcGgSLY1L02V8%2FqoXyUpWiDhzAqcVd05jCrpVPHec7zD81tt3a20DRzDWKebLNEXybYJE%2FZ9PfnjeGlHUW9slS0r2QpGEg%2FGPmzKbr%2FWvw&X-Amz-Signature=18956eaaf2fc17de68a2d22ed99b601ab7ff1c4e7a2f6d85deb6126e22119a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLWP4GX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCzvJ2tNfJRPbaS0CZjv6DkItDE3fMuDOAhHfas0SWqAiBG7mf0yDrEeYsYcALg0286D2bSwhVqzXgRZjqZ%2Fdzd9SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwQRTxcHXWSEnVMhNKtwDSwpcQ95TRMvq2avcqHAVHF3VcaKkvI8AvTVDyqZTfAVKJHlH%2Fjql%2BScCxDzc2fj3BM6MSJs9EbTB1nL7lLcPSHFhZGDGqw%2B8GMBIuqN23VfOMrh%2BwKnlxN9TiBy96xDgDfdqLIawbJI8THWtHOiudFpLnc7M7ulXI41yMbNFZUiV8e3aRPwlx%2B9MRbhULG6Gb4PVT7QQszsOCSA%2Fuwz6EOk1mdo86WkzuLHWSYyx5Qgrlek1vKbEkIivzgEeXc7MU5vHlsD4vgJE7nEhdV4Y1mhVJyekoInPne%2BebwouL7RsNzBNtGhSk2uPOgkuYkrMua3E53%2BtKhrEULdlbpIkOjjvLUnd9YjV8T5WmPoJATH0nHbArFP31wz6F3IY0TbLArbxcbgj7oXNOzMdzNi3MtN8IwTvvmXK7kaL5tLZBTavS0wVaqMjCcI2BFv%2Bv2qm%2F2w%2BmEYUM0gZgP1yG%2FvdXVCuFtRdnhoy0hCpzYBxWzhlGMXlGhZVTPmcwyWVG72zpMrfRbWdEZ2NgW8CQgpglFmS8Rp6M%2FJ3SoyvhHMTabPs9fFIOXSi4V6uD2P%2BLugRXCXB0ie9cyDcUglIoKyI1asXMvCTgB9TvizcQdesC70cySDtTFEAUgH%2Fqq4wpqHYyQY6pgEgRpd%2BZEvXie5Fp%2FhRnqigGqzdUZe0Xakr2x6NUCE5Lk9U%2FLwix6wzSbuAc6NouPlvJ8JGGl%2Bb4kx6InDU91ibpCMqEGaaVU8rk8USptmE1FxDQVsoQ3BcGgSLY1L02V8%2FqoXyUpWiDhzAqcVd05jCrpVPHec7zD81tt3a20DRzDWKebLNEXybYJE%2FZ9PfnjeGlHUW9slS0r2QpGEg%2FGPmzKbr%2FWvw&X-Amz-Signature=a13e7d91770085d9b4c9e84362dc7b66e8c8932b7e9a158a32f55debf4b72d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

