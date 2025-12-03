---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQXJ36S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDThNjELDBler6nuQeOyTLjiUVDvE2atJU0Ha0kpySACAiBUVvjYDNtJHJkf6q3YwpqmbPcFwQFwJ9iCti0BmclsvSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMIioOH3hDw9Fz48S%2FKtwDp0rwv4EkwJIMVVJWNFWSGduJe5YnlS9ajgRAPbXqef2ulc2fRuQYMYZXK39eOlqwVa93grmMtzsebLdHR6LOBQWp4bPnqvYerktoZhRYWf6PKvwd1c1nN7aCSSEfR9N%2Fb14ILd0x0OEZbsQGvG%2BNAH4XvCBMxffvJ1vU%2FkEsyyYUwt4R3qRZcLOlD7tP032U9i474CL2HVDabyWn%2BsdIWE46ad7UZXq6hoAprUBj1yIplRSpj5cOYV0mM%2FeoPCILNvfD0xfioifWaz62i3EtRV6Wnlmmrp8b1uV5eIM6OnGANY0ICPF2ax35DUXnik1AyNL3gZs6C9dUhuUG7I9Hvi8TXUrAtAyBsjCF%2F1SEoOO%2BhZ%2BO9I4G9VYzkYF7Ab4bWkiHRU%2Fmhz9BWGz9AIrsNEm0oi86JeGacFwmHRLGaJ6%2BsWJK4sveSF%2B74R9OwxsyaXgJb9EAiS24Al8BRC4W%2FYz2fGt%2B6gpy0j3DvJzpPfPIc%2BW8XHqZZJU3Vgl2wmJBOO78652lOMXIFynpL6CVn6SrNHIbE4xOEZwkEmMPGtmDlRHjycddf%2FSE4qzvbgemppGcnwfzd17vG1VyRbKne2FYd7et11lXXg%2Fwp3P6IwpOq2s8WYkOx8KJrksw7ffCyQY6pgETe9QjT6MJFyxuF2nwKDJKprk95y%2B5rQD6uNv5I3BNHvtpKTyMuJqr1qmSSBWzlg%2BTSUa8y4rmCVgb%2BNzHiEceXCr91b%2FdtcnQ6sq2If1CwsXKLJ%2BA0geG2eOFIucHlfI4MkwvkFpIaM3lbk0L9r1nw2gjKBXlaOjqxF4VMHbHYQ3fWBECVLxif9UBOQnbVAhUIgsDG572ZAIAHBl7m9SlQlY29oRU&X-Amz-Signature=e325bf275e6ba3338ef9c0b679f1d119d402db41eda7bd4709b35b2dce5d90e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NQXJ36S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDThNjELDBler6nuQeOyTLjiUVDvE2atJU0Ha0kpySACAiBUVvjYDNtJHJkf6q3YwpqmbPcFwQFwJ9iCti0BmclsvSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMIioOH3hDw9Fz48S%2FKtwDp0rwv4EkwJIMVVJWNFWSGduJe5YnlS9ajgRAPbXqef2ulc2fRuQYMYZXK39eOlqwVa93grmMtzsebLdHR6LOBQWp4bPnqvYerktoZhRYWf6PKvwd1c1nN7aCSSEfR9N%2Fb14ILd0x0OEZbsQGvG%2BNAH4XvCBMxffvJ1vU%2FkEsyyYUwt4R3qRZcLOlD7tP032U9i474CL2HVDabyWn%2BsdIWE46ad7UZXq6hoAprUBj1yIplRSpj5cOYV0mM%2FeoPCILNvfD0xfioifWaz62i3EtRV6Wnlmmrp8b1uV5eIM6OnGANY0ICPF2ax35DUXnik1AyNL3gZs6C9dUhuUG7I9Hvi8TXUrAtAyBsjCF%2F1SEoOO%2BhZ%2BO9I4G9VYzkYF7Ab4bWkiHRU%2Fmhz9BWGz9AIrsNEm0oi86JeGacFwmHRLGaJ6%2BsWJK4sveSF%2B74R9OwxsyaXgJb9EAiS24Al8BRC4W%2FYz2fGt%2B6gpy0j3DvJzpPfPIc%2BW8XHqZZJU3Vgl2wmJBOO78652lOMXIFynpL6CVn6SrNHIbE4xOEZwkEmMPGtmDlRHjycddf%2FSE4qzvbgemppGcnwfzd17vG1VyRbKne2FYd7et11lXXg%2Fwp3P6IwpOq2s8WYkOx8KJrksw7ffCyQY6pgETe9QjT6MJFyxuF2nwKDJKprk95y%2B5rQD6uNv5I3BNHvtpKTyMuJqr1qmSSBWzlg%2BTSUa8y4rmCVgb%2BNzHiEceXCr91b%2FdtcnQ6sq2If1CwsXKLJ%2BA0geG2eOFIucHlfI4MkwvkFpIaM3lbk0L9r1nw2gjKBXlaOjqxF4VMHbHYQ3fWBECVLxif9UBOQnbVAhUIgsDG572ZAIAHBl7m9SlQlY29oRU&X-Amz-Signature=4b779c06137cf31fc787ef484b985d0e9a0b33fd694e5e2ddc2ec0fdbfc6c803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

