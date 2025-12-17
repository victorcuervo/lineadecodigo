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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3RDDKDO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FrA2XKMddexzgSb8djsf35Q59eBo5fPxHELLjwAtG4gIhAO10vdQIRrSBYmFrpJ1wM9whGa5YdogOhgLpDufX4vHxKv8DCH0QABoMNjM3NDIzMTgzODA1IgxLDrhNVBeyIXU7jFMq3AOtnEUADOuQJ8FcAKiDCRHrDRFFxeQmI5yfKuLuyP7MWtMHZ6VrKm3qtPj6Ib8%2FP%2FMcbqovE4IFKmaomDRTYZIlQJoVAJaad5Qeewrk%2F%2F%2BvGu7%2BNtctdZIZ%2Bj1q4RcPqQSCTilOH5deE3a8IJ6rLxaJpfdryR2bJvxrAFJ2pRmke0T0zwPBMpWcUYsiDjyIjAjoVNLtzqWjEVYjkWOdDDscyWc1rFXDEUfNZrjGZW%2BkWf9esM4QLf%2FAKEeWLolAydEhVs5uWEP5r7uOcEYWxusX2F5os%2Fjbk%2FCc5%2B%2BPVlxFAkEWSf%2BItnzomIurbYI2OpEsBIh8H0oL6FxeCzsMoIN5nZNezvQjwLYVWWtfxQBKJwB1tivWxA8QSO%2B5%2BtdwT9YsIHWyEBFLbSuKkfsOCSw2izkMIK5c6WrejkZVBVGM5eycfLSWoFcUTrnGDFBbkHWV%2FZo9Um3WogPSywZz%2BnTmxWNFdrUXc9dj2gkV2QFIzIxdbFX3nq74k8WOxPDkE7LHtsOtw2DrO0kNXL3zmmehtG42gbyieVPrq5xhQhKgJ44y8LGWbF%2FV6winOsaDYxC3YISieefdjwx4jbZvpICJnO6OEw4XaVbLqMInICN86rKiVjoJ%2B4gAZ%2BCQfzCxqorKBjqkAbWtdkjf4qR88w%2FMSedV0bIKVrTR0%2Bky9GahH5gdUOj0BE1hcBzzi1EZ5WHANhKsRvJTCrbannwG08qq%2FsBw%2F8WhTI3ZMij%2FTeC32RO5JDoYGHfKeNwCfbPx%2FQzKTR2WGvOSqoDSrdcVWE6r%2FpKXoR7Xhr01MXhRiKdWkTWcs684tcDfO2rStYbTaScqYtah4gIrfzWDkFU1DpTZCADhQh9KTHQw&X-Amz-Signature=e9977dc0ca27c0cae0ffdc8c0c14de6f1eeacc0e5812ffab314d4dc734c6a8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3RDDKDO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FrA2XKMddexzgSb8djsf35Q59eBo5fPxHELLjwAtG4gIhAO10vdQIRrSBYmFrpJ1wM9whGa5YdogOhgLpDufX4vHxKv8DCH0QABoMNjM3NDIzMTgzODA1IgxLDrhNVBeyIXU7jFMq3AOtnEUADOuQJ8FcAKiDCRHrDRFFxeQmI5yfKuLuyP7MWtMHZ6VrKm3qtPj6Ib8%2FP%2FMcbqovE4IFKmaomDRTYZIlQJoVAJaad5Qeewrk%2F%2F%2BvGu7%2BNtctdZIZ%2Bj1q4RcPqQSCTilOH5deE3a8IJ6rLxaJpfdryR2bJvxrAFJ2pRmke0T0zwPBMpWcUYsiDjyIjAjoVNLtzqWjEVYjkWOdDDscyWc1rFXDEUfNZrjGZW%2BkWf9esM4QLf%2FAKEeWLolAydEhVs5uWEP5r7uOcEYWxusX2F5os%2Fjbk%2FCc5%2B%2BPVlxFAkEWSf%2BItnzomIurbYI2OpEsBIh8H0oL6FxeCzsMoIN5nZNezvQjwLYVWWtfxQBKJwB1tivWxA8QSO%2B5%2BtdwT9YsIHWyEBFLbSuKkfsOCSw2izkMIK5c6WrejkZVBVGM5eycfLSWoFcUTrnGDFBbkHWV%2FZo9Um3WogPSywZz%2BnTmxWNFdrUXc9dj2gkV2QFIzIxdbFX3nq74k8WOxPDkE7LHtsOtw2DrO0kNXL3zmmehtG42gbyieVPrq5xhQhKgJ44y8LGWbF%2FV6winOsaDYxC3YISieefdjwx4jbZvpICJnO6OEw4XaVbLqMInICN86rKiVjoJ%2B4gAZ%2BCQfzCxqorKBjqkAbWtdkjf4qR88w%2FMSedV0bIKVrTR0%2Bky9GahH5gdUOj0BE1hcBzzi1EZ5WHANhKsRvJTCrbannwG08qq%2FsBw%2F8WhTI3ZMij%2FTeC32RO5JDoYGHfKeNwCfbPx%2FQzKTR2WGvOSqoDSrdcVWE6r%2FpKXoR7Xhr01MXhRiKdWkTWcs684tcDfO2rStYbTaScqYtah4gIrfzWDkFU1DpTZCADhQh9KTHQw&X-Amz-Signature=13e1bb7cf4d7f2a6c1cfd50106f910b48c98b72b6dfce4f61a815517cf9f5b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

