---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS652PMP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC8jsq52bCfv10PWdgbhfTcadXhh1bWLm0xY%2B8uIZX%2FWwIhAMTjyQzmNdwH7DlmhkDVy4no3sDtyErkiKIxGrPz7jVHKv8DCEUQABoMNjM3NDIzMTgzODA1IgyAu%2FpKOy6zrxCSyuoq3AMg07IztjwrUt%2BND99sbehUhMXVY8jSpB3u9VbcHlNIoBW%2FnM0LR5oQTykfKKrZJHSeW5%2BQdqq4PX6ZXJ11x0J%2FFHD58KNxMWRCmtRtg5EafDXXtBOlX3Nsh0WlbPL0%2FM0NYUqNNtDe3L6nGJwilsKqAPLRk1WnsxWpzj3TOKn025JgYBIskibhcigSHv2ZyncNfmTfWpAYFlmYNa8Fh2g3mceGEwqMNiaMmNTCn1FGQoDgXWGZ2Gi0ZxD8NyLtMPuqN4%2BI8%2Bfqz6mn9zftSb5treX7QkTLxIDUssmIf%2BzGJPZnsAa8ohFojyKUol0%2BJ4HEc1mCXChz3M2WhXivrV2ha8dTBNMdi%2FZCnURjSk3%2FlpMzqiKLZTJgpNoplShl8B1xMwbzhYmJK0cvY62UVMKOAX787OeD3FtgzZnu0ApvAtvvu6uPLh7pVOor2MwpWkKf2HS%2BmFhrTLE4dyB5PYjpnj09xkn0IgmGHMimi%2BaPQLu1HGk8Nct2OQVOGcM0RWNZGUxqueuh9%2BzBClHODrUjVctZ7STptc7TUtCisNXFQJgNkgxcFjPNpdN7NhTWo83DODi9OZlbnH%2FYO6ab0UjoBpdPOHDJFbxPKHODS9QIGk0dyL1dM3usA4gvXDDV58XJBjqkAZpK2VCPxfBJUkAlNO7hLB%2BwMmxkFDvfET%2Bp0crBTDl9nGY6sqC9ueDuyx4kPcgdN9j8B2WntcmjlXRqJopF%2F1sEgHlb5XlkfCXonq83WpbaF6bHHWuG6Il50nF3rWEHD3CN4A4v6B70kNAwPj8CAyQwU7Bjfif8SoMZ5z1FDzJ0Npx9PluIPTQ9v94vmhyhTrKTCRcHXuaboAuT4yZgU74lD1pk&X-Amz-Signature=a0b714b56ef3e511a87e20711a7de2ff9a47df122db7fceafd19abff97bae03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS652PMP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC8jsq52bCfv10PWdgbhfTcadXhh1bWLm0xY%2B8uIZX%2FWwIhAMTjyQzmNdwH7DlmhkDVy4no3sDtyErkiKIxGrPz7jVHKv8DCEUQABoMNjM3NDIzMTgzODA1IgyAu%2FpKOy6zrxCSyuoq3AMg07IztjwrUt%2BND99sbehUhMXVY8jSpB3u9VbcHlNIoBW%2FnM0LR5oQTykfKKrZJHSeW5%2BQdqq4PX6ZXJ11x0J%2FFHD58KNxMWRCmtRtg5EafDXXtBOlX3Nsh0WlbPL0%2FM0NYUqNNtDe3L6nGJwilsKqAPLRk1WnsxWpzj3TOKn025JgYBIskibhcigSHv2ZyncNfmTfWpAYFlmYNa8Fh2g3mceGEwqMNiaMmNTCn1FGQoDgXWGZ2Gi0ZxD8NyLtMPuqN4%2BI8%2Bfqz6mn9zftSb5treX7QkTLxIDUssmIf%2BzGJPZnsAa8ohFojyKUol0%2BJ4HEc1mCXChz3M2WhXivrV2ha8dTBNMdi%2FZCnURjSk3%2FlpMzqiKLZTJgpNoplShl8B1xMwbzhYmJK0cvY62UVMKOAX787OeD3FtgzZnu0ApvAtvvu6uPLh7pVOor2MwpWkKf2HS%2BmFhrTLE4dyB5PYjpnj09xkn0IgmGHMimi%2BaPQLu1HGk8Nct2OQVOGcM0RWNZGUxqueuh9%2BzBClHODrUjVctZ7STptc7TUtCisNXFQJgNkgxcFjPNpdN7NhTWo83DODi9OZlbnH%2FYO6ab0UjoBpdPOHDJFbxPKHODS9QIGk0dyL1dM3usA4gvXDDV58XJBjqkAZpK2VCPxfBJUkAlNO7hLB%2BwMmxkFDvfET%2Bp0crBTDl9nGY6sqC9ueDuyx4kPcgdN9j8B2WntcmjlXRqJopF%2F1sEgHlb5XlkfCXonq83WpbaF6bHHWuG6Il50nF3rWEHD3CN4A4v6B70kNAwPj8CAyQwU7Bjfif8SoMZ5z1FDzJ0Npx9PluIPTQ9v94vmhyhTrKTCRcHXuaboAuT4yZgU74lD1pk&X-Amz-Signature=e4d3274ed3253da21f52015302ee556a38068698d06b4435dd1f21529ac40675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

