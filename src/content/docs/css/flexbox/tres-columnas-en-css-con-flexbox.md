---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R4SJDW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCdRDZ86BA6UmUUJaX5uj29IBOz5HxXImG0T2CG3rrxgIga1%2BVJbhjCtQlDbVMAZhsdX9GSV8TLb4%2Bs6%2B83dhjqMYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCnAG2YLjm7NHBnHzircA1e19z1Th811BOmVC17QToWJdkc%2BbKgwskd3hOMOCrdYnRCpTexIwxNu6R%2BV%2F7b6fBjmwuIHYIBdy1exOgun9pKC4DFqvJSe7fNnkoIrS4mrOlv0bNTU%2B2G7iwBSXMFg3A%2BNQCHrw61oaLytaFe6jv6PnkOkDAPsPgT1EwOaPcaxRUpRz1ATOW1o%2Bb2wnGWJyjUphneGVnhgPl87bA3B7%2FtIGeQYhHZ3FLg5jSRV29tUNNHG5P4I6qIHJSy1mReDH5w4m9ig8WW%2FMhGzi%2FXo0N9wVg4Yk%2F8gXhwVru9mqh6cei1zIRarqGEYkSyTWGzVek25Z3t0zjENQd1P3RAYLvQa9dz2CmebQnrFrwoL%2B1FP2ADR6gsSrXFDtKmywwHwHj1u9dRM8FKEt5dvrpTNqT7wZNx%2B8vsWa2adbbzjHCmkvnCD7WlXDGC7FWgk5XhK4zbGC7owHCAr9sVkLEHOG3dCAtn%2BFgEmfjwQ1NgNk3fVZnve5buHSvWwTawRp2tgP%2FhU43do4eHe7nTuVWdBeRcepJOADxIjKZdGNRX8kCQLuJxW6gg4b%2FLxA1%2FfSWhctiq1D1TQm10ILgZt%2BY3xpNTj%2F7LvEpKfcCQhuorKojy63j1M3j7TXLodvovWMI6yyckGOqUBGj1%2Bq3NDeSvAVYqIhrElR70rWYRLkGKbZP7Vv7C0WghL%2FzMv9wbv6LrAPnEvW%2F5ucVgMVqSWUBcFBUuq%2FtGx5AcZDfFU9K12yisvFwJRpPa%2BAzBAAW%2BU2FtBWzk7IhJiDYBnude96nU3eh2NNvtUmKvF0yn9zpfulEHZeOKvI0ZgfOcjOORxDM6NcvqXt%2FCDltJM18na4ronSsHkY9HTwGi0owxx&X-Amz-Signature=83fd743b31ee591c8cd26c3db5db3d0aa3ddeaac2edc00d5f577ceeb720beb6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677R4SJDW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCdRDZ86BA6UmUUJaX5uj29IBOz5HxXImG0T2CG3rrxgIga1%2BVJbhjCtQlDbVMAZhsdX9GSV8TLb4%2Bs6%2B83dhjqMYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCnAG2YLjm7NHBnHzircA1e19z1Th811BOmVC17QToWJdkc%2BbKgwskd3hOMOCrdYnRCpTexIwxNu6R%2BV%2F7b6fBjmwuIHYIBdy1exOgun9pKC4DFqvJSe7fNnkoIrS4mrOlv0bNTU%2B2G7iwBSXMFg3A%2BNQCHrw61oaLytaFe6jv6PnkOkDAPsPgT1EwOaPcaxRUpRz1ATOW1o%2Bb2wnGWJyjUphneGVnhgPl87bA3B7%2FtIGeQYhHZ3FLg5jSRV29tUNNHG5P4I6qIHJSy1mReDH5w4m9ig8WW%2FMhGzi%2FXo0N9wVg4Yk%2F8gXhwVru9mqh6cei1zIRarqGEYkSyTWGzVek25Z3t0zjENQd1P3RAYLvQa9dz2CmebQnrFrwoL%2B1FP2ADR6gsSrXFDtKmywwHwHj1u9dRM8FKEt5dvrpTNqT7wZNx%2B8vsWa2adbbzjHCmkvnCD7WlXDGC7FWgk5XhK4zbGC7owHCAr9sVkLEHOG3dCAtn%2BFgEmfjwQ1NgNk3fVZnve5buHSvWwTawRp2tgP%2FhU43do4eHe7nTuVWdBeRcepJOADxIjKZdGNRX8kCQLuJxW6gg4b%2FLxA1%2FfSWhctiq1D1TQm10ILgZt%2BY3xpNTj%2F7LvEpKfcCQhuorKojy63j1M3j7TXLodvovWMI6yyckGOqUBGj1%2Bq3NDeSvAVYqIhrElR70rWYRLkGKbZP7Vv7C0WghL%2FzMv9wbv6LrAPnEvW%2F5ucVgMVqSWUBcFBUuq%2FtGx5AcZDfFU9K12yisvFwJRpPa%2BAzBAAW%2BU2FtBWzk7IhJiDYBnude96nU3eh2NNvtUmKvF0yn9zpfulEHZeOKvI0ZgfOcjOORxDM6NcvqXt%2FCDltJM18na4ronSsHkY9HTwGi0owxx&X-Amz-Signature=32b49e37c859c7861e5c10b8a7bbb4768427e6c2327fc63ba882c53eb3173325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

