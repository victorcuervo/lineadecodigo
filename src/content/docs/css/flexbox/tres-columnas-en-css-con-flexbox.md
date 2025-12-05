---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUBDFFX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelu0nNT5tGXqQ%2Bhv%2BqX0OLg9XcG1%2Fgu1YmVBH1D2EYQIhAO%2FDeAbuW1dDxTxGfg7YOCymqPz2Vl5Rz19YQbaXUXGCKv8DCF8QABoMNjM3NDIzMTgzODA1Igy35KGjrpPRrLcH44Uq3ANCTdpmMr7Ylj0CXj1ycRTUP3broYMneZetTvxWT8q0wqtB06%2FqMFnLw6oYNmGhpPmA0LOjoDxtCM%2FMvtTOS8NuvH%2BKq6Of5HJzBtITdycTCUE624N4AlMZk8%2FRuQLXkJsp0Rf4jNwAP4b%2BBR0qM35cib3fRudWEtWO5KuT9rnDgXCv2iC5tC94aOWV2UdGa0%2FmPQa6lTSxH5%2Bnc5On7dHkdr6M0LeaKqWl0PdeGbVjHCwuah%2FugjzoKYspLjhKLKH04MYLDIQfLcoUNG5eaJU1F0V14eCfhFIB2gb0oF3T26evbt5osGNWzvogKSl5hV8Qx4imMQkI%2FiKkKi5UI2%2Fa8G1W6Z4k02NYV4ub%2BM94I7LcjbRpNuACg9Qc7rFH7fORH1cbrv6EsYyt8c%2F36oBGujuYD3jkeen4lBbrzAlkYHViMn%2FkLms7%2FkbGqWIIj6Wgy1mrHyhz2IBvrRT9ilht8aXVY4WoqbjsqJeIlUts1ZzZvtuLuw7%2FW%2BeAVGkfrnn2%2FIVM1IdlAg0fKSre7p%2BuPaP1%2FjIoSBIodIWSOGUYws5BZyXOZDiMeEzw%2FW1hrxeUS9QDAlCQ%2BQC8PSPrLkmlFv5conEMA7OlO4d%2FPTM0tpHHd0GtFzX4rYSQczCVycvJBjqkAWWk0iRVv4u8ePDNG%2FOMWsEJ%2FvVo136tm7iQ3pxmaRuGLptUHQ1h8GQwyZ361NZH3YGdclurV1BZAn80WO%2BBmdbcihStEwk9vJl55rIewZbcVL3uAfeDJcbPq0f%2BMbPoJtWOvHtcsN5W26GrRpH1oNmU7xvWlSa9XQc2ZH7nZi%2BAiB1KXhWx0jCkq%2FTsiDd3rdIeh4xLZlcytxJFSmr3MM73zF6T&X-Amz-Signature=05a18ecdfbbb463878bfef7fd872f2babc7b6d19e9da9d1e5565600d1b6813cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUBDFFX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelu0nNT5tGXqQ%2Bhv%2BqX0OLg9XcG1%2Fgu1YmVBH1D2EYQIhAO%2FDeAbuW1dDxTxGfg7YOCymqPz2Vl5Rz19YQbaXUXGCKv8DCF8QABoMNjM3NDIzMTgzODA1Igy35KGjrpPRrLcH44Uq3ANCTdpmMr7Ylj0CXj1ycRTUP3broYMneZetTvxWT8q0wqtB06%2FqMFnLw6oYNmGhpPmA0LOjoDxtCM%2FMvtTOS8NuvH%2BKq6Of5HJzBtITdycTCUE624N4AlMZk8%2FRuQLXkJsp0Rf4jNwAP4b%2BBR0qM35cib3fRudWEtWO5KuT9rnDgXCv2iC5tC94aOWV2UdGa0%2FmPQa6lTSxH5%2Bnc5On7dHkdr6M0LeaKqWl0PdeGbVjHCwuah%2FugjzoKYspLjhKLKH04MYLDIQfLcoUNG5eaJU1F0V14eCfhFIB2gb0oF3T26evbt5osGNWzvogKSl5hV8Qx4imMQkI%2FiKkKi5UI2%2Fa8G1W6Z4k02NYV4ub%2BM94I7LcjbRpNuACg9Qc7rFH7fORH1cbrv6EsYyt8c%2F36oBGujuYD3jkeen4lBbrzAlkYHViMn%2FkLms7%2FkbGqWIIj6Wgy1mrHyhz2IBvrRT9ilht8aXVY4WoqbjsqJeIlUts1ZzZvtuLuw7%2FW%2BeAVGkfrnn2%2FIVM1IdlAg0fKSre7p%2BuPaP1%2FjIoSBIodIWSOGUYws5BZyXOZDiMeEzw%2FW1hrxeUS9QDAlCQ%2BQC8PSPrLkmlFv5conEMA7OlO4d%2FPTM0tpHHd0GtFzX4rYSQczCVycvJBjqkAWWk0iRVv4u8ePDNG%2FOMWsEJ%2FvVo136tm7iQ3pxmaRuGLptUHQ1h8GQwyZ361NZH3YGdclurV1BZAn80WO%2BBmdbcihStEwk9vJl55rIewZbcVL3uAfeDJcbPq0f%2BMbPoJtWOvHtcsN5W26GrRpH1oNmU7xvWlSa9XQc2ZH7nZi%2BAiB1KXhWx0jCkq%2FTsiDd3rdIeh4xLZlcytxJFSmr3MM73zF6T&X-Amz-Signature=30a015fbe5ba4c2b29da21615a16955b9c4f4f9b75f8f7247d5ac703a762bf24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

