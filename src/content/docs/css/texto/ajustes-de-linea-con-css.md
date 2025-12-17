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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLH2U67%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxvyHu7GtL%2BXj%2Bqcmei7tXZdeyUhYgpJUmNChZAv2MvgIgXVFamqcNr1bAeZ9pE2I2wz2XH0vCPqUccI2nc27V3Tgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLGRYi73Zoj40y2BRCrcAx9GXjOiDSggVEmT%2BhheuYXHAJzMIWfbC1oc%2Bp71LEIdAG80egJ7dwMWG%2FfDlA2yH8ljmqGlnFK8qJxx%2BfqqycIJmCV7GP%2FR6m6IbVY3FPB8gT66SI1rnUa%2FKFkR9LFXwESYqV12jZ2pxUx5t5rm7UgUTRHUdp9bp2kNTL8qOMAQK%2FeZQyD4sdVOzdjp9IofDGyzI%2Bn6h4l1BA5WV1c2O9PLV3KR7O2JOwfAiuTXmxzLArM0qmDjRNoZsUn6HGfTPYJ%2F5I4bJ0uZ4qf0hhzywdvtr%2BlGJfoUAHIwl2g2r7N21CCqifcjSsYwt3E1hcj9pRlVxY%2BnGnuOA%2F5oQe3o0kstH1YE09nIWv2%2F%2FeRFDDfUsbEjW13XPz%2BlVxyFjy5Us9CjOkCESIo3o3wJOw9gOhx%2Bp%2BinhYHJMUr2T3u4swJF5aYDWy4q%2BEhJxNFV2LREP9n5%2BbSbSJukyK%2B2MkhHFlO9L2uVcQX%2FvbX1duRQkm0k%2BIDRu63kon%2Fnmxgjh4Z36DeL8BH1LsKyWXM3zW02Zz2hN5a4JVtlZ2esz%2FQ%2B8TvwkWr5iP%2B2sE7oGW4iB5SbnvlUXMMjIygTpc64Yq61z6oYRVX3We%2F7WImYxnyVn9NYqvtpruwwg27ptzoYMLfGisoGOqUB8iBT0vRI8YuZENFpl5ZC7YqyrSaYF00yXqZnUxnSs98EE9FLElP0QB9%2BHpeFWABzBnBynLiCpt21FcI796xTOXaFFpPdoWMBKTetT6J5nZmuyOYDofU5OPqrnJPB%2F73soNBr6WDaU4sHs0iVZ76r39lxUbTvd%2FeSNRSro5XHsnPzncFZpuQEdBfD4v7Ybg%2FvOenRRosJPmO8Bel0BqWfMT%2FTOjJW&X-Amz-Signature=619b07b8455c1d1a80b99e7d4fb4e1de5c38ccc0023ca9f92b75d35830af47c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLH2U67%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxvyHu7GtL%2BXj%2Bqcmei7tXZdeyUhYgpJUmNChZAv2MvgIgXVFamqcNr1bAeZ9pE2I2wz2XH0vCPqUccI2nc27V3Tgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLGRYi73Zoj40y2BRCrcAx9GXjOiDSggVEmT%2BhheuYXHAJzMIWfbC1oc%2Bp71LEIdAG80egJ7dwMWG%2FfDlA2yH8ljmqGlnFK8qJxx%2BfqqycIJmCV7GP%2FR6m6IbVY3FPB8gT66SI1rnUa%2FKFkR9LFXwESYqV12jZ2pxUx5t5rm7UgUTRHUdp9bp2kNTL8qOMAQK%2FeZQyD4sdVOzdjp9IofDGyzI%2Bn6h4l1BA5WV1c2O9PLV3KR7O2JOwfAiuTXmxzLArM0qmDjRNoZsUn6HGfTPYJ%2F5I4bJ0uZ4qf0hhzywdvtr%2BlGJfoUAHIwl2g2r7N21CCqifcjSsYwt3E1hcj9pRlVxY%2BnGnuOA%2F5oQe3o0kstH1YE09nIWv2%2F%2FeRFDDfUsbEjW13XPz%2BlVxyFjy5Us9CjOkCESIo3o3wJOw9gOhx%2Bp%2BinhYHJMUr2T3u4swJF5aYDWy4q%2BEhJxNFV2LREP9n5%2BbSbSJukyK%2B2MkhHFlO9L2uVcQX%2FvbX1duRQkm0k%2BIDRu63kon%2Fnmxgjh4Z36DeL8BH1LsKyWXM3zW02Zz2hN5a4JVtlZ2esz%2FQ%2B8TvwkWr5iP%2B2sE7oGW4iB5SbnvlUXMMjIygTpc64Yq61z6oYRVX3We%2F7WImYxnyVn9NYqvtpruwwg27ptzoYMLfGisoGOqUB8iBT0vRI8YuZENFpl5ZC7YqyrSaYF00yXqZnUxnSs98EE9FLElP0QB9%2BHpeFWABzBnBynLiCpt21FcI796xTOXaFFpPdoWMBKTetT6J5nZmuyOYDofU5OPqrnJPB%2F73soNBr6WDaU4sHs0iVZ76r39lxUbTvd%2FeSNRSro5XHsnPzncFZpuQEdBfD4v7Ybg%2FvOenRRosJPmO8Bel0BqWfMT%2FTOjJW&X-Amz-Signature=42af0fe5356a89a9e46330cd0848209b30de8da29c91848a0cb11dad61fcb845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

