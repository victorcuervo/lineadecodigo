---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVAOLFBR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwZlDYRkpCgig30cuaTEq7PqKGJsHiectMu5JoX%2BIdaAiEAt%2BpUFBKGtP%2FZGIqUfXYgsEW9XVlEDI2BDAlGbYhoNTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoVPcncqvOJpcd0ECrcAxKcf1Q93caZL%2BI8YWa1jV77kWXiOy2PYCiDNOm0q6vxqMIl6YTY5kQ6sq%2BVG5%2F9uL1e22yq1Ti8xaVSYrtlVJ04tDOvvCzcpOVFxxwoAyXW5w0IZz2RE9HDpWNnyfiISMrS5quYW%2BmW6hiP4hl0XpO72kTYIwK1P6pa%2B%2FrtA7xoUe%2FrxhocdCNom4%2Bfs8Urkc1MRFWJcQ9aLy%2BNxkx6VkdTTfudtrUjTWF3o8rW2FX2KIDJoxWyA8KBglA466HvTYDTvMdZ%2FdzV1%2BQnOM%2FDJN6aNVbpQ4eVyr36TxkW2yprqYa9LglmkShKTUANIhnFoVShQsXURPfjK2pbS3L9ULXJvU5bmdRuDeWry13CaeDWEAADDWYIXLjc2C62uf0VoyYxE%2BRbVik3VLd9EqEp0K2fzE6C9no%2BrYcTxhSxr13OeMDeguXH%2F%2BncChd7LqtiBFG6LDspaQ0REoYO33dm4hOLWBNyMuhWJz%2BxBfCzQC4exHWoBHjH4TXzW7kW4uIEse5vspNdfafiexe2wiQ1XrzKMe75A95CHC3sI055cXhrH%2FnslrBBPpAnYSi9K75VCPRgzWVgtHmS0D0q9%2FaS2Bh%2Ba%2F6t0%2B6Hba4PU68bb5WVqrm24Md8k3mWpDj8MLrt2ckGOqUBasm7Oa9YafMNccsL0h4t1%2Fm%2BC6SNm6o0vYLVoNk7SzpF3sJBiXy36GtucKJETeDXMpFpc%2BrkYtUAhkA3qOx85S1ZBfc%2F4DSLdK3Mq%2F8DcEUY8DiJ5OewZXnurNW1p9djI9b6PSTVIAn06DDK2U3DZJqFtI3Wr7OH5Id8EIMMWg3IA3lXm05w0AmbrfKnglB%2BzT1e4LdOzyKR7PQ3ppKScfu7K1Ke&X-Amz-Signature=41617a909a316933779e6196a9858a43d65b0db664359abbb7bb9b1273b8e6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVAOLFBR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwZlDYRkpCgig30cuaTEq7PqKGJsHiectMu5JoX%2BIdaAiEAt%2BpUFBKGtP%2FZGIqUfXYgsEW9XVlEDI2BDAlGbYhoNTYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoVPcncqvOJpcd0ECrcAxKcf1Q93caZL%2BI8YWa1jV77kWXiOy2PYCiDNOm0q6vxqMIl6YTY5kQ6sq%2BVG5%2F9uL1e22yq1Ti8xaVSYrtlVJ04tDOvvCzcpOVFxxwoAyXW5w0IZz2RE9HDpWNnyfiISMrS5quYW%2BmW6hiP4hl0XpO72kTYIwK1P6pa%2B%2FrtA7xoUe%2FrxhocdCNom4%2Bfs8Urkc1MRFWJcQ9aLy%2BNxkx6VkdTTfudtrUjTWF3o8rW2FX2KIDJoxWyA8KBglA466HvTYDTvMdZ%2FdzV1%2BQnOM%2FDJN6aNVbpQ4eVyr36TxkW2yprqYa9LglmkShKTUANIhnFoVShQsXURPfjK2pbS3L9ULXJvU5bmdRuDeWry13CaeDWEAADDWYIXLjc2C62uf0VoyYxE%2BRbVik3VLd9EqEp0K2fzE6C9no%2BrYcTxhSxr13OeMDeguXH%2F%2BncChd7LqtiBFG6LDspaQ0REoYO33dm4hOLWBNyMuhWJz%2BxBfCzQC4exHWoBHjH4TXzW7kW4uIEse5vspNdfafiexe2wiQ1XrzKMe75A95CHC3sI055cXhrH%2FnslrBBPpAnYSi9K75VCPRgzWVgtHmS0D0q9%2FaS2Bh%2Ba%2F6t0%2B6Hba4PU68bb5WVqrm24Md8k3mWpDj8MLrt2ckGOqUBasm7Oa9YafMNccsL0h4t1%2Fm%2BC6SNm6o0vYLVoNk7SzpF3sJBiXy36GtucKJETeDXMpFpc%2BrkYtUAhkA3qOx85S1ZBfc%2F4DSLdK3Mq%2F8DcEUY8DiJ5OewZXnurNW1p9djI9b6PSTVIAn06DDK2U3DZJqFtI3Wr7OH5Id8EIMMWg3IA3lXm05w0AmbrfKnglB%2BzT1e4LdOzyKR7PQ3ppKScfu7K1Ke&X-Amz-Signature=e347a69c1e8fdd44ad1d8e83374f53c4d1f06aa5ef5ebf4d148dc3ace260830c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

