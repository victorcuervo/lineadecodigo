---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VG5SPEF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1oKdz3p03ZkkQuwsuBqruXFD7r4Bo%2FccvF%2BzX2Uh38gIhANtRn1%2FBb2u%2FSMNZ4IlCQpdnKxHaWaVYgpqOdB1UDiQuKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx2%2FJRM%2BDHHDCCl0sq3ANtbLGOBfOlW4DONREquPx1tmef8VW36lnvCYHSp7eB3qUkUPIXU44QNg7oaYKPegIMX1GAxJTHE5t%2B0TT%2BHpfsPVthaCWD61Dpq2SkpeNKWs%2FPAATZud3pm0H2zSSCbKGKJrAjoI2kM2YTeGsIuVv7yAknO1mzktcxySpO9fxPnF7wp3fR0%2BKSzr84isrxWVBj4ssVEhfLWUi%2BQZtGoK0s1gv4L0SJiRoS%2B0%2B8g24s%2Fdz5TicWHQWWIIDlMXeqmbwsiD%2FGChCgXIOPQhvtpW2ef31r8L9NYIakBBpCPYVwu1oV1Wc4omYUvYCGQW4kjS4RWMrtr%2BCLk7HuC7J74605C4ciUP0PP4560EMX9LER8hRkClnM61i1I38acF%2BGXdQljSr9YXhK1oUJdrSHzqc5jLEFujveG%2BSC%2FkJdDIr8eIooHH9iJletcBVKffMAHGb6vPaJUFt%2FD5vQ%2FSglOFYTC7HEXuyOD6ZZ0B9O6RnNEEv6e4blAyzzK3FbspBqEz8%2B5DGcreCDcL7S0XksFKsIFVguULj3rwDv%2Fta%2BAMmMCHV908lg6xLK5XMwDTYzqBP2oCy1pHeyOIbRf6E9iIm%2Bx0qS1JA2UCbOROaJLZpV%2FNOpp5S1nfjiiof93jD4h9%2FJBjqkAd96oWTA6rqCs5eBwKhXcIxqQpad7FJuaLXtn4%2Bk58zTNikvShMBkxIAEunTsAgsFy2pM%2B5VKuyCa4Ndv%2BazU1T7D7IW1%2Bqembodc%2BMyR%2Fe2T4Ezc0mZ9%2FRpDKnpeJoy2GryCSR%2FMfeG2O7EO816xeUNlnJ690qw9BPE3uCtK%2BLPO5Ib492hGcBmHMdveb6PFIVZD2XVjxdN7UQ79H%2B6EspW5Ci0&X-Amz-Signature=54dfa8eac571fd4468ef0206429368d7d7b41defc37469f16e40d2db41d91e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VG5SPEF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1oKdz3p03ZkkQuwsuBqruXFD7r4Bo%2FccvF%2BzX2Uh38gIhANtRn1%2FBb2u%2FSMNZ4IlCQpdnKxHaWaVYgpqOdB1UDiQuKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwx2%2FJRM%2BDHHDCCl0sq3ANtbLGOBfOlW4DONREquPx1tmef8VW36lnvCYHSp7eB3qUkUPIXU44QNg7oaYKPegIMX1GAxJTHE5t%2B0TT%2BHpfsPVthaCWD61Dpq2SkpeNKWs%2FPAATZud3pm0H2zSSCbKGKJrAjoI2kM2YTeGsIuVv7yAknO1mzktcxySpO9fxPnF7wp3fR0%2BKSzr84isrxWVBj4ssVEhfLWUi%2BQZtGoK0s1gv4L0SJiRoS%2B0%2B8g24s%2Fdz5TicWHQWWIIDlMXeqmbwsiD%2FGChCgXIOPQhvtpW2ef31r8L9NYIakBBpCPYVwu1oV1Wc4omYUvYCGQW4kjS4RWMrtr%2BCLk7HuC7J74605C4ciUP0PP4560EMX9LER8hRkClnM61i1I38acF%2BGXdQljSr9YXhK1oUJdrSHzqc5jLEFujveG%2BSC%2FkJdDIr8eIooHH9iJletcBVKffMAHGb6vPaJUFt%2FD5vQ%2FSglOFYTC7HEXuyOD6ZZ0B9O6RnNEEv6e4blAyzzK3FbspBqEz8%2B5DGcreCDcL7S0XksFKsIFVguULj3rwDv%2Fta%2BAMmMCHV908lg6xLK5XMwDTYzqBP2oCy1pHeyOIbRf6E9iIm%2Bx0qS1JA2UCbOROaJLZpV%2FNOpp5S1nfjiiof93jD4h9%2FJBjqkAd96oWTA6rqCs5eBwKhXcIxqQpad7FJuaLXtn4%2Bk58zTNikvShMBkxIAEunTsAgsFy2pM%2B5VKuyCa4Ndv%2BazU1T7D7IW1%2Bqembodc%2BMyR%2Fe2T4Ezc0mZ9%2FRpDKnpeJoy2GryCSR%2FMfeG2O7EO816xeUNlnJ690qw9BPE3uCtK%2BLPO5Ib492hGcBmHMdveb6PFIVZD2XVjxdN7UQ79H%2B6EspW5Ci0&X-Amz-Signature=f73ea45a9402f9a2f3ecb89b62dbdcb06085bea20101152b6a9f7d829755b620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

