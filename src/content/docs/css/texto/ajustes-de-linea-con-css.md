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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHLRLPZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQXhhfXm%2BrDUuv59Xnm91C5XOZaOaSJOLPnwk7L7eRBAiA9eDdsfUZSpfJ92W1aMEZI%2FMApZGv2U1QXqeNQQ331LiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FsHuVIThmYp9I7G7KtwDsON9oMj%2Fo3i6oCd9b2viAdvoKylpQpN1M0j8FghjZohkXoemK0ziBp19sszpGsavAT%2BJZSQLaS1viE8AZAu%2FYmt0Z49hVw0gW4MZtuN%2B8H4R6U5PCqk2Wd4mOYUk8HbISsZh0AizmVCarr0sEUO4PWeyMRKc1Ax%2F%2BICgDAewEqy%2F6VZfh5A7TACj6WMYE2z5GeAJLtfO3vL%2FsL1nujz1l66jeU4AXCWbm5icIXJ91h5xEx8R8b8pf3xSwIWout%2BChNv5qIxbEMlpBTQwkgd30Z94S%2BdEnzigKbLANdMUxCIjMo6wVhHsOMuPFF1DevMWEmxsU1bCMdZsG8nTW3b1I045syjrNburyIfdF6gSpiAbzexbG04Fy0BemK%2BPRa%2F1v0qSpH1D06hv7Q1ob5v9TduXdyukniAUxYCvePFw741sdY55xbIV1PW0LbBg026KvaB%2F6UWYrKqm0pYrYllN814ZpsLIGhIpCa82IM8NMnRBIfzFMhA5TAF1s9scL1ONhjd9CfjizRrXnPHYY%2FmbDn3DgAsrtpGMOcwEIIdUr9URJCtV952H2rmK2VUITUGLg4c3kkaSN6%2FuC11aVNDHCA4VEDpjXrGbHikN40pO%2FijeapAxidnRyzEb0eQw%2F4uMygY6pgHdorDm2JAVEqYPFpqn4CKuzr0%2ByNS5lRtNhD73sy7X51%2F8Py0%2FWz3LreBYEwPIIOWKdj9lfOEu6xm4WDxl4Vasgtanl9wcaT5GCRF%2Fn2yd0Wv7wePRFGYm%2FZDMvnOwXifuzv4lxNxpRO6JJMG1qbNHrn0HKUcIT%2FSyxujXiASLCueioXD3J7f9pce9XJn76O8SIyB71Ll4cfbVM3RJ0IwBqtDhYDCJ&X-Amz-Signature=03d88b03bc6b4a9fb865b493d1c1a423d31f98e22f60398287673a1a13a7edb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHLRLPZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQXhhfXm%2BrDUuv59Xnm91C5XOZaOaSJOLPnwk7L7eRBAiA9eDdsfUZSpfJ92W1aMEZI%2FMApZGv2U1QXqeNQQ331LiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FsHuVIThmYp9I7G7KtwDsON9oMj%2Fo3i6oCd9b2viAdvoKylpQpN1M0j8FghjZohkXoemK0ziBp19sszpGsavAT%2BJZSQLaS1viE8AZAu%2FYmt0Z49hVw0gW4MZtuN%2B8H4R6U5PCqk2Wd4mOYUk8HbISsZh0AizmVCarr0sEUO4PWeyMRKc1Ax%2F%2BICgDAewEqy%2F6VZfh5A7TACj6WMYE2z5GeAJLtfO3vL%2FsL1nujz1l66jeU4AXCWbm5icIXJ91h5xEx8R8b8pf3xSwIWout%2BChNv5qIxbEMlpBTQwkgd30Z94S%2BdEnzigKbLANdMUxCIjMo6wVhHsOMuPFF1DevMWEmxsU1bCMdZsG8nTW3b1I045syjrNburyIfdF6gSpiAbzexbG04Fy0BemK%2BPRa%2F1v0qSpH1D06hv7Q1ob5v9TduXdyukniAUxYCvePFw741sdY55xbIV1PW0LbBg026KvaB%2F6UWYrKqm0pYrYllN814ZpsLIGhIpCa82IM8NMnRBIfzFMhA5TAF1s9scL1ONhjd9CfjizRrXnPHYY%2FmbDn3DgAsrtpGMOcwEIIdUr9URJCtV952H2rmK2VUITUGLg4c3kkaSN6%2FuC11aVNDHCA4VEDpjXrGbHikN40pO%2FijeapAxidnRyzEb0eQw%2F4uMygY6pgHdorDm2JAVEqYPFpqn4CKuzr0%2ByNS5lRtNhD73sy7X51%2F8Py0%2FWz3LreBYEwPIIOWKdj9lfOEu6xm4WDxl4Vasgtanl9wcaT5GCRF%2Fn2yd0Wv7wePRFGYm%2FZDMvnOwXifuzv4lxNxpRO6JJMG1qbNHrn0HKUcIT%2FSyxujXiASLCueioXD3J7f9pce9XJn76O8SIyB71Ll4cfbVM3RJ0IwBqtDhYDCJ&X-Amz-Signature=0f491ee060fc20071a6facf5649375c183c34596a877cd1c468ebd476790afc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

