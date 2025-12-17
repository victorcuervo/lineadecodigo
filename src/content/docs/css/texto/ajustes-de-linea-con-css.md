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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF642HNW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2r%2FYFEnVzPnhiflVpilkkifU2aBBIowetL3%2Fs2Lo0SgIgT8%2FMsOMJe7hqz6EZcB%2BV%2BEUWieZR1SAlliiScncjBwcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLEyo%2BV47ShPSTP1CyrcA9ZbIIH8HRq2Kk95MQqjhKXStJ7599FR64OmYw%2FFetEReWsIWNBgyRrlJ5FZdrdlwojHZV3Tq1ceVsC9k1YRCq%2BuHIG0IIuL2DAGCOz2MQbYoiWz%2FdEEXos0QuispZY9iVBZdHaMAcPTuRAtv%2FWRPBne1VNtOrjzS5v3lCmLCxCkHvlJ8wJCzXEpEzlYXbrGMtv5TYVMxa7gR9UAj7RBH%2Fd%2BWS%2BoYP9dz0ku7thGfaCAjJZvLtMTr8KoBitGIts7kblxv3tlQZdJq%2F3Yp5YY01Zds%2B8%2F9rT2Rtr9PDpZmAnKb6hlyGcv7C%2BD4r7%2Fi1WnoeS44mACKGFhdqwfqBgOLj6pIbaKLrhZRl0F6tkGKjezKJTIb%2BoIFIFGhdVGmzptudzd21S5TNWXj2jUPPhZmfV%2BZqv3XcqS%2FO3caolcIl9862mHpU8odP3TVN1MiLby%2FRsIsq0POZi2VcKGweNMKWkoPnFSQYmgeea8IvBTOYKjWbc8Su%2FYraEpJXxFo4z500m7Wnyxwyg6CnwNZlPrOwpfsiLcmzLyXQbREkycbYj07%2FY1eMSyFbhwMnh1vCxt0BnJmKPn3l9DkPnyDgk5lfFLm1od97LYIShrUGShUcZKEPRfsS%2Bg00NXDO58MJj7h8oGOqUBrFRIwE2Wx4%2B5%2F8XvilNPOL%2BIHD7pE6xVtx4OcNthpjaXQ6%2BubNTu9oYwQh4nqtrV2LNckJVtZBmzU03%2B55Fpq9Vt%2FygZgeKmJ5WpQqSt0yMk6%2BS4e67b3q75v6FrpcZFTUz6pCO%2FMoajT4Wqdh%2FmA6sD5BPU7eimCn5%2FytL%2FQAW6hmwDJLy7QOJ5ANHlPjjt95GxZ2FYVoBvl4jKR5aPsJ1FeLwb&X-Amz-Signature=0fac0cc72329d30a1b471bb158624f4150cf7c619cb7abf538dee5a8daf97bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF642HNW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2r%2FYFEnVzPnhiflVpilkkifU2aBBIowetL3%2Fs2Lo0SgIgT8%2FMsOMJe7hqz6EZcB%2BV%2BEUWieZR1SAlliiScncjBwcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLEyo%2BV47ShPSTP1CyrcA9ZbIIH8HRq2Kk95MQqjhKXStJ7599FR64OmYw%2FFetEReWsIWNBgyRrlJ5FZdrdlwojHZV3Tq1ceVsC9k1YRCq%2BuHIG0IIuL2DAGCOz2MQbYoiWz%2FdEEXos0QuispZY9iVBZdHaMAcPTuRAtv%2FWRPBne1VNtOrjzS5v3lCmLCxCkHvlJ8wJCzXEpEzlYXbrGMtv5TYVMxa7gR9UAj7RBH%2Fd%2BWS%2BoYP9dz0ku7thGfaCAjJZvLtMTr8KoBitGIts7kblxv3tlQZdJq%2F3Yp5YY01Zds%2B8%2F9rT2Rtr9PDpZmAnKb6hlyGcv7C%2BD4r7%2Fi1WnoeS44mACKGFhdqwfqBgOLj6pIbaKLrhZRl0F6tkGKjezKJTIb%2BoIFIFGhdVGmzptudzd21S5TNWXj2jUPPhZmfV%2BZqv3XcqS%2FO3caolcIl9862mHpU8odP3TVN1MiLby%2FRsIsq0POZi2VcKGweNMKWkoPnFSQYmgeea8IvBTOYKjWbc8Su%2FYraEpJXxFo4z500m7Wnyxwyg6CnwNZlPrOwpfsiLcmzLyXQbREkycbYj07%2FY1eMSyFbhwMnh1vCxt0BnJmKPn3l9DkPnyDgk5lfFLm1od97LYIShrUGShUcZKEPRfsS%2Bg00NXDO58MJj7h8oGOqUBrFRIwE2Wx4%2B5%2F8XvilNPOL%2BIHD7pE6xVtx4OcNthpjaXQ6%2BubNTu9oYwQh4nqtrV2LNckJVtZBmzU03%2B55Fpq9Vt%2FygZgeKmJ5WpQqSt0yMk6%2BS4e67b3q75v6FrpcZFTUz6pCO%2FMoajT4Wqdh%2FmA6sD5BPU7eimCn5%2FytL%2FQAW6hmwDJLy7QOJ5ANHlPjjt95GxZ2FYVoBvl4jKR5aPsJ1FeLwb&X-Amz-Signature=a479119ab42b170c4e7a81cfb87d5f9840349a3bf28637787783e284ea376581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

