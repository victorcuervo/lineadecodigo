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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7LTKGH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsp1YyXa0dC%2FN8n8ySRyY1p%2Ff1P7StyCVOEX%2BPn99igAIhAPdF%2BP2%2FHxsb1U2OZPY1PwydxL4U8k4su40CynwlShB6Kv8DCHYQABoMNjM3NDIzMTgzODA1Igzdsmysi0aZLKYsUcEq3APnWNhD1xDEOveId1rmZlEAXjU3z%2FIg0vDb3ZLeI54p6PM7fQg%2FgXp9Au8xil%2FeZPhLpP26UPp%2B7d1Nd1VpvSPbbQ7iwUlNgUiS2eHTDyPNwrtjTZzXMlh%2Bnb7Rzhf9Jl%2BCffmz16w6FIRr32CrvxkYFyrWyplAfmH0%2BDjmjDV4X6s5lSz3liLr9W0w7ZuolZqKTw8Fp9U74Gnkdh5MGDu9EJAfzK6112RH67q6AA6%2BVhM%2BL7%2FlB6gO2U95V%2F5VdwfsWGbl4RMok0dRcbYKIFkkaeRSUyXboM7r69WywtnSgp5YIX35XzlIZ4DAYSLWmGY3EG%2FQ9tpBBg%2F8PWbc3mlKVRNPcbc5QaCP7Q%2FYIzLbVpbpEiIBi2nre3P2nwIW%2FBs4YG%2FQXy9ZwZJcu54eRm3Fcl9sm0XHjJeFinoy4PSxyi0GCxWn52bQSz1g%2FXUyHAMz3QOhBcQ%2BOSzVZfIRa2o9JlNupvCMYeKM2RDzikBPXtC5WsMm2u6TIa2QJrtiw6yRUXas5mb7gXHdZxzqkejxgT0NKloWpjvgOc0oTjLk3yZKqq%2FkrN8Zja0B%2F3dd%2FI5i46yD3m04dnVelT%2F9YLbMB5ENMxCLtPZwzUms0bnL4nNfzlCbn3v%2BccFWMDC%2B6ojKBjqkAS4RSM%2Bos9olkOT9S%2BmgzK2WYQDRS4l13EDeNRLsL1ywJCqS9F8%2FiSU4hiu8ocr2LMC3GFvyyOGznl%2FGBj3fVFvapjT%2FoAjAjh8nTdTW2C6soppx1uLsmsEKDnrOTn2jKCNPUpBHbALrBQGwijUJW7ZBRtc%2BybDCMeCtgpFeAxk3S9QnfKws1PAiEGKcnK9tr1p9cEeqJpTd2XpPgCr1zNwmwxI%2F&X-Amz-Signature=bd17a315ea53ab024d2706be085e5b5ad02cde64da0402777ce1019815dd37e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF7LTKGH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsp1YyXa0dC%2FN8n8ySRyY1p%2Ff1P7StyCVOEX%2BPn99igAIhAPdF%2BP2%2FHxsb1U2OZPY1PwydxL4U8k4su40CynwlShB6Kv8DCHYQABoMNjM3NDIzMTgzODA1Igzdsmysi0aZLKYsUcEq3APnWNhD1xDEOveId1rmZlEAXjU3z%2FIg0vDb3ZLeI54p6PM7fQg%2FgXp9Au8xil%2FeZPhLpP26UPp%2B7d1Nd1VpvSPbbQ7iwUlNgUiS2eHTDyPNwrtjTZzXMlh%2Bnb7Rzhf9Jl%2BCffmz16w6FIRr32CrvxkYFyrWyplAfmH0%2BDjmjDV4X6s5lSz3liLr9W0w7ZuolZqKTw8Fp9U74Gnkdh5MGDu9EJAfzK6112RH67q6AA6%2BVhM%2BL7%2FlB6gO2U95V%2F5VdwfsWGbl4RMok0dRcbYKIFkkaeRSUyXboM7r69WywtnSgp5YIX35XzlIZ4DAYSLWmGY3EG%2FQ9tpBBg%2F8PWbc3mlKVRNPcbc5QaCP7Q%2FYIzLbVpbpEiIBi2nre3P2nwIW%2FBs4YG%2FQXy9ZwZJcu54eRm3Fcl9sm0XHjJeFinoy4PSxyi0GCxWn52bQSz1g%2FXUyHAMz3QOhBcQ%2BOSzVZfIRa2o9JlNupvCMYeKM2RDzikBPXtC5WsMm2u6TIa2QJrtiw6yRUXas5mb7gXHdZxzqkejxgT0NKloWpjvgOc0oTjLk3yZKqq%2FkrN8Zja0B%2F3dd%2FI5i46yD3m04dnVelT%2F9YLbMB5ENMxCLtPZwzUms0bnL4nNfzlCbn3v%2BccFWMDC%2B6ojKBjqkAS4RSM%2Bos9olkOT9S%2BmgzK2WYQDRS4l13EDeNRLsL1ywJCqS9F8%2FiSU4hiu8ocr2LMC3GFvyyOGznl%2FGBj3fVFvapjT%2FoAjAjh8nTdTW2C6soppx1uLsmsEKDnrOTn2jKCNPUpBHbALrBQGwijUJW7ZBRtc%2BybDCMeCtgpFeAxk3S9QnfKws1PAiEGKcnK9tr1p9cEeqJpTd2XpPgCr1zNwmwxI%2F&X-Amz-Signature=c0e6f25df3ff9872c07691314c55238eccfe89f4e1c5a0df7d5a8aaf10f2c725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

