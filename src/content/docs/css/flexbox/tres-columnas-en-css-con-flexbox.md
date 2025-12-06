---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3HPQQI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2aRXXIZpCdRI8nWFBqv31EY7gb5ofWErznUCwB42%2FowIhAKlNog5yrAgKRZ83iMg50H2ssp4KYRpeXVoYsToL5PtUKv8DCGwQABoMNjM3NDIzMTgzODA1Igz0SLVV1nUOzudodfwq3ANLyE0lUZoTrVdQF542TmI1DNpjdXC5e32HowoknFusxqA4X7eYFvFbuiaxTerxLCIdokI8yOvfFVIvM47aUmMKeaosprqXLQMmpTFGk82HG4io69OsEAXZUhdUhOVEb48z23OVtX%2Fvd5OsFPYSzTHuW6XdMP7CTurd15XSKd0vjcXwE%2Bmh0wAw252%2FBkFkuJq38ofRLXTUiirmwIB4W%2Fu8av75qRlWFQ2LnfYwQdqb%2FpbBU4jJ9SnAjilyu9izsNfjUEQHHoZA6GavETYB173BtqZW%2BTsYTIhn%2FEJ62h%2BpBJyv6ZIWuNNlcfOONubzFXiY7RnJbKBcA0AWpjpbL9OhTF%2BDmE%2Fc6saq53tWt4hv6N4z0zPzWPlJUkiAZ1zM8Zf4TRnUEEHKhzKLBL6vY9NzcrWx0syxIqhrwmS3qmzxaMrAH3Z6zKwnGqpInqg7ikCTl8ebRz6fuVrm%2BsS6MP8RYfnjWN554q7rDXSpXT6XVQkLUMx9GqouXO1DYFdIZmof4uc6KEmjsn4IHCfcZh3IYl7VIwof6QZaQG2Olzu76tTkB2%2B5Xkzjpr9ztNz%2BJ6N5SAXPMfaUiQ3Cptm4vfsx1htaXEwiHXNuXuTKVf%2BL6QNiAq2X5amrLWbe1zD%2Bp87JBjqkAevV8ddQUIp8xMebDSTejXKfLRGqw%2FwiQTWz9CroalTeDXWdTxM2I11ushQKcCQQLXMpgukHoaL%2Fg4VuQMzy2c6jIt6v%2B3doY7vo%2BLzw4sYSDhyXs7Y%2BgGs94rS3pcRo7P%2FbvPzBdzYVQ0%2BpC7eLQNMEys6tKzP4p1ZGmRg7M%2BCDuC0%2FvDNjD6e0%2FO7bpfEozhlSf0qzO6XcGHHKgoStF0aFtx01&X-Amz-Signature=6aea9b8c3c79c899ba7dd0690b0977719d1785cf920426fa85cc3d69c1a370bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3HPQQI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2aRXXIZpCdRI8nWFBqv31EY7gb5ofWErznUCwB42%2FowIhAKlNog5yrAgKRZ83iMg50H2ssp4KYRpeXVoYsToL5PtUKv8DCGwQABoMNjM3NDIzMTgzODA1Igz0SLVV1nUOzudodfwq3ANLyE0lUZoTrVdQF542TmI1DNpjdXC5e32HowoknFusxqA4X7eYFvFbuiaxTerxLCIdokI8yOvfFVIvM47aUmMKeaosprqXLQMmpTFGk82HG4io69OsEAXZUhdUhOVEb48z23OVtX%2Fvd5OsFPYSzTHuW6XdMP7CTurd15XSKd0vjcXwE%2Bmh0wAw252%2FBkFkuJq38ofRLXTUiirmwIB4W%2Fu8av75qRlWFQ2LnfYwQdqb%2FpbBU4jJ9SnAjilyu9izsNfjUEQHHoZA6GavETYB173BtqZW%2BTsYTIhn%2FEJ62h%2BpBJyv6ZIWuNNlcfOONubzFXiY7RnJbKBcA0AWpjpbL9OhTF%2BDmE%2Fc6saq53tWt4hv6N4z0zPzWPlJUkiAZ1zM8Zf4TRnUEEHKhzKLBL6vY9NzcrWx0syxIqhrwmS3qmzxaMrAH3Z6zKwnGqpInqg7ikCTl8ebRz6fuVrm%2BsS6MP8RYfnjWN554q7rDXSpXT6XVQkLUMx9GqouXO1DYFdIZmof4uc6KEmjsn4IHCfcZh3IYl7VIwof6QZaQG2Olzu76tTkB2%2B5Xkzjpr9ztNz%2BJ6N5SAXPMfaUiQ3Cptm4vfsx1htaXEwiHXNuXuTKVf%2BL6QNiAq2X5amrLWbe1zD%2Bp87JBjqkAevV8ddQUIp8xMebDSTejXKfLRGqw%2FwiQTWz9CroalTeDXWdTxM2I11ushQKcCQQLXMpgukHoaL%2Fg4VuQMzy2c6jIt6v%2B3doY7vo%2BLzw4sYSDhyXs7Y%2BgGs94rS3pcRo7P%2FbvPzBdzYVQ0%2BpC7eLQNMEys6tKzP4p1ZGmRg7M%2BCDuC0%2FvDNjD6e0%2FO7bpfEozhlSf0qzO6XcGHHKgoStF0aFtx01&X-Amz-Signature=e94ef65684c2f1f1069c412333c62f9d9b624333a4101d3d055d93af2aa2209c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

