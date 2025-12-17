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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJBAV5C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERsyjGeSLQt%2B48796J9YHORmIvmZekb%2BJn%2FT1g6tTzUAiEAgur%2FRCURyUnf2Cj7GqxGxZZ8ymoPNwARqpk6keGw%2BfMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNhhIC1DlGNPTba0NyrcAyNC3hIosnfCD8z8DY2L2H5PkmfDP%2BN5wROIN5MXBaL41Oty2cMQVVWDYCFAEK6KsDd%2FkECAewnHtc5jKWsWZu7HAYyCsZSwse%2BV2EEn27AcROcslcOd1KjTli6Tx3i8moccm8NKtlJs6Qj1nvP0Id%2Bl%2B4Vsq6ovZzf2x5SLkj5x3dCpE9nn3jVvLQP6GeEu9vICpJnbUlQDiyeccxZF8QY48WRcXt0ffdly1lqjZDvof8NOpa7aG9Xld6TWy0Xb9dMx4y%2FlDSMAkbMiWHXscegA5DZHzwP%2BpmmYZmuOzCHwFVgGF9DUp5BJtvHXIRUeUnXLjYHPSBgGsd4HPlB1%2BOPyBPUoXfFBP6iQTKLSaNCaIZosHMOA9bfYyTzm2pyqp7WF72weCMwiwhLZ1X8gwyMBHwPbQJhysHnkdUJun4NDxzfieFjSVUNfxIp34Cgaiy4wjAjTUldVM2Dr7V0%2BqGBZJrAaYxYFxfuDcEuJcb3CGhaPZ9V5I3jGZaLsL9JS8Bf0iKs4z%2BNfqc5UytwIrD%2FSkQpIKFZKApJT8yn%2Bt3s84re%2F3q0DL6lYJbdacDRmMy8HE%2BECnnCiszek3RqRKy%2Fv7btRcFpSarr7oMVRF%2FlFGzhF0J1TrTwQrM79MJ6DicoGOqUBtrsPgEfq04PqDa%2Br7ioxxD4Kzhw09SNskOkzkKs2JOu4BD9jYLDweuJTW6JFWtf6WN9e8QY8r6jQXbF%2BCHXwAdZyrVxC8ZazkgL%2Bsq1H0IGu5cyiyjAfpw54Gv4Zn%2BpZVcMuycLFaIf%2BsD0mNVWOIgBPn6RjftdJHzrrKgF0bFn%2FgjPBm5%2BZcGSL7511J2pbjo5iDIUI6GzV3SfGIMEmRPceonL7&X-Amz-Signature=b34e808020a679b2898e376ba5e5e4c0d84ee30ae3a887aa8a819d70412d9232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJBAV5C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERsyjGeSLQt%2B48796J9YHORmIvmZekb%2BJn%2FT1g6tTzUAiEAgur%2FRCURyUnf2Cj7GqxGxZZ8ymoPNwARqpk6keGw%2BfMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNhhIC1DlGNPTba0NyrcAyNC3hIosnfCD8z8DY2L2H5PkmfDP%2BN5wROIN5MXBaL41Oty2cMQVVWDYCFAEK6KsDd%2FkECAewnHtc5jKWsWZu7HAYyCsZSwse%2BV2EEn27AcROcslcOd1KjTli6Tx3i8moccm8NKtlJs6Qj1nvP0Id%2Bl%2B4Vsq6ovZzf2x5SLkj5x3dCpE9nn3jVvLQP6GeEu9vICpJnbUlQDiyeccxZF8QY48WRcXt0ffdly1lqjZDvof8NOpa7aG9Xld6TWy0Xb9dMx4y%2FlDSMAkbMiWHXscegA5DZHzwP%2BpmmYZmuOzCHwFVgGF9DUp5BJtvHXIRUeUnXLjYHPSBgGsd4HPlB1%2BOPyBPUoXfFBP6iQTKLSaNCaIZosHMOA9bfYyTzm2pyqp7WF72weCMwiwhLZ1X8gwyMBHwPbQJhysHnkdUJun4NDxzfieFjSVUNfxIp34Cgaiy4wjAjTUldVM2Dr7V0%2BqGBZJrAaYxYFxfuDcEuJcb3CGhaPZ9V5I3jGZaLsL9JS8Bf0iKs4z%2BNfqc5UytwIrD%2FSkQpIKFZKApJT8yn%2Bt3s84re%2F3q0DL6lYJbdacDRmMy8HE%2BECnnCiszek3RqRKy%2Fv7btRcFpSarr7oMVRF%2FlFGzhF0J1TrTwQrM79MJ6DicoGOqUBtrsPgEfq04PqDa%2Br7ioxxD4Kzhw09SNskOkzkKs2JOu4BD9jYLDweuJTW6JFWtf6WN9e8QY8r6jQXbF%2BCHXwAdZyrVxC8ZazkgL%2Bsq1H0IGu5cyiyjAfpw54Gv4Zn%2BpZVcMuycLFaIf%2BsD0mNVWOIgBPn6RjftdJHzrrKgF0bFn%2FgjPBm5%2BZcGSL7511J2pbjo5iDIUI6GzV3SfGIMEmRPceonL7&X-Amz-Signature=3d7dcb07c9576036fde2d052f234b34839c9677f39933bc20e2993172e968391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

