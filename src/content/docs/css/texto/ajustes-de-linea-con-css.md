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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMGFARU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJe1vOADHzUIQDNS8LRjpprI%2F1weWBykO6ALNrODPMDQIhAOSDhbKOxCdEMNCAsXylqplSE89Kj6Decvv7qjcxltl7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvoDR3A0rHJsL2E%2F8q3ANwiG8dndqP3SNn%2B8KkUPFxAtCroIzGLwyHxRXK9saXfYEKQz6Ljw%2F7Nk8Ed2laB4jGuYl43nsWqsf5gWv%2BFJXqqr09GKbgsxeDnZKTPalWTOk0W7DoVzh2bxiqdWVpEu7EYH5sdQ4cznkRH%2BWHEqlKsYHY1FL8QUdFaPsQV2%2BtTwIl8toqfn7RN2se5KgkUsut6ybF%2FLCmDHftxbItIKoqRL4RBY8IIZOMoh6c9snd2yvNfcMbPK83D8eoovKZXE%2FOy90A%2FnKn4tqLGz3h%2B%2BIzXtDr1IeqSG27Et1Vax2lhQDVHx%2B%2FUuQA9ztJN7bbjWCcgN2WPVgsbJIXftp5Tn7otR6cTPTyYQt7OLumi%2BHaoYocQfOa66FAtcbxpZlDW023D%2Bk6F0%2BIiCoKpRl5K3GeBHqe90%2Fbh8nPZYKpO0bxy0AJEPQfs64qb3RQBuKxEdVB6EZkYH%2BVr2CJcb8Yr7SdxeXhI9UHDN6Tm%2B5yi0RHJXYvg%2FY0QbQTmmq4y8ip2V79Ye2am1CH0sdbeP2VrSf2hfCPz6r1IW0Wd2s9FFQ%2Fzogr9C%2BTnjW86qgYC4BGtS78nYY6SSCqpnjmoKc%2FzElqACkTy1etoiyCZpvnI7aqdO78rg69eVc%2FNvmW7jDOnovKBjqkAeV3NI1pXVQZbm75misB5%2BXdytK5gsAedriV8pAmS05hwtVtIQUSSe0YVtGG0f1XYAcW1HSGLpz%2FZZnmu%2BsjxIykTySXHtu1%2F0Qs6WHw7d6pM%2Fx74eNPJDrQUS148PwyMLpSmfcGCGChbTVfX8%2BSeLHP0EAHSDVQhU9eDhUnlCXIZEYV8Eb4frYkg%2FRkIYz0GRzkREob%2FSYe3NeWwn8g9%2FXDeuGP&X-Amz-Signature=0b7057687ecc09b2e17ee6952eeae1919868a579dabcab190453816aa5e2bfa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMGFARU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJe1vOADHzUIQDNS8LRjpprI%2F1weWBykO6ALNrODPMDQIhAOSDhbKOxCdEMNCAsXylqplSE89Kj6Decvv7qjcxltl7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvoDR3A0rHJsL2E%2F8q3ANwiG8dndqP3SNn%2B8KkUPFxAtCroIzGLwyHxRXK9saXfYEKQz6Ljw%2F7Nk8Ed2laB4jGuYl43nsWqsf5gWv%2BFJXqqr09GKbgsxeDnZKTPalWTOk0W7DoVzh2bxiqdWVpEu7EYH5sdQ4cznkRH%2BWHEqlKsYHY1FL8QUdFaPsQV2%2BtTwIl8toqfn7RN2se5KgkUsut6ybF%2FLCmDHftxbItIKoqRL4RBY8IIZOMoh6c9snd2yvNfcMbPK83D8eoovKZXE%2FOy90A%2FnKn4tqLGz3h%2B%2BIzXtDr1IeqSG27Et1Vax2lhQDVHx%2B%2FUuQA9ztJN7bbjWCcgN2WPVgsbJIXftp5Tn7otR6cTPTyYQt7OLumi%2BHaoYocQfOa66FAtcbxpZlDW023D%2Bk6F0%2BIiCoKpRl5K3GeBHqe90%2Fbh8nPZYKpO0bxy0AJEPQfs64qb3RQBuKxEdVB6EZkYH%2BVr2CJcb8Yr7SdxeXhI9UHDN6Tm%2B5yi0RHJXYvg%2FY0QbQTmmq4y8ip2V79Ye2am1CH0sdbeP2VrSf2hfCPz6r1IW0Wd2s9FFQ%2Fzogr9C%2BTnjW86qgYC4BGtS78nYY6SSCqpnjmoKc%2FzElqACkTy1etoiyCZpvnI7aqdO78rg69eVc%2FNvmW7jDOnovKBjqkAeV3NI1pXVQZbm75misB5%2BXdytK5gsAedriV8pAmS05hwtVtIQUSSe0YVtGG0f1XYAcW1HSGLpz%2FZZnmu%2BsjxIykTySXHtu1%2F0Qs6WHw7d6pM%2Fx74eNPJDrQUS148PwyMLpSmfcGCGChbTVfX8%2BSeLHP0EAHSDVQhU9eDhUnlCXIZEYV8Eb4frYkg%2FRkIYz0GRzkREob%2FSYe3NeWwn8g9%2FXDeuGP&X-Amz-Signature=4a35ad694d44c77fa2f90154ea0a847a8f9a95ef6b5bfa60ccd61ca278246987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

