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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZX6CYJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwuvSAi6y6zlKg4f5dsmSKJTVdroY5iOizSFhgfpvcAIgJM7SahfZPziyAVULNrgSXGefWruUHoEkpeeq2v0Nkg8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP%2F2cWsGXC%2FA%2FVaBhSrcA03iovXo0fl7gr6CxoUcciZnv%2FGC22tK%2FKaYuH8BqdrA8p6tvZfrVnds9kGHQglGmcuQhBTvgT%2Fdj8%2F2mTAxK%2FDkbhQCHR8hcRJdStl%2BjVQkKxj%2F2GrNmQElzEMQGSvFo4cK%2FvYtqiuI%2Fz3kHuNlNu8YQMHlcgbRSKiyggvX%2BfSey9YsQ2fBvwrajmhfskxpwbWC072SMcK%2Fh2b9r4nTCV%2Bg%2FF4QSElNNX3WFCAXSAqjCEREIAli74%2BttbmOOT2kX5NsIGkl7LkybYq9AV3wRXepD3DxXEVtJFyD7yph8FurypY28hDQD4p6wW3sxnt2Vpl65cGlg1daE9ijScrqi5144yKzDDOukHsMY93CBP7jMHPmPn0spJWdkGbU1IhM1zfqOT%2BRG0vVfgV92PHYJHD5rkEO2nNTBwSwna4z6UpM1juXWZ2e7v9Y8uKZ6yOyrATPbjcG6Zbtr72H6E0KZumB1ojoBbh0n5OjVCtb0pLDl5IlX36EEAjilpX4TrSuyFhL7eDTyZTIMp1ANa0jR8WVjT87%2BlEvg4J0Ig0KU8ZMWpr%2B4MuO2RvinM0ebDYV%2Bpo5dyfhrt3XAOC%2FYNqlBIKxKRDtRzz5pcD3EXWZvpfaqoAvYixQhCR53NXNMJbfh8oGOqUBTqgK3HHUwDjDfTAOeJ5bbzmgDbJ7qlmoEFtdqzZzniSPCN7C8Zab6KfF%2ByVde7lbkr6loFpgHmBSK9Pj%2FD%2BO%2F4a0f6md8bsHlcWBKgCXnQ8plh0F3DFDuLjow5%2BVf4Wx2kWBypqaNwe435X7sz8H0B1r%2BHYnP16DH9kAgqoVhM9OvOGUiscGopvMAep%2FIKI8%2BeeYvGXldxT1HY3fpmYD7fxG8UTm&X-Amz-Signature=9a91f398d811d83ffd5b5a2f971ef70f63b358069f05c76ea779acfb10fbd687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZX6CYJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FwuvSAi6y6zlKg4f5dsmSKJTVdroY5iOizSFhgfpvcAIgJM7SahfZPziyAVULNrgSXGefWruUHoEkpeeq2v0Nkg8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP%2F2cWsGXC%2FA%2FVaBhSrcA03iovXo0fl7gr6CxoUcciZnv%2FGC22tK%2FKaYuH8BqdrA8p6tvZfrVnds9kGHQglGmcuQhBTvgT%2Fdj8%2F2mTAxK%2FDkbhQCHR8hcRJdStl%2BjVQkKxj%2F2GrNmQElzEMQGSvFo4cK%2FvYtqiuI%2Fz3kHuNlNu8YQMHlcgbRSKiyggvX%2BfSey9YsQ2fBvwrajmhfskxpwbWC072SMcK%2Fh2b9r4nTCV%2Bg%2FF4QSElNNX3WFCAXSAqjCEREIAli74%2BttbmOOT2kX5NsIGkl7LkybYq9AV3wRXepD3DxXEVtJFyD7yph8FurypY28hDQD4p6wW3sxnt2Vpl65cGlg1daE9ijScrqi5144yKzDDOukHsMY93CBP7jMHPmPn0spJWdkGbU1IhM1zfqOT%2BRG0vVfgV92PHYJHD5rkEO2nNTBwSwna4z6UpM1juXWZ2e7v9Y8uKZ6yOyrATPbjcG6Zbtr72H6E0KZumB1ojoBbh0n5OjVCtb0pLDl5IlX36EEAjilpX4TrSuyFhL7eDTyZTIMp1ANa0jR8WVjT87%2BlEvg4J0Ig0KU8ZMWpr%2B4MuO2RvinM0ebDYV%2Bpo5dyfhrt3XAOC%2FYNqlBIKxKRDtRzz5pcD3EXWZvpfaqoAvYixQhCR53NXNMJbfh8oGOqUBTqgK3HHUwDjDfTAOeJ5bbzmgDbJ7qlmoEFtdqzZzniSPCN7C8Zab6KfF%2ByVde7lbkr6loFpgHmBSK9Pj%2FD%2BO%2F4a0f6md8bsHlcWBKgCXnQ8plh0F3DFDuLjow5%2BVf4Wx2kWBypqaNwe435X7sz8H0B1r%2BHYnP16DH9kAgqoVhM9OvOGUiscGopvMAep%2FIKI8%2BeeYvGXldxT1HY3fpmYD7fxG8UTm&X-Amz-Signature=5ef34ede159b8807c48e0995c4d4fb02c5ced7d35b01490683f8930eb8cff57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

