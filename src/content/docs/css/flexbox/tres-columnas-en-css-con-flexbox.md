---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUGECRD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcMUFFuWY%2BSmHgllqmQmjHVsKxpk1RWejUySY%2BDmLdGwIhAJ5lGP1M4wG24gvc63HLvQacpcJew6v06gHhM03ozXISKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh35YUJd0DQUQYDuYq3AMFRuudl97BW0wu6hSwqsfRiGyWcczdi94KMtevn4HIgD2BjIJsTvmvFW24wDKkqd0n2HzRzsvDyiSMdwG5MfEiNO3n48ZNRJUHXi8Hjf6lzDdlXJNHjht3N1hUDINjbyxawNxzNYgRIMgWPNboxbiTOeivauLSChJ4%2BB65hsoASWRkSvBSQkYty4%2FOmEeEQ9Y6TqVetUNXTQ7furHqUGGvuP1ZPqU4Bsn2VclBHH%2F0AFD8CBETrsZU%2BnlNWzZbG0ydtqquffxWmPdBTBs%2BzdDxdsUt9CWlwfpMMvo4fAuemmXm2CCnwh%2Bzgm7TUWJ3tcJVtNw7gDRq42mae%2BeSZR%2Fz5MWRlViYlhfs0VIkfVCAaiNe4AExLYCJlm4m2EnOF%2FB%2FlPZ4XES%2FoPpF93%2FsjFppdCb%2FNlnus3IdFsWVZOVNI5pj5TvKBf3eF7il486sk9vUnG8pGfxAvXrxh%2B2Wu4DsnnkQRY5Ozb2uQJwLGVe12%2FKQGL%2F9GDXvbse1o%2BKk7BnX9Wyj0tLcqpia7uoklApp4GbymXMtioZG8bYK4h1P5Gzr6iR6D1M1U39W0Oi1VWrR2FlUGTYpSpkUssFhZDaxrPUvctkGJeGiK14qCPPDBM%2BGNeUyrDDZhOn2wDCj%2FdLJBjqkAQ%2BQSa%2BKN661mojnEij9rx9rHMUe7m%2F1RB3YO%2B2xs6GlIEN9w3prltl77Be6GvZXE6Wd65iBXLrU5YAJTqQfaNmjN%2F7UzrgnOJwn4jygv1OuLdCFtjtp9NKZvQQ%2BdbbOyor5qttFuFBtP59ZgSOo49OVyTYUOJNjcR15QMFtQ0HdpVReFDgzgERtQpDE0o4tDNDQ20%2F4KWylcsFHFgEcd9q1yNFo&X-Amz-Signature=9b314d8e16f7f56aa68e50363b956f90477f08f4f4a8f7d3b9cacc278a40b6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIUGECRD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcMUFFuWY%2BSmHgllqmQmjHVsKxpk1RWejUySY%2BDmLdGwIhAJ5lGP1M4wG24gvc63HLvQacpcJew6v06gHhM03ozXISKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh35YUJd0DQUQYDuYq3AMFRuudl97BW0wu6hSwqsfRiGyWcczdi94KMtevn4HIgD2BjIJsTvmvFW24wDKkqd0n2HzRzsvDyiSMdwG5MfEiNO3n48ZNRJUHXi8Hjf6lzDdlXJNHjht3N1hUDINjbyxawNxzNYgRIMgWPNboxbiTOeivauLSChJ4%2BB65hsoASWRkSvBSQkYty4%2FOmEeEQ9Y6TqVetUNXTQ7furHqUGGvuP1ZPqU4Bsn2VclBHH%2F0AFD8CBETrsZU%2BnlNWzZbG0ydtqquffxWmPdBTBs%2BzdDxdsUt9CWlwfpMMvo4fAuemmXm2CCnwh%2Bzgm7TUWJ3tcJVtNw7gDRq42mae%2BeSZR%2Fz5MWRlViYlhfs0VIkfVCAaiNe4AExLYCJlm4m2EnOF%2FB%2FlPZ4XES%2FoPpF93%2FsjFppdCb%2FNlnus3IdFsWVZOVNI5pj5TvKBf3eF7il486sk9vUnG8pGfxAvXrxh%2B2Wu4DsnnkQRY5Ozb2uQJwLGVe12%2FKQGL%2F9GDXvbse1o%2BKk7BnX9Wyj0tLcqpia7uoklApp4GbymXMtioZG8bYK4h1P5Gzr6iR6D1M1U39W0Oi1VWrR2FlUGTYpSpkUssFhZDaxrPUvctkGJeGiK14qCPPDBM%2BGNeUyrDDZhOn2wDCj%2FdLJBjqkAQ%2BQSa%2BKN661mojnEij9rx9rHMUe7m%2F1RB3YO%2B2xs6GlIEN9w3prltl77Be6GvZXE6Wd65iBXLrU5YAJTqQfaNmjN%2F7UzrgnOJwn4jygv1OuLdCFtjtp9NKZvQQ%2BdbbOyor5qttFuFBtP59ZgSOo49OVyTYUOJNjcR15QMFtQ0HdpVReFDgzgERtQpDE0o4tDNDQ20%2F4KWylcsFHFgEcd9q1yNFo&X-Amz-Signature=1f97e41a50b2d5095aacc1ba9ad6e47558bcc8081682b70b76bc95f01c72d4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

