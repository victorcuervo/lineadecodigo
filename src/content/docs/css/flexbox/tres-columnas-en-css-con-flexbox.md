---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DG4NX5Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9E2tyk1My3I40uHs6IjStdYcQxPzeI2vahynuI4kLZQIgVqH8aOzI5FX8MJ5t%2BV%2BwjT2a96bA1eEDMyiTQpn3iYEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7dKVKmkvFGvA2ohSrcAzXrlxk6to1rVdk%2FSXkO5O12Nw7BzUm9qRqmmQnxLFfrmA3j4ad6UF%2FbV%2F1fZO4rrMWssXikQ83SX4z1V9CyErnPlZROQKqIZ6on6l3XFWp0qG%2BDQB9I2LZr5QMuVg24VWTRkttfw0DpM4QYCPtCzcE%2BYjwLSYibqy0YTPGWj%2FlklM0QCgwZ3VLgJar1DSayCdTFt1tzQy%2F554qylRsSfgTCroqDWz45ITLzi7tb9960bwno%2BPXCGTSFIEDa91XaE2G2f1RdHpLzmUueQadzkHE%2BpOV%2B95pckCi98BQz21laj5pQ1%2FX8cPpGfFYlUxriDW51WBrizG9owIAkDIgAP3%2BHPg7DHrQc2Wx7z%2BPdjzttEfGEBvtp4W90ZtAW%2BYUKz%2BZbIh01YM5qjlXLkLBQAMkiEvpfcexWiD8tGZc7wsKLT7uHUqxhxQiBzXdW8Mqe3EdAJo4OeDBG5rbAfRMeuky7aRltdG9Po0WDdUL1ODdWI9YXYQbaV71TcsnHKpD0vpvepBxNbbbPsd1%2BHC0va7Bh7AWNplx2v8HEK4OgU2Z3EhqS2N2AdeHBzvd%2FcmHna4Cd6TGkLuzxKCa6xaCfKFpiBQX97%2BJHwR%2F91jxyRT4KDwk53bmZ0CrlD8mdMPyZ1ckGOqUB5CkmZXldXktv50IeCCry6gLfFjTsoc3qz7jsCi8ykrpJ6wDrJIOuqe85yQvrXXdEOv0dw5QWmzpq%2Bi5qsQSxeCzhLgeMbGfd9gaM1kmKHyRPaufBDk2zPLgwdlaIzgws6wUg32UesYS%2FIoGHJ6EtUIGbMreEnxgxHKqbG79xakvhAOzBlCFhjRAr%2BqwP0Ww%2BBPWXzd3DHP2rMWdM%2BNVvF9eaU4%2Fw&X-Amz-Signature=db9b5511466732c050e6978963c947cbd94a6282f2050534d8c6398162f127de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DG4NX5Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9E2tyk1My3I40uHs6IjStdYcQxPzeI2vahynuI4kLZQIgVqH8aOzI5FX8MJ5t%2BV%2BwjT2a96bA1eEDMyiTQpn3iYEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7dKVKmkvFGvA2ohSrcAzXrlxk6to1rVdk%2FSXkO5O12Nw7BzUm9qRqmmQnxLFfrmA3j4ad6UF%2FbV%2F1fZO4rrMWssXikQ83SX4z1V9CyErnPlZROQKqIZ6on6l3XFWp0qG%2BDQB9I2LZr5QMuVg24VWTRkttfw0DpM4QYCPtCzcE%2BYjwLSYibqy0YTPGWj%2FlklM0QCgwZ3VLgJar1DSayCdTFt1tzQy%2F554qylRsSfgTCroqDWz45ITLzi7tb9960bwno%2BPXCGTSFIEDa91XaE2G2f1RdHpLzmUueQadzkHE%2BpOV%2B95pckCi98BQz21laj5pQ1%2FX8cPpGfFYlUxriDW51WBrizG9owIAkDIgAP3%2BHPg7DHrQc2Wx7z%2BPdjzttEfGEBvtp4W90ZtAW%2BYUKz%2BZbIh01YM5qjlXLkLBQAMkiEvpfcexWiD8tGZc7wsKLT7uHUqxhxQiBzXdW8Mqe3EdAJo4OeDBG5rbAfRMeuky7aRltdG9Po0WDdUL1ODdWI9YXYQbaV71TcsnHKpD0vpvepBxNbbbPsd1%2BHC0va7Bh7AWNplx2v8HEK4OgU2Z3EhqS2N2AdeHBzvd%2FcmHna4Cd6TGkLuzxKCa6xaCfKFpiBQX97%2BJHwR%2F91jxyRT4KDwk53bmZ0CrlD8mdMPyZ1ckGOqUB5CkmZXldXktv50IeCCry6gLfFjTsoc3qz7jsCi8ykrpJ6wDrJIOuqe85yQvrXXdEOv0dw5QWmzpq%2Bi5qsQSxeCzhLgeMbGfd9gaM1kmKHyRPaufBDk2zPLgwdlaIzgws6wUg32UesYS%2FIoGHJ6EtUIGbMreEnxgxHKqbG79xakvhAOzBlCFhjRAr%2BqwP0Ww%2BBPWXzd3DHP2rMWdM%2BNVvF9eaU4%2Fw&X-Amz-Signature=472c4ff63f2e77d909e3883ee706bea7e4c43e7e9ac09e613a9f567914fc3267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

