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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3OLXCCX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BsITOEw%2F4fw%2Fz%2BLLfEfawj%2BvG3QvtbIrzElsTjd%2BG4gIgR%2B1I1S4g9WemXiKiWfNaAKh1ab15nuJ71rX7WTN5ChoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYE5RsXZmUKkaiCLyrcAwRKnFYUqdRGZFtlbZc763gnm3QHqxuifVSQgsDhW4PE7Od33yHEure93mhs5tAiS%2Bg2UHXHxoGpNfiPscXdM2NHll16w7jxXp8Jq4n14n69kuBo54%2FOXiYsjGKitI7H6FeOm%2FLKz%2Fv3PhA1UcosDe2TKMOS4mBWAoSMIigX5HtgquZMT0JszQDXBg7ZfHboKbJoPJjjR1Uw0E%2FqemqgmQ%2F4MtTlDTxFOmFOA969AuFr74sqLYNDSs30KkLSRHcxSMTBdhDEZaC%2BIyJESy%2BraCGFm0atsmorvwlH5fr6eOuAfci6PDkV4Gwk7BW5ZJKhyNPrdM4tq4KlDqaFOks1tjA6IsHNHUsR4WFakFsrIfBH2k2uvqlMOiDQyPK0oPgWnj%2BZOnCqNFTuAFPBaou09VRduyS8vOxm1I%2Fzx2%2BXU4l2C4IfoZ0QziLjpW8d%2BYAwlQ1gJCUoCykHii2FKmfh6jtk1xDDegaHwHBkJBYK%2F7t6ngQsvT1X1qsLHe%2BwdTLSjSqv91hGjQqO8z%2FJ57CTzb7jjQT2%2Fs1IVUeR51an6LY%2Fevi1l4CtoBTu48RozKr76Z56aGUxSek5nQp5hd2osconBQ36BJjM5MLGwMjV2aWMKWfJBlItq8LKMKn4MKOBi8oGOqUBjmIdPuNFnZRk2IHLsvbBKC8zCTj%2B7c6g0q3fWyxlPNJxyTWoy4Xw%2B9IcobFJyqqheb7TbrzRU%2Fumz24GUgPBu6ELJncmA%2B73lnLZI9RajxEwZnHqAZOhEncfkOU5GlkrDVxJpCM5zvUDCznWcTC78ODVPBpPwArygsmUvWbvMgovdOI50ZwvFrS3An28ITA0qTlvPUYxVCXqXwbbQxb8s5hsWSzw&X-Amz-Signature=a2210cdca25b784014d85c68fdf9ff09f672d67d7e9ec66cf9d467b6eff4c2ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3OLXCCX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BsITOEw%2F4fw%2Fz%2BLLfEfawj%2BvG3QvtbIrzElsTjd%2BG4gIgR%2B1I1S4g9WemXiKiWfNaAKh1ab15nuJ71rX7WTN5ChoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYE5RsXZmUKkaiCLyrcAwRKnFYUqdRGZFtlbZc763gnm3QHqxuifVSQgsDhW4PE7Od33yHEure93mhs5tAiS%2Bg2UHXHxoGpNfiPscXdM2NHll16w7jxXp8Jq4n14n69kuBo54%2FOXiYsjGKitI7H6FeOm%2FLKz%2Fv3PhA1UcosDe2TKMOS4mBWAoSMIigX5HtgquZMT0JszQDXBg7ZfHboKbJoPJjjR1Uw0E%2FqemqgmQ%2F4MtTlDTxFOmFOA969AuFr74sqLYNDSs30KkLSRHcxSMTBdhDEZaC%2BIyJESy%2BraCGFm0atsmorvwlH5fr6eOuAfci6PDkV4Gwk7BW5ZJKhyNPrdM4tq4KlDqaFOks1tjA6IsHNHUsR4WFakFsrIfBH2k2uvqlMOiDQyPK0oPgWnj%2BZOnCqNFTuAFPBaou09VRduyS8vOxm1I%2Fzx2%2BXU4l2C4IfoZ0QziLjpW8d%2BYAwlQ1gJCUoCykHii2FKmfh6jtk1xDDegaHwHBkJBYK%2F7t6ngQsvT1X1qsLHe%2BwdTLSjSqv91hGjQqO8z%2FJ57CTzb7jjQT2%2Fs1IVUeR51an6LY%2Fevi1l4CtoBTu48RozKr76Z56aGUxSek5nQp5hd2osconBQ36BJjM5MLGwMjV2aWMKWfJBlItq8LKMKn4MKOBi8oGOqUBjmIdPuNFnZRk2IHLsvbBKC8zCTj%2B7c6g0q3fWyxlPNJxyTWoy4Xw%2B9IcobFJyqqheb7TbrzRU%2Fumz24GUgPBu6ELJncmA%2B73lnLZI9RajxEwZnHqAZOhEncfkOU5GlkrDVxJpCM5zvUDCznWcTC78ODVPBpPwArygsmUvWbvMgovdOI50ZwvFrS3An28ITA0qTlvPUYxVCXqXwbbQxb8s5hsWSzw&X-Amz-Signature=d77c5b6d9f1560e30dfcb39f8ab282561a1c9bf450582523573465a10778aa4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

