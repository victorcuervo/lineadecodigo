---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXWW455%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEmjVnFurtk1%2FVhkpigeIpShWFIQcYqm1K8dfLS7yoiWAiAm6niov%2FHqibYlSfsmeDOUJjekkSCnMRqTFpMjAEF%2BJyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMnC1QjwDx2Q5cwf2wKtwDPBv%2FfXQW%2FLxgNaYJWgY%2FvI%2Bj%2BjcrDmPWL3V%2BxkLwhYr1sn3mGdRHS8UJu8d74bNG8hyY5UMt6OsWQenOPysOnQeUhQrxTR167fgVfJWBDd7ueggVD3Xl3AzKNiA0n1%2FuCfFI7tG8NaJIB0%2FFd%2FxmgXmpErAqi8M3Rhy3DzqAn2sfDIfxPhHzb0cRZDCEB9JixXUQ5dPaTvB4cysLpS3SFmVRA9ymZFnsHbQrauqZ6IX1%2Bh%2BYT7ufLz2z3QtKKjOjN7aPZ6ZT5nJGl02%2F6YMSqvK9akUFxT6L10NShfSNYkU9S5hcJRO7BOFtJ7YNnxdxbrGz6zG9LAi8BBPRcz8lTfokMM8hLmeXZCvIAcH14mdFiWzzsmKMBJC1B5BZim19AJyuODElsSN1RrRarUccQrIDNYLHx%2B%2FuDqZ7Z9JbHCht%2F2wX1Y02kxPkChOv8hIGyd6GUTwCBH2iU7sN7lJjBKDphXdMJivkNQ7Mc62l5dA7LnHvYqQb%2FE9AmIO8ZUGOaWUeCaoaMd87MjDg4E9WzdHgV8yCIcQHQOrAvtY9HmO4zYfe7k8%2BEJn13Y3JRYR4ymufSVOfe%2B3ZnazCD6b0VWOMtLC%2FUf3hny0w80ZsJm6LTuY2FSI7LoP6elswqpu%2FyQY6pgEHmpc%2F4lZhp3SyN3lKJoVbWRz6DU69Vj9%2FLJLNvXvL%2FOnqcxefA0IXBVDfpzK2dTM%2FX%2BhqybemHHOiXZXFJ3oDEl2kzFdEGz69oZD%2FQqTsBw%2BqbtxDs3WpDj400DS%2B4zWAFWS2Gu44vpReR23ojHiIpNqc0QdB3vHS9%2B571lPiMDfWp0ElbOutexDpXX6nw9KqnCbuFppdhzsfvPZR57tqb8hE6EEr&X-Amz-Signature=c4da3c5016d466182c0005f2f3cad97bcc2781d1914c999cffdc8c4c1daaefed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXWW455%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEmjVnFurtk1%2FVhkpigeIpShWFIQcYqm1K8dfLS7yoiWAiAm6niov%2FHqibYlSfsmeDOUJjekkSCnMRqTFpMjAEF%2BJyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMnC1QjwDx2Q5cwf2wKtwDPBv%2FfXQW%2FLxgNaYJWgY%2FvI%2Bj%2BjcrDmPWL3V%2BxkLwhYr1sn3mGdRHS8UJu8d74bNG8hyY5UMt6OsWQenOPysOnQeUhQrxTR167fgVfJWBDd7ueggVD3Xl3AzKNiA0n1%2FuCfFI7tG8NaJIB0%2FFd%2FxmgXmpErAqi8M3Rhy3DzqAn2sfDIfxPhHzb0cRZDCEB9JixXUQ5dPaTvB4cysLpS3SFmVRA9ymZFnsHbQrauqZ6IX1%2Bh%2BYT7ufLz2z3QtKKjOjN7aPZ6ZT5nJGl02%2F6YMSqvK9akUFxT6L10NShfSNYkU9S5hcJRO7BOFtJ7YNnxdxbrGz6zG9LAi8BBPRcz8lTfokMM8hLmeXZCvIAcH14mdFiWzzsmKMBJC1B5BZim19AJyuODElsSN1RrRarUccQrIDNYLHx%2B%2FuDqZ7Z9JbHCht%2F2wX1Y02kxPkChOv8hIGyd6GUTwCBH2iU7sN7lJjBKDphXdMJivkNQ7Mc62l5dA7LnHvYqQb%2FE9AmIO8ZUGOaWUeCaoaMd87MjDg4E9WzdHgV8yCIcQHQOrAvtY9HmO4zYfe7k8%2BEJn13Y3JRYR4ymufSVOfe%2B3ZnazCD6b0VWOMtLC%2FUf3hny0w80ZsJm6LTuY2FSI7LoP6elswqpu%2FyQY6pgEHmpc%2F4lZhp3SyN3lKJoVbWRz6DU69Vj9%2FLJLNvXvL%2FOnqcxefA0IXBVDfpzK2dTM%2FX%2BhqybemHHOiXZXFJ3oDEl2kzFdEGz69oZD%2FQqTsBw%2BqbtxDs3WpDj400DS%2B4zWAFWS2Gu44vpReR23ojHiIpNqc0QdB3vHS9%2B571lPiMDfWp0ElbOutexDpXX6nw9KqnCbuFppdhzsfvPZR57tqb8hE6EEr&X-Amz-Signature=226ed78f166c770e077049c1b5ca46c388768780c63a07a427260cd07dd47555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

