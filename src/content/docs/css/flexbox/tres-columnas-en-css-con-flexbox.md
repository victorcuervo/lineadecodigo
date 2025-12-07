---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOVNJ23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B7sPWtXiHSSzdEHchEZY%2FGbaoLpKm3hDvbVQi3GYhXAiEAsLOXUpznuX5NCQ9dxGSVuOVNSBWOwWEwU3BUksKo0TQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvy8BMkxjVUxjEbeCrcAw%2BZy2j%2FnkQ6FM%2B2vjgwqcFA5yO%2BMbWFO71NdiE%2FYeqx5kdtWo6xT52yRTt6Wb4nU%2FddIPv0MWxkxeKWxhdgBUl8%2FwZlrGQlmTQjKrvkIhHD9tBGitKxL46fG992p5ZUf2zvIs4r3mAeZYl9gmTteeFxmchpKBZ3ZwMcI2iVUVIeHliLKpvsbKLH5yQAwaIFUEcpnbLz3fKRKk14sGRAeVqKSWJPsHFbl7a%2BMN289OaN7T7l2n%2FugVcn9tDE3nI5Ja1iCMR0tCTwdW2%2FEf13qS3bC7yIV6vSEzMTOe3%2BHhQN%2BYBmIDjaPtWgQ71mLJgwmX1MD5ROCJNDdNHlWIGX2iJ691YiWLoeJinyPnRVFhDA3XOPdxavRB15OoPnvK%2Fz4wnNqOw181YfdzJI6eKdfP68MfbEgK5a98jQupFy1UfLmHl8UXD6Eblk62AVvjQln7qaKvfxnZiSZRBhMmNz4m1SFEUZ12ZY7zQhs5HO9Do37k80Norg%2BBRDyt9Qb7tE%2BJffsLMz18JX7hu1NJLPRJs9ja4szezsXuTfhG2EnWYhpVs9CO2FzIs9ieg%2BBdQTpUMcPbqSmldSVQHOk2PMy%2BDv1fqXaRLyrcimknFXpkT0nN8wy0kz4B3Wk%2BVQMI211skGOqUBz9kzK10bkvhngKvabO6cTQUoaC%2BIX2%2B1uKZ9ztD3qTz07cHq%2FbA%2BcFvYabUehgyKypRkfohGVujJOYq903O57CEOAU8bpJKhmuKkOgL002ahUxfv6ela1bIdFvIdPAIKtUDaMlPOiVL5or565CfL9j5tnPm2DzT4ln6BvLfn6kleCvedhvns3G6TpVcQt7Zt4%2BXYtzhn6kmAcP4de7VDZY0CMnsQ&X-Amz-Signature=36db6e135924489098db77a32482e121cd933ca3094a34cf43e911cec6e3a10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHOVNJ23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2B7sPWtXiHSSzdEHchEZY%2FGbaoLpKm3hDvbVQi3GYhXAiEAsLOXUpznuX5NCQ9dxGSVuOVNSBWOwWEwU3BUksKo0TQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvy8BMkxjVUxjEbeCrcAw%2BZy2j%2FnkQ6FM%2B2vjgwqcFA5yO%2BMbWFO71NdiE%2FYeqx5kdtWo6xT52yRTt6Wb4nU%2FddIPv0MWxkxeKWxhdgBUl8%2FwZlrGQlmTQjKrvkIhHD9tBGitKxL46fG992p5ZUf2zvIs4r3mAeZYl9gmTteeFxmchpKBZ3ZwMcI2iVUVIeHliLKpvsbKLH5yQAwaIFUEcpnbLz3fKRKk14sGRAeVqKSWJPsHFbl7a%2BMN289OaN7T7l2n%2FugVcn9tDE3nI5Ja1iCMR0tCTwdW2%2FEf13qS3bC7yIV6vSEzMTOe3%2BHhQN%2BYBmIDjaPtWgQ71mLJgwmX1MD5ROCJNDdNHlWIGX2iJ691YiWLoeJinyPnRVFhDA3XOPdxavRB15OoPnvK%2Fz4wnNqOw181YfdzJI6eKdfP68MfbEgK5a98jQupFy1UfLmHl8UXD6Eblk62AVvjQln7qaKvfxnZiSZRBhMmNz4m1SFEUZ12ZY7zQhs5HO9Do37k80Norg%2BBRDyt9Qb7tE%2BJffsLMz18JX7hu1NJLPRJs9ja4szezsXuTfhG2EnWYhpVs9CO2FzIs9ieg%2BBdQTpUMcPbqSmldSVQHOk2PMy%2BDv1fqXaRLyrcimknFXpkT0nN8wy0kz4B3Wk%2BVQMI211skGOqUBz9kzK10bkvhngKvabO6cTQUoaC%2BIX2%2B1uKZ9ztD3qTz07cHq%2FbA%2BcFvYabUehgyKypRkfohGVujJOYq903O57CEOAU8bpJKhmuKkOgL002ahUxfv6ela1bIdFvIdPAIKtUDaMlPOiVL5or565CfL9j5tnPm2DzT4ln6BvLfn6kleCvedhvns3G6TpVcQt7Zt4%2BXYtzhn6kmAcP4de7VDZY0CMnsQ&X-Amz-Signature=3ac5565ce8e9af64ebd373c9cd8628e455ba427bc984968fcf1634ef6c1ac34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

