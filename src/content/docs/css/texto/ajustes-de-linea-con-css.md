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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RI6TTQO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtYcd9Z%2FkFB6Z52z0SElqIjUTjNDjEfPJpZxeUIWB85AiEAzgD4c%2B1XaRL5CXU7hh45%2FR3Kba5iJVI%2Ber1WHJpt0%2Bwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGqSZWdq6GXt6zMNDircA7IAXZ2c5dkUGR66sm4AJDbA8a6u4Nmu7zo7obaM93ynj%2FEumk7IMYo6a5rjRLxK6MTqUlIBAGc8cDm5zqb56wq6A4GHkYHzFQRh85bGF2HPM1czR6UckY9L%2FxFVFuBxyQJRoEnJ%2FgeDOW8yXwZmsyl9%2Fh5NA%2Fnjpd4HV5rLERJrZ9X0wH14PwJWAc66uTYCcQseJ41MXbOkIayEqB8ebYR2V%2Bqz14Rs6Ndn4yaEq4GcpsIJmv5wacyxD5tKZtNywLc1SieM9aeBLHLeB%2FPfWndA3%2ByqCVFOPkJkSwX9pmd6Xes6euMsZntKgMiE%2FoQfevEMEyeIfk0QX0tcTbhTs9SIVMKd4ltUAg1OfYHU87Cp1ChEix25ZYlFmGMuZwrhPonjnkbUtqacHPs5CqNeF0BXxFH89rIt9np74LgoB8O6lreFzbM%2FEwpIqWnpiWZ4pkOjRXgVzUbuMwTKG0HZB3Mac4uZ99OfDK%2F8yOMQcQQwqT0HF2rDlbsZWtg492FrzrmFMx2ScDzGCMymTBmyLDTEypsZHaEx%2FztqJYVDWfc645E%2Fu3OcWmbwUG6NU5GdpjfN4CrC%2ByBc3J9Ae8ZGqatfurMo%2BwROnTOrT7sqERZZqcM%2FyQOva8kX%2Fva3MJfjisoGOqUB1wFROzUn%2BuvKl8qChubuKP86CY8B4EdyJhrfrbx0OkAVtqGywawgpu5E8i7JncGHrY%2BQhPdaBd6wyEqN85tF0iSpo4y0UBKJ%2FDGhZWJJmdI4DNLssG7wJnn1iAqVaK%2FpVwVLRPJdaVIf3zcCMA9wEctJuVQ1XCcV6aLaNFwpnQhvOFIPfIV09fRy5gz9TvXoPBtXxrMWP3KTuZCup7kizyDrusYE&X-Amz-Signature=979d42d076bb60c5e03745292d16ebbd7ae3de8026cf6e835977ac5f8460a30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RI6TTQO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtYcd9Z%2FkFB6Z52z0SElqIjUTjNDjEfPJpZxeUIWB85AiEAzgD4c%2B1XaRL5CXU7hh45%2FR3Kba5iJVI%2Ber1WHJpt0%2Bwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGqSZWdq6GXt6zMNDircA7IAXZ2c5dkUGR66sm4AJDbA8a6u4Nmu7zo7obaM93ynj%2FEumk7IMYo6a5rjRLxK6MTqUlIBAGc8cDm5zqb56wq6A4GHkYHzFQRh85bGF2HPM1czR6UckY9L%2FxFVFuBxyQJRoEnJ%2FgeDOW8yXwZmsyl9%2Fh5NA%2Fnjpd4HV5rLERJrZ9X0wH14PwJWAc66uTYCcQseJ41MXbOkIayEqB8ebYR2V%2Bqz14Rs6Ndn4yaEq4GcpsIJmv5wacyxD5tKZtNywLc1SieM9aeBLHLeB%2FPfWndA3%2ByqCVFOPkJkSwX9pmd6Xes6euMsZntKgMiE%2FoQfevEMEyeIfk0QX0tcTbhTs9SIVMKd4ltUAg1OfYHU87Cp1ChEix25ZYlFmGMuZwrhPonjnkbUtqacHPs5CqNeF0BXxFH89rIt9np74LgoB8O6lreFzbM%2FEwpIqWnpiWZ4pkOjRXgVzUbuMwTKG0HZB3Mac4uZ99OfDK%2F8yOMQcQQwqT0HF2rDlbsZWtg492FrzrmFMx2ScDzGCMymTBmyLDTEypsZHaEx%2FztqJYVDWfc645E%2Fu3OcWmbwUG6NU5GdpjfN4CrC%2ByBc3J9Ae8ZGqatfurMo%2BwROnTOrT7sqERZZqcM%2FyQOva8kX%2Fva3MJfjisoGOqUB1wFROzUn%2BuvKl8qChubuKP86CY8B4EdyJhrfrbx0OkAVtqGywawgpu5E8i7JncGHrY%2BQhPdaBd6wyEqN85tF0iSpo4y0UBKJ%2FDGhZWJJmdI4DNLssG7wJnn1iAqVaK%2FpVwVLRPJdaVIf3zcCMA9wEctJuVQ1XCcV6aLaNFwpnQhvOFIPfIV09fRy5gz9TvXoPBtXxrMWP3KTuZCup7kizyDrusYE&X-Amz-Signature=ff75a88a48cd9defe0d92d7ebd31e77f9ac4db9f2d51a0be75543ceaf9b14aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

