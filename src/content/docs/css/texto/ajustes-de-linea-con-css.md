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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6WW6CK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDOx2MZ5JssIhohauTvWDS%2BDiaVN2KOHNCutBGfwq7lQIhANKQ6vEHx%2BdFQTFm%2F%2B6om9FzzB%2BJ0y6TyykLNSALRNq%2FKv8DCHwQABoMNjM3NDIzMTgzODA1Igw0nA1CwAB5%2FGrkOkYq3AOANnolqSX5lJ42HsjPFmxNNXK1kFveEGR%2BEGeLdgSmz0VnOAayQezWt76B6k0WEGeu5HzYQyLD2s5RyePItQMHHQB9SLvc9Zm8kQOx%2FOOhzLOoJ8M7wddEIpO0uwmxUnYZ7kyPp%2BaIGBOL5MhHDCIX1YSd9kCbzIrXxph3%2F%2BKfkO8yAn8K2nPFAAux5%2FqqCWUK4Qysx9xeD5EvFXuI2sT93qNdCdVM4QzvMYJXlVHbgvF6usErd6fLjJrtuP8VfN1hDeh70rSPvRcIFJ0ptF47DhYVuY%2F84lxIFdo%2F2wRaaRMpe8dKlKPhyUgURyaer%2FLeSvrxwG7Z6dbpvlz6BW3Xa8flB2Gzrl2EfBPzOlAQvvsm5w0svxqGTe7ZxjWWPRNKuhyD%2BOsv0w41TdhkQTFGvYrv7OTCBsw23owElJP%2BFakyrsFQut6j1UgHwBIyz8wkiPCwgH6N9or72RPyVem%2BS%2BKh%2FyprZkNzCtAlJWUlGmr57nBtLYyEaLlgeWYa4WJguyYk0EfOiyhBKnLJbNOcsvt8Fssk6z1bjAOuj%2FbmDTpqbDtaOTuYCbcaZDhewYQUm2rgKtZ0X0q3tZlmsWWmsAF1Xy%2FkLzhq1ETTQ5TgOiAVCu0QeXODrc4p%2BDCBj4rKBjqkAUiuHTcEjK4uP5zbigryhOv04mYNBXmw747D0cg9AWee%2FVAyCCphTs3hzuM43FtktS%2Fbn%2Fm6r2wnSEiIG3xE3w1WmRrdKzoPrXkFfXrEWIhIZHXrN0wquDy%2BjL9y5s4KQtzJZBZE1HSmmdMLIKtg8gDKP9EHrhY6Z0Nd%2FuaqlrzRhpI%2Fy6IgUAGoG%2Fzmo%2F7S0JSGHU2M1%2BfioyONuLpk8oHRYDbe&X-Amz-Signature=8541f893a26e99e3517c8bb6d23f010b5f0c00d6281f3b2d429a022dbbf48dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6WW6CK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDOx2MZ5JssIhohauTvWDS%2BDiaVN2KOHNCutBGfwq7lQIhANKQ6vEHx%2BdFQTFm%2F%2B6om9FzzB%2BJ0y6TyykLNSALRNq%2FKv8DCHwQABoMNjM3NDIzMTgzODA1Igw0nA1CwAB5%2FGrkOkYq3AOANnolqSX5lJ42HsjPFmxNNXK1kFveEGR%2BEGeLdgSmz0VnOAayQezWt76B6k0WEGeu5HzYQyLD2s5RyePItQMHHQB9SLvc9Zm8kQOx%2FOOhzLOoJ8M7wddEIpO0uwmxUnYZ7kyPp%2BaIGBOL5MhHDCIX1YSd9kCbzIrXxph3%2F%2BKfkO8yAn8K2nPFAAux5%2FqqCWUK4Qysx9xeD5EvFXuI2sT93qNdCdVM4QzvMYJXlVHbgvF6usErd6fLjJrtuP8VfN1hDeh70rSPvRcIFJ0ptF47DhYVuY%2F84lxIFdo%2F2wRaaRMpe8dKlKPhyUgURyaer%2FLeSvrxwG7Z6dbpvlz6BW3Xa8flB2Gzrl2EfBPzOlAQvvsm5w0svxqGTe7ZxjWWPRNKuhyD%2BOsv0w41TdhkQTFGvYrv7OTCBsw23owElJP%2BFakyrsFQut6j1UgHwBIyz8wkiPCwgH6N9or72RPyVem%2BS%2BKh%2FyprZkNzCtAlJWUlGmr57nBtLYyEaLlgeWYa4WJguyYk0EfOiyhBKnLJbNOcsvt8Fssk6z1bjAOuj%2FbmDTpqbDtaOTuYCbcaZDhewYQUm2rgKtZ0X0q3tZlmsWWmsAF1Xy%2FkLzhq1ETTQ5TgOiAVCu0QeXODrc4p%2BDCBj4rKBjqkAUiuHTcEjK4uP5zbigryhOv04mYNBXmw747D0cg9AWee%2FVAyCCphTs3hzuM43FtktS%2Fbn%2Fm6r2wnSEiIG3xE3w1WmRrdKzoPrXkFfXrEWIhIZHXrN0wquDy%2BjL9y5s4KQtzJZBZE1HSmmdMLIKtg8gDKP9EHrhY6Z0Nd%2FuaqlrzRhpI%2Fy6IgUAGoG%2Fzmo%2F7S0JSGHU2M1%2BfioyONuLpk8oHRYDbe&X-Amz-Signature=fee61f05d6d3ddcc595809b27d49361cbe30687965468ee2cafba3b9a3d14dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

