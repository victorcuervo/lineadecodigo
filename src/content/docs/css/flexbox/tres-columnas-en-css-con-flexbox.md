---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLNA7ZD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfz68%2F%2B0%2FbEg8oXOeK0OtD6Gfq9kpA86PH0dr4YWZd2AIgLn%2FNYmAcCBSDKa5SgYKvktp5%2BRKBQWIg2v0Ou0Qga9oqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPGW4zy1gFWEz0S4SrcA0o9zUfTOsXlDnxUnkuWYqBVnTMp1Cb6kZSQDgOF%2Fze%2FO4fnk6C0SqfR1kzxte%2B0iEUvr5RC5r67JkQeoa%2BQQFuX0qWzWErmqU0Eq9georxT7cxkITeuJe2yqjr%2FHAGEjXagMpK%2Bg8y4J874EzBOB82C7Itr4AVrnZDYXYQ4NA1gotnHSxXEKJ%2BIyfjp%2FDq6Ywu50ihOpicojvyFcg0EFFR5wqxkX4SLtzY60lVy8az5Kj26nbC%2BcL7s7Wa%2Fb9WIAl9Nx54u2hYfmBGqzmYfyRfjk2IlmwgKowLlpa6fquwvtAjqXTPZKsGgNIsg0UzoGZkvxxRZJaj1sdYOunNKRswnc6Djyk94R8HypOU2nH2rBYiGlZ7PBsQwoFm4%2Fnvdsaz7Pjg6LJ3wc8lE3Gm6TCSuc94hoyU6ZR5TC2PU7GIWLzpLjf1uVfxrq6tWV%2FkF3YbVU%2Bb%2Fznr6FurlXR%2BIbrgwBIpz4hPnjC8ilCqdJMROZkUgF845zfhNJkDxh%2Fs0I0xXMctUOib7LtSFsg5tsstyDJ%2F%2By8mEoPygWbNbDPmrNSQ6DBOV4fmOITLhQ03B7Yj3Nwp%2Fq0%2B37OIa7yzz4vuFFDBC9zfXpEQ0%2By8ahsnnhw6U%2BKxpbbgpMMcwMIi%2F1skGOqUB8jl4EdIoZlGpQdOR3GCF9Sehnw7jWAU0Y1BqZhWjVkpBG6ow%2FlMadyWW%2BizAIULrPoseedAdD4ptcxInpm%2FGI7Dci2oaRELT149EaiYO1ESDQxWagJPWrDL6zojgJIQqo5QEp9AB2pTnuGMNDzq1iXoDg4lebqyW89Vh0QkmzjwxG0SxGzq4F9WNYCacspJznKiFx%2Fsd5U6GPZaxS8H%2BdIeIAzKR&X-Amz-Signature=e7844c4a08fe5f56f69640a4ecd3eaa94ac6abdaf6254db5dedf954004a228b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLNA7ZD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfz68%2F%2B0%2FbEg8oXOeK0OtD6Gfq9kpA86PH0dr4YWZd2AIgLn%2FNYmAcCBSDKa5SgYKvktp5%2BRKBQWIg2v0Ou0Qga9oqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPGW4zy1gFWEz0S4SrcA0o9zUfTOsXlDnxUnkuWYqBVnTMp1Cb6kZSQDgOF%2Fze%2FO4fnk6C0SqfR1kzxte%2B0iEUvr5RC5r67JkQeoa%2BQQFuX0qWzWErmqU0Eq9georxT7cxkITeuJe2yqjr%2FHAGEjXagMpK%2Bg8y4J874EzBOB82C7Itr4AVrnZDYXYQ4NA1gotnHSxXEKJ%2BIyfjp%2FDq6Ywu50ihOpicojvyFcg0EFFR5wqxkX4SLtzY60lVy8az5Kj26nbC%2BcL7s7Wa%2Fb9WIAl9Nx54u2hYfmBGqzmYfyRfjk2IlmwgKowLlpa6fquwvtAjqXTPZKsGgNIsg0UzoGZkvxxRZJaj1sdYOunNKRswnc6Djyk94R8HypOU2nH2rBYiGlZ7PBsQwoFm4%2Fnvdsaz7Pjg6LJ3wc8lE3Gm6TCSuc94hoyU6ZR5TC2PU7GIWLzpLjf1uVfxrq6tWV%2FkF3YbVU%2Bb%2Fznr6FurlXR%2BIbrgwBIpz4hPnjC8ilCqdJMROZkUgF845zfhNJkDxh%2Fs0I0xXMctUOib7LtSFsg5tsstyDJ%2F%2By8mEoPygWbNbDPmrNSQ6DBOV4fmOITLhQ03B7Yj3Nwp%2Fq0%2B37OIa7yzz4vuFFDBC9zfXpEQ0%2By8ahsnnhw6U%2BKxpbbgpMMcwMIi%2F1skGOqUB8jl4EdIoZlGpQdOR3GCF9Sehnw7jWAU0Y1BqZhWjVkpBG6ow%2FlMadyWW%2BizAIULrPoseedAdD4ptcxInpm%2FGI7Dci2oaRELT149EaiYO1ESDQxWagJPWrDL6zojgJIQqo5QEp9AB2pTnuGMNDzq1iXoDg4lebqyW89Vh0QkmzjwxG0SxGzq4F9WNYCacspJznKiFx%2Fsd5U6GPZaxS8H%2BdIeIAzKR&X-Amz-Signature=d1b75dfb11e900359742e071bb383a0ef141111b539483100c27e638265b3a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

