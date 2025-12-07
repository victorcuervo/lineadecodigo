---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7NTIEF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyrRRLa7ZE9rpkk2jitUuSk8ZDaUdJAdBhEfrHWR2EtwIgdJr3XFauhZrRA3OpPlF63y1FdhdiiyK%2BQ%2BMe2USYAncqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GcBVtVjvGiWxgXCrcA6wMLOEKCWZ1%2Fad0Pl1B2sAQhZLD%2BmU7Aly4pEY0NO7ekkJl6nf4LUhX%2BIq2ixLFt039aXKMjiKwMPZf47J7XdnMs%2FYCC%2BBaroKuwBDvgiICIgBBaoH%2F9gCx8XxM7uW5zLcJn5SiISfZopbwPl96%2F01NC7oMtQS6BOyi9EfDCnE%2BGTxCKS5CU1hM0pwKGv%2BFe8kYcdhLqK5bythkxuNinAnoz%2B%2FccMAuYcL2mpLhKi0RifCRfAsWWQRdjkygFLbqNlOqYsasl3aGI6bV%2BQ1PksieK2uuPF7%2BYRRZ9J9LtULH8jNqUqtlZwK52TsNE6nC3Op7IOetAM%2Bp3g8KAvIEpPt9RezIaAUIHPWR49Ripxdd9hwo7A2F4BcMw3RRYeqvhpdNGhEfwQCxoGEQJeqVnATBJ8f6khI19HXZKMuMdprh5CbP2lNRgW0wx3tj8xQOTX4JLg%2B7Gbe61jgx3prLvsT9B81CY%2BK9g%2F7%2F2LYivJRqfSFmk%2FY9MpLT8XIzkRn0AFbhAWT2VNswwBfNUPfkUcYCbM%2FjkGwCq2GPNjMJHowFU2Ik8hv%2FHxWfjdr3oaa7WhhO3cq0Y5kZeLquFFvqjZX5MLc%2F8QbW%2F1Aba0ejeHEZCLb6wF2Oj1EQaHEkMNeg1MkGOqUB9EOMG7%2FgBrRpVBWk7sTZfz310r4tyQoGO83Viml2ut2ioaHwchWTDf3Ftt1PtSfnplkrURQnnVmfDq2mSPXU3RHvmc06wLNyWdwxGC5ddxK67vFut4Be89DCzDe%2FmhM8TX3TWKcQU%2Bjjhu4hIvTkWudy1Z0mt3NmVsn9M%2FC5O61sEqJk4ARF8jVW2O0C%2Fym0VvwjmkknTFIhOmV3Z53TJaRGpWzT&X-Amz-Signature=d7735d544114e64e9f6427e6fdcbb55806d12ff91a7e0e4353c104103f0171c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7NTIEF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T065552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyrRRLa7ZE9rpkk2jitUuSk8ZDaUdJAdBhEfrHWR2EtwIgdJr3XFauhZrRA3OpPlF63y1FdhdiiyK%2BQ%2BMe2USYAncqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7GcBVtVjvGiWxgXCrcA6wMLOEKCWZ1%2Fad0Pl1B2sAQhZLD%2BmU7Aly4pEY0NO7ekkJl6nf4LUhX%2BIq2ixLFt039aXKMjiKwMPZf47J7XdnMs%2FYCC%2BBaroKuwBDvgiICIgBBaoH%2F9gCx8XxM7uW5zLcJn5SiISfZopbwPl96%2F01NC7oMtQS6BOyi9EfDCnE%2BGTxCKS5CU1hM0pwKGv%2BFe8kYcdhLqK5bythkxuNinAnoz%2B%2FccMAuYcL2mpLhKi0RifCRfAsWWQRdjkygFLbqNlOqYsasl3aGI6bV%2BQ1PksieK2uuPF7%2BYRRZ9J9LtULH8jNqUqtlZwK52TsNE6nC3Op7IOetAM%2Bp3g8KAvIEpPt9RezIaAUIHPWR49Ripxdd9hwo7A2F4BcMw3RRYeqvhpdNGhEfwQCxoGEQJeqVnATBJ8f6khI19HXZKMuMdprh5CbP2lNRgW0wx3tj8xQOTX4JLg%2B7Gbe61jgx3prLvsT9B81CY%2BK9g%2F7%2F2LYivJRqfSFmk%2FY9MpLT8XIzkRn0AFbhAWT2VNswwBfNUPfkUcYCbM%2FjkGwCq2GPNjMJHowFU2Ik8hv%2FHxWfjdr3oaa7WhhO3cq0Y5kZeLquFFvqjZX5MLc%2F8QbW%2F1Aba0ejeHEZCLb6wF2Oj1EQaHEkMNeg1MkGOqUB9EOMG7%2FgBrRpVBWk7sTZfz310r4tyQoGO83Viml2ut2ioaHwchWTDf3Ftt1PtSfnplkrURQnnVmfDq2mSPXU3RHvmc06wLNyWdwxGC5ddxK67vFut4Be89DCzDe%2FmhM8TX3TWKcQU%2Bjjhu4hIvTkWudy1Z0mt3NmVsn9M%2FC5O61sEqJk4ARF8jVW2O0C%2Fym0VvwjmkknTFIhOmV3Z53TJaRGpWzT&X-Amz-Signature=5a4cd05f878d54aa915c068e32467ad22fa15730c3e80dd13ffa1445d4153d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

