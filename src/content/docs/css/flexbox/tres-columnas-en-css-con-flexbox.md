---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYJ6DOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiqsGf1%2FzcYqlUN4xu%2FEA8X%2F1lvfJjH%2FwkUqQ1TQvB%2BwIhAJ82TBeGZtYgEui36%2BnO9DvxsvU09hU%2BMxhqbQUXTxaGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwnY7Xq%2FL0zokrbDnQq3APU5CCTt9TgcArAdokno%2Fz4ysY1jjYrROyXHFA58n5obd5e3NlM7U%2BOjhuxxTVWyDGFQjIQR9iTAsw8KzhT890uplMObdm0jg9Wnk90%2B1BqoHztiNoHm2a4RAS02pR4iB65mq6NXzrYjVL%2BF2UsXzhEQFdFQ%2F6RNmqXiAv6OcvAlpW7G6zmSyf%2F4gVA7Chphrh75rsVe2drFKBPeMD7XLoPwpBrjdQLTzS5Sb%2BYNGCCSibxGgvx9mLHOHZN8a1W6iGb%2BfekVGq%2BYn49RM5hEGUH2X9WjYgYBgnTTzIkNHag22E8w2ax2P2gSKyIX8dw576xyZ4n2Ce7pJKdQ3gEnH0VLAZv7dA%2ByZLX0PCDIJcOPa45g8sB3qVEu945Nhy1Zl6WaTdjXF0bD3raQmdjvFTPVjUhwtPxQjYPzkGC9ExXW6bwtyQOERxMCyWQbjrzGVH%2BduaENeA7tzKexHJ16Vp0CUoIzBy1jN3DKKuiQoh4DGj7j62s3clkz0lW2XHrVQYh1z5N09jlpn9u%2F%2FvcCWbd8t15ehWLuxKbFyt%2BKffNEexwO2DhagoKuOVjl4aF0oCxgOQhd6W1uO1fjmAlf6ulHQtb6FmuvdqKeLil0FBDPN1W41HFlDplz84LaTDZptDJBjqkAf7lfaj4a6JiV%2BS6g%2B%2BEEEZaDMi2cWhB1nNfrS2YsUkFphku2OqiDJy0qWYClHGg8%2BTk6GzyvGejj%2BxYmJ%2FsZl5ZMTY3VWc6%2B0bDrkjqr0CkKFe2OhqYkJoyvgjqgvfmHaHlnIgkuJflKyDYtGJ17bgeh8Tw%2BXY4xpB5va3McqYDZDLMOvRAMfb6zwS67zifmeQT%2F9pudHXUKEYZncOGfhmiGFxS&X-Amz-Signature=973fdafcc59b76a293b99529b1b63aac9dc7af52d52094f9c9ae772294ef5662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYJ6DOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiqsGf1%2FzcYqlUN4xu%2FEA8X%2F1lvfJjH%2FwkUqQ1TQvB%2BwIhAJ82TBeGZtYgEui36%2BnO9DvxsvU09hU%2BMxhqbQUXTxaGKv8DCHQQABoMNjM3NDIzMTgzODA1IgwnY7Xq%2FL0zokrbDnQq3APU5CCTt9TgcArAdokno%2Fz4ysY1jjYrROyXHFA58n5obd5e3NlM7U%2BOjhuxxTVWyDGFQjIQR9iTAsw8KzhT890uplMObdm0jg9Wnk90%2B1BqoHztiNoHm2a4RAS02pR4iB65mq6NXzrYjVL%2BF2UsXzhEQFdFQ%2F6RNmqXiAv6OcvAlpW7G6zmSyf%2F4gVA7Chphrh75rsVe2drFKBPeMD7XLoPwpBrjdQLTzS5Sb%2BYNGCCSibxGgvx9mLHOHZN8a1W6iGb%2BfekVGq%2BYn49RM5hEGUH2X9WjYgYBgnTTzIkNHag22E8w2ax2P2gSKyIX8dw576xyZ4n2Ce7pJKdQ3gEnH0VLAZv7dA%2ByZLX0PCDIJcOPa45g8sB3qVEu945Nhy1Zl6WaTdjXF0bD3raQmdjvFTPVjUhwtPxQjYPzkGC9ExXW6bwtyQOERxMCyWQbjrzGVH%2BduaENeA7tzKexHJ16Vp0CUoIzBy1jN3DKKuiQoh4DGj7j62s3clkz0lW2XHrVQYh1z5N09jlpn9u%2F%2FvcCWbd8t15ehWLuxKbFyt%2BKffNEexwO2DhagoKuOVjl4aF0oCxgOQhd6W1uO1fjmAlf6ulHQtb6FmuvdqKeLil0FBDPN1W41HFlDplz84LaTDZptDJBjqkAf7lfaj4a6JiV%2BS6g%2B%2BEEEZaDMi2cWhB1nNfrS2YsUkFphku2OqiDJy0qWYClHGg8%2BTk6GzyvGejj%2BxYmJ%2FsZl5ZMTY3VWc6%2B0bDrkjqr0CkKFe2OhqYkJoyvgjqgvfmHaHlnIgkuJflKyDYtGJ17bgeh8Tw%2BXY4xpB5va3McqYDZDLMOvRAMfb6zwS67zifmeQT%2F9pudHXUKEYZncOGfhmiGFxS&X-Amz-Signature=681ce34671a713fd741e913a34b4aa7c815916cbeb7d92e1bf26100856b9f0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

