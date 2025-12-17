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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRZXVFOE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD34mdNOrxa5C7UC%2FkR%2BPoiwtXV3gepYI%2FrSCOpeapKAiAZ6rM7EnI3o72fKPuwy7OOLxpEqSYv55GROkyftcOcBir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMD0hUvU0PTLHsDReCKtwDNapUpmDNdixUdyAe1V9hnKt2Xio0mSEww66sxcD3ixvqeAeKaCb6r950isocumZIBJT%2FemH9kquBR4DyX%2FrF%2FdiAXTsTXG3bzCC7uT5QVb15elEr596eFwo4sUMMmMNp6sJMDo7NtDMNxKYDeLCdzftDTNVlECTRrmE9rHt9bUAS64LoreSHHIx8gGomYPg%2FAOiT583vzoGQMyWg9rovxMwS5gsCq%2FcgfOfzGSN%2FoK3yhP%2F5viltMcAN%2F%2FGERVtMNmAPId0n9NzX%2FpV66BLnx2bi2MspaDTSmk2Xvi%2BOgsqpRNcrXXQJdLJvaVUj0zAJkHUR5%2BQpmuZdP4DdiFr869wLoLf4I30%2BR4T0fR5Jme6dXJgeBiRTMSdv42RODzWY%2F%2BC3pe3pKGvdMEiQY7Hkq2x3uJ5rsZcF%2FtB36m%2FjTQOw0yW4AmdL3UMKMJEQzANJ4cOHArCkKEk84zeP%2Fqke%2FtwQpGp1%2BXnJ6srXqplJ0LqEjQIZJmC4LO0tGo5zvJPSmpOUNCkMee8U3WmrPoQ%2BQ72MapZX9vmmfH3tcw%2BB8uQuV3lKF4E0y1UPCpmFMAH6RTU7cQUvIxWyvM1OSuPdpJbKqlpMEL6pivLLDEcgpUHDepxngpEoRnwl90Awi9GJygY6pgGHvrWN2nEqgzXb2lKMMVFhMNty%2BbTUFFbuVzaE9Ba0dmWyopUlOCpBWqV83HoWgLoLNsmWU2Syg3mEjQZbKzxqdp2YFyfxb60%2FRIS54DbPuMnNQKxv2BrF3R3IVQUBd1EXujkyJ6advb2Wy4CKI5Xjs%2FvkD4YG4IZm%2BGBbzq2U1zAxqcGiOQOj893xDXeHlNj2OxMyYrzOp%2FjKsPYXT8RCfrTgALOx&X-Amz-Signature=ae786d3bd3b3f9e2f2ee45f54841e5be0955f870ba07b5d10cb54270aef187d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRZXVFOE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDD34mdNOrxa5C7UC%2FkR%2BPoiwtXV3gepYI%2FrSCOpeapKAiAZ6rM7EnI3o72fKPuwy7OOLxpEqSYv55GROkyftcOcBir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMD0hUvU0PTLHsDReCKtwDNapUpmDNdixUdyAe1V9hnKt2Xio0mSEww66sxcD3ixvqeAeKaCb6r950isocumZIBJT%2FemH9kquBR4DyX%2FrF%2FdiAXTsTXG3bzCC7uT5QVb15elEr596eFwo4sUMMmMNp6sJMDo7NtDMNxKYDeLCdzftDTNVlECTRrmE9rHt9bUAS64LoreSHHIx8gGomYPg%2FAOiT583vzoGQMyWg9rovxMwS5gsCq%2FcgfOfzGSN%2FoK3yhP%2F5viltMcAN%2F%2FGERVtMNmAPId0n9NzX%2FpV66BLnx2bi2MspaDTSmk2Xvi%2BOgsqpRNcrXXQJdLJvaVUj0zAJkHUR5%2BQpmuZdP4DdiFr869wLoLf4I30%2BR4T0fR5Jme6dXJgeBiRTMSdv42RODzWY%2F%2BC3pe3pKGvdMEiQY7Hkq2x3uJ5rsZcF%2FtB36m%2FjTQOw0yW4AmdL3UMKMJEQzANJ4cOHArCkKEk84zeP%2Fqke%2FtwQpGp1%2BXnJ6srXqplJ0LqEjQIZJmC4LO0tGo5zvJPSmpOUNCkMee8U3WmrPoQ%2BQ72MapZX9vmmfH3tcw%2BB8uQuV3lKF4E0y1UPCpmFMAH6RTU7cQUvIxWyvM1OSuPdpJbKqlpMEL6pivLLDEcgpUHDepxngpEoRnwl90Awi9GJygY6pgGHvrWN2nEqgzXb2lKMMVFhMNty%2BbTUFFbuVzaE9Ba0dmWyopUlOCpBWqV83HoWgLoLNsmWU2Syg3mEjQZbKzxqdp2YFyfxb60%2FRIS54DbPuMnNQKxv2BrF3R3IVQUBd1EXujkyJ6advb2Wy4CKI5Xjs%2FvkD4YG4IZm%2BGBbzq2U1zAxqcGiOQOj893xDXeHlNj2OxMyYrzOp%2FjKsPYXT8RCfrTgALOx&X-Amz-Signature=70d681d3bec81890834206a6ebd99ac35e15a8a4517fdfd488588e3bf78166d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

