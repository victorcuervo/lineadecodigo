---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=69de7c26737120ecb82ff4926052a16db812b8c7a5a686757a05a2d458f46c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=651e89c6e1bdeca55ba5a37953ad1c3a01fd364dc8d5db2ddb0340a7cb6b72b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

