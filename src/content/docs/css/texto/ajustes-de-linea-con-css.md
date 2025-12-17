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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6HMXCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDd9kc2eEOTLpk75uFChm74H6rW2SiAvBXZRiHrF8FEAiA3XFv%2BJeZvV0%2FyH6voCgL5GgHlkjeIWNHM8kxf6HE4ESr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMS2RLFi9HQgvBCrOeKtwDSMyipmDuVzmW9NtwGMuxhp47vS82TDUm%2FiWLMy%2F%2Bq%2FhXhZ9sJArrgIZRulLYcraxd8tH16UPvaGgiGz6ryZ3ZdEKQcCYYpk2CiEJS%2Buy3fcnuQc2MwCanr0q%2BWzZENefrkTl7MuwitJ2AI5lwPbdVrMXoThKBFKaUk%2FKLNnjf6zyGEezr3oV0i14mIg1LCNNWvzJP%2BpY7mb0iLiR%2FsIdxl44jB8eyAwadoOasZHZwpb6xVQBF5TY97jUDiM1UQuyuwcl%2FgAW40OD5KkRO27POBnkE7gBzWDL5aRSKoNHZNxhR5NyvY2obUp6ktztBNzkFNcRDLQatizwMlJ0MCLlQh8jwac6RDIU5bp5qKnvtUqcUDrVxvzhKpdBFj%2B9qH11l%2FtU5WSvRmBS1XhDItATxNGSRXh81qoWtgsFLKg9s9%2BSqyqBQAiRRlG0ewLrr372PlXIcT1R2OBPtlUDHAOKekqaML9%2BZlLbCB8ORLTlBAg53f8AQiSgUK4o0kf0%2FIpxVXwoiVIdEbygCvtuL0XHrBIo4US9RsMOeN2sZJmMhUrszrdlDSg0tpELQpmTdI1sH3MBtFSaykx2G3d7v9cBBsxeFCGR5Aaa%2BxyLxA8Xf5MTbU9%2BHjGw6%2FfVEDkwn7iJygY6pgESOyXTM%2BC1eNZCA0o%2Fbfz%2BuZV9hySI5eyPiGw6AjDGBAO%2BOBNwXemlMW0ZmWSD2d%2FSQmpGYNYJhI2hu1GRRxjxtMcxOSoFSu6hwZFUfbEPYzbJ%2BLaxfwuNqqnjW%2BBDzKz0182bZ2%2B%2Ba6T1d7bnP4FsnycFhWlwj7YzdI6hUHo1BwdyR24gXbd4ioS6Qajzz97ajcI4h4Wt8FcTVFMNFDmcGCNUObrx&X-Amz-Signature=5f1175511d8f7b56788b25c86e9e72460e3af18c4bd9ca4e728dd2a2bffc2690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6HMXCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDd9kc2eEOTLpk75uFChm74H6rW2SiAvBXZRiHrF8FEAiA3XFv%2BJeZvV0%2FyH6voCgL5GgHlkjeIWNHM8kxf6HE4ESr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMS2RLFi9HQgvBCrOeKtwDSMyipmDuVzmW9NtwGMuxhp47vS82TDUm%2FiWLMy%2F%2Bq%2FhXhZ9sJArrgIZRulLYcraxd8tH16UPvaGgiGz6ryZ3ZdEKQcCYYpk2CiEJS%2Buy3fcnuQc2MwCanr0q%2BWzZENefrkTl7MuwitJ2AI5lwPbdVrMXoThKBFKaUk%2FKLNnjf6zyGEezr3oV0i14mIg1LCNNWvzJP%2BpY7mb0iLiR%2FsIdxl44jB8eyAwadoOasZHZwpb6xVQBF5TY97jUDiM1UQuyuwcl%2FgAW40OD5KkRO27POBnkE7gBzWDL5aRSKoNHZNxhR5NyvY2obUp6ktztBNzkFNcRDLQatizwMlJ0MCLlQh8jwac6RDIU5bp5qKnvtUqcUDrVxvzhKpdBFj%2B9qH11l%2FtU5WSvRmBS1XhDItATxNGSRXh81qoWtgsFLKg9s9%2BSqyqBQAiRRlG0ewLrr372PlXIcT1R2OBPtlUDHAOKekqaML9%2BZlLbCB8ORLTlBAg53f8AQiSgUK4o0kf0%2FIpxVXwoiVIdEbygCvtuL0XHrBIo4US9RsMOeN2sZJmMhUrszrdlDSg0tpELQpmTdI1sH3MBtFSaykx2G3d7v9cBBsxeFCGR5Aaa%2BxyLxA8Xf5MTbU9%2BHjGw6%2FfVEDkwn7iJygY6pgESOyXTM%2BC1eNZCA0o%2Fbfz%2BuZV9hySI5eyPiGw6AjDGBAO%2BOBNwXemlMW0ZmWSD2d%2FSQmpGYNYJhI2hu1GRRxjxtMcxOSoFSu6hwZFUfbEPYzbJ%2BLaxfwuNqqnjW%2BBDzKz0182bZ2%2B%2Ba6T1d7bnP4FsnycFhWlwj7YzdI6hUHo1BwdyR24gXbd4ioS6Qajzz97ajcI4h4Wt8FcTVFMNFDmcGCNUObrx&X-Amz-Signature=890eca13a4daa19ff1c2fad681bc88e84bf66f4e9c36b5853939cf09335cfeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

