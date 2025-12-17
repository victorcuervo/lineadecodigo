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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJ4VP3D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj9OWnBcT8p4%2B0kyEAdnI270cvM57equB%2FamwNuJwgKwIgRD%2BIB2Hpl3efusZiY29pbzjdpK64t1HLsKhLQA7oG%2F0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJvzdLCxRsx9bYcfgSrcA7Osj4EmEktgSb2iJODQnFJ1063zdP2W1MaB7%2FmtcRq15dY9kVsFyQSfspsBsV%2FrDy1khc9R1ZQqdrowWa1%2F%2FWaOKKRZzNogSslBtZV%2B41n1RG2RKCvEWsAFCFiTdzWl6vV4d1xb%2Fw2UpwT7S8OIrrnniGmeXZ8Ax%2B6y0%2FNNsM3IdBHGmDpqwjV9bhOY8za2zjRdnFVIFhl4DMKcDufGDQJT0%2F1YORUk0aM9e6mfls%2Fk4YHeFScxuCN0tk%2FBUyioxeiQx945Kq6MlIHurPt45Yea3FQd1L6ipb0FBsN6tZEu9BtkTzyA3bws2V8XgareG3BGeB87%2FnugyWvMMilLFJIf%2Bfr3Lw55ZFnMGEz%2FHy8XQFnMo%2BSJIUZNd3D1CVa05MXj6PEkQrNpjhNQHqmRw2XE%2BeSxnVxuECqzWeFDDtfijMKTtovofADwuxNqzqzSx9UsNjEDdg02d9euRFHXYDMpqHT6XB9dyBdTsA761PhOqmYcqwFvEOfd76Qw2LtbMPRUWYCsLWQlCj2duVjANmSwpJ4JpXkF1LABujqjCce%2F5Eo%2BdxCatYkLo63iksRXPXkFg3FIQiHTkY3phnMwelfXc3QOD93H9iKXZrFuNAqvJMa6whvHkQKeTLSpMMjOiMoGOqUBCSWHPQciNc%2FpGxYyn0%2BJXJQBgFePAyMwfjLFLnJq7DDfvL5bOxEuFoIorEQ32Xy3ncdp3tL6h0u5eF2v1mffzjoW%2F2eAGD4%2Fe%2FQbH3l%2BqrniEBtmmTPCFa%2FCuQsM3KPFMyZvrxh7K2AHY14cjslDUTE1iOlyRMqLrdjFjtTjIwMatbktCTitGNHUOmRTt62OPy3eCnBeCNrBniNG7neroqWd%2BSa6&X-Amz-Signature=48bc7c16056d54cd21d40b12d0c665635ddf464e25fc5d6903bf592791668ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJ4VP3D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj9OWnBcT8p4%2B0kyEAdnI270cvM57equB%2FamwNuJwgKwIgRD%2BIB2Hpl3efusZiY29pbzjdpK64t1HLsKhLQA7oG%2F0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJvzdLCxRsx9bYcfgSrcA7Osj4EmEktgSb2iJODQnFJ1063zdP2W1MaB7%2FmtcRq15dY9kVsFyQSfspsBsV%2FrDy1khc9R1ZQqdrowWa1%2F%2FWaOKKRZzNogSslBtZV%2B41n1RG2RKCvEWsAFCFiTdzWl6vV4d1xb%2Fw2UpwT7S8OIrrnniGmeXZ8Ax%2B6y0%2FNNsM3IdBHGmDpqwjV9bhOY8za2zjRdnFVIFhl4DMKcDufGDQJT0%2F1YORUk0aM9e6mfls%2Fk4YHeFScxuCN0tk%2FBUyioxeiQx945Kq6MlIHurPt45Yea3FQd1L6ipb0FBsN6tZEu9BtkTzyA3bws2V8XgareG3BGeB87%2FnugyWvMMilLFJIf%2Bfr3Lw55ZFnMGEz%2FHy8XQFnMo%2BSJIUZNd3D1CVa05MXj6PEkQrNpjhNQHqmRw2XE%2BeSxnVxuECqzWeFDDtfijMKTtovofADwuxNqzqzSx9UsNjEDdg02d9euRFHXYDMpqHT6XB9dyBdTsA761PhOqmYcqwFvEOfd76Qw2LtbMPRUWYCsLWQlCj2duVjANmSwpJ4JpXkF1LABujqjCce%2F5Eo%2BdxCatYkLo63iksRXPXkFg3FIQiHTkY3phnMwelfXc3QOD93H9iKXZrFuNAqvJMa6whvHkQKeTLSpMMjOiMoGOqUBCSWHPQciNc%2FpGxYyn0%2BJXJQBgFePAyMwfjLFLnJq7DDfvL5bOxEuFoIorEQ32Xy3ncdp3tL6h0u5eF2v1mffzjoW%2F2eAGD4%2Fe%2FQbH3l%2BqrniEBtmmTPCFa%2FCuQsM3KPFMyZvrxh7K2AHY14cjslDUTE1iOlyRMqLrdjFjtTjIwMatbktCTitGNHUOmRTt62OPy3eCnBeCNrBniNG7neroqWd%2BSa6&X-Amz-Signature=8db31821a219f2b832dcf1dce8cd46bef9d73f93b87b32f70325d10eb222dd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

