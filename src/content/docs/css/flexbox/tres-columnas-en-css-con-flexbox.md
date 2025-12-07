---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCEDYOI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe6PvZ1o%2FV230aqxqWD0lb%2B%2B610YQXnJQjsPyP%2FIG0hAIhAPVs21Cw%2B0T2BQDotBmk%2BOFGzYmpiyhKmNm8H65oyD4bKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0cfL%2FPZlJ58PGlKgq3AOGSwwbpEY7bm2u8ldRW4hQ0pRECJEu3LwpUV6vJRndW80r3r0sAz9cjgBbsRdhhFsbf2rokEMYqbdeJ4X8Xgp8BpYhDUub9ppch1Z49mGidiWmsbeZ2IW2ziwNRqqjE32HPelNnqSNCfSkTMYnbL6GfUNQOYF3TV9OO7iRIxjYQt%2FEd0roErcfUde%2B5ZYQWJGrZbNZA4ORIQxMH4IeKiRC2wkIGN0JcKo4EL4zzE%2BeAzVtgdGkaEX%2BXpAa6PwpIhBhxXOL0MqE41eIogx2k9MyNbY2kExLF8hjsB%2F1IWMV9kLcOsvf27fr6G26yhNUIaZouHKSyjUDjDQ23dh9lCfe%2BvkbxmXeQl0RyhQrXn6Vam2nun05exNh%2Ft9uqTjIjRI3Qf1zdoB7YnYroinJPB1LxowSHofhISkpAQxiY4P%2FSFNjxL69Y%2FWF5zaRvIpwF%2FRZF7jeOdJkBsjMRt3dqZGcy3%2FudJYYm5leHxyfM4ohc0LWXmxZpjyB7KmJJMRPClJS9jEe2juZh6fH1Zt7o4NUug06Gq24BdinCsMqO0lmkFjHesrQ3LUn0q7igIjHrkvzs56t1acMoM3S1YxB%2B%2B6nwKmpNesS0TrIxWBcr4CmOgp5mp8BTLOnoYF5yzDBmtXJBjqkARRqaFU4d%2F0BP8pc5O0fd4%2BC%2BdvgS0XwNg1jVYkQP7p0dGG3SHgpA8%2B2RMstF4rFsQQ6FzuiAQXbogw9o4P7TbsrpvRvsa7Ka3L%2FgUKAY0vYfXL%2B%2FUrTQ40%2BK7FHMjpfu2aAGfJ9BCIpUMshjUjkx3gq0OLk91mx3nYVYuKZmwcGq2BzZ2pGJEQ5lgp%2FW6Z3pclL5VrOE%2BMHYWrzfX0AaXOKItFi&X-Amz-Signature=5d5db41008e9857715744fd943f46c5c2f16045fff4bcfa8423ed753746c0bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCEDYOI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe6PvZ1o%2FV230aqxqWD0lb%2B%2B610YQXnJQjsPyP%2FIG0hAIhAPVs21Cw%2B0T2BQDotBmk%2BOFGzYmpiyhKmNm8H65oyD4bKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0cfL%2FPZlJ58PGlKgq3AOGSwwbpEY7bm2u8ldRW4hQ0pRECJEu3LwpUV6vJRndW80r3r0sAz9cjgBbsRdhhFsbf2rokEMYqbdeJ4X8Xgp8BpYhDUub9ppch1Z49mGidiWmsbeZ2IW2ziwNRqqjE32HPelNnqSNCfSkTMYnbL6GfUNQOYF3TV9OO7iRIxjYQt%2FEd0roErcfUde%2B5ZYQWJGrZbNZA4ORIQxMH4IeKiRC2wkIGN0JcKo4EL4zzE%2BeAzVtgdGkaEX%2BXpAa6PwpIhBhxXOL0MqE41eIogx2k9MyNbY2kExLF8hjsB%2F1IWMV9kLcOsvf27fr6G26yhNUIaZouHKSyjUDjDQ23dh9lCfe%2BvkbxmXeQl0RyhQrXn6Vam2nun05exNh%2Ft9uqTjIjRI3Qf1zdoB7YnYroinJPB1LxowSHofhISkpAQxiY4P%2FSFNjxL69Y%2FWF5zaRvIpwF%2FRZF7jeOdJkBsjMRt3dqZGcy3%2FudJYYm5leHxyfM4ohc0LWXmxZpjyB7KmJJMRPClJS9jEe2juZh6fH1Zt7o4NUug06Gq24BdinCsMqO0lmkFjHesrQ3LUn0q7igIjHrkvzs56t1acMoM3S1YxB%2B%2B6nwKmpNesS0TrIxWBcr4CmOgp5mp8BTLOnoYF5yzDBmtXJBjqkARRqaFU4d%2F0BP8pc5O0fd4%2BC%2BdvgS0XwNg1jVYkQP7p0dGG3SHgpA8%2B2RMstF4rFsQQ6FzuiAQXbogw9o4P7TbsrpvRvsa7Ka3L%2FgUKAY0vYfXL%2B%2FUrTQ40%2BK7FHMjpfu2aAGfJ9BCIpUMshjUjkx3gq0OLk91mx3nYVYuKZmwcGq2BzZ2pGJEQ5lgp%2FW6Z3pclL5VrOE%2BMHYWrzfX0AaXOKItFi&X-Amz-Signature=b5ec29a8fc73b86695f0bbfb20e02cddfb151c42eb8912c16c0fa8341ac93e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

