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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ASPDUL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOm1a7Q0YXfyshDcZGFO4BZS%2BBEuc%2FRE8%2BU%2BMwW7C51gIgQzjnNnpZHCc6NaleK7k4dNZXQQMjZMCws945afpeAGUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh6nW8V869r3SxSoSrcA9IrNqOzqP%2BSAIOQK0YzBcgolygCMHOacSrootR8Dze0ihA3QUERNyCmNcBoLUozMMFNbohphy2TWSc9TW%2FgTgSjeir4dyre0YQSlLwtWE2VXu%2FQ1ycqL4j%2BXB9uUStNTSI8Tpm3cUghbJ2eV7opF4wBrHioqlwEYRSh0y4QnkyaqW4qxme9qec7uHI3Vn560ZDaVK%2FSxcwK0ao56pagTYIumT6VTSl4EY8y7O3P7uLEecSIAZ5hO5%2FZdkTtZqgypV0DsOS09LC9prX7eNc6cl2iH4RV%2BD8eTortxwAdTuxOo4rGxxQ055g%2FibbQuWGI691AKYJd%2BvIn4EESgTvbEQOcZkd38sh6Qqjp0Lvvl1xgnSLpX6qJQuaRypyTk7CHAxOjza8pDatFXFsJp0xcxfs2X9c1LR8ukwZ3HKTiH16XGdwEkjfHpWJkXpb7Cku0kyRsMjGFRZuwJv%2Bi9VNUwcSVdcnH3Zv3HH857hdjM3FTa%2BiloSzWn01e6Gl%2BBSTv1sahgSI%2BipVklNDzrDLuiBAfKovijPMzqbimDvp5lYVTtzFwb0KloAE3Nmiqp2OX6QS6F%2FYWuZFwf32DZF6JnScj2gkwpPVVJCfnGGJMdKvGEPAwSoX56pnlTmhiMMyKjMoGOqUBQ1KPtj0qNNX%2FCH07GAYgVQfr4g78W3k3NJbDIagf1t3UO4bqp%2BfxDsWP4mSY334Y1l58sL1mMxX6e5m%2Fm7P4Vurf3UjoocV%2FYJB76n4be%2FsI1Ak2yJu7gaFTk9Yu2ohA1TBNYkKUF59LHGXXzZhVd1LUC7G9iLiuIkeqpvYEDoL3lZGtw9V%2FtKCwJ8inJnWxpESVoPaADwzO3rKmL6Bo13S4Coo8&X-Amz-Signature=42a04c2ff0a75df4a3de53966762e5631ff63033ec87e5340edfb052c6c51ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ASPDUL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOm1a7Q0YXfyshDcZGFO4BZS%2BBEuc%2FRE8%2BU%2BMwW7C51gIgQzjnNnpZHCc6NaleK7k4dNZXQQMjZMCws945afpeAGUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh6nW8V869r3SxSoSrcA9IrNqOzqP%2BSAIOQK0YzBcgolygCMHOacSrootR8Dze0ihA3QUERNyCmNcBoLUozMMFNbohphy2TWSc9TW%2FgTgSjeir4dyre0YQSlLwtWE2VXu%2FQ1ycqL4j%2BXB9uUStNTSI8Tpm3cUghbJ2eV7opF4wBrHioqlwEYRSh0y4QnkyaqW4qxme9qec7uHI3Vn560ZDaVK%2FSxcwK0ao56pagTYIumT6VTSl4EY8y7O3P7uLEecSIAZ5hO5%2FZdkTtZqgypV0DsOS09LC9prX7eNc6cl2iH4RV%2BD8eTortxwAdTuxOo4rGxxQ055g%2FibbQuWGI691AKYJd%2BvIn4EESgTvbEQOcZkd38sh6Qqjp0Lvvl1xgnSLpX6qJQuaRypyTk7CHAxOjza8pDatFXFsJp0xcxfs2X9c1LR8ukwZ3HKTiH16XGdwEkjfHpWJkXpb7Cku0kyRsMjGFRZuwJv%2Bi9VNUwcSVdcnH3Zv3HH857hdjM3FTa%2BiloSzWn01e6Gl%2BBSTv1sahgSI%2BipVklNDzrDLuiBAfKovijPMzqbimDvp5lYVTtzFwb0KloAE3Nmiqp2OX6QS6F%2FYWuZFwf32DZF6JnScj2gkwpPVVJCfnGGJMdKvGEPAwSoX56pnlTmhiMMyKjMoGOqUBQ1KPtj0qNNX%2FCH07GAYgVQfr4g78W3k3NJbDIagf1t3UO4bqp%2BfxDsWP4mSY334Y1l58sL1mMxX6e5m%2Fm7P4Vurf3UjoocV%2FYJB76n4be%2FsI1Ak2yJu7gaFTk9Yu2ohA1TBNYkKUF59LHGXXzZhVd1LUC7G9iLiuIkeqpvYEDoL3lZGtw9V%2FtKCwJ8inJnWxpESVoPaADwzO3rKmL6Bo13S4Coo8&X-Amz-Signature=75be0a5e52abc5525d8229c4f80dd3b35642666c431f2d50923dcd8c23f6f2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

