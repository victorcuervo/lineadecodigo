---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPUTDYW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77A5BMbIpCaaA5xXAwDFqGXxYDj49VKVQaor6lIV5xgIgeMKiK9E7PjjbHWz7PNQsxKDtauKnHvHycMB%2F7EjZ52Iq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJJGAjxiEkxeQM2saSrcA4WVokSqUsbfLYxZLVNiLI79RMmHSdmShNBOUyR4QfcXTQKUdxN4IFPYfFDj3yvsWJEVKSWStommYnYGxCrJCVyCzb7DByNXcZOuImttmernht3RP39K%2Fz955cak7YVdY4O1qmsWlAJwQSiMD5v4s4SUJgJdkewAwYc1WVvDdiNlD8gAr8O8%2FzpJazMhZ3BybosX%2ByyG64VNRBAQbFoLM%2BPVQulOBjln07tV6eB1Ba%2Fc6yHwC7PJd%2BHsH%2B8sSgQFCQp6yVAnJZKpfNghRpqPD%2FsvM9MYUeJ4I9BqvgM7uS3Ay48rKooU4i%2BaQlK78VCVTGwQT%2FHffV6AW%2B5GZfDE%2FxnhJ8GA%2BpZO8slg1B6rL2m%2FjLj6MtyP72ZvJMpEO7VcG5nfzEaAfU7VC4vR2aZOxAqRrDlJbftbG3eBHEqX6b28SAuva0ghCLbO%2FxARfdQ1An6X%2FMPse1STjg51e7QovEyL5BkEPEgWjCcl0vHB0Lzf4msUo%2FDTyrsOlnYnmh2hs2gHa036drPGlfuzUYxuvsyJK3iZi8aBlmejbj6FNjoKMfIh53xocrHZH1WII%2F%2FbGkUTRjTmTZSX%2BjZWlgZQIlcKkR1teIjdt%2BfblITGeMw6Fym8cVC5WJHDNrEwMLWnzskGOqUBvMHdf0dW%2Fw98tzKxcR8ilTacY7BvKc0kffD96ZKlSKCNF3%2BqilWWrvVOG6RmmVSD9R%2Fm2MTdz3wax69IvPPtOiNBBM04Ytmj5Mgw9KOa19U8ei4k9jYUEIgwhT%2FKZLgekcM9dgJN3IgplJEhqlgPu2ankbI8rYJ38lB3GFYWYbkJR5%2BtYKoloBoewisF%2BAAscbVAwmGTEjRW7Y9Gi9yXQQnblwn8&X-Amz-Signature=4e5e5ccd4818b5473f46947aef3e1d2c15bf29907230fbe6fbc18ff7080d7ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPUTDYW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77A5BMbIpCaaA5xXAwDFqGXxYDj49VKVQaor6lIV5xgIgeMKiK9E7PjjbHWz7PNQsxKDtauKnHvHycMB%2F7EjZ52Iq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJJGAjxiEkxeQM2saSrcA4WVokSqUsbfLYxZLVNiLI79RMmHSdmShNBOUyR4QfcXTQKUdxN4IFPYfFDj3yvsWJEVKSWStommYnYGxCrJCVyCzb7DByNXcZOuImttmernht3RP39K%2Fz955cak7YVdY4O1qmsWlAJwQSiMD5v4s4SUJgJdkewAwYc1WVvDdiNlD8gAr8O8%2FzpJazMhZ3BybosX%2ByyG64VNRBAQbFoLM%2BPVQulOBjln07tV6eB1Ba%2Fc6yHwC7PJd%2BHsH%2B8sSgQFCQp6yVAnJZKpfNghRpqPD%2FsvM9MYUeJ4I9BqvgM7uS3Ay48rKooU4i%2BaQlK78VCVTGwQT%2FHffV6AW%2B5GZfDE%2FxnhJ8GA%2BpZO8slg1B6rL2m%2FjLj6MtyP72ZvJMpEO7VcG5nfzEaAfU7VC4vR2aZOxAqRrDlJbftbG3eBHEqX6b28SAuva0ghCLbO%2FxARfdQ1An6X%2FMPse1STjg51e7QovEyL5BkEPEgWjCcl0vHB0Lzf4msUo%2FDTyrsOlnYnmh2hs2gHa036drPGlfuzUYxuvsyJK3iZi8aBlmejbj6FNjoKMfIh53xocrHZH1WII%2F%2FbGkUTRjTmTZSX%2BjZWlgZQIlcKkR1teIjdt%2BfblITGeMw6Fym8cVC5WJHDNrEwMLWnzskGOqUBvMHdf0dW%2Fw98tzKxcR8ilTacY7BvKc0kffD96ZKlSKCNF3%2BqilWWrvVOG6RmmVSD9R%2Fm2MTdz3wax69IvPPtOiNBBM04Ytmj5Mgw9KOa19U8ei4k9jYUEIgwhT%2FKZLgekcM9dgJN3IgplJEhqlgPu2ankbI8rYJ38lB3GFYWYbkJR5%2BtYKoloBoewisF%2BAAscbVAwmGTEjRW7Y9Gi9yXQQnblwn8&X-Amz-Signature=236ffc496d6ba9008226d437933a0f9a4864cce6675d175359f874bcf15faec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

