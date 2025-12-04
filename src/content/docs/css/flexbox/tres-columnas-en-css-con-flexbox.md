---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6G5F7H6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCWQxV96cMtF2A6OGm7sna8qcLcBmODWlIyR2YwsO4eTwIhANq4Rmk012OrV5maJn%2FVSFtiHAGGoWkR8DxDMoY3VHXmKv8DCEAQABoMNjM3NDIzMTgzODA1Igy7bViX%2BrepwmRg45cq3ANk6rljW17obY33tOEL3k6AqBn5G9dB8zHDTl%2FJ5dhpV%2FlDs3v1KRYC62UA%2FlKbSwCiS7ES%2BSNoHUxy1LNIfid11RtuL%2Bi1Nd%2FqRdJkn0fddzodDntSVzZyQktRjwPLtC58ePYKIIQ7KLpBjoxOg7D%2BibxKISXcFnKBW4%2FL7AKLDYuoJwrodpo1nLXK%2B9GSj3AYGmHgCYsQbFyPMXn1Cl5q%2Bev6Sm72aNSqkT7bOkwuxfgtWogZZ9lfxLaBXINyx%2BKgUkLvTOh0am2unRFmxRdK2%2FhdsIFzSyP443eqVuN6ZY1wASMI0fj4%2ByN2L5QsqLiq7f1%2Fj3QW2l7vKCNrSO8FangSE4b5361NbVbsSDjEZG46FA0EW9ajH6GC%2FosheFdn36vWzTaOoUiU4zmHoMBHulWca5xVy9GXyFA%2BYgKZRcAiCYG2hy1PqCApgTu5ryP0i1w59nF36Sm5krL%2F6mg4%2F495NpAfsqrC9X6vz6FzMUStXTbwkipJPrTUtjhpc%2F6t2f6OlJ0vsGgkyiz%2F0G14OoWXdE4QDfC0EEKnwWqQe3qIfX9nlGTrb2yhg4ddC%2FhfDY01UvdrpHyQf%2BO%2FIYzmii2Fl5oXkhVrHnEJd76MoLJrQpePSu%2Fd%2FKySIDDA6MTJBjqkAVwl%2FSIP9oCmbh8J4b%2B1X5t0a5Xafqqc%2FsflXzaritmZtyv8bbUWuoyY7sWDnyB%2F4kqYJLOHdPnLKhfOo%2FMp3CLg39sesVly1JG6aokTEPtNRUv8RXHr6wzxLcDeXjdevGdtMQgkeN%2BdScd%2FTV0sriMFiUBovi360T0U5GSOyRRIVeLafQB5HxVpWNd%2BRKpEuP7UBV8B%2BW96Hb9iw48Q6x76jpXe&X-Amz-Signature=5ecf52e4a81e1feb34aa83b3fe2368c07722cc300d2405c67857f216d28ff0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6G5F7H6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCWQxV96cMtF2A6OGm7sna8qcLcBmODWlIyR2YwsO4eTwIhANq4Rmk012OrV5maJn%2FVSFtiHAGGoWkR8DxDMoY3VHXmKv8DCEAQABoMNjM3NDIzMTgzODA1Igy7bViX%2BrepwmRg45cq3ANk6rljW17obY33tOEL3k6AqBn5G9dB8zHDTl%2FJ5dhpV%2FlDs3v1KRYC62UA%2FlKbSwCiS7ES%2BSNoHUxy1LNIfid11RtuL%2Bi1Nd%2FqRdJkn0fddzodDntSVzZyQktRjwPLtC58ePYKIIQ7KLpBjoxOg7D%2BibxKISXcFnKBW4%2FL7AKLDYuoJwrodpo1nLXK%2B9GSj3AYGmHgCYsQbFyPMXn1Cl5q%2Bev6Sm72aNSqkT7bOkwuxfgtWogZZ9lfxLaBXINyx%2BKgUkLvTOh0am2unRFmxRdK2%2FhdsIFzSyP443eqVuN6ZY1wASMI0fj4%2ByN2L5QsqLiq7f1%2Fj3QW2l7vKCNrSO8FangSE4b5361NbVbsSDjEZG46FA0EW9ajH6GC%2FosheFdn36vWzTaOoUiU4zmHoMBHulWca5xVy9GXyFA%2BYgKZRcAiCYG2hy1PqCApgTu5ryP0i1w59nF36Sm5krL%2F6mg4%2F495NpAfsqrC9X6vz6FzMUStXTbwkipJPrTUtjhpc%2F6t2f6OlJ0vsGgkyiz%2F0G14OoWXdE4QDfC0EEKnwWqQe3qIfX9nlGTrb2yhg4ddC%2FhfDY01UvdrpHyQf%2BO%2FIYzmii2Fl5oXkhVrHnEJd76MoLJrQpePSu%2Fd%2FKySIDDA6MTJBjqkAVwl%2FSIP9oCmbh8J4b%2B1X5t0a5Xafqqc%2FsflXzaritmZtyv8bbUWuoyY7sWDnyB%2F4kqYJLOHdPnLKhfOo%2FMp3CLg39sesVly1JG6aokTEPtNRUv8RXHr6wzxLcDeXjdevGdtMQgkeN%2BdScd%2FTV0sriMFiUBovi360T0U5GSOyRRIVeLafQB5HxVpWNd%2BRKpEuP7UBV8B%2BW96Hb9iw48Q6x76jpXe&X-Amz-Signature=3ef7607fa0659bc5e84ed1eab51e514b3ab218f6d0b0ef017eeb9463e83f822e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

