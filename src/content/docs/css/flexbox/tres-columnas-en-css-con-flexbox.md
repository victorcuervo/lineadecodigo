---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQQI3FT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2Om0S7wf%2Ff9WKbB8wHSDnbd9FXoxFrMq%2FryCrZwfXdAiEAnwuF%2FNAY%2FirN1u8ULgV2lQbUT7VIIcH012MfbhBujCwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPFsOUx12Z3V7iKyyrcA7TIT25EvCeJxSdhLShX9fA6jAV961g6LYamDjWJgt%2BWAHNHNOS3%2BU08P1%2BGw08ILSI713A7x%2BWUkk%2FudADfSYn%2BgHV%2FYi7em3mvKr0joETgXdkDafcctAVUDz3CMsRZFs4tCcOuln03WQeuHWnwvnt6W4723rjMCi3QmQON258%2Fc6uvwOqhe8MU5utDyIz%2FcNZdxl4Pt4%2FKSs%2BQ468AdqBhDUPgOWNgnBH78zfpI8MxfIvz7AHpu7H3Ky7o3HWGtSQXyIMAlGXKAgdQVte9WOgyvPqruOCQgNFK9kUAwhZOPKz6xQLLe%2BHSjnLOi6PJA9zRlb7Ejp%2FMNMhRmFvHRqNjgeyK8YxEW3fyI4CpHnQ%2BjWOYMZE3ztNYmUN%2FYuubcollR0I8Ggo6LUpOzesSsrpIoQEEZVOQh%2FLqAKow2rkJKn46zNvo4u7isIcEZ1iJcYMlrBvEHDjyxTpb5itqrL4As%2BpZM1OpUowjh2ejNxgOlZN7dAv8liHQIQF5rQu8YLHaNk2dRZV0zlHlExol2eXZGhIdLCLBH0FveNigjHCoF96VOgeJToJAvzzpfoYqNzcUE2qK7HpC90xdToz8dsHbpvljVr3MKmj8ubihjCPMBrBn4by9SKgpOeioMJHl28kGOqUB5ch25gh2GNsGGpVrEQW3s11wFK4dRaG%2BIucP0nym8z%2B14u7FIAEUCr%2BI31Chv45kKDfyZe8fK3YBkX%2FEbPC5dWrlP0IFpvPNa9%2F6TKSyOKWDIlDAyUH5RwfMjOageSZ8Ia6HtpNX61MlRhIwN8LoYMOkFTzBsy5Y0X6%2BMPe7YztJM3vfzRH2beO68M68nLsDIoRP6g2t2v9A7kKNE8JNbmFIgXPi&X-Amz-Signature=0a9efe0cc20b74810559b71d5d3b8d193fe4ebc63c8d0ae0eae60e66be56f155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQQI3FT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2Om0S7wf%2Ff9WKbB8wHSDnbd9FXoxFrMq%2FryCrZwfXdAiEAnwuF%2FNAY%2FirN1u8ULgV2lQbUT7VIIcH012MfbhBujCwqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPFsOUx12Z3V7iKyyrcA7TIT25EvCeJxSdhLShX9fA6jAV961g6LYamDjWJgt%2BWAHNHNOS3%2BU08P1%2BGw08ILSI713A7x%2BWUkk%2FudADfSYn%2BgHV%2FYi7em3mvKr0joETgXdkDafcctAVUDz3CMsRZFs4tCcOuln03WQeuHWnwvnt6W4723rjMCi3QmQON258%2Fc6uvwOqhe8MU5utDyIz%2FcNZdxl4Pt4%2FKSs%2BQ468AdqBhDUPgOWNgnBH78zfpI8MxfIvz7AHpu7H3Ky7o3HWGtSQXyIMAlGXKAgdQVte9WOgyvPqruOCQgNFK9kUAwhZOPKz6xQLLe%2BHSjnLOi6PJA9zRlb7Ejp%2FMNMhRmFvHRqNjgeyK8YxEW3fyI4CpHnQ%2BjWOYMZE3ztNYmUN%2FYuubcollR0I8Ggo6LUpOzesSsrpIoQEEZVOQh%2FLqAKow2rkJKn46zNvo4u7isIcEZ1iJcYMlrBvEHDjyxTpb5itqrL4As%2BpZM1OpUowjh2ejNxgOlZN7dAv8liHQIQF5rQu8YLHaNk2dRZV0zlHlExol2eXZGhIdLCLBH0FveNigjHCoF96VOgeJToJAvzzpfoYqNzcUE2qK7HpC90xdToz8dsHbpvljVr3MKmj8ubihjCPMBrBn4by9SKgpOeioMJHl28kGOqUB5ch25gh2GNsGGpVrEQW3s11wFK4dRaG%2BIucP0nym8z%2B14u7FIAEUCr%2BI31Chv45kKDfyZe8fK3YBkX%2FEbPC5dWrlP0IFpvPNa9%2F6TKSyOKWDIlDAyUH5RwfMjOageSZ8Ia6HtpNX61MlRhIwN8LoYMOkFTzBsy5Y0X6%2BMPe7YztJM3vfzRH2beO68M68nLsDIoRP6g2t2v9A7kKNE8JNbmFIgXPi&X-Amz-Signature=fd0d317240ea164dcc18cbe7fbcda4f4dbd5fbdf127eb114147d2788e759506d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

