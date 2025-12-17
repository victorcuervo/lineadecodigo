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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4K6Q2SW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3nq%2BeEOlX8KeBxUsLuzbXfH3ZSNobr7R2QgOmiGFROQIhAPaP4Asp7lILRYXQvtBGNrakVc4i6A1AcCz7EwiyPD3xKv8DCHoQABoMNjM3NDIzMTgzODA1IgyU8oaPxCa0ovs200Eq3AOyNk0uFVISwMNooHcCCCaZdsNWIfLINSEZIxOQGgDqy8DbxEzC7K8wggVrKfz2shQzGtLKYGw%2FMzCl2f3qf8nl05xzRovayhTDoz7RIE04YXQ%2BEurYqHLw%2F3GZyQ3e4f1hpm8Uv63Xe0ux0PxvNE8LGf4Je9AJvTGUKLFcJiOGNUrIFYzGXOREdXmt6TOvGZVbjIAsPKTFPSbd4rJaaA1ZuBWTBVFWi40UuI6p9Wjob2eDC99IpXrZN5%2FwTmSJDgovfQ4MUN%2B2wkTEvaGR9VroHyhLmzhYXiATHnThlQpyip0M%2FVYWtw3rSt8df666ecHx6bL2jhf3uzLTP8S%2B%2FDnJhQOfsI4tnUzrgsbGo2HCcbev7UNGrf9mNsuM1hsivyovrtKpXA%2FEM1cKFJMU%2BwDYt%2FsRQgMvsZYFAOpx9f4meWYsukvaFSAWO%2FU0E37pRw8LEA5nlLq40xPvFM2BsDOmmzQEXL1wc21zrRL3nwPTRp%2BORlRK9hyn2Sd%2FRJ0VfEnhN6D4lnFfQX2AmEU7U5hew97NtQihqMC6hQz8TCQG0GWMqux%2Fs6zn8c4sl2rt3qqjgpVlDIpEaCI04TbsDXEeEIA4LHKXGgWb%2FtViaKbkFMOTGN9FRWMBIXRZMDCM0onKBjqkAZKBkiRex7bWXDUXNOtJoayxUDZKtwO26PCB2hbSCV0ebgxc1aC%2B4UAgGiQJxJx82UJ6yyBCeIXCFLuZVbWnzfVQGE8cTZtsXSlEBBcsOLROAAiC4knMPsBzGVR9%2BfAqBYmIbdPXuTquANgMQfK7jd5NYQeZeu%2BDdYeSu1cVayD2RwZxmNObNyBxBfdxT3bzBG3M%2B1RgONu2wz5tbTfdfpN77fUC&X-Amz-Signature=6a135c1f79f56ecdeadb544932403f1ec24b32af6589544fd836a4ac631dd994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4K6Q2SW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3nq%2BeEOlX8KeBxUsLuzbXfH3ZSNobr7R2QgOmiGFROQIhAPaP4Asp7lILRYXQvtBGNrakVc4i6A1AcCz7EwiyPD3xKv8DCHoQABoMNjM3NDIzMTgzODA1IgyU8oaPxCa0ovs200Eq3AOyNk0uFVISwMNooHcCCCaZdsNWIfLINSEZIxOQGgDqy8DbxEzC7K8wggVrKfz2shQzGtLKYGw%2FMzCl2f3qf8nl05xzRovayhTDoz7RIE04YXQ%2BEurYqHLw%2F3GZyQ3e4f1hpm8Uv63Xe0ux0PxvNE8LGf4Je9AJvTGUKLFcJiOGNUrIFYzGXOREdXmt6TOvGZVbjIAsPKTFPSbd4rJaaA1ZuBWTBVFWi40UuI6p9Wjob2eDC99IpXrZN5%2FwTmSJDgovfQ4MUN%2B2wkTEvaGR9VroHyhLmzhYXiATHnThlQpyip0M%2FVYWtw3rSt8df666ecHx6bL2jhf3uzLTP8S%2B%2FDnJhQOfsI4tnUzrgsbGo2HCcbev7UNGrf9mNsuM1hsivyovrtKpXA%2FEM1cKFJMU%2BwDYt%2FsRQgMvsZYFAOpx9f4meWYsukvaFSAWO%2FU0E37pRw8LEA5nlLq40xPvFM2BsDOmmzQEXL1wc21zrRL3nwPTRp%2BORlRK9hyn2Sd%2FRJ0VfEnhN6D4lnFfQX2AmEU7U5hew97NtQihqMC6hQz8TCQG0GWMqux%2Fs6zn8c4sl2rt3qqjgpVlDIpEaCI04TbsDXEeEIA4LHKXGgWb%2FtViaKbkFMOTGN9FRWMBIXRZMDCM0onKBjqkAZKBkiRex7bWXDUXNOtJoayxUDZKtwO26PCB2hbSCV0ebgxc1aC%2B4UAgGiQJxJx82UJ6yyBCeIXCFLuZVbWnzfVQGE8cTZtsXSlEBBcsOLROAAiC4knMPsBzGVR9%2BfAqBYmIbdPXuTquANgMQfK7jd5NYQeZeu%2BDdYeSu1cVayD2RwZxmNObNyBxBfdxT3bzBG3M%2B1RgONu2wz5tbTfdfpN77fUC&X-Amz-Signature=4c1aa31c413b13f6323a4a31b91caf4140d9a7847a734e27bb3cbafc3753297d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

