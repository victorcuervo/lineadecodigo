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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=a1f5191aceebc03764de5667796fb958a72143a88828b96d3fd5afba19198520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JJYJGNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD95DhnWHlkHC5C45wSzFkdq1XI4i%2BK0vLRLQUS8S5UngIgKKrhSSzlcHmpD2%2FAWSTtNSe3MwdZe8N%2B8tgnPJU3fScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMwoIi8HOEwrLVwt7ircA9cvejhOulERJ7jKVbdOlV5d8KAkboQtbbiEGjSHSUdeX%2Bvtgu12yeQRd%2BHSTEWQ9Irvpy%2FsfDxbSjDKCE80d6dei%2F9eLC2WsDE2kGaH%2FwwYgYnFHyStPYj%2FUj3HIL5fYzsvufFbmYgVKAM4EdlWbn%2FqVCuIO%2FlD4TCZUNuNnqHDq6ph6VNovsajuN8LPXuaxgiturwj7V%2Fe0xSoIP8XYkN9ar98UqR5EFv3WXQATc1IRxxEkZaYF6i%2F0%2FcvOTnr8VGaoVb9Pn2RGKSdE68ZsIdSnXUvvHeRnIh0ks4yEk%2F%2B1ECp3RT%2B7TAQSZ%2FeCd5C8A3qXEnfcQPp5Mo9eYTEb%2F%2FoeZ7sJutKB8MuMTd2cDx3LB0JhmbxfGbxxmkrQNeUhEaBqSOf4nTwoc%2Foz74qr3GRvUqkjtZfCEKtV5Goh1Iy%2B5ZEfvCatCxOvO09f7IYgYowcbTSMYgPFaKX70ox9nIPhDqt45YfFR3alCusycpsOsZE9R8Ry5sGS%2Bj86PBWGRkP2xqPwXE6SPx2T4MnDhxZmagYeqPG3L1nvE%2BLPJHBUsaKnbpIo5Aufb70eZvAVx%2B06DPA7OUP9TWtGQR%2Btqoo8Rt9Diq23UFQZ1rlQZa27uosqethiBLGW9fYMJX7h8oGOqUBSjB%2BLXQuD%2BJz%2BU6H9iVgxf9wH09Tmi1Wo3B%2Fp0cXJwINIFr9qk7kGHxRXHLTgBvGiescbwQCY87WfbpTpUqxMIh0vUbhHyzFLxfs2dfOOTO9H9u2KTC4LRjjjZtm9OSUh628zrX9qphsRcj4iMZyWMzs32RIP0VcaVWsGiaY%2FiSxJJQeQmOjXmBOzDF7%2B%2Fk9mpxnc3TwykKgxW3niH4GOW2Kkm%2BM&X-Amz-Signature=ae23fc7b56fdca87ef103bd4fd6d490ff436e4e1c50be9aa43b2f18315ac90b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

