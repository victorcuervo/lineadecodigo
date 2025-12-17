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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OB6XVU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHC%2BtnWJN2T5ZpzGLzULgodvoYLTpMeF9xDhg%2FD3NlHwAiAoseTSI3%2BBxKS%2FAsOaYAWSYuL7vdzrhLVTuOKNEEdNPyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDwR7XaNx%2Fg91GcqKtwDXpIWKrD2Dd0QwqYtDnZntpP3xfe9GIzrY4F7Ty3jbRYsB2qxAo%2BWXLruCC9V%2FQdBESko46iLvvysxsywn0U%2FyDN07%2B%2BZRQ49ahNJGdEPot1iiO01czrKbGZO0gTMvMM0BNsI31lSaFADRenE9Z%2FFAlRTb0LIHRe%2FtJESE7SgMK4hLqMXSBjjqonqwaEnJkxUTG2lodJop%2BmEu%2BEMUqZLWghjjRhZXTXqncX2rZUCWOc2psm7Eb74Kq10x7oet%2By%2FCPNVsYEdRoH0oJaHc%2FX2kODWYBO0WkMvK%2F5JYQST87R%2FSGU%2F6Qa64oHtPIsAHyUuJRp4VdUWXWqxh4wAa1UAH1y8gzIwAGsNN2l8WKhVtAC7P4qil4g9UqMfeeq%2BvskNVwZn50jTGlVEhH9KFnLlNFrSG7kvNYu5dk4d0LDq8qxH0ZVRPQYZRMg%2F4cffQU9QC%2Frk%2BEoQg9jwHAOPUSgSg8ZDCSCzvvj7gBuZ2plGFcNAoNwH3OCRnjYRJ2oNgMTBwOidKfIQ5AdpmDiBjbc%2FVEvfgzMQqD2d55OsEXVgpb%2FNbAEtcye1GLjUb1NsbHAdsA6YInXUQG0HrHet3mOvC9xrkwe%2BZRH7xMZrfqHqf3w631bYUeLMQbzs3Qgw8Z6LygY6pgHrcPt4fy9Oqnt0ZZoYJrhRSyPPWjRwIjd9sIDNZi9Q8ytBJdeHL2r342ogEJtTiw1u%2BWRhGsqmDeNB0fDap%2BcUJYN1T%2FoHJ6q%2BpGe8%2F82zOixPiVWQHWeS%2FIlXQ%2Bq9aMHb5pW5rYiExAb%2BtZvCba%2BRMhRYAt718lKVdcKD6nm1s%2FvYV%2BKLBrAF1YMddvG3umQG%2B7RnwTneIUyq0FQfed7Cvze43xJ8&X-Amz-Signature=d5b81c7a365a79cc798d52c12ead1ded3d7c6c00de4fac07b2be8de49d33700f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OB6XVU3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHC%2BtnWJN2T5ZpzGLzULgodvoYLTpMeF9xDhg%2FD3NlHwAiAoseTSI3%2BBxKS%2FAsOaYAWSYuL7vdzrhLVTuOKNEEdNPyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDwR7XaNx%2Fg91GcqKtwDXpIWKrD2Dd0QwqYtDnZntpP3xfe9GIzrY4F7Ty3jbRYsB2qxAo%2BWXLruCC9V%2FQdBESko46iLvvysxsywn0U%2FyDN07%2B%2BZRQ49ahNJGdEPot1iiO01czrKbGZO0gTMvMM0BNsI31lSaFADRenE9Z%2FFAlRTb0LIHRe%2FtJESE7SgMK4hLqMXSBjjqonqwaEnJkxUTG2lodJop%2BmEu%2BEMUqZLWghjjRhZXTXqncX2rZUCWOc2psm7Eb74Kq10x7oet%2By%2FCPNVsYEdRoH0oJaHc%2FX2kODWYBO0WkMvK%2F5JYQST87R%2FSGU%2F6Qa64oHtPIsAHyUuJRp4VdUWXWqxh4wAa1UAH1y8gzIwAGsNN2l8WKhVtAC7P4qil4g9UqMfeeq%2BvskNVwZn50jTGlVEhH9KFnLlNFrSG7kvNYu5dk4d0LDq8qxH0ZVRPQYZRMg%2F4cffQU9QC%2Frk%2BEoQg9jwHAOPUSgSg8ZDCSCzvvj7gBuZ2plGFcNAoNwH3OCRnjYRJ2oNgMTBwOidKfIQ5AdpmDiBjbc%2FVEvfgzMQqD2d55OsEXVgpb%2FNbAEtcye1GLjUb1NsbHAdsA6YInXUQG0HrHet3mOvC9xrkwe%2BZRH7xMZrfqHqf3w631bYUeLMQbzs3Qgw8Z6LygY6pgHrcPt4fy9Oqnt0ZZoYJrhRSyPPWjRwIjd9sIDNZi9Q8ytBJdeHL2r342ogEJtTiw1u%2BWRhGsqmDeNB0fDap%2BcUJYN1T%2FoHJ6q%2BpGe8%2F82zOixPiVWQHWeS%2FIlXQ%2Bq9aMHb5pW5rYiExAb%2BtZvCba%2BRMhRYAt718lKVdcKD6nm1s%2FvYV%2BKLBrAF1YMddvG3umQG%2B7RnwTneIUyq0FQfed7Cvze43xJ8&X-Amz-Signature=8d8309903e0194b1b96b8e46ecc0dc369c1ef5991c7c3be55bea6d9d514e49af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

