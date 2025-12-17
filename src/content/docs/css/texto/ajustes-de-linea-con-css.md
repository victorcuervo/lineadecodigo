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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTVH7SBV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCXY%2BP988PlL7fNgEd5TyXI0KKv30R8LoMmvkk2QDBIAiADMqcXfmie7Bb%2FlEzEyncevXB2E6m6kECh2EuFcJTNWSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMhjQhDzc5Q5OkuqnfKtwDP2wRNfuqA6KqsvB3YgU6axJr%2FOgLGQH0xxLW71EfI5%2FGVlvaPpGM33q3R8nBAn9RcCDIN2OnXNKgo0RPV%2BxaRQ6wulF4ojhNsKyOLEYddDNi3V7SLg3aPFL6Sn7SEEWxH3SEx558FyxEWKpC8itOL56HajSkkwxGkKvvHAVe0HTALLe8xWCECW0Nk8ECKD4%2Bwxd0G5%2BO%2BJxcuHR2OY%2BQv4n554jeMT7wOlL024ul21eUrUL1KJy0kbXqbvZq58pCzE9lSprT0d2T3zCzyyPARJZ%2FxyZONhjvkkPeFj%2FIkY39lycsiLsy%2F9kGWdrPkP09Z5h5WOMtp1EfFKXO5obVfIIwiQv%2FN2nK%2FUy%2BtV2Nw7SJ4GqUyRfWd59U5uVVcygwIhVCTlAlVyO%2FTqfTK2Us%2B9gkHKXiW2AKPlciiTeNCIxed0duOyXaIL3P%2BcLU5eJ0Q6kS476rnmtq1kxcthRCrDd9pBt7xLHhcYlggr1J9U9zdlDcnoAS954YkVAcxNorCpO7UrkKZTf07oYJGm0%2F%2BBir8FttOKZSe8oDHD7sfLRrr970vjEitXEmH7cDQzxabYNWwUPoDG5YrsHRKTrM9T26F5d0OggTVLZhf%2BH7s%2BIZcKZNISi%2FFS%2Bxwi4wk9GJygY6pgGe2gilExu8rlBRc0Se3hxeHUfaxMQRnT5MkaatEGJGh%2F7fuwaE%2F3DSu%2FosaJMHVhtZOrF539GGGlcySaRaP95TjTBD69epNfLfYBD%2BVimEH%2F5%2BmF8mVCcGPD7Bq%2FierhquwM3acDl8UaxgwbCqRMdcJO9YBCuKJBxNJo5raJuFq1l%2B2HI5xbQx6ujndT%2BhorqKwCaiY7BS241VOv3V70UapNrpWM9q&X-Amz-Signature=4628f7c289bbc3e6ac17b83ae68b2cc18808a6aad8d27400e43ec392056c5fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTVH7SBV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCXY%2BP988PlL7fNgEd5TyXI0KKv30R8LoMmvkk2QDBIAiADMqcXfmie7Bb%2FlEzEyncevXB2E6m6kECh2EuFcJTNWSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMhjQhDzc5Q5OkuqnfKtwDP2wRNfuqA6KqsvB3YgU6axJr%2FOgLGQH0xxLW71EfI5%2FGVlvaPpGM33q3R8nBAn9RcCDIN2OnXNKgo0RPV%2BxaRQ6wulF4ojhNsKyOLEYddDNi3V7SLg3aPFL6Sn7SEEWxH3SEx558FyxEWKpC8itOL56HajSkkwxGkKvvHAVe0HTALLe8xWCECW0Nk8ECKD4%2Bwxd0G5%2BO%2BJxcuHR2OY%2BQv4n554jeMT7wOlL024ul21eUrUL1KJy0kbXqbvZq58pCzE9lSprT0d2T3zCzyyPARJZ%2FxyZONhjvkkPeFj%2FIkY39lycsiLsy%2F9kGWdrPkP09Z5h5WOMtp1EfFKXO5obVfIIwiQv%2FN2nK%2FUy%2BtV2Nw7SJ4GqUyRfWd59U5uVVcygwIhVCTlAlVyO%2FTqfTK2Us%2B9gkHKXiW2AKPlciiTeNCIxed0duOyXaIL3P%2BcLU5eJ0Q6kS476rnmtq1kxcthRCrDd9pBt7xLHhcYlggr1J9U9zdlDcnoAS954YkVAcxNorCpO7UrkKZTf07oYJGm0%2F%2BBir8FttOKZSe8oDHD7sfLRrr970vjEitXEmH7cDQzxabYNWwUPoDG5YrsHRKTrM9T26F5d0OggTVLZhf%2BH7s%2BIZcKZNISi%2FFS%2Bxwi4wk9GJygY6pgGe2gilExu8rlBRc0Se3hxeHUfaxMQRnT5MkaatEGJGh%2F7fuwaE%2F3DSu%2FosaJMHVhtZOrF539GGGlcySaRaP95TjTBD69epNfLfYBD%2BVimEH%2F5%2BmF8mVCcGPD7Bq%2FierhquwM3acDl8UaxgwbCqRMdcJO9YBCuKJBxNJo5raJuFq1l%2B2HI5xbQx6ujndT%2BhorqKwCaiY7BS241VOv3V70UapNrpWM9q&X-Amz-Signature=6440678e16f70529165066a50cf439801b77e5ff6227be4452e37b85c2843e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

