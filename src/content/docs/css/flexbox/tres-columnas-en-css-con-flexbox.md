---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KW5HUPN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdOfQl9Qpr0TJFLH0BrLTF88hfg0zI3Kl5btCTrE3ccwIhAP5bQe4hNS3kxrmfKUIkvNT3Kfq01zb9d9Wkr4dGLBJ%2FKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Qkq9qvemFSH11Tsq3AOY2aOvPbE0GWvf8roqxDAt6PBqxVcsC3uncRFEH5BEVkBu%2FzQTD1SlUtHFhQTRcKd7H24oI3itTo9hTOLj%2FE4CJsK6ws69Wt4bb98aYg%2B9b6kZGIS03Pdz8xKZILIXNwjMgBqmMudBgwmeqBL5KmvX1PsefeiUcrrMDClLGNtIMzOyppLPnWIodzPvdHbqaIkTS5QUdwlOCkS0WznVm6utTL1fMuvs03GH9KWLNToK9hEIDCE%2Fh%2Fh2L4y1R4HZE3vd%2FdjwNVyrA2M1xAL3KTAInJ31hSUsxYGd5NpH2T019%2BOyxZDHGchiTMD2RsVZN7KXVK9PSJwhNgbDt9hHuidnKt2s1sQV1rt7BGoQpUWVmCjyxYtG1QXNgAXNMTpRiAhNxtuW%2BpW2%2BS6CrsDjoRmCzreFODrkjjLsbq0XrC0KFrtqqJX%2F7%2F2Xdls5TYyRaQ6Lh4CCAAvb57JVLHkjjSVJlbEaTgCR%2FX6xBgQUribqJ71yEpfyeeTMMaf2ju5XIuR4dxoMaDt2Th0s%2BJshhqfTiURvlGLbypZkD4Iqf%2F4pZfLSsLrskkZfvn60YNihwm2sVYCpMtxgqAWYMBGkzok6WF9SgOc61TcaZS6GnQbKUxotndgltqMdLHhy%2BjDKmtXJBjqkATqR6Wwh%2BVeG5WbpUOniknr0RgfKQDET%2FtKf4OtK7L1aL%2BeRAoKRjF%2FJ2lPp3z0jIBnP11F6IMWcAgBCTQ3K8DsDIAY0dp8QFAqDH9wzdUgLwgTYmQbX73pdcMqE6BTDCcoC0U0V9KALBwybLvqHESzP%2By4zM%2FkM4ezma6JpxwiEU83IoTPt%2BoEHAytTUQxx59d7phUZ2zlxp4suGfgnf2Epgnrs&X-Amz-Signature=6f81acadf60c467beb04a3422477950939a3d421c9c5646ff2608cc11efec46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KW5HUPN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdOfQl9Qpr0TJFLH0BrLTF88hfg0zI3Kl5btCTrE3ccwIhAP5bQe4hNS3kxrmfKUIkvNT3Kfq01zb9d9Wkr4dGLBJ%2FKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3Qkq9qvemFSH11Tsq3AOY2aOvPbE0GWvf8roqxDAt6PBqxVcsC3uncRFEH5BEVkBu%2FzQTD1SlUtHFhQTRcKd7H24oI3itTo9hTOLj%2FE4CJsK6ws69Wt4bb98aYg%2B9b6kZGIS03Pdz8xKZILIXNwjMgBqmMudBgwmeqBL5KmvX1PsefeiUcrrMDClLGNtIMzOyppLPnWIodzPvdHbqaIkTS5QUdwlOCkS0WznVm6utTL1fMuvs03GH9KWLNToK9hEIDCE%2Fh%2Fh2L4y1R4HZE3vd%2FdjwNVyrA2M1xAL3KTAInJ31hSUsxYGd5NpH2T019%2BOyxZDHGchiTMD2RsVZN7KXVK9PSJwhNgbDt9hHuidnKt2s1sQV1rt7BGoQpUWVmCjyxYtG1QXNgAXNMTpRiAhNxtuW%2BpW2%2BS6CrsDjoRmCzreFODrkjjLsbq0XrC0KFrtqqJX%2F7%2F2Xdls5TYyRaQ6Lh4CCAAvb57JVLHkjjSVJlbEaTgCR%2FX6xBgQUribqJ71yEpfyeeTMMaf2ju5XIuR4dxoMaDt2Th0s%2BJshhqfTiURvlGLbypZkD4Iqf%2F4pZfLSsLrskkZfvn60YNihwm2sVYCpMtxgqAWYMBGkzok6WF9SgOc61TcaZS6GnQbKUxotndgltqMdLHhy%2BjDKmtXJBjqkATqR6Wwh%2BVeG5WbpUOniknr0RgfKQDET%2FtKf4OtK7L1aL%2BeRAoKRjF%2FJ2lPp3z0jIBnP11F6IMWcAgBCTQ3K8DsDIAY0dp8QFAqDH9wzdUgLwgTYmQbX73pdcMqE6BTDCcoC0U0V9KALBwybLvqHESzP%2By4zM%2FkM4ezma6JpxwiEU83IoTPt%2BoEHAytTUQxx59d7phUZ2zlxp4suGfgnf2Epgnrs&X-Amz-Signature=9682b2c6ab78d66de967da5b00799f25aa39bdb83cdd22eec00584e541deb53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

