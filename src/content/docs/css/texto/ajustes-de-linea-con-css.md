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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ55BCPD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXLt7b8jEbauih2Z0zlTJrc64RLQnyqQ%2B63HFtArvqrAiEAgIJ%2Fbh2AVzNjjhr3kZhRSNz0Th4z1%2BAjqiid6fZddUwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAWYwshB99YAlRBSOSrcA3Dhxua4QquMG74H6w5pML2cBTxLezh4HcyJfrZkMaaEsgi9Hnm1hX8ntI8knut1jymkCUqOU4Rsif7P9tVSAenkR6gNJQiJiyKMGiOM%2BBshUHUwreXwOe3WD1%2B8RE7jeGjPe%2BJEY%2Fo9pR1%2BHpzs5gBaqFdazdG8BYYIahsomEvtZCkpJQ%2BLbSUoYfKhbvaNX4YLcLM0dnD9XneCyPPxx1mxSToTkAOqjcyA085Uo9hrnvMq34sdeJdHPIp2zYRV%2B%2FaK3yA6b3UUqGzhcuOMOFdsJHSm8rojh%2F256%2FwpOB6ilNhnSvAFBu36pp2oRyc%2Fv0zegXlljnT%2F8ETHTA2V3GaHir0Wd%2BnDtXCz%2FLY6F4fd0txS0bDGT1FwJA22f%2BGs8794Vghtpw7eLoaKQ3qIgcJMtpYIpKCevOXWdZWf%2FsN7h1FX2s12%2FBLdmAwcHFMRu6p3BGle81L4huUozjk3EBpwnAmMzGJqGsbOieQZvol5n3cgZhcm%2FhskksPHgV9uP5kuLlJ46q6fvZuRs1pYr7CEwrVlRrSc%2BjtcEHRToZ90A5CD0wZlUTOI%2FaqpAfg1Zm9qFgIvhgvoECuXkJtaM%2F9KxhbdvxZLY3OBxJe5mgSjhk6xe1%2FPzU%2By5SfNML7GisoGOqUBAf7%2FN%2BovI9YuiviWkQ8giJArtt47JmzMBOnLchpqfCzlnTI0mvdJio%2Fda%2FIAylr8vm%2B3kR9okPei%2FUgy9Sbdjcjnyvw5m06gMyYaOhCshXbaZPP4BRpBd3on9kj%2F8DlG7qCWlZKd0lkBkpsKG%2BFHraKhkknq5MHVT%2FrVV6ZXAbInLZ7AfXnx7ktX5PhTChVbLEXXO8KPKDQlIOkAJMa9EogYCvcH&X-Amz-Signature=0572a8ca8277f75ca6f29e9c6b289dbf54c113c09b8232c2a8b68fdd8e8a6437&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ55BCPD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXLt7b8jEbauih2Z0zlTJrc64RLQnyqQ%2B63HFtArvqrAiEAgIJ%2Fbh2AVzNjjhr3kZhRSNz0Th4z1%2BAjqiid6fZddUwq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDAWYwshB99YAlRBSOSrcA3Dhxua4QquMG74H6w5pML2cBTxLezh4HcyJfrZkMaaEsgi9Hnm1hX8ntI8knut1jymkCUqOU4Rsif7P9tVSAenkR6gNJQiJiyKMGiOM%2BBshUHUwreXwOe3WD1%2B8RE7jeGjPe%2BJEY%2Fo9pR1%2BHpzs5gBaqFdazdG8BYYIahsomEvtZCkpJQ%2BLbSUoYfKhbvaNX4YLcLM0dnD9XneCyPPxx1mxSToTkAOqjcyA085Uo9hrnvMq34sdeJdHPIp2zYRV%2B%2FaK3yA6b3UUqGzhcuOMOFdsJHSm8rojh%2F256%2FwpOB6ilNhnSvAFBu36pp2oRyc%2Fv0zegXlljnT%2F8ETHTA2V3GaHir0Wd%2BnDtXCz%2FLY6F4fd0txS0bDGT1FwJA22f%2BGs8794Vghtpw7eLoaKQ3qIgcJMtpYIpKCevOXWdZWf%2FsN7h1FX2s12%2FBLdmAwcHFMRu6p3BGle81L4huUozjk3EBpwnAmMzGJqGsbOieQZvol5n3cgZhcm%2FhskksPHgV9uP5kuLlJ46q6fvZuRs1pYr7CEwrVlRrSc%2BjtcEHRToZ90A5CD0wZlUTOI%2FaqpAfg1Zm9qFgIvhgvoECuXkJtaM%2F9KxhbdvxZLY3OBxJe5mgSjhk6xe1%2FPzU%2By5SfNML7GisoGOqUBAf7%2FN%2BovI9YuiviWkQ8giJArtt47JmzMBOnLchpqfCzlnTI0mvdJio%2Fda%2FIAylr8vm%2B3kR9okPei%2FUgy9Sbdjcjnyvw5m06gMyYaOhCshXbaZPP4BRpBd3on9kj%2F8DlG7qCWlZKd0lkBkpsKG%2BFHraKhkknq5MHVT%2FrVV6ZXAbInLZ7AfXnx7ktX5PhTChVbLEXXO8KPKDQlIOkAJMa9EogYCvcH&X-Amz-Signature=3c6a46ad479fb914807c3abe30b563fd54302d8e4a820887eae13f8a405ddb3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

