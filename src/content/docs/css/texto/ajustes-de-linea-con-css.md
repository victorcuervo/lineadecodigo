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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA77EQ35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiLI9dKNhWz48li6ZnfbARdlhC2UbvIRKl%2BigRhtUfVAiBmA6vxaEgk%2Bx3ht2r7Ul0xbThdEFjc%2B5aHNBsdqxeJOCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM0aOYUXkqMnrsouu%2BKtwD8rdhrQDdtWG9Y11woQXSt3l99zic%2FNBrcGMamCObxkvlJ%2BQ4BsYXLh5kaxtcgG%2BRaTnbW%2BmvoI6cXP9hNbvm5po9ut4P7p2uGqWV%2BVyVE2oX%2FdTgOv6bjbzsqOMFq0SKUDeUV6b6mAUX0fAg91tiLb2s07C%2Fkm1Y5%2FREXcM4vrP1tlKiLG0Ju8TIva7gLiMtoE%2FcEwkiGfrua4p3KVlHLE%2FrcVPAGxdf2XhvF14EEWuCasyfRKTe%2FIg%2F4nQOr4PAkHFo%2F1CVAEWtAbPSELvjBcVSyxVV3vLOf%2F1pxSLP7gLl5GPSanUHeMh3cyuz36Jz9aciEhTDK8%2BLdGk8BfdPpHN2n5x3UwDQihnIc8upVxuMTfBVAblSP9yzOLLk5FXZEStIftToeZoSk%2FROjifIGzgAtAgzhNbauyrCLt%2BsnhWyLb1HS0KnVzADDBfxUCLiXU13pnUrrtbUcdQeRioqE29bonBqHYoC%2FCIdfa4a0zhHsGaU96%2BxEbls0rxg1wFULDy0mMIQJcmrFtf7Sfp1S%2FNQ%2Ft6W0QN1VnrT41ZnU9Wp7BPwF1bvAdJmX3lMEt1hQLsw3iCutc4%2B5k2l25vt1nGLgyD%2FVncNdZd3wlggtIyazbGlVjMeDpVib4owi52JygY6pgEFiFf3UknQnbXgluY%2F4%2Bg%2FUWkPR9R%2F%2BlspesU4BUELU1abJlfIEbLYbx2cjE6V0kthIwBRVoXiA2k7MI3jkel1%2FvxwaFSSHJ5rwCNibzzHwvrkN2sXbQ1WVrGgA2IZ7CI3D%2BEI7nh6T6OZYezxKmmYWnUEzF0BcLYVlQ%2FeKoPHg3JE8rUa%2Fm82Qf3Y0EpoAChABnmM4cH9BWpE5k0kw%2FAOrdgf%2B6Eq&X-Amz-Signature=3de6c084a096816c595c48bd6809559bf1e1a42d66d4e64246314b4f3aeac5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA77EQ35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiLI9dKNhWz48li6ZnfbARdlhC2UbvIRKl%2BigRhtUfVAiBmA6vxaEgk%2Bx3ht2r7Ul0xbThdEFjc%2B5aHNBsdqxeJOCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM0aOYUXkqMnrsouu%2BKtwD8rdhrQDdtWG9Y11woQXSt3l99zic%2FNBrcGMamCObxkvlJ%2BQ4BsYXLh5kaxtcgG%2BRaTnbW%2BmvoI6cXP9hNbvm5po9ut4P7p2uGqWV%2BVyVE2oX%2FdTgOv6bjbzsqOMFq0SKUDeUV6b6mAUX0fAg91tiLb2s07C%2Fkm1Y5%2FREXcM4vrP1tlKiLG0Ju8TIva7gLiMtoE%2FcEwkiGfrua4p3KVlHLE%2FrcVPAGxdf2XhvF14EEWuCasyfRKTe%2FIg%2F4nQOr4PAkHFo%2F1CVAEWtAbPSELvjBcVSyxVV3vLOf%2F1pxSLP7gLl5GPSanUHeMh3cyuz36Jz9aciEhTDK8%2BLdGk8BfdPpHN2n5x3UwDQihnIc8upVxuMTfBVAblSP9yzOLLk5FXZEStIftToeZoSk%2FROjifIGzgAtAgzhNbauyrCLt%2BsnhWyLb1HS0KnVzADDBfxUCLiXU13pnUrrtbUcdQeRioqE29bonBqHYoC%2FCIdfa4a0zhHsGaU96%2BxEbls0rxg1wFULDy0mMIQJcmrFtf7Sfp1S%2FNQ%2Ft6W0QN1VnrT41ZnU9Wp7BPwF1bvAdJmX3lMEt1hQLsw3iCutc4%2B5k2l25vt1nGLgyD%2FVncNdZd3wlggtIyazbGlVjMeDpVib4owi52JygY6pgEFiFf3UknQnbXgluY%2F4%2Bg%2FUWkPR9R%2F%2BlspesU4BUELU1abJlfIEbLYbx2cjE6V0kthIwBRVoXiA2k7MI3jkel1%2FvxwaFSSHJ5rwCNibzzHwvrkN2sXbQ1WVrGgA2IZ7CI3D%2BEI7nh6T6OZYezxKmmYWnUEzF0BcLYVlQ%2FeKoPHg3JE8rUa%2Fm82Qf3Y0EpoAChABnmM4cH9BWpE5k0kw%2FAOrdgf%2B6Eq&X-Amz-Signature=82331a9b747b8e90de8c301121884698b99e1372b3acce95554a12c304527650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

