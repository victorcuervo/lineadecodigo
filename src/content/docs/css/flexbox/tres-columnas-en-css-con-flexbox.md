---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJR5KJXK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaKFTxuN7iG1tYlncRXlR4kLL0oliaGK13yYJvUlTPgIhAMromEDay6HL4Wf%2FVypmgBiTwNrfprTr3Jsj2GxWUjZ0Kv8DCHEQABoMNjM3NDIzMTgzODA1Igzzkt3FgUyoi50EkEMq3ANsrNUjhti9qoy%2Bkp4Ka1SUmSO774AUOUGcIuwM0jUB4%2BCBM2oHlBaWXuY5yymBKLK1qIUjxe4gg1vAIxMFr3DeGVZqy74cvyuUe%2FXgYrAn%2FU9DNVccLR6uoaDtKMN0%2BNH64nFFGa%2B7%2FuYuduaSCj3SmXcpD9PpVd2tEIXziOJyZj9D3phNn6ShDEb4T4JZ9lhOw3%2BV6T8V%2BSZamfD1%2Fp78NiJkxvyG%2Bj5s2UXlvDrP86yqcZJgOuChTdNY2ItIRQRx8HImN%2FWMyBxYGOss05LAhklO0CR%2Ft5n66fdFmYVWODjgxTcHNIqlfzLiUFPEAP%2FMzzla891RLLnu8i39ongD%2FeAdO8rBJbbn0%2BY09MTT80p5WGgYn93xk%2F0JiohpgJCsgdUdh0iUyOMVcK5atNdfW7lwG2QX3v4jsHHD8NinvSEJWwFB9tfHXMKNiFNZihh3RLONJZQZNLaQSK5D6FuF5qmmLz189jbjDaEGu%2Fte%2B7XqX49phjrN6U2QH8ThXPh66ISOxlG%2BYnWgaEFotMzLUdtEmF9xs9Qr1%2FOv6f4WiS5V%2FkitaE5VxdEiOE1UL8MpAHLL%2F1dBQnfpXXieGS6Ul1m2pCr3%2Fs%2Be70tNM1Pu1rLkU9JI9dwT8oXl8jCpvM%2FJBjqkAROLyZooHZaM7jSXi39k10XUPvETS5Wni6LWJCaZ4zLS5okCChL3tmVfJpT%2BQP04CJeUni9d110GMwEnxsHrAsRHzUpiSAaNkQ1Lq1OhPvsrSsfPS9CGPDj2q5gU%2F1UVcNCkn4dM%2FqacK7hXVk%2BvfZyqqLORWq3TW1nHombU7%2FCB4ETDqqBer7flNsMW7UBMu77fRMy%2Fu0xEc6xulfb9qtI9N1rb&X-Amz-Signature=62b17f961043edc2add03dd487090cbcaf14fc3337a9235e1f12b071bab86a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJR5KJXK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaKFTxuN7iG1tYlncRXlR4kLL0oliaGK13yYJvUlTPgIhAMromEDay6HL4Wf%2FVypmgBiTwNrfprTr3Jsj2GxWUjZ0Kv8DCHEQABoMNjM3NDIzMTgzODA1Igzzkt3FgUyoi50EkEMq3ANsrNUjhti9qoy%2Bkp4Ka1SUmSO774AUOUGcIuwM0jUB4%2BCBM2oHlBaWXuY5yymBKLK1qIUjxe4gg1vAIxMFr3DeGVZqy74cvyuUe%2FXgYrAn%2FU9DNVccLR6uoaDtKMN0%2BNH64nFFGa%2B7%2FuYuduaSCj3SmXcpD9PpVd2tEIXziOJyZj9D3phNn6ShDEb4T4JZ9lhOw3%2BV6T8V%2BSZamfD1%2Fp78NiJkxvyG%2Bj5s2UXlvDrP86yqcZJgOuChTdNY2ItIRQRx8HImN%2FWMyBxYGOss05LAhklO0CR%2Ft5n66fdFmYVWODjgxTcHNIqlfzLiUFPEAP%2FMzzla891RLLnu8i39ongD%2FeAdO8rBJbbn0%2BY09MTT80p5WGgYn93xk%2F0JiohpgJCsgdUdh0iUyOMVcK5atNdfW7lwG2QX3v4jsHHD8NinvSEJWwFB9tfHXMKNiFNZihh3RLONJZQZNLaQSK5D6FuF5qmmLz189jbjDaEGu%2Fte%2B7XqX49phjrN6U2QH8ThXPh66ISOxlG%2BYnWgaEFotMzLUdtEmF9xs9Qr1%2FOv6f4WiS5V%2FkitaE5VxdEiOE1UL8MpAHLL%2F1dBQnfpXXieGS6Ul1m2pCr3%2Fs%2Be70tNM1Pu1rLkU9JI9dwT8oXl8jCpvM%2FJBjqkAROLyZooHZaM7jSXi39k10XUPvETS5Wni6LWJCaZ4zLS5okCChL3tmVfJpT%2BQP04CJeUni9d110GMwEnxsHrAsRHzUpiSAaNkQ1Lq1OhPvsrSsfPS9CGPDj2q5gU%2F1UVcNCkn4dM%2FqacK7hXVk%2BvfZyqqLORWq3TW1nHombU7%2FCB4ETDqqBer7flNsMW7UBMu77fRMy%2Fu0xEc6xulfb9qtI9N1rb&X-Amz-Signature=dcc1c69ee6b369030c60733e88345e55a7df5049a76fc6d91e9da8b94badcd9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

