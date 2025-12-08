---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFOTJAH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg6pNJKrCN4vofdq4QxdGLI2mIbhu6EHEfyKxEUcExFgIhAMmhYWEJHl%2FYR4tSgeDArld36mOUHHg1KP5nLsiqRRgSKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnkbybf6C%2FCqPw3oq3APB6xyVnAsWXtdoT7nL1kSqv9sv6bdjPMo5oJB6tg4yAsLtyCK%2BBNPdSXMAbAS%2BEEHsTaDTFw%2FgvipaaCE1FjH2I858QeYaHg%2BhY66CdwlXFfjV6tSHtfsd6UE42OMYdJZG12hj1Lac3RFKFNb41hjjsdC6gJ3%2BbBmdElaS3C4YcAK1%2B91IK%2FTpCQA6q4d7xuyiEPkbGF9Q0OzDb7XkxCKLGpJoNaHqm7%2Bfg%2FVAUVzJU02oeb%2Bmy9dcV2Qv3%2F6cz68Vq8SnINmgpa1ZTLxCu%2BbphipNmPQS2nxmFGrCtQHTuDtGJ%2BZp1fjjom%2BDXiu5HwOcVliEIt6wxMdBc7QiOvNR8xhoZzS3T2Jv7cqUUi%2FB98iA2ad8%2FdGMe4eSy9Q1hEMcVPow1XI3Rj7OT7cEmjINIZNvl%2Br%2F34LxpPBdLVSpvDMTxmPyVXBH3RylZl1aS%2F%2FY7JxPQ8kjJpJz1HtLZM8n9g7zzJBKcG33D9vOQKmc5o4K3ZpMHhKaBs0W6JgZoWHY9htRpYylF3ZZ5MR%2BqsahdSR74jektCoKBgWEokRupicxCCI3zSJPGlWWaYLQ7f7yyXyPyRAfburmupw%2Bs4QAtMD4Iwnn8IUhyW3puF2hkaK6sG0nVuBtXBxCzzCJw93JBjqkAUHDgAvVq1%2BW4mg1colpBuy%2FwS6TYvrDl82VkzrtYiSNizgdCH1S7qmWB5IhWoJCEcQ%2B0UqR5VI099pXgPDZZf0X22fQ10h9dlgV4Nv0SifoOFwhdgrjtdpiVOlohzCPIRzWbgW21hNI3v1Op%2FR%2BHjiTYXZ3No38D%2FyenYqpDixn6rdoZuqlUMHlzLk4mQiXsqixB9tUc4UuzNzBcDrI%2BS6kfrmm&X-Amz-Signature=fe9dabcf91c9e5c5003f79579cf7e23f4f5dba2047756b7cc30a527d9dc52381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFOTJAH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg6pNJKrCN4vofdq4QxdGLI2mIbhu6EHEfyKxEUcExFgIhAMmhYWEJHl%2FYR4tSgeDArld36mOUHHg1KP5nLsiqRRgSKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOnkbybf6C%2FCqPw3oq3APB6xyVnAsWXtdoT7nL1kSqv9sv6bdjPMo5oJB6tg4yAsLtyCK%2BBNPdSXMAbAS%2BEEHsTaDTFw%2FgvipaaCE1FjH2I858QeYaHg%2BhY66CdwlXFfjV6tSHtfsd6UE42OMYdJZG12hj1Lac3RFKFNb41hjjsdC6gJ3%2BbBmdElaS3C4YcAK1%2B91IK%2FTpCQA6q4d7xuyiEPkbGF9Q0OzDb7XkxCKLGpJoNaHqm7%2Bfg%2FVAUVzJU02oeb%2Bmy9dcV2Qv3%2F6cz68Vq8SnINmgpa1ZTLxCu%2BbphipNmPQS2nxmFGrCtQHTuDtGJ%2BZp1fjjom%2BDXiu5HwOcVliEIt6wxMdBc7QiOvNR8xhoZzS3T2Jv7cqUUi%2FB98iA2ad8%2FdGMe4eSy9Q1hEMcVPow1XI3Rj7OT7cEmjINIZNvl%2Br%2F34LxpPBdLVSpvDMTxmPyVXBH3RylZl1aS%2F%2FY7JxPQ8kjJpJz1HtLZM8n9g7zzJBKcG33D9vOQKmc5o4K3ZpMHhKaBs0W6JgZoWHY9htRpYylF3ZZ5MR%2BqsahdSR74jektCoKBgWEokRupicxCCI3zSJPGlWWaYLQ7f7yyXyPyRAfburmupw%2Bs4QAtMD4Iwnn8IUhyW3puF2hkaK6sG0nVuBtXBxCzzCJw93JBjqkAUHDgAvVq1%2BW4mg1colpBuy%2FwS6TYvrDl82VkzrtYiSNizgdCH1S7qmWB5IhWoJCEcQ%2B0UqR5VI099pXgPDZZf0X22fQ10h9dlgV4Nv0SifoOFwhdgrjtdpiVOlohzCPIRzWbgW21hNI3v1Op%2FR%2BHjiTYXZ3No38D%2FyenYqpDixn6rdoZuqlUMHlzLk4mQiXsqixB9tUc4UuzNzBcDrI%2BS6kfrmm&X-Amz-Signature=3e1b87dd994de515c8b10e72329760c866b42454da4eb7040c2b7f06b63b35d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

