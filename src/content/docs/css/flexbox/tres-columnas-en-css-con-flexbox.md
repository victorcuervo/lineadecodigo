---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZINLLJO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCutw3pRUIEtqslVHHc5xNH%2B1eFjhBrbhP7RMq1AlC3fwIgH4ZoKrbFERdcp8Am8q9g3Ew4NlubsMihLrS8PXqnDOgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGWy6PA%2BXvx0EQ%2B18SrcA9Q5oyq8G5iSC%2BfBxEBEZDF%2B1LnTsxqhSvE0EjbHGaoZS%2FQ8G%2B3ORkbhG8ZiFmAFVAfZXoqQLL8jJFxbAZQTA%2Bb6OoaHsn%2BFOLQ7KPyUgDyudNAmOAGki2DWXkr%2BNliJffvKLfG%2Ffm%2FiPZogB66rT4zpGWmX%2Fd6Uc37UzctRA0doVkRxylajbIMVs9v7eLSGz9HgWBZHcT9UryfI58%2FZEzmeAA%2FW%2BYXrB4dQPBh1JJbb5PiwYF07dhDGRAZMpJjUdXT1vpKlnOYvpUsZjNbXc7zqaPJxTgNpRKz0vAjJF1kCNO5ry0BhCFgZ2rhZQPDefuPMPDP5ugZuRm%2FAEAppejPxrNgakJ6t47WZz6RkHkMLoy4OHr8CIDpwUEKXUkf%2By3euFa8fYNNJ7ggSjy38cDEv1FmLRqHElJM68Q8%2Fo%2BvEidRh02NTttL0h2vGHm9L1HWjz35y5DY6V3pQyCsu%2Fe3hmn4%2FBXXNsV3E8eaAVYqQQatnO9ZkdcrpdAiNIHh%2Fm9mL2YN5gOrPsamB7j4YkXNFxeFhwssKMVbhpsL3ozViYStqOts6D3mxoUXwvTpI9XfziZa1%2B3Zq15JxihipmX%2BqjZM06RUx0r5EzElgZ4iLydrfjMqNZl01GvEXMNnoxMkGOqUBkfG0mw0vNL8tixqbgteKOa2kqMduE88b0hS7e8yExZfTLJeYZjnSbkL5Tj%2FzMhygEcnZiYdjJ4A%2FhOZYfHNC1jbmuwreuWuRgpGxQn2TrOFvI1JfTf2xderIAqy9cdot6fBvHTQ56CmEQ6D%2B%2BVj4gOrlINHCR8Na0UJEMXIDUdSglH2ihwH9QUvs1sJ2Bs8NDLvD72PPAE%2F8%2FU%2FePrDjSsgSBqUL&X-Amz-Signature=1e96012edd054d13b1751efd0d68baeb4908058fa13d5127e8c0013206af8468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZINLLJO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCutw3pRUIEtqslVHHc5xNH%2B1eFjhBrbhP7RMq1AlC3fwIgH4ZoKrbFERdcp8Am8q9g3Ew4NlubsMihLrS8PXqnDOgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGWy6PA%2BXvx0EQ%2B18SrcA9Q5oyq8G5iSC%2BfBxEBEZDF%2B1LnTsxqhSvE0EjbHGaoZS%2FQ8G%2B3ORkbhG8ZiFmAFVAfZXoqQLL8jJFxbAZQTA%2Bb6OoaHsn%2BFOLQ7KPyUgDyudNAmOAGki2DWXkr%2BNliJffvKLfG%2Ffm%2FiPZogB66rT4zpGWmX%2Fd6Uc37UzctRA0doVkRxylajbIMVs9v7eLSGz9HgWBZHcT9UryfI58%2FZEzmeAA%2FW%2BYXrB4dQPBh1JJbb5PiwYF07dhDGRAZMpJjUdXT1vpKlnOYvpUsZjNbXc7zqaPJxTgNpRKz0vAjJF1kCNO5ry0BhCFgZ2rhZQPDefuPMPDP5ugZuRm%2FAEAppejPxrNgakJ6t47WZz6RkHkMLoy4OHr8CIDpwUEKXUkf%2By3euFa8fYNNJ7ggSjy38cDEv1FmLRqHElJM68Q8%2Fo%2BvEidRh02NTttL0h2vGHm9L1HWjz35y5DY6V3pQyCsu%2Fe3hmn4%2FBXXNsV3E8eaAVYqQQatnO9ZkdcrpdAiNIHh%2Fm9mL2YN5gOrPsamB7j4YkXNFxeFhwssKMVbhpsL3ozViYStqOts6D3mxoUXwvTpI9XfziZa1%2B3Zq15JxihipmX%2BqjZM06RUx0r5EzElgZ4iLydrfjMqNZl01GvEXMNnoxMkGOqUBkfG0mw0vNL8tixqbgteKOa2kqMduE88b0hS7e8yExZfTLJeYZjnSbkL5Tj%2FzMhygEcnZiYdjJ4A%2FhOZYfHNC1jbmuwreuWuRgpGxQn2TrOFvI1JfTf2xderIAqy9cdot6fBvHTQ56CmEQ6D%2B%2BVj4gOrlINHCR8Na0UJEMXIDUdSglH2ihwH9QUvs1sJ2Bs8NDLvD72PPAE%2F8%2FU%2FePrDjSsgSBqUL&X-Amz-Signature=16aca0c0b3a304abc98b561f38ec65f2561955b061018a5515a08dd9e5b08f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

