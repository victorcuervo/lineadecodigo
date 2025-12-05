---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XPV5YV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC7USj6GJZmkGcUaT8%2FL0lzEIP9nyKCWZYQJWX8VVHYwIhAPdi%2BLlkn%2B5P9p8TA0VqDOufWDJOehdZZwRBxHr%2Ff27kKv8DCGYQABoMNjM3NDIzMTgzODA1IgxPIj5pxzYzPVgIqi8q3AOrp2K7myJQ1L2JVyovBETSc64gXyWPAdutsoTxRfo2RYiPmapjIGz5I4xycavQQSeS18Zhv2PjYhMpQYPk651HnDhB7%2F8Al80%2BMRk5M4OOsWPK0kC5XDkV150VeeDA9z06jNJaKviVB104HeW4yYElNRL%2BSUIxw7yUze0Zn8P%2Bz9SDPsP1MOWOu8ONGTvGOwaH5j4PaL2Lz4N8B81yUDfaCUi39oai8BqV677ES1UxVKB7h72Ctd2gwoKsYpOmsxBTshL7ujb6p2H%2BM22EUNcwHseKL%2FveHI%2FbsaWUQ0Q2hb1EC3BS84FUhJlLLa8uQZGToPRzptwb6rABpSVjHW1aCkw0VLKNhYdrCyLpOZCgvxOuUQWxDzRX72ViIB3dHgF6Ne7NOXnAla8fgjqFksYmdz9nKUGS1s2NIGfeTOaEmS9EGhSVIF5hu3p03P7wvPFGoW7KrSkVe9KM7Zgu3QX1PDWF9X8k41zlAVfb%2FEDzuaJyGKkFHHTAmW1dZ0%2Bzwyzy9mnN9jaSBBgIVRMdtcmy8xhVUQw%2BheBRwz2FwkQcEFX7g3LOIVeUdSs45epuYfxcebgXQ%2B2CNlWiCYUUfdJxxURMRhASKSuktvzvZ5BzBP6hYI5OXkOuC%2FiwBTDxjs3JBjqkATnYo29OZoL4eBkrcHdtGwbpnGs8%2FZSLXy0wCQjohG5oQUJIlJ9zu%2Bv6rICcp74ZCvRcreJt%2FCoqbRyqs6oHTHG5swoSEa8xhaMrs0pkMnCd6gEt0ytSbne%2FOPkgjavqLzO2CyEgC3gcGrcmB1vN3fSeOIe5oxUzlrK6mGkdFdwylKQbPggvJgS1Ekowo3E8vHK5a4Dx%2FWp1lSJXW2TdQts%2FvDsk&X-Amz-Signature=2917b8c35b62d602145265c837a2fa5afde5bec6c7b35d226c715b5c02394978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XPV5YV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC7USj6GJZmkGcUaT8%2FL0lzEIP9nyKCWZYQJWX8VVHYwIhAPdi%2BLlkn%2B5P9p8TA0VqDOufWDJOehdZZwRBxHr%2Ff27kKv8DCGYQABoMNjM3NDIzMTgzODA1IgxPIj5pxzYzPVgIqi8q3AOrp2K7myJQ1L2JVyovBETSc64gXyWPAdutsoTxRfo2RYiPmapjIGz5I4xycavQQSeS18Zhv2PjYhMpQYPk651HnDhB7%2F8Al80%2BMRk5M4OOsWPK0kC5XDkV150VeeDA9z06jNJaKviVB104HeW4yYElNRL%2BSUIxw7yUze0Zn8P%2Bz9SDPsP1MOWOu8ONGTvGOwaH5j4PaL2Lz4N8B81yUDfaCUi39oai8BqV677ES1UxVKB7h72Ctd2gwoKsYpOmsxBTshL7ujb6p2H%2BM22EUNcwHseKL%2FveHI%2FbsaWUQ0Q2hb1EC3BS84FUhJlLLa8uQZGToPRzptwb6rABpSVjHW1aCkw0VLKNhYdrCyLpOZCgvxOuUQWxDzRX72ViIB3dHgF6Ne7NOXnAla8fgjqFksYmdz9nKUGS1s2NIGfeTOaEmS9EGhSVIF5hu3p03P7wvPFGoW7KrSkVe9KM7Zgu3QX1PDWF9X8k41zlAVfb%2FEDzuaJyGKkFHHTAmW1dZ0%2Bzwyzy9mnN9jaSBBgIVRMdtcmy8xhVUQw%2BheBRwz2FwkQcEFX7g3LOIVeUdSs45epuYfxcebgXQ%2B2CNlWiCYUUfdJxxURMRhASKSuktvzvZ5BzBP6hYI5OXkOuC%2FiwBTDxjs3JBjqkATnYo29OZoL4eBkrcHdtGwbpnGs8%2FZSLXy0wCQjohG5oQUJIlJ9zu%2Bv6rICcp74ZCvRcreJt%2FCoqbRyqs6oHTHG5swoSEa8xhaMrs0pkMnCd6gEt0ytSbne%2FOPkgjavqLzO2CyEgC3gcGrcmB1vN3fSeOIe5oxUzlrK6mGkdFdwylKQbPggvJgS1Ekowo3E8vHK5a4Dx%2FWp1lSJXW2TdQts%2FvDsk&X-Amz-Signature=b535e6d04f4cd846d360c0d8a6742d5cca76bc8af7c6fa699f88c1dbb3274154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

