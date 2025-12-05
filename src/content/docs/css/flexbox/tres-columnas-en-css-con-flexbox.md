---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKZTEPG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBHpniKLoX9zBlLpJTsdSd1YwFhlRcWNcH6QN1CkaytAiBJ%2FliFjXECCJP%2FSkLHnbrBV%2FseZh89pHbVmtjG0gAllSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMFFhuEBmCxm1Dpv%2FPKtwDSm2voTlBhssdEdcnbwFYi7PVmJLkZSoL%2BR5FoVK5Z8cnHkIbQCXmYcXddWtYN4DPFFwxqlF2T%2Bl8U8kIFjUCf2o4w5YOQHFYqgd2zzBAxiPaHE35moGG3BwLIv%2FqpE%2F5pmQJLC8DIuJdZhg%2BIP6Ceuu%2B9HEGIyCj8NXiOqmrBci2KiSYkMzjxHTx3dmmFgm%2Blvx%2BY09mrhGKgG7vkolkWDB%2FzaEPwu9%2FW1DM4OC%2BmcdvT6hOZNAx2MveOaGUF40siAXgJNsE4gsNyWy6VBlNx0%2F5a8qA5Ddz2tv5QlSupl0CQWOhWntmuYcGsGp7lB8D97LTt%2FlQBqUKAu3JLk08gunA%2F4e5lnKZbaahLn7tNcJGAJcDhB%2BSakSCKW%2FYpw8S8limhprQ0QReNMtIrERhPvUWzwek89Xg0LA%2B5DhyptvtZbijOaLezwrBAK57VxtMJFVNV87wu6SQEESXxFJabVzyLkDpDmCkEEp0YudldndAMa9ILjw7HgkM%2FqS6%2B9ctW%2F9fJrPPGUcQiosJfefV2NRPkX79TNLLAYR58ibrdDCxLZxxfzvFRlbysw8miPPdSntgRGk6eomsooZ9957dALgRPYmLO5vyL6gwMxjIMFy11Oe%2BgJRwV7bL6Rsw%2FsXNyQY6pgGNhpcEHrcHUtgOErfUrvfQqXuzAVkVvED2RzsD2nbzC2PPm6G8j65w3D2xw%2FkB%2Bf7offhMPmB0L0N8KKI60zCWQ7lpNSgyMEogneS03RC4qNS4Fr4Kym1sQPavwaWNY11LsbFBzFRxTQfQslJeLmgrj5NOMUqMV1v4xyHn6eBlrPvEfEXzM2oWc%2Bn8F3OfNNEnqHppsGdRQQwbVmrmuId4C5kbdJwl&X-Amz-Signature=0fc969af57902e763cbfa64f04e74ef3aa0d5ad90bb9c23df3deb7f4d4400d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKZTEPG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBHpniKLoX9zBlLpJTsdSd1YwFhlRcWNcH6QN1CkaytAiBJ%2FliFjXECCJP%2FSkLHnbrBV%2FseZh89pHbVmtjG0gAllSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMFFhuEBmCxm1Dpv%2FPKtwDSm2voTlBhssdEdcnbwFYi7PVmJLkZSoL%2BR5FoVK5Z8cnHkIbQCXmYcXddWtYN4DPFFwxqlF2T%2Bl8U8kIFjUCf2o4w5YOQHFYqgd2zzBAxiPaHE35moGG3BwLIv%2FqpE%2F5pmQJLC8DIuJdZhg%2BIP6Ceuu%2B9HEGIyCj8NXiOqmrBci2KiSYkMzjxHTx3dmmFgm%2Blvx%2BY09mrhGKgG7vkolkWDB%2FzaEPwu9%2FW1DM4OC%2BmcdvT6hOZNAx2MveOaGUF40siAXgJNsE4gsNyWy6VBlNx0%2F5a8qA5Ddz2tv5QlSupl0CQWOhWntmuYcGsGp7lB8D97LTt%2FlQBqUKAu3JLk08gunA%2F4e5lnKZbaahLn7tNcJGAJcDhB%2BSakSCKW%2FYpw8S8limhprQ0QReNMtIrERhPvUWzwek89Xg0LA%2B5DhyptvtZbijOaLezwrBAK57VxtMJFVNV87wu6SQEESXxFJabVzyLkDpDmCkEEp0YudldndAMa9ILjw7HgkM%2FqS6%2B9ctW%2F9fJrPPGUcQiosJfefV2NRPkX79TNLLAYR58ibrdDCxLZxxfzvFRlbysw8miPPdSntgRGk6eomsooZ9957dALgRPYmLO5vyL6gwMxjIMFy11Oe%2BgJRwV7bL6Rsw%2FsXNyQY6pgGNhpcEHrcHUtgOErfUrvfQqXuzAVkVvED2RzsD2nbzC2PPm6G8j65w3D2xw%2FkB%2Bf7offhMPmB0L0N8KKI60zCWQ7lpNSgyMEogneS03RC4qNS4Fr4Kym1sQPavwaWNY11LsbFBzFRxTQfQslJeLmgrj5NOMUqMV1v4xyHn6eBlrPvEfEXzM2oWc%2Bn8F3OfNNEnqHppsGdRQQwbVmrmuId4C5kbdJwl&X-Amz-Signature=7dfbe8d7fe48818a31d71e0a7176b9e8e59d0a78bff3df93f158b353435563fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

