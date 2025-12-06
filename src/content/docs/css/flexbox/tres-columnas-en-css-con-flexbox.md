---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CSYWQF2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSuOwJerNZzW4lJ6bT6FYSkXQ3Z0G7i0U7G8cWDuabtQIgOW9tRZgFe1vNONQW126HrXr0S45%2F16a0AdlDG9SEG3Iq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNVbN2UpnyCV5OCA0ircAw0jCBJZc%2B45frt4%2BjrsRSXwUwsfmiwMNJxKUJRlBEYM09O89FTXgM%2BKoGq0r3vP8ShUs8%2BHoa5J53WPAC%2Fhfq1ldzOI3Qic1dsYs6cqYVvKDoev7BoWM5ohJLH9WwW8cPbiZsuziTH6j3uukNjyZnAV%2BbZVZdXMfL%2Fm%2FAqepM0ZlZFTqqD1G0eFWGAugIMrkSvf0HAhVK08X34voq%2BRYwO1o0Y%2FsEphM2xs%2FG8drfzI3VmO6U%2Bcgy19WhE9gRBFeSkR9xiy%2FbXs6ZORlZSsr%2FAJ3IdCmr7dJbFcgaZqSR7A5h897N8m8ENdjNAEQLfUozZONASWTgB2%2B9xGTcU8wXyy6l2eeTZgFtp39fvk5RixX%2Bj6ZUpy5O5YJn2fqFvlyAuN1ejwtKpf8yPsuHd8W7texXaDo6QXdlJDCio2cPUxTbCiLTwI%2Bm9L4VkhiVxz6ixwc67aqXO3DMPpCoI8y25JNjenKyGOyJ30itfgNQY3zjIgqbgHusgvSe6dWM3QbIi9wvynnp4v%2BDgLICU99Ywu%2B%2FqLYyu%2Fl5IhVo0kU%2B%2FhwfgvO3ut4YWJScxJcEOD84bV5bPZYyvvzp8P3hbR4k5%2BdM6n%2FtcrDIrt4AvQ4AcQuvvtLbzKNlHR%2FQTQMOTJ0ckGOqUBIM6hvk3aO22p1j0KV2wA3dOSpoXaVrWp1eJBzt5RKVRMgCzw5kQzhmgLDwCZK4yW%2FzZfxV65yCsKAPd420P50dRV54LsTrGDHBUP2vK8IwHvypfA8%2FKz%2FfWMqlmlTRh65KFm16DtKeJEh8%2FY8S2TsAuPrapX6lmURp7OHLEnuui5zZ%2FZwLrZoho9MAfbg5WRGM0r4w%2Bz5FiADX7BO0f%2BrXQw4Xhe&X-Amz-Signature=d0b085b786bea397f6b223c06f89986138d9d64861cc64bbbbe5c4928ae71d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CSYWQF2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSuOwJerNZzW4lJ6bT6FYSkXQ3Z0G7i0U7G8cWDuabtQIgOW9tRZgFe1vNONQW126HrXr0S45%2F16a0AdlDG9SEG3Iq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNVbN2UpnyCV5OCA0ircAw0jCBJZc%2B45frt4%2BjrsRSXwUwsfmiwMNJxKUJRlBEYM09O89FTXgM%2BKoGq0r3vP8ShUs8%2BHoa5J53WPAC%2Fhfq1ldzOI3Qic1dsYs6cqYVvKDoev7BoWM5ohJLH9WwW8cPbiZsuziTH6j3uukNjyZnAV%2BbZVZdXMfL%2Fm%2FAqepM0ZlZFTqqD1G0eFWGAugIMrkSvf0HAhVK08X34voq%2BRYwO1o0Y%2FsEphM2xs%2FG8drfzI3VmO6U%2Bcgy19WhE9gRBFeSkR9xiy%2FbXs6ZORlZSsr%2FAJ3IdCmr7dJbFcgaZqSR7A5h897N8m8ENdjNAEQLfUozZONASWTgB2%2B9xGTcU8wXyy6l2eeTZgFtp39fvk5RixX%2Bj6ZUpy5O5YJn2fqFvlyAuN1ejwtKpf8yPsuHd8W7texXaDo6QXdlJDCio2cPUxTbCiLTwI%2Bm9L4VkhiVxz6ixwc67aqXO3DMPpCoI8y25JNjenKyGOyJ30itfgNQY3zjIgqbgHusgvSe6dWM3QbIi9wvynnp4v%2BDgLICU99Ywu%2B%2FqLYyu%2Fl5IhVo0kU%2B%2FhwfgvO3ut4YWJScxJcEOD84bV5bPZYyvvzp8P3hbR4k5%2BdM6n%2FtcrDIrt4AvQ4AcQuvvtLbzKNlHR%2FQTQMOTJ0ckGOqUBIM6hvk3aO22p1j0KV2wA3dOSpoXaVrWp1eJBzt5RKVRMgCzw5kQzhmgLDwCZK4yW%2FzZfxV65yCsKAPd420P50dRV54LsTrGDHBUP2vK8IwHvypfA8%2FKz%2FfWMqlmlTRh65KFm16DtKeJEh8%2FY8S2TsAuPrapX6lmURp7OHLEnuui5zZ%2FZwLrZoho9MAfbg5WRGM0r4w%2Bz5FiADX7BO0f%2BrXQw4Xhe&X-Amz-Signature=4a21a00c917f902765f2de1c414db008c7d51a1add09475005c38748f40efc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

