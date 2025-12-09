---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR3TYKR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL%2FLXAlTmnE9tbcMqnEma1NbaAcFXZoSv0isqixCflWQIhAI9GRApS4oKtNBenxoPxKacaBrTLGtu5GdQDGN94SpmBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCFlJtT%2Bev%2FrxH00Qq3APZSHzaKS9Qj7i5sk%2FnKjewAUBMTT1NktrD5n47sFr5Z3p9cSdh5FzwZ%2F98Pt2Cp4OyWYJPuCmm2xquTDGU7%2FxboAafR76SYcZoX82lkGomlu2ZarZ9XnU7mDTczvaKhfGm2y2dDp3Tul4ST4x5PGKbbi%2FrFkfT%2FDY%2BTZ%2F8CIXYCzBV8EFVdceJMBEm1hYUo1vpCj9cd7wkUthQxmyN0jk1g1Xw%2BeBrpJ1hOnsmjm0QAT0YItOpnqBgqRnK2t%2Bx1m7HAON%2BACeRPjGDjpvo1RUvJWgZW2dDWt0qSye%2FjCkH8NoqlPSqZ9LWQIHBKeQLZdnpcLTfQDk%2FW17p3CwjzzUbcmJpmD78xxPUAph%2BHSWHTv30K3A1uTazWc3FgZQpyeNq7KOuYNob8QfiGPabKP9Th5cDaPENDuy%2BV4hPE5HzD%2F6OzJ6nDrloZEaOQAPEeAb17%2ByuHOR6RrUxTlm1Dto0OiXqjKQ8SPbDcd5pGFzSvdtr4bUcoALelK4gd8p8NWTuUwsul3F2ZrtHD6SLqEN2X0tDTHH0xhBIaB1xYhIEs4OvBX4G31CNvN4TGkm5F3NutCIEnX9SihuF%2BeggUV4JcJmeDIsps6CfWFBY8xSV1VS3NnUEa9xpZe3eGTCs5d7JBjqkARB7QCeEAmccR9LkZEqOWNKNNd8qUkjtiwv7G9S6rZU2nMsULk4MwQS%2FJAy7CYDeGGDGslliyX4azdQp2uHSONAFSfcvB7Qquk0X45MM9HVPk7VIXBxIktTEs7T6rdTtrIhVZAuDCW3nrKM0XYRa3j9hDN4b1qtpzVgl30JqU%2FNyBlKb2addrNIiwDpcRoY%2Bm9S4zdS3VKWtMSZ5AFcMQI0dgOYX&X-Amz-Signature=d16ae9afa925335cfa28e8bf57bca029393b4a9cb6d34ed67d3e01e14dc887b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWR3TYKR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL%2FLXAlTmnE9tbcMqnEma1NbaAcFXZoSv0isqixCflWQIhAI9GRApS4oKtNBenxoPxKacaBrTLGtu5GdQDGN94SpmBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCFlJtT%2Bev%2FrxH00Qq3APZSHzaKS9Qj7i5sk%2FnKjewAUBMTT1NktrD5n47sFr5Z3p9cSdh5FzwZ%2F98Pt2Cp4OyWYJPuCmm2xquTDGU7%2FxboAafR76SYcZoX82lkGomlu2ZarZ9XnU7mDTczvaKhfGm2y2dDp3Tul4ST4x5PGKbbi%2FrFkfT%2FDY%2BTZ%2F8CIXYCzBV8EFVdceJMBEm1hYUo1vpCj9cd7wkUthQxmyN0jk1g1Xw%2BeBrpJ1hOnsmjm0QAT0YItOpnqBgqRnK2t%2Bx1m7HAON%2BACeRPjGDjpvo1RUvJWgZW2dDWt0qSye%2FjCkH8NoqlPSqZ9LWQIHBKeQLZdnpcLTfQDk%2FW17p3CwjzzUbcmJpmD78xxPUAph%2BHSWHTv30K3A1uTazWc3FgZQpyeNq7KOuYNob8QfiGPabKP9Th5cDaPENDuy%2BV4hPE5HzD%2F6OzJ6nDrloZEaOQAPEeAb17%2ByuHOR6RrUxTlm1Dto0OiXqjKQ8SPbDcd5pGFzSvdtr4bUcoALelK4gd8p8NWTuUwsul3F2ZrtHD6SLqEN2X0tDTHH0xhBIaB1xYhIEs4OvBX4G31CNvN4TGkm5F3NutCIEnX9SihuF%2BeggUV4JcJmeDIsps6CfWFBY8xSV1VS3NnUEa9xpZe3eGTCs5d7JBjqkARB7QCeEAmccR9LkZEqOWNKNNd8qUkjtiwv7G9S6rZU2nMsULk4MwQS%2FJAy7CYDeGGDGslliyX4azdQp2uHSONAFSfcvB7Qquk0X45MM9HVPk7VIXBxIktTEs7T6rdTtrIhVZAuDCW3nrKM0XYRa3j9hDN4b1qtpzVgl30JqU%2FNyBlKb2addrNIiwDpcRoY%2Bm9S4zdS3VKWtMSZ5AFcMQI0dgOYX&X-Amz-Signature=1b1b409aec5cc2210599ec7bdac078e14d3da5df883ffdb8de4b0265993e963e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

