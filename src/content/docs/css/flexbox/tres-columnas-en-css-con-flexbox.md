---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNZSWXA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4BX%2F1zSM%2FkjJL2SN5Bdh%2FRSBDJ4m0jN%2F5BLzYiJo89gIhAOlCshQJL5JxbcEUuz9zIdDp76JZdwrnNOkh2zG6PHp2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh3Q1wmC1BDe6BbgMq3AMmc9a6ho2kFOXEiX%2BwChae98ou9l3vZdSv7YBAc%2BQ448wLttAPKORPbETb97gSX78kmDfULNOVgrJqJM5Iw88LCo4sLaeeJ048xsfm%2BmF%2FJuxn4MvdsCjI2pe6zh1ykq77w9uGzaObLncebJuQt1e6qTNOWUlImzl5mwf6kgxcXhycVTGqrKOPV0a5oHTxW37sJVwVjaa1gplgHpH%2F82gLMPDcZjufQVWj5sRt3bZGlvABrtnJd1BTeibIB8QdWh6KU0Zo0uq%2F%2BFJf6oT%2FFbFgut%2BFP1K056FA%2FirXPxSITU0gten6G%2BtyWls3wSo843Gxnl95N4bcmBeaJeyB7yJyR9mXDIHJy8WmfXXVEZL%2FcHlKyQuT9NF1fodNOU6jp%2FnBeWksZo2psd9X%2B%2B2GLEGqNdfB5Y36r9wQhm%2BcJ4yxkzhvk19VpX%2BjIbkcRTMCl2BrIrZHz4%2FbpzHbFNYDUzEAU652CRBuBcsoIs1JNzcQOxxV32hOaXtyNycpllTwmJXKAJQOw9QjnQFLMme%2F9OBESmSnNLpO7YQNQ4CjWrRMyR7bkr5PP%2BQJj4MNlaAawFtt1ghE3k%2B5oHW%2FtAizQY8zxF5QbHlGhDdUe00R%2FEDSX2vxpEIbZjjuhKTwPTCv%2FtLJBjqkATHG34vGh4oHbKG3V5YD9yqmTx4kwV3tcyJQ7OBDQTBHiwbGJI4dIZgOLjJNBtdbcbfWdUvWfRCdIBcmd2JkPdZdTaQbFwS7YW5JNICdvIMGVjDtmLqZF7b5yE0QTLM7LN8%2Bs3QRlthKdnHQcSz0p5fmWj9cy9CTCiBmxBNHTiXix9oRX7ICHwFwcTZ0wtBzXAtARncjfG3qlFOdTMy7slrTC6Fn&X-Amz-Signature=3dee3493cc8bf10eaa38eab3799448629679ded52ebbfe5fae752c935c7eb937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNZSWXA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4BX%2F1zSM%2FkjJL2SN5Bdh%2FRSBDJ4m0jN%2F5BLzYiJo89gIhAOlCshQJL5JxbcEUuz9zIdDp76JZdwrnNOkh2zG6PHp2KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh3Q1wmC1BDe6BbgMq3AMmc9a6ho2kFOXEiX%2BwChae98ou9l3vZdSv7YBAc%2BQ448wLttAPKORPbETb97gSX78kmDfULNOVgrJqJM5Iw88LCo4sLaeeJ048xsfm%2BmF%2FJuxn4MvdsCjI2pe6zh1ykq77w9uGzaObLncebJuQt1e6qTNOWUlImzl5mwf6kgxcXhycVTGqrKOPV0a5oHTxW37sJVwVjaa1gplgHpH%2F82gLMPDcZjufQVWj5sRt3bZGlvABrtnJd1BTeibIB8QdWh6KU0Zo0uq%2F%2BFJf6oT%2FFbFgut%2BFP1K056FA%2FirXPxSITU0gten6G%2BtyWls3wSo843Gxnl95N4bcmBeaJeyB7yJyR9mXDIHJy8WmfXXVEZL%2FcHlKyQuT9NF1fodNOU6jp%2FnBeWksZo2psd9X%2B%2B2GLEGqNdfB5Y36r9wQhm%2BcJ4yxkzhvk19VpX%2BjIbkcRTMCl2BrIrZHz4%2FbpzHbFNYDUzEAU652CRBuBcsoIs1JNzcQOxxV32hOaXtyNycpllTwmJXKAJQOw9QjnQFLMme%2F9OBESmSnNLpO7YQNQ4CjWrRMyR7bkr5PP%2BQJj4MNlaAawFtt1ghE3k%2B5oHW%2FtAizQY8zxF5QbHlGhDdUe00R%2FEDSX2vxpEIbZjjuhKTwPTCv%2FtLJBjqkATHG34vGh4oHbKG3V5YD9yqmTx4kwV3tcyJQ7OBDQTBHiwbGJI4dIZgOLjJNBtdbcbfWdUvWfRCdIBcmd2JkPdZdTaQbFwS7YW5JNICdvIMGVjDtmLqZF7b5yE0QTLM7LN8%2Bs3QRlthKdnHQcSz0p5fmWj9cy9CTCiBmxBNHTiXix9oRX7ICHwFwcTZ0wtBzXAtARncjfG3qlFOdTMy7slrTC6Fn&X-Amz-Signature=11c2069fe4c799284bba45a9ea17d2e78beef9a8b692459f7e23a4e3c99f938c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

