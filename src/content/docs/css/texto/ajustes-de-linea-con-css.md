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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GOMAKWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwVK8aG67b%2BXQJNZZ0fZE%2B08bVpyl2we%2BQZoAvU9CxeAiEA8cuvN5a7DDv3cOlllIUMQeC5NHURCjeQytBK%2Bzc%2FhdcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXmkTJOO3vs%2FahFVyrcAzlywDoRSxSbTbNMquFqQJ%2By56Gx%2FtAKLWhFIud1cmW%2B8Q1wQ5QWOB39jfdiWVwwlHOwCciGZsAr%2BFre%2BxOoNufp3Gtm0Uy6NXKXIEgKeg%2Bk3%2F9NFM43ajc8jnN9kyJsu9ASNmygz03bxvIGQpOsPQwGJlhxnrGaU0JGivACrPEP71t%2BnzkvkfgST4C7JWhcKXv6nbLAiuYCzhEssVefL3GBDeGKG8QL1ZsXLpSzshr2gvuUwTZzQUNNqRlgeWLeCkOze8DJtPBk76bV6TPVLprcUZuzww4xIyC5H%2FhQFBcE1NxDtWv%2Bp2%2B2%2BjofNJejto6VNmcUrUvkKttFjesGkTFVshEVq1HPyXpmoCWtbnILrRplvL6y3sryut2R9Hu5V56yhZjdo616Y16SgTl2ULtNWBrx6VYuV1VEbbuJTIK%2Fou4H91lGt%2BkbPu0Jj6LRn37z6E6nbyvtYd8MR%2BPbpsAvqMwA2yJ%2FwP6ELg1Zj82qHhLPzT1s7bDIS%2FYC05EmTpprYPw3XLpWGIX0H2VOo1XcIolWdtKQkt7TTP7Z%2FXIcwN3SM3Ql5MARKzshA%2BLr8fU8vdy9D0JKGpbvz0QtDUwVv%2F8vFXyH981%2BLkUh0KuElRsgGZB2zbS2doHpMKSBi8oGOqUBzyqZrWFuVcv6efGm8%2Fnb75Kd00%2Fu4TvzvhwZMUrAido%2FCD0NYkAZ0%2BmXlMBCtahXBpscR1WKTqaGamg6Lqv8dZocPMixlZywDghV5vzzhxj0BlrR1M0IC05uAak6GmWELdCsztWsDy5B3NxWVwonQF8go9gGSF534A5ua9NEWBwFEDDro3g6HcKY%2BaurMx%2FaXHavImigHoIZdlIgDwNLj0myuUT4&X-Amz-Signature=72d7bd2eff284274f60868d339807f1610db4c486fcfbee6f4d0fbc49d44dbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GOMAKWK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwVK8aG67b%2BXQJNZZ0fZE%2B08bVpyl2we%2BQZoAvU9CxeAiEA8cuvN5a7DDv3cOlllIUMQeC5NHURCjeQytBK%2Bzc%2FhdcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXmkTJOO3vs%2FahFVyrcAzlywDoRSxSbTbNMquFqQJ%2By56Gx%2FtAKLWhFIud1cmW%2B8Q1wQ5QWOB39jfdiWVwwlHOwCciGZsAr%2BFre%2BxOoNufp3Gtm0Uy6NXKXIEgKeg%2Bk3%2F9NFM43ajc8jnN9kyJsu9ASNmygz03bxvIGQpOsPQwGJlhxnrGaU0JGivACrPEP71t%2BnzkvkfgST4C7JWhcKXv6nbLAiuYCzhEssVefL3GBDeGKG8QL1ZsXLpSzshr2gvuUwTZzQUNNqRlgeWLeCkOze8DJtPBk76bV6TPVLprcUZuzww4xIyC5H%2FhQFBcE1NxDtWv%2Bp2%2B2%2BjofNJejto6VNmcUrUvkKttFjesGkTFVshEVq1HPyXpmoCWtbnILrRplvL6y3sryut2R9Hu5V56yhZjdo616Y16SgTl2ULtNWBrx6VYuV1VEbbuJTIK%2Fou4H91lGt%2BkbPu0Jj6LRn37z6E6nbyvtYd8MR%2BPbpsAvqMwA2yJ%2FwP6ELg1Zj82qHhLPzT1s7bDIS%2FYC05EmTpprYPw3XLpWGIX0H2VOo1XcIolWdtKQkt7TTP7Z%2FXIcwN3SM3Ql5MARKzshA%2BLr8fU8vdy9D0JKGpbvz0QtDUwVv%2F8vFXyH981%2BLkUh0KuElRsgGZB2zbS2doHpMKSBi8oGOqUBzyqZrWFuVcv6efGm8%2Fnb75Kd00%2Fu4TvzvhwZMUrAido%2FCD0NYkAZ0%2BmXlMBCtahXBpscR1WKTqaGamg6Lqv8dZocPMixlZywDghV5vzzhxj0BlrR1M0IC05uAak6GmWELdCsztWsDy5B3NxWVwonQF8go9gGSF534A5ua9NEWBwFEDDro3g6HcKY%2BaurMx%2FaXHavImigHoIZdlIgDwNLj0myuUT4&X-Amz-Signature=7afb6584ddbb6851de7a3ec29e2f2a4d4388595d7ae221f16fe54626d2506fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

