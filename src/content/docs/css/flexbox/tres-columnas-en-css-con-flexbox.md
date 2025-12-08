---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRHPDUO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJt%2BCLU1BeeHqlLjv3DT8qgQHfeL5gJWKtUo1MM%2BvukwIgac%2BmHiOIZ62sh%2B5L1ocjlZl8HAwDEXz%2FixQyOEhyxhkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQCQsCOgX4yedVnYircAyqT6WeSEOXEoyjSaEHxQlV8L92xt%2F%2F3CRBF8sx6%2BXn2NJBgDou3LNWobq90W2klthnDXsgEtT5eOafKErBv%2BrO91qQESCfuVyWw%2F%2F9cMqJjepUoweie9ZJpe%2ByZNv9e9jtraQ0kwMkCo3MTVILcmKZnHwVb8r2dZQ4mHJ7uIlBu2sHonDT1tNgtd93W%2B4eFw4uHAGmx6Uqe01mn%2FRXTQNmxMn%2BbtTkovY7DVvXFzHVY0wa%2FYIns%2FcE9rENZvfU6GGtqcsNnnbxfopp89aumahZkDIwpXlyyIllKVmEIMfJ0og9c1RFagE0a11X4KMLk%2BrlCy8o1atUu%2Bf4AYcocPE3gS%2F1sZ4h1MiC%2FzrLbkX5tHfy86q%2BXklK5%2FWITWR7TJfWmNSHwtlZaOwm9tqju%2BQrtHeqjmFwASAf54LzXGsXXVAEe34DgH2bpSDscgZYS9R3dSKBfNHqY7dkRKYl8j1pUPkDz5CEc%2FMtqBGTTdRCn2xMfOgjI2JQLo98C6UBASK%2F0uOMHpju8QYwKTuWApuBkiAi9OSj%2BYPpqVU4q2LYpQbQ0EX3rdj6P3015iHsk85EKFKiXhcvE1MMRRnnIh07EJ0oLT85nyQNPXTVqYCvv6et3jLEmTlJTGHVDMKKh2MkGOqUBGzINmtEk23QKvA40220PXqxPkySANVfhEaDfI5ydoWUlYLRBkpoigi1xxQ9xAzEOMkGADDLV1YzTJUucRX6y0Q%2FNl504s6IWMo1yfMKGxUhLZ%2FnT1T1V4mQ9W%2F%2B828OdahVk%2FW2SjkuT9Vh039OBNHOtKXfjJLUKhkS8RRk6zWxiROVH%2FcWaf8tRWyCkaKK3AOHF%2FbhTDVc5f%2FQHDPc1AQKqqs9z&X-Amz-Signature=6236f5736e23a32633045613b5420e3fc7bf61a60a8143c13f8725df80d90351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRHPDUO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJt%2BCLU1BeeHqlLjv3DT8qgQHfeL5gJWKtUo1MM%2BvukwIgac%2BmHiOIZ62sh%2B5L1ocjlZl8HAwDEXz%2FixQyOEhyxhkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQCQsCOgX4yedVnYircAyqT6WeSEOXEoyjSaEHxQlV8L92xt%2F%2F3CRBF8sx6%2BXn2NJBgDou3LNWobq90W2klthnDXsgEtT5eOafKErBv%2BrO91qQESCfuVyWw%2F%2F9cMqJjepUoweie9ZJpe%2ByZNv9e9jtraQ0kwMkCo3MTVILcmKZnHwVb8r2dZQ4mHJ7uIlBu2sHonDT1tNgtd93W%2B4eFw4uHAGmx6Uqe01mn%2FRXTQNmxMn%2BbtTkovY7DVvXFzHVY0wa%2FYIns%2FcE9rENZvfU6GGtqcsNnnbxfopp89aumahZkDIwpXlyyIllKVmEIMfJ0og9c1RFagE0a11X4KMLk%2BrlCy8o1atUu%2Bf4AYcocPE3gS%2F1sZ4h1MiC%2FzrLbkX5tHfy86q%2BXklK5%2FWITWR7TJfWmNSHwtlZaOwm9tqju%2BQrtHeqjmFwASAf54LzXGsXXVAEe34DgH2bpSDscgZYS9R3dSKBfNHqY7dkRKYl8j1pUPkDz5CEc%2FMtqBGTTdRCn2xMfOgjI2JQLo98C6UBASK%2F0uOMHpju8QYwKTuWApuBkiAi9OSj%2BYPpqVU4q2LYpQbQ0EX3rdj6P3015iHsk85EKFKiXhcvE1MMRRnnIh07EJ0oLT85nyQNPXTVqYCvv6et3jLEmTlJTGHVDMKKh2MkGOqUBGzINmtEk23QKvA40220PXqxPkySANVfhEaDfI5ydoWUlYLRBkpoigi1xxQ9xAzEOMkGADDLV1YzTJUucRX6y0Q%2FNl504s6IWMo1yfMKGxUhLZ%2FnT1T1V4mQ9W%2F%2B828OdahVk%2FW2SjkuT9Vh039OBNHOtKXfjJLUKhkS8RRk6zWxiROVH%2FcWaf8tRWyCkaKK3AOHF%2FbhTDVc5f%2FQHDPc1AQKqqs9z&X-Amz-Signature=dc7bf9412e70f9c948ebd813e01da00817a9384c2cb2f9a80a99dceae7566123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

