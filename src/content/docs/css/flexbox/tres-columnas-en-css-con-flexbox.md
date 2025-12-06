---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3BMITI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG79bd0NlIPFf2bf%2F%2BdytUOTA2HIRXOkPHer9q1eveAVAiB%2FqJ4RiYv5y19fI0Cu62s4ztKjYPAjLZFtI3b79pmuRir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqhwdYENdfjqT%2FB5yKtwDGteFN1J1rrkbRxTl8m5gdKIsa%2BZm3TwLYYXP3UwIbzraCiv28gw0gFR%2B6kuPOrYwq6dZnyluJLmoxzNU%2FnF9oZaprc4B%2B64ul6FbtTIiWvadbwF2Wz%2FVE5dHS%2FLTooK9bcwniAPkEH3IebKvjWGAlJ5TW4ZU2DS%2BTWRt36y8NYr7vaEL4KEOjIL8PZL2vAuRUeY%2FHw%2Fg9Sugyg3RcIOHxqIagX0jAibRQnw1YHuSagqA4KEsEbW0M7h4foPQUpT9esrZjXpkqgwRFOegYtbJd%2FLemNXSYAwVE9Pkqau9jMarQZXQlz5P1GZHZBV8Tp5FedlNCdY4AyHvSIutqV1kCMfnqWUBUkwzUs1LUj3hrfOU2tZG6Y3OfyITKTXTKa1U9Wmt4wHR6m8biFBOXNzqdKel3MPm3HL3kwsa4cj%2BWpTNlyjUFB3fuYFN3%2B4hSIoXSjxXNqjwucz5FeIquXIUISsj1CWIliRRAPz6pHRQ%2FGmVjVS5IvyNLbVXKDtvm09wuVD%2FJs2L6YSAd486fXg%2FoGLB0cdHchj1bzSZHgp7c6GxY1RCrzU0169EfHsS8kuiUT8egVsx0lLKC%2FP48bfrnBc00fcRCqSoKA9lMy7ykv86%2B6AE%2BXEmP77y0JcwpKbQyQY6pgEB7CdqZN1lCR2MazAGUCgCdeb3xykFzhosOPr5HoXNkR%2B%2Flwi5OvIf8rZbazRWIVEDXDtWR4l2Uh0z4RU93yfRHf3qGESblIXdGUZOxilTuKv7bpLgbs5LMYN3mPRltu%2FKj2ytUjkUi8LpeTF0wl9544togdhEHSZ8LEHVrh5fwmSO2Au5N%2BYH8UUpMQuEDftpKINPQ6HoaRiwXtmbGS4a0AdCAtSA&X-Amz-Signature=b419ffbfe688a70042389e3c469d53020b1638db3e86651c034aec6f0d5cd30b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF3BMITI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG79bd0NlIPFf2bf%2F%2BdytUOTA2HIRXOkPHer9q1eveAVAiB%2FqJ4RiYv5y19fI0Cu62s4ztKjYPAjLZFtI3b79pmuRir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqhwdYENdfjqT%2FB5yKtwDGteFN1J1rrkbRxTl8m5gdKIsa%2BZm3TwLYYXP3UwIbzraCiv28gw0gFR%2B6kuPOrYwq6dZnyluJLmoxzNU%2FnF9oZaprc4B%2B64ul6FbtTIiWvadbwF2Wz%2FVE5dHS%2FLTooK9bcwniAPkEH3IebKvjWGAlJ5TW4ZU2DS%2BTWRt36y8NYr7vaEL4KEOjIL8PZL2vAuRUeY%2FHw%2Fg9Sugyg3RcIOHxqIagX0jAibRQnw1YHuSagqA4KEsEbW0M7h4foPQUpT9esrZjXpkqgwRFOegYtbJd%2FLemNXSYAwVE9Pkqau9jMarQZXQlz5P1GZHZBV8Tp5FedlNCdY4AyHvSIutqV1kCMfnqWUBUkwzUs1LUj3hrfOU2tZG6Y3OfyITKTXTKa1U9Wmt4wHR6m8biFBOXNzqdKel3MPm3HL3kwsa4cj%2BWpTNlyjUFB3fuYFN3%2B4hSIoXSjxXNqjwucz5FeIquXIUISsj1CWIliRRAPz6pHRQ%2FGmVjVS5IvyNLbVXKDtvm09wuVD%2FJs2L6YSAd486fXg%2FoGLB0cdHchj1bzSZHgp7c6GxY1RCrzU0169EfHsS8kuiUT8egVsx0lLKC%2FP48bfrnBc00fcRCqSoKA9lMy7ykv86%2B6AE%2BXEmP77y0JcwpKbQyQY6pgEB7CdqZN1lCR2MazAGUCgCdeb3xykFzhosOPr5HoXNkR%2B%2Flwi5OvIf8rZbazRWIVEDXDtWR4l2Uh0z4RU93yfRHf3qGESblIXdGUZOxilTuKv7bpLgbs5LMYN3mPRltu%2FKj2ytUjkUi8LpeTF0wl9544togdhEHSZ8LEHVrh5fwmSO2Au5N%2BYH8UUpMQuEDftpKINPQ6HoaRiwXtmbGS4a0AdCAtSA&X-Amz-Signature=460e0274f2937e12550dbdd2daa8888a5d35f84a423ffe6423c961d974ec7431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

