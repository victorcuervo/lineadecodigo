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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FQL2LP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1nLbKA1wblxOeY%2B1pE6L4dBWnGjN7UzoimmfOp9xMnAiEAlPwI3DGzCxTYV1y5wSLDRGV%2BCkFAIrqwHYwm0pdkW88qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOXmonXNOHKjmDjKSrcA5o0wt9w5DobzWfBzdX0HJTw54YnvLC44Wv73cHjKJjz2SlZkM7TakTA%2FAanmIhU2u6W0diyduK4pC6ww3AFTZlOyu6yLuKkVvgk465T3ml%2B%2BTuBWhFw92i8Yqj3unYqL66Z9eH%2FCZ6yah8juHRLJG8PExMKxzizlwPZRM%2FcovwvFRsNYAeal2FFPz0neR%2BJFv%2BxPXtjFZOVKmyAAuayJThyr8Kal%2Bq2Y7nfJU2oru%2BU2NLd4YuXvxekXB3R13J5aO2v0fnsUPXjtTyZ8zsiE5twb3op4vc6NZef%2FsVaNpudsX%2BCoflAOh6ag1veVXGUfmeiumKqbD%2B0t%2F%2BQp%2BomjKRr7FIcIoC8jQktKG1S%2B5uy%2FbvnGLLu19oStFzAtVfqJywEVx6tobOSyIxvtYTwu75tu208dFTdbr3iXNPiD%2BmH%2F2CgwuP62wjvLe3a0SlBtlHXqDiH2BpY1l9igq%2BdTknwThU2Ujq6%2B6AuH1FOsYTS6C9wvI4eZXPqNVg2%2B6kRVpLJSRHsRf2ge%2FhDjk%2Btx4K7cbnGJl8gQ%2FIZZz4NPUaa6lmJyK6nAjIcaTGmujHeX94J4GDzjzQ%2FvEzgYrwrWIHCOL%2BxZKnhcVM60gpfzc6Q20iAlLkiYG4wS6IBMP7%2FisoGOqUB2aR6YW9%2FF%2BRpPj9RnxrejEMrXFSDk6CQXXxs57a4yxzXNwlDBW1HzGC1YLNu0%2BJlKfm0zUF9Kg3g6vq8Dd2OYAcLCY%2FKn1molwyeW40YT3NLyGz5HD%2BvueNXOghNnT1OZgDSRRisj0couIdxl1cLVHhgNvox0fQa4w7z4WPz3q4JOejeNBrJWfwT8FJD%2B5RWiuIzWRusHu6n6CnCUbSHwpDeDOUu&X-Amz-Signature=2afd3eae6de41488ac55630e24ab45446596542bd37da99ae78e045cf8afe959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FQL2LP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1nLbKA1wblxOeY%2B1pE6L4dBWnGjN7UzoimmfOp9xMnAiEAlPwI3DGzCxTYV1y5wSLDRGV%2BCkFAIrqwHYwm0pdkW88qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOXmonXNOHKjmDjKSrcA5o0wt9w5DobzWfBzdX0HJTw54YnvLC44Wv73cHjKJjz2SlZkM7TakTA%2FAanmIhU2u6W0diyduK4pC6ww3AFTZlOyu6yLuKkVvgk465T3ml%2B%2BTuBWhFw92i8Yqj3unYqL66Z9eH%2FCZ6yah8juHRLJG8PExMKxzizlwPZRM%2FcovwvFRsNYAeal2FFPz0neR%2BJFv%2BxPXtjFZOVKmyAAuayJThyr8Kal%2Bq2Y7nfJU2oru%2BU2NLd4YuXvxekXB3R13J5aO2v0fnsUPXjtTyZ8zsiE5twb3op4vc6NZef%2FsVaNpudsX%2BCoflAOh6ag1veVXGUfmeiumKqbD%2B0t%2F%2BQp%2BomjKRr7FIcIoC8jQktKG1S%2B5uy%2FbvnGLLu19oStFzAtVfqJywEVx6tobOSyIxvtYTwu75tu208dFTdbr3iXNPiD%2BmH%2F2CgwuP62wjvLe3a0SlBtlHXqDiH2BpY1l9igq%2BdTknwThU2Ujq6%2B6AuH1FOsYTS6C9wvI4eZXPqNVg2%2B6kRVpLJSRHsRf2ge%2FhDjk%2Btx4K7cbnGJl8gQ%2FIZZz4NPUaa6lmJyK6nAjIcaTGmujHeX94J4GDzjzQ%2FvEzgYrwrWIHCOL%2BxZKnhcVM60gpfzc6Q20iAlLkiYG4wS6IBMP7%2FisoGOqUB2aR6YW9%2FF%2BRpPj9RnxrejEMrXFSDk6CQXXxs57a4yxzXNwlDBW1HzGC1YLNu0%2BJlKfm0zUF9Kg3g6vq8Dd2OYAcLCY%2FKn1molwyeW40YT3NLyGz5HD%2BvueNXOghNnT1OZgDSRRisj0couIdxl1cLVHhgNvox0fQa4w7z4WPz3q4JOejeNBrJWfwT8FJD%2B5RWiuIzWRusHu6n6CnCUbSHwpDeDOUu&X-Amz-Signature=42cb3e45e6ec948d661e6169bea0051718c7f0017e0a1d148eabf891b5482a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

