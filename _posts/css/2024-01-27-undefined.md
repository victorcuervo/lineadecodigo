---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NBNKPAR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICW4VKB24XW8V0%2BCJIifUmQc3OoschIpsGeugrsi%2BHZgAiEAghgQhoLF8Jf4wnnsjb4izYS6AlGy2GNgKMumSUZjkLQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHtIEwBI1aXIRukNTSrcA4BfnXlURZ%2FgVgvKQgeJMWBP0LyXMQRS3DlG7vygwUmz%2FV%2B2oCfrGvKiLT2U1zK5rUBQjjQfCKBrZFZvPREcU1ENV3CpBni%2Bl5Tq1DX34tz%2FB3gUe%2BR%2BFZhnLSKCMbPJNv2%2FbX0pr6%2BCKmmrkz733P4%2BSM7xxILAFiUZNLCrBNWhcjOZErxT1aR1RxSkvSEr63TZY%2B0HvayDU%2FTrxtAvK5%2BlPbrwasiRuSrp9GKx5EQnQdDr%2BNXufv%2F6ufNaJ5s6n3Ou9f%2Fy05hDjMbig%2Bt0MO6DgcanvOwFeYoAbejzji%2B3VOCL2wtPAEMkYhL28tXoIa9%2FsLzSbRlZmCeYqmgr4OONrIjyiYXqZcSY79tACw4vxUBwb%2FGqq3q7YfqnQYo%2BywU5kDsJ5j5p6M0bi8JOZrv878QJGTu6vZKsdLWCbOXN1SHqDfn8ifWaW3mLI%2FCNx9zmwHbLTNpPq3Dqx9kCEQ%2BHdKqPu%2B2xg9LM9s0AyPAupvU%2FLn73EWSVD29%2F5v1Zwfcxpe7SMPnQzAcVmHGOTGZF3lh5NM3tFqSM2LXG0qTEW4kWG0rFgROavA%2BIR9KTP538t29a5X1XEazP5E4C9aUyX%2FEM4rj8tp3tnA9p8FA75xQxsAO9kW4f%2Bl8uMNmUvskGOqUBtKdd5%2BRJcKnlxPINti6hAMQxsRNTq5Suvb3I9VzKZb1%2FS3gunS1ctDpxDgT5G1AymSrApH6LmqXC3n5MmRZ4hxy%2BdkNUXexHW40CY6ZrxoNAZfSWXsx63sm5E81BQuDbFc8YdeicthgvsP2%2FvwMRqLVWQaEl3YkEaIBrEQyb85MT%2FKXG%2FkIGdTkx71GYJENQI4vNnM0iSlM7LqoC1%2B5qDrWSWQ0v&X-Amz-Signature=2bb6020953e0b4955ed3d50e8fbb49f14fc3bfe68a8f41f155abb134a8689e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NBNKPAR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICW4VKB24XW8V0%2BCJIifUmQc3OoschIpsGeugrsi%2BHZgAiEAghgQhoLF8Jf4wnnsjb4izYS6AlGy2GNgKMumSUZjkLQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHtIEwBI1aXIRukNTSrcA4BfnXlURZ%2FgVgvKQgeJMWBP0LyXMQRS3DlG7vygwUmz%2FV%2B2oCfrGvKiLT2U1zK5rUBQjjQfCKBrZFZvPREcU1ENV3CpBni%2Bl5Tq1DX34tz%2FB3gUe%2BR%2BFZhnLSKCMbPJNv2%2FbX0pr6%2BCKmmrkz733P4%2BSM7xxILAFiUZNLCrBNWhcjOZErxT1aR1RxSkvSEr63TZY%2B0HvayDU%2FTrxtAvK5%2BlPbrwasiRuSrp9GKx5EQnQdDr%2BNXufv%2F6ufNaJ5s6n3Ou9f%2Fy05hDjMbig%2Bt0MO6DgcanvOwFeYoAbejzji%2B3VOCL2wtPAEMkYhL28tXoIa9%2FsLzSbRlZmCeYqmgr4OONrIjyiYXqZcSY79tACw4vxUBwb%2FGqq3q7YfqnQYo%2BywU5kDsJ5j5p6M0bi8JOZrv878QJGTu6vZKsdLWCbOXN1SHqDfn8ifWaW3mLI%2FCNx9zmwHbLTNpPq3Dqx9kCEQ%2BHdKqPu%2B2xg9LM9s0AyPAupvU%2FLn73EWSVD29%2F5v1Zwfcxpe7SMPnQzAcVmHGOTGZF3lh5NM3tFqSM2LXG0qTEW4kWG0rFgROavA%2BIR9KTP538t29a5X1XEazP5E4C9aUyX%2FEM4rj8tp3tnA9p8FA75xQxsAO9kW4f%2Bl8uMNmUvskGOqUBtKdd5%2BRJcKnlxPINti6hAMQxsRNTq5Suvb3I9VzKZb1%2FS3gunS1ctDpxDgT5G1AymSrApH6LmqXC3n5MmRZ4hxy%2BdkNUXexHW40CY6ZrxoNAZfSWXsx63sm5E81BQuDbFc8YdeicthgvsP2%2FvwMRqLVWQaEl3YkEaIBrEQyb85MT%2FKXG%2FkIGdTkx71GYJENQI4vNnM0iSlM7LqoC1%2B5qDrWSWQ0v&X-Amz-Signature=c9b3cf6946640ab004882dee4071ea413454aaf81cc98514fa016e2cc389b7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

