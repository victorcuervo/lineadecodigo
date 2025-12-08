---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TEF4SL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPYnJL5pFdOcdTvQE%2F5UbjWGs270HhAnK75VyO9Q43QIgMRi1B5XSxxV0NiLcfjswftPD4U9bSUBOlXe75wOZV5IqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeUAYpbnggnwp03KircA8uo5Y6b32VDt2n6hhr7%2FfieU%2Bzr3ajZcZfnKM1%2FKhJWhQoyGiX08hLkyQepQV%2BfesBiOmJw0UH5IWGwGLjHPljpRbjP9sLGyTdZhJeeLuuwkQD%2BSL%2FkBL7wfqkd5MbVY9x6gV67znNIGqqjbFA%2FZ9cKOlr9b0ytv2n47ekxTaKKsfte9nHoPcE5YzI6i05HD25Ai0JNqPp3nUXHluwG2ogFP6XMNbDH8RPYeYLREqZAQKgnRQUpfIm5Pe%2Fr%2FF1CwNbz98WaacdY5IcUEfRI6RZ%2FplV0uggARHQlQ3h59aBXUQ%2BkwBhqGCo3ou3s%2FVx4eCX0R%2FVi5tz5sOMKBwXl%2Bgmz8TrAu%2B0DAhEx4b6o1LT3ULVIS61kOzOYIldLrhtUQ35hX7VdHVZ2vC4ILTu0uk5LtYaXXkZOXpvuDwE5JXT3WxfJHfIMRojJt3%2FH5Gl4VolO66oGw5IlkEe3vfoXoXAkdcVfXB%2B6p3dyYBuIWy1Wd0C7ID0hgc56hNTAj%2FcEvb7Fb2DSlDnDDDGeSXcEai%2Fz%2B2yZI3mw2xEimR2OXCsxXDye9O9qugNguNgOyPQvHIpGG%2FqlB9E5ozOyry%2FdeQ%2FpmLEF1DcJqseyoFiZkACqfEiaAbUmn6A3wUMuMMiA3ckGOqUBzbm1Ui1vCXEMg3mFrAdpC%2BCPxRCkL7RRbyLRGOF5EgoCoiVRkqYjyWiTGcXNzu13Qm1RkHZCh9L8C%2Bp7lVwjn9nRTTdoDIp48vxGoFXI%2BhKXWs0v0tQFPmwzR4bcBsQ3PPzi2Mxycqw%2FWM8MG2MS9ju4%2F9v%2FHwutFgtWV8l22sMCQhqEGFWWKPEBSK9%2FMZSCmr1OjAcJHq2Lxbd1UFc2vHmVcSr8&X-Amz-Signature=e6af28eecda67d9150a5d126ef1aef31a97a3e596b69c0420b6956df771c62d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TEF4SL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T213455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuPYnJL5pFdOcdTvQE%2F5UbjWGs270HhAnK75VyO9Q43QIgMRi1B5XSxxV0NiLcfjswftPD4U9bSUBOlXe75wOZV5IqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeUAYpbnggnwp03KircA8uo5Y6b32VDt2n6hhr7%2FfieU%2Bzr3ajZcZfnKM1%2FKhJWhQoyGiX08hLkyQepQV%2BfesBiOmJw0UH5IWGwGLjHPljpRbjP9sLGyTdZhJeeLuuwkQD%2BSL%2FkBL7wfqkd5MbVY9x6gV67znNIGqqjbFA%2FZ9cKOlr9b0ytv2n47ekxTaKKsfte9nHoPcE5YzI6i05HD25Ai0JNqPp3nUXHluwG2ogFP6XMNbDH8RPYeYLREqZAQKgnRQUpfIm5Pe%2Fr%2FF1CwNbz98WaacdY5IcUEfRI6RZ%2FplV0uggARHQlQ3h59aBXUQ%2BkwBhqGCo3ou3s%2FVx4eCX0R%2FVi5tz5sOMKBwXl%2Bgmz8TrAu%2B0DAhEx4b6o1LT3ULVIS61kOzOYIldLrhtUQ35hX7VdHVZ2vC4ILTu0uk5LtYaXXkZOXpvuDwE5JXT3WxfJHfIMRojJt3%2FH5Gl4VolO66oGw5IlkEe3vfoXoXAkdcVfXB%2B6p3dyYBuIWy1Wd0C7ID0hgc56hNTAj%2FcEvb7Fb2DSlDnDDDGeSXcEai%2Fz%2B2yZI3mw2xEimR2OXCsxXDye9O9qugNguNgOyPQvHIpGG%2FqlB9E5ozOyry%2FdeQ%2FpmLEF1DcJqseyoFiZkACqfEiaAbUmn6A3wUMuMMiA3ckGOqUBzbm1Ui1vCXEMg3mFrAdpC%2BCPxRCkL7RRbyLRGOF5EgoCoiVRkqYjyWiTGcXNzu13Qm1RkHZCh9L8C%2Bp7lVwjn9nRTTdoDIp48vxGoFXI%2BhKXWs0v0tQFPmwzR4bcBsQ3PPzi2Mxycqw%2FWM8MG2MS9ju4%2F9v%2FHwutFgtWV8l22sMCQhqEGFWWKPEBSK9%2FMZSCmr1OjAcJHq2Lxbd1UFc2vHmVcSr8&X-Amz-Signature=4c04cf3036934ec53511af98a7de518f034be6791f6e6fd38f7a1f68c635fb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

