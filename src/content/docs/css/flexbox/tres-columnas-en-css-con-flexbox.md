---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TSU32Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK3Pm6Mw3M4a%2FO%2B3ZV%2B9KPEgs32UTMi2HMCxNs7OveVwIgEZ72ofs7o7fgh%2FEmuquyTzKIZs9AK4kElTbn2ZIoX24qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3CrK0sxCAEU4UbEyrcA45O%2Fy1ep5Io55eieFA5h8olk%2F%2BUk5bQje0gHjz1RJy3o1rJRTYwPUJkpGuyFGuwOc7FuacqHD%2F2A9dcfTBreKSpW%2FLoLtQgLFicSrvqnE%2B%2BYP4N6%2B3hrbLehu6PRms8a6p3G81PgR5%2FHXpbU9E7tZm49qxeHR92yNzUWqt5Lo6gulo3GkxcREuiBfhnjA2Xs%2FaIs2Eyv%2FUTe6axPydH9OjSzBYpVELxf6KF0pIGkFhA4SyctIZrLmQjLpwt%2FLRSTVDzmt%2BeceRPqAdWrm3D%2FXxnz0eWOV5df5IlcgOYGLzWlb8VVWFtKrCIbkKY7giU%2BKI536Y1QcHjcQHIcXWlyD%2BvsyVd73puXY%2B55izlgn0lDEl6f%2FSrN0N%2FUNGIM8G4dwpjc12pslETRyTFoCfv1FyxFdcpiZiX%2F%2F%2BTlfGJlk6m3rzdKsObZvgsxPEUohEFkSYao0wHeJ3XkYfqFDsxP6ThglnPcmNFZ4NFriMmBJjZU2NyDkNILbX%2Baa%2FcryUAxT0uBFQMqpfGpfBk8LIle1e1QKqq9xVFCzu8srPPQbtsmZqBaTjTeqU79fmU6SLhYYKIXw%2B5Lgli7Bp9jQQr22XJy8vDQCgVkgad2kifs9D3FPjeP%2FwSmgJTsXVrMI2Q28kGOqUB3vU6cazn7Ek5jhdMDlYuhPdn1T6odc5qjnC0WWCaADNa%2FGkYGl3jeZbiJHWDigFmQbxXMGoMUs20ptHNiZtPe%2BmJI7TIoTIksbvI6liDqSsIUFA5eeN3%2FnINvE%2BsSRw9089aQUKTnUpWlODpPZgU%2FJ%2FJi9Gcp1PYuDm0pxNfuxCdct7tRynBlj06cV07N5EXx7hv6Tk7Sq0GGc%2B23ZiBYlpLUqsM&X-Amz-Signature=719ed96ac8ee6b8cb846780361221cc467b96a851863d8179a7544a3479b15f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TSU32Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK3Pm6Mw3M4a%2FO%2B3ZV%2B9KPEgs32UTMi2HMCxNs7OveVwIgEZ72ofs7o7fgh%2FEmuquyTzKIZs9AK4kElTbn2ZIoX24qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3CrK0sxCAEU4UbEyrcA45O%2Fy1ep5Io55eieFA5h8olk%2F%2BUk5bQje0gHjz1RJy3o1rJRTYwPUJkpGuyFGuwOc7FuacqHD%2F2A9dcfTBreKSpW%2FLoLtQgLFicSrvqnE%2B%2BYP4N6%2B3hrbLehu6PRms8a6p3G81PgR5%2FHXpbU9E7tZm49qxeHR92yNzUWqt5Lo6gulo3GkxcREuiBfhnjA2Xs%2FaIs2Eyv%2FUTe6axPydH9OjSzBYpVELxf6KF0pIGkFhA4SyctIZrLmQjLpwt%2FLRSTVDzmt%2BeceRPqAdWrm3D%2FXxnz0eWOV5df5IlcgOYGLzWlb8VVWFtKrCIbkKY7giU%2BKI536Y1QcHjcQHIcXWlyD%2BvsyVd73puXY%2B55izlgn0lDEl6f%2FSrN0N%2FUNGIM8G4dwpjc12pslETRyTFoCfv1FyxFdcpiZiX%2F%2F%2BTlfGJlk6m3rzdKsObZvgsxPEUohEFkSYao0wHeJ3XkYfqFDsxP6ThglnPcmNFZ4NFriMmBJjZU2NyDkNILbX%2Baa%2FcryUAxT0uBFQMqpfGpfBk8LIle1e1QKqq9xVFCzu8srPPQbtsmZqBaTjTeqU79fmU6SLhYYKIXw%2B5Lgli7Bp9jQQr22XJy8vDQCgVkgad2kifs9D3FPjeP%2FwSmgJTsXVrMI2Q28kGOqUB3vU6cazn7Ek5jhdMDlYuhPdn1T6odc5qjnC0WWCaADNa%2FGkYGl3jeZbiJHWDigFmQbxXMGoMUs20ptHNiZtPe%2BmJI7TIoTIksbvI6liDqSsIUFA5eeN3%2FnINvE%2BsSRw9089aQUKTnUpWlODpPZgU%2FJ%2FJi9Gcp1PYuDm0pxNfuxCdct7tRynBlj06cV07N5EXx7hv6Tk7Sq0GGc%2B23ZiBYlpLUqsM&X-Amz-Signature=531496b51e575bc98573254dde683e97ee67bc8bd482f81f28af4fcb941d73a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

