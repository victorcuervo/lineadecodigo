---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUZCSB3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmTdN4qO7i0TObfS6CFFoWFobryK%2BcONphv%2FS86QYIywIgKho5nt67mjUBj5qNIv0oDJLjimw11ss1ErA1Zd576HsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfrSHUktDHH%2FUfr8ircA%2Fmk4uJJS6vUuU%2BK3N3ERe268eI2WoQ6uTHwcGoe%2FH2Fs7X8vjEFk%2B0EoO0Zq1pR3zTIckncoVGLRrNYMyK%2FPiPNchmgp6gvH2vQYCgikFNVo1INeqm%2BCjv8O2mIYp4XlBCcuwD5VarDJtcFBJQkqmKcA6QtqYN2%2BKqpHW8qTb4qN4vQXPJNJh8OtohUw0U6FxmkMGBaEbA7CpEeX2nW8Ou%2FwEl2t%2FjINn0%2BlfNoXoMh1OKrrzBFfM5CJY3N2YgCcYlW0j3Fu98z4w6obnWCvGk5nQUtwlHCdbYOgK1OF2If6vKyeEcadiV2jUVCmwAd6XE%2Bz8BGNag%2BCiXJriGmMZR9rTJXAX%2B0W60CFxrh5kJiGiZVreTqlFSXfQI4GEbsiggvvMvN9wv0GqvmRjNvIV7VdidqTAEwUq99QtlPuqDN2ZZ5KdqdetqWTBAkYmE0XTsS21MVFLra44Lt3ap%2FxhHNeKpEWsfrw68IkKX0%2B5p6L3rhhiCCHQFsT5Kq7ZcE2MBqkcIFWqRhom6fUrQ%2FpDfWgt9uCH%2B4%2BypzAiaAxbQwCBiySdMrtRNkNNYm4YxMP6Lxes1DNT7Gach7FtjhecwSP9lG%2FxTnK9Fvx7LbPYRBdgZ%2FMsrQut7%2FojepMMuZ1ckGOqUBJ2peiwgXvmclz%2Byv2%2B14wnk8hEjBAIYnMGBbNe%2BWVK7otlaV1R%2FaqYsbfus7bCwLhEI3IV5KxW%2F6Tn8kAhDqO2ABQqO7%2FPMlRwRSnwWH9Cs6a12kNEKIgt%2FO3N5u8kclpQM0YxRADIjm4wSidGPLMrDerGPgmNxKQAimlWtyaCSmvzHzWl9OCZC%2Bbyq%2B%2FHMe9HYzDu8o0YmLOsbmdKfvrt9nlCwV&X-Amz-Signature=0d196c296f59e8da18a4b1a0488a80b29b25309a71644d741711e82c32b074ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUZCSB3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmTdN4qO7i0TObfS6CFFoWFobryK%2BcONphv%2FS86QYIywIgKho5nt67mjUBj5qNIv0oDJLjimw11ss1ErA1Zd576HsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfrSHUktDHH%2FUfr8ircA%2Fmk4uJJS6vUuU%2BK3N3ERe268eI2WoQ6uTHwcGoe%2FH2Fs7X8vjEFk%2B0EoO0Zq1pR3zTIckncoVGLRrNYMyK%2FPiPNchmgp6gvH2vQYCgikFNVo1INeqm%2BCjv8O2mIYp4XlBCcuwD5VarDJtcFBJQkqmKcA6QtqYN2%2BKqpHW8qTb4qN4vQXPJNJh8OtohUw0U6FxmkMGBaEbA7CpEeX2nW8Ou%2FwEl2t%2FjINn0%2BlfNoXoMh1OKrrzBFfM5CJY3N2YgCcYlW0j3Fu98z4w6obnWCvGk5nQUtwlHCdbYOgK1OF2If6vKyeEcadiV2jUVCmwAd6XE%2Bz8BGNag%2BCiXJriGmMZR9rTJXAX%2B0W60CFxrh5kJiGiZVreTqlFSXfQI4GEbsiggvvMvN9wv0GqvmRjNvIV7VdidqTAEwUq99QtlPuqDN2ZZ5KdqdetqWTBAkYmE0XTsS21MVFLra44Lt3ap%2FxhHNeKpEWsfrw68IkKX0%2B5p6L3rhhiCCHQFsT5Kq7ZcE2MBqkcIFWqRhom6fUrQ%2FpDfWgt9uCH%2B4%2BypzAiaAxbQwCBiySdMrtRNkNNYm4YxMP6Lxes1DNT7Gach7FtjhecwSP9lG%2FxTnK9Fvx7LbPYRBdgZ%2FMsrQut7%2FojepMMuZ1ckGOqUBJ2peiwgXvmclz%2Byv2%2B14wnk8hEjBAIYnMGBbNe%2BWVK7otlaV1R%2FaqYsbfus7bCwLhEI3IV5KxW%2F6Tn8kAhDqO2ABQqO7%2FPMlRwRSnwWH9Cs6a12kNEKIgt%2FO3N5u8kclpQM0YxRADIjm4wSidGPLMrDerGPgmNxKQAimlWtyaCSmvzHzWl9OCZC%2Bbyq%2B%2FHMe9HYzDu8o0YmLOsbmdKfvrt9nlCwV&X-Amz-Signature=bb9ec4c44d17415d2a50f645f9e2dc047f14efc3e7d8bbe8978a7ef543e53678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

