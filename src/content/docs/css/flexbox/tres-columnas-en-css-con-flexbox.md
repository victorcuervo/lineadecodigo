---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666672CNCT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxs59ADC%2Bt5v%2FImA8EyDchLOrk2upwI9Mbos9Ag%2BpuZAiEA5qAxrPUMr2WCArOMsZW37%2BVJhCK%2BPGtVxG8w1cws2dQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7QgwDfjUW%2FG7ge8ircA5iWpucShqXEIjBH9gfwIKsHEXhvwoeIDBlDskkXHWpnD%2FsB6WqmrOghQAye%2B1UfT28qXmeQ8SJULM%2FLu6FFREiF1uOuHMzNCZa6ytg6CSOeE%2BcwlsN055kSSy6F%2B85xxiWf3g5xxHQYLL1k6iQ1o6QSaEd2YL6U6IO5milfU6sGFNXQa42UqEHAmul2wL8qPCSxMt7GSYPT61XzBLcOn%2BgpfmcRcM%2BfdhoBuu304ioz%2F2svcd3%2Ff5OqeKIBpHQvoJmD5n41Kn72WIRwcUFS6EcO81uhJA94eh%2Brlds6X6lNmBVf9JD%2FwIqfFtjpKyYD4sN8IyezWoVtHW%2FVdesLyZ9SvHmfwpMWOfNaC%2FAIH0XSpkIWlZd0zBDKb0k4Pl4vcc5aNsUBO%2FaYUjpxeRRzMZzyGQL7qtXZtvxJgc85xMaXtwG5Jbjg6b4ZAkuobQVGfnx2w%2BZjbgB2oDLijH43GQxPv5hUS9r0Xxmqpotnj9GwnF4XctHbPwdly1RmiCgt3aPQDds8X%2FwM3DsKQc8cP%2B%2F71NPa9b0%2BNYc91HUCsihPqD%2F51d9wnjJJ8kvRYDkUkhzOy22i%2BhdUIMpOeii0ZmwpEAuAaL8Plqt6lDRFybpUZDGPIykxqJYsknwCMLD%2B0skGOqUBgpb8OFjmHCka1LumJewVh%2FOOC4yunBzYT1iqoTgW%2FOdxzJGCeP2pTCb9dhmXUVnFkuo8t0LCWlHywo3Hzh38D7ZmenV7I%2B4q50COYJk6lqw1L2v4Z%2FH8gGtvpbmLiuvc5bbePHqM4mJ8drYSDgC66JFt8bDI8aCfNehgewH9G0I89Y2HMmuOZ7AlTAKlpqfTpWebLXrsGnV0BF0oA5VJIXGkNgPt&X-Amz-Signature=a42565826aa0883b8028a7967b0e7028c75ff9a08e5bfd87026de53eb99f03dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666672CNCT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxs59ADC%2Bt5v%2FImA8EyDchLOrk2upwI9Mbos9Ag%2BpuZAiEA5qAxrPUMr2WCArOMsZW37%2BVJhCK%2BPGtVxG8w1cws2dQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7QgwDfjUW%2FG7ge8ircA5iWpucShqXEIjBH9gfwIKsHEXhvwoeIDBlDskkXHWpnD%2FsB6WqmrOghQAye%2B1UfT28qXmeQ8SJULM%2FLu6FFREiF1uOuHMzNCZa6ytg6CSOeE%2BcwlsN055kSSy6F%2B85xxiWf3g5xxHQYLL1k6iQ1o6QSaEd2YL6U6IO5milfU6sGFNXQa42UqEHAmul2wL8qPCSxMt7GSYPT61XzBLcOn%2BgpfmcRcM%2BfdhoBuu304ioz%2F2svcd3%2Ff5OqeKIBpHQvoJmD5n41Kn72WIRwcUFS6EcO81uhJA94eh%2Brlds6X6lNmBVf9JD%2FwIqfFtjpKyYD4sN8IyezWoVtHW%2FVdesLyZ9SvHmfwpMWOfNaC%2FAIH0XSpkIWlZd0zBDKb0k4Pl4vcc5aNsUBO%2FaYUjpxeRRzMZzyGQL7qtXZtvxJgc85xMaXtwG5Jbjg6b4ZAkuobQVGfnx2w%2BZjbgB2oDLijH43GQxPv5hUS9r0Xxmqpotnj9GwnF4XctHbPwdly1RmiCgt3aPQDds8X%2FwM3DsKQc8cP%2B%2F71NPa9b0%2BNYc91HUCsihPqD%2F51d9wnjJJ8kvRYDkUkhzOy22i%2BhdUIMpOeii0ZmwpEAuAaL8Plqt6lDRFybpUZDGPIykxqJYsknwCMLD%2B0skGOqUBgpb8OFjmHCka1LumJewVh%2FOOC4yunBzYT1iqoTgW%2FOdxzJGCeP2pTCb9dhmXUVnFkuo8t0LCWlHywo3Hzh38D7ZmenV7I%2B4q50COYJk6lqw1L2v4Z%2FH8gGtvpbmLiuvc5bbePHqM4mJ8drYSDgC66JFt8bDI8aCfNehgewH9G0I89Y2HMmuOZ7AlTAKlpqfTpWebLXrsGnV0BF0oA5VJIXGkNgPt&X-Amz-Signature=6fb92aa41f6f50633b00928121674cf4dcf1138d0eecb12267951f9c1955ae4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

