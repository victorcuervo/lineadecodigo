---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NXBIDF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC8o06SZBY%2BNU%2Bmd1fom67bT4w2eMiSsLFDz9Agpcv8AiBglzEPIcXWnQNsUGULv0auDlQRnW3BEeFAqkV%2FN5zroyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMyNdBlgZWkv7ZXImJKtwD9BZhb3%2BL1XDLW984n7I2T1ueDjfwpPb4bFrfOH7DenjxmS%2F1xkmxXqsUfnE%2F6pzDyWJ%2F4LJZ6kgoBovq%2BeRikVlYpRJ2L5FjVDFrbpexBXYWYuDmOrr5mBlXEIivCSYSZUKhL%2BozDl80WHL57gNVK5tIs9umYTRGr22ukXt9e7e3qesr3uMau21LpEbu2dPIF1SQQcf7YA6vYt7MJxvIEgnav3hiBnuxwBa0eJM0Ckr36%2FPbvLlGW4coTvA4qow3fyy86qxyojibgn1spTHFQMx1B4UKhAxdOocnRRst7UKAJ5AOWTIGZgNDrJgJbSq1y3eFjmGM0gtSZm310TXAxegzJzYGWHkjJdMPdU0cRYmlmkenU8TEBZPUZrzsFyMAbrhunRzwlNpq4XYOD18EmLBGo1ucVNcRH6iZMgz0%2Fqrohictv0iXEerefDcEfLeo58QdnMZzpwFaOn4gmXNO6J73qGPWggSjEpnQcAzCkrQ3Y%2BR4KbphuN8jqAcFoa113%2FDul1XeM3YF0rGGASHuyEghoCqSQMeaaF5P%2B7Eh5rih3ciFJ4U0IeJroBxQ0V6ZdCcz5yLeP5uxbQGUR9FbHqnDQhA2Lp7D8AXlbmCYy6nRhhgOFa4Wa%2B8givsw2KbQyQY6pgHrTUAREtZXrdRMPK%2BZxM1I8JVz09qqgn9EUViujdD8kJ79OGNmfjyA89iBW5PrW3CTLhL3FscejJxdz%2BEKPFI4OVOSdNWS1rzmChXN1C7%2BSpBZVvhBeLfC7gP4ddE%2B1hs4ADNW5MhVFxRqORVnJSKt4f8ilJrNBoGA8fE2FBfgNSSLKjgOfNbNTlIn8XTxJa7uAQTgoyLY8pHGCX7vEnT4Adbbbwji&X-Amz-Signature=f295ff6a2b409aa125df0e13fbc38383282bfd9543878aae6504106e076cdb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NXBIDF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC8o06SZBY%2BNU%2Bmd1fom67bT4w2eMiSsLFDz9Agpcv8AiBglzEPIcXWnQNsUGULv0auDlQRnW3BEeFAqkV%2FN5zroyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMyNdBlgZWkv7ZXImJKtwD9BZhb3%2BL1XDLW984n7I2T1ueDjfwpPb4bFrfOH7DenjxmS%2F1xkmxXqsUfnE%2F6pzDyWJ%2F4LJZ6kgoBovq%2BeRikVlYpRJ2L5FjVDFrbpexBXYWYuDmOrr5mBlXEIivCSYSZUKhL%2BozDl80WHL57gNVK5tIs9umYTRGr22ukXt9e7e3qesr3uMau21LpEbu2dPIF1SQQcf7YA6vYt7MJxvIEgnav3hiBnuxwBa0eJM0Ckr36%2FPbvLlGW4coTvA4qow3fyy86qxyojibgn1spTHFQMx1B4UKhAxdOocnRRst7UKAJ5AOWTIGZgNDrJgJbSq1y3eFjmGM0gtSZm310TXAxegzJzYGWHkjJdMPdU0cRYmlmkenU8TEBZPUZrzsFyMAbrhunRzwlNpq4XYOD18EmLBGo1ucVNcRH6iZMgz0%2Fqrohictv0iXEerefDcEfLeo58QdnMZzpwFaOn4gmXNO6J73qGPWggSjEpnQcAzCkrQ3Y%2BR4KbphuN8jqAcFoa113%2FDul1XeM3YF0rGGASHuyEghoCqSQMeaaF5P%2B7Eh5rih3ciFJ4U0IeJroBxQ0V6ZdCcz5yLeP5uxbQGUR9FbHqnDQhA2Lp7D8AXlbmCYy6nRhhgOFa4Wa%2B8givsw2KbQyQY6pgHrTUAREtZXrdRMPK%2BZxM1I8JVz09qqgn9EUViujdD8kJ79OGNmfjyA89iBW5PrW3CTLhL3FscejJxdz%2BEKPFI4OVOSdNWS1rzmChXN1C7%2BSpBZVvhBeLfC7gP4ddE%2B1hs4ADNW5MhVFxRqORVnJSKt4f8ilJrNBoGA8fE2FBfgNSSLKjgOfNbNTlIn8XTxJa7uAQTgoyLY8pHGCX7vEnT4Adbbbwji&X-Amz-Signature=244a06cef6b37a8a901f4b44c5af9ec5a67ffb8591942cc0d9226f49ea9c3b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

