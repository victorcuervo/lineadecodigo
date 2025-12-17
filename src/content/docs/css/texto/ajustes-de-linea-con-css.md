---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6PAKEL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHcYEbGoilikJ3gvGaM3F%2FAE4FGvc0yh04BpOUOmaswIhAKoFLl4OIivVJqzsq12vegDKv6u2v3u5xEN8w2Q4Of2FKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHLzG7vMnaTQTx0MQq3APMrlREHD0vFQAGGiylJD7qGZULV8yFY%2B2prTtIfx0KLdP%2B1djpOYZYWYHuHAFeAKuwb22vwtYcypnib4jZOJI6hZwPdxnrn%2BVfYnqXpd3MIk0dJwaGDvGY5cmI%2FMdsuuogL8f2m4SO7506hiw83us0ogYjinMNu5dsyQTwtFbrG9H0NLUxcCygfWZfsPyzxsstpDDlCsufLCMLjVzWIK3PrbU1Q9eHPhGyqk4X0D%2B9rQo5Ue8nRR7%2BaswK9%2FvC1lMefAgFvJiJrwwCGmQGj42dL2FWSIVg%2FQGALhoOOQDx5972SEAR0UxU%2B%2Fvq7Oqbavs1HeQsN0JHI2D4p8f%2BTjkrybloFNqx5%2BgAbKtHHv%2F0FBoh%2BMGiwd6W0%2FY0Zltj900vhmXgjRCsdXdOQfmkhex4E1H%2B8FaU2x5STE9AxcHMDGu0ZEWpt4%2F7uX1TmhE9fTR%2F2gkMm%2BzRDliX2jXYpVaAERwVncdg5bwfJmu4SbHTaFbFgjWLZqJ7WpgAOiZFT7kKiqI5ElMjpTRukWkypMVSmcOgFB1T8ZOSL43LCbOOP6oRs%2F37aeWifdjpHlfZWrHSX5qii74Pzi4CZynHaU27tRc1l8sUPF6%2BgJTwtjT%2F8QCdmNJjKWqIKwwfuzDDnInKBjqkAe4hKFKZDe1kjp3b6KZnu0BwNgk4V3vTmuKrDtCdpKP3%2BG70hC7FVPiMc8yrfxvtvYmJdtMuGXIC64yfugl0EiEv8M3UZj5i43D1KguK%2FKSPk1bZeZyjZ2ruaDTyuPYwfEdYN8HbECpGMnqNd2AAt5sm6MhiRlXEajeKhfH8mNsW3%2FNJWE7V8%2FPqhDFjNlnA9M4UUn1pHHOdGOFUevOWMRueAXbg&X-Amz-Signature=676a9cbc5215b09e5305bcb22aa6dfaaec9289b337b04f66c4c0b795e1284365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6PAKEL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfHcYEbGoilikJ3gvGaM3F%2FAE4FGvc0yh04BpOUOmaswIhAKoFLl4OIivVJqzsq12vegDKv6u2v3u5xEN8w2Q4Of2FKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHLzG7vMnaTQTx0MQq3APMrlREHD0vFQAGGiylJD7qGZULV8yFY%2B2prTtIfx0KLdP%2B1djpOYZYWYHuHAFeAKuwb22vwtYcypnib4jZOJI6hZwPdxnrn%2BVfYnqXpd3MIk0dJwaGDvGY5cmI%2FMdsuuogL8f2m4SO7506hiw83us0ogYjinMNu5dsyQTwtFbrG9H0NLUxcCygfWZfsPyzxsstpDDlCsufLCMLjVzWIK3PrbU1Q9eHPhGyqk4X0D%2B9rQo5Ue8nRR7%2BaswK9%2FvC1lMefAgFvJiJrwwCGmQGj42dL2FWSIVg%2FQGALhoOOQDx5972SEAR0UxU%2B%2Fvq7Oqbavs1HeQsN0JHI2D4p8f%2BTjkrybloFNqx5%2BgAbKtHHv%2F0FBoh%2BMGiwd6W0%2FY0Zltj900vhmXgjRCsdXdOQfmkhex4E1H%2B8FaU2x5STE9AxcHMDGu0ZEWpt4%2F7uX1TmhE9fTR%2F2gkMm%2BzRDliX2jXYpVaAERwVncdg5bwfJmu4SbHTaFbFgjWLZqJ7WpgAOiZFT7kKiqI5ElMjpTRukWkypMVSmcOgFB1T8ZOSL43LCbOOP6oRs%2F37aeWifdjpHlfZWrHSX5qii74Pzi4CZynHaU27tRc1l8sUPF6%2BgJTwtjT%2F8QCdmNJjKWqIKwwfuzDDnInKBjqkAe4hKFKZDe1kjp3b6KZnu0BwNgk4V3vTmuKrDtCdpKP3%2BG70hC7FVPiMc8yrfxvtvYmJdtMuGXIC64yfugl0EiEv8M3UZj5i43D1KguK%2FKSPk1bZeZyjZ2ruaDTyuPYwfEdYN8HbECpGMnqNd2AAt5sm6MhiRlXEajeKhfH8mNsW3%2FNJWE7V8%2FPqhDFjNlnA9M4UUn1pHHOdGOFUevOWMRueAXbg&X-Amz-Signature=a613c3c2b504f0360dfc7c119dd5e512f9703bcbd2464ee601e9d93268b7a224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

