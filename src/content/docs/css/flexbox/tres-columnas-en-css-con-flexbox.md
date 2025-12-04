---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3N7QN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD294OxcXxyryoR3Hgiqon1UAg14S95DxBq5Wavyh6Z6QIhAOmw%2FkQE7VxFMYk6StrTHuoCXkekthInKlc4CBKUdJuoKv8DCEgQABoMNjM3NDIzMTgzODA1Igy%2BDpmW12wjl2Vwp48q3AO2nFOwYCEt%2BGqo3vBZ2m5a%2FQZCMqypGRggR%2FfMImur6YyWo5wfO61vR8Bc2iJccYMTvVKtHf322g4hPaSp9nz7bm6TDxoPbXEgIDo9MshR8nkYfaYc4jmKOegGOiOr9tVksuqV83d1YnxVqeXMvkr2%2FM2vdRRtUS3K2zQ6klTuDQn3URbiOooBs%2BVA8NXLpHB7XofoXmlT2Q3gGqmZHgJAKIn9ZWgowNvqI70g%2BXaWG9oKZ7Tzv8Qx1FLYSFdCAnEOEp6c%2BBck9%2FlQYkJYZdyo%2FXQYmOocMj6xiGR53VlM4FCcohpGVplajX%2Be1OWPG%2FasjhclMTIWlySTKvq1Y%2FHlXYzyTqxkpa9bzFQEEU2wIJJXxuA5Cm5PhOQ2JldM7dH90jGbnpGxjBz35pZIl293WBjcdyZ0yzSGlxEahdaIL%2Bojp%2FAnhzQnmvejrI04GS7n%2BYjHEh3neAWtviIjexDnpIEBGmh3pI%2BsBwuJsQK9US8MRWSeogWgvnEHj8Z5ZSgsI43Bp9%2Fkkrp6sQY9R1YZaOxq0%2BqugaXSeZl%2BA%2FAriKYSUJ38zazpd3zT%2FiYtvU4eGLmT7l9x%2F%2Fv%2FgOuczeZ2cy%2BIrwpJEadX7npyQdR6ppUDsnV0Wga5yQuzZzDsvsbJBjqkAWDTsGN%2FHLdt%2B2B%2BDUSquEllGZ5ThhI0Kx5wJBBuJjL3ZnuRsDI092cDQ5LcE%2BTj76SEzrLeL%2FnS4Z5c8xrihAO9QBcRJRWI2ntxAajCpibPAmHdGhdRxfkDbhJtQ%2FkO6Zt8dP%2BwHz%2FqVVZL0BYhAPN2FmMMd2u07KJRKUHDHba8VCHG8EdcR5eIargI66rhC7dAEKf93ToxH2ZsB%2BCKaL09Wdvk&X-Amz-Signature=7e1023dd26d05b9530cd02e023f85307f1627148270adf660ab4fae26716da7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAV3N7QN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD294OxcXxyryoR3Hgiqon1UAg14S95DxBq5Wavyh6Z6QIhAOmw%2FkQE7VxFMYk6StrTHuoCXkekthInKlc4CBKUdJuoKv8DCEgQABoMNjM3NDIzMTgzODA1Igy%2BDpmW12wjl2Vwp48q3AO2nFOwYCEt%2BGqo3vBZ2m5a%2FQZCMqypGRggR%2FfMImur6YyWo5wfO61vR8Bc2iJccYMTvVKtHf322g4hPaSp9nz7bm6TDxoPbXEgIDo9MshR8nkYfaYc4jmKOegGOiOr9tVksuqV83d1YnxVqeXMvkr2%2FM2vdRRtUS3K2zQ6klTuDQn3URbiOooBs%2BVA8NXLpHB7XofoXmlT2Q3gGqmZHgJAKIn9ZWgowNvqI70g%2BXaWG9oKZ7Tzv8Qx1FLYSFdCAnEOEp6c%2BBck9%2FlQYkJYZdyo%2FXQYmOocMj6xiGR53VlM4FCcohpGVplajX%2Be1OWPG%2FasjhclMTIWlySTKvq1Y%2FHlXYzyTqxkpa9bzFQEEU2wIJJXxuA5Cm5PhOQ2JldM7dH90jGbnpGxjBz35pZIl293WBjcdyZ0yzSGlxEahdaIL%2Bojp%2FAnhzQnmvejrI04GS7n%2BYjHEh3neAWtviIjexDnpIEBGmh3pI%2BsBwuJsQK9US8MRWSeogWgvnEHj8Z5ZSgsI43Bp9%2Fkkrp6sQY9R1YZaOxq0%2BqugaXSeZl%2BA%2FAriKYSUJ38zazpd3zT%2FiYtvU4eGLmT7l9x%2F%2Fv%2FgOuczeZ2cy%2BIrwpJEadX7npyQdR6ppUDsnV0Wga5yQuzZzDsvsbJBjqkAWDTsGN%2FHLdt%2B2B%2BDUSquEllGZ5ThhI0Kx5wJBBuJjL3ZnuRsDI092cDQ5LcE%2BTj76SEzrLeL%2FnS4Z5c8xrihAO9QBcRJRWI2ntxAajCpibPAmHdGhdRxfkDbhJtQ%2FkO6Zt8dP%2BwHz%2FqVVZL0BYhAPN2FmMMd2u07KJRKUHDHba8VCHG8EdcR5eIargI66rhC7dAEKf93ToxH2ZsB%2BCKaL09Wdvk&X-Amz-Signature=68052d3184daea6e0487315214cec562c255bfaee386ce62ef7690f470ec5616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

