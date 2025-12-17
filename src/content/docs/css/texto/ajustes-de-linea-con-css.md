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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLISMPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtHNx7gNhw0HvhaFPo4Qs37nPywPe1PrC%2FNYav6OVq3wIgTnZd3AWwjJKVglAVv5hTViop1pDXIApmdP52Uyk1nWMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN0Ch5J9IEiCvcp9rSrcA4KX73%2Bs34nkt8znI%2B%2F0wsQWqfTqnZNy%2FIyK8MV5RIbpNHtb1Ln%2BKnjxBzYZ22a54MyD0UZUVUM%2Bsvi%2BEU%2FKb8RZ%2Fb6AweAJB5KY%2BoD3PMvLdwvYpinFxST9Ozfs5gN7Xz1OsHE08maATqOcWEFa8NgGgz6IVP2EpGbXeeFFkDwa9VSkEPGBGVfJAZt2rg1JAP7xrZWg5b4RiO2SGtoLXuNYit7cxh2Fc50JPiOQsyW1phakFze4uxa3xDFvJRKRePdO8NY8Uv2otpsF0aopVYkKOuMSiBUVM9JMkQtCtnEp6K2Ksun48hBG8vRbXScFowi%2FKuq2sdyARbkx2Cb9l6h%2FJQk6Oclh9DZV87rbSQMqlXyUS94VgZRETw71DUV9loK7dFgk6o9GWH2KKncwVMGfZ7QoFIhvj1QGr9s4ZkVXoxXqK2lPFsy2V6WfwZDBphk43Cu46Fxq0eqdf7HnNRTE6Wmeztf9asMt9WIST1hZlGrFEAs%2BL%2FesBJUG50cuOfeR4PnuyPHlGWi4UGjK6GuMTHxPovhN5uHFtDKpbdpv0BuEh7nH0MA85hdpGAxejgq3nL%2B05iTwGJiFGrzPTv1LOPJTDlqMHGHn7NJb%2BYSalBI%2Bh70TKCdJsPfxMNG3icoGOqUBEHd%2BPzYfJtMxOMeVlGQ3MLGyCsvanPjoSfJUVcPYaPDeI2LCikxIUBtJX4wXgWMXF%2F6xJfuMuACECROKIQoJbqqNVN%2FYL01efsryUk6PDW3W5d%2FtgFz1I5CS7q%2Fkf%2F7KcBnpJZY99k1gofjjgXCgKt%2Bkepn3A3da4kjrxm5319oQHmjA8q4q2JWvWAbdPTkJQ8zvqJQrDcnAkk6h878z%2FAci8hDY&X-Amz-Signature=3d84f950a39b211ada80773d8f81122d51e9527f5357ca6ebcb46582e1138589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLISMPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtHNx7gNhw0HvhaFPo4Qs37nPywPe1PrC%2FNYav6OVq3wIgTnZd3AWwjJKVglAVv5hTViop1pDXIApmdP52Uyk1nWMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN0Ch5J9IEiCvcp9rSrcA4KX73%2Bs34nkt8znI%2B%2F0wsQWqfTqnZNy%2FIyK8MV5RIbpNHtb1Ln%2BKnjxBzYZ22a54MyD0UZUVUM%2Bsvi%2BEU%2FKb8RZ%2Fb6AweAJB5KY%2BoD3PMvLdwvYpinFxST9Ozfs5gN7Xz1OsHE08maATqOcWEFa8NgGgz6IVP2EpGbXeeFFkDwa9VSkEPGBGVfJAZt2rg1JAP7xrZWg5b4RiO2SGtoLXuNYit7cxh2Fc50JPiOQsyW1phakFze4uxa3xDFvJRKRePdO8NY8Uv2otpsF0aopVYkKOuMSiBUVM9JMkQtCtnEp6K2Ksun48hBG8vRbXScFowi%2FKuq2sdyARbkx2Cb9l6h%2FJQk6Oclh9DZV87rbSQMqlXyUS94VgZRETw71DUV9loK7dFgk6o9GWH2KKncwVMGfZ7QoFIhvj1QGr9s4ZkVXoxXqK2lPFsy2V6WfwZDBphk43Cu46Fxq0eqdf7HnNRTE6Wmeztf9asMt9WIST1hZlGrFEAs%2BL%2FesBJUG50cuOfeR4PnuyPHlGWi4UGjK6GuMTHxPovhN5uHFtDKpbdpv0BuEh7nH0MA85hdpGAxejgq3nL%2B05iTwGJiFGrzPTv1LOPJTDlqMHGHn7NJb%2BYSalBI%2Bh70TKCdJsPfxMNG3icoGOqUBEHd%2BPzYfJtMxOMeVlGQ3MLGyCsvanPjoSfJUVcPYaPDeI2LCikxIUBtJX4wXgWMXF%2F6xJfuMuACECROKIQoJbqqNVN%2FYL01efsryUk6PDW3W5d%2FtgFz1I5CS7q%2Fkf%2F7KcBnpJZY99k1gofjjgXCgKt%2Bkepn3A3da4kjrxm5319oQHmjA8q4q2JWvWAbdPTkJQ8zvqJQrDcnAkk6h878z%2FAci8hDY&X-Amz-Signature=b1556a98cdd5364768daff93421ffec200af6d735eaac5ef1b743c213ee4dde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

