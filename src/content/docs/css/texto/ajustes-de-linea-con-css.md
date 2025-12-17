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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624B3VPH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDihMZfDZ50qeZF2Gg5qlx0KS%2BVlVI2%2B8L6aRxuW9Cq6AiEAtIsySVrZsxmwObx9cCX6NLcwPvFGH2ynr6lbfDQUfdYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVb8ac2XPUq9c%2Fd6yrcAzrSIMeBUQJc1hj9gCgBoIgvs%2BLEk3QsFH6iGcLYtPrq%2FDbRKiHuuESk8D9idCKf32XJymsso9CrfLWKR800qAv7axC7gUsve2Ae8fVejMOOJtDVSN1MUHnZkcNXGkf8Ch8bLAOBTkP0a3WSYMe20PQRf54g%2FhSlPJQePs5Hu1w2Sm3nIlMUqxt6Ge%2BTapaFF69VDW9M%2FgSCZczFd7D%2BGfLL3%2B3BTrOxl0XDEMslhLYV9JckNPBHugSCUvD7gtolreqkzbY8dzjxhl91vqCkPP%2B%2BzJZQfkNTguDtSLM8M7Z7UiMbf48%2BtYMUvYBDTdSjZusn1j%2FDjVknCFpB9SdofAZrGC8HVtM26BLKjtoRNZ4kW%2FTXaYjyff9KzSY9Ndw8fTJnwiTs1gfvTp5NqkiRz2rDQBCYNlusUWmHWUu2rQRhnLMbGN%2BaI7SMCWm5og0sPgkmQPRHoCp6e9lhISyvtlh1wmpoeadXOzEgjEW5cczAlh4P3AFu6DcNhdeXmilmkFmfapOvVquwGfguqpj%2BB6QqpXe0LHEPMZtYUUqjulhH%2FNJLnL9hYWksCPZBhEHHQzQM1DaOiG9BnuHebuKCNMPg8O7XihIf2WLt001Oj6%2BgTF4oNADkrMC4cPIjMKCfi8oGOqUBGB3cTP9gMQM2pSLnncMSDtSaWNt6JkepTP4OlWJht4vBOPAgYTHeiD2C%2BQh3vA6UnKzungzXeoNu0G1sSpnEAfCtsqT6zKRCQsWc%2BN70aQsLg%2BkJRAEPfrkhAPD1rWMQ9%2BONEyIHHaMY%2FKQx8K1LI9WuEpxLZqfCizp0eqb4XcJbr6JkVf857FPrdWO2tEoRNqCXV5F4wb%2FmNpG%2FrqafizM%2B4JQu&X-Amz-Signature=b1f6a1c35c1cb80bed3763c8146f2228ede1c1fbb0185f1d925ef7e1a6d58200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624B3VPH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDihMZfDZ50qeZF2Gg5qlx0KS%2BVlVI2%2B8L6aRxuW9Cq6AiEAtIsySVrZsxmwObx9cCX6NLcwPvFGH2ynr6lbfDQUfdYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVb8ac2XPUq9c%2Fd6yrcAzrSIMeBUQJc1hj9gCgBoIgvs%2BLEk3QsFH6iGcLYtPrq%2FDbRKiHuuESk8D9idCKf32XJymsso9CrfLWKR800qAv7axC7gUsve2Ae8fVejMOOJtDVSN1MUHnZkcNXGkf8Ch8bLAOBTkP0a3WSYMe20PQRf54g%2FhSlPJQePs5Hu1w2Sm3nIlMUqxt6Ge%2BTapaFF69VDW9M%2FgSCZczFd7D%2BGfLL3%2B3BTrOxl0XDEMslhLYV9JckNPBHugSCUvD7gtolreqkzbY8dzjxhl91vqCkPP%2B%2BzJZQfkNTguDtSLM8M7Z7UiMbf48%2BtYMUvYBDTdSjZusn1j%2FDjVknCFpB9SdofAZrGC8HVtM26BLKjtoRNZ4kW%2FTXaYjyff9KzSY9Ndw8fTJnwiTs1gfvTp5NqkiRz2rDQBCYNlusUWmHWUu2rQRhnLMbGN%2BaI7SMCWm5og0sPgkmQPRHoCp6e9lhISyvtlh1wmpoeadXOzEgjEW5cczAlh4P3AFu6DcNhdeXmilmkFmfapOvVquwGfguqpj%2BB6QqpXe0LHEPMZtYUUqjulhH%2FNJLnL9hYWksCPZBhEHHQzQM1DaOiG9BnuHebuKCNMPg8O7XihIf2WLt001Oj6%2BgTF4oNADkrMC4cPIjMKCfi8oGOqUBGB3cTP9gMQM2pSLnncMSDtSaWNt6JkepTP4OlWJht4vBOPAgYTHeiD2C%2BQh3vA6UnKzungzXeoNu0G1sSpnEAfCtsqT6zKRCQsWc%2BN70aQsLg%2BkJRAEPfrkhAPD1rWMQ9%2BONEyIHHaMY%2FKQx8K1LI9WuEpxLZqfCizp0eqb4XcJbr6JkVf857FPrdWO2tEoRNqCXV5F4wb%2FmNpG%2FrqafizM%2B4JQu&X-Amz-Signature=2851d8b329a820176beffc2d27762b198c9e4b7f2a10e80b9312c98440c54f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

