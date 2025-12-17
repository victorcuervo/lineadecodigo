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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXLRLGD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfvOeovmuR6Rdnd8JKvP7AOvs4VeKWB6H6B43eAYP2AAiAKiNjNKbuKG8H05auFRoA0yPAD7JjYBue%2BGWpR1OD8hCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4nngWTI5xLBaXdp4KtwDqtNOooLyURMiDxCZXEXa3WCBsoq401ifJ2VpMjoH%2BeGGn2JTxX%2ByVqfzRQKj4y%2B2ON3Pgp8L5HRjKR8xEb88psVyBexTKbxpjHeiDMbIozfJF5kG4iLvKMV4sVD1c9trxMLwz5FUbRONdhA0rFwpR9%2BG0Z0hiy6ErVkZ%2B41I5O3IOIhbC5EtRkUJaJetl1SpR9b5uM94buRo%2BEvlisV%2Fz9Ngt9JFuPC5auzwckfG0Ax%2BYpF0LV9oapmkV%2BbAjKHmgaOXwfZ6O5J8e2A0L3cLKoJpaTyVgxgfDhEd72aQ1ix0Fs6%2F94oumiewOq7gnMoGruP8XesiZhTjffU3yveZGeri8yjfccAhrhc6sLVlp4hX1BNlgFj%2BxpAULcrolJU9Brwqgfsl5vSfjBaQchfAc%2FzFaEO0tlrL7hja9gOxwe05sRgSzgu0rt2u3HBCEKDrdvlH979sIVQ9kdnEfANeuSq%2F6vQ%2BPCV%2BB0DUNp6fDHx%2FSVdfuiO5LA%2BDcXUtBz4CgvTsFeF%2BlWnx77g8LI2zk2gETUrqPZzx%2FZJg1ShgZl%2FVjLXscNk2QvrlYQ87qpWFVbrMWHxtncjLDv0CtgkzLGnmlTVnGfY34lic1qC4%2BKgccK8quBYrmQz%2BRYIw4dGJygY6pgE6vpZOW53mV%2FHk%2FfGn2eI8Zqn7bdGY%2F9PlzMEWDG4KlzmBpIN%2BxA71Cuffi3RomFerf71MKJe7ku8azkeqxvG4Ts2BtAxkftHTSNycwyYR4pgcN73hdgG8vkpMf7tZehy3zdEUMfoj1kLw2wARqf%2B8So9rbylG4GIHmLshEqG2A7LU8EQJ4TJSUor%2BOg1MhUfUmXbAtHfpHvXh%2FOE97IMuAl89yRVu&X-Amz-Signature=fac4efa7b7778610739e269197a2f935691ee1b12d1f8f595f893cbcdca1c65f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HXLRLGD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfvOeovmuR6Rdnd8JKvP7AOvs4VeKWB6H6B43eAYP2AAiAKiNjNKbuKG8H05auFRoA0yPAD7JjYBue%2BGWpR1OD8hCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4nngWTI5xLBaXdp4KtwDqtNOooLyURMiDxCZXEXa3WCBsoq401ifJ2VpMjoH%2BeGGn2JTxX%2ByVqfzRQKj4y%2B2ON3Pgp8L5HRjKR8xEb88psVyBexTKbxpjHeiDMbIozfJF5kG4iLvKMV4sVD1c9trxMLwz5FUbRONdhA0rFwpR9%2BG0Z0hiy6ErVkZ%2B41I5O3IOIhbC5EtRkUJaJetl1SpR9b5uM94buRo%2BEvlisV%2Fz9Ngt9JFuPC5auzwckfG0Ax%2BYpF0LV9oapmkV%2BbAjKHmgaOXwfZ6O5J8e2A0L3cLKoJpaTyVgxgfDhEd72aQ1ix0Fs6%2F94oumiewOq7gnMoGruP8XesiZhTjffU3yveZGeri8yjfccAhrhc6sLVlp4hX1BNlgFj%2BxpAULcrolJU9Brwqgfsl5vSfjBaQchfAc%2FzFaEO0tlrL7hja9gOxwe05sRgSzgu0rt2u3HBCEKDrdvlH979sIVQ9kdnEfANeuSq%2F6vQ%2BPCV%2BB0DUNp6fDHx%2FSVdfuiO5LA%2BDcXUtBz4CgvTsFeF%2BlWnx77g8LI2zk2gETUrqPZzx%2FZJg1ShgZl%2FVjLXscNk2QvrlYQ87qpWFVbrMWHxtncjLDv0CtgkzLGnmlTVnGfY34lic1qC4%2BKgccK8quBYrmQz%2BRYIw4dGJygY6pgE6vpZOW53mV%2FHk%2FfGn2eI8Zqn7bdGY%2F9PlzMEWDG4KlzmBpIN%2BxA71Cuffi3RomFerf71MKJe7ku8azkeqxvG4Ts2BtAxkftHTSNycwyYR4pgcN73hdgG8vkpMf7tZehy3zdEUMfoj1kLw2wARqf%2B8So9rbylG4GIHmLshEqG2A7LU8EQJ4TJSUor%2BOg1MhUfUmXbAtHfpHvXh%2FOE97IMuAl89yRVu&X-Amz-Signature=dedef38feaef2b44a73924e71d680ab12f51419436913549737c771bb3138278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

