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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTU5YPW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwqdpIwSQZxNp04oUurLszJn18mwbcPgeQTMKiMpcnxAiAXEWf3s1soLeeDb26mP%2FXGcoe3bMbZQdWlz%2FskRC10yyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJrG4GodCaC5qwzUKtwDePqwtyVEtqww9UJLXueOTVHT5FabqFIIyoFqgMpoLDspXbVKZXDp4n9XHRBaPEbQ%2BbB2%2B26FshBpPDTMxoSeQAP7ZKquJx%2F%2B1Gw1F%2FAnvwjNWX1ffTv4hOHy3Gvz7670UY6X17wm9MZjonaLRk1omY2%2Bi3KXzdTN1AWGVl3bFtxOl9I%2BV4sNnt430ykE00t8Q72PWC88%2BRsOZjlK2KDoyUta2xkyZESUCsp1rtbBbEFIk85lnNA8ZhcrTFCPjafRUZNguDPTosbw6%2Fo5QrV7EyNR7TzbkuCg7IR5emJp%2FyRuk%2Fk6dAWQknyGg5NFC%2BxDelUeOlHtIM6D0V0dBguVfYYWlK7%2B%2F2ugC8%2FKySvY2a9eCDbV48x%2BjzLdOmxkaM542v5BXCR8qTVowb7Hk7v4DJYQIASKNqzstvnzUr8gZGXx8l4%2FubZqJM8ecoIizGVp%2Bef15D9LN8DV8KgPgzCuChBTPCUNwcQmss2cWkZ1UzXtC7ROZt084llyXhLhEXS99%2BqqyHkLXg2tsOKn4Y%2BHLvOpR%2FTAL3cU%2BnQ2S8IWge5EtsecLLh2JGC6l44265jPpALgTYiIyVe9hRw3to6rCqlM5ZQFy%2FX%2BCMZ5SgR%2BM7nZw06vjY%2FZybKtEPAwnp%2BLygY6pgGu13oEehFF0pck7bUat%2BVBTkGc%2FzkaRTvZFOOfUSMniW%2BBk0bOzeTwsyB6Hc2GMvKLTUVgrCGQSjuIjh1jJQG7eAtVTmo116FcDtOd2m3A%2Ba6NmAymI7cjyAYSL1YwqYX5GGCmoBt%2BSfWyINiCornmDL%2BACdWav%2Bn94dR%2BjbUatg99vOVuHaNlqEz5l%2FwKTvXYIO2Yq751FN1FF9NcazzeL3Il8lqg&X-Amz-Signature=325bd78ddc20d0952c4f517fb4b958b506dec165e377dc2d0877f21da082489f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTU5YPW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwqdpIwSQZxNp04oUurLszJn18mwbcPgeQTMKiMpcnxAiAXEWf3s1soLeeDb26mP%2FXGcoe3bMbZQdWlz%2FskRC10yyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZJrG4GodCaC5qwzUKtwDePqwtyVEtqww9UJLXueOTVHT5FabqFIIyoFqgMpoLDspXbVKZXDp4n9XHRBaPEbQ%2BbB2%2B26FshBpPDTMxoSeQAP7ZKquJx%2F%2B1Gw1F%2FAnvwjNWX1ffTv4hOHy3Gvz7670UY6X17wm9MZjonaLRk1omY2%2Bi3KXzdTN1AWGVl3bFtxOl9I%2BV4sNnt430ykE00t8Q72PWC88%2BRsOZjlK2KDoyUta2xkyZESUCsp1rtbBbEFIk85lnNA8ZhcrTFCPjafRUZNguDPTosbw6%2Fo5QrV7EyNR7TzbkuCg7IR5emJp%2FyRuk%2Fk6dAWQknyGg5NFC%2BxDelUeOlHtIM6D0V0dBguVfYYWlK7%2B%2F2ugC8%2FKySvY2a9eCDbV48x%2BjzLdOmxkaM542v5BXCR8qTVowb7Hk7v4DJYQIASKNqzstvnzUr8gZGXx8l4%2FubZqJM8ecoIizGVp%2Bef15D9LN8DV8KgPgzCuChBTPCUNwcQmss2cWkZ1UzXtC7ROZt084llyXhLhEXS99%2BqqyHkLXg2tsOKn4Y%2BHLvOpR%2FTAL3cU%2BnQ2S8IWge5EtsecLLh2JGC6l44265jPpALgTYiIyVe9hRw3to6rCqlM5ZQFy%2FX%2BCMZ5SgR%2BM7nZw06vjY%2FZybKtEPAwnp%2BLygY6pgGu13oEehFF0pck7bUat%2BVBTkGc%2FzkaRTvZFOOfUSMniW%2BBk0bOzeTwsyB6Hc2GMvKLTUVgrCGQSjuIjh1jJQG7eAtVTmo116FcDtOd2m3A%2Ba6NmAymI7cjyAYSL1YwqYX5GGCmoBt%2BSfWyINiCornmDL%2BACdWav%2Bn94dR%2BjbUatg99vOVuHaNlqEz5l%2FwKTvXYIO2Yq751FN1FF9NcazzeL3Il8lqg&X-Amz-Signature=ce2d2bf137aa8594ed02cb26088465fae8d698b718a2286614cee1533ce8e1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

