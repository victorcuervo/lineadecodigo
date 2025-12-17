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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47XGCNM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELOB2oxaSL2iIcl9E1XtfCgk%2Bq%2BC5xP%2BpveoTnZru5vAiEAslsQGNfSxCMjiS%2BipztxHhbLe6i7PG72Ki8QYPDXRWoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDAsZMY8OOr5fDbxSCrcA%2FpTN9YJpts0OAqgce4tf7A9R5Q1vMK%2BifxhCVmhRgS%2F8UhzT3Orq3OCGj5%2BUezct9eawce%2BsJNb3crzQHWPGxNmZKWpSobu5ZSPrlMyAkBA55xcK2ADpnI0tRboQdzOnVwAg7IUgqav4xdiIvjw3K4sgxW2fKw2lMkqJRPOjwGIR3oT7zfPaYe9nbQhh4yIeoZkzVaALrNS2OPcoRQYwP%2BGGXd5pVoyKZjub%2FmTj4CXmuVoiwRg5H2CyXLsxJ4CcIif62tQKEmiIsTLkqxv8%2B2cf0ZTP5iOWhY17avvqIFmNV8AsyH6hWVJ21Zat0AvecrYamjgLfcGXTMq4XMyLtNFRQAoHCiyWhQjwLhhFxi%2BjU0cWlXXl2C%2F81S9yrc3%2F7Bkc%2FQkEh7jz485sc%2BWC2vkTu4muetcF4f4wjWKXka5iUJYveGZ5inrAOTjpFKqaLv9fz36xOCnCb4a5g5c%2BCJcDiJyhbDIF3IGA4mhWQY1Vcdm1N%2BRtj5rJ3kafKIRL6koT0BnN%2FiWJMYc5ZTstkDElD31SYPjnI%2FBYDZGz5w9izyjxkQsXILTv21zQXOLZHKLxA%2Fiqb7bSlKXVcobTvJBxL8xsP105hLgxzpgOLznn2jNUFFzlZrX2zDxMMuxiMoGOqUB%2FXBHFjIAhQYNT%2Bv%2Fgwr0eQGhjAV%2BFscVzxUPdVtVaCwMLRDErsPLD8K%2BDguedWjivheGCck6uKewwmfD3rB9rEXuUq7j6I%2Bvc60SIXNTXkIRux1wV%2BdN0mkl1TdDTwQydNdd45zCOu3QoSu4TcUA%2Fs0ZFClm0hARNRtcxC%2FOEw8Quwo9%2BeMIidOHgGvS89Qre32E4GKfs9AOtdbpAq%2FXt05u8aUM&X-Amz-Signature=cc521b89db4d8fb46d9ccde59b11e0d65a68ebc3ee17aa5d3e309d0b0b20dd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X47XGCNM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELOB2oxaSL2iIcl9E1XtfCgk%2Bq%2BC5xP%2BpveoTnZru5vAiEAslsQGNfSxCMjiS%2BipztxHhbLe6i7PG72Ki8QYPDXRWoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDAsZMY8OOr5fDbxSCrcA%2FpTN9YJpts0OAqgce4tf7A9R5Q1vMK%2BifxhCVmhRgS%2F8UhzT3Orq3OCGj5%2BUezct9eawce%2BsJNb3crzQHWPGxNmZKWpSobu5ZSPrlMyAkBA55xcK2ADpnI0tRboQdzOnVwAg7IUgqav4xdiIvjw3K4sgxW2fKw2lMkqJRPOjwGIR3oT7zfPaYe9nbQhh4yIeoZkzVaALrNS2OPcoRQYwP%2BGGXd5pVoyKZjub%2FmTj4CXmuVoiwRg5H2CyXLsxJ4CcIif62tQKEmiIsTLkqxv8%2B2cf0ZTP5iOWhY17avvqIFmNV8AsyH6hWVJ21Zat0AvecrYamjgLfcGXTMq4XMyLtNFRQAoHCiyWhQjwLhhFxi%2BjU0cWlXXl2C%2F81S9yrc3%2F7Bkc%2FQkEh7jz485sc%2BWC2vkTu4muetcF4f4wjWKXka5iUJYveGZ5inrAOTjpFKqaLv9fz36xOCnCb4a5g5c%2BCJcDiJyhbDIF3IGA4mhWQY1Vcdm1N%2BRtj5rJ3kafKIRL6koT0BnN%2FiWJMYc5ZTstkDElD31SYPjnI%2FBYDZGz5w9izyjxkQsXILTv21zQXOLZHKLxA%2Fiqb7bSlKXVcobTvJBxL8xsP105hLgxzpgOLznn2jNUFFzlZrX2zDxMMuxiMoGOqUB%2FXBHFjIAhQYNT%2Bv%2Fgwr0eQGhjAV%2BFscVzxUPdVtVaCwMLRDErsPLD8K%2BDguedWjivheGCck6uKewwmfD3rB9rEXuUq7j6I%2Bvc60SIXNTXkIRux1wV%2BdN0mkl1TdDTwQydNdd45zCOu3QoSu4TcUA%2Fs0ZFClm0hARNRtcxC%2FOEw8Quwo9%2BeMIidOHgGvS89Qre32E4GKfs9AOtdbpAq%2FXt05u8aUM&X-Amz-Signature=e7c3c695394e2e59f7f709a008e0c64cf97a8d0b936eb46351f8ae42e3e02147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

