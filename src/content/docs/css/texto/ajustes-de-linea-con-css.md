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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2D7LPL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXmKh%2B89hywbh612wjAE2q4EGmXF9qUBofqxaRjXDNkAiEAjXefVnCJFe2AHN8qr%2BbU%2BZ88MRnN5f87WXEGxKkuR3Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJY3KMp9zbV6rRCs%2FCrcA2uo%2BPFO%2B549oq%2BJoMEOnq8eQoE7ClGa4tWSvYHCfTVHdi59WPixFoN65029A%2FwKs%2FpF4MJmuLtO8wYayBeGMFsN3k8rNqKC1FhsFLwRoz%2FlYoSJs3dXPCBJdQkxxInaHKtnzA9nnxgnPxr47aWU7dvdxcBeXU2cXfIIrcdO4HGnsb%2BRNt8FpjdOFm1nCTrmFRO9lWtDZoDpxWzoS7U69p1egmFgZrj1OKWU3TblrJq4eDpflT882n4f8ORwS%2FkrOc2CXErXISzrGGKu5U8wYFYRz1yzWgrRTpfw70rjEjBORa9uk35yqk0jpVGG%2BH4M4rUQPXUsZ1yksydB4%2F3D5gF4XYT5rW8Pd8PyIZCQ%2BLqk89NrZn9NALAYQZzvaBTMwuyki9e1XBWqKAo4BrM2iZX122gvvs7EtS5ytWOfxY8EvgjErXkIAdZZllYYtR42sij3Ke2meFypCDc%2B%2FOX75%2BRFrtqgH3%2Ba7RCw90a9k%2Fp8pKSLh32VvKXbdJBZ3Z1GYZnBpxPpBoSaHDUvXG4VgRhOO58XPE9DF0L8Sg7ZThJZhDVNwfq0qrZp6FcFaQYhC92AD6XIhjJgWqGgul%2BQjVUOMNI4r5We7FTuexvEN4Q%2BOv5njNNBe33%2BpUXpMJj7h8oGOqUBddUqO4aooA9OT%2B%2BjgYH6PDwx3EKL8sp%2Bh%2FZ8sM7E2T1E402KDwzptkn1RrySFBgwReq0p8LsC5VRAdggmu%2FDSloJm6J2WYomImQ60s5G5tDeg2pRBrvMuiOIkXn1N%2F1iMVeofQQF2vUJpv9OZ%2BpDpU7FJbKDf8w9U4SDSzreODzNmIachh7ScVQfKPo2XPSf8iPXm9k2YewJafWgUQmE3ghvw5ue&X-Amz-Signature=cb5fa8e6ea321334ebd6550c12a5fd7bef2c2261b2d79195da3750237ae77b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC2D7LPL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXmKh%2B89hywbh612wjAE2q4EGmXF9qUBofqxaRjXDNkAiEAjXefVnCJFe2AHN8qr%2BbU%2BZ88MRnN5f87WXEGxKkuR3Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJY3KMp9zbV6rRCs%2FCrcA2uo%2BPFO%2B549oq%2BJoMEOnq8eQoE7ClGa4tWSvYHCfTVHdi59WPixFoN65029A%2FwKs%2FpF4MJmuLtO8wYayBeGMFsN3k8rNqKC1FhsFLwRoz%2FlYoSJs3dXPCBJdQkxxInaHKtnzA9nnxgnPxr47aWU7dvdxcBeXU2cXfIIrcdO4HGnsb%2BRNt8FpjdOFm1nCTrmFRO9lWtDZoDpxWzoS7U69p1egmFgZrj1OKWU3TblrJq4eDpflT882n4f8ORwS%2FkrOc2CXErXISzrGGKu5U8wYFYRz1yzWgrRTpfw70rjEjBORa9uk35yqk0jpVGG%2BH4M4rUQPXUsZ1yksydB4%2F3D5gF4XYT5rW8Pd8PyIZCQ%2BLqk89NrZn9NALAYQZzvaBTMwuyki9e1XBWqKAo4BrM2iZX122gvvs7EtS5ytWOfxY8EvgjErXkIAdZZllYYtR42sij3Ke2meFypCDc%2B%2FOX75%2BRFrtqgH3%2Ba7RCw90a9k%2Fp8pKSLh32VvKXbdJBZ3Z1GYZnBpxPpBoSaHDUvXG4VgRhOO58XPE9DF0L8Sg7ZThJZhDVNwfq0qrZp6FcFaQYhC92AD6XIhjJgWqGgul%2BQjVUOMNI4r5We7FTuexvEN4Q%2BOv5njNNBe33%2BpUXpMJj7h8oGOqUBddUqO4aooA9OT%2B%2BjgYH6PDwx3EKL8sp%2Bh%2FZ8sM7E2T1E402KDwzptkn1RrySFBgwReq0p8LsC5VRAdggmu%2FDSloJm6J2WYomImQ60s5G5tDeg2pRBrvMuiOIkXn1N%2F1iMVeofQQF2vUJpv9OZ%2BpDpU7FJbKDf8w9U4SDSzreODzNmIachh7ScVQfKPo2XPSf8iPXm9k2YewJafWgUQmE3ghvw5ue&X-Amz-Signature=8cdb033ddfb5e6327a773f7ba2e17abbd1550091aa869bc0bcdb8d2d86198a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

