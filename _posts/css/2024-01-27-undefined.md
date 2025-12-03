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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOTOJMT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCWzV1%2B22wqnUtI5XCgjjqwnLuoXcr%2FbI4kKueuRCPAkQIhAOy4ccNsVHmjayTfa%2FACsjOAxyy9VIX9T1d6SBJY3uF%2BKv8DCCIQABoMNjM3NDIzMTgzODA1IgwVYMxqsg2ltcDnXbcq3ANODIUvO%2BjdjFl2dX92V6PcV59njMAtwnihNqghwsjI872vwU6%2BxqHki6o2OyrtF%2By8XpZVnDhhHTm3YSNJVN0o3Zskf0TvR%2By3NPfJeXYgXaV1XN5Sy6e8rdxfJj9%2BF4EwUsasZiPrQAPAdxWUJ5TuOqsyv5%2FLOEv%2FJPmBV9gq6%2BrjczrqJPaaCkNXLuJItwN%2F85kXVKEgFw3ITu48f%2BvRAebKG6Fu3kaRQgo3lD%2BYpRwWyolMD1LyDUtzZfiiU98tc7o%2FxXCUu2QlCQEGbSlVxmEVSJ53FT%2Blh04hql0S3GoioiLS9bI7ij%2BF1k2D4wBBDK%2F5%2F6nI3ql7jvLpoY2FRk8p7v%2BYI%2BIvenZwNxicVX8T09k4dbcm0K9vjGGywguUetQ%2Fr2pRP81PaygTu1oSCszK9t8R3kWYUJuiOIpf9GNGsaJwKLg3yS3uOaMMPBfHQ%2BzbusZrOqAsXjGpeQGecIlxeOSVNAmJHF82GnL1YFOYcWHST1gQv3J3ssdjlpZgNCYysc4sug2Z60lH2PFv5jomtCwrE1fIHQoZ0uTiVzWOn8efYJCn4wLaY4t6ATB1IEPztq4CQDxR9kvkcj00VTLNAeJaXWlsAbzsHBSUvbPIQUESpti8pcCiOjDxlL7JBjqkAfdi4zYgEwRVcXNuuyKx37hOKQULj5%2BT9RVt%2BKUyfDiNcLVrZDj%2FWX5keWQn%2FyywPmMZTJiBLAZZC3mT83FV45xyh9YPY6ymgywQWyNrg6Mqrl7sgtv0xYq%2Fpqj696O7B76dkZ2d61KAuKQb9Y%2FsZkw3cSCf8Z29jZXWnrQixIt%2FR9iTcnToB0fs1JCCSy24rfPX%2BTTBeldCWFRZuEG%2Fs6AYuJKE&X-Amz-Signature=857e05ec737d2115b7078e0622807320d930cdecef4e19e611f09f4f3dcbffc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOTOJMT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCWzV1%2B22wqnUtI5XCgjjqwnLuoXcr%2FbI4kKueuRCPAkQIhAOy4ccNsVHmjayTfa%2FACsjOAxyy9VIX9T1d6SBJY3uF%2BKv8DCCIQABoMNjM3NDIzMTgzODA1IgwVYMxqsg2ltcDnXbcq3ANODIUvO%2BjdjFl2dX92V6PcV59njMAtwnihNqghwsjI872vwU6%2BxqHki6o2OyrtF%2By8XpZVnDhhHTm3YSNJVN0o3Zskf0TvR%2By3NPfJeXYgXaV1XN5Sy6e8rdxfJj9%2BF4EwUsasZiPrQAPAdxWUJ5TuOqsyv5%2FLOEv%2FJPmBV9gq6%2BrjczrqJPaaCkNXLuJItwN%2F85kXVKEgFw3ITu48f%2BvRAebKG6Fu3kaRQgo3lD%2BYpRwWyolMD1LyDUtzZfiiU98tc7o%2FxXCUu2QlCQEGbSlVxmEVSJ53FT%2Blh04hql0S3GoioiLS9bI7ij%2BF1k2D4wBBDK%2F5%2F6nI3ql7jvLpoY2FRk8p7v%2BYI%2BIvenZwNxicVX8T09k4dbcm0K9vjGGywguUetQ%2Fr2pRP81PaygTu1oSCszK9t8R3kWYUJuiOIpf9GNGsaJwKLg3yS3uOaMMPBfHQ%2BzbusZrOqAsXjGpeQGecIlxeOSVNAmJHF82GnL1YFOYcWHST1gQv3J3ssdjlpZgNCYysc4sug2Z60lH2PFv5jomtCwrE1fIHQoZ0uTiVzWOn8efYJCn4wLaY4t6ATB1IEPztq4CQDxR9kvkcj00VTLNAeJaXWlsAbzsHBSUvbPIQUESpti8pcCiOjDxlL7JBjqkAfdi4zYgEwRVcXNuuyKx37hOKQULj5%2BT9RVt%2BKUyfDiNcLVrZDj%2FWX5keWQn%2FyywPmMZTJiBLAZZC3mT83FV45xyh9YPY6ymgywQWyNrg6Mqrl7sgtv0xYq%2Fpqj696O7B76dkZ2d61KAuKQb9Y%2FsZkw3cSCf8Z29jZXWnrQixIt%2FR9iTcnToB0fs1JCCSy24rfPX%2BTTBeldCWFRZuEG%2Fs6AYuJKE&X-Amz-Signature=34bf4427b0257b3076100a5e4b74152eaae0418d7a036a07effd0af3bc1762f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

