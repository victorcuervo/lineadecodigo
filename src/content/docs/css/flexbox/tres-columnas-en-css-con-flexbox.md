---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZ5KAYE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf3N%2ByylW5ByrtfDV2vgrztzHYlb8DR8gB0cOi971XngIhAMhADv0Bbh4RCeOvIkj2NqUXsoF%2F3REcSPPX998oPMrOKv8DCHQQABoMNjM3NDIzMTgzODA1IgxQmx8tc4lHkmdYN40q3APLSBp2DRcvOLWufSKedmoNtGRgBLb4NExj1XrEe9cXMKMEQsdUAUXxCsV6dw%2Bss0OidnM9oiUQDspAbsQ84G5PkjHWVqu8wBfnDTd2h4HvLhcxX8z8VTNdalpeOXOVfVxJlHhbJV8Z3%2F02Lpt168JpYGJ%2F%2FeHFxc07T%2Bm%2FTbLWZoeXmCeI5TulOGzgnRx6PQshg2ZUoOt9fpTrascYFX5CnfbwgSdGGuy6F6DS9xR0xiFN4ur51kwBuPhHTyUVBj08hE0a%2B154fXPc34%2FZKqcX4DoWpdKBpELDp30%2FtjR946a9PxqVxxyjReQqPdlymZrGA7B7Z32dgRRWK2Ap8pUiJSJE7WZagjoG17bW9V6bdcVlo8MOPLw97oBNYGJl0QToE9I%2Fgp7%2FSVQNALhaFDA0upNFd7BhWWp%2FtMdNk27mlYhHzOmiezxAs5MctQQuSysWlRxOtETXE0TPcl6GCDlsAqzfUq%2Fz14FwgKo%2Fjcvko06OB9uh%2FS56YJ9zidEp5iSgRyTBkihN7hBMHTDKMkgTv0q9zK%2FiYOvh4u4Q2v5%2FWXfo045MgoR7ykhMpKW1EIaZGuSi%2FTKlu%2Bx7qLAmwThwKpg3x3AxBizskl7FZZbWLyOjLn39td5N7POB0zCHidDJBjqkAevw%2B0bRes8fLXX4GD9PnXQZNinJoYuAOeJU7W%2FiczJsXu6SMOMAiTeuF4LonsiMIPKHaZ8mMyXWcafuajx6WmjJysjGS6XrY4K35Jaer3cr0MiMoesx0tHHMMtssUgxD9LRLVylQO6U1Vq1T0v%2BLKf9ZGS2E1hQO%2FxTKxXSPVZV0wbUN0Pfr1i7cyoVphPef4UEb45HXpzjUJqr9XqfffbTsFUM&X-Amz-Signature=f1643c6d65e2aba05757aade0629ebf468b6e355a77315c60b4553be13fc5bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZ5KAYE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf3N%2ByylW5ByrtfDV2vgrztzHYlb8DR8gB0cOi971XngIhAMhADv0Bbh4RCeOvIkj2NqUXsoF%2F3REcSPPX998oPMrOKv8DCHQQABoMNjM3NDIzMTgzODA1IgxQmx8tc4lHkmdYN40q3APLSBp2DRcvOLWufSKedmoNtGRgBLb4NExj1XrEe9cXMKMEQsdUAUXxCsV6dw%2Bss0OidnM9oiUQDspAbsQ84G5PkjHWVqu8wBfnDTd2h4HvLhcxX8z8VTNdalpeOXOVfVxJlHhbJV8Z3%2F02Lpt168JpYGJ%2F%2FeHFxc07T%2Bm%2FTbLWZoeXmCeI5TulOGzgnRx6PQshg2ZUoOt9fpTrascYFX5CnfbwgSdGGuy6F6DS9xR0xiFN4ur51kwBuPhHTyUVBj08hE0a%2B154fXPc34%2FZKqcX4DoWpdKBpELDp30%2FtjR946a9PxqVxxyjReQqPdlymZrGA7B7Z32dgRRWK2Ap8pUiJSJE7WZagjoG17bW9V6bdcVlo8MOPLw97oBNYGJl0QToE9I%2Fgp7%2FSVQNALhaFDA0upNFd7BhWWp%2FtMdNk27mlYhHzOmiezxAs5MctQQuSysWlRxOtETXE0TPcl6GCDlsAqzfUq%2Fz14FwgKo%2Fjcvko06OB9uh%2FS56YJ9zidEp5iSgRyTBkihN7hBMHTDKMkgTv0q9zK%2FiYOvh4u4Q2v5%2FWXfo045MgoR7ykhMpKW1EIaZGuSi%2FTKlu%2Bx7qLAmwThwKpg3x3AxBizskl7FZZbWLyOjLn39td5N7POB0zCHidDJBjqkAevw%2B0bRes8fLXX4GD9PnXQZNinJoYuAOeJU7W%2FiczJsXu6SMOMAiTeuF4LonsiMIPKHaZ8mMyXWcafuajx6WmjJysjGS6XrY4K35Jaer3cr0MiMoesx0tHHMMtssUgxD9LRLVylQO6U1Vq1T0v%2BLKf9ZGS2E1hQO%2FxTKxXSPVZV0wbUN0Pfr1i7cyoVphPef4UEb45HXpzjUJqr9XqfffbTsFUM&X-Amz-Signature=d5ed1203cd0fab9959802a51b4715775ef6a82254fe2672435aedb2876be88fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

