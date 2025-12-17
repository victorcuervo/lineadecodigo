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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUCTFXY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeMVMTq7w9b7JLdsKM4ctq5aIX465jj3LIdqUrFq7VAgIhAJdzAdTNHpVVXMvAdmLBDf%2Be6KaIFK1OfLjEbmhrPmwnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEWBefT29e3pGPnnwq3ANhLlbpdzgaAsaMTWbtqIGsV9NezT%2FQplqgAuRybOfm%2F0wyx6rxJg06zo6ycFrDhA2mVQIuPVRJxM%2BZ2tJKZpQnyBJAWh921nQLFLvl306lgUj8gwERt5cwQgCf%2B1RHTUCf9WvrRKoJYXtYbmobH7HCv%2BEN6ocjXrcVZpCaSAOjZpgnbAA0L0shrvuFPfoh7a%2FwT4KvrLjA1%2Bmoshqi44Q3B4Uhod%2FECfasD%2Fb3Zn0x0cXf2c5rB%2FSYBmSfPkm9ZuQDVPT2%2Fdlw8NQAeeiv7BzWRpadCwHacbs4c80m7jB5hKAOvWbfbspWHDSyxmjPi66MVotO1ZZ4soJfih8pDTMLCErRwDkDoVoU%2FgnQBRlQ7tX0otGw7EcBQLp2q01inW6jSdXRYfuQOvctvIfRd4mpxM2X2TNDSM%2FeKfFx6aERCaRUBMQplpK29iSUc%2FslhddKAYOkCNaC5n8NEUA079gdevwCLPII7uaz3HSrUfCwj54toDH8vrk9WiIQMAgoihByaD2i4ANQC0fRham0wMHSOOxon7DeYblryRkzgHQ1iN5gwe9JB%2B7SLyytJyhO%2BX0LAVTDHhQWA9SMBtS2Wvq4sZOi9HEBuHE36r2BcIE8PaNkEATtAPfQR3PMuTCpoIvKBjqkAca9Gkw%2BPhKgvEvjsw%2Ffl1YlnLQgOdoBEmZ06gYO028sTHzX1KjomVubLNVKIagqoL4yBo2rFkVHNSu3bMcWLm5pg0Bkg%2BmLFc%2FlPZO47ZXDZZCNVq4gcLrqbPWFSgL8ENyJExW3wIi6hdezkH9N0npD8Z8yRCWNOdIpWEGeKMiib%2BYUhqtRyKff3CgGEF7DUtI5nQVoUeOLFaj3Xb8U52rTf1uF&X-Amz-Signature=43d6754d6c01af5fa2e318f2bbea6cdb9d5b6578ed33c7750293774a63a2feff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSUCTFXY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeMVMTq7w9b7JLdsKM4ctq5aIX465jj3LIdqUrFq7VAgIhAJdzAdTNHpVVXMvAdmLBDf%2Be6KaIFK1OfLjEbmhrPmwnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEWBefT29e3pGPnnwq3ANhLlbpdzgaAsaMTWbtqIGsV9NezT%2FQplqgAuRybOfm%2F0wyx6rxJg06zo6ycFrDhA2mVQIuPVRJxM%2BZ2tJKZpQnyBJAWh921nQLFLvl306lgUj8gwERt5cwQgCf%2B1RHTUCf9WvrRKoJYXtYbmobH7HCv%2BEN6ocjXrcVZpCaSAOjZpgnbAA0L0shrvuFPfoh7a%2FwT4KvrLjA1%2Bmoshqi44Q3B4Uhod%2FECfasD%2Fb3Zn0x0cXf2c5rB%2FSYBmSfPkm9ZuQDVPT2%2Fdlw8NQAeeiv7BzWRpadCwHacbs4c80m7jB5hKAOvWbfbspWHDSyxmjPi66MVotO1ZZ4soJfih8pDTMLCErRwDkDoVoU%2FgnQBRlQ7tX0otGw7EcBQLp2q01inW6jSdXRYfuQOvctvIfRd4mpxM2X2TNDSM%2FeKfFx6aERCaRUBMQplpK29iSUc%2FslhddKAYOkCNaC5n8NEUA079gdevwCLPII7uaz3HSrUfCwj54toDH8vrk9WiIQMAgoihByaD2i4ANQC0fRham0wMHSOOxon7DeYblryRkzgHQ1iN5gwe9JB%2B7SLyytJyhO%2BX0LAVTDHhQWA9SMBtS2Wvq4sZOi9HEBuHE36r2BcIE8PaNkEATtAPfQR3PMuTCpoIvKBjqkAca9Gkw%2BPhKgvEvjsw%2Ffl1YlnLQgOdoBEmZ06gYO028sTHzX1KjomVubLNVKIagqoL4yBo2rFkVHNSu3bMcWLm5pg0Bkg%2BmLFc%2FlPZO47ZXDZZCNVq4gcLrqbPWFSgL8ENyJExW3wIi6hdezkH9N0npD8Z8yRCWNOdIpWEGeKMiib%2BYUhqtRyKff3CgGEF7DUtI5nQVoUeOLFaj3Xb8U52rTf1uF&X-Amz-Signature=5b7e29962204e238ecb2801199a06b2d0cb4073ce47a7ed3eb2158eae09deb97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

