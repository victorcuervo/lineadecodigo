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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY3MFZJ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC0A9gcxk8LfB6jucCaSfn%2FhsVMnPdJS%2B3pTWiUYfUXgIgGExWJQGjSklA20T98GUPlWyeNH8upu%2BPeYB1xekrI1oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIgmYDqQpPwYHKFYEircA5Te7%2Fu604ncMeptDRcxa311%2FYJovRx6mwLS7pMaOvz7UB8uwNMOxx0yZ46QP8VywbpSXaeVG8Ifs1q7ZTBTOJ3lNkwcUpExnqfANVbqlNwZBMKiDgj6OygHGLTqbRps%2BR7OgFv1APjIaePvTS3zcXFNsMGRjoBcre6%2FyORh5vK8gFrC7%2Fbt4oyWSCrZ%2BEAuCXpcS%2Baqyy9D4wK1nAKGncxwlkX%2FmGnBQlGWcmDQcZ146Qnd%2FspNTOTt6B5HrsqkQEw1g5y6Mc%2F%2F6M4%2B9A%2F77yrbqecfDRknCrn7uvNF9QE4UJvZabXeU7PmsLs42wEBbzZpcXMq7fUoG2MeMf%2Fvy7tLFLfSHj1qU70Ox66EykFJQF%2BlxCfplk%2FuFzGTwNt%2BAkBn07n2Ak5w%2Bj1reTg%2Bn1H55lBNgknKpKq2pWJHpwe9T0KchtZ%2BYPfzRau2XFA66Hg2tokK5INNJGVDMbFkMDfm9rRSXu2PND7Pojpu3IHvVvdTItHPNirab%2B%2BN0P9SI9vmtg7326cFqaeujVx1FvC7f1b0Y0xbWD6qe3UzITJoluwaVr5%2FVcO84CuQ9RD4I6UbflcrK80kwDMYEuzFrnB9sXNJQcgr5b0bdTRnWt2vkrQa2WPZ1%2F7hSusOMP%2FhisoGOqUB1s4tPf4fvoImBj4PZwF%2BWOUsMChAdI8r0yY2aL1SV0prqv3hJIpApaMnW0s%2FFGVBF9XiN8kCxngmucIxGMb1AWp8d9B4Ikwj1pMb89lrWatCDjBk93YC2VwZL2s49P9RQBsXCIieblmetfkgEp%2BnHkJLzZTCPM%2Bt7watE%2Fh5%2FUZNyc8%2BEFX49kwvpl5ZRRZQP%2FJF3LqYoHZTUw4mEeiacKnPfe8p&X-Amz-Signature=8644881bbfe932155c8ca04bf1bacbfcc3beb9733a0ef5672d0f8d81c6a150c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY3MFZJ6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC0A9gcxk8LfB6jucCaSfn%2FhsVMnPdJS%2B3pTWiUYfUXgIgGExWJQGjSklA20T98GUPlWyeNH8upu%2BPeYB1xekrI1oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIgmYDqQpPwYHKFYEircA5Te7%2Fu604ncMeptDRcxa311%2FYJovRx6mwLS7pMaOvz7UB8uwNMOxx0yZ46QP8VywbpSXaeVG8Ifs1q7ZTBTOJ3lNkwcUpExnqfANVbqlNwZBMKiDgj6OygHGLTqbRps%2BR7OgFv1APjIaePvTS3zcXFNsMGRjoBcre6%2FyORh5vK8gFrC7%2Fbt4oyWSCrZ%2BEAuCXpcS%2Baqyy9D4wK1nAKGncxwlkX%2FmGnBQlGWcmDQcZ146Qnd%2FspNTOTt6B5HrsqkQEw1g5y6Mc%2F%2F6M4%2B9A%2F77yrbqecfDRknCrn7uvNF9QE4UJvZabXeU7PmsLs42wEBbzZpcXMq7fUoG2MeMf%2Fvy7tLFLfSHj1qU70Ox66EykFJQF%2BlxCfplk%2FuFzGTwNt%2BAkBn07n2Ak5w%2Bj1reTg%2Bn1H55lBNgknKpKq2pWJHpwe9T0KchtZ%2BYPfzRau2XFA66Hg2tokK5INNJGVDMbFkMDfm9rRSXu2PND7Pojpu3IHvVvdTItHPNirab%2B%2BN0P9SI9vmtg7326cFqaeujVx1FvC7f1b0Y0xbWD6qe3UzITJoluwaVr5%2FVcO84CuQ9RD4I6UbflcrK80kwDMYEuzFrnB9sXNJQcgr5b0bdTRnWt2vkrQa2WPZ1%2F7hSusOMP%2FhisoGOqUB1s4tPf4fvoImBj4PZwF%2BWOUsMChAdI8r0yY2aL1SV0prqv3hJIpApaMnW0s%2FFGVBF9XiN8kCxngmucIxGMb1AWp8d9B4Ikwj1pMb89lrWatCDjBk93YC2VwZL2s49P9RQBsXCIieblmetfkgEp%2BnHkJLzZTCPM%2Bt7watE%2Fh5%2FUZNyc8%2BEFX49kwvpl5ZRRZQP%2FJF3LqYoHZTUw4mEeiacKnPfe8p&X-Amz-Signature=c32ebe49f57af5e21982fc6611b36c817bfcfb9fe66d60c631ba9470495af478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

