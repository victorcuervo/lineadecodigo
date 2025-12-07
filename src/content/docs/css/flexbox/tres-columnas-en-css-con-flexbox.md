---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TORXA6S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4L1Jwn1TvlywQ3xSNYoKLxJ0dqUo5R2AR%2BnNCspRjBAiAQBfBrJ2tR83IdeYxE7u4S%2FcrGzUOJbooWrJIbqzvdniqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP7z8tnTNDrY7lDJiKtwD%2FXeFWqqYFXEkLNFSuhhaeHKbBXQPQp5tjDQod99nJLEnQFZl3aSVSrt%2F0Z%2FOuQ1hgVdgpghP%2BrZLB8UbIPdcAbkR9e4PzdmknDU0pWYBj3chHQXiykevnr5ud%2B%2F5hYHFmt5KPFvYpXX1g6tpG0QAIkgqzRBSasc8UYUsYSMVsbvwXiQ6OGovMohXb2des3b0%2BZaM%2FQ606uXsx6j9yVTBvF3rEnkC1W3J4y%2FpbnIn4ajF%2BDoUbdW%2BV8Hxx6c6lxUyYr7OO2%2Fi7aqmFZYiIFrj6msVkAF%2BN2olHWBr8X3bmKOWn6m%2B%2FpZlKpuQD0smqe4Ip1VqE%2F0AET3MoZYyFImIpkIKkw7o%2FTYQLTn3U3ldzUW50zyIql8k%2BL3%2Fgt8xkvW9xQVXqH8nudluG7o0E%2B%2BruvgBE5KWAnIYbmofZ31utrDRJg0uIjXp2Y%2FKJHEfyBuzyy9oBymwxXgta964ZsL8kMMizvTmi2Mhb9Lg2EdNN1p6gF3%2BFo2WCS4pSMmeqkqXxpVlCvhY2d9haGb8wlx7Ojm20PYan3yXPF46ssDh5LYd%2BWr9kUiiGVFroylNDH8nKOA8bTm8G5eBQGkcbxg%2Bid%2B8Zyc5APeGhv%2BWcUXr5Vdte8xUuqY%2F94PP4IMwq7%2FWyQY6pgHEDQ0zcjc%2F59HG6HbKi9vtuMymLgP0pt8bEQrN6Opsz7bi4ovWMKoyWI3kUToMTppQM4W4QKJWKsJLpxqpFEnWRRZn0SyY8URigL6xDu1sZk77zNtoMar97%2FP5iFI2NoCfKzcnejniWp%2FAVwn0Ld1u7EkPpUBOzRyhr2UXK0N8ZYPXXcCOtEXB9vL8irZkRj60z%2BPGv%2Bl4uKL8aOEofGnfCVE9LhTo&X-Amz-Signature=3aaf01662d71389c5ad632790c2d6da00b843b0b0945aba9ee2b53b497650b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TORXA6S%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4L1Jwn1TvlywQ3xSNYoKLxJ0dqUo5R2AR%2BnNCspRjBAiAQBfBrJ2tR83IdeYxE7u4S%2FcrGzUOJbooWrJIbqzvdniqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP7z8tnTNDrY7lDJiKtwD%2FXeFWqqYFXEkLNFSuhhaeHKbBXQPQp5tjDQod99nJLEnQFZl3aSVSrt%2F0Z%2FOuQ1hgVdgpghP%2BrZLB8UbIPdcAbkR9e4PzdmknDU0pWYBj3chHQXiykevnr5ud%2B%2F5hYHFmt5KPFvYpXX1g6tpG0QAIkgqzRBSasc8UYUsYSMVsbvwXiQ6OGovMohXb2des3b0%2BZaM%2FQ606uXsx6j9yVTBvF3rEnkC1W3J4y%2FpbnIn4ajF%2BDoUbdW%2BV8Hxx6c6lxUyYr7OO2%2Fi7aqmFZYiIFrj6msVkAF%2BN2olHWBr8X3bmKOWn6m%2B%2FpZlKpuQD0smqe4Ip1VqE%2F0AET3MoZYyFImIpkIKkw7o%2FTYQLTn3U3ldzUW50zyIql8k%2BL3%2Fgt8xkvW9xQVXqH8nudluG7o0E%2B%2BruvgBE5KWAnIYbmofZ31utrDRJg0uIjXp2Y%2FKJHEfyBuzyy9oBymwxXgta964ZsL8kMMizvTmi2Mhb9Lg2EdNN1p6gF3%2BFo2WCS4pSMmeqkqXxpVlCvhY2d9haGb8wlx7Ojm20PYan3yXPF46ssDh5LYd%2BWr9kUiiGVFroylNDH8nKOA8bTm8G5eBQGkcbxg%2Bid%2B8Zyc5APeGhv%2BWcUXr5Vdte8xUuqY%2F94PP4IMwq7%2FWyQY6pgHEDQ0zcjc%2F59HG6HbKi9vtuMymLgP0pt8bEQrN6Opsz7bi4ovWMKoyWI3kUToMTppQM4W4QKJWKsJLpxqpFEnWRRZn0SyY8URigL6xDu1sZk77zNtoMar97%2FP5iFI2NoCfKzcnejniWp%2FAVwn0Ld1u7EkPpUBOzRyhr2UXK0N8ZYPXXcCOtEXB9vL8irZkRj60z%2BPGv%2Bl4uKL8aOEofGnfCVE9LhTo&X-Amz-Signature=b46724af210eacb66701dbe7d201b17bd2f6c54d1b654070e74a27873c5c471f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

