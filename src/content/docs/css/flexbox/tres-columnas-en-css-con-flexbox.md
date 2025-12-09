---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJTFDMQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE40gqhHU0pxIUHFwRn0B8gxloEu51bFBdiHiz1a0nwAiAeK1hr%2F7bknUAaUwU5sVF4gnBYEoWkW4EdacQcCOKQ8CqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvIA2%2BnDuxqcFHqUJKtwDzOKCzB1%2FWKphP5RfbwcltRiWlO8rOE1JUC8rQ50H50c3yPWMqNH866ODrA7iUEttIsXQEh38OOu4ySC5lhiXz8OTnIrrnKLZs17gw%2FuViTai5y1WfgkYiIjf3Qd7U2JjrkfBLSKW1JMPcrTi21zVGzJJbIaEIcdssY9kmTkIR%2FGVVg%2BcPZ4jyGSC8JJzilyg7XKWDbRBPuEpTvSiq38B3bf9qR6CybDWsbflbiYm8qTCw9ZsgIanOjdVngLmCC462UiD2X5HikrDmjvkwPnZjIaq2hXCAv3my8oLuPR9%2BGq549ABf3qNT94L8M9xlusyKtFNnt8e31RXXV0876lfNETuqDxVUUgRvuiypT203q%2BOoy2Itk150yXLtYE5oaShL4kGlmZyFwNIsG7XQPAd28a2YjS9ZUuyCVsA4baVfZd5nQFABX3MO7Y9NY8Wjoa0ULCz3UxP%2F4D5KbnZVFuhU4jQsxAayJNWQ6GUx982eM2CC0BwdSBLKMIEDbmBt12SJBb8n%2Fyxm6re2Ju5KLHbm40Hg5sxndxIptQ37BhW0l2Xn6Mfb5zuo4AS%2BWzqELQniGPO49Dq9I2URbMcnHYEBffWSw2fT3MsG4Jvgntcsq963q2Eg4H105KTlWkwtYjfyQY6pgGJqeyQ7Qjo3u73%2FULN3nPiAYUfboJkGE9AQzdijAB%2FZLqHjQZQZhcNbFgyMpxTuTkVfM20WlqJrFSusdYezCrLZdiWqXvC9mfzsSMeiZcIyos1UTMPWDNh41YlDr1TqdE2%2B%2F5xLoaltUrNjMn4OwBdTtVpXbf8GrtmqWn4Ez7S15SMtZAlo7OBxc2t3XWq9qGtPBUfJGnZS0QSJSlusLJldF4u1cSi&X-Amz-Signature=90aab19ed8e304b8be7c909fe68fb0df7022f763dac9f67960cc45741ad6491a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJTFDMQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAE40gqhHU0pxIUHFwRn0B8gxloEu51bFBdiHiz1a0nwAiAeK1hr%2F7bknUAaUwU5sVF4gnBYEoWkW4EdacQcCOKQ8CqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvIA2%2BnDuxqcFHqUJKtwDzOKCzB1%2FWKphP5RfbwcltRiWlO8rOE1JUC8rQ50H50c3yPWMqNH866ODrA7iUEttIsXQEh38OOu4ySC5lhiXz8OTnIrrnKLZs17gw%2FuViTai5y1WfgkYiIjf3Qd7U2JjrkfBLSKW1JMPcrTi21zVGzJJbIaEIcdssY9kmTkIR%2FGVVg%2BcPZ4jyGSC8JJzilyg7XKWDbRBPuEpTvSiq38B3bf9qR6CybDWsbflbiYm8qTCw9ZsgIanOjdVngLmCC462UiD2X5HikrDmjvkwPnZjIaq2hXCAv3my8oLuPR9%2BGq549ABf3qNT94L8M9xlusyKtFNnt8e31RXXV0876lfNETuqDxVUUgRvuiypT203q%2BOoy2Itk150yXLtYE5oaShL4kGlmZyFwNIsG7XQPAd28a2YjS9ZUuyCVsA4baVfZd5nQFABX3MO7Y9NY8Wjoa0ULCz3UxP%2F4D5KbnZVFuhU4jQsxAayJNWQ6GUx982eM2CC0BwdSBLKMIEDbmBt12SJBb8n%2Fyxm6re2Ju5KLHbm40Hg5sxndxIptQ37BhW0l2Xn6Mfb5zuo4AS%2BWzqELQniGPO49Dq9I2URbMcnHYEBffWSw2fT3MsG4Jvgntcsq963q2Eg4H105KTlWkwtYjfyQY6pgGJqeyQ7Qjo3u73%2FULN3nPiAYUfboJkGE9AQzdijAB%2FZLqHjQZQZhcNbFgyMpxTuTkVfM20WlqJrFSusdYezCrLZdiWqXvC9mfzsSMeiZcIyos1UTMPWDNh41YlDr1TqdE2%2B%2F5xLoaltUrNjMn4OwBdTtVpXbf8GrtmqWn4Ez7S15SMtZAlo7OBxc2t3XWq9qGtPBUfJGnZS0QSJSlusLJldF4u1cSi&X-Amz-Signature=9ac76c563728cb10b250aee85f38982686d2387b733b0b6c74d86374d7773679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

