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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXH7DSE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDEXGCsrZUQ%2BOtxEwk3088Ik8%2B1ShZhwVHqThHSAO6hewIhAM%2Fdd7A5cJ%2B7HPDGHrRQ6g%2BXlpNDwU3jEGjQyRd32MYEKv8DCC4QABoMNjM3NDIzMTgzODA1Igy%2Fholao3KtlDYs458q3ANekCOtAAlF5xw%2B30CGg%2BBltCqgEUo4x5EwqGSsHFcHyurVo1cl8ZidO2gBekSoS9bMaDjQjEc1oIaWWj8UwJ1gQrRRZM30fD8UeBFavLEHXMPn%2F4yiTl06e6H64Kbgv%2FjxbwbkIqEBHT0fbbbesJ%2Bqdrxn4A1GRn1LAFs7pYQFmdz9pHAaduv8KzuqDECjhD%2Fe%2FWZ6YQ%2FvQzltV4HExjnDzFVMfX3pyRixI556n0T08z%2F0Larkwoi%2BgOgweHlXva7%2BAMtyCckf4pVwfViQ3Esfs%2BKPA%2FUoEf0rMrbmcY%2BsKaB3u7LVhpsIS6a%2BuWoPwOqV2VxFspQRF2clDQPXboqti22yBnHsFwrW2Ck0viFAu3kUeaxKaEw4fubjYnOOgDAV72w8WgtYwsW8wIyU5idgOxfgLTqclIcXB3ccgQAHLiLme%2Fuo3xToc7xFc%2BT6QLDAvRyI8NSmIezvrpugkHSABG9LB6KE7V%2Fac81%2FC1wisFxTG5TKM1s2o%2BBdf7QJ6LGdC790maHRPrgdNMTupzw413BIGifgQeK6NF7UAa5dSxNVonWYDpIzw%2BKOlzAnpYsptQRUpheHdTfomGGUVfhzDJdtAEJ%2FadH3LDPAQtGV5Ivhbdum88TlYpWhCzCs6cDJBjqkAcjWzQPnG4rMAk7zHu0OP08Jq51LRrGOdNMzT07A46gOwFSRtayzcI91rPWNhscT%2BjGgycvi88v6nsnMjYN3QS%2FkEoGdR%2B1H%2BL9gwa7VH5EQn1bA7PR0gxn2YxT6GIlFVPARtTTQLJYAORjcz%2BINc85BoT%2BZtsS8iYRYrBS1QUm6NjEt6w1No8Tos1qZb6CrSOoUHDt283CliCLmyUCF%2BY%2BZZ%2FMD&X-Amz-Signature=e6840c1cc3c49f116f1981e70e4ab016b27dbe6fcb5932f69641e08b82a64f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DXH7DSE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDEXGCsrZUQ%2BOtxEwk3088Ik8%2B1ShZhwVHqThHSAO6hewIhAM%2Fdd7A5cJ%2B7HPDGHrRQ6g%2BXlpNDwU3jEGjQyRd32MYEKv8DCC4QABoMNjM3NDIzMTgzODA1Igy%2Fholao3KtlDYs458q3ANekCOtAAlF5xw%2B30CGg%2BBltCqgEUo4x5EwqGSsHFcHyurVo1cl8ZidO2gBekSoS9bMaDjQjEc1oIaWWj8UwJ1gQrRRZM30fD8UeBFavLEHXMPn%2F4yiTl06e6H64Kbgv%2FjxbwbkIqEBHT0fbbbesJ%2Bqdrxn4A1GRn1LAFs7pYQFmdz9pHAaduv8KzuqDECjhD%2Fe%2FWZ6YQ%2FvQzltV4HExjnDzFVMfX3pyRixI556n0T08z%2F0Larkwoi%2BgOgweHlXva7%2BAMtyCckf4pVwfViQ3Esfs%2BKPA%2FUoEf0rMrbmcY%2BsKaB3u7LVhpsIS6a%2BuWoPwOqV2VxFspQRF2clDQPXboqti22yBnHsFwrW2Ck0viFAu3kUeaxKaEw4fubjYnOOgDAV72w8WgtYwsW8wIyU5idgOxfgLTqclIcXB3ccgQAHLiLme%2Fuo3xToc7xFc%2BT6QLDAvRyI8NSmIezvrpugkHSABG9LB6KE7V%2Fac81%2FC1wisFxTG5TKM1s2o%2BBdf7QJ6LGdC790maHRPrgdNMTupzw413BIGifgQeK6NF7UAa5dSxNVonWYDpIzw%2BKOlzAnpYsptQRUpheHdTfomGGUVfhzDJdtAEJ%2FadH3LDPAQtGV5Ivhbdum88TlYpWhCzCs6cDJBjqkAcjWzQPnG4rMAk7zHu0OP08Jq51LRrGOdNMzT07A46gOwFSRtayzcI91rPWNhscT%2BjGgycvi88v6nsnMjYN3QS%2FkEoGdR%2B1H%2BL9gwa7VH5EQn1bA7PR0gxn2YxT6GIlFVPARtTTQLJYAORjcz%2BINc85BoT%2BZtsS8iYRYrBS1QUm6NjEt6w1No8Tos1qZb6CrSOoUHDt283CliCLmyUCF%2BY%2BZZ%2FMD&X-Amz-Signature=d015c9ac4a63cf51469ae0794d44999df72a33b92759e20a0129146de70c79a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

