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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRJU2DCS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiHayD9kdL5tYqc8SOS4eESYetU6%2F03RByCDZau8XUSwIgUTVsXOOY43167ECjLjRyS8p8zmX3ta%2FMvhYeyUF55foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFmRNZ%2B58SW5oUXwnircA1clSCXXoLzYyml7UE39lm1M7cGIZd8iUtOYMYSHMJyqPOsAvXIJ7BwanIDgAZ%2FJHLIBo4ovQ%2F7ZMzh0yIeY5y5X%2B5XpMioRNY8QI6X4yGK5u9WlXJptwbBihbQ5o0a4%2B7kEUGtY6U2Y%2FmjFfeg%2BhwYD4PvBwhjt0TyzsYZLrop4ikuw%2BpGXNyx07QCXbQV0Q0FlD14c13iXS4JtG2IO1jGWOKzjUE1p%2BONgmv8p98tWlAmBnpGGcblHfM8sY6r%2FwNie4euJy9bb6lNRWz7WyqKTmc%2FupZJVseySzFN8lAwmemNLa1c144WT73USEMyifXVgYMYdQpKBUEJrD3Hp8LUO8Jszu5VP2sVYMauM0p6RRSEkk77FiE0Iw6EzrEmPe20RuXDUjNNLIqkkdMKdDDFlfEPOX8kN%2B9NqJ8ATbMRAlsQw%2Firr5yFQpvE51yMJB6tGtsNDNqb4ZEp64z0pSFmKqxkdIlMp6MmpddfXi%2FIRQpfwgSpEpQwbGoq6G%2FcicdzVCDh5cInqTwZsbCLuQiau%2Fm6WDyHpqZoefzInnxiDW2noeO0k6YbtMrbDHK3LMLhabMQ%2BLp0nevxqx012uzDqOSa90AzBKJ9r4Jz%2Ba5GrZCnnTL5ktOr%2BEQ40MPLhisoGOqUBOksTWTWKwlUPali2QQTT3LvLY69%2FOVM%2F0DGJSIZ4rkQ%2B37dxMYiQa8t%2Fo04flgFVhtq89X3P9Yz%2BrY784ofEJtUr%2B%2FnovavqKcP5zX7PtuMSy9AdCgtF4xNVEAoeQePdQvXJmevz9jkzJnCXIf1wor1dh9xLJPMQRD1UnWLQBhl8qKFfOyth0t0pb%2FvStA0Fv0PlV%2B0kSo1%2FVNSOfwb9RmOztmQF&X-Amz-Signature=96286abbd1592733f238f0ae31c980770c5cb8c774f128e8686578cbb11605c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRJU2DCS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiHayD9kdL5tYqc8SOS4eESYetU6%2F03RByCDZau8XUSwIgUTVsXOOY43167ECjLjRyS8p8zmX3ta%2FMvhYeyUF55foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFmRNZ%2B58SW5oUXwnircA1clSCXXoLzYyml7UE39lm1M7cGIZd8iUtOYMYSHMJyqPOsAvXIJ7BwanIDgAZ%2FJHLIBo4ovQ%2F7ZMzh0yIeY5y5X%2B5XpMioRNY8QI6X4yGK5u9WlXJptwbBihbQ5o0a4%2B7kEUGtY6U2Y%2FmjFfeg%2BhwYD4PvBwhjt0TyzsYZLrop4ikuw%2BpGXNyx07QCXbQV0Q0FlD14c13iXS4JtG2IO1jGWOKzjUE1p%2BONgmv8p98tWlAmBnpGGcblHfM8sY6r%2FwNie4euJy9bb6lNRWz7WyqKTmc%2FupZJVseySzFN8lAwmemNLa1c144WT73USEMyifXVgYMYdQpKBUEJrD3Hp8LUO8Jszu5VP2sVYMauM0p6RRSEkk77FiE0Iw6EzrEmPe20RuXDUjNNLIqkkdMKdDDFlfEPOX8kN%2B9NqJ8ATbMRAlsQw%2Firr5yFQpvE51yMJB6tGtsNDNqb4ZEp64z0pSFmKqxkdIlMp6MmpddfXi%2FIRQpfwgSpEpQwbGoq6G%2FcicdzVCDh5cInqTwZsbCLuQiau%2Fm6WDyHpqZoefzInnxiDW2noeO0k6YbtMrbDHK3LMLhabMQ%2BLp0nevxqx012uzDqOSa90AzBKJ9r4Jz%2Ba5GrZCnnTL5ktOr%2BEQ40MPLhisoGOqUBOksTWTWKwlUPali2QQTT3LvLY69%2FOVM%2F0DGJSIZ4rkQ%2B37dxMYiQa8t%2Fo04flgFVhtq89X3P9Yz%2BrY784ofEJtUr%2B%2FnovavqKcP5zX7PtuMSy9AdCgtF4xNVEAoeQePdQvXJmevz9jkzJnCXIf1wor1dh9xLJPMQRD1UnWLQBhl8qKFfOyth0t0pb%2FvStA0Fv0PlV%2B0kSo1%2FVNSOfwb9RmOztmQF&X-Amz-Signature=e842efa525a733a1a688fa81e38ab8b4f219b80615060561c96d4d9687d11b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

