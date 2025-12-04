---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67ZPD75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGukIFRoUZ433P697s8Shayi0HTkNLauDPeIueb%2FuT%2BVAiEAwz7DBy1fBKebaPsWbPbkHCvlxWV5XnsXSxEgGkbrzKMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDhyuwLqV1KwFd8qFircA%2F2je7%2FY1%2Four%2FaNUF68qtBxU%2FdD8qnbQtZm0PsVFONEp6R0PEurQj%2BErzUYxlEd%2BK4ti6brKfObT5tIdbI1PsFGRINVwm%2FXIvJ7y3Gri8xthhLlagFh7iacPahga9Z4WXYWSv2iA6Foioc0oRdusRCvOhwDFFvygVsNIG9ONyKMpSDtDQ77ozjcT9i24E%2FxL9QGdtVL%2BrJoUvdzGkBpJx7MFqubnTbYp89oY6e56FL25qAxq8LIhsFA2AK8%2FyHOPNfQ2BPejiJV1yyEknRq%2FwU0IlzbyMW2O6FkjXBr9%2BNgpPoVP%2BLWFKZrgPLAXiDJ8bDIVwimiNrDgHCKgeBr2MmWHMbNCaCEu96BV%2FWx9Y4S4DXOoqQnN7joItkHQki6j1xWIf9W29eplBFKks07kDK2xIuhP3QJx9mNHtXNz4OjoPOmlkk59V3hKUgsRJKwkeAbAGgxHPnN6hzLmO0Hoa61M%2FA3gjxn4%2BpeCD1p1FGxH6KNxzf%2B7F2SgR%2BC0bsLJ%2FsrwL8tGf3aKNMQOPXY8N6iOKrutGmfmcBGdu1uSGjt42Nwq2bKjbGtIcEKeXJXWsiuNvEA4qJKF2esNECierKEY0PJetOffu5IjdFC9RBTab68CgC31Ds8VEeXMPSLyMkGOqUB0cIO3cnVjyHL1%2BgNmnt6GCLrhXvBfezZ637FM%2F886muDiHemw%2Btu9m9T08d1UrnJB49Dvec2gnrWwpec5ly9WiiSBqAmzITRJqSasHR1SNM9tlNgcFDvOJOhh4r9DQGCaObwr%2Br9QrEpfIY0rSFqBOrHFyiyU8OAxBxbBeh0cZoNfP8lTtnFsyqXMOLIU3lr795tx6CPrz4KAgaf58qqB0PrcBwE&X-Amz-Signature=d7e84d2ef6b8a889838db608e684a7dbdca588a200ed7a1b5c0cc37a93484dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X67ZPD75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGukIFRoUZ433P697s8Shayi0HTkNLauDPeIueb%2FuT%2BVAiEAwz7DBy1fBKebaPsWbPbkHCvlxWV5XnsXSxEgGkbrzKMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDhyuwLqV1KwFd8qFircA%2F2je7%2FY1%2Four%2FaNUF68qtBxU%2FdD8qnbQtZm0PsVFONEp6R0PEurQj%2BErzUYxlEd%2BK4ti6brKfObT5tIdbI1PsFGRINVwm%2FXIvJ7y3Gri8xthhLlagFh7iacPahga9Z4WXYWSv2iA6Foioc0oRdusRCvOhwDFFvygVsNIG9ONyKMpSDtDQ77ozjcT9i24E%2FxL9QGdtVL%2BrJoUvdzGkBpJx7MFqubnTbYp89oY6e56FL25qAxq8LIhsFA2AK8%2FyHOPNfQ2BPejiJV1yyEknRq%2FwU0IlzbyMW2O6FkjXBr9%2BNgpPoVP%2BLWFKZrgPLAXiDJ8bDIVwimiNrDgHCKgeBr2MmWHMbNCaCEu96BV%2FWx9Y4S4DXOoqQnN7joItkHQki6j1xWIf9W29eplBFKks07kDK2xIuhP3QJx9mNHtXNz4OjoPOmlkk59V3hKUgsRJKwkeAbAGgxHPnN6hzLmO0Hoa61M%2FA3gjxn4%2BpeCD1p1FGxH6KNxzf%2B7F2SgR%2BC0bsLJ%2FsrwL8tGf3aKNMQOPXY8N6iOKrutGmfmcBGdu1uSGjt42Nwq2bKjbGtIcEKeXJXWsiuNvEA4qJKF2esNECierKEY0PJetOffu5IjdFC9RBTab68CgC31Ds8VEeXMPSLyMkGOqUB0cIO3cnVjyHL1%2BgNmnt6GCLrhXvBfezZ637FM%2F886muDiHemw%2Btu9m9T08d1UrnJB49Dvec2gnrWwpec5ly9WiiSBqAmzITRJqSasHR1SNM9tlNgcFDvOJOhh4r9DQGCaObwr%2Br9QrEpfIY0rSFqBOrHFyiyU8OAxBxbBeh0cZoNfP8lTtnFsyqXMOLIU3lr795tx6CPrz4KAgaf58qqB0PrcBwE&X-Amz-Signature=21e4d5086d0425535d53459ba099d176386eede1adb3fe73fcea859f75f9c491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

