---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO667KND%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiTyDmzHqLCov07arcbtFKESSfLlNAEID%2BT4R0hFEH%2BAiEAsX5hHduWVsmFsKkUn3mGthNIg3%2FCkYS67Jmo%2BVjx%2FL0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDhwHEiNWdFf5n%2FXiircA1cGe3S6vW9%2BLxvqVEQCmyltM8KgZcimCrqSRwLH2jsduse%2BTzNo%2B6%2BGoiMQh2BxjN%2FBShPZwxajofi8kyMtWcuQEnavTxlW9zXY%2FbslNkMIISHQjgsOZRfA%2BzG2J2LTE%2FVdmMOYU3yLO8Pfo8ASVqSeCcb1t3sSMHq5%2F5TaVX0iS3T35%2B%2BNh1Z3SK7hqvQlydmneAzmRzxzrK7c1120m%2FV5wCmnOUdiLjx4k1%2FSkX471%2Ff7595TRk1ZJ83x6QnY9ckwJKO%2B2p%2Ft7ZErooUSvlUl8mlcnH34vYtLkHolcK2e4WUXVNU3rptFx4%2BOE5XG2Vc71Eeb%2FwS1SS6dstXXYI7TK5X%2Foc%2FlHA0guBVEhXovy7KTeo49WfmNS964JuExZs0bygcleHn1ESBSRAvqZq0%2BwcFUrqKVjs%2FkAkOEOMVObqJpAzvOsmAnzHn9HQXBHeehhvm2MKfv7Wuz7gAfgjGKCeJrt4SW5AuJXKy7HRc3AhlzDpS2wsow5X8X5koVtQs7Kx0VYlKoUynFpQWXu9RRZZqjEjgUtvF%2FxQ5WGKXipAVpOTReZ6bbgJyV2Ox24uVG%2BnFz6uOxg67CKzZgdJ7ycW29UJVIJcH7DsJUEqK%2BfGzbaS3pynD8rgthMLum0MkGOqUBKHbnJy3AQZmqAeyLkR7QM48fbbnMKGGjxPoKtrb%2B4XXCBjsFTvDTsJlNJ2%2BoR7KaTLXJtUtUEvXzOodICUvMS9HJ0gP838mdIm7iXMuNVz61Opp8ezA3GJelliGGHgn04BKOjTtge%2BtcP9vSm6eT5VCFKNpvBb%2BTczYLuqvJFg68ZdTyp5sdL7IEpFaw83Dblr7EyRAyXhyY%2FtFRh6WFJteY8zNS&X-Amz-Signature=e596f0f41e87379edd070888e114c3e37417a72a4353697c6ee81bee8b2a3df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO667KND%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiTyDmzHqLCov07arcbtFKESSfLlNAEID%2BT4R0hFEH%2BAiEAsX5hHduWVsmFsKkUn3mGthNIg3%2FCkYS67Jmo%2BVjx%2FL0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDhwHEiNWdFf5n%2FXiircA1cGe3S6vW9%2BLxvqVEQCmyltM8KgZcimCrqSRwLH2jsduse%2BTzNo%2B6%2BGoiMQh2BxjN%2FBShPZwxajofi8kyMtWcuQEnavTxlW9zXY%2FbslNkMIISHQjgsOZRfA%2BzG2J2LTE%2FVdmMOYU3yLO8Pfo8ASVqSeCcb1t3sSMHq5%2F5TaVX0iS3T35%2B%2BNh1Z3SK7hqvQlydmneAzmRzxzrK7c1120m%2FV5wCmnOUdiLjx4k1%2FSkX471%2Ff7595TRk1ZJ83x6QnY9ckwJKO%2B2p%2Ft7ZErooUSvlUl8mlcnH34vYtLkHolcK2e4WUXVNU3rptFx4%2BOE5XG2Vc71Eeb%2FwS1SS6dstXXYI7TK5X%2Foc%2FlHA0guBVEhXovy7KTeo49WfmNS964JuExZs0bygcleHn1ESBSRAvqZq0%2BwcFUrqKVjs%2FkAkOEOMVObqJpAzvOsmAnzHn9HQXBHeehhvm2MKfv7Wuz7gAfgjGKCeJrt4SW5AuJXKy7HRc3AhlzDpS2wsow5X8X5koVtQs7Kx0VYlKoUynFpQWXu9RRZZqjEjgUtvF%2FxQ5WGKXipAVpOTReZ6bbgJyV2Ox24uVG%2BnFz6uOxg67CKzZgdJ7ycW29UJVIJcH7DsJUEqK%2BfGzbaS3pynD8rgthMLum0MkGOqUBKHbnJy3AQZmqAeyLkR7QM48fbbnMKGGjxPoKtrb%2B4XXCBjsFTvDTsJlNJ2%2BoR7KaTLXJtUtUEvXzOodICUvMS9HJ0gP838mdIm7iXMuNVz61Opp8ezA3GJelliGGHgn04BKOjTtge%2BtcP9vSm6eT5VCFKNpvBb%2BTczYLuqvJFg68ZdTyp5sdL7IEpFaw83Dblr7EyRAyXhyY%2FtFRh6WFJteY8zNS&X-Amz-Signature=173d26242c68a8839de46de3ea3735e538c825c7ed2b040a459f2f2dfcbdcad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

