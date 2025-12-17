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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGAH36QU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7Xxt8LrytZrnoiDhNxU06fUqzrxbnO6L%2BHM3r5uSMAIgXyx7zvB8tNVo025zPiPAbEujihPkHxUfT6OUchlxWUkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDABD4SCkShiJSu%2B2qSrcAz4C5vMloFbZtXOt26VD6XjxNwuE%2F7watt6ymJopQ%2FRJgE1DuCRn8KaD9QdeaOTiT3zRccNhIcxiZxpBOgppw2k4yT8PyPDTivMtX2jXpa2frJgIAcu2AZ1eXeSrBkKUXojee6OUx2cATMgdTt20nZAMlpjHOjQATzbbmLghxgJJPi%2FSA20ICfcHSL1hrltKuDKNy86U%2Bglg4%2B%2FA810yh8ymv2D1iSY0crax8Zso2UWRy7i%2BTqFWStAJprm46FJIgAQ9RzHvZnaL5%2FR9bpRe8MYKtJ3waVFJAm2S9OyXC8J9j21QkTsYUBAErYA%2BDCRAz7vNMaRhCQHIrmCG5sy7ajmMKe7r94DJH4gRUjqjfafg%2BTUxrF1JWW21EyxBXwkjUo0RtifgiM5rfumxZZKs8Uv6XVTxk5%2FTwUEUl%2BQX7WxA2qpd%2BtvwQLWS%2BcDhja10SwbaZ%2FgBSYpddsINf9zgMAK0dLJY8nTCH77h4XnzNn%2Bl%2Bo2bpi2E5ZxxcHIqwjLa4XBoJpB881LH9EVMbAV1iz0bMHieFa3a3rRav3R5ggsF7sCg1iotTtetbEWdd7CHztuDqeCjpytxnwMGA7BK4%2BXv%2FdQGASxSbY8XXQtVG8eM5JQkH4HY%2BpSOJEOiMIrRicoGOqUBeENA%2FJlblwDJRcrJiL%2FDW0PMLbbr0nt5ceajTnKmDvTruW23%2FVlLP85gnANLTAew6yDe1PF81NETKKUnX0ON7tPXeS67F%2FHb8CQIH4ectwxiNWjVFUC%2BbNpDAr%2B6HDWVF2ZYRnFPwk08dVsO78WTHn90tfutsCpG6i11h%2BqAlpO1t76OSfQpTP87W6I2cqWSxzthsDeR9UhtnB%2BT8%2F%2FUfTmslZRk&X-Amz-Signature=bb1c70941c1c446e58efe53f3c5403bb2a3c00a05ad7996c4659ce4298033d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGAH36QU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp7Xxt8LrytZrnoiDhNxU06fUqzrxbnO6L%2BHM3r5uSMAIgXyx7zvB8tNVo025zPiPAbEujihPkHxUfT6OUchlxWUkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDABD4SCkShiJSu%2B2qSrcAz4C5vMloFbZtXOt26VD6XjxNwuE%2F7watt6ymJopQ%2FRJgE1DuCRn8KaD9QdeaOTiT3zRccNhIcxiZxpBOgppw2k4yT8PyPDTivMtX2jXpa2frJgIAcu2AZ1eXeSrBkKUXojee6OUx2cATMgdTt20nZAMlpjHOjQATzbbmLghxgJJPi%2FSA20ICfcHSL1hrltKuDKNy86U%2Bglg4%2B%2FA810yh8ymv2D1iSY0crax8Zso2UWRy7i%2BTqFWStAJprm46FJIgAQ9RzHvZnaL5%2FR9bpRe8MYKtJ3waVFJAm2S9OyXC8J9j21QkTsYUBAErYA%2BDCRAz7vNMaRhCQHIrmCG5sy7ajmMKe7r94DJH4gRUjqjfafg%2BTUxrF1JWW21EyxBXwkjUo0RtifgiM5rfumxZZKs8Uv6XVTxk5%2FTwUEUl%2BQX7WxA2qpd%2BtvwQLWS%2BcDhja10SwbaZ%2FgBSYpddsINf9zgMAK0dLJY8nTCH77h4XnzNn%2Bl%2Bo2bpi2E5ZxxcHIqwjLa4XBoJpB881LH9EVMbAV1iz0bMHieFa3a3rRav3R5ggsF7sCg1iotTtetbEWdd7CHztuDqeCjpytxnwMGA7BK4%2BXv%2FdQGASxSbY8XXQtVG8eM5JQkH4HY%2BpSOJEOiMIrRicoGOqUBeENA%2FJlblwDJRcrJiL%2FDW0PMLbbr0nt5ceajTnKmDvTruW23%2FVlLP85gnANLTAew6yDe1PF81NETKKUnX0ON7tPXeS67F%2FHb8CQIH4ectwxiNWjVFUC%2BbNpDAr%2B6HDWVF2ZYRnFPwk08dVsO78WTHn90tfutsCpG6i11h%2BqAlpO1t76OSfQpTP87W6I2cqWSxzthsDeR9UhtnB%2BT8%2F%2FUfTmslZRk&X-Amz-Signature=2447b82738d690572e4975e252eb9d27e8ebba338d1ded20f39a4324596e9f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

