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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRZN3DW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzB4Wjm94X7a%2F52exZ7vQ9jQeLpzFsHjUwIQppbxsnpwIhANqnwz9j4ln5TNYiQznSFz9MSn2okLqRabizk1c4Y%2FWLKv8DCHYQABoMNjM3NDIzMTgzODA1IgxD9Y%2Fgs%2BTZdJY4ockq3AOLa7uymnVJl8J8BHe6EDFU9rr3TqaV2pqUJ%2FHRH1TOnmKCcueXLGIe2OIfYVOvwCCk%2BcoiRtvnNoyiaDTKPxO6%2BB3dtN3I2Zwi7D6Uik1UjP3uymH3wlv2vecMzd3TR70%2Ft6%2B3YIPUfEaCUwDHXT2C8iKKK3p9HU2uhadS2b%2Ba1anxPvJwg7K35TU4Ylg9rLr4vtifScoQKSmEr0PhpmJaAeMtKDkWEV2TBNZjhXt8UqBvDrYSq4a%2BBPca94MTvcBAbfiagiAxaCIUpBjdfX5a2Ww1FyfooUvcbYBQ1aRlKLQI%2B%2FG6cXTjo4sutVds5c%2F%2Fq7muM67NU8rvPpPrS%2B6MxVabZhJKgt8xS3aJIRQngah2tMGWhtIgITSayFzM7VxNulXeNsv5sU13o6WB%2FJmRTceS4V2BJMDUA%2B4Y%2FpBYBKc7%2FTPVodiNSG87gabjRP2XsPwl0m3DRpYvTvdizaIBDNfaRkQMmvy73SrfCwceZ8s2IBVTJ98o2LAAja8qoQdpgnP3OB%2BwTsmGtguM9fS%2F7ALJWOBgJj%2B%2BBvyC3ynGIkkIcH0xoG8Pj%2Bi%2FO2G3Hz3iRonkoQM90Pt1XN80gLqI7jPSWvJu%2B4Q6ZompHv353fmMMmsDVViyCBnoWzDq6YjKBjqkAaZm1GPr79RS%2FOzw4LTMTVd%2Bhg2S6G9EJ3yu9WBvqtUMmemzbUPsQFFKmGR7uzq27x8%2FMlQHVFKVI%2Fwp2iy%2FRv%2BgTnVZRTawhA9CdswHMdymk58r3QDybGuC8%2FC75a7e7gYcDMO9%2Bctl5UcMuK0K3267QScwQwJ9m%2FHEmXNJdWIABFBj%2BgTvGcNw9ICIjsAcBEFyahFH2fiC0Qz08boQn5MyO4Uu&X-Amz-Signature=a8f3aaca817637ba63c78351812cfba9b50b89c9cd3edd0e40bcdd3281e51350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRZN3DW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzB4Wjm94X7a%2F52exZ7vQ9jQeLpzFsHjUwIQppbxsnpwIhANqnwz9j4ln5TNYiQznSFz9MSn2okLqRabizk1c4Y%2FWLKv8DCHYQABoMNjM3NDIzMTgzODA1IgxD9Y%2Fgs%2BTZdJY4ockq3AOLa7uymnVJl8J8BHe6EDFU9rr3TqaV2pqUJ%2FHRH1TOnmKCcueXLGIe2OIfYVOvwCCk%2BcoiRtvnNoyiaDTKPxO6%2BB3dtN3I2Zwi7D6Uik1UjP3uymH3wlv2vecMzd3TR70%2Ft6%2B3YIPUfEaCUwDHXT2C8iKKK3p9HU2uhadS2b%2Ba1anxPvJwg7K35TU4Ylg9rLr4vtifScoQKSmEr0PhpmJaAeMtKDkWEV2TBNZjhXt8UqBvDrYSq4a%2BBPca94MTvcBAbfiagiAxaCIUpBjdfX5a2Ww1FyfooUvcbYBQ1aRlKLQI%2B%2FG6cXTjo4sutVds5c%2F%2Fq7muM67NU8rvPpPrS%2B6MxVabZhJKgt8xS3aJIRQngah2tMGWhtIgITSayFzM7VxNulXeNsv5sU13o6WB%2FJmRTceS4V2BJMDUA%2B4Y%2FpBYBKc7%2FTPVodiNSG87gabjRP2XsPwl0m3DRpYvTvdizaIBDNfaRkQMmvy73SrfCwceZ8s2IBVTJ98o2LAAja8qoQdpgnP3OB%2BwTsmGtguM9fS%2F7ALJWOBgJj%2B%2BBvyC3ynGIkkIcH0xoG8Pj%2Bi%2FO2G3Hz3iRonkoQM90Pt1XN80gLqI7jPSWvJu%2B4Q6ZompHv353fmMMmsDVViyCBnoWzDq6YjKBjqkAaZm1GPr79RS%2FOzw4LTMTVd%2Bhg2S6G9EJ3yu9WBvqtUMmemzbUPsQFFKmGR7uzq27x8%2FMlQHVFKVI%2Fwp2iy%2FRv%2BgTnVZRTawhA9CdswHMdymk58r3QDybGuC8%2FC75a7e7gYcDMO9%2Bctl5UcMuK0K3267QScwQwJ9m%2FHEmXNJdWIABFBj%2BgTvGcNw9ICIjsAcBEFyahFH2fiC0Qz08boQn5MyO4Uu&X-Amz-Signature=14fe8eba76726f70f852fd49535fa0ba16449d3935642ca75efb2ba2f31027ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

