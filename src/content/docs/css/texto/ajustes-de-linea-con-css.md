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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5RXOKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuEAK6kUccNuMdYAq%2Fxu34GZy4OTrAfjX5krZPRcLiUAIhANCzaQKZGbkaQxWV34IgKI5PUDEDX2ta2fVDqwo3eJs6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyMG09EuAgG2J%2Br9vIq3ANdIWPrYQBL2%2FYkt8u3z%2BHA2dy%2Bv%2B%2BIXe5UsXSLflHR%2BPH9gB2qtH8MDOekAZaeVtYmd%2FDHGk2MypzjXdSVUTyQvzH%2FGeaSAU8j2bYiqM%2FJihVEyJKfGdVrogEwUxUTRZgID4K9io34%2Bb0rPoopFq8mVVSOmm8ZZy8tHQScrgm12jL2J3yt2ffAQMHO75w2ODNRh67Stnda7wRjwdRRifRVNhdrv935BIwqLDEtmT4Zul7euqi7NV5yjdGT8tWvkQhf4erCh%2Bpr7e1aTRJXZZy6PR7Xh8yyjauEsubbgWhKD51gKQVcaIFSUJDAQO4ENx3LIEcFgCaz%2BzW3M7I0igd%2Bb8mjaxowq07TQ7cEyX2rVNBWdRx3%2BiJ9HTG35Dn6DJeYaZw5l3Qm3DPSQBDwdkZPRax0yreXmvoSF59htq3Q38%2F%2F4HuyJvkft46Od2kFOQzBf36aYL%2FBjaoCbLYHFlxs%2B8Em%2FE%2BdAgnPI2y6XS1zVDOawvhYj5L1mtAq%2BLXqIpz%2FsUkhpzbj4HTynG%2F8u59cKm1ovyBgFRxoH%2FTA5iBVaQqUbergYvBJL7HsGrRs6NqOCZMndEx%2B2dzZ7rZZ54ytHosOjhR6lvHlzRNaZtYqWmzCmtS%2Fl6tHxKBWzTCQz4jKBjqkAcb5%2BWunScyJxCcwyrssnRv8enPV8MVVEmU%2BhALygnFkiRc%2Bn5eqycZ8YZSvkxP4x28Rav6r%2BCcIs%2BNJ%2FBWr21EEqcuFT3d351zmpBLb2VYOC28R1x6n4h%2BxQgBBiw5U4OwNxKIkYBGMbGGEH0tX9WbEPEExHAgofU2i5SGpWiyCezz8xooG8w4OJQ0HW9V2WmCMO1g3oi2zukvs%2F4%2BKYzWSFna8&X-Amz-Signature=5b1bd54b3ddf116e673780aa312db8b8e18a18bcab33d81e0faa300ce72ccc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5RXOKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuEAK6kUccNuMdYAq%2Fxu34GZy4OTrAfjX5krZPRcLiUAIhANCzaQKZGbkaQxWV34IgKI5PUDEDX2ta2fVDqwo3eJs6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyMG09EuAgG2J%2Br9vIq3ANdIWPrYQBL2%2FYkt8u3z%2BHA2dy%2Bv%2B%2BIXe5UsXSLflHR%2BPH9gB2qtH8MDOekAZaeVtYmd%2FDHGk2MypzjXdSVUTyQvzH%2FGeaSAU8j2bYiqM%2FJihVEyJKfGdVrogEwUxUTRZgID4K9io34%2Bb0rPoopFq8mVVSOmm8ZZy8tHQScrgm12jL2J3yt2ffAQMHO75w2ODNRh67Stnda7wRjwdRRifRVNhdrv935BIwqLDEtmT4Zul7euqi7NV5yjdGT8tWvkQhf4erCh%2Bpr7e1aTRJXZZy6PR7Xh8yyjauEsubbgWhKD51gKQVcaIFSUJDAQO4ENx3LIEcFgCaz%2BzW3M7I0igd%2Bb8mjaxowq07TQ7cEyX2rVNBWdRx3%2BiJ9HTG35Dn6DJeYaZw5l3Qm3DPSQBDwdkZPRax0yreXmvoSF59htq3Q38%2F%2F4HuyJvkft46Od2kFOQzBf36aYL%2FBjaoCbLYHFlxs%2B8Em%2FE%2BdAgnPI2y6XS1zVDOawvhYj5L1mtAq%2BLXqIpz%2FsUkhpzbj4HTynG%2F8u59cKm1ovyBgFRxoH%2FTA5iBVaQqUbergYvBJL7HsGrRs6NqOCZMndEx%2B2dzZ7rZZ54ytHosOjhR6lvHlzRNaZtYqWmzCmtS%2Fl6tHxKBWzTCQz4jKBjqkAcb5%2BWunScyJxCcwyrssnRv8enPV8MVVEmU%2BhALygnFkiRc%2Bn5eqycZ8YZSvkxP4x28Rav6r%2BCcIs%2BNJ%2FBWr21EEqcuFT3d351zmpBLb2VYOC28R1x6n4h%2BxQgBBiw5U4OwNxKIkYBGMbGGEH0tX9WbEPEExHAgofU2i5SGpWiyCezz8xooG8w4OJQ0HW9V2WmCMO1g3oi2zukvs%2F4%2BKYzWSFna8&X-Amz-Signature=64c2a7ee699deeba3b4785e0a7107c2bf086b3678d21023df1640aba89520287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

