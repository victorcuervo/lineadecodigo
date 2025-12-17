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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY527C2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM4MFoAMRMpJK049L74m3rarPdd4O%2BWjeo0KqPOYOniQIgaLN2IBwuuoY0CVKcKwy9kygPUggGAZdfTjYdhSeD1foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN1l530RjKvGgyDAOCrcA6Sp%2Bj330EekfeyDaw1yP2fbeh43r4CW16DbQUu2YU5Z2B3zD%2FRuobXQaVqgqVYCZMvI9%2BbhfbBrSKtCXmgJTj7Z%2F7tx79eI1c%2Fl%2FTvVaFhgMHyQUs2dm%2FjOSeDv1xc1FQyQNR3tViABXCBn1TIgQVwA0EtF4FtD8T3eWUL7q%2FKD5gfn1lf6MqP9T9Ttjw1krlNshFhpmwdskf2zu7R0%2FDyPiNsCjRbOosbAJue0fKl7u%2FjkKgoBKUMkL9HOcmAbLWeyoP5CrpoXRkZJEaHFBtspRKHOwgoFvPkSvmEceaXOg4NtmLOmPpMPT90glH7IkUL3xa4a1rkEdv73NCczorl9WQRDQhd5lNLYoXdAlcR5cQzUMcAGBvwjaZCoPGTYXwHdPT%2FnWBlSrwx8HAnb%2FiDn6Qd2tdnVDVix0E70so5oc3GNnxBhM%2BDwr4gwbYw0b%2BBOzXz7BhBJV6XjYiBROt2Y08B4Uvkgu7tPx1x%2BtiUnT3%2FjgOYXOAv83S08zGrsOyEkg0A82l%2FxeGQ%2F2S3RtaoRURT%2Fmmk%2FpwGw2OriX3Fag7zzKlFBWvOEUBkm3VJzBI3wj3OdxVBZfeB1tjP5y7Gdlu9CU6Oi1amZtsOK0BetfB5woaMoboIlMW1lMPDhisoGOqUBK7oxnLl5vgB2tmAHNL95LrcZMFUNEBvZVgB7vJOmkH3ma3Oh4oyAmNiza%2FO3O5MfZnSPnnd33JZ9izv7Cb0uLEu9dJv4K80pNkRMvFm160RCTMCh2rIunLzkSnEB49qVHQAGVyn%2FbRd%2F1PiHzf9eQp0w2SBpEG5OsA1JxKrutIijeuvAbLAZbCDqaGW5lktgL2MmKdMuRHq5phXPNPSKI3tq5Vp0&X-Amz-Signature=727852d6e9ee95ba7795f85f4942d26da5f965375acc29689736be0da9d91658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY527C2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM4MFoAMRMpJK049L74m3rarPdd4O%2BWjeo0KqPOYOniQIgaLN2IBwuuoY0CVKcKwy9kygPUggGAZdfTjYdhSeD1foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN1l530RjKvGgyDAOCrcA6Sp%2Bj330EekfeyDaw1yP2fbeh43r4CW16DbQUu2YU5Z2B3zD%2FRuobXQaVqgqVYCZMvI9%2BbhfbBrSKtCXmgJTj7Z%2F7tx79eI1c%2Fl%2FTvVaFhgMHyQUs2dm%2FjOSeDv1xc1FQyQNR3tViABXCBn1TIgQVwA0EtF4FtD8T3eWUL7q%2FKD5gfn1lf6MqP9T9Ttjw1krlNshFhpmwdskf2zu7R0%2FDyPiNsCjRbOosbAJue0fKl7u%2FjkKgoBKUMkL9HOcmAbLWeyoP5CrpoXRkZJEaHFBtspRKHOwgoFvPkSvmEceaXOg4NtmLOmPpMPT90glH7IkUL3xa4a1rkEdv73NCczorl9WQRDQhd5lNLYoXdAlcR5cQzUMcAGBvwjaZCoPGTYXwHdPT%2FnWBlSrwx8HAnb%2FiDn6Qd2tdnVDVix0E70so5oc3GNnxBhM%2BDwr4gwbYw0b%2BBOzXz7BhBJV6XjYiBROt2Y08B4Uvkgu7tPx1x%2BtiUnT3%2FjgOYXOAv83S08zGrsOyEkg0A82l%2FxeGQ%2F2S3RtaoRURT%2Fmmk%2FpwGw2OriX3Fag7zzKlFBWvOEUBkm3VJzBI3wj3OdxVBZfeB1tjP5y7Gdlu9CU6Oi1amZtsOK0BetfB5woaMoboIlMW1lMPDhisoGOqUBK7oxnLl5vgB2tmAHNL95LrcZMFUNEBvZVgB7vJOmkH3ma3Oh4oyAmNiza%2FO3O5MfZnSPnnd33JZ9izv7Cb0uLEu9dJv4K80pNkRMvFm160RCTMCh2rIunLzkSnEB49qVHQAGVyn%2FbRd%2F1PiHzf9eQp0w2SBpEG5OsA1JxKrutIijeuvAbLAZbCDqaGW5lktgL2MmKdMuRHq5phXPNPSKI3tq5Vp0&X-Amz-Signature=2812edb5a32b90e7a1bfca2387349db758d9bd2dcfde15c7ba899f950af98381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

