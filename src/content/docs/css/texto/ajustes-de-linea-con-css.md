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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KCVWOV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyWU9cdhkj4ggw4Q6lAoqZ9YrC2ywg%2FcuzZU2xdC9rJAiBc7IH4KiBNtL8PTGtescwcM1QaMDyAClWrCQmKRCCg4yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMNkOPZkbRNi0aE3GSKtwDEyETpiBU7ZSqoura561dFUtewMlA21EwzRzf1lohpQ0PFUis%2Bmzh6V8yYP69qExvweP%2BeV8mKECuttCOdJgVQcBzq3lGjhimLthM440Poz4RxOZkLTXkHvHXT9NYyYljUZMs%2BjFhM9TGRVnmpHB8TQgLWkS0X5ucyiAcbCo3e5JCFuhmEtdwyDSxNB00ineA720wigW5bKqPkkqstwDLss1kje3VOef%2FP1i84TXRL2yrIbfvrJ%2Bzs6nonrwW3BniHYg7hkuUyH9H6FAXK0g5O1FdIayLye4NZmspUk0oapj9H9jyK%2F5oZSskd2q23F%2BUsLpy4LDTZ%2BQyma8OVlT8YsQV7HCdhQK%2Bx9nvTPTtYOv0y7XVfplorfPdBKh%2B8nelRTBBICMp5lkdNmkxGBza3FoqnrvavRurl0V0mHxUgL9ZazqNHzbvPTrFgaVZK%2FGdPIRTB%2BZP54kVcTr1%2FLawbPnbrSlY1Sn3YFQAoJmm8T9AtY9HTZgVyBgtskQJsAzr6lp2%2FQyJ%2Fd9ZCIO1T6TVKJ18z3dLkU78vGc1GUk19rHBghJ8NwytYe%2B3RhG0BZjYaGPf9DqCvzCflSw5OKL64VPPIA8Yqi5T5xtZQsMqEcNfSbKJEktvVgJMg6Mwup2JygY6pgGi5xQ%2FQzFiRHE26mByFjSKvvnHfSb%2FLy0D6AOixm4nV3Ct128jUAGa256gSnLtnHA97NZF3XO8vg7sQN0x%2F9rRnB2psxR%2FDTSoNYZpg6QXooWPLaWJ6p%2BygptU%2FIqqZ0db9fMkFjJA5o2Q%2B2R6k%2Fax5G%2FUSA4Cq7p5DE35Lqdel7MfrtM8PxXHMqYodU8TxKWxWavoW%2FY2jk6UjPu4jY6N65LLiVvn&X-Amz-Signature=7363ec0a1b2b65e9ce2297bb8af2af3200bc7b9214a81cf38975fe507899b1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KCVWOV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyWU9cdhkj4ggw4Q6lAoqZ9YrC2ywg%2FcuzZU2xdC9rJAiBc7IH4KiBNtL8PTGtescwcM1QaMDyAClWrCQmKRCCg4yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMNkOPZkbRNi0aE3GSKtwDEyETpiBU7ZSqoura561dFUtewMlA21EwzRzf1lohpQ0PFUis%2Bmzh6V8yYP69qExvweP%2BeV8mKECuttCOdJgVQcBzq3lGjhimLthM440Poz4RxOZkLTXkHvHXT9NYyYljUZMs%2BjFhM9TGRVnmpHB8TQgLWkS0X5ucyiAcbCo3e5JCFuhmEtdwyDSxNB00ineA720wigW5bKqPkkqstwDLss1kje3VOef%2FP1i84TXRL2yrIbfvrJ%2Bzs6nonrwW3BniHYg7hkuUyH9H6FAXK0g5O1FdIayLye4NZmspUk0oapj9H9jyK%2F5oZSskd2q23F%2BUsLpy4LDTZ%2BQyma8OVlT8YsQV7HCdhQK%2Bx9nvTPTtYOv0y7XVfplorfPdBKh%2B8nelRTBBICMp5lkdNmkxGBza3FoqnrvavRurl0V0mHxUgL9ZazqNHzbvPTrFgaVZK%2FGdPIRTB%2BZP54kVcTr1%2FLawbPnbrSlY1Sn3YFQAoJmm8T9AtY9HTZgVyBgtskQJsAzr6lp2%2FQyJ%2Fd9ZCIO1T6TVKJ18z3dLkU78vGc1GUk19rHBghJ8NwytYe%2B3RhG0BZjYaGPf9DqCvzCflSw5OKL64VPPIA8Yqi5T5xtZQsMqEcNfSbKJEktvVgJMg6Mwup2JygY6pgGi5xQ%2FQzFiRHE26mByFjSKvvnHfSb%2FLy0D6AOixm4nV3Ct128jUAGa256gSnLtnHA97NZF3XO8vg7sQN0x%2F9rRnB2psxR%2FDTSoNYZpg6QXooWPLaWJ6p%2BygptU%2FIqqZ0db9fMkFjJA5o2Q%2B2R6k%2Fax5G%2FUSA4Cq7p5DE35Lqdel7MfrtM8PxXHMqYodU8TxKWxWavoW%2FY2jk6UjPu4jY6N65LLiVvn&X-Amz-Signature=3bad154226683e78e504fa97760403381b16e4ff784cc162e5c7c1b1b72171e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

