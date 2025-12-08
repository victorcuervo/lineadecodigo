---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSIIXJE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWU0wBFfI4xYtdv9GjuqsDCVoaTRrn2zHI7JGOMhAchgIhAKnkketFltRy86UvJyTgTvF%2BDposaPHQT093zvwfby29KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwskSEnGjl%2BAwSWVN4q3APXyhd5HGSkVWwjNWxNpceETzmEGUEZuMtgfnIs0TQxnZodyf6N3QaCyQZbVfHN6BPBNp7xAUUoIGJalkmUGkCk7qDbq7vRwlC1dStITMC41UNcJ5Y9v5vbB6HSaTzZB0BHZ%2F2Nk4Rp0uLidDkihugHtfG69saTZb%2FlUo9UerWQ9ljL6ach%2FN0iM6TxCWPx7k53YkQ0Ijg2VYkjm5eA2isglw0GLTdC3OccVqLT1Z14P%2Bln4OE4ActLQ%2B3rBXJKq%2Bb4tQtKUPbe6MgGmZsSHfn4F3CMSs9E1TDgX%2B014gBotk3fuZntr2LzQGX6wvnNBK9sDi%2BebAQRrXBMsU5WoJ5%2F50HTUz%2F4ZfxRQUAuYUiWXHSNOLuBkR2Ql6T1QMxKJYMsah%2FUDTFtUD%2F8d5iANl3NNE6nAtGlBwAtEtBCGAlWT%2BAkeXSrhCWNtm8ozEL39Xly4nMs%2Bsgqruq1wfTXGB1%2B9Q56YYXIiQW%2FLah2sUSb%2FRKz6LJIKC782mam25Bg9OT%2F%2BZiho0nMm7ZBJY%2BMoUq9lwpD2i178WEUk0N%2FCPKr6g%2B%2BiP6xSZf%2BE%2BqTbToXbjkZz0oZI426zb5TjoK6pXk1z%2BI0Y2P0bDsUAIi7EaozYP9OBYFuEMw2SUe06jD%2BlNnJBjqkARpxAqNtoDrWtbknL7kw%2FlsOQrgrXmoI1ztMgUpmi7yWoZVx7%2BA6nkqWdiD1ThotaxzpLONv429c4nONQh2GkLvLrTwPaVbsKrTDgHLA%2FBTbkc8aVhUdo9RNrdD7FKoGc4E4ymK4mC%2FOiDA7UOYjqd3ekzINA4LwUNoX6Ny0RybDPUxFwmwgp8pTeMyqoKqDrCk8zUKZEdY4j01A7V50P5OdvpnC&X-Amz-Signature=c5e3e0e1ff4ea06a56d0dd2cfa607f58a84d324c11cf6c0ce0a804d4d0e3adc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSIIXJE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWU0wBFfI4xYtdv9GjuqsDCVoaTRrn2zHI7JGOMhAchgIhAKnkketFltRy86UvJyTgTvF%2BDposaPHQT093zvwfby29KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwskSEnGjl%2BAwSWVN4q3APXyhd5HGSkVWwjNWxNpceETzmEGUEZuMtgfnIs0TQxnZodyf6N3QaCyQZbVfHN6BPBNp7xAUUoIGJalkmUGkCk7qDbq7vRwlC1dStITMC41UNcJ5Y9v5vbB6HSaTzZB0BHZ%2F2Nk4Rp0uLidDkihugHtfG69saTZb%2FlUo9UerWQ9ljL6ach%2FN0iM6TxCWPx7k53YkQ0Ijg2VYkjm5eA2isglw0GLTdC3OccVqLT1Z14P%2Bln4OE4ActLQ%2B3rBXJKq%2Bb4tQtKUPbe6MgGmZsSHfn4F3CMSs9E1TDgX%2B014gBotk3fuZntr2LzQGX6wvnNBK9sDi%2BebAQRrXBMsU5WoJ5%2F50HTUz%2F4ZfxRQUAuYUiWXHSNOLuBkR2Ql6T1QMxKJYMsah%2FUDTFtUD%2F8d5iANl3NNE6nAtGlBwAtEtBCGAlWT%2BAkeXSrhCWNtm8ozEL39Xly4nMs%2Bsgqruq1wfTXGB1%2B9Q56YYXIiQW%2FLah2sUSb%2FRKz6LJIKC782mam25Bg9OT%2F%2BZiho0nMm7ZBJY%2BMoUq9lwpD2i178WEUk0N%2FCPKr6g%2B%2BiP6xSZf%2BE%2BqTbToXbjkZz0oZI426zb5TjoK6pXk1z%2BI0Y2P0bDsUAIi7EaozYP9OBYFuEMw2SUe06jD%2BlNnJBjqkARpxAqNtoDrWtbknL7kw%2FlsOQrgrXmoI1ztMgUpmi7yWoZVx7%2BA6nkqWdiD1ThotaxzpLONv429c4nONQh2GkLvLrTwPaVbsKrTDgHLA%2FBTbkc8aVhUdo9RNrdD7FKoGc4E4ymK4mC%2FOiDA7UOYjqd3ekzINA4LwUNoX6Ny0RybDPUxFwmwgp8pTeMyqoKqDrCk8zUKZEdY4j01A7V50P5OdvpnC&X-Amz-Signature=d49b9209bbf2da29340d944374a1e79a0b3723705bb0cc2fb28ba28d10f463a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

