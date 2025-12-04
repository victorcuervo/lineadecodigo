---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XUVIKR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7s3vZPFhEsSI69uac0DCViv5KJax8QGwV6ED8fYODaAIhAM3sO5eTGN9DwT30pDGwlKu0oCdaxba2B4wgsMabmCVtKv8DCEkQABoMNjM3NDIzMTgzODA1IgwWAtbL29fVBI9AnTAq3AMJVh4kYx6QOLvUsNqs5AV4VaQJtNdeDUgOl1r42pb8NUiB2%2BvKU0S7WO7R04SoB9oULeMm%2F%2FVoqMwbP6LOyz8xsRZMwdt9d1NGT6EhAlGcGlxf9Oxw0pZkrmYGxv%2FfDiRMmasGg8sXDjtLgUdxGB2cEQ9c9S6%2FX0WV2sWealJfe7IKEVfN7T1Qhnlzd7sK6gAYU5Gs7XwcYqWqUHBHtKDT254Spa9O620YCsqtcBOWMHXBo4200NKLXzwll3eEIwzaUyHbdlGymL9sHBxgmuOnh6TiZOgQyHV3qEvz8pEPmo%2Fy2eDPjUGLYQgYd0rIyJqNzTWZRqE36mSmeBW63ld6j%2F8PVS5DCK9V%2Bl5kmz3zLcGXEDgamCIgTY5alBEOS%2FDuUd%2FR2J3FCFR8hK46TJUp5orr0Ps%2Bri6tgVIjybpywpFNrqIGikjqshYL%2BN8zI%2F8EVVFKuKIaA7vyowlEWvear51RHxIZ3p9N9PtUjN4fgQTCRlr69FY0d%2FtAjlNeHAebN4Z9pSxOMOvnjlgDlhMA60ttc%2FcpRKFT31NIqkZ5BVOljyqM1xI%2FfybSTBzmcUJn%2FyvP1bfgMv1zbOqI8vpvdpiZH8dIes0IIr1RX%2BUhXt0rCs%2BonCnqyH%2BuvzCr3MbJBjqkAdijEX9Y%2Bi8iX48OUyRYhhUfRS4Qctnmx7jW4dDYOvhssJ9cAXqpAuuv%2FY29h63HN9Bh3HdQMkbeNil7l5KyUwf6F616c%2FI4ZilWqCrfc%2Fwtwv1gVmTQk5U1Y6bLeBCNVqW1nyC1YGXosZINt1m2kIH1m6w6i1oui0s0QyqhRDij2MAdZohsX%2BPGrAUua9OKcfna0j2ZXvDFmXKXOfMCE%2BnYPErw&X-Amz-Signature=cbe1614b576577d52a04ce081bf865ae5f83895654f7a779ba9248536fddbe94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647XUVIKR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7s3vZPFhEsSI69uac0DCViv5KJax8QGwV6ED8fYODaAIhAM3sO5eTGN9DwT30pDGwlKu0oCdaxba2B4wgsMabmCVtKv8DCEkQABoMNjM3NDIzMTgzODA1IgwWAtbL29fVBI9AnTAq3AMJVh4kYx6QOLvUsNqs5AV4VaQJtNdeDUgOl1r42pb8NUiB2%2BvKU0S7WO7R04SoB9oULeMm%2F%2FVoqMwbP6LOyz8xsRZMwdt9d1NGT6EhAlGcGlxf9Oxw0pZkrmYGxv%2FfDiRMmasGg8sXDjtLgUdxGB2cEQ9c9S6%2FX0WV2sWealJfe7IKEVfN7T1Qhnlzd7sK6gAYU5Gs7XwcYqWqUHBHtKDT254Spa9O620YCsqtcBOWMHXBo4200NKLXzwll3eEIwzaUyHbdlGymL9sHBxgmuOnh6TiZOgQyHV3qEvz8pEPmo%2Fy2eDPjUGLYQgYd0rIyJqNzTWZRqE36mSmeBW63ld6j%2F8PVS5DCK9V%2Bl5kmz3zLcGXEDgamCIgTY5alBEOS%2FDuUd%2FR2J3FCFR8hK46TJUp5orr0Ps%2Bri6tgVIjybpywpFNrqIGikjqshYL%2BN8zI%2F8EVVFKuKIaA7vyowlEWvear51RHxIZ3p9N9PtUjN4fgQTCRlr69FY0d%2FtAjlNeHAebN4Z9pSxOMOvnjlgDlhMA60ttc%2FcpRKFT31NIqkZ5BVOljyqM1xI%2FfybSTBzmcUJn%2FyvP1bfgMv1zbOqI8vpvdpiZH8dIes0IIr1RX%2BUhXt0rCs%2BonCnqyH%2BuvzCr3MbJBjqkAdijEX9Y%2Bi8iX48OUyRYhhUfRS4Qctnmx7jW4dDYOvhssJ9cAXqpAuuv%2FY29h63HN9Bh3HdQMkbeNil7l5KyUwf6F616c%2FI4ZilWqCrfc%2Fwtwv1gVmTQk5U1Y6bLeBCNVqW1nyC1YGXosZINt1m2kIH1m6w6i1oui0s0QyqhRDij2MAdZohsX%2BPGrAUua9OKcfna0j2ZXvDFmXKXOfMCE%2BnYPErw&X-Amz-Signature=a3e9598ebb1775fa584c2fe8b6e732d8144ba0bca12aab1b19280366c47eba17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

