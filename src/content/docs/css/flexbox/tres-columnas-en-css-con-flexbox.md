---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZBI5OOZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6IJF9UEleEjqnaa5wD26iFlyq%2FYp8UqWwg8IiFSMlRAiB0Fh4ouys81EgLGUP1kCLxhxN2srXcq2Ocl20A2v0XhSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9neM75XNxhLZCmIWKtwDcALxlUqTPL78NU49ZJ76fEivcARx6wnCz0b0unBDSe3MtJGu68qyBcGwha2hfypcsho6wJ4TDiWYuOJtC5v8MphLebiUBy4h2O9I1UQcoMaf631NvwtyupqgOEhguqLdE9O7srJ9%2Bz0as6ZWvLHJak1490gxInqV7Zxxwr%2FZXyxjBGR%2F4NNtmm0emXObSFkWGuLFgkyGQYbNoCoOUu7eKyUKVpP24z39KRDedPkDTPNu3mHjDIoEPKaLQPIQvHILIPhQqlWZ2F2WwDeA1pjpAWcvYFl2k4IvWHc3NaN9qmA%2BaXknrDr6lRqDtWZeI%2BkqwwxqEsib42kwro7EK10IW012GebWw0VTDgaUevCVGwC9sRmktN8FS1PGzdTjipKgHqymv9wQuRWbWlyj%2BVwBgpflZp0BI4GcCaoH%2BN5S62LML%2B77MDjJ0LElAMgwsocH%2FrkAuphamkwOYZZMopexA9JFgqIotRQVm9xqDmUktKFxWxEMi9aNrmk8a0Aee1bPR2Gpo%2BtpCsJ2boV5%2Bvcc9Tb435ijmFZkWjG04PQUFA7MABw7rHX%2FLK1DWQwtGiYlG%2FP7GH1k0vEhcb%2B3jVfmE9yfHS6c3%2FqIEcZa8Jma9ezFCxQu2HAdNGUiALkwzJrVyQY6pgGVwm6FXHdVd%2BG1AN7q66hgKQo0zMBlXIRMlpM8cmn62T1N5%2FV2bJaTVyLAz1gk5GZ59c9W2eUEpglIStxANxMq7lBMuZkIwjWDfwF%2FOMOMnPDSMMwNbmhzFC%2BEmn%2Fk1Iuo9i9AWg4uVTBeUlE%2Fm3Ycixb9J%2BMKmFlV%2Fvbm6ip93FsuFDCHteSQd8qMNt397nI1S5oTSlEOrVYUqXNZq1FU7LkdM69R&X-Amz-Signature=e4655c947a53e9355db29ffe0b0d42b2527e0d52c818ad76dbf4bc1c5cef0516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZBI5OOZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6IJF9UEleEjqnaa5wD26iFlyq%2FYp8UqWwg8IiFSMlRAiB0Fh4ouys81EgLGUP1kCLxhxN2srXcq2Ocl20A2v0XhSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9neM75XNxhLZCmIWKtwDcALxlUqTPL78NU49ZJ76fEivcARx6wnCz0b0unBDSe3MtJGu68qyBcGwha2hfypcsho6wJ4TDiWYuOJtC5v8MphLebiUBy4h2O9I1UQcoMaf631NvwtyupqgOEhguqLdE9O7srJ9%2Bz0as6ZWvLHJak1490gxInqV7Zxxwr%2FZXyxjBGR%2F4NNtmm0emXObSFkWGuLFgkyGQYbNoCoOUu7eKyUKVpP24z39KRDedPkDTPNu3mHjDIoEPKaLQPIQvHILIPhQqlWZ2F2WwDeA1pjpAWcvYFl2k4IvWHc3NaN9qmA%2BaXknrDr6lRqDtWZeI%2BkqwwxqEsib42kwro7EK10IW012GebWw0VTDgaUevCVGwC9sRmktN8FS1PGzdTjipKgHqymv9wQuRWbWlyj%2BVwBgpflZp0BI4GcCaoH%2BN5S62LML%2B77MDjJ0LElAMgwsocH%2FrkAuphamkwOYZZMopexA9JFgqIotRQVm9xqDmUktKFxWxEMi9aNrmk8a0Aee1bPR2Gpo%2BtpCsJ2boV5%2Bvcc9Tb435ijmFZkWjG04PQUFA7MABw7rHX%2FLK1DWQwtGiYlG%2FP7GH1k0vEhcb%2B3jVfmE9yfHS6c3%2FqIEcZa8Jma9ezFCxQu2HAdNGUiALkwzJrVyQY6pgGVwm6FXHdVd%2BG1AN7q66hgKQo0zMBlXIRMlpM8cmn62T1N5%2FV2bJaTVyLAz1gk5GZ59c9W2eUEpglIStxANxMq7lBMuZkIwjWDfwF%2FOMOMnPDSMMwNbmhzFC%2BEmn%2Fk1Iuo9i9AWg4uVTBeUlE%2Fm3Ycixb9J%2BMKmFlV%2Fvbm6ip93FsuFDCHteSQd8qMNt397nI1S5oTSlEOrVYUqXNZq1FU7LkdM69R&X-Amz-Signature=bff11deed63da1e790e4ca6de0f2eef92b28b47d43db0fc40269d839bc601098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

