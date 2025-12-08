---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTR4UB4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzp55QCcaSRb%2BblUROvNMOWIeKBWSlATS9yHWBoHKJsAiEAi6E81mvdyLSEm5Ov8Naa8lyHZNWErAenOjFmsxKQtbkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyMoBf8UZ9OOQ9p0ircAw%2BcTXoQnEuvLLOVCV%2Fq9PwuJitDYTQgKyLT6XIUDDt20ym7tEceooyNqUAygCadXCu0B60DxZDavov6V2OSt2wBJPiFIlcgJA5BH9LreKs0lBGt8NhyVePXpFIdP1%2BjsskOX1k2WpJpbfjcjkECd%2FppVDpf1QAoOjPHdq5mNFKO0oLrggbuyD9Eolbg1e%2Fx%2F%2B32CC1XuFGeQhGDo6bMfeSNtXnWp3dGM7Jvc617viz0PoNcV%2BsX48MS%2B7sn9uqIz5Q2VjaBIxWBbYjsL5Zbyw94jhl%2Bj9mMeLufmflSOi%2BTvU5fLbsC5YdIPmiznVLpfJ3wLtQbluecvQzXPuzNcI2%2B1feBrIc6APstjfEntTGCwh%2FtjxuZIwmg4cK0I5xTediCR%2BoFOViurqneH68nHL%2BKDxK25QGIdBPEaAYl5rBkfxYHfTCAyk4ce0HhOPYUmtjKVviUXxwsHynaCNUuLSo%2FIFonCjpjOGvQW9LJK5hLczGP6%2FH6aJC6jcLaZrj%2B6rXykNbu4%2BhwkKxaPpxyAE2KSmulNfEV5d7LOvcSX4R%2B33xuNSf%2BADyMdCc3KWc9JVr0w4hfYk5ODSlpmOuUa5dxUwBnJhvgy0YmGIpotNoTOPkAVeBhbLGO4dh7MLeh2MkGOqUBEoXdMtWILjP13Vm5mBl5A7h15J7sCrC%2FJXRgvPb6KFuwfM4TVjhMLL6Wk0MatzF5gJxr42G1lnLZXxcDdxrwW%2FzfqrP6gjmuHPsdV86J%2F%2Bqleuaf2lfdwfGCVVqJrz1oisYcvH%2BL9ARu%2F7Oza%2FSqIYd8yJ6RVrUJXtITaRGKogjFo%2BWMhsjg4XBSNarPTjKwJvmhMbZvgD7NSg%2BSp2%2B9CEkWs7hx&X-Amz-Signature=075fb37fd27b05022fa00748202e61a90f442fcbad38f311e66a7ad172cb3d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTR4UB4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzp55QCcaSRb%2BblUROvNMOWIeKBWSlATS9yHWBoHKJsAiEAi6E81mvdyLSEm5Ov8Naa8lyHZNWErAenOjFmsxKQtbkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyMoBf8UZ9OOQ9p0ircAw%2BcTXoQnEuvLLOVCV%2Fq9PwuJitDYTQgKyLT6XIUDDt20ym7tEceooyNqUAygCadXCu0B60DxZDavov6V2OSt2wBJPiFIlcgJA5BH9LreKs0lBGt8NhyVePXpFIdP1%2BjsskOX1k2WpJpbfjcjkECd%2FppVDpf1QAoOjPHdq5mNFKO0oLrggbuyD9Eolbg1e%2Fx%2F%2B32CC1XuFGeQhGDo6bMfeSNtXnWp3dGM7Jvc617viz0PoNcV%2BsX48MS%2B7sn9uqIz5Q2VjaBIxWBbYjsL5Zbyw94jhl%2Bj9mMeLufmflSOi%2BTvU5fLbsC5YdIPmiznVLpfJ3wLtQbluecvQzXPuzNcI2%2B1feBrIc6APstjfEntTGCwh%2FtjxuZIwmg4cK0I5xTediCR%2BoFOViurqneH68nHL%2BKDxK25QGIdBPEaAYl5rBkfxYHfTCAyk4ce0HhOPYUmtjKVviUXxwsHynaCNUuLSo%2FIFonCjpjOGvQW9LJK5hLczGP6%2FH6aJC6jcLaZrj%2B6rXykNbu4%2BhwkKxaPpxyAE2KSmulNfEV5d7LOvcSX4R%2B33xuNSf%2BADyMdCc3KWc9JVr0w4hfYk5ODSlpmOuUa5dxUwBnJhvgy0YmGIpotNoTOPkAVeBhbLGO4dh7MLeh2MkGOqUBEoXdMtWILjP13Vm5mBl5A7h15J7sCrC%2FJXRgvPb6KFuwfM4TVjhMLL6Wk0MatzF5gJxr42G1lnLZXxcDdxrwW%2FzfqrP6gjmuHPsdV86J%2F%2Bqleuaf2lfdwfGCVVqJrz1oisYcvH%2BL9ARu%2F7Oza%2FSqIYd8yJ6RVrUJXtITaRGKogjFo%2BWMhsjg4XBSNarPTjKwJvmhMbZvgD7NSg%2BSp2%2B9CEkWs7hx&X-Amz-Signature=dc84b06727b82112ab7f507e41eb531b60c7d20cfbf812fd8e0b25901ffd6506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

