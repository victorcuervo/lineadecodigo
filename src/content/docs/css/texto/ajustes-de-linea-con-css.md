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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBHAJH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfFGBUXiaKKBeiL%2FRvinhgITFIYsd6tLJ2GCDhXT2xsAiAzQtB9xVBlkxzOPTYB9x8v2uhT6BFEcxDxPvcIECJG%2FyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ywc%2FDkxI4d8ajg6KtwDuk4YgJceoQz4KeqsqfT2fo7G9V7aROMOmWSIdDUDR57zl6joMIQ6lHgA1fYCaee2KMvN%2BGoYGlNRdSumiUBjPtXgaT908Bob5Ep6%2BBgR9PY8MATJzgqJeUAxRj5FPIEuyD033GmYSC3yhrmHB0ob1QAu1RC5hxgZHKyKDEBXBQB5%2Ffv%2BkGZ0Fsik5cCWu4%2B0%2Boq8fIc1e0LQJIlLeWw%2BR%2FwZOYTfuC%2FZ1SLB7DbZVS04LRPsyGYwlmUHmfwFStO8sFrWrXHwS7aQZEObffpLeHy87g%2BT9MzEBiWRikVYr80NEuHGDJWWx2ZXhrRpIBv6oEFHFJ5eS2d%2BSzdDQIBw8w3SgCkJljcDaPlK%2BbtNRCfpclRmUX7uhPqMvIHk%2BVcplO0VH18zFV%2FlzICRh1Eb8M%2BvloBBacLpyjqatV%2FstUiHJXrG1xjQnP%2BeHGAruW6OlsnKbtBl0KXD9fnhchH1Mr6IqdbnU0ttUY0YSIAb5lSVhPfmDbvq2yH3w8a%2B5SH2LbF%2FciuDdDGrgPzfhe%2Bazmah2y9e99C03pFCyUGEGo%2FnKFtlKGlB6x5SE7A6WVGe6A9wecWiouewysnC6DxRY48KmpHZJBwl5zDKbFNrLA%2FOywM23v2PWLAHQaIwvZ%2BLygY6pgE%2BhTNexzLJ%2BAEzLsC6QIT3Z5nSIsDrDQLX8Ng75QzHYF%2F1mUiZrMTmF%2F%2BLsFGuEj0TCIP4IKr7tq9uPAGrFPvDz8sOXlMJYJULHItnww8iVbR8xURBq%2FfjG%2B7apxpvXMySF%2BlrmiX9Gcumn3DTmQPbYXj9RL%2F9slx3h5abVEF7Jc9ws7guBX6ZPWOkXipTOtmGiv1pR6OnlBAB46ZUTQcA%2Fp%2Fzj1cc&X-Amz-Signature=2c5d1b28f1c573b67ef71d5378b77c9672921535ca44f57484d9bd7656e07890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJBHAJH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfFGBUXiaKKBeiL%2FRvinhgITFIYsd6tLJ2GCDhXT2xsAiAzQtB9xVBlkxzOPTYB9x8v2uhT6BFEcxDxPvcIECJG%2FyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3ywc%2FDkxI4d8ajg6KtwDuk4YgJceoQz4KeqsqfT2fo7G9V7aROMOmWSIdDUDR57zl6joMIQ6lHgA1fYCaee2KMvN%2BGoYGlNRdSumiUBjPtXgaT908Bob5Ep6%2BBgR9PY8MATJzgqJeUAxRj5FPIEuyD033GmYSC3yhrmHB0ob1QAu1RC5hxgZHKyKDEBXBQB5%2Ffv%2BkGZ0Fsik5cCWu4%2B0%2Boq8fIc1e0LQJIlLeWw%2BR%2FwZOYTfuC%2FZ1SLB7DbZVS04LRPsyGYwlmUHmfwFStO8sFrWrXHwS7aQZEObffpLeHy87g%2BT9MzEBiWRikVYr80NEuHGDJWWx2ZXhrRpIBv6oEFHFJ5eS2d%2BSzdDQIBw8w3SgCkJljcDaPlK%2BbtNRCfpclRmUX7uhPqMvIHk%2BVcplO0VH18zFV%2FlzICRh1Eb8M%2BvloBBacLpyjqatV%2FstUiHJXrG1xjQnP%2BeHGAruW6OlsnKbtBl0KXD9fnhchH1Mr6IqdbnU0ttUY0YSIAb5lSVhPfmDbvq2yH3w8a%2B5SH2LbF%2FciuDdDGrgPzfhe%2Bazmah2y9e99C03pFCyUGEGo%2FnKFtlKGlB6x5SE7A6WVGe6A9wecWiouewysnC6DxRY48KmpHZJBwl5zDKbFNrLA%2FOywM23v2PWLAHQaIwvZ%2BLygY6pgE%2BhTNexzLJ%2BAEzLsC6QIT3Z5nSIsDrDQLX8Ng75QzHYF%2F1mUiZrMTmF%2F%2BLsFGuEj0TCIP4IKr7tq9uPAGrFPvDz8sOXlMJYJULHItnww8iVbR8xURBq%2FfjG%2B7apxpvXMySF%2BlrmiX9Gcumn3DTmQPbYXj9RL%2F9slx3h5abVEF7Jc9ws7guBX6ZPWOkXipTOtmGiv1pR6OnlBAB46ZUTQcA%2Fp%2Fzj1cc&X-Amz-Signature=5a2f435046c8974917f514cf671990adde0e35c97048f76286b48065e12df16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

