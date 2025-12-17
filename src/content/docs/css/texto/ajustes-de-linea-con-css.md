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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISRYD62%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVn7%2BstulSgoIrhEWfDR9EFRFtYOEP3yNgKu%2FJQg1SFAiAIfxoHxih0LZ8su09lxAwXAqIUSqikLYLSd9A9p80sUSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZlNfd7MHO5MUnBlKtwDMScf2lduCHWgQKG1kMep1YYjCKMbpXgjxIhyS4V%2BxO1TIEep2UbY4aeQ6ATkOR5I05IW0Zftmvmh5CSuh3XlIemY7mtYfdtDCIbvhPHq6I11ES8MhgEb2PlseEoaP%2FonpzszF25iRjod3GZcSW4ccih9Fa99PJTbuN6rmRt7k0mB1pNKlbgg00E5IPEfIdAGwBgjRcm6j7ZlxNRvic%2B7ecCDmybXxeS8d1zSmfphAWUf2YV8ILAPUWIZ1%2FI3m0CtRdHcZdE3MQ5cXzdOlRm77J9htGadGcn9j9vtsI6Bckz16tAVaS2Q3x32%2FBErBeRsImh33z6FQGnIcLqKYM3sR8GHNrsLuwquXEfHMWNs%2BD4NG6cAyaRV0uTrFmpKKaQqcPipZaCKh4j3ClpzF3x9lWiSKWmcwdXhEG365NFhF1NNPUatfF1zlyxGYOKEq3GVeGIL7nCPVpv4UJuc0t60jc6F0R6Q7h0%2BP7EsNouNX7Ue6hdBhmP0nf2bSqdhHrczA8qs9pMa8QR0c31XNzZ1KWqsU8iGeKWJVM4JkQx%2FgbDXqzwug2xTz6g3ftnTTMG2EqsBgnzClGGvqdn%2BG1lG9YQiAUtCcn%2B3yvNI2%2BQeqQFu1ORw0gG0P3Zbhtgw0p%2BLygY6pgGCeGqSR%2Fx0fb0JWtb%2BFLm7YpchcOXD9NFl2Qpfgb7UnYttgFt4gRYuzPBBAZalyeyHwlE1C4Q8s9xgbi2qPzIbqzl2fu01p9svR%2BQ8c%2BTQVdN3H6kh5n0xdUIgz%2BVCSfx3cD00u599IIU%2B5N6bvLHkbXBfpT1av2fk81U%2B0tphXaOm3Xyx59y6l5a%2FoRVZPYyoguIsOdH19osRASW2qSCZFz7PuCw7&X-Amz-Signature=7b681ecf1d47cefc7204c9b282ed07a62ec62dd99648626281f3b63e03590de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISRYD62%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVn7%2BstulSgoIrhEWfDR9EFRFtYOEP3yNgKu%2FJQg1SFAiAIfxoHxih0LZ8su09lxAwXAqIUSqikLYLSd9A9p80sUSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZlNfd7MHO5MUnBlKtwDMScf2lduCHWgQKG1kMep1YYjCKMbpXgjxIhyS4V%2BxO1TIEep2UbY4aeQ6ATkOR5I05IW0Zftmvmh5CSuh3XlIemY7mtYfdtDCIbvhPHq6I11ES8MhgEb2PlseEoaP%2FonpzszF25iRjod3GZcSW4ccih9Fa99PJTbuN6rmRt7k0mB1pNKlbgg00E5IPEfIdAGwBgjRcm6j7ZlxNRvic%2B7ecCDmybXxeS8d1zSmfphAWUf2YV8ILAPUWIZ1%2FI3m0CtRdHcZdE3MQ5cXzdOlRm77J9htGadGcn9j9vtsI6Bckz16tAVaS2Q3x32%2FBErBeRsImh33z6FQGnIcLqKYM3sR8GHNrsLuwquXEfHMWNs%2BD4NG6cAyaRV0uTrFmpKKaQqcPipZaCKh4j3ClpzF3x9lWiSKWmcwdXhEG365NFhF1NNPUatfF1zlyxGYOKEq3GVeGIL7nCPVpv4UJuc0t60jc6F0R6Q7h0%2BP7EsNouNX7Ue6hdBhmP0nf2bSqdhHrczA8qs9pMa8QR0c31XNzZ1KWqsU8iGeKWJVM4JkQx%2FgbDXqzwug2xTz6g3ftnTTMG2EqsBgnzClGGvqdn%2BG1lG9YQiAUtCcn%2B3yvNI2%2BQeqQFu1ORw0gG0P3Zbhtgw0p%2BLygY6pgGCeGqSR%2Fx0fb0JWtb%2BFLm7YpchcOXD9NFl2Qpfgb7UnYttgFt4gRYuzPBBAZalyeyHwlE1C4Q8s9xgbi2qPzIbqzl2fu01p9svR%2BQ8c%2BTQVdN3H6kh5n0xdUIgz%2BVCSfx3cD00u599IIU%2B5N6bvLHkbXBfpT1av2fk81U%2B0tphXaOm3Xyx59y6l5a%2FoRVZPYyoguIsOdH19osRASW2qSCZFz7PuCw7&X-Amz-Signature=4882288256555f02013edc51767a6864cfa4185ac40b9bbf39e7adfc36cf2e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

