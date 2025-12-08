---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4BLRZK5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPy1WoPzf7HWQFAMOLiK3nYdYLZAbrKLXB0Lkmrc7BgIhAOLxsWZTBN432v9RVvz7VIRC3Lt2%2F9BndBYO%2BjuZ0zoSKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwepivTQ1%2B7U3Vitrcq3AMlg76lpCjuGJVLpkHpgp0RRf0XVIyXOD8tjwY7IqllcjunluSFeoshc0Fw7BJsQK1FSeWU2mtQP1flt1Cd9Mo7eUnzn1%2F3r1M7rdkElB61H6%2B8XZ%2BR%2FjLy6pgELz7t9grsK5bLTBxg6oB79FvZo98zMn%2FnXuMraYs5%2FVFtaO48dxWD20DHhcErn33JUdkU2GE0oNWh%2FfgcC5mGNSFCfwNg7aGkIG2U0pSJ5PrdBOvwMU7rzeUJBV7%2FxlJuipaPKRLlhrYW95%2FgZKfI8NGI4qJxiN%2FA9eTKrxifBNuT6Xi7fFvITelfBIABvgYEd443ouesgooQeZKx7ozTseeXli4H%2BLGhkNZ%2BtP0QR9pno4pA3ys2cSZp3sNihr4YkW%2FfHmeDAYUJNtPoPum2GooizWhy4YtTpzrTj9QvCzZshRUq3eWNyY23249ZKDQUIJzfntS5oM%2BdXFNuvjMhrlj2MMQqlzzTRiccpLZlgEnXgbdi1Drl94LPvVcspRWdY3vX4Yyve56RUejXplwReYSORnv7NIc1ZsGMk5D3NAcYAZfNHiZqD4X1HPYe140FmAWhLiowdegkbYgLSV8HjWSKZBHtcMUrl48ChvtmfYDvIKM1GIIIlyYc7yC%2B%2Bmr1KzC27dnJBjqkAVzsjSPuve2Asqlkgrg2MqTgocx7TxMl8ZJdpPv3eE750CPCtZHwgJ9MA5aQunyehemeAZtv2PTylHeVjeQraRKgQcg%2F%2F%2Bv%2FgiIF7YEooYM10pHCGJhSayTbqmilU%2FcY4R3v3hhK36N8%2FLNRJHmhuVEW5zGkxAAJCc%2Fzwi7s3HuDo9W6pi4tN%2BIWeA56Woz%2BajXJbx5u14tRRgRvWPGIMGOA1aCP&X-Amz-Signature=aa556a3e5d8f97e47077f481cd953138395ae8d58d7239040231a29071972d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4BLRZK5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVPy1WoPzf7HWQFAMOLiK3nYdYLZAbrKLXB0Lkmrc7BgIhAOLxsWZTBN432v9RVvz7VIRC3Lt2%2F9BndBYO%2BjuZ0zoSKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwepivTQ1%2B7U3Vitrcq3AMlg76lpCjuGJVLpkHpgp0RRf0XVIyXOD8tjwY7IqllcjunluSFeoshc0Fw7BJsQK1FSeWU2mtQP1flt1Cd9Mo7eUnzn1%2F3r1M7rdkElB61H6%2B8XZ%2BR%2FjLy6pgELz7t9grsK5bLTBxg6oB79FvZo98zMn%2FnXuMraYs5%2FVFtaO48dxWD20DHhcErn33JUdkU2GE0oNWh%2FfgcC5mGNSFCfwNg7aGkIG2U0pSJ5PrdBOvwMU7rzeUJBV7%2FxlJuipaPKRLlhrYW95%2FgZKfI8NGI4qJxiN%2FA9eTKrxifBNuT6Xi7fFvITelfBIABvgYEd443ouesgooQeZKx7ozTseeXli4H%2BLGhkNZ%2BtP0QR9pno4pA3ys2cSZp3sNihr4YkW%2FfHmeDAYUJNtPoPum2GooizWhy4YtTpzrTj9QvCzZshRUq3eWNyY23249ZKDQUIJzfntS5oM%2BdXFNuvjMhrlj2MMQqlzzTRiccpLZlgEnXgbdi1Drl94LPvVcspRWdY3vX4Yyve56RUejXplwReYSORnv7NIc1ZsGMk5D3NAcYAZfNHiZqD4X1HPYe140FmAWhLiowdegkbYgLSV8HjWSKZBHtcMUrl48ChvtmfYDvIKM1GIIIlyYc7yC%2B%2Bmr1KzC27dnJBjqkAVzsjSPuve2Asqlkgrg2MqTgocx7TxMl8ZJdpPv3eE750CPCtZHwgJ9MA5aQunyehemeAZtv2PTylHeVjeQraRKgQcg%2F%2F%2Bv%2FgiIF7YEooYM10pHCGJhSayTbqmilU%2FcY4R3v3hhK36N8%2FLNRJHmhuVEW5zGkxAAJCc%2Fzwi7s3HuDo9W6pi4tN%2BIWeA56Woz%2BajXJbx5u14tRRgRvWPGIMGOA1aCP&X-Amz-Signature=ecd12f38f6445f53d5e42b8fd6adc5e06d69ee57e094c7aa614d2099c318f3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

