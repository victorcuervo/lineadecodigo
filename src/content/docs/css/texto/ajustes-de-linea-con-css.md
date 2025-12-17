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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDSXUH34%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP6JxDWoaSEU%2BdmZoiTHy3mHPe0mS6eAOkAxniBkiIfAiEAjUW9%2FCH0W%2BLs5e5otYT8FQac%2FC9ocgdQ9xBrDfRqMSQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPpPJCuy6NCcdbClgCrcA8St04dkFcEES9mtS5ZovsJjnn8XdtMzhzpp%2FaC8MIpYC60AKQIWyQLknyfUE3wzwIvU3ho1ww2ICk%2F6EZWwAWnqG2PivRGgQggZdykUoJTBO08mwD7NXI%2FzQ%2BJl6%2BJgfv20%2FPLYAKpCLBtdOZkDWjrHFFgQDg8Gc8%2BBIrzO%2Bc%2BMQi9XPrNVffi43BCP81Kp91M2ceWZ2VPbTyXLpVQdxpHZjzi1Kq7aOBrKMWBPS7qlRpuJPMHATDfLxfGGIDZ9aGTKzSmriryJ7laREvwRgjnYQUj22XUHIFgh8OVO5MZovkXWQYFRl1%2FtYAamuHMlj%2Bqg2ays5iZAzIlqOIgWlExygVLt1OJW4Gem%2FTRZMz5cW11SYhbHV%2FyMrPV2zrqi6jqI2DoWu3zk%2BCpioZv5yST5rqBwXTuK9PDzXzyzVc0zqUucuuhDFlPOlwRp3wL%2F56C9WKqaFOG4g%2FLipmF%2FRqzmHjZzk7ft%2F8Hk1txSQukrz0Sj8q2wASqc0zaIfh%2F71cBXG5t6ToVmTNFDH9eBMtdOr2sFeAhabvQ3MZXNj7vHqsIZOiFTTQAA7hrfZZTgm5iytapMmnlJ5KYgkxkOxMMMz0EMQR0eQthF8YUYCiI%2FqUBj1pGyCAVVHb8EMMTGisoGOqUBXOMP9svL0As8STmxeMzgQhrKMlpU6Dw%2B%2BBm55EX6tC0uDU52pEp%2Fq4%2FmJj%2FnAOaIww4rsHlq%2FAocGq%2BTSPRSbsxou57FQM%2Fbc6qfbcHmPTjPhrS7hM7j63%2FpnnufMqKjzRZuRs0iiI1b%2B8OYhvsYvvtDIZpW8R7latTQfC%2BEnT5afbJWbLcLAQCWHNv1pjWHVQ9p0atexdUrPfksK9kLmDZZ3XNo&X-Amz-Signature=2be42985af05584025572f5091665b1b55872f7e69c4f704853fa5bf22af0914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDSXUH34%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP6JxDWoaSEU%2BdmZoiTHy3mHPe0mS6eAOkAxniBkiIfAiEAjUW9%2FCH0W%2BLs5e5otYT8FQac%2FC9ocgdQ9xBrDfRqMSQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPpPJCuy6NCcdbClgCrcA8St04dkFcEES9mtS5ZovsJjnn8XdtMzhzpp%2FaC8MIpYC60AKQIWyQLknyfUE3wzwIvU3ho1ww2ICk%2F6EZWwAWnqG2PivRGgQggZdykUoJTBO08mwD7NXI%2FzQ%2BJl6%2BJgfv20%2FPLYAKpCLBtdOZkDWjrHFFgQDg8Gc8%2BBIrzO%2Bc%2BMQi9XPrNVffi43BCP81Kp91M2ceWZ2VPbTyXLpVQdxpHZjzi1Kq7aOBrKMWBPS7qlRpuJPMHATDfLxfGGIDZ9aGTKzSmriryJ7laREvwRgjnYQUj22XUHIFgh8OVO5MZovkXWQYFRl1%2FtYAamuHMlj%2Bqg2ays5iZAzIlqOIgWlExygVLt1OJW4Gem%2FTRZMz5cW11SYhbHV%2FyMrPV2zrqi6jqI2DoWu3zk%2BCpioZv5yST5rqBwXTuK9PDzXzyzVc0zqUucuuhDFlPOlwRp3wL%2F56C9WKqaFOG4g%2FLipmF%2FRqzmHjZzk7ft%2F8Hk1txSQukrz0Sj8q2wASqc0zaIfh%2F71cBXG5t6ToVmTNFDH9eBMtdOr2sFeAhabvQ3MZXNj7vHqsIZOiFTTQAA7hrfZZTgm5iytapMmnlJ5KYgkxkOxMMMz0EMQR0eQthF8YUYCiI%2FqUBj1pGyCAVVHb8EMMTGisoGOqUBXOMP9svL0As8STmxeMzgQhrKMlpU6Dw%2B%2BBm55EX6tC0uDU52pEp%2Fq4%2FmJj%2FnAOaIww4rsHlq%2FAocGq%2BTSPRSbsxou57FQM%2Fbc6qfbcHmPTjPhrS7hM7j63%2FpnnufMqKjzRZuRs0iiI1b%2B8OYhvsYvvtDIZpW8R7latTQfC%2BEnT5afbJWbLcLAQCWHNv1pjWHVQ9p0atexdUrPfksK9kLmDZZ3XNo&X-Amz-Signature=01956301df3a564bf3a37e4498cb578710a7eefc5e1d8e3a018ee5e849e7d58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

