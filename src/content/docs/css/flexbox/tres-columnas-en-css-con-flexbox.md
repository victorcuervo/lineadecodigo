---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533LULEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5TDNItG969LwfTV5lLr6h%2FHjb7h42XAosm2W5dSXLgIhAIReQNcn%2FpJCvTf74o0msRRRBija2lNjMhqZpH0wqT9cKv8DCHUQABoMNjM3NDIzMTgzODA1IgxnQkCNQ3SM3I%2BSnSwq3AOCxb89d08JXzaMBml3P91G5JR4kc6XCA0L%2FMTKb%2BX2sWjVFS%2Fpsdf9ebdv52XEGcQbMnkKtiADMWDPNhTGBOu73a5yhvfo66NILpm%2BiAgL30yLezchNEENVtKeKseAoQ2Zup%2FSDsmHscApDaVOGil%2FrlQgpbcAnebMA7%2FPbGDlXTjStWHw%2BxI1n%2BXixWEJFsWVngNpTREFnCH5jQcbj%2BnEDJwBXImyF%2B%2FtpPq9nn%2B2pNOPoxxB5h%2F8CP2UxPUzN%2FF5Qy%2BZOsnLA4xgDoAiavIx6W1GPbb0rvmhTvByPn1aoP5gDS5boqv61GQOjr3ZRWdIUNKv%2FBukJjpHqUCeBwxe9G3UX9NPYmBxkcZdXc%2Fx5uLMBQCSEfQjxC2ahGd83THVMs54jOMMKMyRCP41HoVtDCigOaipuYMMUsQTPURJalIJH7digVAM8dYHH85IQp9WKoSYw1X1ujlGCV%2BAZzFXSru%2FFSxD8KyYkbDbfx13S%2BLBPUSHauGznNGNYvNyUjuNz%2BNyHmd%2FPh7JW2JIoshAH%2FyGZkWnV9sSV%2Flmq25pR7dJrzBp%2FlwqfbwEQcL0SVialn4mWGe4ikApnmAy8MMbjwXvZj1vb32IuBmIIUlWGSWLa17bXGGZP2IPRzDYptDJBjqkAd7SGc%2FAOc0Thk%2F1iCBs2LENKX4j6wwKzZCnN8dtzZUUT%2FetFr00OMI1wuI%2BzmeUiPJWps7XETeZYItzNLuPGVIH23p44528AQwhAfcMY5m4impETupOph0O0sc3mE9wO6yjyaC%2FHqRIXGqYwEl7kxWGiWBD5QvmAjkvgABeVk7a2UoCL3co0bPG6EGuYFsVGd1drK0qhCBrsHBB9JbApNjU3y1p&X-Amz-Signature=1426696454dd4cdfb3225157b561a8edba06e06e86fa613a1af1f4616666d8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533LULEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW5TDNItG969LwfTV5lLr6h%2FHjb7h42XAosm2W5dSXLgIhAIReQNcn%2FpJCvTf74o0msRRRBija2lNjMhqZpH0wqT9cKv8DCHUQABoMNjM3NDIzMTgzODA1IgxnQkCNQ3SM3I%2BSnSwq3AOCxb89d08JXzaMBml3P91G5JR4kc6XCA0L%2FMTKb%2BX2sWjVFS%2Fpsdf9ebdv52XEGcQbMnkKtiADMWDPNhTGBOu73a5yhvfo66NILpm%2BiAgL30yLezchNEENVtKeKseAoQ2Zup%2FSDsmHscApDaVOGil%2FrlQgpbcAnebMA7%2FPbGDlXTjStWHw%2BxI1n%2BXixWEJFsWVngNpTREFnCH5jQcbj%2BnEDJwBXImyF%2B%2FtpPq9nn%2B2pNOPoxxB5h%2F8CP2UxPUzN%2FF5Qy%2BZOsnLA4xgDoAiavIx6W1GPbb0rvmhTvByPn1aoP5gDS5boqv61GQOjr3ZRWdIUNKv%2FBukJjpHqUCeBwxe9G3UX9NPYmBxkcZdXc%2Fx5uLMBQCSEfQjxC2ahGd83THVMs54jOMMKMyRCP41HoVtDCigOaipuYMMUsQTPURJalIJH7digVAM8dYHH85IQp9WKoSYw1X1ujlGCV%2BAZzFXSru%2FFSxD8KyYkbDbfx13S%2BLBPUSHauGznNGNYvNyUjuNz%2BNyHmd%2FPh7JW2JIoshAH%2FyGZkWnV9sSV%2Flmq25pR7dJrzBp%2FlwqfbwEQcL0SVialn4mWGe4ikApnmAy8MMbjwXvZj1vb32IuBmIIUlWGSWLa17bXGGZP2IPRzDYptDJBjqkAd7SGc%2FAOc0Thk%2F1iCBs2LENKX4j6wwKzZCnN8dtzZUUT%2FetFr00OMI1wuI%2BzmeUiPJWps7XETeZYItzNLuPGVIH23p44528AQwhAfcMY5m4impETupOph0O0sc3mE9wO6yjyaC%2FHqRIXGqYwEl7kxWGiWBD5QvmAjkvgABeVk7a2UoCL3co0bPG6EGuYFsVGd1drK0qhCBrsHBB9JbApNjU3y1p&X-Amz-Signature=47b2aff45ae1c9758c07aa56f234a901ce6669c673edc873f430513107febcb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

