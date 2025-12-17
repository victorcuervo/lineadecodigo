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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKFYM2X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH779%2F3oKNqAi3Ac3sWgmekV5XQMLzQMiinQ8QOgzj41AiEA11d2KzLf32tvR5LlPSkiJidqrELhLM08m1pZ0cgGg4Uq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGuvV0zFe%2BYFQUo8jircA5uo%2FmsOKDPA5ZKvoiR5Kv5nRrOCqcg2f71q4qIOvZH2trtwW8nb0Okpc%2FN0%2Fyb1O34QQiGiD6AnNPRWSTIHtjLecdZlP76DHV%2Ff01zVTRsafffqfP3jLsIa%2Fb7Jir9oDEgCw8CdRg1cwKRvaWmKZjacy0%2BmdAMDjrQ%2BSlDShCr1efDP0toSD86PiAdd7ElH1S3hCm4201PLhcWhuoMUno2zOnV%2FFM2Q45FGwN9LpB0WziM4iEO093L5uzM4FPKEp4nAJeNkDtNV3k5iz7y%2FgJaui1fizd6Erl9c%2FnrUjSWt4rUPuRfyZX0HNj90%2FSQMvhjWCKegiVBE0CE4BKBooE%2BS0vdqzY%2FN1DGwUJS6Z8ZD09mqsD9408Io4F09S439rSlLCSw%2BN5lZ%2FMkbFSerA3dTrqGR%2BXKlBJyVdi%2Bhtybi7c96XVEXLQfGu9PZ6u8cOefhEcHEZDkCUkfUJ%2F%2FrhUvbz0LQraywvByVolZxlhaW6Dx8RGpMs6OlUS%2BKOd3jdKLb8XjqskhdA30JPoO19t7Jx66kbXPg0SMxMJX9G%2B0qlKS8AI5YzkVOOZgt13FakC7e%2FtEpDjiAEU8dqXr7zbVGrtdNvqH5mZbGZ8yrXE5OL5U8qAWzlE%2FxxYXSMK%2BcicoGOqUBP43nv3aX3dfwmcBaajf99uwnvJF6DvssLihhG13gvhD5cZgMYCzJQQWPq7tUctKkqMKgkiUgGTciNrEAldxfXeEDpJtTGElusxuip745ax2%2BTboR%2F2cH8K0o8uHu%2BeuUkW3yJ1YDoGcVaW%2FuLZRkMBMjOhh9Bqg5JFJj9ICYYcKWKzoFc1rpumcBqjwoga%2FEhuatjZN1EIbSnL7IBv%2BHLl6kzzXq&X-Amz-Signature=ed7cc41ea3c3000f36a86ff10503ec9940f7002dbfefd3e08f1686abccd0a5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUKFYM2X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH779%2F3oKNqAi3Ac3sWgmekV5XQMLzQMiinQ8QOgzj41AiEA11d2KzLf32tvR5LlPSkiJidqrELhLM08m1pZ0cgGg4Uq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGuvV0zFe%2BYFQUo8jircA5uo%2FmsOKDPA5ZKvoiR5Kv5nRrOCqcg2f71q4qIOvZH2trtwW8nb0Okpc%2FN0%2Fyb1O34QQiGiD6AnNPRWSTIHtjLecdZlP76DHV%2Ff01zVTRsafffqfP3jLsIa%2Fb7Jir9oDEgCw8CdRg1cwKRvaWmKZjacy0%2BmdAMDjrQ%2BSlDShCr1efDP0toSD86PiAdd7ElH1S3hCm4201PLhcWhuoMUno2zOnV%2FFM2Q45FGwN9LpB0WziM4iEO093L5uzM4FPKEp4nAJeNkDtNV3k5iz7y%2FgJaui1fizd6Erl9c%2FnrUjSWt4rUPuRfyZX0HNj90%2FSQMvhjWCKegiVBE0CE4BKBooE%2BS0vdqzY%2FN1DGwUJS6Z8ZD09mqsD9408Io4F09S439rSlLCSw%2BN5lZ%2FMkbFSerA3dTrqGR%2BXKlBJyVdi%2Bhtybi7c96XVEXLQfGu9PZ6u8cOefhEcHEZDkCUkfUJ%2F%2FrhUvbz0LQraywvByVolZxlhaW6Dx8RGpMs6OlUS%2BKOd3jdKLb8XjqskhdA30JPoO19t7Jx66kbXPg0SMxMJX9G%2B0qlKS8AI5YzkVOOZgt13FakC7e%2FtEpDjiAEU8dqXr7zbVGrtdNvqH5mZbGZ8yrXE5OL5U8qAWzlE%2FxxYXSMK%2BcicoGOqUBP43nv3aX3dfwmcBaajf99uwnvJF6DvssLihhG13gvhD5cZgMYCzJQQWPq7tUctKkqMKgkiUgGTciNrEAldxfXeEDpJtTGElusxuip745ax2%2BTboR%2F2cH8K0o8uHu%2BeuUkW3yJ1YDoGcVaW%2FuLZRkMBMjOhh9Bqg5JFJj9ICYYcKWKzoFc1rpumcBqjwoga%2FEhuatjZN1EIbSnL7IBv%2BHLl6kzzXq&X-Amz-Signature=7edf9f1b2fc0b19b2eab7d1e436d2a4e01c51bd79905a64c52715f92e67c6d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

