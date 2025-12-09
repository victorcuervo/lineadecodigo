---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3M4KCUU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTRa%2BwM8W9pVXWzhXBlWYIILSDwy0mwFjMBK8Y575cMAiAe2n9ckurbGSE57%2Bblk7T7xiD9o62lLE%2BIPsOMvHBysiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7mJYQL5jTe7YQCNsKtwDbBP4db2SCA8y4XUaz%2BiaSl93AGRQuAIiCW4pJ%2BhvbCnk2PsyYRx%2BXaLL%2BmSBYrV7SAf%2Bu3TiCPB6W4DmIZ8GrMd0R8pksvlHLI2jFp3qwOoVSQZTre2nkM2klHW9TyLpBWTKIYDqIJH5JMi5%2B5NGnwbBDbmCTso3GE5mivohlfAgbSSIlBzjnA2Ccr04GHiw%2BC3zf6AMje%2BUqo%2FhPGwdpepMIN5N6zXwWEdvBsYWep9se6z5xIv5jw5H927uqNZRZL%2Buz951pnBcT95CxssVtZPepOpQGkmKMLyzLtuWHKFTKt3yF1y7AHj8BL8w9ZrXikcj3MqQprQi7yNdBnNTZnHZ5IXC2m4S5Tc08oN86PmuiYovVy8tOvprGWlQ6TmdReLcfHb1Sug9RuIJlWpEL7R8wk%2FT9yAdsVE8hB8cjh%2BYYm%2F1Jy0ToAREg1vL9UWZovFACsP%2BBxn%2FGdVwhNxGNY%2Fuk3by%2BasXxQ%2BT7ZPypwQcPmb%2BcP8UhWSmQgmoxTY2O0k9SDsuK1rcweWtrYwdM9iMvPtsO9TmGdKA1gJRwXJhoWU5T8OfcDwJGmdo3u23Jal4TX4DEUs%2FaGaxrgtZhe3GJ%2Fgv8cJSFKGGtK4GGqik%2FwT5DzWSavJ4pBMw8OjdyQY6pgFB3E98PXKgR166EuVAz3LSo%2FDtR7BvrNNoTkJuTc8Mib6%2BVJ%2FufizrcD3pZzTuwZ1gDh4l9G0k1KAFWfdb%2Bq5wWb2VPYdD%2BHgJQvP7fQ30qNpyBrebBa%2FbXZl4Ho7NAzE5bFrL2XCuBu1rgSbRGYcGojDBLygbK0lhVroQ2Er4XxWuSAPZ9sTvIoGNLNatydp30Qz5iRpt5G8hx0atL3ADf9KbEkuC&X-Amz-Signature=9acb37ad1948c6c98ba9c412f4ca5462c33aad283912ef1ceaeb9d3b38a75850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3M4KCUU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTRa%2BwM8W9pVXWzhXBlWYIILSDwy0mwFjMBK8Y575cMAiAe2n9ckurbGSE57%2Bblk7T7xiD9o62lLE%2BIPsOMvHBysiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7mJYQL5jTe7YQCNsKtwDbBP4db2SCA8y4XUaz%2BiaSl93AGRQuAIiCW4pJ%2BhvbCnk2PsyYRx%2BXaLL%2BmSBYrV7SAf%2Bu3TiCPB6W4DmIZ8GrMd0R8pksvlHLI2jFp3qwOoVSQZTre2nkM2klHW9TyLpBWTKIYDqIJH5JMi5%2B5NGnwbBDbmCTso3GE5mivohlfAgbSSIlBzjnA2Ccr04GHiw%2BC3zf6AMje%2BUqo%2FhPGwdpepMIN5N6zXwWEdvBsYWep9se6z5xIv5jw5H927uqNZRZL%2Buz951pnBcT95CxssVtZPepOpQGkmKMLyzLtuWHKFTKt3yF1y7AHj8BL8w9ZrXikcj3MqQprQi7yNdBnNTZnHZ5IXC2m4S5Tc08oN86PmuiYovVy8tOvprGWlQ6TmdReLcfHb1Sug9RuIJlWpEL7R8wk%2FT9yAdsVE8hB8cjh%2BYYm%2F1Jy0ToAREg1vL9UWZovFACsP%2BBxn%2FGdVwhNxGNY%2Fuk3by%2BasXxQ%2BT7ZPypwQcPmb%2BcP8UhWSmQgmoxTY2O0k9SDsuK1rcweWtrYwdM9iMvPtsO9TmGdKA1gJRwXJhoWU5T8OfcDwJGmdo3u23Jal4TX4DEUs%2FaGaxrgtZhe3GJ%2Fgv8cJSFKGGtK4GGqik%2FwT5DzWSavJ4pBMw8OjdyQY6pgFB3E98PXKgR166EuVAz3LSo%2FDtR7BvrNNoTkJuTc8Mib6%2BVJ%2FufizrcD3pZzTuwZ1gDh4l9G0k1KAFWfdb%2Bq5wWb2VPYdD%2BHgJQvP7fQ30qNpyBrebBa%2FbXZl4Ho7NAzE5bFrL2XCuBu1rgSbRGYcGojDBLygbK0lhVroQ2Er4XxWuSAPZ9sTvIoGNLNatydp30Qz5iRpt5G8hx0atL3ADf9KbEkuC&X-Amz-Signature=c45b30d881b54778c3b05229b9e78f15f98686316dbd613abd9ae94f29de379e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

