---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSZ324P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn6eiEv0Uls0wDczGZL%2BzAx8r%2BYqNhKlaD%2Bt622oN7WAIhAJjcSvhVJ9fTVK3d865HEURDEYInNeV4gJFfmDv%2BRLttKv8DCGgQABoMNjM3NDIzMTgzODA1Igw7QwxT4j%2FQVQHNy8Mq3AMfdtrWg3MqRUAD9PiHCnWLb2BnURtQOb%2FUaWl1mREEW8crkMv6z%2BLghWCHtcH1jvaIX4WbqN43u%2FbNE3puQJbguJaVkO0a%2BBdcqYRah0IMFTd007LZ5HSj1UvZ06yh%2BmHRyKsh6AKrDDL4nQcdDnJE5iHVy9f1zg6Ajp3tqmtu8qJrMmX2Q6jralQdTxTcR5oav053d9dfTG50ypok24tFoCARvoR%2Fk9RafAndO9wxX27Vo4%2BwiZh8I9pIVnJtrnj2awYYWKwYUmTB89ns%2F7CvpvSROht95FQDSHcsSk%2BwlDjbCM2fiJYqqzYSanHzM44vWI%2FouBN8P%2BLFmM7hQe1FVDlK%2BF8B%2BdLnTe6xbAgOfPjLukkULgvzXjSI%2BLDF0p6%2B36fHBL41IQRHWTNav9vT1rQF0IEW7Te4o%2Fh%2BZW689%2FaXTGgxrTIn%2BM6OxiG33145QDJqq5ookyHhVu1lm%2BOh1hBr%2FbrTZbBplGAWrHa9H2OFdDfokuf85RjNPo3geZquM67cNcsrwPgUstvkiFUOBSFXTwlUV%2B0VW6td6A0unTyfwL2rRywiIMxOXB1Fr6FTA0T1pBJNUKo2LedhjsRO7KRYqdd5ma9BKwzEPFa%2FD9Ej4uHqAPP3JlGa7jCJxs3JBjqkAQGvD9AJGvdAuSQGyDRmymGCsJmieeQ%2FYB9M8I%2BGli0Ua%2BRsVw6b%2FwVdRLJ6WSzyFj4zPnc1U82PFBKVPI%2FfIxbwtug3iJfuL2hknOiVRTomhK2EAm4x2iVss1S%2F%2FXxlcb%2Fh74uwVQTzg3batwZs6PGaXIzBzVJj5pfwBTYc4TB288KsIMf98v7e6pfya3sFBgpaLNHRX5j8ZNpwCNivi%2BUvV5kC&X-Amz-Signature=79f47104f025a5f52ab82a668e55a7835074d049d9039311b69cdcc26ec30ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VSZ324P%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn6eiEv0Uls0wDczGZL%2BzAx8r%2BYqNhKlaD%2Bt622oN7WAIhAJjcSvhVJ9fTVK3d865HEURDEYInNeV4gJFfmDv%2BRLttKv8DCGgQABoMNjM3NDIzMTgzODA1Igw7QwxT4j%2FQVQHNy8Mq3AMfdtrWg3MqRUAD9PiHCnWLb2BnURtQOb%2FUaWl1mREEW8crkMv6z%2BLghWCHtcH1jvaIX4WbqN43u%2FbNE3puQJbguJaVkO0a%2BBdcqYRah0IMFTd007LZ5HSj1UvZ06yh%2BmHRyKsh6AKrDDL4nQcdDnJE5iHVy9f1zg6Ajp3tqmtu8qJrMmX2Q6jralQdTxTcR5oav053d9dfTG50ypok24tFoCARvoR%2Fk9RafAndO9wxX27Vo4%2BwiZh8I9pIVnJtrnj2awYYWKwYUmTB89ns%2F7CvpvSROht95FQDSHcsSk%2BwlDjbCM2fiJYqqzYSanHzM44vWI%2FouBN8P%2BLFmM7hQe1FVDlK%2BF8B%2BdLnTe6xbAgOfPjLukkULgvzXjSI%2BLDF0p6%2B36fHBL41IQRHWTNav9vT1rQF0IEW7Te4o%2Fh%2BZW689%2FaXTGgxrTIn%2BM6OxiG33145QDJqq5ookyHhVu1lm%2BOh1hBr%2FbrTZbBplGAWrHa9H2OFdDfokuf85RjNPo3geZquM67cNcsrwPgUstvkiFUOBSFXTwlUV%2B0VW6td6A0unTyfwL2rRywiIMxOXB1Fr6FTA0T1pBJNUKo2LedhjsRO7KRYqdd5ma9BKwzEPFa%2FD9Ej4uHqAPP3JlGa7jCJxs3JBjqkAQGvD9AJGvdAuSQGyDRmymGCsJmieeQ%2FYB9M8I%2BGli0Ua%2BRsVw6b%2FwVdRLJ6WSzyFj4zPnc1U82PFBKVPI%2FfIxbwtug3iJfuL2hknOiVRTomhK2EAm4x2iVss1S%2F%2FXxlcb%2Fh74uwVQTzg3batwZs6PGaXIzBzVJj5pfwBTYc4TB288KsIMf98v7e6pfya3sFBgpaLNHRX5j8ZNpwCNivi%2BUvV5kC&X-Amz-Signature=34b71305488a1b774f7dde25e5fbe6f71e2606a7b36fb28244ef47d0de74fc95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

